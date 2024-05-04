// Note: Jawab dengan 2 versi, yaitu menggunakan for dan built-in function (map / filter / find / dll)

// Linear Search
// Mencari data pada array
// Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
// Kembalikan dalam bentuk number
// Kembalikan undefined jika tidak dikembalikan
// 25 April 2024// 

// Versi menggunakan for loop
function linearSearch(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return num;
        }
    }
    return undefined;
}

// Contoh penggunaan
const arr1 = [8, 3, 9, 2, 5];
console.log(linearSearch(3, arr1)); // Output: 3

const arr2 = [2, 6, 7, 4, 1];
console.log(linearSearch(4, arr2)); // Output: 4

const arr3 = [2, 6, 7, 5, 1];
console.log(linearSearch(9, arr3)); // Output: undefined


// ======================================================================
// soal tentang fizzBuzzArray

function fizzBuzzArray(arr) {
    return arr.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "fizz buzz";
        } else if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "buzz";
        } else {
            return num;
        }
    });
}

// Contoh penggunaan
let arr1 = [8, 3, 9, 2, 5];
let arr2 = [3, 4, 6, 7, 9];
let arr3 = [4, 5, 9, 15, 19];
let arr4 = [2, 4, 7, 8, 1];

console.log(fizzBuzzArray(arr1)); // Output: [8, "fizz", "fizz", 2, "buzz"]
console.log(fizzBuzzArray(arr2)); // Output: ["fizz", 4, "fizz", 7, "fizz"]
console.log(fizzBuzzArray(arr3)); // Output: [4, "buzz", "fizz", "fizz buzz", 19]
console.log(fizzBuzzArray(arr4)); // Output: [2, 4, 7, 8, 1]
