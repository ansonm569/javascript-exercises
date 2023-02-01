const convertToCelsius = function(temp) {
  return round((temp - 32)*(5/9));
};

const convertToFahrenheit = function(temp) {
  return round((temp * (9/5)) + 32);
};

function round(n) {
  return Math.round(n * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


//
//Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.

//This exercise asks you to create more than one function so the `module.exports` section of the spec file looks a little different this time.  Nothing to worry about, we're just packaging both functions into a single object to be exported.

//## Hints
//- You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

//- Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).
