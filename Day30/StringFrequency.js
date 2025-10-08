const prompt = require('prompt-sync')();
let str = prompt('Enter your first String: ');
let arr = [];
for (let i = 0; i < 26; i++) {
    arr[i] = 0;
}
console.log(`Our Stirng: ${str}`);
for (let i = 0; i < str.length; i++) {
    let idx = str.charCodeAt(i)-97;
    arr[idx]++;
}
for(let i=0;i<26;i++){
    if(arr[i]!=0){
        console.log(`${String.fromCharCode(i+97)} : ${arr[i]}`)
    }
}