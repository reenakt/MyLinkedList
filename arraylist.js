
//adding array list features


function add(arr,val){

arr[arr.length] = val;

return val;
}


 var arr =['my','name','is'];

 var val='reena';

 add(arr,val); 
 console.log(arr);
  
 // remove  last item from array
// stack method

function remove(arr){

	var item = arr.pop();

	return item;
}

 var arr =['car','bike','scooter'];
   
  remove(arr);

 console.log(arr);

  

  // Queue method
// remove first item from array

function removeFirst(arr){

	var item = arr.shift();

	return item;
}

 var arr =['red','green','blue'];
   
  removeFirst(arr);

 console.log(arr);



// remove any item from array

function removeAny(arr,itemToRemove){

// count of removed items
var counter =0;
var i;

// iterate every item
for(i=0;i<arr.length;i++){

if(arr[i]===itemToRemove){

 //remove array item at current index

 arr.splice(i,1);
 // increment counter

 counter++;

 // decrement i to iterate current position

  i--;
}

}
// Return count of removed items

return counter;
}
 
 var arr = ['car','house','scooter','house','tree'];

var itemRemoved = removeAny(arr,'house') ;
console.log(itemRemoved);
console.log(arr);
  
// get index of item in the array

 function getIndex(arr,item){

var i,result;

// iterate every item
for(i=0;i<arr.length;i++){

if(arr[i]===item){
	result = arr.indexOf(item);
}

}

return result;
 }
 var arr = ['car','house','scooter','house','tree'];

var item = getIndex(arr,'tree');

console.log(item);





// sorting arrays

function compare(value1, value2){
	if(value1 < value2){
    return -1;
     }
   else if (value1 > value2){
	return 1;
    } else{
	return 0;
    }

}
 var values = [5,0,1,10,7,4];

values.sort(compare);

console.log (values);


// reverse the order


function compareRev(value1, value2){
	if(value1 < value2){
    return 1;
     }
   else if (value1 > value2){
	return -1;
    } else{
	return 0;
    }

}
 var values = [5,0,1,10,7,4];

values.sort(compareRev);

console.log (values);












