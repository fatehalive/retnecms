const AppError = require('../utils/appError');

const categoryRoutes = require('./category')
const newsArticleRoutes = require('./news_article')
const roleRoutes = require('./role')
const userRoutes = require('./user')

module.exports = function (app, express) {
  /*Definisikan semua route dihalaman ini*/
  const ROUTER = express.Router();

  // Use Import other Router
  ROUTER.use(
    '/category',
    // [verifyJwtController.verifyToken, acl.authorize],
    categoryRoutes
  );
  ROUTER.use(
    '/news-article',
    // [verifyJwtController.verifyToken, acl.authorize],
    newsArticleRoutes
  );
  ROUTER.use(
    '/role',
    // [verifyJwtController.verifyToken, acl.authorize],
    roleRoutes
  );
  ROUTER.use(
    '/user',
    // [verifyJwtController.verifyToken, acl.authorize],
    userRoutes
  );

  // Set Global baseUrl
  app.use('/', ROUTER);

  /*ERROR HANDLING*/
  app.all('*', (req, res, next) => {
    throw new AppError(404, `Request URL ${req.path} not Found!`);
  });

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: statusCode,
      message: err.message
      // stack: err.stack
    });
  });
  /*END ERROR HANDLING*/
};
