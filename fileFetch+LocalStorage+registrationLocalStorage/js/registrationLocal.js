let i=0;

document.querySelector('#btn1').addEventListener('click',function () {
let ids=('ID',document.querySelector('#id').value);
let names=('Name',document.querySelector('#name').value);
let ages=('Age',document.querySelector('#age').value);
let Mobiles=('Mobile',document.querySelector('#mob').value);
console.log('click');

if(ids==""||names==""||ages==""||Mobiles==""){
	alert("Enter all Values ")
	return;
}

let arr =[ids,names,ages,Mobiles];


 localStorage.setItem(i,JSON.stringify(arr));
document.querySelector('#id').value=""
document.querySelector('#name').value=""
document.querySelector('#age').value=""
document.querySelector('#mob').value=""
i++;
alert("Saved to local storage")
})



 document.querySelector('#btn2').addEventListener('click',function () {

 	 window.location.href='../html/displayPage.html'

})