const sumAll = function(num1, num2) {
    if (num1 < 0 || typeof num1 != "number" || num2 < 0 || typeof num2 != "number") {
        return ("ERROR")
    }
    let small = 0;
    let large = 0;
    if (num1 < num2) {
        small = num1;
        large = num2;
    } 
    else {
        small = num2;
        large = num1;
    }
    let sum = 0;
    for (let i = small; i <= large; i++) {
        sum += i;   
    }
    return sum;
};


// 2 7

// 2 + 3 + 4


// Do not edit below this line
module.exports = sumAll;


//Hints

//Think about how you would do this on pen and paper and then how you might translate that process into code:
//- make sure you pay attention to the function parameters
//- create a variable to hold the final sum
//- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
//- on each iteration add the number to the sum
//- return the sum after finishing the loop