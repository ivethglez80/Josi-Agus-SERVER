const {Router} = require ("express");

const {createGiftHandler, getGiftsListHandler, updtDisponibleHandler, modifyGiftHandler, deleteGiftHandler} = require("../handlers/giftHandler");

const giftRouter = Router();

const validate = (req,res, next) => {
    const {nombre_art} = req.body;
    console.log(nombre_art);
    if(!nombre_art) 
        return res.status(400).json({error:"falta ingresar nombre del articulo"})
    next();
}

giftRouter.post("/", validate, createGiftHandler);
giftRouter.get("/", getGiftsListHandler);
giftRouter.put("/", updtDisponibleHandler);
giftRouter.delete("/", deleteGiftHandler);
giftRouter.put("/modify", modifyGiftHandler)

module.exports = giftRouter;