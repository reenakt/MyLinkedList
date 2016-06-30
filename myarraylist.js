//create an arraylist constructer
function Arraylist(){


	this.array = [];
}

Arraylist.prototype = {

add: function(val){

	this.array.push(val);
},

// remove any item from array

   remove:function (itemToRemove){

// count of removed items
var counter =0;
var i;

// iterate every item
for(i=0;i<this.array.length;i++){

if(this.array[i]===itemToRemove){

 //remove array item at current index

 this.array.splice(i,1);
 // increment counter

 counter++;

 // decrement i to iterate current position

  i--;
}

}
// Return count of removed items

return counter;

},

// get index of item in the array

 getIndex: function (item){

var i,result;

// iterate every item
for(i=0;i<this.array.length;i++){

if(this.array[i]===item){
	result = this.array.indexOf(item);
}

}

return result;
 },
 search:function (val){
 	var n;
 	mystring =this.array.toString();
 	return n = this .mystring.search(val);
 },


// sorting arrays

 
 sort: function(values){

return this.array.sort(function (a,b){return a-b});
},

 


length: function(array){

	return this.array.length;

}


}

var ar1 = new Arraylist();

ar1.add(10);
ar1.add(20);
ar1.add(30);
ar1.add(40);
ar1.add(5);

console.log(ar1.array);   //[10,20,30,40,5]

ar1.remove(20);

console.log(ar1.getIndex(40));//3

console.log(ar1.array);

console.log(ar1.length(ar1.array));

console.log(ar1.sort()); // print the sorted array




