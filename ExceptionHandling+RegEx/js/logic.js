const ex1  ='The quick brown fox jumped over the lazy dog'
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';



document.querySelector('#btn1').addEventListener('click',function(){

	
	var str1=/\b\w{3}\b/g;

      var st = ex1.match(str1)
      document.querySelector('#res').innerHTML=st.join(" ");
      gsap.from(".gg",{x:300,ease:'bounce',duration:5});


})
document.getElementById('btn2').addEventListener('click',function(){
	// console.log("work")
var pattern = /\d+/gm;
var strr= ex2.replace(pattern," ");
      document.getElementById('res').innerHTML=strr;
      gsap.from(".gg",{x:300,ease:'bounce',duration:5});


})
document.getElementById('btn3').addEventListener('click',function(){
	// console.log("work")
var pattern = /[\$]\s*[0-9.]+/gmi;
var strr= ex3.match(pattern);
      document.getElementById('res').innerHTML=strr;
      gsap.from(".gg",{x:300,ease:'bounce',duration:5});


})
document.getElementById('btn4').addEventListener('click',function(){
	// console.log("work")
var pattern = /((\b|\+[0-9]{1,2}\s*)([0-9]\s*){10}\b)/gm;
var strr= ex4.match(pattern);
      document.getElementById('res').innerHTML=strr;
      gsap.from(".gg",{x:300,ease:'bounce',duration:5});
})
document.getElementById('btn5').addEventListener('click',function(){
	// console.log("work")
var pattern =/\s+[0-9a-z.]+\@\w+\.\w{2,3}\b/gmi;
var strr= ex5.match(pattern);
      document.getElementById('res').innerHTML=strr;
      gsap.from(".gg",{x:300,ease:'bounce',duration:5});

})
















