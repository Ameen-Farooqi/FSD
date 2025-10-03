let arr=[6,9,3,8,4,-1,-6,9,9,8]
let k=3;
maxS=-Infinity;
maxSum(arr,k);
function maxSum(arr,k){
    let sum=0;
    for(let i=0;i<=arr.length-k;i++){
        for(let j=i;j<k+i;j++){
            sum+=arr[j];
        }
        console.log(sum);
        maxS=Math.max(maxS,sum)
        sum=0;
    }
    console.log("Max: "+maxS)
}
