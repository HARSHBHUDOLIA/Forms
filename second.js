es5> Ecma Script5
es6> Ecma Script6

////////////////////////
//es5
function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(5,8)
13
function add(a,b,c,d){
    return a+b+c-d 
}
undefined
add(5,8,7,3)
17
add("hi","i","am","doingjavascript")
NaN
function add(a,b,c,d){
    return a+b+c+d 
}
undefined
add("hi","i","am","doingjavascript")



function test(a,b){
    return a,b
}

function test(a,b){
    var data = [a,b]
    return data
}
undefined
test(2,3)
(2) [2, 3]

function isEven(userinput){
    var output;
    if(userinput%2==0){
        output = `Number ${userinput} is even`
    }else{
        output = `Number ${userinput} is odd`
    }
    return output

}

undefined
isEven(10)
"Number 10 is even"
isEven(11)
"Number 11 is odd"

///es5
function add(a,b,c,d){
    return a+b+c+d 
}

add(1,2)

//es6
var add = (a,b) => { return a+b}
add(2,4)