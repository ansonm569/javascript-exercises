const removeFromArray = function(array, ...args) {
    let index = array;
    for (let i = 0; i < args.length; i++) {
        if (array.indexOf(args[i]) == -1) {continue};
        let index = array.indexOf(args[i]);
        let spliced = array.splice(index, 1);
    }
    return index;
};

// Do not edit below this line
module.exports = removeFromArray;
