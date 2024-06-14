'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      this.belongsTo(models.Categoria, {
        as: 'categoria',
        foreignKey: 'idCategoria'
      })
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DOUBLE,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produto'
  });
  return Produto;
};