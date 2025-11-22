const express = require('express');
const method = express.Router();
const db = require('../config/db_connection');

//::::::::::::::::::::POST::::::::::::::::::::
method.post('/', async (req, res) => {
    const { nombre, apellidos, telefono, correo, direccion } = req.body;
    if (nombre && apellidos && telefono && correo && direccion) {
        let query = "INSERT INTO empleados (nombre, apellidos, telefono, correo, direccion)";
        query += ` VALUES ('${nombre}', '${apellidos}', '${telefono}', '${correo}', '${direccion}')`;
        const rows = await db.query(query);
        console.log(rows);
        (rows.affectedRows == 1) ? res.status(201).json({ code: 201, message: 'Empleado insertado correctamente' })
            : res.status(500).json({ code: 500, message: 'Ocurrio un error, empleado no insertado' });
    }
});

//::::::::::::::::::::DELETE::::::::::::::::::::

method.delete('/:id([0-9]{1,3})', async (req, res) => {
    const query = ` DELETE FROM empleados WHERE id =${req.params.id} `;
    const rows = await db.query(query);
    (rows.affectedRows == 1) ? res.status(200).json({ code: 200, message: 'Empleado eliminado correctamente' })
        : res.status(404).json({ code: 500, message: 'Ocurrio un error, empleado no encontrado' });
});

//::::::::::::::::::::PUT::::::::::::::::::::

method.put('/:id([0-9]{1,3})', async (req, res, next) => {
  const { nombre, apellidos, telefono, correo, direccion } = req.body;//desestructuramos el body
  if( nombre && apellidos && telefono && correo && direccion){
      let query = `UPDATE empleados SET nombre='${nombre}',apellidos='${apellidos}',`;
      query += `telefono='${telefono}',correo='${correo}',direccion='${direccion}' WHERE id=${req.params.id} `;//consulta a la base de datos
      const rows = await db.query(query);//ejecutamos la consulta
      console.log(rows);
      if (rows.affectedRows == 1){ 
        return res.status(200).json({code: 200, message:'Empleado actualizado correctamente'})
      }
      else { 
        return res.status(500).json({code: 500, message:'Ocurrio un error, empleado no actualizado'}); 
      }
  }
  return res.status(500).json({code: 500, message:'Error, campos incompletos'});
});

//::::::::::::::::::::PATCH::::::::::::::::::::

method.patch('/:id([0-9]{1,3})', async (req, res, next) => {
  const { nombre } = req.body;//desestructuramos el body
  if (nombre) {
      let query = `UPDATE empleados SET nombre='${nombre}' WHERE id=${req.params.id} `;//consulta a la base de datos
      const rows = await db.query(query);//ejecutamos la consulta
      console.log(rows);
      if (rows.affectedRows == 1){ 
        return res.status(200).json({code: 200, message:'Empleado actualizado correctamente'})
      }
      else { 
        return res.status(500).json({code: 500, message:'Ocurrio un error, empleado no actualizado'}); 
      }
  }
  return res.status(500).json({code: 500, message:'Error, campos incompletos'});
});

//:::::::::::::::::::::GET:::::::::::::::::::::

method.get('/', async (req, res, next) => {
  const mtd = await db.query('SELECT * FROM empleados') //consulta a la base de datos
  return res.status(200).json({code: 200, message: mtd });// envio del archivo json
});

method.get('/:id([0-9]{1,3})', async (req, res, next) => {
  const id = parseInt(req.params.id);//convertir entero
  const mtd = await db.query('SELECT * FROM empleados WHERE id = ?', [id]); //consulta a la base de datos
  (id >= 1 && id <= 750 && mtd.length > 0) ? res.status(200).json({code: 1, message: pkm[0] }) 
  : res.status(404).json({code: 404, message:'Empleado no encontrado'});// mensaje de error si el pokemon no se encuentra
});

method.get('/:name([A-Za-z]+)', async (req, res, next) => { //buscamos el pokemon por nombre
  const name = req.params.name;//obtenemos el nombre del pokemon
  const mtd = await db.query('SELECT * FROM pokemon WHERE pok_name = ?', [name]); //consulta a la base de datos
  const mtdo = mtd.filter(m => m.nombre.toUpperCase() === nombre.toUpperCase()); //filtramos el pokemon por nombre sin importar mayusculas o minusculas
  (mtdo.length > 0) ? res.status(200).json({code: 1, message: mtdo }) 
  : res.status(404).send({code: 404, message:'Empleado no encontrado'});// mensaje de error si el pokemon no se encuentra
});

module.exports = method; //exportamos el modulo