const test = require('app-root-path').require('test/TestUtils');

describe('dependencies', () => {
  it('babel destructuring', () => {
    const {inner} = {inner: 'hello'};
    expect(inner).toEqual('hello');
  });

  it('babel spread', () => {
    const {x, ...y} = {x: 1, a: 2, b: 3};
    expect(x).toEqual(1);
    expect(y).toEqual({a: 2, b: 3});
  });

  it('babel async await', test.asyncSpec(async() => {
    const result = await getResultAsync();
    expect(result).toEqual('hello');
  }));

  function getResultAsync() {
    return new Promise((r) => r('hello'));
  }

  it('proxyquire', () => {
    const mock = {};
    const demoModule = test.proxyquire('test/demoModule', {
      'must-be-mocked': mock
    });
    expect(demoModule).toBe(mock);
  });
});

