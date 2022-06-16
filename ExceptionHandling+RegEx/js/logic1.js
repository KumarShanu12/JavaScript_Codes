document.getElementById('sub').addEventListener('click',function() {

     try {
     	var age = document.getElementById("age").value;
        if (isNaN(age)) {
            throw  " Not a number! try again";
        }
        else if(age==""){

        	throw " Empty ";

        } 
		else
		{
				if (age < 18) {
                throw " !! Age less than 18 ";
                              }

                    else (age>=18)
              {
            throw "Your Age:-->" + age;

             }
		} 
		         
    } catch (err) {
        document.getElementById("mm").innerHTML ="<h1>"+err+"</h1>";
         document.getElementById("mm").style.backgroundImage ='none'; 
    }
   document.getElementById("age").value="";

})