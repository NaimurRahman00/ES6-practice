const arrFunc = (par1, par2, par3) => par1 + par2 + par3;
console.log(arrFunc(1, 2, 3));


// default parameter

const defaultParameter = (par1 = 0, par2 = 5) => par1 + par2;
console.log(defaultParameter(5));