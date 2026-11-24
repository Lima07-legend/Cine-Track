//*console.log("CineTrack JavaScript connected!");
//*function totalprice(prices) {
   //* let total = 0;
  //*  for ( let i = 0; i < prices.length; i++) {
     //*   total = total + prices[i];
    }

   //* return total;
}
//*console.log(totalprice([5, 10, 15]));

function findLargest(numbers) {
    let largest = numbers[0];
    for ( let i = 1; i< numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
        }
    return largest;
}
console.log(findLargest([12, 45, 7, 89, 23]));

function countEven(numbers) {
    let even = 0;
    for ( let i = 0; i< numbers.length; i++) {
        if (numbers[i] % 2 ===0) {
            count++;
        }
    }
    return count;
}
console.log(countEven([2, 5, 8, 11, 14, 17]));

let student = {
    name: "Lima",
    Grade: "A",
    Age: 18
};
console.log(student.name);

function showStudent(student) {
    console.log(student.name);
}
showStudent(student);