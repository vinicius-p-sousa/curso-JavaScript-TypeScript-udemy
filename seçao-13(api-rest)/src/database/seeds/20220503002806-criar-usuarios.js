const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'creudo',
      email: 'creudo@email.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'leonardo',
      email: 'leonardo@email.com',
      password_hash: await bcryptjs.hash('848954', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'cremosinho',
      email: 'gostozin.no.azeite@email.com',
      password_hash: await bcryptjs.hash('46cd64s6f', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },
};
