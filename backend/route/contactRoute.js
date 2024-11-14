import express from "express";
import contactModel from "../model/contactModel.js";

const router=express.Router()

//POST
router.post('/',(request,response)=>{
    const contact = request.body;
    const newContact = new contactModel(contact);
    newContact.save()
    .then(()=>{
        response.send('Contact added successfully');
    })
    .catch((e)=>{
        response.send(e);
    })
})

//GET ALL
router.get('/',(request,response)=>{
    contactModel.find()
    .then((contacts)=>{
        response.send(contacts);
    })
    .catch((e)=>{
        response.send(e);
    })
})

//GET ONE
router.get('/:id',(request,response)=>{
    contactModel.findById(request.params.id)
    .then((contact)=>{
        response.send(contact);
    })
    .catch((e)=>{
        response.send(e);
    })
})

//UPDATE
router.put('/:id',(request,response)=>{
    contactModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then((updatedContact)=>{
        response.send(updatedContact);
    })
    .catch((e)=>{
        response.send(e);
    })
})

//DELETE ONE
router.delete('/:id',(request,response)=>{
    contactModel.findByIdAndDelete(request.params.id)
    .then(()=>{
        response.send('Contact deleted successfully');
    })
    .catch((e)=>{
        response.send(e);
    })
})

//DELETE ALL
router.delete('/',(request,response)=>{
    contactModel.deleteMany()
    .then(()=>{
        response.send('All contacts deleted successfully');
    })
    .catch((e)=>{
        response.send(e);
    })
})

export default router;
