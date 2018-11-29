const mongoose = require("mongoose");
const UserSchema = require ("./user.schema.server");
const userModel = mongoose.model("userModel", UserSchema);

UserModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.UpdateUser = updateUser;


function createUser(user) {
   return userModel.create(user);
 
}
function findUserById(uid)
return UserModel.findById(uid);
function findUserByUsername(username) {
    return UserModel.findOne({username: username });
}
function findUserByCredentials(username, password) {
    return userModel.findOne({ username: username, password: password});
}
function updateUser(uid, user){
    return UserModel.update({_id: uid}, user);
}

module.exports = UserModel;