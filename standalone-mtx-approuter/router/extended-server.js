const approuter = require('@sap/approuter');

const ar = approuter(),
    entries = {};

ar.beforeRequestHandler.use('/guestbook', function myMiddleware(req, res) {
    if (req.isUnauthenticated()) {
        res.statusCode = 401;
        res.end("Unauthorized");
        return;
    }
    const canRead = req.user.scopes.find((scope => scope.includes("Read")));
    if (!canRead) {
        res.statusCode = 401;
        res.end("Unauthorized");
        return;
    }
    const canWrite = req.user.scopes.find((scope => scope.includes("Write")));
    const tenant = req.user.tenant;
    if (req.method === "POST" && canWrite) { // not the best permission check but ok for demo
        if (!entries[tenant]) {
            entries[tenant] = [];
        }
        entries[tenant].push({
            content: req.query.content,
            author: req.user.name,
            timestamp: new Date()
        })
    }
    res.end(JSON.stringify({
        tenant,
        canWrite,
        user: req.user.name,
        entries: entries[tenant]
    }));
});
ar.start();