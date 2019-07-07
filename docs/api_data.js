define({ "api": [
  {
    "type": "post",
    "url": "/api/auth",
    "title": "Авторизация пользователя",
    "name": "authUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"password\": \"123456789\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Логин или пароль неверен</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"result\": {\n        \"_id\": \"5d15a5ec6d720117c9625abb\",\n        \"email\": \"test@test.com\",\n        \"password\": \"$2b$08$kFZWDqPtcijpOZL75APq1.OlQ4aDpqsFYFo9FCMkMiC/e3VyIIWk6\",\n        \"createdAt\": \"2019-06-28T05:30:20.353Z\",\n        \"updatedAt\": \"2019-06-28T05:30:20.353Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/check",
    "title": "Проверка авторизован ли пользователь",
    "name": "checkAuth",
    "group": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"result\": {\n        \"_id\": \"5d15a5ec6d720117c9625abb\",\n        \"email\": \"test@test.com\",\n        \"password\": \"$2b$08$kFZWDqPtcijpOZL75APq1.OlQ4aDpqsFYFo9FCMkMiC/e3VyIIWk6\",\n        \"createdAt\": \"2019-06-28T05:30:20.353Z\",\n        \"updatedAt\": \"2019-06-28T05:30:20.353Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/logout",
    "title": "Проверка авторизован ли пользователь",
    "name": "logOutUser",
    "group": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n       \"message\": \"logout success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/contacts/",
    "title": "Добавление нового контакта",
    "name": "addContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Фамилия пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameCategori",
            "description": "<p>Категория контакта</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>День рождения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones",
            "description": "<p>Номера телефонов</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social",
            "description": "<p>Социальная сеть</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Name\": \"Piter\",\n    \"surname\" \"Chernysh\",\n    \"nameCategori\": \"test contact\"\n    \"email\": \"test@test.com\",\n    \"birthday\": \"1992-01-01 00:00:00.000Z\",\n    \"description\": \"test contact\",\n    \"phones\": [\n        {\n            \"code\": \"+560\",\n            \"value\": \"3434567\"\n        }\n    ],\n    \"social\": {\n        \"insta\": \"https://www.instagram.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"data\": {\n        \"email\": [\n            \"2_contact@test.com\"\n        ],\n        \"_id\": \"5d160078a8b8cd3c087ebcc2\",\n        \"name\": \"Xoma\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"birthday\": \"2000-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"3434567\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/contacts/delete/catergori/:name",
    "title": "Удаляет категорию контактов",
    "name": "deleteCatrgoriByUser",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/contacts/delete/:id",
    "title": "Удаляет один контакт по id",
    "name": "deleteOneContactByUser",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/contacts/all",
    "title": "Возвращает профили всех контактов",
    "name": "getAllContactByUser",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  \"data\": [\n    {\n        \"_id\": \"3d150077a8b8cd3c087ebcc1\",\n        \"name\": \"Lisa\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"email\": [\n            \"2_contact@test.com\"\n        ],\n        \"birthday\": \"2000-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"246767\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5d160078a8b8cd3c087ebcc2\",\n        \"name\": \"Nikola\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"email\": [\n            \"1_contact@test.com\"\n        ],\n        \"birthday\": \"1999-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"2434567\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    }\n\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/contacts/categories",
    "title": "Возвращает уникальные  названия всех категорий пользователя",
    "name": "getCategoriByUser",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"data\": [\n        \"Home\",\n        \"Job\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/contacts/categories/:name",
    "title": "Возвращает контакты пользователя по названию категории",
    "name": "getCategoriContactByUser",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  \"data\": [\n    {\n        \"_id\": \"3d150077a8b8cd3c087ebcc1\",\n        \"name\": \"Lisa\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"email\": [\n            \"2_contact@test.com\"\n        ],\n        \"birthday\": \"2000-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"246767\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5d160078a8b8cd3c087ebcc2\",\n        \"name\": \"Nikola\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"email\": [\n            \"1_contact@test.com\"\n        ],\n        \"birthday\": \"1999-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"2434567\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    }\n\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/api/contacts/:id",
    "title": "Обновление контакта",
    "name": "updateContactById",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Фамилия пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameCategori",
            "description": "<p>Категория контакта</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>День рождения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones",
            "description": "<p>Номера телефонов</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social",
            "description": "<p>Социальная сеть</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Name\": \"Piter\",\n    \"surname\" \"Chernysh\",\n    \"nameCategori\": \"test contact\"\n    \"email\": \"test@test.com\",\n    \"birthday\": \"1992-01-01 00:00:00.000Z\",\n    \"description\": \"test contact\",\n    \"phones\": [\n        {\n            \"code\": \"+560\",\n            \"value\": \"3434567\"\n        }\n    ],\n    \"social\": {\n        \"insta\": \"https://www.instagram.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"data\": {\n        \"_id\": \"5d160078a8b8cd3c087ebcc2\",\n        \"name\": \"Nikola\",\n        \"surname\": \"Tarakan\",\n        \"nameCategori\": \"Home\",\n        \"email\": [\n            \"1_contact@test.com\"\n        ],\n        \"birthday\": \"1999-01-01T00:00:00.000Z\",\n        \"description\": \"test contact\",\n        \"phones\": [\n            {\n                \"_id\": \"5d160078a8b8cd3c087ebcc3\",\n                \"code\": \"+560\",\n                \"value\": \"2434567\"\n            }\n        ],\n        \"social\": {\n            \"insta\": \"https://www.instagram.com\"\n        },\n        \"addedBy\": \"5d160068a8b8cd3c087ebcc1\",\n        \"createdAt\": \"2019-06-28T11:56:40.864Z\",\n        \"updatedAt\": \"2019-06-28T11:56:40.864Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contacts/index.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/api/user/profile",
    "title": "Возвращает шаблон \"profile.nunjucks\" профиль пользователя",
    "name": "Profile",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/delete",
    "title": "Удаляет профиль пользователя",
    "name": "deleteProfileById",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n   \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/all",
    "title": "Возвращает профили всех пользователей",
    "name": "getAllUsers",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизова</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  \"data\": [\n      {\n         \"Name\": \"Piter\",\n         \"surname\" \"Chernysh\",\n         \"_id\": \"5d178663bb10ec40d73c4cf7\",\n         \"email\": \"1_test@test.com\"\n      },\n      {\n         \"Name\": \"Olga\",\n         \"surname\" \"Romanova\",\n         \"_id\": \"5d178668bb10ec40d73c4cf9\",\n         \"email\": \"2_test@test.com\"\n      },\n      {\n         \"Name\": \"Lara\",\n         \"surname\" \"Lukina\",\n         \"_id\": \"5d178668bb10ec40d73c4cf9\",\n         \"email\": \"3_test@test.com\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/profile",
    "title": "Возвращает профиль пользователя",
    "name": "getProfile",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"result\": {\n        \"_id\": \"5d15a5ec6d720117c9625abb\",\n        \"Name\": \"Piter\",\n        \"surname\" \"Chernysh\",\n        \"email\": \"test@test.com\",\n        \"password\": \"123456789\",\n        \"birthday\": \"1992-01-01 00:00:00.000Z\",\n        \"avatar\": \"5d15ae202765f2263c4bf180\",\n        \"role\": \"admin\",\n        \"createdAt\": \"2019-06-28T05:30:20.353Z\",\n        \"updatedAt\": \"2019-06-28T05:30:20.353Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "Регистрация нового пользователя",
    "name": "registerNewUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"password\": \"123456789\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь с таким логином существует</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"result\": {\n        \"_id\": \"5d15a5ec6d720117c9625abb\",\n        \"email\": \"test@test.com\",\n        \"password\": \"$2b$08$kFZWDqPtcijpOZL75APq1.OlQ4aDpqsFYFo9FCMkMiC/e3VyIIWk6\",\n        \"createdAt\": \"2019-06-28T05:30:20.353Z\",\n        \"updatedAt\": \"2019-06-28T05:30:20.353Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/update",
    "title": "Обновить профиль пользователя",
    "name": "updateProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Фамилия пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>День рождения</p>"
          },
          {
            "group": "Parameter",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "avatar",
            "description": "<p>Аватар</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Роль(admin, moderator, user)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Name\": \"Piter\",\n    \"surname\" \"Chernysh\",\n    \"email\": \"test@test.com\",\n    \"password\": \"123456789\",\n    \"birthday\": \"1992-01-01 00:00:00.000Z\",\n    \"avatar\": \"5d15ae202765f2263c4bf180\",\n    \"role\": \"admin\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Пользователь не авторизован</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"result\": {\n        \"_id\": \"5d15a5ec6d720117c9625abb\",\n        \"Name\": \"Piter\",\n        \"surname\" \"Chernysh\",\n        \"email\": \"test@test.com\",\n        \"password\": \"123456789\",\n        \"birthday\": \"1992-01-01 00:00:00.000Z\",\n        \"avatar\": \"5d15ae202765f2263c4bf180\",\n        \"role\": \"admin\",\n        \"createdAt\": \"2019-06-28T05:30:20.353Z\",\n        \"updatedAt\": \"2019-06-28T05:30:20.353Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "User"
  }
] });
