const axios = require ("axios");
const {Guest} = require("./../../src/db")

const createGuest = async (nombre, apellido, email, telefono, cantidad, asiste, comentarios) =>
    await Guest.create({nombre, apellido, email, telefono, cantidad, asiste, comentarios});

const getGuestsList = async () => {
    const dbGuests = await Guest.findAll();
    return [...dbGuests];
}

const updtAsiste = async (id, asiste) => {
    const updated = await Guest.update({asiste},{
        where:{id:id}
    });
    if (updated[0]>0){
        const updtdGst = await Guest.findOne({where:{id:id}});
        return updtdGst;
    }else{
        return null;
    }
    
};

const modifyGuest = async (id,nombre, apellido, email, telefono, cantidad, asiste, comentarios) => {
    const modified = await Guest.update({nombre, apellido, email, telefono, cantidad, asiste, comentarios},
        {
            where: {id:id}
        }
        );
    if (modified[0]>0){
        const mdfdGst = await Guest.findOne({where:{id:id}});
        return mdfdGst;
    }else{
        return null;
    }
};

const deleteGuest = async (id) => {
    const deleted = await Guest.destroy({
        where:{id:id}
    });
    if(deleted>0){
        return true;
    }else{
        return null;
    }
}


module.exports = {createGuest, getGuestsList, updtAsiste, modifyGuest, deleteGuest};