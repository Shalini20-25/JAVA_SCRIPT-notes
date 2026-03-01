//                                             OBJECTS
// In JavaScript, objects are one of the most fundamental data structures. They allow you to store data as key-value pairs, where each key 
// (also called a property name) maps to a value. Values can be primitives (like numbers or strings)

//creation of object with key value pair .In JavaScript, when declaring an object, you must assign it with = before the curly braces {}.

const user={
    name:"shal",//key:val pair
    age:"20",
    roll:18,
    email:"shal767@gmial.com",
    //"home address": "delhi",
};
console.log(user);//output:{ name: 'shal', age: '20', roll: 18, email: 'shal767@gmial.com' }
console.log(typeof(user));//output:object
console.log(user.age);//output:20)can access value through key
console.log(user["age"]);//output:20 it is another way of accesing value. pass value as string

//                                        inserting elemnt
user.aadhar=12436;//we can create aadhar key value pair through this method
console.log(user);//output:{ name: 'shal', age: '20', roll: 18, email: 'shal767@gmial.com','aadhar=12436'}

// we can perform CRUD operation in object : create , read , update , delete

//                                        update element
user.age=35;
console.log(user);//output:v{ name: 'shal', age: 35', roll: 18, email: 'shal767@gmial.com','aadhar=12436'}
//                                         delete element
delete user.email;
console.log(user);//output:{ name: 'shal', age: '35', roll: '18','aadhar=12436'}

//if you try to copy  one object then changes in one object will affect the another one as both of them point to the same memory addres (copy by reference is done here)
const user2=user;
user2.age=30;
console.log(user);//output:{ name: 'shal', age: 30, roll: 18, aadhar: 12436 } you can see here 

//                             printing of only values or only keys
//object.keys(...): for keys
//object.values(...): for values
//it will creat an arr and keep all the values or keys
console.log(Object.keys(user));//output:[ 'name', 'age', 'roll', 'aadhar' ]
console.log(Object.values(user));//output:[ 'shal', 30, 18, 12436 ]
console.log(Object.entries(user));//output:[[ 'name', 'shal' ],[ 'age', 30 ],[ 'roll', 18 ],[ 'aadhar', 12436 ]] it will give an arr of key value

//                                looping
//to get keys of object use for-in loop
for(let keys in user){
    console.log(keys);//output:[name age roll aadhar]
}

//to get key alue pair via for-in loop
for(let keys in user){
    console.log(keys,user[keys]);//output: name shal age 30 roll 18 aadhar 12436
}
//in the abv you cannot use (user.keys) method because it will give undefined as result for the values of keys

//this is                            object destructing
const{name,age}=user;
console.log(name,age);//output: shal 20 .....it will give the value of keys name and age

//for of loop for arrays
for (let keys of Object.keys(user)){
    console.log(keys);//it will give keys
}

for (let values of Object.values(user)){
    console.log(values);//it will give values
}

//                CREATING FUNCTION(METHODS) INSIDE OBJECTS
const info ={
    name:"shal",//key:val pair
    age:"20",
    roll:18,
    greeting:function(){//declaration of function inside object
        console.log(`good morning shal ${info.roll}`);
        // console.log(`good morning shal ${this.roll}`);//here this keyword will store the reference of object (widely used) in which it is called . 
        // 2. it makes ur code flexible
        return 30;//returning from fun
    }
    
}
//function calling
info.greeting();//output: good morning shal 18


const p=info.greeting();
console.log(p);//output:good morning shal 18 (in next line) 30

//                       NESTED OBJECT 
// creation of object inside object
const user7={
    name:"shal",//key:val pair
    age:"20",
    address:{//another object
        city:"dwyedh",
        state:"uttar pradesh",
    }
};console.log(user7);//output:{name: 'shal',age: '20',address: { city: 'dwyedh', state: 'uttar pradesh' }}
//accesing elements in nested object
console.log(user7.address.city);//output:dwyedh

//by using                    spread operator (...)
//it will create shallow copy of object(only first one)
// we can create another object which do not point to the same memory loc (changes in one will not affect the changes in another at only level)


let user8={...user};//this will create the independent user
//but 
user8.name="diva";
//you can see that now when you cange the name in user8 it doesn't affect name of original user
console.log(user8);//output:{ name: 'diva', age: 30, roll: 18, aadhar: 12436 }
console.log(user);//output:{ name: 'shal', age: 30, roll: 18, aadhar: 12436 }

user8 = {...user7};
user8.address.city="pune";
console.log(user8);//output:{name: 'shal',age: '20',address: { city: 'pune', state: 'uttar pradesh' }}

console.log(user7);//output:{name: 'shal',age: '20',address: { city: 'pune', state: 'uttar pradesh' }}
//you can see changes in one bring chnges in original as well it is beause spread opearator create independent copy of objectat only frst level(another level will remain same)

//               structuredClone()
//it is used to create deep copy 
let atm={
    name:"shal",
    age:18,
    location:{
        state:"goa",
        city:"uweiqwu",
    }
} 
const user9=structuredClone(atm);// by using ths you would be able to make changes in nested object as well
user9.location.city="hdccgb";
console.log(user9);//output:{ name: 'shal', age: 18, location: { state: 'goa', city: 'hdccgb' } }


let details={
    name:"shal",
    age:18,
    0:"vvnb",//you can use int keys as js store it as string behind
    2:100,
}; console.log(details);//output:{ '0': 'vvnb', '2': 100, name: 'shal', age: 18 }
// console.log(user.0); if u try to access element by numnerical keys and in this method the it will throw an error
console.log(details[0]);//output:vvnb

// we can use symbol or string as key 
