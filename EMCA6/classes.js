class Mammal {
	constructor(name) {
		this._name = name;
	}

	// getters
	get name() {
		return this._name;
	}

	//setters
	set name() {
		this._name = name;
	}

	// static methods
	static makeMammal(name) {
		return new Mammal(name);
	}

	getInfo() {
		return `${this.name} is a mammal`;
	}
}

// create new animal
let monkey = new Mammal('Fred');

// change monkey name
monkey.name = 'Mark';

// create new mammal
let chipmunk = new Mammal.makeMammal('Chipper');
document.write(`Mammal 2: ${chipmunk.name} <br/>`);

// new class
class Marsupial extends Mammal {
	constructor(name, hasPouch) {
		super(name);
		this._hasPouch = hasPouch;
	}

	get hasPouch() {
		return this._hasPouch;
	}

	set hasPouch(hasPouch) {
		this._hasPouch = hasPouch;
	}

	getInfo() {
		return `${this.name} is a marsupial`;
	}
}

let kangaroo = new Marsupial('Paul', true);
document.write(`it is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch <br/>`);

