// استيراد مكتبة http لإنشاء الخادم و fs لقراءة الملفات
const http = require('http');
const fs = require('fs');
const path = require('path');

// تعيين العنوان المحلي والمنفذ
const hostname = '192.168.1.5'; // العنوان الذي يتيح للجهاز قبول الاتصالات من الشبكة
const port = 3000; // رقم المنفذ الذي سيعمل عليه الخادم

// إنشاء الخادم باستخدام http.createServer
const server = http.createServer((req, res) => {
  // تحديد المسار الكامل للملف بناءً على الطلب
  let filePath = path.join(__dirname, req.url === '/' ? 'test.html' : req.url);

  // تحديد نوع المحتوى بناءً على امتداد الملف
  let extname = path.extname(filePath);
  let contentType = 'text/html';

  // تحديد نوع المحتوى استنادًا إلى الامتداد
 switch (extname) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    default:
      contentType = 'text/html';
  }

  // قراءة الملف المحدد ورده كاستجابة
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1> file not found </h1>');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});

// جعل الخادم يستمع على العنوان والمنفذ المحددين
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


