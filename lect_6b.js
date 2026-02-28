//                                             SPREAD OPERATOR
const arrp=[10,20,30,40,50];
const arrq=[20,"shal",50,true,100,4.04];
arr.push(arr2);
console.log(arr);//output:[10,20,30,40,50,[20,'shal', 50,true,100,4.04]]....(it will add the second arr as it is in the 1st arr)


const arrt=[10,20,30,40,50];
const arrv=[20,"shal",50,true,100,4.04];
console.log(arrt.concat(arrv));//[10,20,30,40,50,20,'shal', 50,true,100,4.04]....(it will add the second arr element by elemnt and retur the new array)


const arr7=[10,20,30,40,50];
const arrm=[20,"shal",50,true,100,4.04];
const arra=["hii"];
console.log(arr7.concat(arrm,arra));//output: [10,20,30,40,50,20,'shal', 50,true,100,4.04,hii](you can add multipe arr via concatination)
// we can do the same thing via spread operator(...) 3 dots 
console.log(...arr7,...arrm,...arra);//output: [10,20,30,40,50,20,'shal', 50,true,100,4.04,hii] 


//.toSreing make string
const names=["shal","alice"];
console.log(names.toString());//output: Shal,alice (elements were seperated by comma)
console.log(typeof(names));//string

// console.log(join("-"));//output: Shal-alice (you can decide which would be the separator here)

//.indexof(item nmae) it will return the first index of  item occurs in the array 
//if the element is not prsent then will give -1 else it will return the index of elements(0 based indexing)

// console.log(names.indexof("alice"));//output:1(0 based indexing) it will return the first index of alice 
const names1=["shal","alice","alice"];
// console.log(names1.lastIndexOf("alice"));//output:2
console.log(names1.includes("alice"));//output:true (it will check whether alice is present in names or not and return the boolean value as result)

//              SORTING OF ARR(USING .SORT()) it will sort in ascending order
//it will sort on the bais of first alphabet then last and so on basis of table
const names2=["shal","alice","alia","mohan","zaid"];
console.log(names2.sort());//output:[ 'alia', 'alice', 'mohan', 'shal', 'zaid' ]

// you can reverse the given arr via .reverse()
console.log(names2.reverse());//output:[ 'zaid', 'shal', 'mohan', 'alice', 'alia' ]

//you can arrange the elements in decesdening order by 1. sort arr(it will make them in ascending order)
//  2. then reverse the sorted arr to get in decending order
const names3=["shal","alice","alia","mohan","zaid"];
console.log(names3.sort());
console.log(names3.reverse());//output:[ 'zaid', 'shal', 'mohan', 'alice', 'alia' ]

//example to prove tht sorting is done here char by char (string)by refering to the table. it is different from c++ and other lang 
// rule because here arr is heterogeneous so it will sort them on the bais of ascii table
let b=[10,90,45,30,68];
console.log(b.sort());//output:[ 10, 30, 45, 68, 90]
let c=[10,101,45,32,91];
console.log(c.sort());//output:[ 10, 101, 32, 45, 91]
let d=[10,101,45,32,91,"shal","Tia"];
console.log(d.sort());//output:[10,101,32,45,91,'Tia','shal'](each element is treated as string in js sorting)

// if you want to sort like actual in c++ the you need to use a function
let e=[10,40,31,71,5,11];
e.sort((a,b)=>a-b);
console.log(e);
// - .sort() method:
// In JavaScript, .sort() is used to sort elements of an array. By default, it sorts elements as strings, which can lead to unexpected results with numbers (e.g., "100" comes before "2" because "1" is less than "2" in string comparison).
// - Custom compare function (a, b) => a - b:
// - This tells .sort() how to compare two numbers.
// - If the result is negative, a comes before b.
// - If the result is positive, b comes before a.
// - If the result is zero, their order stays the same.
// So:
// - Compare 10 and 40: 10 - 40 = -30 → 10 comes before 40.
// - Compare 40 and 31: 40 - 31 = 9 → 31 comes before 40.
// - Compare 71 and 5: 71 - 5 = 66 → 5 comes before 71.


//for decending order arrangement
let f=[10,40,31,71,5,11];
f.sort((a,b)=>b-a);
console.log(f);

//                      FLATTENING OF ARRAY
//Flattening an array means converting a multi-dimensional or nested array into a single-level array.
const r=[20,30,[60,2,[9,5]],70];
console.log(r[2][2][1]);//output:5  it is a 3d array
const p=r.flat();//by default it will take 1
console.log(p);//output:[20,30,60,2,[9,5],70] it will falt array at given level
const q=r.flat(2);// at 2 level falt
console.log(q);//output:[20,30,60,2,9,5,70] u can also pass infinity 

//In JavaScript, an array is a special type of object used to store collections of data. It allows you to group multiple values under a single variable name and access them using numeric indexes.
