//////////TASK 1
console.log('TASK 1');

var arr = [5,3,9,8];

function Summ(array){

var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log("summ", sum);

}
Summ(arr);

function maxnum(arr){
	return Math.max.apply(null, arr);
}

console.log("max num", maxnum(arr));

function minnum(arr){
	return Math.min.apply(null, arr);
}

console.log("min num", minnum(arr));

//////TASK 2
console.log('TASK 2');


function getCoffe(coffee, money){
	console.log('your ${coffee} please');
	money();
}

function payment(){
	console.log('your bablo plese');
}

getCoffe('espresso',payment);

////////////TASK 3

console.log('TASK 3');

function foobar (n){

	if(n%3 == 0 && n%7 == 0){
		return "foobar";
	}
 	if(n%7 == 0){
		return "bar";
	}
	if(n%3==0){
		return "foo";
    }
	return n;
}

console.log(foobar(1));
console.log(foobar(2));
console.log(foobar(3));
console.log(foobar(7));
console.log(foobar(21));
