
// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
findMaxEven = function(par){
    let maxEven = 0;
    for (let i=0;i<par.length;i++){
        if(par[i]%2==0 && par[i]>maxEven){
            maxEven=par[i];
        }
    }
    return maxEven;
}
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);


