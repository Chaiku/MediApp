'use strict';

module.exports = (sequelize, DataTypes) => {
  const spending2011 = sequelize.define('spending2011', 
    {
      drugname_brand: DataTypes.STRING,
      drugname_generic: DataTypes.STRING,
      claim_count: DataTypes.INTEGER,
      total_spending: DataTypes.DECIMAL,
      user_count: DataTypes.DECIMAL,
      total_spending_per_user: DataTypes.DECIMAL,
      unit_count: DataTypes.DECIMAL,
      unit_cost_wavg: DataTypes.DECIMAL,
      user_count_non_lowincome: DataTypes.DECIMAL,
      out_of_pocket_avg_non_lowincome: DataTypes.DECIMAL,
      user_count_lowincome: DataTypes.DECIMAL,
      out_of_pocket_avg_lowincome: DataTypes.DECIMAL
    },
    {
      timestamps: false,
      tableName: 'spending2011',
    }
  );

  spending2011.associate = function(models) {
    // associations can be defined here
  };

  return spending2011;
};
