const React = require('react');
const Def = require('../default');

function detail(data) {
  return (
    <Def>
      <main>
        <div className="card mb-3 row">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="img-fluid" src={data.place.pic} alt={data.place.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.place.name}</h5>
                {/* Rating */}
                <h6 className="card-subtitle">Rating</h6>
                <p className="card-text text-secondary">Not rated</p>

                {/* Description */}
                <h6 className="card-subtitle">Description</h6>
                <p className="card-text text-secondary">Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>

              </div>
            </div>
          </div>
        </div>
        <h2>Comments</h2>
        <ul className="list-group">
          <li className="list-group-item text-secondary">No comments yet</li>
        </ul>
      </main>
    </Def>
  )
}

module.exports = detail;