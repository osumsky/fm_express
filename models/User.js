const db = new Map(); // Emulation of table of DB

class User {
  constructor({ name, email, gender }) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.id = `${db.size + 1}`;
    this.createAt = new Date();
    db.set(this.id, this);
    return Promise.resolve(this);
  }
}

User.findAll = async () => {
  return [...db.values()];
};

User.findById = async (id) => {
  return db.get(id);
};

module.exports = User;
