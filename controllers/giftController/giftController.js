
const {Gift} = require("./../../src/db")

const createGift = async (imagen, nombre_art, descripcion, link, invitado) =>
    await Gift.create({imagen, nombre_art, descripcion, link, invitado});

const getGiftsList = async () => {
    const dbGifts = await Gift.findAll();
    return [...dbGifts];
}

const updtDisponible = async (id, disponible, invitado) => {
    const updated = await Gift.update({disponible, invitado},{
        where:{id:id}
    });
    if (updated[0]>0){
        const updtdGfst = await Gift.findOne({where:{id:id}});
        return updtdGfst;
    }else{
        return null;
    }
    
};


module.exports = {createGift, getGiftsList, updtDisponible};