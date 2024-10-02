const clone1 = JSON.parse(JSON.stringify(person));
const clone2 = JSON.parse(JSON.stringify(person));
const samePerson = person
person.age++
person.country = "FR"

console.log(clone1)
console.log(clone2)
console.log(samePerson)