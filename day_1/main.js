
let firstArray = new Array;
let secondArray = [1, 2, 3, 4, 5];
console.log(Math.floor(secondArray.length / 2));
console.log(`first item: ${secondArray[0]}, middle one is:${secondArray[Math.floor(secondArray.length / 2)]}, and the last one is${secondArray[secondArray.length - 1]}`);
let mixedDataTypes = [1, '2', 3.5, [4, 1], 5, "6"];
console.log(mixedDataTypes.length);
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(`first item: ${itCompanies[0]}, middle one is:${itCompanies[Math.floor(itCompanies.length / 2)]}, and the last one is${itCompanies[itCompanies.length - 1]}`);
itCompanies.forEach(company => {
    //let bettercompany = company.toUpperCase;
    console.log(company.toUpperCase());
});
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
let search = 'Amazon';

itCompanies.includes(search) == true
    ? console.log(search)
    : console.log('not found');

let test = new Array;
let a = 0;

for (i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].includes('oo')) {
        test[a] = i;
        a++;
    }
};
test.reverse();
test.forEach(number => {
    itCompanies.splice(number, 1);
})
console.log(itCompanies);

itCompanies.sort();
console.log(itCompanies);

//console.log(countries);
//console.log(webTechs);

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.split(/\W+/gm);
if (words.includes('')) {
    words.splice(words.indexOf(''), 1);
}
console.log(words);
console.log(words.length);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.includes('Meat')
    ? console.log('already present Meat')
    : shoppingCart.unshift('Meat')

shoppingCart.includes('Sugar')
    ? console.log('already present Sugar')
    : shoppingCart.push('Sugar')

if (shoppingCart.includes('Tea')) {
    shoppingCart[words.indexOf('tea')] = 'GreenTea';
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);