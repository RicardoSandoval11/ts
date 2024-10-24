import express from 'express';
import dotnet from 'dotenv';

import authRoute from './Routes/AuthenticationRoutes';

const app = express();

dotnet.config({
    path: '.env'
});

app.use(authRoute);

const appPort = process.env.APPLICATION_PORT || 3000;

app.listen(appPort, () => {
    console.log(`Application running on ${appPort}`);
});