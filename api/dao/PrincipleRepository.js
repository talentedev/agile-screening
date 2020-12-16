class PrincipleRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS principles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      info TEXT)`
    return this.dao.run(sql)
  }

  create(info) {
    return this.dao.run(
      'INSERT INTO principles (info) VALUES (?)',
      [info])
  }

  update(value) {
    const { id, info } = value
    return this.dao.run(
      `UPDATE principles SET info = ? WHERE id = ?`,
      [info, id]
    )
  }

  delete(id) {
    return this.dao.run(
      `DELETE FROM principles WHERE id = ?`,
      [id]
    )
  }

  getById(id) {
    return this.dao.get(
      `SELECT * FROM principles WHERE id = ?`,
      [id])
  }

  getAll() {
    return this.dao.all(`SELECT * FROM principles`)
  }
}

module.exports = PrincipleRepository;