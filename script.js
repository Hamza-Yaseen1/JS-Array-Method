const nam = ["Hamza"];
function push(){
    console.clear();
    const newName = prompt("Enter name");
    nam.push(newName);
    console.log(nam);
}

function unShift(){
    console.clear();
    const newName = prompt("Enter name");
    nam.unshift(newName);
    console.log(nam);
}
function pop(){
    console.clear();
    nam.pop();
    console.log(nam);
}
function shift(){
    console.clear();
    nam.shift();
    console.log(nam)
}