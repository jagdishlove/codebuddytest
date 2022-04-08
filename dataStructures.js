// level {1/2/3}
//level 2 
// 1. Write a function to remove all even numbers from an Array.

const arry= [1, 3, 4, 6, 7, 8];
arry.filter(n=>n%2!==0);

// 2. Replace all the vowels in a string with uppercase vowels.

function conVowUpp(str) {
    // Stores the length
    // of str
    var N = str.length;

    for (var i = 0; i < N; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        document.write(str[i].toUpperCase());
      } else {
        document.write(str[i]);
      }
    }
  }

  // Driver Code
   
  var str = "Elie";
  conVowUpp(str);


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






