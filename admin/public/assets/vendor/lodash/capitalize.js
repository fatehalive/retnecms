var toString=require("./toString"),upperFirst=require("./upperFirst");function capitalize(r){return upperFirst(toString(r).toLowerCase())}module.exports=capitalize;