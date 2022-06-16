document.querySelector('#DesignButton').addEventListener('click',function() {
// console.log(document.querySelector('#l1').innerText);

var para = document.createElement('UL');



var content =document.querySelector('#l1').innerText;

para.style.fontSize='50px';
para.innerHTML="<li>"+content+"</li>";
console.log(content)
document.querySelector('#Covered').appendChild(para);
document.querySelector('#l1').remove();
document.querySelector('#DesignButton').remove();
})
document.querySelector('#CollectionButton').addEventListener('click',function() {
var para = document.createElement('UL');
var content =document.querySelector('#l2').innerText;
para.style.fontSize='50px';

para.innerHTML="<li>"+content+"</li>"
console.log(content)
document.querySelector('#Covered').appendChild(para);
document.querySelector('#l2').remove();
document.querySelector('#CollectionButton').remove();

})
document.querySelector('#exceptionButton').addEventListener('click',function() {

var para = document.createElement('UL');

para.style.fontSize='50px';

var content =document.querySelector('#l3').innerText;


para.innerHTML="<li>"+content+"</li>"
console.log(content)
document.querySelector('#Covered').appendChild(para);
document.querySelector('#l3').remove();
document.querySelector('#exceptionButton').remove();


})