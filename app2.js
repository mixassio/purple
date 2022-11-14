const start = performance.now()

// const crypto = require('crypto');
// process.env.UV_THREADPOOL_SIZE = 8;
// for (let i = 0; i < 50; i++) {
//   crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
//     console.log(performance.now() - start)
//   })
// }

const https = require('https');

for (let i = 0; i < 50; i++) {
  https.get('https://yandex.ru', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(performance.now() - start)
    });
  })
}