document.querySelector('#sub').addEventListener('click',function(){

	var para =document.querySelector('#iSub').value;
	var a= document.createElement('UL');
	a.innerHTML="<h1><li>"+para+"</li></h1>";
	document.querySelector('.container').appendChild(a);
	document.querySelector('#iSub').value="";
})