const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const UserCollection = require("../user/user.model");
// TODO: разграничить данные по user'ам

const ContactsSchema = new Schema(
    {
        name: { type: String, trim: true },
        surname: { type: String, trim: true },
        nameCategori: { type: String, trim: true },
        email: { type: [{ type: String, trim: true, lowercase: true }] },
        birthday: { type: Date },
        //avatar: { type: Schema.Types.ObjectId, ref: "FilesModel" },
        description: { type: String },
        phones: {type: [{ type: String }]},
        social: {
            fb: { type: String },
            insta: { type: String }
        },
        addedBy: { type: Schema.Types.ObjectId, ref: "UsersModel" }
    },
    {
        collection: "ContactsCollection",
        timestamps: true
    }
);

ContactsSchema.statics = {

    addContact: function (data) {
        return this.create(data);
    },
    GETContactById: async function (id, initiator) {
        const doc = this.findOne({ _id: id, addedBy: initiator }).exec();
        if (!doc) {
            throw new Error("contact not found");
        }
        return doc;
    },
    updateContact: async function (id, data, initiator) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        const doc = await this.findOne({ _id: id, addedBy: initiator }).exec();
        console.log(doc);
        if (!doc) {
            throw new Error("contact not found");
        }
        Object.assign(doc, data);
        return doc.save();
    },
    getAllContactByUser: function (user) {
        return this.find({
            addedBy: user
        })
            .lean()
            .exec();
    },
    getCategoriContactByUser: function (nameCat, idUser) {
        return this.find({
            addedBy: idUser, nameCategori: nameCat
        })
            .lean()
            .exec();
    },
    getCategoriByUser: function (idUser) {
        return this.find({ addedBy: idUser })
            .distinct("nameCategori")
            .lean()
            .exec();
    },
    deleteOneContactByUser: async function (idContact) {
        const doc = await this.deleteOne({ _id: idContact }).exec();
        if (doc["deletedCount"] < 1) {
            throw new Error("contact not found");
        }
        return doc;
    },
    deleteCatrgoriByUser: async function (Categori, idUser) {
        const doc = await this.deleteMany({ addedBy: idUser, nameCategori: Categori }).exec();
        if (doc["deletedCount"] < 1) {
            throw new Error("contact not found");
        }
        return doc;
    },
    deleteAllContactByUser: async function (idUser) {
        const doc = await this.deleteMany({ addedBy: idUser }).exec();
        if (doc["deletedCount"] < 1) {
            
        }
        return doc;
    }
};

module.exports = mongoose.model("ContactsModel", ContactsSchema);
