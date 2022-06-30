const pool = require('./db')

async function SkatersGet() {
  try {
    const result = await pool.query(
      `SELECT * FROM skaters `
    )
    
    return result.rows
    
  } catch (e) {
    return e
  }
}

async function SkatersPost(body) {
  const { email, nombre, password, anos_experiencia, especialidad, foto, estado } = body
  try {
    const result = await pool.query(
      `INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [email, nombre, password, anos_experiencia, especialidad, foto, estado]
    )
    return result.rows
  } catch (error) {
    console.log(error)
  }
}

async function SkatersPut(body, id) {
  const { email, nombre, password, anos_experiencia, especialidad, foto, estado } = body
  try {
    const result = await pool.query(
      'UPDATE skaters  SET email = $1, nombre = $2, password =$3, anos_experiencia = $4, especialidad = $5, foto = $6, estado = $7 WHERE id = $8 RETURNING *',
      [email, nombre, password, anos_experiencia, especialidad, foto, estado, id]
    )
    return result.rows
  } catch (error) {
    console.log(error)
  }
}

async function SkatersDelete(id) {
  try {
    const result = await pool.query('DELETE FROM skaters WHERE id = $1 RETURNING*', [id])
    return result.rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = { SkatersGet, SkatersPost, SkatersPut, SkatersDelete }
