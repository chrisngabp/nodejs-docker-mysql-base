'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      resolve: user => user.first_name
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    profilePic: {
      type: DataTypes.STRING,
      field: 'profile_pic'
    },
    email: {
      type: DataTypes.STRING,
      field: 'email'
    }
  });

  return user;
};
