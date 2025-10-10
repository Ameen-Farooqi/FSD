let arr = [1,2,3,4,2,3,4,5,6,7,2,3,4];
let set = new Set();
for(let val of arr){
    set.add(val);
}
let res=[];
for(let val of set){
    res.push(val);
}
console.log(res);