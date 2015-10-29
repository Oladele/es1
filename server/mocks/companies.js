module.exports = function(app) {
  var express = require('express');
  var companiesRouter = express.Router();

  companiesRouter.get('/', function(req, res) {
    res.send({
      'companies': []
    });
  });

  companiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  companiesRouter.get('/:id', function(req, res) {
    res.send({
      'companies': {
        id: req.params.id
      }
    });
  });

  companiesRouter.put('/:id', function(req, res) {
    res.send({
      'companies': {
        id: req.params.id
      }
    });
  });

  companiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/companies', companiesRouter);
};
