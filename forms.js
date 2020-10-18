function validatefname(){
    var name = document.getElementById('fname').value;
    if(name==' '||name==''){
        document.getElementById('fout').innerText="Please Enter First Name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

var validatepwd = () => {
    var pwd = document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of Password is 8"
            document.getElementById('ppout').style.background="red";
            document.getElementById('ppout').style.visibility="visible";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.background="orange";
            document.getElementById('ppout').style.visibility="visible";
        }
    }else{
        document.getElementById('ppout').style.background="green";
        document.getElementById('ppout').style.visibility="visible";
    }
}

function validatecpwd(){
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd!==cpwd){
        document.getElementById('cpout').innerText="Password does not match"
    }else{
        document.getElementById('cpout').innerText=""
    }
}