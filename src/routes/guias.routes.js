const express = require("express");
const router = express.Router();

// Controllers
const { 
    renderGuiasForm,
    createNewGuia,
    renderGuias,
    renderEditForm,
    updateGuias,
    deleteGuia, 
    
} = require("../controllers/guias.controller");

// nueva guia 
router.get("/guias/add", renderGuiasForm);
router.post("/guias/new-guia", createNewGuia);

// todas las guias 
router.get("/guias", renderGuias);

// editar notas 
router.get("/guias/edit/:id", renderEditForm);
router.put("/guias/edit/:id", updateGuias);

// eliminar guia 
router.delete("/guias/eliminar/:id", deleteGuia);

module.exports = router;
