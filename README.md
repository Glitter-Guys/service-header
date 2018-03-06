##STEPS TO START

1. npm install
2. npm run initDb
3. npm run seed
4. npm run build
5. npm run production
6. Render with:
'''
    ReactDOM.render(
        React.createElement(Header, {data:window.data}),
        document.getElementById('header')
      );
'''
7. query /event/:eventID/bundle.js