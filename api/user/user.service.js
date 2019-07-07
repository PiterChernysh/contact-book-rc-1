const UserModel = require("./user.model");

exports.createUser = userData => {
    return UserModel.saveUser(userData);
};

exports.updateProfile = (id, data) => {
    return UserModel.updateProfile(id, data);
};

exports.deleteProfileById = (id) => {
    return UserModel.deleteProfileById(id);
};

exports.getAllUsers = () => {
    return UserModel.getAllUsers();
};

exports.getProfile = (id) => {
    return UserModel.getProfile(id);
};