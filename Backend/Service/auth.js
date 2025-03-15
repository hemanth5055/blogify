const jwt = require("jsonwebtoken")
function getKey(user){
    const token = jwt.sign(user,process.env.JWT_KEY)
    return token;
}

function validateKey(token){
    return jwt.verify(token,process.env.JWT_KEY)
}
module.exports  = {getKey,validateKey}