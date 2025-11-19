class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `${this.name} - ${this.email}`;
  }
}

class EmailValidator {
  validate(email) {
    return email.includes('@') && email.includes('.');
  }
}

class UserRepository {
  save(user) {
    console.log(`Salvando ${user.name} no banco de dados...`);
    return true;
  }
}

const user = new User('João Silva', 'joao@email.com');
const validator = new EmailValidator();
const repository = new UserRepository();

if (validator.validate(user.email)) {
  repository.save(user);
}
