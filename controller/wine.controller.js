const Wine = require('../models/wine.model');

//Función para recuperar la coleccion de vino
const getwine = async(req, res) => {
    try{
        const Wine = await Wine.find({});
        res.status(200).json(Wine);
    } catch(error){
        res.status(500).json({
            status: "error" + error.message
        });
    }
}

//funcion para recueperar un elemento de la colección con base en el _id
const getWineById = async (req, res) => {
    try {
        //id proviene de una variable en la URL
        const { id } = req.params();
        const wine = await Wine.find({'_id':id});
        
        

        res.status(200).json(wine);
    } catch (error) {
        res.status(500).json({
            status: "error " + error.message
        });
    }
};


//Fución que agrega un elemento a una colección 
const setWine = async(req, res) => {
    try{
        const wine = await Wine.create ( req.body );
        res.status(200).json(wine);
    } catch (error) {
        res.status(500).json({
            status: "error: "+ error.message
        });
    }
}

//funcion para actualizar un elemento de la colección con base en el _id
const updateWine = async (req, res) => {
    try{
        const {id} = req.params;
        const UpdatedWine = await Wine.findByIdAndUpdate(id, req.body);
        if(!UpdatedWine){
            return  res.status(400).json({
                status: "error",
                message: "Documento not found"
            });
        }
        const Wine = await Wine.find({'_id':id});
        res.status(200).json(Wine);
        } catch (error){
            res.status(500).json({
            status: "error: "+ error.message
        });
    }
}




//funcion para eliminar un elemento de la colección con base en el _id
const deleteWine = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWine = await Wine.deleteOne({'_id':id});
        if (!deletedWine) {
            return res.status(400).json({ message: "Vino no encontrado" });
        }
        const delWine = await Wine.deleteOne({'_id':id});
        res.status(200).json({ message: "Vino eliminado correctamente" });
        

        
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};



module.exports = {
    getwine,
    getWineById,
    setWine,
    updateWine,
    deleteWine
}