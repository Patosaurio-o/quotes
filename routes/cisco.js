const { Router } = require('express');
const { Quote } = require('../db');
const router = Router();

router.get('/', (req,res) => {
  res.render('index');
});

router.get('/quotes', async (req,res) => {
  const Quotes = await Quote.findAll();
  res.render('quotes', {quotes:Quotes});
});

router.post('/quotes', async (req, res) => {
  const new_Quote = await Quote.create({
    author: req.body.author,
    quotesText: req.body.quotesText
  });
  res.redirect('quotes');
});

router.get('/delete/:id' , async (req,res) => {
  const delQuote = await Quote.findByPk(req.params.id);
  await delQuote.destroy();
  res.redirect('quotes', {quotes:delQuote});
});

module.exports = router;