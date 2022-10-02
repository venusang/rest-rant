const React = require('react');

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/places">Places</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/places/create">Add Place</a>
            </li>
          </ul>
        </nav>
        <div className="content container text-center">
          {html.children}
        </div>
        <footer className="footer">
          <p>Hi do you like this sticky footer? It's positioned using Flex</p>
        </footer>
      </body>
    </html>
  )

}

module.exports = Def;