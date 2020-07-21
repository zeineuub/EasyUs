const jwt = require('jsonwebtoken');


module.exports = function (req,res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('invalid token')
    }
    req.userId = payload.subject
    next()
}
/*module.exports = function (req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('access denied');

    try {
        const verified = jwt.verify(token,'ehdzjaqksrgtg');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('invalid token');
    }
}*/
