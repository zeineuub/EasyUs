// Express require bish tekhdem bil fonction inteha like router
const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(_dirname +'/dist'));

//el port
const PORT=process.env.Port||4200;

//listen to the port
app.listen(PORT,()=>console.log(`Server started at ${PORT}`));



//PathhLocationStrategy
 app.get('/*',function(req,res){
   res.sendFile(path.join(_dirname + '/dist/index.html'));
 })
