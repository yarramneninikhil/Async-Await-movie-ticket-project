console.log("person1: shows ticket");
console.log("person2: shows ticket");

const wifeGetTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`wife : I have the ticket`);
  }, 2000);
});
const getPopCorn = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Husband : I have got you some popcorn`);
  }, 3000);
});

const getButter = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Husband : I have some  butter for you`);
  }, 4000);
});

const getColdDrinks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Husband : I have some  cooldrink for you`);
  }, 5000);
});
async function goToMovie() {
  const data = await wifeGetTicket;
  console.log(data);
  console.log(`Husband : shall we go inside`);
  console.log(`wife : no i am hungry`);
  const popcorn = await getPopCorn;
  console.log(popcorn);
  console.log(`Husband : shall we go inside`);
  console.log(`wife : i want butter with popcorn`);
  const butter = await getButter;
  console.log(butter);
  console.log(`Husband : shall we go inside`);
  console.log(`wife : i want cooldrink`);
  const cool = await getColdDrinks;
  console.log(cool);
  console.log(`Husband : anything else`);
  console.log(`wife : lets go inside we are getting late`);
  console.log(`Husband : Thankyou for reaminder`);
  console.log(`person 3 : shows ticket`);
}
goToMovie();
console.log("person4: shows ticket");
console.log("person5: shows ticket");
