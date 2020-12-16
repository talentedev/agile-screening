class ValueRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS agilevalues (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      info TEXT)`
    return this.dao.run(sql)
  }

  create(info) {
    return this.dao.run(
      'INSERT INTO agilevalues (info) VALUES (?)',
      [info])
  }

  update(value) {
    const { id, info } = value
    return this.dao.run(
      `UPDATE agilevalues SET info = ? WHERE id = ?`,
      [info, id]
    )
  }

  delete(id) {
    return this.dao.run(
      `DELETE FROM agilevalues WHERE id = ?`,
      [id]
    )
  }

  getById(id) {
    return this.dao.get(
      `SELECT * FROM agilevalues WHERE id = ?`,
      [id])
  }

  getAll() {
    return this.dao.all(`SELECT * FROM agilevalues`)
  }
}

module.exports = ValueRepository;