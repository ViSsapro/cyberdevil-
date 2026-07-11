const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Default to index.html if root path is requested
    let filePath = req.url === '/' ? './index.html' : '.' + req.url;
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code} ..\n`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Server eka සාර්ථකව Start වුණා!`);
    console.log(`🌍 URL: http://localhost:${PORT}`);
    console.log(`💡 CMD eක active එකේ තියලා Browser එකෙන් ඉහත Link එකට යන්න.\n`);
});