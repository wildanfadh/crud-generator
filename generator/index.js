routers = require('./router')
module.exports = (app, options) => {
    app.use(options.path, routers(options.modal))
}