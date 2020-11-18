//Generate Number 0
document.getElementById("num0").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 0;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(0);
});

//Generate Number 1
document.getElementById("num1").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 1;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(1);
});

//Generate Number 2
document.getElementById("num2").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 2;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(2);
});

//Generate Number 3
document.getElementById("num3").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 3;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(3);
});

//Generate Number 4
document.getElementById("num4").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 4;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(4);
});

//Generate Number 5
document.getElementById("num5").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 5;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(5);
});

//Generate Number 6
document.getElementById("num6").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 6;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(6);
});

//Generate Number 7
document.getElementById("num7").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 7;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(7);
});

//Generate Number 8
document.getElementById("num8").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 8;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(8);
});

//Generate Number 9
document.getElementById("num9").addEventListener("click", (e) => {
    let liveNum = document.createElement("span");
    liveNum.innerHTML = 9;
    document.getElementById("liveNumbers").appendChild(liveNum);
    storeNum(9);
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
let n2=0;
let result;
let operation;

function storeNum (x){
    counter = counter + x;
    n = Number(counter);
    console.log(n);
}


//************Calling the Operators*****************


//SUM
document.getElementById("opSum").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "+";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    n2 = n2 + n;
    counter = "";
    operation = "+";
});

//REST
document.getElementById("opRest").addEventListener("click", (e) =>{
    let liveOperator = document.createElement("span");
    liveOperator.innerHTML = "-";
    document.getElementById("liveNumbers").appendChild(liveOperator);
    n > n2 ? n2 = n - n2 : n2 = n2 - n;
    counter = "";
    operation = "-";
});

//EQUAL BUTTON RESULT
document.getElementById("equal-button").addEventListener("click", (e) =>{
    if (operation === "+"){
        result = n+n2;
        let resultsum = document.createElement("div");
        resultsum.innerHTML = "= " + result;
        document.getElementById("equalResult").appendChild(resultsum);
        
        console.log(result);
    }

    if (operation === "-"){
        n > n2 ? result = n - n2 : result = n2 - n;
        let resultsum = document.createElement("div");
        resultsum.innerHTML = "= " + result;
        document.getElementById("equalResult").appendChild(resultsum);
        
        console.log(result);
    }
    
});