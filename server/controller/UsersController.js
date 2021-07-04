const AppError = require("../utils/appError");
const message = require('../config/message');
const bcrypt = require('bcryptjs');

const User = require('../models').User;
const Role = require('../models').Role

const {
  Op
} = require("sequelize");
const Pagination = require('../utils/pagination');

const getUser = (req, res, next) => {
  const where = {};
  const {
    pageNumber,
    pageSize,
    filter: {
      username,
      role_uuid,
      email
    }
  } = req.body;

  if (username) where['username'] = {
    [Op.iLike]: `%${username}%`
  };

  if (email) where['email'] = {
    [Op.iLike]: `%${email}%`
  };

  if (role_uuid) where[`role_uuid`] = role_uuid

  const {
    limit,
    offset
  } = Pagination.getPagination(pageNumber, pageSize);

  // Jika bukan superadmin maka tampilkan user berdasarkan user branch loginnya
  let conditions = {};


  return User.findAndCountAll({
    include: [{
      model: Role,
      as: 'role',
      attributes: ['role'],
      where: conditions,
    }],
    where,
    limit,
    offset,
    distinct: true,
    order: [
      ['createdAt', 'DESC']
    ]
  }).then(data => {
    const response = Pagination.getPagingData(data, pageNumber, limit);

    res.json({
      data: response,
      message: `Get User ${message.SUCCESSFULLY}`
    });
  }).catch(err => {
    next(err);
  });
};

const getUserById = (req, res, next) => {
  return User.findOne({
    include: [{
      model: Role,
      as: 'role',
      attributes: ['role'],
    }],
    where: {
      uuid: req.params.id
    }
  }).then(data => {

    if (!data) {
      throw new AppError(404, message.ID_USER_NOT_FOUND);
    }
    res.json({
      data: data,
      message: `Get Id User ${message.SUCCESSFULLY}`
    });
  }).catch(err => {
    next(err);
  });
};

const getUserAll = (req, res, next) => {
  return User.findAndCountAll({
    include: [{
      model: Role,
      as: 'role',
      attributes: ['role'],
    }],
  }).then(data => {
    res.json({
      data: data,
      message: `Get User ${message.SUCCESSFULLY}`
    });
  }).catch(err => {
    next(err);
  });
};

const createUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email.toLowerCase(),
      password: bcrypt.hashSync(req.body.password, 8),
      role_uuid: req.body.role_uuid,
    });
    res.json({
      data: newUser,
      message: `User ${message.SUCCESSFULLY_CREATED}`
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const UserData = await User.findByPk(req.params.id);
    if (!UserData) {
      throw new AppError(404, message.ID_USER_NOT_FOUND);
    }

    const { username, email, password, role_uuid } = req.body;

    let updateData = {};
    if (username !== "") {
      updateData['username'] = username;
    }

    if (email !== "") {
      updateData['email'] = email;
    }

    if (role_uuid !== "") {
      updateData['role_uuid'] = role_uuid;
    }

    if (password !== "") {
      updateData['password'] = bcrypt.hashSync(password, 8);
    }

    const data = await UserData.update(updateData);

    res.json({
      data: data,
      message: `User ${message.SUCCESSFULLY_UPDATED}`
    });

  } catch (err) {
    next(err);
  }
};

// Find User by Username to Autocomplete
const getByUsername = async (req, res, next) => {
  try {
    const { username, role_uuid } = req.body;

    const data = await User.findAll({
      where: {
        username: {
          [Op.iLike]: `%${username}%`
        },
        role_uuid: role_uuid
      }
    });

    res.json({
      data: data
    });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  getUser,
  getUserById,
  getUserAll,
  createUser,
  updateUser,
  getByUsername
};