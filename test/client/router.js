var LocationMock = function() {
  this._path = Meteor.absoluteUrl('one');
}

_.extend(LocationMock.prototype, {
  start: function() {},
  set: function(path, options) {
    console.log('set')
    this._path = path;
  },
  path: function() {
    return this._path;
  }
});

/*
Tinytest.add('IronRouter - before hooks', function (test) {
  var router = new IronRouter({
    autoStart: false,
    autoRender: false
  });

  var where = 'client';

  var firstHookCalled = 0;
  router.before(function() { firstHookCalled += 1; }, {only: 'one'})

  var secondHookCalled = 0;
  router.before(function() { secondHookCalled += 1; }, {except: 'two'})

  var thirdHookCalled = 0;
  router.configure({before: function() { thirdHookCalled += 1; }})

  var fourthHookCalled = 0;
  router.before(function(){ fourthHookCalled += 1 })

  router.map(function() {
    this.route('one', {where: where});
    this.route('two', {where: where});
    this.route('three', {where: where});
  });

  router.setLayout = _.identity;
  router.setTemplate = _.identity;

  router.dispatch('one');
  test.equal(firstHookCalled, 1);
  test.equal(secondHookCalled, 1);
  test.equal(thirdHookCalled, 1);
  test.equal(fourthHookCalled, 1);

  router.dispatch('two');
  test.equal(firstHookCalled, 1);
  test.equal(secondHookCalled, 1);
  test.equal(thirdHookCalled, 2);
  test.equal(fourthHookCalled, 2);

  router.dispatch('three');
  test.equal(firstHookCalled, 1);
  test.equal(secondHookCalled, 2);
  test.equal(thirdHookCalled, 3);  
  test.equal(fourthHookCalled, 3);
});

Tinytest.add('Router - calling same route twice does not write to history', function (test) {
  var router = new IronRouter({
    autoStart: false,
    autoRender: false
  });
  
  router.map(function() {
    this.route('one');
    this.route('two');
  });
  
  var location = new LocationMock;
  var setCalled = 0, oldSet = location.set
  location.set = function() {
    setCalled += 1;
    oldSet.apply(this, arguments);
  }
  
  router.configure({ location: location });
  
  // starting the router doesn't set the url
  router.start();
  test.equal(setCalled, 0);
  
  router.go(router.url('one'));
  test.equal(setCalled, 0);
  router.go(router.url('two'));
  test.equal(setCalled, 1);
  router.go(router.url('one'));
  test.equal(setCalled, 2);
  router.go(router.url('one'));
  test.equal(setCalled, 2);
});
*/
