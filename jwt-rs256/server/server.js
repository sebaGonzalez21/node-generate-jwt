const app = require('../app');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';

const port = process.env.PORT || 3002;

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});

module.exports = app;