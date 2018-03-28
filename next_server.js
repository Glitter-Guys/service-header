const express = require('express')
const next = require('next')
const compression = require('compression')
const morgan = require('morgan');

process.env.NODE_ENV = 'production';
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(compression())
  server.use(morgan('dev'));

  server.get('/events/:id', (req, res) => {
    const actualPage = '/'
    const queryParams = { eid: req.params.id }
    app.render(req, res, actualPage, queryParams)
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
