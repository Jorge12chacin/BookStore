 
const express = require('express')
const app = express();
const morgan = require('morgan')


// Settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)


// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routers
app.use(require('./src/routers/index.js'))

// Starting Server 
  app.listen(app.get('port'), () => {
    console.log("Successfully connected");
    console.log(`http://localhost:${app.get('port')}`);
  });


  (error) => {
    print.error("Connection error");
  }
