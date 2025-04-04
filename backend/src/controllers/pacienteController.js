
// pacienteController.js
export const createPaciente = async (req, res) => {
  try {
    const pacienteData = {
      ...req.body,
      // Asegúrate de que los nombres de los campos coincidan con tu modelo Sequelize
      nombre: req.body.nombre,
      cedula: req.body.cedula,
      fecha_nacimiento: req.body.fecha_nacimiento,
      nacionalidad: req.body.nacionalidad,
      pais_nacimiento: req.body.pais_nacimiento,
      edad: req.body.edad,
      peso: req.body.peso,
      altura: req.body.altura,
      fecha_ultima_visita: req.body.fecha_ultima_visita,
      diagnostico: req.body.diagnostico,
      medico_cabecera: req.body.medico_cabecera,
      tiene_padecimiento: req.body.tiene_padecimiento,
      especialista: req.body.especialista,
      reseña_padecimiento: req.body.reseña_padecimiento,
      celular: req.body.celular,
      numero_emergencia: req.body.numero_emergencia,
      usuario_id: req.body.usuario_id
    };

    const paciente = await Paciente.create(pacienteData);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const searchPacientes = async (req, res) => {
  try {
    const { cedula } = req.query;
    const pacientes = await Paciente.findAll({ 
      where: { 
        cedula: { [Op.iLike]: `%${cedula}%` } // Búsqueda insensible a mayúsculas/minúsculas
      } 
    });
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};