const {createGuest, getGuestsList, updtAsiste, modifyGuest, deleteGuest} = require ("../controllers/guestController/guestController")

const createGuestHandler =  async (req, res) => {
    const {nombre, apellido, email, telefono, cantidad, asiste, comentarios} = req.body;
    try {
        const newGuest = await createGuest(nombre, apellido, email, telefono, cantidad, asiste, comentarios);
        res.status(201).json(newGuest);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getGuestsListHandler = async (req, res) => {
    
    try {
        const results = await getGuestsList();
        res.status(200).json(results);    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const updtAsisteHandler = async (req,res) => {
    const {id, asiste} = req.body;
    try {
        const guestUpdtd = await updtAsiste(id, asiste);
        if (guestUpdtd){
            res.status(200).json(guestUpdtd)
        }else{
            res.status(404).json({error:"Guest not found"});
        }        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const modifyGuestHandler = async (req,res) => {
    const {id,nombre, apellido, email, telefono, cantidad, asiste, comentarios} = req.body;
    console.log("nuevos datos", id,nombre, apellido, email, telefono, cantidad, asiste, comentarios);
    try {
        const getModified = await modifyGuest(id, nombre, apellido, email, telefono, cantidad, asiste, comentarios);
        if (getModified){
            res.status(200).json(getModified)
        }else{
            res.status(404).json({error:"Guest not found"});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteGuestHandler = async (req, res) => {
    const {id} = req.body;
    try {
        const guestDeleted = await deleteGuest(id);
        if (guestDeleted){
            res.status(200).json({ message: `Guest with ID: ${id}, deleted successfully.` })
        }else{
            res.status(404).json({error:"Guest not found"});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createGuestHandler,
    getGuestsListHandler,
    updtAsisteHandler,
    deleteGuestHandler,
    modifyGuestHandler
};