const express = require('express');
const router = require('./myroutes');
const app = express();
const port = 3000;
const mymiddleware = (req,res,next)=>{
    
    next();
}
app.use(mymiddleware);
app.use('/',router);
app.listen(port,()=>{
  console.log(`Server running at ${port}`);
})

