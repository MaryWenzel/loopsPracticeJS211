// 1) do...while loop from 1 to 1000
let counter = 0;
do{
  counter++;
  console.log("num: " + counter)
}while (counter < 10)

// 2) create an object with info provided
var person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}

// 3) Create a function that logs out the keys of the object using Object.keys().
var keys = Object.keys(person);
console.log(keys) 

// 4) Create a function that logs out the keys and values of the object using Object.entries().
for (const [key, value] of Object.entries(person)){
  console.log(`${key}: ${value}`);
}

// 5) create and array of persons with multiple people
var arrayOfPersons = [
  {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
  },
{
  firstName: 'Mary',
  lastName: 'Jane',
  birthDate: 'May 23, 1995',
  gender: 'female'
},
{
  firstName: 'Adam',
  lastName: 'Baum',
  birthDate: 'June 10, 1934',
  gender: 'male'
},
{
  firstName: 'Hugh',
  lastName: 'Jass',
  birthDate: 'April 20, 1945',
  gender: 'male'
}
]

// 6) console log birthDate info that ends in an odd number
console.log("'Values of birthdate key'")
let year = /\d\d\d\d/;
for (const key of arrayOfPersons){
  let birthDate = key.birthDate
  if(birthDate.match(year) % 2 != 0){
  console.log(birthDate)
  }
 
}

// 7) map() over arrayOfPersons
const map1 = arrayOfPersons.map(x => x)
console.log(map1)


// 8) filter() to show values if they are male
console.log("'Display info of those that are Male'")
const males = arrayOfPersons.filter(function(gender) {
  return gender.gender == "male";
}) 
 console.log(males)


// 9/10) returns birthDate if its equal to below 1990
console.log('"birthDate before 1990"')
for (const key of arrayOfPersons){
   let birthDate = key.birthDate
  if(birthDate.match(year) < 1990){
    console.log(birthDate)
  }
}
