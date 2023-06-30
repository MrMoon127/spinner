// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(animation[i]);
  }, i * 200 + 100);
}

setTimeout(() => {
  console.log();
}, animation.length * 200 + 100);