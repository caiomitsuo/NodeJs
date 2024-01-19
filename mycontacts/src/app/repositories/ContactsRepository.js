const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Caio',
    email: 'caio@mail.com',
    phone: '1111222',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Pedrinho',
    email: 'pedrinho@mail.com',
    phone: '111122233',
    category_id: v4(),
  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  }
}

module.exports = new ContactsRepository();

