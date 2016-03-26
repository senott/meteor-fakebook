Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState(){
    return {
      message: '',
      messageClass: 'hidden'
    }
  },
  displayError(message){
    this.setState({
      message: message,
      messageClass: 'alert alert-danger message'
    })
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message: '', messageClass: 'hidden'});
    var that = this;
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email, password, function(e){
      if(e){
        that.displayError(e.reason);
      } else {
        FlowRouter.go('/dashboard');
      }
    });
  },
  render (){
    return (
      <div>
        <span className="navbar-react">
          <i className="fa fa-facebook"></i>akebook
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form onSubmit={this.handleSubmit} id="signin" role="form"
            className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" id="email" className="form-control"
                placeholder="Email address" ref="email"/>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input type="password" id="password" className="form-control"
                placeholder="Password" ref="password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <br/>
            <span className={this.state.messageClass}>{this.state.message}</span>
          </form>
        </div>
      </div>
    )
  }
});
