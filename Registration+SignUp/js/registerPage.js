function validate()
{

  var k = document.getElementById("name").value;
  if (k=="") {
    document.getElementById("not1").innerHTML="<l>"+"**cant left blank"+"</l>";
  }
   else if(k!=null){
                document.getElementById("not1").innerHTML="";

   }
  
  var m= document.getElementById("Mobile").value;

   if(m==""){
              document.getElementById("not5").innerHTML="";

    }
 else if(m.length==10){
    document.getElementById("not5").innerHTML="<l>"+"**correct"+"</l>";

  }
  else if(m.length<10)
  {
        document.getElementById("not5").innerHTML="<l>"+"**should not less than 10 numbers "+"</l>";

  }
  else if(m.length>10)
    {
              document.getElementById("not5").innerHTML="<l>"+"**should not more than 10 numbers "+"</l>";

    }
    
  var p =document.getElementById("password").value;

   check(p);

   
  var rp=document.getElementById("rpassword").value;


if(rp==""){
            document.getElementById("not4").innerHTML="";

}
  
else if((p)!=(rp))
{
          document.getElementById("not4").innerHTML="<l>"+"*password not match"+"</l>";

}
else if(p.value===rp.value)
{
            document.getElementById("not4").innerHTML="<l>"+"**matched"+ "</l>";

}

emailCheck();

}


function check(msg){

  if(msg==""){
                document.getElementById("not3").innerHTML="";

  }

   else if(msg.length<6){
    document.getElementById("not3").innerHTML="<l>"+ "**less than 6 " + "</l>";

 }
 else{

  check1(msg)
 }

}
function check1(msg)
{

if(/^[a-zA-Z0-9]*$/.test(msg) == false){
      document.getElementById("not3").innerHTML="<l>"+"**Accepted"+"</l>";

    
}
else{
        document.getElementById("not3").innerHTML="<l>"+"**should have special Character"+"</l>";

 }
}

function emailCheck(){



  var mail = document.getElementById("email").value;
   
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(mail.match(mailformat))
    {
        document.getElementById("not2").innerHTML="";
    }
    else {
        document.getElementById("not2").innerHTML="<l>"+"**not valid"+"</l>";
    }
}

let i=0;

document.querySelector('#btn').addEventListener('click',function () {
let names=('Name',document.querySelector('#name').value);
let pass=('password',document.querySelector('#password').value);

let emails=('Email',document.querySelector('#email').value);
let Mobiles=('Mobile',document.querySelector('#Mobile').value);
console.log('click');

 if(names==""||pass==""||emails==""||Mobiles==""){
   alert("Enter all Values ")
   return;
 }

let arr =[names,pass,emails,Mobiles];


 localStorage.setItem(i,JSON.stringify(arr));

i++;
document.querySelector('#name').value="";
document.querySelector('#password').value="";
document.querySelector('#email').value="";
document.querySelector('#Mobile').value="";
document.querySelector('#rpassword').value="";

alert("Saved to local storage")

})
document.querySelector('#btn1').addEventListener('click',function () {

window.location.href="../html/signUp.html"
  })
















