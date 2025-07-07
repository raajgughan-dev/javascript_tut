const a = 100;
const b = 'RaajGughan';
const c = null;

console.log(c || b);

console.log(a && c)


function defineName(name) {
    console.log(`Hello, ${name || 'visitor'}!`);
}
defineName("");
