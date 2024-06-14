'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      this.hasMany(models.Produto, {
        as: 'produto',
        foreignKey: 'idCategoria'
      })
    }
  }
  Categoria.init({
    nome_categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categoria'
  });
  return Categoria;
};