class Queue 
{ 
    constructor() 
    { 
        this.items = []; 
    }
enqueue(element) 
{     
    this.items.push(element); 
}
printQueue() 
{   
    	document.querySelector('#res').innerHTML="<h1>"+this.items.join("<p></p>")+"</h1>"
    
         
    
} 
isEmpty() 
{ 
    // return true if the queue is empty. 
     if(this.items.length == 0)
     {
     	alert("UnderFlow");
     } 
}

}

var queue = new Queue();

document.querySelector('#btn').addEventListener('click',function () {

let values=document.querySelector('#todo').value;
queue.enqueue(values);
document.querySelector('#todo').value="";
})


document.querySelector('#rembtn').addEventListener('click',function () {
	queue.isEmpty();
queue.printQueue();

})
    



























