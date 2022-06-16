document.querySelector('#btnSet').addEventListener('click',function(){

   var choice=confirm("Do you really want to set image height and width");

  if(choice){
  document.querySelector('#pic1').style.width='100px';
  document.querySelector('#pic1').style.height='100px';

  document.querySelector('#pic2').style.width='100px';
  document.querySelector('#pic2').style.height='100px';

  document.querySelector('#pic3').style.width='100px';
  document.querySelector('#pic3').style.height='100px';

  document.querySelector('#pic4').style.width='100px';
  document.querySelector('#pic4').style.height='100px';

  document.querySelector('#pic5').style.width='100px';
  document.querySelector('#pic5').style.height='100px';

  document.querySelector('#pic6').style.width='100px';
  document.querySelector('#pic6').style.height='100px';
}
else{
	alert("Thank you")
}
})

