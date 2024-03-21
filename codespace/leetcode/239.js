/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let sum =[]
    let oksum = []
    var Maxqueue = function(num){
        const con = sum.length
        let p = 0
        let b = 0
        for(let i = sum.length ; i>=0 ; i--){
            if(sum[i-1] >= num || sum[i-1] == undefined){
                b++
                sum.push(num)
                break
            }else{
                p++
                sum.pop()
                if(i==1){break}
            }
        }
        if(p!=0 && b != 1){
            sum.push(num)
        }
        console.log(sum);
        
    }
    for(let x=0 ; x < nums.length ; x++){
        if(x >= (k-1)){
            Maxqueue(nums[x])
            oksum.push(sum[0])
        }else{
            Maxqueue(nums[x])
        }
        
    }
    
    return oksum
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));