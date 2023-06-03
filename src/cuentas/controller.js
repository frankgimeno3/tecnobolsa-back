const pool = require("../../db");
const queries = require("./queries");

const getCuentas = (req, res) => {
  pool.query(queries.getCuentas, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getCuentasById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCuentasById, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
        }
    );
}   

const crearCuenta = (req, res) => {
    const { email, name, id_empresa, id_profesional } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email ya existe');
        } else {
        pool.query(queries.crearCuenta, [email, name, id_empresa, id_profesional], (error, results) => {
            if (error) {
                throw error;
            } else {
            res.status(201).send(`Cuenta creada con satisfactoriamente`);
            }
        }
        );
        }
    });
    }

const borrarCuenta = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.borrarCuenta, [ID], (error, results) => {
        const cuentaNoExiste = !results.rows.length;
    if (cuentaNoExiste) {
        res.send('Cuenta no existe');
    } else{
    pool.query(queries.borrarCuenta, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Cuenta borrada `);
    
    });
}
    });
}

const editarCuenta = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getCuentasById, [id], (error, results) => {
        const cuentaNoExiste = !results.rows.length;
    if (cuentaNoExiste) {
        res.send('Cuenta no existe');
    } else{
    pool.query(queries.editarCuenta, [name, id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Cuenta modificada `);
    });
}

    });
}

module.exports = {
  getCuentas, getCuentasById, crearCuenta, borrarCuenta
};
