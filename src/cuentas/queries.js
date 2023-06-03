const getCuentas = "SELECT * FROM cuentas";
const getCuentasById = "SELECT * FROM cuentas WHERE id = $1";
const checkEmailExists = "SELECT s FROM cuentas s WHERE s.email = $1";
const crearCuenta = "INSERT INTO cuentas (email, name, id_empresa, id_profesional) VALUES ($1, $2, $3, $4)";
const borrarCuenta = "DELETE FROM cuentas WHERE id = $1";
const editarCuenta = "UPDATE cuentas SET name = $1 WHERE id = $2";

module.exports = {
    getCuentas, getCuentasById, checkEmailExists, crearCuenta, borrarCuenta, editarCuenta,

}; 