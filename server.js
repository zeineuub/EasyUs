// Express require bish tekhdem bil fonction inteha like router
const express=require('express');
const app=express();
const path=require('path');

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used


  // Serve only the static files form the dist directory
app.use(express.static(__dirname + './dist/project-easy-us'));




// Start the app by listening on the default Heroku port
const PORT=process.env.Port||3000;

//listen to the port
app.listen(PORT,()=>console.log(`Server started at ${PORT}`));


