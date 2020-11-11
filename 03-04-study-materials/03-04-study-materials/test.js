// const main = {
//     name: 'jscoder',
//     age: 22
// }

const { resolve } = require("path");

// const handler = {
//     get:function(obj, prop){
//         if(prop in obj){
//             return obj[prop]
//         }
//         return `Property ${prop} does not exist`
//     }
// }
// const proxy = new Proxy(main, handler)
// console.log(proxy.name)
// console.log(proxy.location)


// function red(){
//     console.log('red - ',new Date());
// }
// function green(){
//     console.log('green - ',new Date());
// }
// function yellow(){
//     console.log('yellow - ',new Date());
// }

// const promisify = function(f, time){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             f()
//             resolve()
//         }, time)
//     })
// }
// function loop(){
//     promisify(red,3000).then(res=>{
//         return promisify(yellow,2000)
//     }).then(res=>{
//         return promisify(green,1000)
//     }).then(res=>{
//         loop()
//     })
// }
// loop()

// 方法二(Promise实现)
// function tic(timer,callback){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             callback();
//             resolve();
//         },timer);
//     });
// }
// let promise = new Promise(function(resolve,reject){
//     resolve();
// });
// function loop(){
//     promise.then(function(){
//         return tic(3000,red);
//     }).then(function(){
//         return tic(2000,green);
//     }).then(function(){
//         return tic(1000,yellow);
//     }).then(function(){
//         loop();
//     });
// }
// loop();


//3-------------------

// var User = {
//     count:1,
//     action: {
//         getCount: function(){
//             return this.count
//         }
//     }
// }

// var getCount=User.action.getCount;
// setTimeout(()=>{
//     console.log('result1',User.action.getCount())
// })
// console.log('result2',getCount())

