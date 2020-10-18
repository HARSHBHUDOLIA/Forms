if(condition){
    //logic
}else{
    //logic
}

var a = 10
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var name="John"

if(name.toLowerCase()=="john"){
    console.log(`You are admin`)
}else if(name=="Bhumika"){
    console.log(`You are super admin`)
}else if(name=="Avi"){
    console.log(`You are system admin`)
}
else{
    console.log(`You are user`)
}

///////////////
var a = 10
if(a){
    console.log(`Hiii`) 
}else{
    console.log(`Bie`) 
}

VM107:3 Hiii
undefined
var a = 0
if(a){
    console.log(`Hiii`) 
}else{
    console.log(`Bie`) 
}

VM112:5 Bie
undefined
var a = ''
if(a){
    console.log(`Hiii`) 
}else{
    console.log(`Bie`) 
}

VM120:5 Bie

/////////
truthy > any number except 0 , "Fgbf", true
falsy > 0,false, null, undefined


///////////////////////
Ternery> single line if else
/////////

var a = 10
a>10?"hii":"Bie"
"Bie"
var a = 10
a==10?"hii":"Bie"
"hii"

var a = 10
a==10?a+1:a-1
11

/