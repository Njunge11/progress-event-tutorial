// const http = require("http");
// const formidable = require("formidable");
// const fs = require("fs");
// http
//   .createServer((req, res) => {
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost')
//     if (req.url === "/fileupload") {
//       const form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//           console.log('XXXXXXXXX', files)
//         const oldPath = files.file.path;
//         const newPath = "/var/www/html/music/" + files.file.name;
//         fs.rename(oldPath, newPath, err => {
//           if (err) throw err;
//           res.write("File uploaded");
//           res.end();
//         });
//       });
//     }
//   })
//   .listen(8080);
console.log('1234')
