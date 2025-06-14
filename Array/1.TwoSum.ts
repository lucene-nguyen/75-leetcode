function twoSum(nums: number[], target: number): number[] {
    const length = nums.length
    
    for (let index = 0; index < length; index++)  {
        // target = num1 + num2
        // num2 = target - num1(num1 = nums[indexCurrent])
        const num2 = target - nums[index];
        for(let i = index +1; i< length; i++) {
            if(nums[i] === num2){
                return [index, i];
            }
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]