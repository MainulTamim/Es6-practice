const ages = [12, 15, 17, 20, 23];
const ages2 = [13, 16, 22];
const ages3 = [33, 46, 52, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const bussines = 550;
const shochib = 350;
const job = 250;
const takaPoisha = [550, 350, 250, 850];
//const maximum = Math.max(bussines, shochib, job);
const maxo = Math.max(...takaPoisha);
console.log(maxo);