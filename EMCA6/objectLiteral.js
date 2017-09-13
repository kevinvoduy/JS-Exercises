function createAnimal(name, owner) {
	return {
		name,
		owner,
		getInfo() {
			return `${this.name} is owned by ${this.owner}`
		},
		address: {
			street: '123 Main St',
			city: 'West Covina'
		}
	};
}

var spot = createAnimal('Spot', 'Kevin');

// Spot is owned by Kevin
document.write(`${spot.getInfo()} <br/>`);

// Spot is at 123 Main st
document.write(`${spot.name} is at ${spot.address.street} <br/>`);

// destructuring
let {name, owner} = spot;
document.write(`Name: ${name} <br/>`);

// inner class value
let {address} = spot;
document.write(`Address: ${address.street} <br/>`);

// destructure arrays (getting last value)
let favNums = [2.33, 2.323, 5.23];
let[,,chaos] = favNums;
document.write(`Chaos: ${chaos} <br/>`);

// switching numbers
let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];

 