const { Router } = require('express')
const router = Router()
const {
  getBooksDb, 
  getBooksByNameDb,
  getAllBook
} = require('../controller/bookController')
const {Books, User} = require("../db")

 
router.get('/', async (req, res) => {
  const name = req.query.name
  if (!name) {
    const allBooks = await getAllBook()
    res.send(allBooks)
  } else {
      let booksDb = await getBooksByNameDb(name)

      let bookByName

      if (booksDb && booksDb !== 'Libro no encontrado') {
        bookByName = booksDb
      }

      if (bookByName.length > 0) {
        res.send(bookByName)
      } else {
        res.status(404).send('Libro no encontrado')
      }
    }
  })
  


module.exports = router