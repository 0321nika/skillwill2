// //დავალება 1

// function youngestPerson(users) {
//     let youngest = users[0];
  
//     for (let i = 1; i < users.length; i++) {
//       if (users[i].age < youngest.age) {
//         youngest = users[i];
//       }
//     }
  
//     return youngest.name;
//   }
  
//   const users = [
//     { name: 'თემო', age: 25 },
//     { name: 'ლაშა', age: 21 },
//     { name: 'ანა', age: 28 }
//   ];
  
//   const youngestName = youngestPerson(users);
//   console.log("ყველაზე ახალგაზრდა არის :", youngestName);

// //დავალება 2

// function copyUser(user) {
//   const newUser = {
//     name: user.name,
//     age: user.age,
//   };

//   return newUser;
// }

// const user = {
//   name: "Temo",
//   age: 25
// };

// const copiedUser = copyUser(user)
// console.log(copiedUser) 
// console.log(user)




// დავალება 3

let winner = null;

while (winner === null) {
  const rollA = Math.floor(Math.random() * 6) + 1
  const rollB = Math.floor(Math.random() * 6) + 1

  console.log(`A მოთამაშემ გააგორა: ${rollA}`)
  console.log(`B მოთამაშემ გააგორა : ${rollB}`)

  if (rollA === 3) {
    winner = 'მოთამაშე A'
  } else if (rollB === 3) {
    winner = 'მოთამაშე B'
  }
}

console.log(`${winner} არის გამარჯვებული!`)


