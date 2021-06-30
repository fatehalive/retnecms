const { Sequelize, Models, DataType } = require('sequelize')
const Category = require("../models/Category")

exports.getCategory = (req, res, next) => {
  Category.findAll({order: [["category_name", "ASC"]]}).then(response => {
    res.status(200).json({
      Category: response
    })
  })
}

exports.postCategory = async (req, res, next) => {
  const { category_name } = req.body
  try {
    const newCategory = await Category.create({
      category_name: category_name
    })
    res.status(200).json({
      newEntry: newCategory
    })
  } catch (error) {
    console.log(error)
  }

}

// exports.updateTodos = async (req, res, next) => {
//   const id = req.params.id
//   const { description } = req.body
//   try {
//     const editedTodos = await Todos.update({
//       description: description
//     }, {
//       where: {
//         id: id
//       }
//     })
//     res.status(200).json({
//       status: "Updated"
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// exports.deleteTodos = async (req, res, next) => {
//   const id = req.params.id
//   const { description } = req.body
//   try {
//     const deleteTodos = await Todos.destroy(
//       { where: { id: id } })
//     res.status(200).json({
//       status: "Deleted"
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }