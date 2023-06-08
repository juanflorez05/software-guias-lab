const guiasCtrl = {};

const Guia = require('../models/Guia');

guiasCtrl.renderGuiasForm = (req, res) => {
  res.render('guias/new-guia');
};

guiasCtrl.createNewGuia = async (req, res) => {
  const {
    title,
    description,
    autor,
    autor1,
    autor2,
    autor3

  } = req.body;
  const newGuia = new Guia({
    title,
    description,
    autor,
    autor1,
    autor2,
    autor3

  });

  await newGuia.save();
  res.redirect('/guias');
}
guiasCtrl.renderGuias = async (req, res) => {
  const guias = await Guia.find();
  res.render('guias/all-guia', { guias });
}
guiasCtrl.renderEditForm = async (req, res) => {
  const guia = await Guia.findById(req.params.id);  
  res.render('guias/edit-guia', { guia });
}
guiasCtrl.updateGuias = async (req, res) => {
  const{
    title,
    description,
    autor,
    autor1,
    autor2,
    autor3

  } = req.body;
  await Guia.findByIdAndUpdate(req.params.id, {
    title,
    description,
    autor,
    autor1,
    autor2,
    autor3

  });
  res.redirect('/guias');
}
guiasCtrl.deleteGuia = async (req, res) => {
  await Guia.findByIdAndDelete(req.params.id);
  res.redirect('/guias');
}

module.exports = guiasCtrl;

