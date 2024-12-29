---

# Simple HTTP Server with HTML Template

## Description

This program creates a basic HTTP server using Node.js. It serves an HTML page stored in a `templates` folder. The server listens on port 3000 and responds to client requests with the contents of the `page.html` file.

### Features:
- Serves a static HTML page as a response to HTTP requests.
- Uses Node.js core modules (`http` and `fs`) to read the HTML template and create the server.
- Simple and lightweight implementation for serving HTML files.

### Example:
When a client visits `http://localhost:3000`, the server responds with the following HTML page:

#### HTML Content:
- A styled webpage featuring a book component.
- Includes an image, author details, description, and footer.

#### Example Output:
A webpage with:
- **Header**: "Book Component By Function."
- **Image**: A book cover.
- **Subheading**: Author's name ("By Kyle Simpson").
- **Paragraph**: Highlights an important feature of the book.
- **Footer**: Displaying copyright information.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

## Code

### JavaScript Server (`server.js`):
```javascript
const http = require("http");
const fs = require("fs");

// Read the HTML file from the templates folder
let html = fs.readFileSync(`${__dirname}/templates/page.html`);

// Create the HTTP server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(html);
});

// Start the server on port 3000
server.listen(3000);
console.log("Http server at http://localhost:3000");
```

### HTML Template (`page.html`):
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Task2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
  </head>
  <style>
    body div {
      display: flex;
      flex-direction: column;
      background-color: rgb(167, 166, 172);
    }
    header {
      text-align: center;
      color: rgb(0, 0, 131);
    }
    #bookimg img {
      margin: 0 auto;
      max-width: 100%;
      display: block;
    }
    #secondHeader {
      text-align: center;
      color: rgb(0, 0, 111);
      font-size: 25px;
    }
    #firstPara {
      text-align: center;
      font-size: x-large;
    }
    footer {
      text-align: center;
      font-size: 25px;
      color: rgb(5, 5, 113);
    }
  </style>
  <body>
    <div>
      <header>
        <h1>Book Component By Function</h1>
      </header>
      <main>
        <section>
          <div id="bookimg">
            <img
              src="https://images-ext-1.discordapp.net/external/LHkh26dQJgrVeZGM8jDCl8Z8v4daT3CGOwHcISnwsmU/https/kula.blog/img/ydkjs_scopes_and_closures.jpg?format=webp&width=528&height=754"
            />
          </div>
          <h2 id="secondHeader">By Kyle Simpson</h2>
          <p id="firstPara">
            <b
              >Parts of the language that many JavaScript <br />programmers
              simply avoid</b
            >
          </p>
        </section>
      </main>

      <footer>
        <p><b>&copy; 2021 Tania</b></p>
      </footer>
    </div>
  </body>
</html>
```

--- 
