function isArray(arr){
  return "[object Array]" === Object.prototype.toString.call(arr)
}

function isFunction(fn){
  return '[object Function]' === Object.prototype.toString.call(fn)
}

// deepClone

function cloneObject(src){
  var result = src;
  if(Object.prototype.toString.call(src) === "[object Array]" ){
     result = [];
    var resultLength = 0;
    for(var i = 0; i < src.length; i ++){
      result[resultLength++] = cloneObject(src[i])
    }
  }else if(Object.prototype.toString.call(src) === "[object Object]" ){
    result = {};
    for(var i in src){
      if (src.hasOwnProperty(i)) {
        result[i] = cloneObject(src[i]);
    }
    }
  }
  return result
}
var srcObj = {
  a: 1,
  b: {
      b1: ["hello", "hi"],
      b2: "JavaScript"
  }
};
var abObj = srcObj;
var tarObj =  cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]); 