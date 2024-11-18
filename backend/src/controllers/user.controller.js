const database = require('../config/database');
const mysql2 = require('mysql2');

const readUser = (req, res) => {
  const { id } = req.params;

  const readQuery = `SELECT * FROM User WHERE id=?;`;

  const query = mysql2.format(readQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: 'Usuario no encontrado' });
    }
  });
};

const createUser = (req, res) => {
  const { producto, cantidad } = req.body;

  const createQuery = `INSERT INTO User(producto, cantidad) VALUE(?, ?)`;

  const query = mysql2.format(createQuery, [producto, cantidad]);

  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: 'Usuario creado' });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { producto, cantidad } = req.body;

  const updateQuery = `UPDATE User SET producto=?, cantidad=? WHERE id=?`;

  const query = mysql2.format(updateQuery, [producto, cantidad, id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado' });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteQuery = `DELETE FROM User WHERE id=?`;

  const query = mysql2.format(deleteQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.json({ message: 'Usuario eliminado' });
  });
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};