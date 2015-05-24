function example () {
	console.log("The number of arguments is: " + arguments.length);
	for(var i=0; i < arguments.length ;i++){
		console.log("Type is: "+ typeof(arguments[i]));
	}

}

console.log(example(2,"Pesho",3));
console.log(example(1,2,true,false));
example.call(this,1,2,3,4);
example.apply(this,["Sasho","Gosho",8]);