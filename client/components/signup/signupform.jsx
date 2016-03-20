Signupform = React.createClass({
  render(){
    return (
      <div className="row">
        <div className="signup">
          <h1>Sign Up</h1>
          <p className="text-muted">
            It's free and always will be.
          </p>
        </div>
        <form>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input name="first_name" type="text" ref="first_name"
                 className="form-control" placeholder="First Name"/>
              </div>
              <div className="col-sm-6 form-group">
                <input name="last_name" type="text" ref="last_name"
                 className="form-control" placeholder="Last Name"/>
              </div>
            </div>
            <div className="form-group">
              <input name="email" type="text" ref="email"
               className="form-control" placeholder="Email or mobile number"/>
            </div>
            <div className="form-group">
              <input name="email" type="password" ref="password"
               className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-md btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
})
