'use strict';

describe('Array.prototype.add-all-numbers', function () {
    var array;

    beforeEach(function () {
        array = [1, 2, 3, 4, 5];
    });

    it('should iterate and operate correctly', function() {
        var result = 0;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result; 
    
    expect(array.length).toBe(5);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
    expect(array[3]).toBe(4);
    expect(array[4]).toBe(5);

    expect(result.length).toBe(5);
    expect(result).toBe(15);

    });

});

    