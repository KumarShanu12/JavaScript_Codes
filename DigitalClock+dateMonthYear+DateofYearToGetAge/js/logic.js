var date = new Date();

document.querySelector('#btn1').addEventListener('click',function(){

	alert("Todays date is "+date.getDate());


})
document.querySelector('#btn2').addEventListener('click',function(){

	alert("This month is "+date.getMonth());


})
document.querySelector('#btn3').addEventListener('click',function(){

	alert("This is "+date.getFullYear());


})


 document.querySelector('#dd').innerHTML="<l>"+"Welcome"+"</l>";
   