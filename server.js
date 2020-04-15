// Express require bish tekhdem bil fonction inteha like router
const express=require('express');
const app=express();
const path=require('path');

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used


  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });




//el port
const PORT=process.env.Port||4200;

//listen to the port
app.listen(PORT,()=>console.log(`Server started at ${PORT}`));


