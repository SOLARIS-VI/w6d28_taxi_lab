const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function() {
    let taxi;

    // Function 01
    beforeEach(function() {
        taxi = new Taxi('Aston Martin', 'DB10', 'Jeeves');
    });

    // Function 02
    it('should have a manufacturer', function() {
        const actual = taxi.manufacturer;
        assert.strictEqual(actual, 'Aston Martin');
    });

    // Function 03
    it('should have a model', function() {
        const actual = taxi.model;
        assert.strictEqual(actual, 'DB10');
    });

    // Function 04  
    it('should have a driver', function() {
        const actual = taxi.driver;
        assert.strictEqual(actual, 'Jeeves');
    });

    describe('passengers', function() {
        
        // Function 05
        it('should start with no passengers', function() {
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });

        // Function 06
        it('should return the correct number of passengers', function() {
            taxi.addPassenger('John');
            taxi.addPassenger('Jane');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 2);
        });

        // Function 07
        it('should add a passenger', function() {
            taxi.addPassenger('John');
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, ['John']);
        });

        // Function 08
        it('should remove a passenger by name', function() {
            taxi.addPassenger('John');
            taxi.addPassenger('Jane');
            taxi.removePassengerByName('John');
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, ['Jane']);
        });

        // Function 09
        it('should remove all passengers', function() {
            taxi.addPassenger('John');
            taxi.addPassenger('Jane');
            taxi.removeAllPassengers();
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
    });
});
