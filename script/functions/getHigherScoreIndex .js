
let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
getHighestScoreIndex = function(score){
    let bestStudentIndex=0;
    for (let index = 0; index < score.length; index++) {
        if (score[index]>bestStudentIndex) {
            bestStudentIndex=index;
        }
    }
    return bestStudentIndex;
}


// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

let highestIndex=getHighestScoreIndex(scores);

let stName=students[highestIndex];
let stScore=scores[highestIndex];

console.log(`${stName} has the highest score: ${stScore}`);
// expected output
// Maria has the higest score: 6


