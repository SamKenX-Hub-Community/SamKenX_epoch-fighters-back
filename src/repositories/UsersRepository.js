const UserModel = require('../models/User');

class UsersRepository {

  getUserByAddress (address) {
    return UserModel.where().findOne({address}).exec();
  }

  getAllUsers () {
    return UserModel.find().exec();
  }

  getUserByToken (token) {
    return UserModel.findOne({token}).exec();
  }

  getUserAddress (address) {
    return UserModel.findOne({address}).exec();
  }

  getUser (id) {
    return UserModel.findOne({_id: id}).exec();
  }

  async updateToken(address, token, expireAt) {
    UserModel.updateOne({address}, {token, expireAt});
  }

  async updateAmount(token, newAmount) {
    UserModel.updateOne({token}, {amount: newAmount});
  }

  addUser(userData) {
    const newUser = new UserModel(userData);
    newUser.save();
  }
}

module.exports = new UsersRepository();
