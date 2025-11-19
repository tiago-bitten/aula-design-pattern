class IDatabase {
  save(data) {
    throw new Error('Método save() deve ser implementado');
  }
}

class MySQLDatabase extends IDatabase {
  save(data) {
    console.log('Salvando no MySQL:', data);
  }
}

class UserService {
  constructor(database) {
    this.database = database;
  }

  createUser(name) {
    this.database.save({ name, createdAt: new Date() });
  }
}

const db = new MySQLDatabase();
const service = new UserService(db);
service.createUser('João Silva');
