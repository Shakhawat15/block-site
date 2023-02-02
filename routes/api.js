const express = require('express');
const userRouter = require('./users');
const userRoleRouter = require('./userRoles');
const divisionRouter = require('./divisions');
const districtRouter = require('./districts');

const apiRouter = express.Router();

apiRouter.use('/user/', userRouter);
apiRouter.use('/user_role/', userRoleRouter);
apiRouter.use('/division/', divisionRouter);
apiRouter.use('/district/', districtRouter);


module.exports  = apiRouter;