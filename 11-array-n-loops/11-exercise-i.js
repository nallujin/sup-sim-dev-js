// 11a
// const nums = [10, 20, 30];
// nums.splice(2, 1, 99);
////////////////////////////////////////////////////////////////////////////////////

// 11b
// const array1 = [1, 29, 22, 24, 5];
// const array2 = ["hi", "hello", "good"];
//
// function getLastValue(arr) {
//     const lastIndex = arr.length -1
//     return arr[lastIndex];
// }
//
// console.log(getLastValue(array1));
// console.log(getLastValue(array2));
////////////////////////////////////////////////////////////////////////////////////

// 11c
// const arr1 = [1, 20, 22, 24, 5];
//
// function arraySwap(arr) {
//     const newArr = []
//     for (let i = arr.length-1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
//
// console.log(arraySwap(arr1));
////////////////////////////////////////////////////////////////////////////////////

// 11d
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }
////////////////////////////////////////////////////////////////////////////////////

// 11e
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

// 11f
// let count = 0;
// while (count <= 10) {
//     console.log(count);
//     count += 2;
// }
//
// let count1 = 5;
// while (count1 >= 0) {
//     console.log(count1);
//     count1 -= 1;
// }

// 11g
// const theNums = [1, 2, 3];
//
// for (let i = 0; i < theNums.length; i++){
//     theNums[i] += 1;
// }
// console.log(theNums);

// 11h
// function addOne(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += 1;
//     }
//     return arr;
// }
//
// console.log(addOne([1,2,3]))
// console.log(addOne([-2, -1, 0, 99]));

// 11i
// function addNum(arr, Num) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += Num;
//     }
//     return arr;
// }
//
// console.log(addNum([1,2,3], 2));
// console.log(addNum([1, 2, 3], 3));
// console.log(addNum([-2, -1, 0, 99], 2));

// 11j
// function addArrays(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         arr1[i] += arr2[i];
//     }
//     return arr1;
// }
//
// console.log(addArrays([1, 1, 2], [1, 1, 3]));
// console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k
// function countPositive(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             count += 1;
//         }
//     }
//     return count;
// }
//
// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));

// 11l, 11m
// function minMax(nums) {
//     let minVal = nums[0];
//     let maxVal = nums[0];
//     if (nums.length === 1) {
//         [minVal, maxVal] = [nums[0], nums[0]];
//     } else if (nums.length === 0) {
//         [minVal, maxVal] = [null, null];
//     } else {
//         // Looking for min value
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] < minVal) {
//                 minVal = nums[i];
//             }
//         }
//         // Looking for max value
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] > maxVal) {
//                 maxVal = nums[i];
//             }
//         }
//     }
//     return {minVal, maxVal};
// }
//
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));
// console.log(minMax([]));
// console.log(minMax([3]));

// 11n
// function countWords(words) {
//     const wordCount = {};
//     for (let i = 0; i < words.length; i++) {
//         if (!wordCount[words[i]]) {
//             wordCount[words[i]] = 1;
//         } else if (wordCount[words[i]]) {
//             wordCount[words[i]] += 1;
//         }
//     }
//     return wordCount;
// }
//
// console.log(countWords(["apple", "grape", "apple", "apple"]));