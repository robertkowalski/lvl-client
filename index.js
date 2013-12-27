var port = process.env.LEVEL_PORT || 3333

var multilevel = require("multilevel/msgpack")
var net = require("net")

var db = multilevel.client()
var con = net.connect(port)

con.pipe(db.createRpcStream()).pipe(con)


module.exports = db
