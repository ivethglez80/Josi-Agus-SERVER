
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

const modifyGift = async (id, imagen, nombre_art, descripcion, link, invitado) => {
    const modified = await Gift.update ({id, imagen, nombre_art, descripcion, link, invitado},
        {
            where: {id:id}
        }
        );
    if (modified[0]>0){
        const mdfdGft = await Gift.findOne({where:{id:id}});
        return mdfdGft;
    }else{
        return null;
    }
};

const deleteGift = async (id) => {
    const deleted = await Gift.destroy({
        where:{id:id}
    })
    if (deleted>0){
        return true;
    }else{
        return null;
    }
}


module.exports = {createGift, getGiftsList, updtDisponible, modifyGift, deleteGift};