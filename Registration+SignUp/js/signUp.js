let arr=[];
let mailA=[];
let passA=[];
document.querySelector('#btn').addEventListener('click',()=>{

  


for (var i=0; i < localStorage.length; i++)  {
   arr.push((localStorage.getItem(i)));

}



for(y in arr){

	var arrayy = arr[y].split(",");

		mailA[y]=arrayy[2];
		mailA[y] = mailA[y].replace(/"/g,"");

		passA[y]=arrayy[1];
				passA[y] = passA[y].replace(/"/g,"");


	

}
go();

})

go=()=>{
	let l=document.querySelector('#pass').value;

 let k=document.querySelector('#email').value;



for(x=0;x<mailA.length;x++){
			// console.log(mailA[x])
			// console.log(k);


      
	 if(mailA[x]==k){

         if(passA[x]==l){
         	alert('valid');
         	//move to another page
         	return;


         }

	 }

}
	 alert('Invalid Username or Password')

	document.querySelector('#pass').value="";
	 document.querySelector('#email').value="";


	
}
























