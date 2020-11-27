//Generate Number 0
document.getElementById("num0").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 0;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(0);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 1
document.getElementById("num1").addEventListener("click", (e) =>{
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 1;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(1);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 2
document.getElementById("num2").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 2;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(2);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 3
document.getElementById("num3").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 3;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(3);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 4
document.getElementById("num4").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 4;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(4);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 5
document.getElementById("num5").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 5;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(5);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 6
document.getElementById("num6").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 6;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(6);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 7
document.getElementById("num7").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 7;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(7);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 8
document.getElementById("num8").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 8;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(8);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate Number 9
document.getElementById("num9").addEventListener("click", (e) => {
    if (xy === 1){
        document.getElementById("liveNumbers").innerHTML = "";
        xy=0;
    }
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 9;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(9);
    if (result!==0 && repeatOP === 1){
        result = 0;
        repeatOP = 0;
        document.getElementById("equalResult").innerHTML = "";
    }
    operate(n, n2, operation);
});

//Generate decimal
document.getElementById("numPoint").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = ".";
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(".");
});

//STORING THE NUMBERS
let counter = "";
let n;
let n2 = 0;
let result = 0;
let operation = "";

function storeNum (x){
    counter = counter + x;
    n = Number(counter);
    //console.log(n);
}


//************Calling the Operators*****************
let repeatOP = 0;
let xy = 0;

function operate(var1, var2, op){

    if (op === "+"){
        var2 = var2 + var1;
        result = var2;
        
    }
    if (op === "-"){
        var2 = var2 - var1;
        result = var2;
    }
    if (op === "x"){
        var2 = var2*var1;
        result = var2;
    }
    if (op === "/"){
        if (var1 === 0){
            document.getElementById("equalResult").innerHTML = "Hell No";
            document.getElementById("liveNumbers").innerHTML = "";
            var2 = 0;
            result = var2;
        }else {
            var2 = var2/var1;
            result = var2;
        }
    }
   console.log(result);
}

//PERCENTAGE
document.getElementById("percentage").addEventListener("click", (e) =>{
    let percentage = document.createElement("span");
    percentage.innerHTML = "%";
    document.getElementById("liveNumbers").appendChild(percentage);
    if (result!==0){
        if (operation === "+"){
            result = n2 + (n/100)*n2;
        }
        if (operation === "-"){
            result = n2 - (n/100)*n2;
        }
        if (operation === "x"){
            result = n2*(n/100);
        }
        if (operation === "/"){
            result = n2/(n/100);
        }
    }
    else {
        result = (n/100);
    }
    console.log(result);
    counter = "";
    operation = "";
    repeatOP = 1;
    xy = 1;
});

//SUM
document.getElementById("opSum").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "+";
    operation = "+";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    result === 0 ? n2 = n : n2 = result;
    counter = "";
    if (result != 0){
        document.getElementById("liveNumbers").innerHTML ="";
        let liveCleaner = document.createElement("span");
        liveCleaner.innerHTML = result + "+";
        document.getElementById("liveNumbers").appendChild(liveCleaner);
        document.getElementById("equalResult").innerHTML = "";
        xy=0;
    }
});

//REST
document.getElementById("opRest").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "-";
    operation = "-";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    result === 0 ? n2 = n : n2 = result;
    counter = "";
    if (result != 0){
        document.getElementById("liveNumbers").innerHTML ="";
        let liveCleaner = document.createElement("span");
        liveCleaner.innerHTML = result + "-";
        document.getElementById("liveNumbers").appendChild(liveCleaner);
        document.getElementById("equalResult").innerHTML = "";
        xy=0;
    }
});

//MULTIPLICATION
document.getElementById("opX").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "x";
    operation = "x";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    result === 0 ? n2 = n : n2 = result;
    counter = "";
    if (result != 0){
        document.getElementById("liveNumbers").innerHTML ="";
        let liveCleaner = document.createElement("span");
        liveCleaner.innerHTML = result + "x";
        document.getElementById("liveNumbers").appendChild(liveCleaner);
        document.getElementById("equalResult").innerHTML = "";
        xy=0;
    }
});

//DIVISION
document.getElementById("opDIV").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "&#247";
    operation = "/";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    result === 0 ? n2 = n : n2 = result;
    counter = "";
    if (result != 0){
        document.getElementById("liveNumbers").innerHTML ="";
        let liveCleaner = document.createElement("span");
        liveCleaner.innerHTML = result + "&#247";
        document.getElementById("liveNumbers").appendChild(liveCleaner);
        document.getElementById("equalResult").innerHTML = "";
        xy=0;
    }
});

//EQUAL BUTTON RESULT
document.getElementById("equal-button").addEventListener("click", (e) =>{
    let result_op = document.getElementById("equalResult");
    if (result%1!=0){
        result_op.innerHTML = "= " + result.toFixed(2);
    }else{
        result_op.innerHTML = "= " + result;
    }
    document.getElementById("liveNumbers").innerHTML = "";
    counter = "";
    operation = "";
    repeatOP = 1;
});

//CLEANER
document.getElementById("btn-cleaner").addEventListener("click", (e) =>{
    result = 0;
    n2 = 0;
    counter = "";
    operation = "";
    document.getElementById("liveNumbers").innerHTML = "";
    document.getElementById("equalResult").innerHTML = "";
});