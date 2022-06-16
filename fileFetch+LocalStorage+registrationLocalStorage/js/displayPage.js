let k=document.querySelector('#showD');

var p =document.createElement("p");
for(i=0;i<localStorage.length;i++){
	k.appendChild(p);
	p.innerHTML = p.innerHTML +"id,name,age,Mobile ==> "+(JSON.parse(localStorage.getItem(i)))+"<br>";
}
