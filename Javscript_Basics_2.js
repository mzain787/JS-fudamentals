//*****************************************************************************************//
//************************************   Objects  *****************************************//
//*****************************************************************************************//
//Object structure is like that :{ } ---> you can put any datatype member in object either its primitive or non-primitive
//you can access objects members in two different ways
//1. obj.name   2. obj['name']

//Symbol is identfied for the unique key cons mysym = Symbol('key1)

//If object is created through constructor a singleton is created

//Wecan decalare an object also in an otherway instead of this '{}' you can create instance of an object:
//Like that const tinderUser = new Object();
//you can add value value in that object like that : tinderUser.name="zain"

//you can use object within objects within objects
//Example:
// const regularUser = {
//     email:"some@gmail.com",
//     fullName: {
//         userfullName:{
//             firstName:"zain",
//             lastName:"malik"
//         }
//     }
// }
//you can access value like that:
// console.log(regularUser['fullName']['userfullName']['lastName']);
// console.log(regularUser.fullName.userfullName.firstName);
//both are the correct ways

//Some Object Methods 
//1. Object.keys(obj_name) ---> you can get all the keys in array in retutn from object
//2. Object.values(obj_name)---> you can get all the value regarding keys from object
//3. hasOwnProperty('any_key_name') ---> to this method you can find is specific is the part of object or not it returns true or false

//two or more objects combines by two methods
//first Assign method
//Example 
// const obj1 = {a:1, b:2}
// const obj2 = {c:1, d:2}
// const obj3 = Object.assign({},obj1,obj2); Or //const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
//Second we use spread operator to combine objects in one object
//Example: 
// const obj1 = {a:1, b:2}
// const obj2 = {c:1, d:2}
// let obj3 = {...obj1,...obj2}
// console.log(obj3);

//Object Destructuring
//accesing members from object like obj.name, obj['email'] instead of using this you can declare like that:
// const {name, email} = objectName;
//Now you can directly use name in your code.
//Example:
// const course = {
//     coursename:"js-in-hindi",
//     pric:999,
//     "courseInstructor":"zain"
// }
// const {courseInstructor} = course;
// console.log(courseInstructor);











//*****************************************************************************************//
//**************************************   JS ARRAYS **************************************//
//*****************************************************************************************//
//Array simple declaration
//Example:  myArr = [1,2,3,4,5,6]    //Array follows shalow copy
//You can access the array element through index number like that : arr[1];
//Usefull Array Methods:

// push ---> is used to push value in the array at last inedex   e.g: push(6) its pushes 6 at last index of array

// pop  ---> pops the value at last index in an array. e.g: use like this don not pass any value : pop() 

// unshift --->  places the value at '0' index. te value you wanna place at first pass from this function like: 
//unshift(11)

//shift ---> removes the value at first index

//join ---> converts an array into a string

//slice ---> slice use to sliced an array and make no changes in real array 
//splice ---> its fetches the values from array and vanished those values from real array
        //   const myArr = [0,1,2,3,4,5];
        //   console.log('array1',myArr);
        //   //Slice
        //   const mya1 = myArr.slice(0,3);
        //   console.log('Slice',mya1);
        //   console.log('array1 after slice',myArr)
        //   //Splice
        //   const mya2 = myArr.splice(1,3);
        //   console.log('Splice',mya2);
        //   console.log('array1 after splice',myArr)

//from ---> converts string into an array  e.g: console.log(Array.from("zain ali")) its returns an array of characters
// Note: if you pass an object from 'from methd it returns an empty array e.g: Array.from({zain:1}) returns '{}'

//of ---> Array.of is use to convert multiple variables into an array 
//Example:
         // let score1 =100
         // let score2= 200;
         // let score3 =300;
         // console.log(Array.of(score1, score2, score3))


//*******Combine two or more arrays in one********//

//you can combine arrays by using push method but the sam values are neglected
      //Example: 
      // const myArr = [0,1,2,3,4,5];
      // const myArr2= [4,5,7,4];
      // console.log('array1',myArr);
      // const newA = myArr.push(myArr2);
      // console.log(newA);

//other method is by using spread method
//Example
// const arr1 = [1,2,3];
// const arr2 = [1,2,4];
// console.log([...arr1,...arr2]);









//******************************************************************************/
//*********************************  Functions  ********************************/
//******************************************************************************/
//Simple way to declare a function
//  function name(){}    //calling : name();
// You can pass values from functions as a parameter and in calling phase pass the arguments and get the required results

//If the spread operator "..." is used in as with function parameter its called rest operator
//Example:
          // function myFun(a, ...b) {
          //     console.log("a", a)
          //     console.log("b", b)
          //     // console.log("manyMoreArgs", manyMoreArgs)
          // }
          // myFun("one", "two", "three", "four", "five", "six");
          

// You can also pass an object from function as a parameter nd fetch values
//Example: 
        // function handleObject(anyObject){
        //  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
        // }
        //Calling:
        // handleObject({
        //     username:"sam",
        //     price:399
        // })
//

//You can pass arrays from function as a parameter
//Example:
          //const mynewArray = [200, 400, 100, 600]
          // function sev(getArray){
          //     return getArray [0]
          //     }  
          //     console.log(sev(mynewArray));






//********************************************************************* */
//****************************  This and Arrow Function *****************/
//********************************************************************* */
//this keyword is used to fetch the value within the scope its provides current loc  //this.name
//We can also use 'this' operator in  the class

//if your function is of one line you do not need to put curly braces and return 
///e.g: const addTwo = (a,b)=> a+b

//IIFE (Imediately Invoked Function Expressions)
//sometimes global scope k pollution sy error hota hy to isliay ham iife use krtay hain quick function call k lay.
// (function chai(){
//     //named iife
//     console.log(`connection-1`);
// })();
// ((name)=>{
//     //unnamed iife
//     console.log(`Database connected to with ${name}`);
// })('zain');
//Note : (if use use two iifes must use semicolon(;) at the end)



//***********************************************************************/
//***************************  SCOPE (GLOBAL OR LOACL) ******************/
//***********************************************************************/
// {}  //curly braces is a real scope
//object m b curly braces aatay hain lakin wo scope nai hy if we use if else and function its called a scope of a funcion or a scope


////Hoisting => is all about function ko kesay declare krna hy 
//agar ap function use krrhay hain ksi avariable m store kr k to ap us funcion k ooper usay call nai krsaktay
//like that :
//this is wrong way
// ab();
// const abc = function ab(){}

//but this is correct
// cd();
// function cd(){
// }

//Nottice that: { if fuction has a function in it the parent function does not access the values of child function but
// the chld access the values of a parent function}




//*******************************************************************************/
//*******************************  CALL STACK ***********************************/
//*******************************************************************************/

//JavaScript Execution Context -->How our javscript code executes
//Execution context for every envirinemtn is different

// --> Global Execution Context
// -->Functional /Function Execution Context
// -->Eval Execution Context


//How our code executes :
//Global Execution -> this operator 
//First Step : Memory creation phase
//Secnd step : Execution phase

//Execution context returns the result to the global execution
//Javscript al execution on a thread //single thread



//CALL STACKS
//->first done Global execution
//call stack method follows Lifo strategy











