publicRoutes = FlowRouter.group({
  name:'publicroutes'
});
privateRoutes = FlowRouter.group({
  name:'privateroutes'
});
publicRoutes.route('/',{
  name:'Home',
  action:function(){
    ReactLayout.render(HomeLayout,{})
  }
});
privateRoutes.route('/dashboard',{
  name:'Dashboard',
  action:function(){
    ReactLayout.render(Layout,{
      sidebar:<div>Sidebar</div>,
      content:<div>Content</div>
    })
  }
});
