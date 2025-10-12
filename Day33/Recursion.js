function even(start,end){
    if(start>end){
        return
    }
    if(start%2==0){
    console.log(start)
    }
    start++;
    even(start,end)
}
even(1,20)