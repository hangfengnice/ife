function isArray(arr){
  return "[object Array]" === Object.prototype.toString.call(arr)
}

function isFunction(fn){
  return '[object Function]' === Object.prototype.toString.call(fn)
}

// deepClone

// function cloneObject(src){
//   var result = src;
//   if(Object.prototype.toString.call(src) === "[object Array]" ){
//      result = [];
//     var resultLength = 0;
//     for(var i = 0; i < src.length; i ++){
//       result[resultLength++] = cloneObject(src[i])
//     }
//   }else if(Object.prototype.toString.call(src) === "[object Object]" ){
//     result = {};
//     for(var i in src){
//       if (src.hasOwnProperty(i)) {
//         result[i] = cloneObject(src[i]);
//     }
//     }
//   }
//   return result
// }
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

// 数组去重

function uniqArray(arr){
  var obj = {}
  var ret = []
  var len = arr.length
  for(var i = 0; i < len; i ++){
    var key = arr[i]
    if(!obj[key]){
      ret.push(arr[i]);
      obj[key] = true
    }
  }
  return ret
}

// 去掉头尾空字符串

function simpleTrim(str){
  return str.trim()
}


//实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn){
  for(var i = 0; i < arr.length; i ++){
    fn(arr[i], i)
  }
}


// 获取一个对象里面第一层元素的数量，返回一个整数

function getObjectLength(obj){
  
}


