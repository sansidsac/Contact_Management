import express from "express";
import contactModel from "../model/contactModel.js";

const router = express.Router();

// POST
router.post('/', (request, response) => {
    const contact = request.body;
    const newContact = new contactModel(contact);
    newContact.save()
        .then(() => {
            response.send('Contact added successfully');
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

// GET ALL
router.get('/', (request, response) => {
    contactModel.find()
        .then((contacts) => {
            response.send(contacts);
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

// GET ONE
router.get('/:id', (request, response) => {
    contactModel.findById(request.params.id)
        .then((contact) => {
            if (!contact) {
                return response.status(404).send('Contact not found');
            }
            response.send(contact);
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

// UPDATE
router.put('/:id', (request, response) => {
    contactModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((updatedContact) => {
            if (!updatedContact) {
                return response.status(404).send('Contact not found');
            }
            response.send(updatedContact);
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

// DELETE ONE
router.delete('/:id', (request, response) => {
    contactModel.findByIdAndDelete(request.params.id)
        .then((deletedContact) => {
            if (!deletedContact) {
                return response.status(404).send('Contact not found');
            }
            response.send('Contact deleted successfully');
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

// DELETE ALL
router.delete('/', (request, response) => {
    contactModel.deleteMany()
        .then(() => {
            response.send('All contacts deleted successfully');
        })
        .catch((e) => {
            response.status(500).send(e);
        });
});

export default router;
