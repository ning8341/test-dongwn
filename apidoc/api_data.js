define({ "api": [
  {
    "type": "get",
    "url": "/api/user",
    "title": "用户列表信息获取",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileSize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileExt",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encodedFileName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "20",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "user",
    "name": "GetApiUser"
  },
  {
    "type": "get",
    "url": "path",
    "title": "/api/user/:id",
    "name": "根据id获取用户信息",
    "group": "user",
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "user"
  }
] });
