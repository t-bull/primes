'use strict';

import {difference} from 'lodash';

export class Primes {
    /**
     * Tests to see if a given number is a prime number
     */
    public static isPrime(num: number): boolean {
        // ensure positive integer
        if (num < 2) return false;
        if (num !== Math.round(num)) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    /**
     * Calculates all prime numbers upto the given boundary.
     * I.e. If the upperBoundary === 10 then the returned value
     * would be [2, 3, 5, 7].
     */
    public static calculatePrimes(upperBoundary: number): number[] {
        let numbers: number[] = [...Array(upperBoundary).keys()];
        const primes: number[] = [];

        numbers.splice(0, 2); // get rid of 0 and 1

        for (let i = 0; i < numbers.length; i++) {
            let a = numbers[i];
            primes.push(a);
            let multiples = numbers.filter(b => b % a === 0);
            numbers = difference(numbers, multiples.splice(1, multiples.length));
        }

        return primes;
    }

    /**
     * Calculates the sum of an array of numbers.
     */
    public static sumOfPrimes(primes: number[]): number {
        return primes.reduce((a, b) => a + b);
    }

    public static getPrimes(numberOfPrimes: number): number[] {
        let primes: number[] = [];
        let count = 2;

        while (primes.length !== numberOfPrimes) {
            if (Primes.isPrime(count)) primes.push(count);
            count++;
        }

        return primes;
    }
}

