publicRoutes = FlowRouter.group({
  name:'publicroutes'
});
privateRoutes = FlowRouter.group({
  name:'privateroutes',
  triggersEnter:[function(context, redirect){
    if(!Meteor.userId()){
      return FlowRouter.go('/');
    }
  }]
});
publicRoutes.route('/',{
  name:'Home',
  action:function(){
    ReactLayout.render(Homelayout,{})
  }
});
privateRoutes.route('/dashboard',{
  name:'Dashboard',
  action:function(){
    ReactLayout.render(Layout,{
      sidebar:<div><Sidebar/></div>,
      content:<div><Main/></div>
    })
  }
});
publicRoutes.route('/signout', {
  name:"Signout",
  action:function(){
    Meteor.logout(function(){
      FlowRouter.go('/');
    })
  }
});
privateRoutes.route('/profile', {
  name: 'Profile',
  action: function(){
    ReactLayout.render(Layout, {
      sidebar: <Sidebar/>,
      content: <Profile/>
    })
  }
});
publicRoutes.route('/user/:fullname',{
  name: 'UserHome',
  action:function(params){
    ReactLayout.render(Layout,{
      sidebar: <Sidebar/>,
      content: params.fullname ? <Home fullname={params.fullname}/>:'No user found'
    })
  }
});
