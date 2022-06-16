let myPromise = new Promise(function(myResolve, myReject){

   let req = new XMLHttpRequest();
   req.open('GET',' http://dummy.restapiexample.com/api/v1/employees')
   req.onload=function(){

   	if (req.status==200){
   		myResolve(req.response); 
       var values= JSON.parse(req.response);
       // console.log(values.data[1].id);

        let k=document.querySelector('#sel');
       for (var i = values.data.length - 1; i >= 0; i--) {
       k.innerHTML=k.innerHTML +'<option value="' + values.data[i].id + '">' + values.data[i].id  + '</option>';
     }
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


  