/*back btton code*/

const btn = document.querySelector("#BackBtn");
btn.addEventListener("click", ()=>{
    console.log("HI");
    location.href = "./registation.html";
});

const subbtn = document.querySelector("#Subbtn");
const form = document.querySelector("#regVehicle");
/*subbtn.addEventListener("click", ()=>{
    window.alert("Registration completed successfully")
});*/

function checkForm() {
    for (var i = 0; i < form.length - 2; i++) {
        if (form[i].value.length == 0) {
            return false;
        }
        //console.log(form[i].value.length);
        //console.log(form[i].value);
        //console.log(formTest[i].value);
    }
    return true;
}

function setButton(test) {
    if (test) {
        subbtn.disabled = false;
        subbtn.className = "Subbtn";


    } else {
        subbtn.disabled = true;
        subbtn.className = "disabledBTN";
    }
}
setButton(checkForm());
form.addEventListener('keyup', ()=>{setButton(checkForm())});
form.addEventListener("submit", ()=>{window.alert("regustration successfully completed!");});