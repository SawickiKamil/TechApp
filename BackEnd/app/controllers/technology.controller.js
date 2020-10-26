const db = require("../models");
const Technology = db.technology;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Technology
    const technology = new Technology({
        name: req.body.name,
        language: req.body.language,
        description: req.body.description,
        initRelease: req.body.initRelease,
    });
    // Save Technology in the database
    technology
        .save(technology)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Technology."
            });
        });
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Technology.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving technologies."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Technology.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Technology with id=${id}. Maybe Technology was not found!`
                });
            } else {
                res.send({
                    message: "Technology was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Technology with id=" + id
            });
        });
};
