 const proxy = require('@sap/cds-odata-v2-adapter-proxy')
 const cds = require('@sap/cds')
 cds.on('bootstrap', app => app.use(proxy()))
 module.exports = cds.server
