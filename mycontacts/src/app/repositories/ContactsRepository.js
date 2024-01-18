const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Caio',
    email: 'caio@mail.com',
    phone: '1111222',
    category_id: uuid(),
  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();

