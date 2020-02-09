const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter=(app)=>{

    let baseUrl = `${appConfig.apiVersion}/users`;

    app.post(`${baseUrl}/signup`,userController.signUpFunction);
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User Created",
        "status": 200,
        "data": [
            {
              __v: 0
               _id: "5e108d2a5e0af90ec0f7201e"
               friendRequestSent: []
               friendRequestReceived: []
               friends: []
               emailVerified: "No"
               validationToken: ""
               email: "angularnode4861@gmail.com"
               mobileNumber: "91 1234567890"
               countryName: "IN"
               lastName: "Node"
               firstName: "Angular"
               userId: "Q985UwlM"
            }
        }
    */
    app.post(`${baseUrl}/login`, userController.loginFunction);
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
               authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik9BOFRkYlJsIiwiaWF0IjoxNTc4MTQzMDk5NzUwLCJleHAiOjE1NzgyMjk0OTksInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9BcHAiLCJkYXRhIjp7ImZyaWVuZFJlcXVlc3RTZW50IjpbeyJfaWQiOiI1ZTEwNDU3MTgwNjRjMTNjMmNlNGJkNzkiLCJmcmllbmROYW1lIjoiYWJjIHh5eiIsImZyaWVuZElkIjoicG9SbndoYnUifV0sImZyaWVuZFJlcXVlc3RSZWNpZXZlZCI6W10sImZyaWVuZHMiOlt7Il9pZCI6IjVlMTAzNjAyYjY2M2RmNWE5Y2M3Nzk4YyIsImZyaWVuZE5hbWUiOiJrdW1hciBzZW50aGlsIiwiZnJpZW5kSWQiOiJnVjFRblRIUiJ9XSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImVtYWlsIjoic2VudGhpbDQ4NjFAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjoiOTEgNjMwMzE5ODA0NCIsImNvdW50cnlOYW1lIjoiSU4iLCJsYXN0TmFtZSI6Imt1bWFyIiwiZmlyc3ROYW1lIjoic2VudGhpbCIsInVzZXJJZCI6IndFMFlkeTd4In19.b_uKLa07cLUe-8Z9tm1jtaWqLEh2pEkR59eyzRYv7wU"
               userDetails:
               friendRequestSent: [{…}]
               friendRequestReceived: []
               friends: [{…}]
               emailVerified: "Yes"
               validationToken: ""
               email: "senthil4861@gmail.com"
               mobileNumber: "91 6303198044"
               countryName: "IN"
               lastName: "kumar"
               firstName: "senthil"
               userId: "wE0Ydy7x"
            }
        }
    */
    app.post(`${baseUrl}/socialSignup`, userController.socialSignIn);
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                error: false
                message: "User created"
                status: 200
                data:
                authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlFva0U0UEdMIiwiaWF0IjoxNTgwNjY0NjY2MDQ0LCJleHAiOjE1ODA3NTEwNjYsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9BcHAiLCJkYXRhIjp7Il9pZCI6IjVlMmZkOTZjYjVjOWJlNDE2NGE4Njg0MyIsIl9fdiI6MCwicmVwb3J0ZWRJc3N1ZXMiOltdLCJ3YXRjaGluZ0lzc3VlcyI6W10sImFzc2lnbmVkSXNzdWVzIjpbXSwiZW1haWwiOiJzZW50aGlsNDg2MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR4RTNKYnFvWWRVckJCdE9YZ3IzWHouNEh2MlFOQmYwQy5rLlZockJwMlhCSGwxVGg1bENJZSIsIm1vYmlsZU51bWJlciI6IjkxIDYzMDMxOTgwNDQiLCJjb3VudHJ5TmFtZSI6IklOIiwibGFzdE5hbWUiOiJrdW1hciIsImZpcnN0TmFtZSI6InNlbnRoaWwiLCJ1c2VySWQiOiJRNUdnanlWdyJ9fQ.nGOfmudBXIPTFaVgexg5JXqe1Y3FyyQ3MpmujuqmsQE"
                userDetails:
                _id: "5e2fd96cb5c9be4164a86843"
                __v: 0
                reportedIssues: []
                watchingIssues: []
                assignedIssues: []
                email: "senthil4861@gmail.com"
                password: "$2b$10$xE3JbqoYdUrBBtOXgr3Xz.4Hv2QNBf0C.k.VhrBp2XBHl1Th5lCIe"
                mobileNumber: "91 6303198044"
                countryName: "IN"
                lastName: "kumar"
                firstName: "senthil"
                userId: "Q5GgjyVw"
        }
    */


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
               __v: 0
               _id: "5e108d2a5e0af90ec0f7201e"
               friendRequestSent: []
               friendRequestReceived: []
               friends: []
               emailVerified: "No"
               validationToken: ""
               email: "angularnode4861@gmail.com"
               mobileNumber: "91 1234567890"
               countryName: "IN"
               lastName: "Node"
               firstName: "Angular"
               userId: "Q985UwlM"
                }
            ]
        }
    */
    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */

}


