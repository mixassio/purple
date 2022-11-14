const fs = require('fs')
const start = performance.now();

console.log('before all')

setTimeout(() => {
  console.log(performance.now() - start, "timeout 1000");
}, 1000);

setImmediate(() => {
  console.log(performance.now(),'Immediate')
})

setTimeout(() => {
  console.log(performance.now(), '0 timeout')
}, 0)

setTimeout(() => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log('Done!');
  Promise.resolve().then(() => {
    console.log('Promise insite timeout')
  })
  process.nextTick(() => {
    console.log('nextTick insite timeout')
  })
}, 0)

fs.readFile(__filename, () => {
  console.log(performance.now(), 'file readed')
})

Promise.resolve().then(() => {
  console.log('Promise')
})

process.nextTick(() => {
  console.log('nextTick')
})

console.log('after all')
