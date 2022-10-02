const React = require('react');
const Def = require('../default');

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-3">
        <div key={index} className="card">
          <img className='card-img-top'
            src={place.pic} alt={place.name}
          />
          <div className="card-body">
            <h5 className="card-title">
              {place.cuisines}
            </h5>
            <p className="card-text">
              Located in {place.city}, {place.state}
            </p>

            <a className="btn btn-primary" href={`/places/${index}`}>
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave about</h1>
        <div className='container text-center'>
          <div className="row">
            {placesFormatted}
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;