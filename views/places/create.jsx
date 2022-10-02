const React = require('react');
const Def = require('../default');


function create_form({ states }) {
  const stateOptions = states.map((state) => {
    return (
      <option value={state.abbreviation}>{state.name}</option>
    )
  });

  return (
    <Def>
      <main>
        <h1>Add a new place</h1>
        <form className="form-horizontal" method="POST" action="/places">
          <div className="form-group row mb-3">
            <label className="col-sm-2 control-label" htmlFor="name">Place Name</label>
            <div class="col-sm-10">
              <input className="form-control" id="name" name="name" required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-2 control-label" htmlFor="pic">Place Picture</label>
            <div class="col-sm-10">
              <input className="form-control" type="url" id="pic" name="pic" />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-2 control-label" htmlFor="state">State</label>
            <div class="col-sm-10">
              <select className='form-select' id="state" name="state">
                <option selected>Select a state</option>
                {stateOptions}
              </select>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-2 control-label" htmlFor="cuisines">Place Cuisines</label>
            <div class="col-sm-10">
              <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
          </div>
          <div className="form-group mb-3 text-center">
            <input className="btn btn-primary" type="submit" value="Add Place" />
          </div>
        </form>
      </main>
    </Def >
  )
}

module.exports = create_form;