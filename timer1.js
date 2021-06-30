const arg = process.argv.slice(2)
console.log(arg);

const timer = arg => {
  arg.forEach(i => {
    if (i > 0) {
      let delay = i * 1000;
      // console.log('does the function run')
      setTimeout(() => {
        process.stdout.write('Beep');
        process.stdout.write('\x07');
      }, delay);
    }
  })
};

timer(arg);

// for (const num of arg)
//   timer(num);
// setTimeout(() => {
//   process.stdout.write('test2');
// }, 100);

// node timer1.js 10 3 5 15 9

// process.argv
// itereate each one
// for loop
// setTimeout
// setInterval

// --

// old pseudocode
/*
set up a (countdown?) timer and use setTimeout()

set up an array of seconds and a for loop to initiate count and iterate through every single second

set up setInterval to make it ding every x seconds

edge case:
make the alarm ding every x seconds
set up setInterval to make it ding every x seconds
ignore/skip negative numbers & NaN
*/