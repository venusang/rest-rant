const React = require('react');
const Def = require('../default');

function detail({ id }) {
  return (
    <Def>
      <main>
        <h1>Detail for {id}</h1>
        {id}
      </main>
    </Def>
  )
}

module.exports = detail;