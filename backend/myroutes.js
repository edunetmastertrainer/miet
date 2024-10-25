const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {
  let obj = {
    name:'gopal',
    branch:'mca'
  }
  console.log(req.body);
  res.json(obj);
})
router.get('/about',(req,res)=>{
  res.send("About");
})

router.post('/login',(req,res)=>{
  res.send("In Login Page");
})

module.exports = router;