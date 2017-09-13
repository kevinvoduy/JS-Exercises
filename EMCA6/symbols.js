// symbols are immutable

let capital = Symbol('State capital');

let california = {};
california[capital] = 'Sacramento';
document.write(`Captial of CA: ${california[capital]} <br/>`);