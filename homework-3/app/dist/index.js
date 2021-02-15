"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const promBundle = require("express-prom-bundle");
function mountRoutes(app) {
    const router = express.Router();
    router.get('/version', (req, res) => {
        res.json({
            version: '0.1'
        });
    });
    app.use('/', router);
}
const app = express();
const metricsMiddleware = promBundle({ includeMethod: true });
app.use(metricsMiddleware);
mountRoutes(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map