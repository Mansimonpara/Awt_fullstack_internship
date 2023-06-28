//using function name
function calAddition(num1,num2){
    return num1 + num2;
}
document.write(calAddition(10,7));



//without function name-using variable declartion
const Square = function(Number){
    return Number * Number;
};
const x = Square(4);
document.write(x);


//arrow function
const a = ["Reeya", "Krushita", "Mansi", "Madhvi"];

const a2 = a.map(function (s) {
    return s.length;
});

document.write("Normal way ", a2);
const a3 = a.map((s) => s.length);
document.write("Using Arrow Function", a3);

