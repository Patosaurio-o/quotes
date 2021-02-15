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
  if(req.body.author==""||req.body.quotesText==""){
    return res.send('fallo');
  }
  const new_Quote = await Quote.create({
    author: req.body.author,
    quotesText: req.body.quotesText
  });
  res.redirect('quotes');
});

router.get('/delete/:id' , async (req,res) => {
  const delQuote = await Quote.findByPk(req.params.id);
  await delQuote.destroy();
  res.json({ estado: true,  mensaje: `la cita fue eliminada.`});
});

router.get('/update/:id' , async (req,res) => {
  res.render('update');
});

router.post('/update/:id' , async (req,res) => {
  const update = await Quote.findByPk(req.params.id);
  update.author = req.body.author;
  update.quotesText = req.body.quotesText;
  await update.save();
  res.render('update');
});

module.exports = router;