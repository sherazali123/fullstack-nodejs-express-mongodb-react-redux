const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    if (!req.user) {
      res.status(401).send({ error: 'You must log in!' });
    }

    const charge = await stripe.charges.create({
      amount: 10000,
      currency: 'usd',
      description: '$10 for 10 campaigns',
      source: req.body.id
    });

    req.user.credits += 10;
    const user = await req.user.save();

    res.send(user);
  });
};
