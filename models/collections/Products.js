const db = require("../../config/database");

module.exports = class Products {
  constructor(name, description, price, image) {
    (this.name = name),
    (this.description = description),
    (this.price = price),
    (this.image = image);
  }
  static getAll() {
    return db.execute("SELECT * FROM products");
  }
  create() {
    return db.execute(
      `INSERT INTO products (name, description, price, image) VALUES ('${this.name}', '${this.description}', ${this.price}, '${this.image}')`
    );
  }
  static getById(id) {
    return db.execute(`SELECT * FROM products WHERE products.id = ${id}`);
  }
  static delete(id) {
    return db.execute(`DELETE FROM home WHERE products.id = ${id}`)
  }
  update(id) {
    return db.execute(`UPDATE products SET products.name = '${this.name}',products.description = '${this.description}', products.price = ${this.price}, products.image = '${this.image}' WHERE products.id = ${id} `)
  }
};
