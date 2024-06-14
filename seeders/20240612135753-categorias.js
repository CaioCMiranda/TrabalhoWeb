'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categoria', [
      {nome_categoria: "Eletrônicos"},
      {nome_categoria: "Eletrodomésticos"},
      {nome_categoria: "Ferramentas"},
      {nome_categoria: "Informática"},
      {nome_categoria: "Móveis"},
      {nome_categoria: "Livros"},
      {nome_categoria: "Artigos Esportivos"},
      {nome_categoria: "Produtos para Casa"},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categoria', null, {});
  }
};
