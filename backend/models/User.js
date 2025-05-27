const users = [];

function createUser(data) {
  users.push(data);
  return data;
}

function getUserByEmail(email) {
  return users.find(u => u.email === email);
}

module.exports = { createUser, getUserByEmail };