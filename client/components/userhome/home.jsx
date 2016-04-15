Home = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    data.homeUser = Meteor.users.findOne({'profile.fullname': this.props.fullname});
    return data;
  },
  render(){
    return (
      <div>
        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2><Avatar user={this.data.homeUser && this.data.homeUser._id}/></h2>
            </div>
          </div>
          <div className="panel-body">
            <h2>{this.data.homeUser && (this.data.homeUser.profile.firstname + " " + this.data.homeUser.profile.lastname)}</h2>
          </div>
        </div>
      </div>
    )
  }
});
