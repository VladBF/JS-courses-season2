const user = {
  name: 'Vlad',
  age: 21,
  work: 'student',
  cards: function() {
    let card = {
      name: 'John',
      work: 'builder'
    };
    Object.defineProperty(card, 'cardInformation', {
      get: function() {
        return 'FirstName: ' + card.name + '\n' + 'Work:' + card.work;
      }
    });

    return card;
  }
};
Object.defineProperty(user, 'information', {
  get: function() {
    return 'FirstName: ' + user.name + '\n' + 'Age: ' + user.age + '\n' +
    'Work:' + user.work;
}
});
console.log(user.information);
console.log(user.cards());
let newObj = user.cards();
console.log(newObj.cardInformation);

