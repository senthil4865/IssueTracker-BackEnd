const express = require('express');
const router = express.Router();
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')
const multer = require('./../middlewares/multer');
const issueController = require("./../controllers/issueController");
const notifyController = require("./../controllers/notifyController");

module.exports.setRouter = (app) => {
let baseUrl = `${appConfig.apiVersion}/issue`;
app.post(`${baseUrl}/create`, multer.upload.single('image'), issueController.createNewIssue);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issue/create api to Create New Issue.
     *
     * @apiParam {string} image Screenshot of the issue. (body params) (required)
     * @apiParam {string} title Title of the issue. (header params) (required)
     * @apiParam {string} status Status of the issue. (body params) (required)
     * @apiParam {string} description Description of the issue. (body params) (required)
     * @apiParam {string} assignee Assignee list with userId and userName. (body params) (required)
     * @apiParam {string} reporter Reporter list with userId and userName. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "Issue Created successfully"
            status: 200
            data:
            __v: 0
            issueId: "Q7PdAo-7"
            _id: "5e35d00fd0117b6968bfde6f"
            comments: []
            watchedBy: []
            assignedTo: (2) [{…}, {…}]
            screenshot: "1580584975418_gy--TAYdpScreenshotfrom.png"
            description: "some description"
            modifiedOn: "2020-02-01T07:58:13.044Z"
            reportedOn: "2020-02-01T07:58:13.044Z"
            reportedBy: [{…}]
            status: "in-progress"
            title: "Title1"
        }    
    */
app.get(`${baseUrl}/all`, auth.isAuthorized, issueController.getAllIssues);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {get} /api/v1/all api to Get all Issues.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "All Issue Details Found"
            status: 200
            data: Array(5)
            0: {_id: "5e307645ec8afe5df0cb7cef", issueId: "e5Q0kZkI", comments: Array(1), watchedBy: Array(1), assignedTo: Array(2), …}
            1: {_id: "5e31cc02d08b77782c916c13", issueId: "jocE-Y-V", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}
            2: {_id: "5e31cc4dd08b77782c916c17", issueId: "NafQrl68", comments: Array(0), watchedBy: Array(0), assignedTo: Array(1), …}
            3: {_id: "5e31e20de6171a2c101fe902", issueId: "rowniDXn", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}
            4: {_id: "5e35d00fd0117b6968bfde6f", issueId: "Q7PdAo-7", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}
            length: 5
        }    
    */
app.get(`${baseUrl}/:issueId/view`, auth.isAuthorized, issueController.getIssueById);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {get} /api/v1/:issueId/view api to Get Issue by Id.
     *
     * @apiParam {string} issueId issueId of the Issue. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "Issue Details Found"
            status: 200
            data:
            issueId: "e5Q0kZkI"
            comments: [{…}]
            watchedBy: [{…}]
            assignedTo: (2) [{…}, {…}]
            screenshot: "1580234358191_backgrounds.jpeg"
            description: "some description"
            modifiedOn: "2020-01-28T17:57:13.995Z"
            reportedOn: "2020-01-28T17:57:13.995Z"
            reportedBy: [{…}]
            status: "backlog"
            title: "someTitle"
        }    
    */
app.post(`${baseUrl}/:issueId/edit`, multer.upload.single('image'), issueController.editIssue);
  /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {get} /api/v1/:issueId/view api to Get Issue by Id.
     *
     * @apiParam {string} issueId issueId of the Issue. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "Issue Details Found"
            status: 200
            data:
            issueId: "e5Q0kZkI"
            comments: [{…}]
            watchedBy: [{…}]
            assignedTo: (2) [{…}, {…}]
            screenshot: "1580234358191_backgrounds.jpeg"
            description: "some description"
            modifiedOn: "2020-01-28T17:57:13.995Z"
            reportedOn: "2020-01-28T17:57:13.995Z"
            reportedBy: [{…}]
            status: "backlog"
            title: "someTitle"
        }    
    */
app.post(`${baseUrl}/:issueId/addComment`, auth.isAuthorized, issueController.addComment);
 /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/:issueId/addComment api to add comment.
     *
     * @apiParam {string} comment Array with userId,userName,commentTitle,commentDescription of Issue. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "Successfully Posted comment"
            status: 200
            data: null
        }    
    */
app.post(`${baseUrl}/:issueId/addWatcher`, auth.isAuthorized, issueController.addWatcher);
 /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/:issueId/addWatcher api to add Watcher.
     *
     * @apiParam {string} watching Array with userId,userName of Issue. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            error: false
            message: "Successfully Posted comment"
            status: 200
            data: null
        }    
    */
app.get(`${baseUrl}/:userId/notification`, auth.isAuthorized, notifyController.getNotifyById);
       /**
    * @apiGroup notification
    * @apiVersion  1.0.0
    * @api {get} /api/v1/notification/:userId/notification api for Getting all Notifications by Id.
    *
    * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
    * @apiParam {string} UserId Id of the user. (header params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "Notify Details Found",
        "status": 200,
        "data": [
            {
                "_id":"5e300d7e1d34764b1cf8bc3b",
                "notifyId":"2l4D42BL_",
                createdOn":"2020-01-28T10:31:26.033Z",
                "seen":false,
                "message":"senthil kumar has Commented aaaaa on someTitle",
                "issueId":"kiHpgKkU",
                "receiverId":"Pbo1GlwX",
                "receiverName":"",
                "senderId":"Q5GgjyVw",
                "senderName":"senthil kumar","
                __v":0
            }
        ]
    }
   */
   
    
        app.post(`${baseUrl}/:issueId/delete` , auth.isAuthorized ,issueController.deleteIssue);

        /**
         * @api {post} /api/v1/issue/:issueId/delete Delete issue by Id
         * @apiVersion 0.0.1
         * @apiGroup issue
         *
         * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
         * @apiParam {String} issueId The issueId of the issue. (params)
         * @apiParam {String} screenshot The name of screenshot to be deleted. (body) (required)
         * 
         * @apiSuccessExample {json} Success-Response:
         *    
         *   {
         *           error: false
         *           message: "Deleted the Issue successfully"
         *           status: 200
         *           data:
         *           issueId: "r5NqL8Zq"
         *           comments: []
         *           watchedBy: []
         *           assignedTo: (2) [{…}, {…}]
         *           screenshot: "1581172623196_background.jpeg"
         *           description: "some description"
         *           modifiedOn: "2020-02-08T13:55:05.668Z"
         *           reportedOn: "2020-02-08T13:55:05.668Z"
         *           reportedBy: [{…}]
         *           status: "Backlog"
         *           title: "some Issue"
         *   }
         *
         */
 
 
       app.post(`${baseUrl}/:issueId/addAssignee`, auth.isAuthorized, issueController.addAssignee);

       /**
       * @api {post} /api/v1/issue/:issueId/addAssignee Add assignee
       * @apiVersion 0.0.1
       * @apiGroup issue
       *
       * @apiParam {String} authToken The authToken for authentication. (query params)
       * @apiParam {String} issueId issueId of the issue. (params)
       * @apiParam {Array} assignee The Assignee array containing UserName and UserId. (body)
       * 
       * @apiSuccessExample {json} Success-Response:
       *    
       *   {
       *		"error": false,
       *		"message": "Successfully Added Assignee",
       *		"status": 200,
       *   }
       * @apiErrorExample {json} Error-Response:
       *
       * {
       *   "error": true,
       *   "message": "Failed to add Assignee",
       *   "status": 500,
       *   "data": null
       * }
       */

}




/** Run this command : apidoc -i routes/ -o apidoc/ */
