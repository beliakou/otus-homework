import * as express from 'express';
import { Express } from 'express-serve-static-core';
import * as promBundle from 'express-prom-bundle';

function mountRoutes(app: Express): void {
    const router = express.Router()
    router.get('/version', (req, res) => {
        res.json({
            version: '0.1'
        })
    });
    app.use('/', router);
}


const app = express();
const metricsMiddleware = promBundle({includeMethod: true});
app.use(metricsMiddleware);
mountRoutes(app);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    return console.log(`server is listening on ${port}`)
})
