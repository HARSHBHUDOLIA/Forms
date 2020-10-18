id  > document.getElementById('id')
class > document.getElementsByClassName('classname')
tagname> document.getElementsByTagName('tagname')


document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I m form Edureka"
"I m form Edureka"
document.getElementsByTagName('h1')[0].style.color="green"
"green"
document.getElementsByTagName('h1')[0].style.color="blue"
"blue"

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5__proto__: HTMLCollection
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"
document.getElementsByClassName('scroll')[0].style.visibility="Hidden"
"Hidden"
document.getElementsByClassName('scroll')[0].style.visibility="visible"
"visible"