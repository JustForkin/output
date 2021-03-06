const express = require('express');
const app = express();
require('@remy/envy');

app.disable('x-powered-by');

app.use('/', require('./routes'));
app.use(require('./error'));

app.listen(process.env.PORT || 5000);
