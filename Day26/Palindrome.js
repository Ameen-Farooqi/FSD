let str='malayalam';
arr=str.split('');
start=0;
end=str.length-1;
while(start<=end){
    arr[start]=str[end];
    start++;
    end--;
    if(arr[start]==str[end]){
        console.log(arr[start],str[end]);
    }
}
console.log(str.join(arr));