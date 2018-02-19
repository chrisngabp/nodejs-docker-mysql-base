'use strict';

const userService = require('../services/user')
const models = require('../models')

class UserController { 

    async getUsers(req,res) {
        try{
            var usersResponse = []
            const users = await models.user.findAll({ raw: true })

            if (users.length > 0) {

                users.forEach(function(user){
                    usersResponse.push(userService.formatUser(user))
                  });

                res.status(200).json(usersResponse)
            } else {
                res.status(204).send("No Content")
            }

        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }

    async getUser(req,res) {   
         
        try{
            var user = await models.user.find({ where: { id: req.params.id } })

            if (user) {
                user = userService.formatUser(user)
                res.status(200).json(user)
            } else {
                res.status(204).send("No Content")
            }
            
        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }

    async createUser(req,res) {
        if (!userService.isValidUser(req.body)){
            res.status(400).send({ message: "Bad Request, verify the required fields" })
            return;
        }

        try {
            var user = await userService.saveUser(req.body)
            user = userService.formatUser(user)
            res.status(201).json(user)
        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }

    async updateUser(req,res) {
        if (!userService.isValidUser(req.body)){
            res.status(400).send({ message: "Bad Request, verify the required fields" })
            return;
        }

        try {
            var user = await userService.updateUser(req.params.id, req.body)
            user = userService.formatUser(user)
            res.status(200).json(user)
        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }

    async deleteUser(req,res) {
        
        try {
            await models.user.destroy({ where: { id: req.params.id } })
            res.status(200).send("deleted")
        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }
}

const userController = new UserController()
module.exports = userController