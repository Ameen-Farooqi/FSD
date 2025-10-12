function fib(a,b,range){
    if(range<=0){
        return
    }
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
    range--;
    fib(a,b,range);
}
fib(0,1,10);