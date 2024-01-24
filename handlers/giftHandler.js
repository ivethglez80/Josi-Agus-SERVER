const {createGift, getGiftsList, updtDisponible} = require ("../controllers/giftController/giftController")

const createGiftHandler =  async (req, res) => {
    const {imagen, nombre_art, descripcion, link, invitado} = req.body;
    try {
        const newGift = await createGift(imagen, nombre_art, descripcion, link, invitado);
        res.status(201).json(newGift);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getGiftsListHandler = async (req, res) => {
    
    try {
        const results = await getGiftsList();
        res.status(200).json(results);    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const updtDisponibleHandler = async (req,res) => {
    const {id, disponible, invitado} = req.body;
    try {
        const giftUpdtd = await updtDisponible(id, disponible, invitado);
        if (giftUpdtd){
            res.status(200).json(giftUpdtd)
        }else{
            res.status(404).json({error:"Gift not found"});
        }        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    createGiftHandler,
    getGiftsListHandler,
    updtDisponibleHandler
};