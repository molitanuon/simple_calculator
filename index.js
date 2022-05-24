let newNum = document.getElementById("result");
let num = ""; 
let operationSetted = false;
let action = ""

function setNumber(click_value){
    if(operationSetted == true){
        num = newNum.value;
        newNum.value = ""
        operationSetted = false
    }
    newNum.value +=  click_value;
    // alert(click_id);
}

function setOperator(click_id){
    action = click_id;
    operationSetted = true;
}

function calc(){
    let x = num + action + newNum.value;
    newNum.value = eval(x);
    console.log(newNum.value);
}

function clr(){
    document.getElementById("result").value = ""
    operation = false;
    action = "";
}


