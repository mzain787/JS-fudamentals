//*****************************************************************************************//
//**********************************  Memory Types  ***************************************//
//*****************************************************************************************// 
//Stack Memory and Heap Memory 
//In primitive type Stcak memory is used (apko aik copy milti hy)
//Im Non-primitive types Heap is used(original value milt hy)



//*****************************************************************************************//
//************************************  Datatypes  ****************************************//
//*****************************************************************************************//
//1=>primitive data types:
//number =>2 to power of 53
//bigInt 
//string => " "
//boolean => yes or no
//null => stand aloe value
//undefined => like => let a; a is not defined
//symbol => unique

//null is an object at all.


//Non-Primitive Data Types
//Function, Objects, Arrays


//*****************************************************************************************//
//**************************  Important Number Method *************************************//
//*****************************************************************************************//
//toFixed   //Fixed the values after the point like that if score= 100.453  and set Fixedto(1) output is score=104 
//toString  //converts into string and then your also apply different string methods 
//toLocaleString   //convert the value in to some form like balance =10000 and it converts to 10,000 add commas
//toPrecision    //it conerts value to full after point like if b = 10.536 you should precise according o valubut keepin mind about the point 
//round  // round to lthe nearest integer
//ceil   //round to upper nummber
//floor   //move to the lower number
//min    //return minimum value
//max //returns maximum value in  like (2,3,4)
//abs //converts negative value to positive






//*****************************************************************************************//
//********************************  Javscript Strings *************************************//
//*****************************************************************************************//
//String Interpolation
//like console.log(`My name is ${userName}.`)
//this is the latest method and always prefer to use this method

//String Usefull Methods
//1.trim()  ---> is used to remove extra spaces from right and left side of the string

//2.replace() ---> is used to replace the substrings with in the string note:(But it replaces the substring just at fist place)

//3.replaceAll ---> is used to replace all the substrings in the string. Note:(It replaces the substring in the string all all positions)

//4.length ---> is sued to check the length of the string 

//5.includes ---> is used to check whether the substring inclueds in the string or not.

//6.Includes function also includes two more options (startswith and endswith) ---> with both of these you can check that substring is at first or last of the string

//7.Slice Method --->   splice method is used to splice the string its used in two ways like if you use like this by giving one value in splice function the string cuts upto that value and it returns you the next part of the string
//For example :   const string = "zain and i am hero"    console.log(string.splice(4)) returns "and i m a hero",
//other way is you define range and it gives you the substring from the string according to thr given range in slice function
//for example:     string = "zain loves to code";  console.log(string.slice(2,5)) its returns "in"

//8. charAt ---> function is used to find that which character in teh string at given index number. e.g: chatAt(6) 6:is the index number you set in the charAt fucntion

//9. indexOf ---> you can give character name and check her index number.



//*****************************************************************************************//
//********************************Dates in JavaScript**************************************//
//*****************************************************************************************//

//1. let date = new Date()   //it gives you the latest date in original format
//its the mothod to declare a date

//Date Methods
//1. .toDateString()  ---> it gives you the time in string fromat like that: Fri Aug 25 2023

//2.  toString() ---> it gives time in this fromat : Fri Aug 25 2023 22:51:11 GMT+0500 (Pakistan Standard Time)
//Note: (typeOf date always returns an object)

//3. you can also set date according to your own choice like that 
//Note:(keep in  mind that month is declaring by starting from '0' index)
//Example:  let createMyDate = new Date(2023, 0, 23) and then you apply different method according to that hw you wanna show on screen

//4. you can declare like this also   console.log(new Date("01-12-2023").toDateString()); 
//it returns date like this:  "Thu Jan 12 2023" 
//In this do not use indexing for month just use like normal months numbering

//5.console.log(Math.floor(Date.now().toString()/1000)) --> this is used to get milliseconds value from january 1, 1970 according to mdn




//*****************************************************************************************//
//**********************************  Data Types Conversion  ******************************//
//*****************************************************************************************//
//you can convert one dattype variable to another very simply
//Example: 
// const number = 33
// let nts = String(number);
// console.log(typeof(nts));
// const string = "123"
// let stn = Number(string);
// console.log(typeof(stn));

// "strict " is used in javascript to check strict type checking in javascript







