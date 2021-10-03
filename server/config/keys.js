// keys.js
if (process.env.NODE_ENV === "production"){
    //klucze prod
    module.exports = require('./prod')
}else{
    //klucze dev
    module.exports = require('./dev')
}