define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/addAssignee",
    "title": "Add assignee",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "assignee",
            "description": "<p>The Assignee array containing UserName and UserId. (body)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully Added Assignee\",\n\t\t\"status\": 200,\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed to add Assignee\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidAddassignee"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/delete",
    "title": "Delete issue by Id",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenshot",
            "description": "<p>The name of screenshot to be deleted. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n{\n        error: false\n        message: \"Deleted the Issue successfully\"\n        status: 200\n        data:\n        issueId: \"r5NqL8Zq\"\n        comments: []\n        watchedBy: []\n        assignedTo: (2) [{…}, {…}]\n        screenshot: \"1581172623196_background.jpeg\"\n        description: \"some description\"\n        modifiedOn: \"2020-02-08T13:55:05.668Z\"\n        reportedOn: \"2020-02-08T13:55:05.668Z\"\n        reportedBy: [{…}]\n        status: \"Backlog\"\n        title: \"some Issue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidDelete"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/all",
    "title": "api to Get all Issues.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"All Issue Details Found\"\n    status: 200\n    data: Array(5)\n    0: {_id: \"5e307645ec8afe5df0cb7cef\", issueId: \"e5Q0kZkI\", comments: Array(1), watchedBy: Array(1), assignedTo: Array(2), …}\n    1: {_id: \"5e31cc02d08b77782c916c13\", issueId: \"jocE-Y-V\", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}\n    2: {_id: \"5e31cc4dd08b77782c916c17\", issueId: \"NafQrl68\", comments: Array(0), watchedBy: Array(0), assignedTo: Array(1), …}\n    3: {_id: \"5e31e20de6171a2c101fe902\", issueId: \"rowniDXn\", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}\n    4: {_id: \"5e35d00fd0117b6968bfde6f\", issueId: \"Q7PdAo-7\", comments: Array(0), watchedBy: Array(0), assignedTo: Array(2), …}\n    length: 5\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "GetApiV1All"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/:issueId/view",
    "title": "api to Get Issue by Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the Issue. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"Issue Details Found\"\n    status: 200\n    data:\n    issueId: \"e5Q0kZkI\"\n    comments: [{…}]\n    watchedBy: [{…}]\n    assignedTo: (2) [{…}, {…}]\n    screenshot: \"1580234358191_backgrounds.jpeg\"\n    description: \"some description\"\n    modifiedOn: \"2020-01-28T17:57:13.995Z\"\n    reportedOn: \"2020-01-28T17:57:13.995Z\"\n    reportedBy: [{…}]\n    status: \"backlog\"\n    title: \"someTitle\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "GetApiV1IssueidView"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/:issueId/view",
    "title": "api to Get Issue by Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the Issue. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"Issue Details Found\"\n    status: 200\n    data:\n    issueId: \"e5Q0kZkI\"\n    comments: [{…}]\n    watchedBy: [{…}]\n    assignedTo: (2) [{…}, {…}]\n    screenshot: \"1580234358191_backgrounds.jpeg\"\n    description: \"some description\"\n    modifiedOn: \"2020-01-28T17:57:13.995Z\"\n    reportedOn: \"2020-01-28T17:57:13.995Z\"\n    reportedBy: [{…}]\n    status: \"backlog\"\n    title: \"someTitle\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "GetApiV1IssueidView"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/create",
    "title": "api to Create New Issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>Screenshot of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the issue. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>Assignee list with userId and userName. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporter",
            "description": "<p>Reporter list with userId and userName. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"Issue Created successfully\"\n    status: 200\n    data:\n    __v: 0\n    issueId: \"Q7PdAo-7\"\n    _id: \"5e35d00fd0117b6968bfde6f\"\n    comments: []\n    watchedBy: []\n    assignedTo: (2) [{…}, {…}]\n    screenshot: \"1580584975418_gy--TAYdpScreenshotfrom.png\"\n    description: \"some description\"\n    modifiedOn: \"2020-02-01T07:58:13.044Z\"\n    reportedOn: \"2020-02-01T07:58:13.044Z\"\n    reportedBy: [{…}]\n    status: \"in-progress\"\n    title: \"Title1\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueCreate"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/:issueId/addComment",
    "title": "api to add comment.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Array with userId,userName,commentTitle,commentDescription of Issue. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"Successfully Posted comment\"\n    status: 200\n    data: null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueidAddcomment"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/:issueId/addWatcher",
    "title": "api to add Watcher.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watching",
            "description": "<p>Array with userId,userName of Issue. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    error: false\n    message: \"Successfully Posted comment\"\n    status: 200\n    data: null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueidAddwatcher"
  },
  {
    "group": "notification",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/notification/:userId/notification",
    "title": "api for Getting all Notifications by Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Notify Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\":\"5e300d7e1d34764b1cf8bc3b\",\n            \"notifyId\":\"2l4D42BL_\",\n            createdOn\":\"2020-01-28T10:31:26.033Z\",\n            \"seen\":false,\n            \"message\":\"senthil kumar has Commented aaaaa on someTitle\",\n            \"issueId\":\"kiHpgKkU\",\n            \"receiverId\":\"Pbo1GlwX\",\n            \"receiverName\":\"\",\n            \"senderId\":\"Q5GgjyVw\",\n            \"senderName\":\"senthil kumar\",\"\n            __v\":0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "notification",
    "name": "GetApiV1NotificationUseridNotification"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n       __v: 0\n       _id: \"5e108d2a5e0af90ec0f7201e\"\n       friendRequestSent: []\n       friendRequestReceived: []\n       friends: []\n       emailVerified: \"No\"\n       validationToken: \"\"\n       email: \"angularnode4861@gmail.com\"\n       mobileNumber: \"91 1234567890\"\n       countryName: \"IN\"\n       lastName: \"Node\"\n       firstName: \"Angular\"\n       userId: \"Q985UwlM\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n       authToken: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik9BOFRkYlJsIiwiaWF0IjoxNTc4MTQzMDk5NzUwLCJleHAiOjE1NzgyMjk0OTksInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9BcHAiLCJkYXRhIjp7ImZyaWVuZFJlcXVlc3RTZW50IjpbeyJfaWQiOiI1ZTEwNDU3MTgwNjRjMTNjMmNlNGJkNzkiLCJmcmllbmROYW1lIjoiYWJjIHh5eiIsImZyaWVuZElkIjoicG9SbndoYnUifV0sImZyaWVuZFJlcXVlc3RSZWNpZXZlZCI6W10sImZyaWVuZHMiOlt7Il9pZCI6IjVlMTAzNjAyYjY2M2RmNWE5Y2M3Nzk4YyIsImZyaWVuZE5hbWUiOiJrdW1hciBzZW50aGlsIiwiZnJpZW5kSWQiOiJnVjFRblRIUiJ9XSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImVtYWlsIjoic2VudGhpbDQ4NjFAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjoiOTEgNjMwMzE5ODA0NCIsImNvdW50cnlOYW1lIjoiSU4iLCJsYXN0TmFtZSI6Imt1bWFyIiwiZmlyc3ROYW1lIjoic2VudGhpbCIsInVzZXJJZCI6IndFMFlkeTd4In19.b_uKLa07cLUe-8Z9tm1jtaWqLEh2pEkR59eyzRYv7wU\"\n       userDetails:\n       friendRequestSent: [{…}]\n       friendRequestReceived: []\n       friends: [{…}]\n       emailVerified: \"Yes\"\n       validationToken: \"\"\n       email: \"senthil4861@gmail.com\"\n       mobileNumber: \"91 6303198044\"\n       countryName: \"IN\"\n       lastName: \"kumar\"\n       firstName: \"senthil\"\n       userId: \"wE0Ydy7x\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        error: false\n        message: \"User created\"\n        status: 200\n        data:\n        authToken: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlFva0U0UEdMIiwiaWF0IjoxNTgwNjY0NjY2MDQ0LCJleHAiOjE1ODA3NTEwNjYsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9BcHAiLCJkYXRhIjp7Il9pZCI6IjVlMmZkOTZjYjVjOWJlNDE2NGE4Njg0MyIsIl9fdiI6MCwicmVwb3J0ZWRJc3N1ZXMiOltdLCJ3YXRjaGluZ0lzc3VlcyI6W10sImFzc2lnbmVkSXNzdWVzIjpbXSwiZW1haWwiOiJzZW50aGlsNDg2MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR4RTNKYnFvWWRVckJCdE9YZ3IzWHouNEh2MlFOQmYwQy5rLlZockJwMlhCSGwxVGg1bENJZSIsIm1vYmlsZU51bWJlciI6IjkxIDYzMDMxOTgwNDQiLCJjb3VudHJ5TmFtZSI6IklOIiwibGFzdE5hbWUiOiJrdW1hciIsImZpcnN0TmFtZSI6InNlbnRoaWwiLCJ1c2VySWQiOiJRNUdnanlWdyJ9fQ.nGOfmudBXIPTFaVgexg5JXqe1Y3FyyQ3MpmujuqmsQE\"\n        userDetails:\n        _id: \"5e2fd96cb5c9be4164a86843\"\n        __v: 0\n        reportedIssues: []\n        watchingIssues: []\n        assignedIssues: []\n        email: \"senthil4861@gmail.com\"\n        password: \"$2b$10$xE3JbqoYdUrBBtOXgr3Xz.4Hv2QNBf0C.k.VhrBp2XBHl1Th5lCIe\"\n        mobileNumber: \"91 6303198044\"\n        countryName: \"IN\"\n        lastName: \"kumar\"\n        firstName: \"senthil\"\n        userId: \"Q5GgjyVw\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n      __v: 0\n       _id: \"5e108d2a5e0af90ec0f7201e\"\n       friendRequestSent: []\n       friendRequestReceived: []\n       friends: []\n       emailVerified: \"No\"\n       validationToken: \"\"\n       email: \"angularnode4861@gmail.com\"\n       mobileNumber: \"91 1234567890\"\n       countryName: \"IN\"\n       lastName: \"Node\"\n       firstName: \"Angular\"\n       userId: \"Q985UwlM\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridLogout"
  }
] });
