import mongoose from 'mongoose';
//importing schema
import {ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err,contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find({},(err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithId = (req, res) =>{
    Contact.findById(req.params.contactId, (err, contact)=> {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContacts = (req, res) => {
    /*findOneAndUpdate takes param from reqest
    actual body of the request to create new data
    response as new old, if we don't give this option we'll get old data
    err and contact is same in all methods.
    */
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, 
        {new: true} , (err, contact )=>{
        if(err){
            res.send(err);
        }
        res.send(contact);
    });
}; 

export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactId }, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.send({message: 'Succesfully deleted contact'});
    })
}