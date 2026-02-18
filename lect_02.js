// let is a variable whose value can be updated , and it will take the value which is last updated
// const is also a variable but you cannot update the value of this variable like let 
// var is another type of variable whose value can be updated like let (difference btween var and let)  in case of var you can declare the same variable twice or more 
//but you cannt declare the same evariable twice in case of let
// 1 byte =8 bit
//for knowing the data type you can use the( typeof)     ex:  console.log(typeof a)
//while checking the type of  all non premitive data type we will get(object) as their output ex. for arry , function, object
// primitive data type is immutable(means we cannot change or modify the valuesonce created)
let name="shalini";
let age=20

if(true){
    let c= 30;
}
console.log(name,age);//here the output is shalini 20
console.log(c);// we cannot get output as variables declared with let is block scoped and as c is declared in if block we cannot access it outside this block


let name="shalini";
let age=20
age= 30;// while updating the same variable you do'nt need to declare its type again
console.log(name,age);// this will give age as 30

const account= 12344;
const p;//( it will give an error beacause in case of const variale it is necessary to give value to the variable at the point of declaration)
console.log(account);// output is 12344


const account= 12344;
account=754755;
console.log(account);// it will throw an error as you cannot change the value once it is assigned to the const variable


//demerits of var variable  1. you can declare the same ariable twic in the programme  
// 2. declared variable is not block scoped (means you can accces the same variable outside the block)
var a= 10;
var a=20
console.log(a);//output is 20
                      
                           //example 2nd demerit
if(true){
    var a=10;
}
console.log(a);//output 10  but as a is declared inside the if block it is not good that we can access it outside the if block
               // var variable only respect functional scope and global scope not block scope


               ############################     DATATYPES         ####################################

// different types of data is present like integer, boolean, float, strng etc
// two types of data types 1. primitive  2. non primitive
// PRIMITIVE DAT TYPES HAS 7 TYPES   1. number 2. string 3. boolean 4. undefined 5. null 6. bigint 7. symbol
// NON PRIMITIVE DATA TYPE   ::::: 1. array 2. object 3. function


//                                               number
// (both int , float)
// (here in java script we dont need to declare the type of variable it will be decided by the languge itself which type to be assigned  on the bais of value given)
let a=10;//(value takes upto 8 bytes=8*8=64 bit)
let b=20;
console.log(a,b);//10 20

//                                                  string
// (we can write the string in both single' ' and double quotes " ")
let c="apple is a fruit";
let d="shalini";
console.log(c,d);// output:  apple is a fruit shalini (in the same line)

//                                            boolean
// (either the output can be true or false)
let login = true;
let f= false;
console.log(login, f);//output is true false

//                                           undefined
// (means if you dont defined or assigned any value to a variable)
let user; 
console.log(user);//output undefined(it is default value)

//                                            BIGINT 
// (used to store large numbers which cannot be stored in 8 byte)(at lat we add n in order to represent that this number is o big)
//it is of type bigint
let num=723634127858192340n;
console,log(num);// output same abv number along with n

//                                             NULL  
// (it is used when you intensonally does not want to give any value to the declared variable)
let weathr= null;
console.log(weathr);//output is null(difference btw null and undefined (null hme btata h that xyz variable do 
                    // exists but currently it has no value assigned )(undefined tells us that this variable do not exist))
console.log(typeof weathr);//object(its a bug but yet not corrected)

                    //                       ARRAY
let arr=[10,20, "shal" , true]// we can store here different types of data elements
console.log(arr);// [ 10,20,"shal,true ]
 
                            //        OBJECT
//object are present in the form of key value pair(use , at the end of each line not ;)(it provides meaning of the given value)
//it is of object type
let obj={
    name:"halini",
    age: 18,
    category:"general",
    account: 172351,
}
// we can access the elements of object
console.log(obj.name);//halini
console.log(obj);//{name:'shalini', age: 18}
//mutation is also allowed in object data type
obj,name="ram";
console.log(obj.name);//ram(update is done in name)
//                                       FUNCTION
// in java script you can store ur function in a variable as well
let s= function add(){// it stores the function in s variable
    console.log("hello");
}
console.log(s);// output [function:add] 
console.log(s());//output hello

//                                     CONCEPT
// IT IS TRUE  to say that we cannot change the value but 
let a=10;
a=20;
console.log(a);
//(  here initially a is ponting to x address where 10 is stored   after  a=20 another block of 8 byte memory
//  is created and now a is pointing that bock whre 20 is stored . so 10 is not deleted it is still there) thats why it is called primitive)


// non primitive data types are mutable(means you can change the value once it is assigned)
let arr=[10,20,30,40];
arr.push(40);
console.log(arr);//[10,20,30,40,40];  value is added to the last of abv arr
arr[0]=100;
console.log(arr);//[100,20,30,40] value can be changed by indexing



