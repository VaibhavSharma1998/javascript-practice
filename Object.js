// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`
//     },
//   }

// const copyPerson = Object.assign({},person) 
// console.log(copyPerson); 

// const keys = Object.keys(person)
// console.log(keys);

// const value =  Object.entries(person)
// console.log(value);


// const entries = Object.entries(person)
// console.log(entries);
//   person.name ='vaibhav sharma'
// console.log(person.hasOwnProperty('skills'));
// person.personInfo = function(){
//     let firstSkill = this.skills.shift()
//     let lastSkill = this.skills.pop()
//     let withoutfirastandlastSkill =this.skills.slice(0,this.skills.length-1)
//     return (`${firstSkill} ,${withoutfirastandlastSkill} ,${lastSkill}`)
// }
// console.log(person.personInfo());


// person.age = 24
// console.log(person);

// let check =person.skills.slice(0,person.skills.length-1)
// console.log(check);


// Task 2

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   manySkills : function(){
//     return this.Alex.skills.length
//   }
// }

// const manySkills = users.Alex.skills
// console.log(users.manySkills());

// for (const key in users){
//   console.log(key.skills);
// }


// const txt = { "Alex": { "email": "alex@alex.com", "skills": [ "HTML", "CSS", "JavaScript" ], "age": 20, "isLoggedIn": false, "points": 30 }, "Asab": { "email": "asab@asab.com", "skills": [ "HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node" ], "age": 25, "isLoggedIn": false, "points": 50 }, };

// let result = Object.keys(txt).reduce((a, b) => (txt[a].skills.length > txt[b].skills.length) ? a : b);

// console.log(result) // For getting Username who has many skills
// console.log(txt[result]) // For getting User object who has many skills


// Merge 2 objects

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  ssn: '123-456-2356',
  location: 'USA'
};

delete person.location

let job = {
  jobTitle: 'JavaScript Developer',
  location: 'India'
};

// let joinObject = {...person,...job}
// console.log(joinObject);
// console.log(person);
// let joinObject = Object.assign(person,job)
// console.log(joinObject);

const toString = JSON.stringify(person)
console.log(toString);
