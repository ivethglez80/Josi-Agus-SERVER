const {Router} = require("express");
// const mailRoute = require ("./sendEmailRoute");
const attendeeToDb = require ("./attendee");
const giftToDb = require ("./gift")


const mainRouter = Router();

// mainRouter.use("/email", mailRoute);
mainRouter.use("/guestsDB", attendeeToDb);
mainRouter.use("/giftsDB", giftToDb);

module.exports = mainRouter;