


 let name = prompt("Name","Enter-Name");
  localStorage.setItem('Name',name);
 

document.querySelector('#sub').addEventListener('click',function(){

	window.location.href='../html/nameDisplayPage.html';
})