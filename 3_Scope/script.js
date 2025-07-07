const name = "RaajGughanPrime" // Global Scope

function logGlobalName() {
    const name = "This is your name";
    if (name) {
        const name = "Welcome back RaajGughanPrime";
        console.log(name)
    }
    console.log(name);
}

console.log(name);
logGlobalName();