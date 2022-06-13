const express = require('express');
let cors = require("cors");
const userRouter = require('./route/userroute');

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development')
 {
    app.use(morgan('dev'));
  }
  
  app.use(express.json());
  // app.use(express.static(`${__dirname}/public`));

//      app.use(express.urlencoded());
  
  app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    // console.log(req.headers)
    // console.log('cookies',req.cookies)
  
    next();
  });




  app.get('/',(req,res)=>{
      res.send("sfgsj");
  })



  app.use('/api/v1',userRouter);


module.exports = app;
