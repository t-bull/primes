'use strict';

import * as Chai from 'chai';
import {Primes} from '../src/Primes';

describe('Prime Numbers', () => {
    describe('Given I have an array of numbers', () => {
        it('I can find the sum of all the prime numbers in the array', () => {
            let primes = Primes.calculatePrimes(1000);
            Chai.assert.equal(Primes.sumOfPrimes(primes), 76127);
        });
    });

    describe('Given I have a number', () => {
        it('I can tell if the number is prime or not', () => {
            Chai.assert.isTrue(Primes.isPrime(3));
            Chai.assert.isTrue(Primes.isPrime(5));
            Chai.assert.isTrue(Primes.isPrime(7));
            Chai.assert.isTrue(Primes.isPrime(89));
            Chai.assert.isFalse(Primes.isPrime(4));
            Chai.assert.isFalse(Primes.isPrime(140));
            Chai.assert.isFalse(Primes.isPrime(150));
            Chai.assert.isFalse(Primes.isPrime(160));
            Chai.assert.isFalse(Primes.isPrime(170));
        });
    });

    describe('Given I need ten prime numbers', () => {
        it('I can calculate the first ten prime numbers', () => {
            const firstTenPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
            const primes = Primes.getPrimes(10);
            Chai.assert.deepEqual(firstTenPrimes, primes);
        });
    })
});