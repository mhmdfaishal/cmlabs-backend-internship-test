/**
 * Nama         : Muhammad Faishal Dienul Haq
 * Test         : CMLABS Backend Internship Test
 * Email        : mhmd.faishal123@gmail.com
 * Deskripsi    : FizzBuzz Program 
 *                (Membuat loop 1 s.d. 100, 
 *                jika kelipatan 3 maka outputnya "Fizz", jika kelipatan 5 maka outputnya "Buzz", dan Jika kelipatan 3 dan 5 outputnya "FizzBuzz")
 * Tanggal      : 25-07-2022
 */

var i = 1;                                  // Inisialisasi i dengan nilai 1

while (i <= 100) {                          // Looping 1 s.d. 100
    if (i % 3 === 0 && i % 5 === 0) {       // Jika habis dibagi 3 dan 5
        console.log("FizzBuzz");            // print "FizzBuzz"
    } else if (i % 3 === 0) {               // Jika habis dibagi 3
        console.log("Fizz");                // print "Fizz"
    } else if (i % 5 === 0) {               // Jika habis dibagi 5
        console.log("Buzz");                // print "Buzz"
    } else {                                // else 
        console.log(i);                     // print i
    }
    i++;                                    // increment i
}