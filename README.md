# Campaigner

Campaigner is a platorm to create campaigns and votes and get feedback from recipients. A way to collect data from emails you want to.

Built With:

- Node.js v8.9
- Express
- React
- Redux
- WebPack
- MongoDB
- Stripe
- oAuth2 (Google)

## Installation

### Requirements
- Node > 8.1.1
- NPM > 5.0.3
- MongoDB > 3.2

### Install and run application with github

```
git clone https://github.com/sherazali123/fullstack-nodejs-express-mongodb-react-redux.git campaigner
cd campaigner
npm install
```
#### Configuration
Create config/dev.js and assign values.

```javascript
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY
};
```
#### Run

```
npm run dev
```

Open http://localhost:3000 to see your store.

## Licence
This software is provided free of charge and without restriction under the MIT License.
