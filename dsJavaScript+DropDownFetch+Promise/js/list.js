let table1=document.getElementById('tab');
let table2=document.getElementById('tab1');
let arr1=[];
let arr2=[];
let arr3=[];


document.querySelector('#btn').addEventListener('click',function() {
  // body...

for (var i =1; i<table1.rows.length ; i++) {
arr1.push(table1.rows[i].cells[2].innerText);

}
arr2.sort();
//console.log(arr1);

for (var i =1; i<table2.rows.length ; i++) {
arr2.push(table2.rows[i].cells[2].innerText);
}
arr1.sort();
//console.log(arr2);
arr3=arr1.concat(arr2);
arr3.sort();
//console.log(arr3);


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


   insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  printListData() {
    let k=[];
    let current = this.head;

    while (current) {
    	///print here
      k.push(current.data);
      console.log(current.data);
      current = current.next;
    }
    document.querySelector('#res').innerHTML="<h1>"+k.join("<p></p>")+"</h1>";
  }
}
const ll = new LinkedList();


for (var i = arr3.length-1 ; i >= 0; i--) {
	ll.insertFirst(arr3[i])
}
ll.printListData();
})

