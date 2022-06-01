const React = require('react');
const Def = require('./default');

function error404() {
  return (
    <Def>
      <main>
        <h1>404 Page not found</h1>
        <div className="col-sm-12">
          <div className="row">
            <p className="text-center">The place you are looking for does not exist.  This makes panda very sad.</p>
            <img src="/images/sad-panda-404.jpeg" alt='Sad Panda 404 image' />
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404;