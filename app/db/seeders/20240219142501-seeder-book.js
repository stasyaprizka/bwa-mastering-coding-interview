'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Books', 
  [
    {
     title: 'Crazy Rich Asians',
     author: 'Kevin Kwan',
     image: '/uploads/image1.png',
     published: new Date(),
     price: 120000,
     stock: 100,
     user: 1,
     category: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      title: 'Renjana',
      author: 'El Alicia',
      image: '/uploads/image2.png',
      published: new Date(),
      price: 85000,
      stock: 100,
      user: 1,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'You Do You',
      author: 'Fellexandro Ruby',
      image: '/uploads/image3.png',
      published: new Date(),
      price: 150000,
      stock: 100,
      user: 1,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ],
     {});
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
