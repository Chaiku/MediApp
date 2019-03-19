'use strict';

const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const rows = []

const content = fs.readFileSync(
	path.resolve(__dirname, '../data/spending-2012.csv'), "utf8"
);


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
	Papa.parse(content, {
		header: true,
		step: (row) => {
			if(row.data[0]) {
				rows.push({
					drugname_brand                  : row.data[0].drugname_brand,
					drugname_generic                : row.data[0].drugname_generic,
					claim_count                     : row.data[0].claim_count || null,
					total_spending                  : row.data[0].total_spending || null,
					user_count                      : row.data[0].user_count || null,
					total_spending_per_user         : row.data[0].total_spending_per_user || null,
					unit_count                      : row.data[0].unit_count || null,
					unit_cost_wavg                  : row.data[0].unit_cost_wavg || null,
					user_count_non_lowincome        : row.data[0].user_count_non_lowincome || null,
					out_of_pocket_avg_non_lowincome : row.data[0].out_of_pocket_avg_non_lowincome || null,
					user_count_lowincome            : row.data[0].user_count_lowincome || null,
					out_of_pocket_avg_lowincome     : row.data[0].out_of_pocket_avg_lowincome || null
				})
			}
		},
		complete: () => {
			console.log('done');
		}
	});

	return queryInterface.bulkInsert('spending2012', rows, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Spending2012', null, {});
  }
};
