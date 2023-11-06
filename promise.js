console.log("person1: shows ticket");
console.log("person2: shows ticket");

function wifeGetTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`wife : I have the ticket`);
    }, 2000);
  });
}

function getPopCorn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Husband : I have got you some popcorn`);
    }, 3000);
  });
}

function getButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Husband : I have some butter for you`);
    }, 4000);
  });
}

function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Husband : I have some cooldrink for you`);
    }, 5000);
  });
}

function goToMovie() {
  wifeGetTicket()
    .then((res) => {
      console.log(res);
      console.log(`Husband : shall we go inside`);
      return getPopCorn();
    })
    .then((res) => {
      console.log(`wife : i am hungry`);
      console.log(res);
      console.log(`Husband : shall we go inside`);
      return getButter();
    })
    .then((res) => {
      console.log(`wife : i want butter`);
      console.log(res);
      console.log(`Husband : shall we go inside`);
      return getColdDrinks();
    })
    .then((res) => {
      console.log(`wife : i want cooldrink`);
      console.log(res);
      console.log(`Husband : anything else`);
    })
    .then(() => {
      console.log(`wife : getting late go inside`);
      console.log(`Husband : Thanks for remaind`);
      console.log(`person 3: shows the ticket`);
    });
}

goToMovie();

console.log("person4: shows ticket");
console.log("person5: shows ticket");
