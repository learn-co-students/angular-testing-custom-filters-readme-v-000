describe('UserService', function () {
	var $controller, firstUppercase, City;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		firstUppercase = $filter('firstUppercase');
    city = $filter('city');
	}));

	it('firstUpperCase should capitalise the first letter', function () {
		expect(firstUppercase('test')).toEqual('Test');
	});

  it('City should return list of cities filtered to input', function() {
    var arr = [{city: 'new york'},{city: 'chicago'}];
    expect(city(arr, 'new york')).toEqual([arr[0]]);
  });

});