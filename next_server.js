const express = require('express')
const next = require('next')
const compression = require('compression')
const LRUCache = require('lru-cache');
//const morgan = require('morgan');

process.env.NODE_ENV = 'production';
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

app.prepare()
.then(() => {
  const server = express()
  server.use(compression())
  //server.use(morgan('dev'));

  server.get('/events/:id', (req, res) => {
    const actualPage = '/'
    const queryParams = { eid: req.params.id }
    console.log(queryParams);
    //app.render(req, res, actualPage, queryParams)
    renderAndCache(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log('page is cached!!');
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
