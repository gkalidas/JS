import { addNewContact, 
    getContacts, 
    getContactWithId, 
    updateContacts,
    deleteContact,
 } from "../controllers/crmController";


const routes = (app) => {
    app.route('/contact')
    .get((req, res,next) =>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();

    },getContacts)
    
//post endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get specific contact
    .get(getContactWithId)
    //put request
    .put(updateContacts)

    //delete request
    .delete(deleteContact);
}

export default routes;
