//                                       ARRAYS
// typeof arr is object and it is mutable in nature (means u can cahnge it )
//priitive data type is not mutable like strings
let marks1=20;
let marks2=30;
let marks3=40;
let marks4=50;

//                        all the entries are of int type so we can clearly do this
let marks5=[20,40,50,60,100];// by doing this we dont need to declare multiple type
console.log(marks5);//output:[ 20, 40, 50, 60, 100 ]

//                              in order to get the length of arr
let marks6=[20,40,50,60,100];
console.log(marks6.length);//output:5

// in case of array in js, we can create heterogeneous array as well. these facilities are not available in lang like c++, c etc
let marks7=[20,"shal",50,true,100,4.04];
console.log(marks7);//output:[ 20, 'shal', 50, true, 100, 4.04 ]

//                          accessing elements of js
console.log(marks7[0]);//output:20
console.log(marks7[3]);//output:true
console.log(typeof(marks7));//output:object

//                         changing the elements of arr
let marks9=[20,"shal",50,true,100,4.04];
marks9[2]="Alice";
console.log(marks9);//output: [ 20, 'shal', 'Alice', true, 100, 4.04 ]

//                         adding element in an array at the end of arr (push)
let marks8=[20,"shal",50,true,100,4.04];
marks8.push["hii"];
marks8.push["99"];
console.log(marks8);//output:[20,'shal',50,true,100,4.04,'hii',99];

//             pop operation is used to delete element from last
marks8.pop();
console.log(marks8);//output:[ 20, 'shal', 50, true, 100 ]

// adding elements at the strt and deleting element from the strt
let arr=[20,"shal",50,true,100,4.04];
arr.unshift(10);
arr.unshift(50);
console.log(arr);//output:[50,  10,20,'shal',50,  true,100, 4.04]

//for deleting first element of abv arr
arr.shift();
console.log(arr);//output:[10,20,'shal',50,  true,100, 4.04]
// we r advised to not use shift and unshift beacuse it can hamper our performance

//printing of arr element one by one 
let arr1=[20,"shal",50,true,100,4.04];
for (let i=0;i<arr1.length;i++){
    console.log(arr1[i]);// it will print eac element one by one
}

//printing of arr element one by one (method2)
for(let num of arr1){
    console.log(num);// it will print eac element one by one
}

let arr2=[20,"shal",50,true,100,4.04];
let arr3=arr2;
arr3.push(50);
console.log(arr2);//it will be [20,"shal",50,true,100,4.04,50]; that no will be added in arr2 as well
// arr is of object type and object is present in heap. here in non primitive data value is copied by reference 
// and beacuse of this both will point to the same memory . thats why change in one will be same for another one 
 // object (non primitive): copy by reference 
 //primitive data type: copy by value

// slicin of an array
const arr5=[10,20,30,40,50];
const arr4=arr5.slice(2,4);
console.log(arr4);//[ 30, 40 ] it will return 2,3 inex element of arr5
console.log(arr5);//[ 10, 20, 30, 40, 50 ] it will not affect the originl arr

// use of splice(strt index, no of element from that index)
// it will change the original arr by removing the given part from it
const arr6=[10,20,30,40,50];
console.log(arr6.splice(1,3));//[ 20, 30, 40 ] these are the elements which get removed from orginal arr6
console.log(arr6);//output[ 10, 50 ]

