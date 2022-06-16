let ele;
class stack{

	constructor() 
    { 
        this.items = []; 
    } 
pushh(element) 
{ 
    // push element into the items 
    this.items.push(element);
    	// console.log(this.items);
 
} 
isEmpty() 
{ 
    return this.items.length == 0; 
} 
printStack() 
{ 
	
        ele=this.items; 
        document.querySelector('#results').innerHTML=this.items.join("<p></p>");     
} 
}
let obj = new stack();
document.querySelector('#btn').addEventListener('click',function(){

obj.pushh(document.querySelector('#name1').value);
 obj.pushh(document.querySelector('#name2').value);
 obj.pushh(document.querySelector('#name3').value);
 obj.pushh(document.querySelector('#name4').value);
 obj.pushh(document.querySelector('#name5').value);
 //console.log(ele);
 obj.printStack();
 document.querySelector('#name1').value=""
 document.querySelector('#name2').value=""
 document.querySelector('#name3').value=""
 document.querySelector('#name4').value=""
 document.querySelector('#name5').value=""

})


document.querySelector('#btnS').addEventListener('click',function(){
let ind;

var serValue=(document.querySelector('#serT').value);
ind=ele.indexOf(serValue);
if(ind==-1){
	alert("Not Found..")
    document.querySelector('#serT').value="";
}
ele.splice(ind,1);
document.querySelector('#results').innerHTML=ele.join("<p></p>");
document.querySelector('#serT').value="";

})


