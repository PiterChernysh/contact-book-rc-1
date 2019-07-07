const contactsService = require("./contacts.service");
const ContactsModel = require("../contacts/contacts.model");

const getContactSchema = async () => {
    arrSchema = Object.keys(ContactsModel.schema.paths);
    arrSchema.remove('_id');
    arrSchema.remove('__v');
    arrSchema.remove('createdAt');
    arrSchema.remove('updatedAt');
    arrSchema.remove('addedBy');
    return arrSchema;
};

exports.GETaddContact = async (req, res, next) => {
    try {
        res.render("add_contact.nunjucks", {});
    } catch (e) {
        next(e);
    }
};
exports.POSTaddContact = async (req, res, next) => {
    try {
        res.json(await getContactSchema());
    } catch (e) {
        next(e);
    }
};

exports.addContact = async (req, res, next) => {
    try {
        req.body.addedBy = req.user._id;
        res.json({ data: await contactsService.addContact(req.body) });
    } catch (e) {
        next(e);
    }
};

exports.GETContactById = async (req, res, next) => {

    try {
         data = await contactsService.GETContactById(req.params.id, req.user._id);
        res.render("get_contact.nunjucks", {
            myData: data
        });
    } catch (e) {
        next(e);
    }
};
exports.GETupdateContactById= async (req, res, next) => {
    try {
         data = await contactsService.GETContactById(req.params.id, req.user._id);
        res.render("update_contact.nunjucks", {
            myData: data
        });
    } catch (e) {
        next(e);
    }
};
exports.updateContactById = async (req, res, next) => {
    console.log("A",req.params.id);
    console.log("B",req.body);
    console.log("C",req.user._id);
    try {
        res.json({
            data: await contactsService.updateContact(req.params.id, req.body, req.user._id)
        });
    } catch (e) {
        next(e);
    }
};

exports.getAllContactByUser = async (req, res, next) => {
    try {
       res.render("get_all_contacts.nunjucks", {});
   } catch (e) {
       next(e);
   }
};
exports.POSTgetAllContactByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.getAllContactByUser(req.user._id) });
    } catch (e) {
        next(e);
    }
};

exports.getCategoriContactByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.getCategoriContactByUser(req.params.name, req.user._id) });
    } catch (e) {
        next(e);
    }
};

exports.getCategoriByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.getCategoriByUser(req.user._id) });
    } catch (e) {
        next(e);
    }
};

exports.deleteOneContactByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.deleteOneContactByUser(req.params.id) });
    } catch (e) {
        next(e);
    }
};

exports.deleteCatrgoriByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.deleteCatrgoriByUser(req.params.name, req.user._id) });
    } catch (e) {
        next(e);
    }
};

exports.deleteAllContactByUser = async (req, res, next) => {
    try {
        res.json({ data: await contactsService.deleteAllContactByUser(req.user._id) });
    } catch (e) {
        next(e);
    }
};
