const { Router } = require("express");
const router = Router();
const ctrl = require("./user.controller");
const val = require("./user.validation");
const { validate, authorizeUser } = require("../middlewares");

/**
 * @api {get} /api/user/all Возвращает профили всех пользователей
 * @apiName getAllUsers
 * @apiGroup User
 
 * @apiError error Пользователь не авторизова
 
 * @apiSuccessExample {json} Response:
 *{
 *   "data": [
 *       {
 *          "Name": "Piter",
 *          "surname" "Chernysh",
 *          "_id": "5d178663bb10ec40d73c4cf7",
 *          "email": "1_test@test.com"
 *       },
 *       {
 *          "Name": "Olga",
 *          "surname" "Romanova",
 *          "_id": "5d178668bb10ec40d73c4cf9",
 *          "email": "2_test@test.com"
 *       },
 *       {
 *          "Name": "Lara",
 *          "surname" "Lukina",
 *          "_id": "5d178668bb10ec40d73c4cf9",
 *          "email": "3_test@test.com"
 *       }
 *   ]
 *}
 */
router.get("/all", authorizeUser, ctrl.getAllUsers);

/**
 * @api {get} /api/user/register Возвращает шаблон "register.nunjucks" регистрации пользователя
 * @apiName registerNewUserNunjucks
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */
router.get("/", (req, res) => { 
    res.render("register.nunjucks", { 
    user: req.user || {} });
});

/**
 * @api {post} /api/user/register Регистрация нового пользователя
 * @apiName registerNewUser
 * @apiGroup User
 *
 * @apiParam {String} email Email пользователя
 * @apiParam {String} password Пароль пользователя
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "email": "test@test.com",
 *      "password": "123456789"
 *  }
 * @apiError error Пользователь с таким логином существует
 *
 * @apiSuccessExample {json} Response:
 *  {
 *      "result": {
 *          "_id": "5d15a5ec6d720117c9625abb",
 *          "email": "test@test.com",
 *          "password": "$2b$08$kFZWDqPtcijpOZL75APq1.OlQ4aDpqsFYFo9FCMkMiC/e3VyIIWk6",
 *          "createdAt": "2019-06-28T05:30:20.353Z",
 *          "updatedAt": "2019-06-28T05:30:20.353Z",
 *          "__v": 0
 *      }
 *  }
 */

router.post("/register", validate(val.register), ctrl.registerNewUser);
/**
 * @api {get} /api/user/profile Возвращает шаблон "profile.nunjucks" профиль пользователя
 * @apiName Profile
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.get("/profile", (req, res) => { 
    res.render("profile.nunjucks", {});
});
/**
 * @api {post} /api/user/profile Возвращает профиль пользователя
 * @apiName getProfile
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * @apiSuccessExample {json} Response:
 *  {
 *      "result": {
 *          "_id": "5d15a5ec6d720117c9625abb",
 *          "Name": "Piter",
 *          "surname" "Chernysh",
 *          "email": "test@test.com",
 *          "password": "123456789",
 *          "birthday": "1992-01-01 00:00:00.000Z",
 *          "avatar": "5d15ae202765f2263c4bf180",
 *          "role": "admin",
 *          "createdAt": "2019-06-28T05:30:20.353Z",
 *          "updatedAt": "2019-06-28T05:30:20.353Z",
 *          "__v": 0
 *      }
 *  }
 */



router.post("/profile", authorizeUser, ctrl.getProfile);

/**
 * @api {get} /api/user/update Возвращает шаблон "update_profile.nunjucks" обновляем профиль пользователя
 * @apiName GETupdateProfileById
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.get("/update", authorizeUser, ctrl.GETupdateProfileById);

/**
 * @api {post} /api/user/update Передаем параметры профиль пользователя
 * @apiName POSTupdateProfileById
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 */

router.post("/update", authorizeUser, ctrl.POSTupdateProfileById);
/**
 * @api {put} /api/user/update Обновить профиль пользователя
 * @apiName updateProfileById
 * @apiGroup User
 *
 * @apiParam {String} name Имя пользователя
 * @apiParam {String} surname Фамилия пользователя
 * @apiParam {String} email Email пользователя
 * @apiParam {String} password Пароль пользователя
 * @apiParam {Date} birthday День рождения
 * @apiParam {Schema.Types.ObjectId} avatar Аватар
 * @apiParam {String} role Роль(admin, moderator, user)
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "Name": "Piter",
 *      "surname" "Chernysh",
 *      "email": "test@test.com",
 *      "password": "123456789",
 *      "birthday": "1992-01-01 00:00:00.000Z",
 *      "avatar": "5d15ae202765f2263c4bf180",
 *      "role": "admin",
 *  }
 * @apiSuccess {Boolean} error Пользователь не авторизован
 *
 * @apiSuccessExample {json} Response:
 *  {
 *      "result": {
 *          "_id": "5d15a5ec6d720117c9625abb",
 *          "Name": "Piter",
 *          "surname" "Chernysh",
 *          "email": "test@test.com",
 *          "password": "123456789",
 *          "birthday": "1992-01-01 00:00:00.000Z",
 *          "avatar": "5d15ae202765f2263c4bf180",
 *          "role": "admin",
 *          "createdAt": "2019-06-28T05:30:20.353Z",
 *          "updatedAt": "2019-06-28T05:30:20.353Z",
 *          "__v": 0
 *      }
 *  }
 */

router.put('/update', authorizeUser, validate(val.profile), ctrl.updateProfileById);
/**
 * @api {get} /api/user/delete Удаляет профиль пользователя
 * @apiName deleteProfileById
 * @apiGroup User
 * @apiSuccess {Boolean} error Пользователь не авторизован
 * @apiSuccessExample {json} Response:
 *  {
 *     "data": {
 *          "n": 1,
 *          "ok": 1,
 *          "deletedCount": 1
 *      }
 *  }
 */
router.get('/delete', authorizeUser, ctrl.deleteProfileById);

module.exports = router;
