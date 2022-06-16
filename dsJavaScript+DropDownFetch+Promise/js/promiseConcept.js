document.querySelector('#btn').addEventListener('click',function(){

	let myPromise = new Promise(function(myResolve, myReject){

   let req = new XMLHttpRequest();
   req.open('GET','http://dummy.restapiexample.com/api/v1/employees')
   req.onload=function(){

   	if (req.status==200){
   		myResolve(req.response); 
       var values= JSON.stringify(req.response); 
        document.querySelector('#show').innerText=values;
   	}
   	else{
   		myReject("File not Found");
   	}

   }
   req.send();
});

myPromise.then(
  function(value){
  		alert("success Fetched")
  }).catch(
  function(error){
 alert("not Fetched")
  });

})
