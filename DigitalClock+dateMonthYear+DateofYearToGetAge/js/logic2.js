
setInterval(datte,1000)


// gsap.to("#at",{y:670,yoyo:true,repeat:-1,ease:"bounce" ,duration:10,color:'#ff66cc'})	

function datte() {
	var date= new Date();

var k=	date.toLocaleTimeString();




	document.querySelector('#datee').value=date.toLocaleTimeString();

	document.querySelector('#datee').style.fontSize='50px';
		document.querySelector('#datee').style.color='#e62e00';

}



