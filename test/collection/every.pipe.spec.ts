import {EveryPipe} from '../../src/index';

describe('EveryPipe', () => {
  let pipe: EveryPipe;
  beforeEach(() => {
    pipe = new EveryPipe();
  });

  it('should get collection of primitives and use strict comparison(===)', function() {
    expect(pipe.transform(['bar', 'bar'], 'bar')).toBeTruthy();
    expect(pipe.transform([4, 4, 4, 4], 4)).toBeTruthy();
    expect(pipe.transform(['foo', 'bar'], 'bar')).toBeFalsy();
    expect(pipe.transform([1, 4, 4, 4], 4)).toBeFalsy();
  });

  it('should get array as collection and return if given expression is ' +
         'present all members in the collection',
     function() {

       var array = [
         {id: 1, name: 'faa'}, {id: 1, name: 'baz'}, {id: 1, name: 'ariel'}, {id: 1, name: 'bar'}
       ];

       expect(pipe.transform(array, 'id')).toBeTruthy();
       expect(pipe.transform(array, 'foo')).toBeFalsy();
     });

  it('should get function as expression', function() {
    var array = [0, 2, 4, 6, 8];
    expect(pipe.transform(array, (e: number) => !(e % 2))).toBeTruthy();
  });
});
