const jwt=require('jsonwebtoken');

module.exports=function (req,res,next){
  //if the autherazation key is present in the header
  //if the auth is not present
  if (!req.headers.authorization){
    console.log('here we are in auth')
    return res.status(401).send('Unauthorized request')
  }
  //if it's present
  //we extract the token from the bearer token
  let token= req.headers.authorization.split(' ')[1]
  if(token =='null'){
    console.log('here we are in token')
    return res.status(401).send ('Unauthorizzed request')
  }
  //verify token
  let payload= jwt.verify(token,'secretKey')
  if(!payload){
    console.log('here we are in payload')
    return res.status(401).send('Unauthorized request')
  }
  req.userId= payload.subject
  next()
}
