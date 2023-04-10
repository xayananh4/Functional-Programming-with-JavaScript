      function findPrimes(n) {
        // Create an array of n elements, all initialized to true
        let sieve = Array(n).fill(true);
        // if the n was equal to 20.  here what the sieve would look like
        //Index:  0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
        // Value:  F   F   T   T   T   T   T   T   T   T   T   T   T   T   T   T   T   T   T   T
        
        // 0 and 1 are not prime, so set their values to false
        sieve[0] = false;
        sieve[1] = false;
        
        // Mark all multiples of 2, 3, 5, 7, 11, 13, 17... as composite
        for (let i = 2; i <= Math.sqrt(n); i++) 
        {
          if (sieve[i]) 
          {
            for (let j = i ** 2; j < n; j += i) {
              sieve[j] = false;
            }
          }
        }
        
        // Create an array of primes
        let primes = [];
        for (let i = 0; i < n; i++) {
          if (sieve[i]) {
            primes.push(i);
          }
        }
        
        return primes;
      }