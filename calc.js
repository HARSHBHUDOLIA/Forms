/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b);
    document.getElementById('output').innerText=out;
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b);
    document.getElementById('output').innerText=out;
}*/

function calc(action){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(action=="add"){
        out = Number(a)+Number(b);
    }else{
        out = Number(a)-Number(b);
    }
    document.getElementById('output').innerText=out;
    var a = document.getElementById('first').value="";
    var b = document.getElementById('second').value="";
}