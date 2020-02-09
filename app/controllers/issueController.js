const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const emailLib = require('../libs/emailLib');
const User=require('../models/User');
const Issue=require('../models/Issue');
const fs = require("fs");




let createNewIssue = (req, res) => {
    let assignees = JSON.parse(req.body.assignee)
    let reporter = JSON.parse(req.body.reporter)
   
    if (req.file) {
        let newIssue = new Issue({
            issueId: shortid.generate(),
            title: req.body.title,
            status: req.body.status,
            reportedBy: reporter,
            description: req.body.description,
            assignedTo: assignees,
            screenshot: req.file.filename,
            createdOn: time.now()
        })

        newIssue.save((err, newIssue) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'IssueController: createIssue', 10)
                let apiResponse = response.generate(true, 'Failed to create new Issue', 500, null)
                res.send(apiResponse)
            } else {
                let newIssueObj = newIssue.toObject();
                let apiResponse = response.generate(false, 'Issue Created successfully', 200, newIssueObj)
                res.send(apiResponse)
            }
        })

    } else {

        let apiResponse = response.generate(true, 'Please make sure you have selected an Image', 500, null)
        res.send(apiResponse)

    }
    }

    let getAllIssues = (req, res) => {

        Issue.find()
            .count((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'IssueController: getAllIssue', 10)
                    let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Issue Found', 'IssueController: getAllIssue')
                    let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let count = result
                    let pageNumber = parseInt(req.query.pageIndex)
                    let nPerPage = parseInt(req.query.pageSize)
                    let key = req.query.sort.split('.')[0]
                    let order = parseInt(req.query.sort.split('.')[1])
    
                    Issue.find()
                         .select()
                         .sort({ [key]: order })
                         .skip(pageNumber > 0 ? ((pageNumber) * nPerPage) : 0)
                         .limit(nPerPage)
                         .lean()
                         .exec((err, result) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'IssueController: getAllIssue', 10)
                                let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null)
                                res.send(apiResponse)
                            } else if (check.isEmpty(result)) {
                                logger.info('No Issue Found', 'IssueController: getAllIssue')
                                let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                                res.send(apiResponse)
                            } else {
                                let apiResponse = response.generate(false, 'All Issue Details Found', 200, result);
                                apiResponse.count = count
                                res.send(apiResponse);
                            }
                        })
                }
            })
    }


    let getIssueById = (req, res) => {
        Issue.findOne({issueId: req.params.issueId })
            .select('-__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'IssueController: getSingleIssue', 10)
                    let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Issue Found', 'IssueController:getSingleIssue')
                    let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Issue Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    }

    let editIssue = (req, res) => {
        req.body.assignee = JSON.parse(req.body.assignee)
        req.body.reporter = JSON.parse(req.body.reporter)
        if (req.file) {
    
                           //Deleting previous screenshot
                        fs.unlinkSync('./uploads/' + req.body.oldScreenshot);

                        let options = {
                            title:req.body.title,
                            status:req.body.status,
                            description:req.body.description,
                            assignedTo:req.body.assignee,
                            reportedBy:req.body.reporter,
                            screenshot:req.file.filename
            
                        }

                        Issue.update({issueId: req.params.issueId }, options)
                            .select('-__v -_id')
                            .lean()
                            .exec((err, result) => {
                                if (err) {
                                    if (err.code === 11000) {
                                        let apiResponse = response.generate(true, 'Issue should be unique', 400, null)
                                        res.send(apiResponse)
    
                                    } else {
    
                                        logger.error(err.message, 'IssueController: getSingleIssue', 10)
                                        let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null)
                                        res.send(apiResponse)
    
                                    }
                                } else if (check.isEmpty(result)) {
                                    logger.info('No Issue Found', 'IssueController:getSingleIssue')
                                    let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                                    res.send(apiResponse)
                                } else {
                                    let apiResponse = response.generate(false, 'Issue Details Updated', 200, result)
                                    res.send(apiResponse)
                                }
                            })
    
                 
    
        } else {
    
            let options = {
                title:req.body.title,
                status:req.body.status,
                description:req.body.description,
                assignedTo:req.body.assignee,
                reportedBy:req.body.reporter,
                screenshot:req.body.oldScreenshot

            }
            Issue.update({issueId: req.params.issueId }, options)
                .select('-__v -_id')
                .lean()
                .exec((err, result) => {
                    if (err) {
                        if (err.code === 11000) {
                            let apiResponse = response.generate(true, 'Issue should be unique', 400, null)
                            res.send(apiResponse)
    
                        } else {
    
                            logger.error(err.message, 'IssueController: getSingleIssue', 10)
                            let apiResponse = response.generate(true, 'Failed To Edit Issue Details', 500, null)
                            res.send(apiResponse)
    
                        }
                    } else if (check.isEmpty(result)) {
                        logger.info('No Issue Found', 'IssueController:getSingleIssue')
                        let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Issue Details Updated', 200, result)
                        res.send(apiResponse)
                    }
                })
        }
    }



    let addComment = (req, res) => {
        let comment = JSON.parse(req.body.comment)
    
        let options = { $push: { comments: comment } }
        Issue.update({issueId: req.params.issueId }, options).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'issueController: Database error', 10)
                let apiResponse = response.generate(true, 'Failed To Posted comment', 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Successfully Posted comment', 200, null)
                res.send(apiResponse)
            }
        });// end issue model update
    
    }


    
let addAssignee = (req, res) => {
    req.body.assignee = JSON.parse(req.body.assignee)

    let options = { $set: { assignee: req.body.assignee } }
    Issue.update({issueId: req.params.issueId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'issueController: Database error', 10)
            let apiResponse = response.generate(true, 'Failed to add Assignee', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Successfully Added Assignee', 200, null)
            res.send(apiResponse)
        }
    });// end issue model update

}



let addWatcher = (req, res) => {
    req.body.watching = JSON.parse(req.body.watching)
    let options = { $push: { watchedBy: req.body.watching } }
    Issue.update({issueId: req.params.issueId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'issueController: Database error', 10)
            let apiResponse = response.generate(true, 'Failed To Add as Watching', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Successfully Add as Watching', 200, result)
            res.send(apiResponse)
        }
    });

}




let deleteIssue = (req, res) => {

    Issue.findOneAndRemove({ issueId: req.params.issueId }).select(' -__v -_id -password').exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'IssueController: deleteIssue', 10)
            let apiResponse = response.generate(true, 'Failed To delete Issue', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Issue Found', 'IssueController: deleteIssue')
            let apiResponse = response.generate(true, 'No Issue Found', 404, null)
            res.send(apiResponse)
        } else {
           // req.body.previous = req.body.previous.split('/uploads/')[1]
            fs.unlinkSync('./uploads/' +  req.body.screenshot);

            let apiResponse = response.generate(false, 'Deleted the Issue successfully', 200, result)
            res.send(apiResponse)
        }
    });// end Issue model find and remove


}// end delete Issue


module.exports = {
       getAllIssues: getAllIssues,
       getIssueById: getIssueById,
       createNewIssue: createNewIssue,
       editIssue: editIssue,
       addComment : addComment,
       addAssignee : addAssignee,
       addWatcher : addWatcher,
       deleteIssue : deleteIssue
}


