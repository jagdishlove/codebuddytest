// level {1/2/3}
//level 2 
// 1. Write a function to remove all even numbers from an Array.

const arry= [1, 3, 4, 6, 7, 8];
arry.filter(n=>n%2!==0);

// 2. Replace all the vowels in a string with uppercase vowels.

const string= 'Elie';
string.replace(/[aeiou]/gi,'')


// 3. Write a function to find the maximum number in an array.
const array = [1, 3, 4, 6, 7, 8, 2, 5];
const maxValue = array.sort().slice(-1)
array.pop(maxValue)


//level 3

// 1. Write a recursive function that transforms all the strings to uppercase

const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    }
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

const ChangeValueToUpper =(data) =>{
    for(var key in data){
        ChangeValueToUpper(data[key])
    }
    return data;
}




//2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.

const str = "a:2,b:3,c:4,a:5,b:6";
const parseObj = eval('({'+str+'})');


// Write a function in Javascript to print the sum of the first n fibonacci numbers.

const fib = (n) =>{
    if(n==1){
     return [0,1];   
    }
    else{
        var arr=fib(n-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        return arr;
    }
};

console.log(fib(6))

// Normalize the following object to an array of objects.

const data = {
    liked: [
      { id: 1, name: "John Doe", age: 20 },
      { id: 2, name: "Jane Doe", age: 30 },
      { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
      { id: 4, name: "Jason Doe", age: 20 },
      { id: 5, name: "Josh Doe", age: 30 },
      { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
      { id: 7, name: "Jasmine Doe", age: 20 },
      { id: 8, name: "Bob Doe", age: 30 },
      { id: 9, name: "Tom Smith", age: 40 }
    ]
  }

const newData=[];
newData.push(data)


