it('should check ng-click', function() {
    expect(element(by.binding('counter')).getText()).toMatch('0');
    element(by.css('button')).click();
    expect(element(by.binding('counter')).getText()).toMatch('1');
  });
  
  