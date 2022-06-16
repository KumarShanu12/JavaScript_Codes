
var date = new Date();
var res = document.getElementById('res');

document.querySelector('#btn1').addEventListener('click',function() {
	
	let a=prompt("Enter your Name","");
		let b=prompt("Enter your born year","");

		if(b=="" || a=="" || a==null || b==null){
			alert("oops..Enter Enter details and try again...")
			return;
		}
		

		let age =(date.getFullYear())-Number(b);

		alert("Hello "+a+"you are "+age+" years old ")
		res.innerHTML="<h1>"+"Hello "+a+" you are "+age+" years old "+"</h1>";


})

