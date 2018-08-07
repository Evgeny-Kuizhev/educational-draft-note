'use strict'

const
    respond = require('./helpfullRespond'),
    Users = require('../models/Users');


exports.getAll = (req, res) => {
    function cb(err, users) {
        if (err) respond.failure(res, {message: 'Ошибка бд.'}, 500);
        if (!users) respond.failure(res, {message: 'Пользователи не найдены!'}, 404);
        respond.success(res, {users, message: 'Пользователи полученны!'});
    }
    Users.getAll(cb);
}

exports.getOne = (req, res) => {
    if (!req.params && !req.params.id){
        respond.failure(res, {message: 'Плохой запрос'}, 400);
    }
    function cb(err, user) {
        if (err) respond.failure(res, {message: 'Ошибка бд.'}, 500);
        if (!user) respond.failure(res, {message: 'Пользователь не найден!'}, 404);
        respond.success(res, {user, message: 'Пользователь получен!'});
    }
    Users.getOne(req.params.id, cb);
}

exports.getUserNotes = (req, res) => {
    if (!req.params && !req.params.id){
        respond.failure(res, {message: 'Плохой запрос'}, 400);
    }
    function cb(err, notes) {
        if (err) respond.failure(res, {message: 'Ошибка бд.'}, 500);
        if (!notes) respond.failure(res, {message: 'Записи пользователя не найдены!'}, 404);
        respond.success(res, {notes, message: 'Записи пользователя получены!'});
    }
    Users.getUserNotes(req.params.id, cb);
}