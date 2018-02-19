'use strict';

const models = require('../models')

class UserService {

    isValidUser (body) {
        return body.first_name && body.last_name && body.profile_pic && body.email
    }

    async saveUser (body) {
        var user = await models.user.create({
                    firstName: body.first_name,
                    lastName: body.last_name,
                    profilePic: body.profile_pic,
                    email: body.email
                });
        return user
    }

    async updateUser(userId, body) {
        var user = await models.user.find({ where: { id: userId } })

        if (!user) {
            throw new Error(ex.toString())
        }

        var userUpdated = await user.updateAttributes({
            firstName: body.first_name,
            lastName: body.last_name,
            profilePic: body.profile_pic,
            email: body.email
          })

        return userUpdated
    }

    formatUser(userObject) {
        return {
            id: userObject.id,
            first_name: userObject.firstName,
            last_name: userObject.lastName,
            profile_pic: userObject.profilePic,
            email: userObject.email
        }
    }
}

const userService = new UserService()
module.exports = userService
