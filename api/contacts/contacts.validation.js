const Joi = require("joi");

exports.getList = {
    query: {
        page: Joi.number()
            .positive()
            .integer()
            .max(999999)
            .default(1)
    }
};

exports.addContact = {
    body: {
        name: Joi.string()
            .trim()
            .min(1)
            .max(500),
        surname: Joi.string()
            .trim()
            .min(1)
            .max(500),
        nameCategori: Joi.string()
            .trim()
            .min(1)
            .max(500),
        email: Joi.array().items(Joi.string().trim()),
        birthday: Joi.date(),
        // avatar: Joi.string()
        //     .trim()
        //     .regex(/[0-9a-f]{24}/i),
        description: Joi.string()
            .trim(),
        phones: Joi.array().items(Joi.string().trim()),
        social: Joi.object().keys({
            fb: Joi.string().trim(),
            insta: Joi.string().trim()

        }),
        addedB: Joi.string()
            .trim()
            .regex(/[0-9a-f]{24}/i)
    }
};
