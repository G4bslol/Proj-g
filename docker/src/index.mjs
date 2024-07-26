import http from 'node:http';

const host = '0.0.0.0';
const port = 3333;

const listener = (req, res) => {
    res.end('Hello, Gabs')
}

const server = http.createServer(listener)

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})