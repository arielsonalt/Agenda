const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host: host,
    port: port,
    auth: { user, pass},
  }); 

// transport.use('compile',hbs({
//   viewEngine: 'handlebars',
//   viewPath: path.resolve('./src/resources/mail/'),
//   partialsDir: undefined,
//   extName:'html',
// }))
  transport.use('compile',hbs({
    viewEngine:{
      extName:'.html',
      partialsDir: path.resolve('./src/resources/partials'),
      layoutsDir: path.resolve('./src/resources/mail/auth/'),
      defaultLayout: 'forgot_password.html',
    },
      viewPath: path.resolve('./src/resources/mail'),
      extName:'.html',
  })
  );

  
module.exports = transport;
