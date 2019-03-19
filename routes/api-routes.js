const db = require('../models');

module.exports = function(app) {
  app.get('/api/drugs/2015/:name', function (req, res) {
    db.spending2015.findAll({
      where: {
        drugname_brand: {
          $eq: `${req.params.name}`
        }
      }
    })
      .then(data => res.json(data))
      .catch(err => console.log(`error getting info for ${req.query.name}`, err));
  });

  app.get('/api/drugs/2014/:name', function (req, res) {
    db.spending2014.findAll({
      where: {
        drugname_brand: {
          $eq: `${req.params.name}`
        }
      }
    })
      .then(data => res.json(data))
      .catch(err => console.log(`error getting info for ${req.query.name}`, err));
  });

  app.get('/api/drugs/2013/:name', function (req, res) {
    db.spending2013.findAll({
      where: {
        drugname_brand: {
          $eq: `${req.params.name}`
        }
      }
    })
      .then(data => res.json(data))
      .catch(err => console.log(`error getting info for ${req.query.name}`, err));
  });

  app.get('/api/drugs/2012/:name', function (req, res) {
    db.spending2012.findAll({
      where: {
        drugname_brand: {
          $eq: `${req.params.name}`
        }
      }
    })
      .then(data => res.json(data))
      .catch(err => console.log(`error getting info for ${req.query.name}`, err));
  });

  app.get('/api/drugs/2011/:name', function (req, res) {
    db.spending2011.findAll({
      where: {
        drugname_brand: {
          $eq: `${req.params.name}`
        }
      }
    })
      .then(data => res.json(data))
      .catch(err => console.log(`error getting info for ${req.query.name}`, err));
  });

  //route to get drugs based on name (generic and brandName)
  app.get('/api/drugs', function (req, res) {
    if (req.query.name) {
      db.spending2015.findAll({
        where: {
          $or: [
            {
              drugname_generic: {
                $like: `%${req.query.name}%`
              }
            },
            {
              drugname_brand: {
                $like: `%${req.query.name}%`
              }
            }
          ]
        }
      })
        .then(data => res.json(data))
        .catch(error => res.json({ error: error }))
      return;
    }

    db.spending2015.findAll({ limit: 20 })
      .then(data => res.json(data))
      .catch(error => res.json({ error: error }))
  });

  //ROUTES FOR SIDEBAR COMPONENT//
  app.get('/api/drugs/topTen/:year', function (req, res) {
    db.spending`${year}`.find({
    })
  })
  //END SIDEBAR ROUTES//

  //ROUTES FOR GRAPH//

  app.get('/api/drugs/2015/:id', function (req, res) {
    db.spending2014.findAll({
      where: {
        id: req.query.id
      }
    })
  });


  app.get('/api/drugs/2013/:id', function (req, res) {
    db.spending2014.findAll({
      where: {
        id: req.query.id
      }
    })
  });

  app.get('/api/drugs/2012/:id', function (req, res) {
    db.spending2014.findAll({
      where: {
        id: req.query.id
      }
    })
  });

  app.get('/api/drugs/2011/:id', function (req, res) {
    db.spending2014.findAll({
      where: {
        id: req.query.id
      }
    })
  });



  //END GRAPH ROUTES//

  //route to get drugs with spending higher than inputted value.
  app.get('/api/drugs/spendingH/:number', function (req, res) {
    db.spending2015.findAll({
      where: {
        total_spending: {
          $gte: req.params.number
        }
      }
    })
      .then(data => res.json(data))
      .catch(error => res.json({ error: error }))
  });

  //route to get drugs with spending lower than inputted value.
  app.get('/api/drugs/spendingL/:number', function (req, res) {
    db.spending2015.findAll({
      where: {
        total_spending: {
          $lte: req.params.number
        }
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (error) {
      res.json({ error: error })
    });
  });

  //route to get drugs based on total spending
  app.get('/api/drugs/spending/:range1/:range2', function (req, res) {
    db.spending2015.findAll({
      where: {
        total_spending: {
          $between: [req.params.range1, req.params.range2]
        }
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (error) {
      res.json({ error: error })
    });
  });







  //route to post a new drug to watch
  app.post('/api/users', function (req, res) {
    db.Users.create(req.body).then(function (data) {
      res.json(data)
    }).catch(function (error) {
      res.json({ error: error })
    });
  });

  app.post('/api/users', function (req, res) {

  })







}
