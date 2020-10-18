regular expression 
> pattern to match
> they work only for strings

^$

^([a-z])$

var name="Anchal"
name.match("^([a-z])$")
null (pattern does not match)

var a = "Hi"
a.match("^([A-Za-z]{2})$")
["j", "j", index: 0, input: "j", groups: undefined]


var name="Anchal"
name.match("^([a-z]+)$")
null

var name="Anchal"
name.match("^([A-Za-z]+)$")
(2) ["Anchal", "Anchal", index: 0, input: "Anchal", groups: undefined]

var a = "Hi"
a.match("^([A-Za-z]{2,10})$")



var name="Anchal222"
name.match("^([A-Za-z$#@%0-9]+)$")

vvar phone = 8889809786
phone.toString().match("^([0-9]{10})$")
(2) ["8889809786", "8889809786", index: 0, input: "8889809786", groups: undefined]
var phone = 888980976
phone.toString().match("^([0-9]{10})$")
null


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email = "a@a.com888"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email = "aakash@developerfunnel.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["aakash@developerfunnel.com", "aakash", "developerfunnel", "com", index: 0, input: "aakash@developerfunnel.com", groups: undefined]0: "aakash@developerfunnel.com"1: "aakash"2: "developerfunnel"3: "com"groups: undefinedindex: 0input: "aakash@developerfunnel.com"length: 4__proto__: Array(0)