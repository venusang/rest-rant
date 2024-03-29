const React = require('react');
const Def = require('./default');

function home() {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img
            className='img-fluid'
            src="/images/photo-1600891964599-f61ba0e24092.jpg"
            alt="photo by Tim Toomey"
          />
          <div>
            Photo by <a href="https://unsplash.com/photos/STqHLqMne3k">Tim Toomey</a> on <a href="https://unsplash.com/photos/STqHLqMne3k">Unsplash</a>
          </div>
        </div>
        <div className="form-group mb-3 text-center">
          <a href="/places">
            <button className="btn btn-primary">Places Page</button>
          </a>
        </div>
      </main>
    </Def >
  )
}

module.exports = home;