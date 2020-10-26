const { technology } = require("../models/index.js");

module.exports = app => {
    const technology = require("../controllers/technology.controller.js");

    var router = require("express").Router();

    // Create a new Technologies
    router.post("/", technology.create);

    // Retrieve all Technologies
    router.get("/", technology.findAll);

    // Delete a Technologies with id
    router.delete("/:id", technology.delete);

    app.use('/technologies', router);
};