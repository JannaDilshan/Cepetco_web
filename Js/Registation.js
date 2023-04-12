

const form = document.querySelector("form"),
    nextbtn = form.querySelector("#nextbtn"),
    BackBtn = form.querySelector("#BackBtn"),
    Subbtn = form.querySelector(".Subbtn"),
    subMit = form.querySelectorAll(".Second inpuut "),
    firstfrom = form.querySelectorAll(".first input");




//console.log(firstfrom.item(7).value);

const formTest = document.querySelector("#personal");
console.log(formTest);
//formTest.length
function checkForm() {
    for (var i = 0; i < formTest.length - 1; i++) {
        if (formTest[i].value.length == 0) {
            return false;
        }
        console.log(formTest[i].value.length);
        //console.log("Please");
        //console.log(formTest[i].value);
    }
    return true;
}

//console.log(checkForm());
function setButton(test) {
    if (test) {
        nextbtn.disabled = false;
        nextbtn.className = "nextbtn";


    } else {
        nextbtn.disabled = true;
        nextbtn.className = "disabledBTN";
    }
}

setButton(checkForm());

function chkPW(){
    if (formTest[10].value != formTest[11].value) {
        document.getElementById("passwordMatch").innerHTML = "Password does not match";
        return false;
    }else{
        document.getElementById("passwordMatch").innerHTML = "";
        return true;
    }
}

//formTest[11].addEventListener("keyup", chkPW)
//console.log();
const frm1 = document.getElementById("first");
const frm2 = document.getElementById("second");

function FormTwo(){if(!nextbtn.disabled){
    console.log(nextbtn.disabled);
    frm1.style.visibility = "hidden";
    frm2.style.visibility = "visible";
}}
formTest.addEventListener('keyup', ()=>{setButton(checkForm() && chkPW())}); 
//addEventListener()
// setInterval(setButton, 100);
//setButton();

