const person = { name: 'fahim muctadir', age: 23, job: 'facebooker', gfName: 'Muna'}

const {age, gfName, job} = person;

//const gfNam = person.gfName;
//const jobnam = person.job;

//console.log(age, gfName, job);
//console.log(age, gfName, job);
// console.log(age, gfName, job);

const friends = ['fahim khan', 'bappy khan','sakib mirda', 'sahariar khan', 'mohiuddin gm']
const [cotoFriend, secondFriend, ...lastAllFriends] = friends;

console.log(lastAllFriends);