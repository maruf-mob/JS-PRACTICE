//get elements from html

var inputArea = document.getElementById('inputArea');
var total = 200;
var remain = document.getElementById('remain');

//create a function
function totalChars(){
    var totalInput = inputArea.value.length;
    total.innerHTML=totalInput;
    var totalRemain =inputArea.value.length;
    remain.innerHTML= total-totalInput;
}