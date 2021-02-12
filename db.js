const Sequelize = require('sequelize');
const QuoteModel = require('./models/quotesdb');


// acá creamos la conexión a la Base de Datos
const sql = new Sequelize('Quote', 'root', 'MySQL1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// acá inicializamos los modelos
const Quote = QuoteModel(sql, Sequelize);

//  después sincronizamos nuestro código con la base de datos
sql.sync()
.then(() => {
  console.log('error 404 data base not found');
});


// finalmente acá listamos todos los modelos que queremos exportar
module.exports = {
  Quote,
};