// array Destructuring 
var array = [15,5,6,67,7,8,3,4,9];
var a,b,c,rest;
[a,b,c,...rest] = array;
console.log(rest);

//object Destructuring 
var student = {
   name: "Rakib",
   age: 23,
    parentInfo :{
        mothersName: "Mrs X",
        fathersName: "Mr Y"
    }
    
        
};
console.log(student.name,student.age);
var {name:nam,age,parentInfo} = student;
var {mothersName,fathersName} = parentInfo;
console.log(mothersName);

// Property accessors

var name =  student["name"];
console.log(student['parentInfo']['fathersName']);


// class 20
var obj = {
    name: "Next",
    age: 12,
    height: '5.7',
    parentsInfo: {
        mothersName: "Mrs Y",
        fathersName: "Mr X",
        address: {
            division: "Dhaka",
            address: "Dhanmondi, Dhaka"
        }
    }
}
console.log(obj.hasOwnProperty("parentsInfo"));
if (!obj.hasOwnProperty("parentsInfo") || !obj.parentsInfo.hasOwnProperty("address")|| !obj.parentsInfo.address.hasOwnProperty("address")) {
    console.log("object not found");
}else{
    console.log(obj);
}


var arr = [
    {
    name: "Next",
    age: 13,
    height: '5.7',
    parentsInfo: {
        mothersName: "Mrs Y",
        fathersName: "Mr X",
        address: {
            division: "Dhaka",
            address: "Dhanmondi, Dhaka"
            }
        }
    },
    {
    name: "Topper",
    age: 12,
    height: '5.7',
    parentsInfo: {
        mothersName: "Mrs Y",
        fathersName: "Mr X",
        address: {
            division: "Dhaka",
            address: "Banani, Dhaka"
            }
        }
    },
    {
    name: "Hello",
    age: 15,
    height: '5.7',
    parentsInfo: {
        mothersName: "Mrs Y",
        fathersName: "Mr X",
        address: {
            division: "Dhaka",
            address: "Badda, Dhaka"
            }
        }
    }
];

arr.forEach( key=>{
 console.log(key.name);
});



// ------****** Destructuring assignment******-------//

// copy array using rest operator and array Destruct 
var a,b,rest;
var array =[14,34,3,5,6,76,8,6];
[a,b,...rest]= array;
console.log(a);     // 14
console.log(b);     // 34
console.log(rest);  //[3,5,6,76,8,6]
console.log(array); //[14,34,3,5,6,76,8,6]

//object  Destruct
var obj = {
    a: "Rakib Hasan",
    b: 25,
    c: "hello",
    d: "hi",
    e: "Rakib Hasan",
    f: 25,
    g: "hello",
    h: "hi"
};
({b,a,c,d,...rest} = obj);
console.log(a); //Rakib Hasan
console.log(b); //25
console.log(c); //hello
console.log(d); //hi
console.log(rest);   //{e: 'Rakib Hasan',f: 25,g: 'hello',h: 'hi'}
console.log(obj);   //{a: 'Rakib Hasan',b: 25,c: 'hello',d: 'hi',e: 'Rakib Hasan',f: 25,g: 'hello',h: 'hi'}

// two variable swap
var a= 10, b= 7;
[a,b]=[b,a];
console.log(a);
console.log(b);


// array value swaping
var array = [1,2,3];
[array[0]] = [array[2]];
console.log(array);  //[ 3, 2, 3 ]

// array value swaping
var array = [1,2,3];
[array[0],array[2]] = [array[2],array[0]];
console.log(array);  //[ 3, 2, 1 ]


// object.keys() method       // it return an array of objects property 
obj = {
name: "Rakib Hasan",
age: 23,
language: "php"
};

let arr = Object.keys(obj);// [ 'name', 'age', 'language' ]
console.log(arr);
