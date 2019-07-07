const ContactsModel = require("./contacts.model");


exports.addContact = data => {
    console.log(data);
    return ContactsModel.addContact(data);
};

exports.GETContactById = (id, initiator) => {
    return ContactsModel.GETContactById(id, initiator);
};

exports.updateContact = (id, data, initiator) => {
    return ContactsModel.updateContact(id, data, initiator);
};

exports.getAllContactByUser = (idUser) => {
    return ContactsModel.getAllContactByUser(idUser);
};

exports.getCategoriContactByUser = (nameCategori, idUser) => {
    return ContactsModel.getCategoriContactByUser(nameCategori, idUser);
};

exports.getCategoriByUser = (idUser) => {
    return ContactsModel.getCategoriByUser(idUser);
};

exports.deleteOneContactByUser = (idContact) => {
    return ContactsModel.deleteOneContactByUser(idContact);
};

exports.deleteCatrgoriByUser = (Categori, idUser) => {
    return ContactsModel.deleteCatrgoriByUser(Categori, idUser);
};

exports.deleteAllContactByUser = (idUser) => {
    return ContactsModel.deleteAllContactByUser(idUser);
};