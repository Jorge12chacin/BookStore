const axios = require("axios");
const { Books, User } = require("../db");

const getBooksDb= async () => {
  try {
    const booksDb = await Books.findAll({
      include: {
        name: "name",
        autor: "autor",
        editorial: "editorial",
        ISBN: "ISBN"
        
      },
    });

    return booksDb;
  } catch (error) {
    console.log(error);
  }
};

const getBooksByNameDb = async (name) => {
    try {
      const booksDb2 = await getBooksDb();
      const booksDb2Filter = booksDb2.filter(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      return booksDb2Filter;
    } catch (error) {
      return "Error de DB Libro no encontrado";
    }
  };

  const getAllBook = async () => {
    const dbInfo = await getBooksDb();
    const infoTotal = [...dbInfo];
  
    return infoTotal;
  };

module.exports =  {
    getBooksDb, 
    getBooksByNameDb,
    getAllBook
}