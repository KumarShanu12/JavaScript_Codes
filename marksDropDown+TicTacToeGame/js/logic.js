function check() {
   // var compRan=(Math.round(Math.random()*2));    
   var val=document.getElementsByName("rock");

 for(i=0;i<val.length;i++){
 	if (val[i].checked) {

// console.log(val[i].value)
              game(val[i].value)

   }
 		

 	}
 }

function game(vall){

     var compRan=(Math.round(Math.random()*2));

      if(vall==0 && compRan==1){


      	// console.log(vall)
      	// console.log(compRan)

        document.getElementById("ok").innerHTML="<o>"+"You:Rock"+"</o>";
      	document.getElementById("resultBox").innerHTML="<o>"+"Player Win"+"</o>";
      	document.getElementById("okm").innerHTML="<o>"+"Computer:Paper"+"</o>";

      }

      else if(vall==0&&compRan==2)
      {
      	// console.log(vall)
      	// console.log(compRan)
      	document.getElementById("ok").innerHTML="<o>"+"You:Rock"+"</o>";
      	document.getElementById("resultBox").innerHTML="<o>"+"Player Win"+"</o>";
      	document.getElementById("okm").innerHTML="<o>"+"Computer:Scissor"+"</o>";

      }
      else if(vall==1&&compRan==0){
      	// console.log(vall)
      	// console.log(compRan)
      	document.getElementById("ok").innerHTML="<o>"+"You:Paper"+"</o>";
      	document.getElementById("resultBox").innerHTML="<o>"+"Computer Win"+"</o>";
      	      	document.getElementById("okm").innerHTML="<o>"+"Computer:rock"+"</o>";

      }
      else if(vall==2&&compRan==1)	
      {
      	// console.log(vall)
      	// console.log(compRan)
      	      	document.getElementById("ok").innerHTML="<o>"+"You:Scissor"+"</o>";

      	document.getElementById("resultBox").innerHTML="<o>"+"Player Win"+"</o>";
      	      	      	document.getElementById("okm").innerHTML="<o>"+"Computer:Paper"+"</o>";

      }
      else if((vall==0 && compRan==0)) {
      	// console.log(vall)
      	// console.log(compRan)
      	      	      	document.getElementById("ok").innerHTML="<o>"+"You:Rock"+"</o>";

      	document.getElementById("resultBox").innerHTML="<o>"+"Draw"+"</o>";
      	      	      	      	document.getElementById("okm").innerHTML="<o>"+"Computer:Rock"+"</o>";

      }
     else if((vall==1 && compRan==1)) {
      	// console.log(vall)
      	// console.log(compRan)
      	     document.getElementById("ok").innerHTML="<o>"+"You:Paper"+"</o>";

      	document.getElementById("resultBox").innerHTML="<o>"+"Draw"+"</o>";
      	      	      	      	document.getElementById("okm").innerHTML="<o>"+"Computer:Paper"+"</o>";

      }
      else if((vall==2 && compRan==2)) {
      	// console.log(vall)
      	// console.log(compRan)
      	      	      	document.getElementById("ok").innerHTML="<o>"+"You:Scissor"+"</o>";

      	document.getElementById("resultBox").innerHTML="<o>"+"Draw"+"</o>";
      	      	      	      	document.getElementById("okm").innerHTML="<o>"+"Computer:Scissor"+"</o>";
      	}      	      	      	
      else if(vall==1 && compRan==2){
      	// console.log(vall)
      	// console.log(compRan)
          document.getElementById("ok").innerHTML="<o>"+"You:Paper"+"</o>";
      	 document.getElementById("resultBox").innerHTML="<o>"+"Computer win"+"</o>";
      	  document.getElementById("okm").innerHTML="<o>"+"You:Scissor"+"</o>";
  	
      }
      else if(vall==2 && compRan==0)
      {
      	// console.log(vall)
      	// console.log(compRan)
      	    document.getElementById("ok").innerHTML="<o>"+"You:Scissor"+"</o>";
      	 document.getElementById("resultBox").innerHTML="<o>"+"Computer win"+"</o>";
      	    document.getElementById("okm").innerHTML="<o>"+"You:Rock"+"</o>";
      }    
}
function drop(){
	for (var i=100; i >=0; i--)
					{
	
						document.write("<option>"+i+"</option>");	

					}

}
function log(){

   var a=document.getElementById("number").value

   if(a >80){


   	document.getElementById("ressu").innerHTML="<q>"+"A"+"</q>"
   }
   else if(a<=80 && a>=60){


   	document.getElementById("ressu").innerHTML="<q>"+"B"+"</q>"
   }
   else if(a<=60 && a>=40){


   	document.getElementById("ressu").innerHTML="<q>"+"C"+"</q>"
   }
   else
   {
   	document.getElementById("ressu").innerHTML="<ii>"+"FAIL"+"</ii>"


   }



}
