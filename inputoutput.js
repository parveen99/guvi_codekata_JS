const readline = require('readline')

const inp = readline.createInterface({
    input:process.stdin
});

var input_var;

inp.on("line" ,(data) => {
    input_var = data;
});

inp.on("close" , () =>{
    console.log(input_var);
});
