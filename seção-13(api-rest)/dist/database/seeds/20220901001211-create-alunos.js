"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: 'vinicius',
          sobrenome: 'pereira',
          email: 'viniP@gmail.com',
          idade: 18,
          peso: 80,
          altura: 1.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'joão',
          sobrenome: 'gomes',
          email: 'joaoG@gmail.com',
          idade: 18,
          peso: 150,
          altura: 1.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'pedro',
          sobrenome: 'paulo',
          email: 'pedroP@gmail.com',
          idade: 18,
          peso: 100,
          altura: 1.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'cludinho',
          sobrenome: 'silva',
          email: 'clauS@gmail.com',
          idade: 12,
          peso: 110,
          altura: 1.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'joana',
          sobrenome: 'ferreira',
          email: 'joFerro@gmail.com',
          idade: 16,
          peso: 70,
          altura: 1.6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
};
