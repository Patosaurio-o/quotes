module.exports = (sql, type) => {
  return sql.define('Quote', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: type.STRING,
      allowNull: false
    },
    quotesText: {
      type: type.STRING,
      allowNull: false
    }
  });
}