const fs = require('fs')
const path = require('path')
const http = require('http')
const cp = require('child_process')
const WebSocketServer = require('ws').Server

let app = null
let ws = null
let socket = null

class App {
    constructor() {
        this.server = http.createServer((req, res) => {
            if (req.url === '/') {
                fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
            }
            if (req.url === '/console.js') {
                fs.createReadStream(path.join(__dirname, 'console.js')).pipe(res)
            }
        })

        this.server.listen(8080, () => {
            cp.exec('start http://127.0.0.1:8080/')
        })
    }
}

const bclog = (...arg) => {
    
    if (!ws) {
        ws = new WebSocketServer({ port: 8081 })
    } 

    if (!app) {
        app = new App()
    }

    if (socket) {
        socket.send(JSON.stringify(arg))
    } else {
        ws.on('connection', websocket => {
            socket = websocket
            socket.send(JSON.stringify(arg))
        });
    }
}

module.exports = bclog