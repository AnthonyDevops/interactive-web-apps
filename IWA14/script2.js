// script.js

function add(b,c) {
return b+c
}

function multiply(a,b,c){
return (a+b)*c
}

function internal() {
	const multiplication = multiply(example1.internal.a, example1.internal.b,example1.internal.c)
	const added = add(example1.internal.b,example1.internal.c)
	console.log(multiplication,added)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()