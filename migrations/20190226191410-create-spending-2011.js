'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spending2011', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drugname_brand: {
        allowNull: true,
        type: Sequelize.STRING
      },
      drugname_generic: {
        allowNull: true,
        type: Sequelize.STRING
      },
      claim_count: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_spending: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      user_count: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      total_spending_per_user: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      unit_count: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      unit_cost_wavg: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      user_count_non_lowincome: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      out_of_pocket_avg_non_lowincome: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      user_count_lowincome: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      out_of_pocket_avg_lowincome: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
    },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('spending2011');
  }
};
