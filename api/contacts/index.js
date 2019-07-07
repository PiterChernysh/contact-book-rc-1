const { Router } = require("express");
const router = Router();
const ctrl = require("./contacts.controller");
const val = require("./contacts.validation");
const { validate, authorizeUser } = require("../middlewares");

/**
 * @api {get}  /api/contacts/ Возвращает шаблон "add_contact.nunjucks" Добавление нового контакта
 * @apiName GETaddContact
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.get("/", authorizeUser, ctrl.GETaddContact);
/**
 * @api {get}  /api/contacts/ Передаем данные схемы контакта нового контакта
 * @apiName POSTaddContact
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.post("/", authorizeUser, ctrl.POSTaddContact);

/**
 * @api {put} /api/contacts/  Добавление нового контакта
 * @apiName addContact
 * @apiGroup Contact
 *
 * @apiParam {String} name Имя пользователя
 * @apiParam {String} surname Фамилия пользователя
 * @apiParam {String} nameCategori Категория контакта
 * @apiParam {String} email Email пользователя
 * @apiParam {Date} birthday День рождения
 * @apiParam {String} description Описание
 * @apiParam {String} phones Номера телефонов 
 * @apiParam {String} social Социальная сеть
 * 
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiParamExample {json} Request-Example:
 *  {
 *      "Name": "Piter",
 *      "surname" "Chernysh",
 *      "nameCategori": "test contact"
 *      "email": "test@test.com",
 *      "birthday": "1992-01-01 00:00:00.000Z",
 *      "description": "test contact",
 *      "phones": [
 *          {
 *              "code": "+560",
 *              "value": "3434567"
 *          }
 *      ],
 *      "social": {
 *          "insta": "https://www.instagram.com"
 *      }
 *  }
 *
 * @apiSuccessExample {json} Response:
 *  {
 *      "data": {
 *          "email": [
 *              "2_contact@test.com"
 *          ],
 *          "_id": "5d160078a8b8cd3c087ebcc2",
 *          "name": "Xoma",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "birthday": "2000-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "3434567"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      }
 *  }
 */
router.put('/', authorizeUser, validate(val.addContact), ctrl.addContact);

/**
 * @api {get}  /api/contacts/get/:id Возвращает шаблон "get_contact.nunjucks" Получаем контакт по id
 * @apiName GETContactById
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.get("/get/:id", authorizeUser, ctrl.GETContactById);
/**
 * @api {get}  /api/contacts/update/:id Возвращает шаблон "update_contact.nunjucks" Обновляем контакт по id
 * @apiName GETupdateContactById
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.get("/update/:id", authorizeUser, ctrl.GETupdateContactById);
/**
 * @api {put} /api/contacts/update/:id  Обновление контакта
 * @apiName updateContactById
 * @apiGroup Contact
 * @apiParam {String} name Имя пользователя
 * @apiParam {String} surname Фамилия пользователя
 * @apiParam {String} nameCategori Категория контакта
 * @apiParam {String} email Email пользователя
 * @apiParam {Date} birthday День рождения
 * @apiParam {String} description Описание
 * @apiParam {String} phones Номера телефонов 
 * @apiParam {String} social Социальная сеть
 * 
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiParamExample {json} Request-Example:
 *  {
 *      "Name": "Piter",
 *      "surname" "Chernysh",
 *      "nameCategori": "test contact"
 *      "email": "test@test.com",
 *      "birthday": "1992-01-01 00:00:00.000Z",
 *      "description": "test contact",
 *      "phones": [
 *          {
 *              "code": "+560",
 *              "value": "3434567"
 *          }
 *      ],
 *      "social": {
 *          "insta": "https://www.instagram.com"
 *      }
 *  }
 *
 * @apiSuccessExample {json} Response:
 *  {
 *      "data": {
 *          "_id": "5d160078a8b8cd3c087ebcc2",
 *          "name": "Nikola",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "email": [
 *              "1_contact@test.com"
 *          ],
 *          "birthday": "1999-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "2434567"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      }
 *  }
 */
router.put('/update/:id', authorizeUser, validate(val.addContact), ctrl.updateContactById);

/**
 * @api {get} /api/contacts/all Возвращает шаблон "get_all_contacts.nunjucks" Получаем контакты по id
 * @apiName POSTgetAllContactByUser
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */
router.get('/all', authorizeUser, ctrl.getAllContactByUser);
/**
 * @api {post} /api/contacts/all Возвращает профили всех контактов
 * @apiName getAllContactByUser
 * @apiGroup Contact
 * 
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiSuccessExample {json} Response:
 *  {
 *    "data": [
 *      {
 *          "_id": "3d150077a8b8cd3c087ebcc1",
 *          "name": "Lisa",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "email": [
 *              "2_contact@test.com"
 *          ],
 *          "birthday": "2000-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "246767"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      },
 *      {
*          "_id": "5d160078a8b8cd3c087ebcc2",
 *          "name": "Nikola",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "email": [
 *              "1_contact@test.com"
 *          ],
 *          "birthday": "1999-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "2434567"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      }
 * 
 *    ]
 *  }
 */

 
router.post('/all', authorizeUser, ctrl.POSTgetAllContactByUser);

/**
 * @api {get} /api/contacts/categories/:name Возвращает контакты пользователя по названию категории
 * @apiName getCategoriContactByUser
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiSuccessExample {json} Response:
 *  {
 *    "data": [
 *      {
 *          "_id": "3d150077a8b8cd3c087ebcc1",
 *          "name": "Lisa",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "email": [
 *              "2_contact@test.com"
 *          ],
 *          "birthday": "2000-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "246767"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      },
 *      {
*          "_id": "5d160078a8b8cd3c087ebcc2",
 *          "name": "Nikola",
 *          "surname": "Tarakan",
 *          "nameCategori": "Home",
 *          "email": [
 *              "1_contact@test.com"
 *          ],
 *          "birthday": "1999-01-01T00:00:00.000Z",
 *          "description": "test contact",
 *          "phones": [
 *              {
 *                  "_id": "5d160078a8b8cd3c087ebcc3",
 *                  "code": "+560",
 *                  "value": "2434567"
 *              }
 *          ],
 *          "social": {
 *              "insta": "https://www.instagram.com"
 *          },
 *          "addedBy": "5d160068a8b8cd3c087ebcc1",
 *          "createdAt": "2019-06-28T11:56:40.864Z",
 *          "updatedAt": "2019-06-28T11:56:40.864Z",
 *          "__v": 0
 *      }
 * 
 *    ]
 *  }
 */
router.get('/categories/:name', authorizeUser, ctrl.getCategoriContactByUser);
/**
 * @api {get} /api/contacts/categories Возвращает уникальные  названия всех категорий пользователя
 * @apiName getCategoriByUser
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * 
 * @apiSuccessExample {json} Response:
 *  {
 *      "data": [
 *          "Home",
 *          "Job"
 *      ]
 *  }
 */
router.get('/categories', authorizeUser, ctrl.getCategoriByUser);
/**
 * @api {get} /api/contacts/delete/:id Удаляет один контакт по id
 * @apiName deleteOneContactByUser
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */
router.get('/delete/:id', authorizeUser, ctrl.deleteOneContactByUser);
/**
 * @api {get} /api/contacts/delete/catergori/:name Удаляет категорию контактов
 * @apiName deleteCatrgoriByUser
 * @apiGroup Contact
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */
router.get('/delete/catergori/:name', authorizeUser, ctrl.deleteCatrgoriByUser);
module.exports = router;
