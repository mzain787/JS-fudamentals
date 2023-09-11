//Logic Flow or Control Flow

//1.If Else
//"===" follows strict checking 
//both have same data type
//In if else we apply conditions
//for every curly braces her scope counts //var is a global variable do not use it use let or const 

//if we do not use curly braces its called implicit scope
//its written if statement in one line


//switch statement

//truthy or falsy values
// const email  = 'z';
// if(email){
//     console.log("got");
// }
// else{
//     console.log('not');
// }


//TRUTY OR FALSY VALUE

//1.FALSY VALUES
// false, 0, -0, "" -> empty string, null, undefined,NaN

//2.Truthy Values
//"0" if zero in string its truthy
//"false" if false in string its truthy
//[] -> empty array is also truthy
//{} object and function(){}

//method to check object and array to detect its empty or not
//For Array
// const array =[]
// if(array.length===0){
//     console.log("empty array");
// }

//For Object:
// const obj = {}
// if(Object.keys(obj).length===0){
//     console.log('empty');
// }

// false === 0 returns true
// false ==='' returns true
//0 ==== '' returns true

//Logical Operators
// && and ||  

//Nullish Coalescing Operator ( ??) : null defined
//it made for null and undefined it doenot return null returns other value
// let val1 = null ?? 10; 
// returns 10

// let val2 = undefined ?? 11
// returns 11


// let val3 = null ?? 5 ?? 6 
//retrurn 5



//Terniary operator
// const temp = 51;
// temp<=50 ? console.log('temp is less ')  : console.log('temp is high')


//Iterations
//1.for 
//Basic for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
// }

//You can use if-else with in the for loop
// for (let i= 0; i<=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }


// Loop  with in loop nested loop
// for (let i = 1; i <=10; i++) {
//     console.log(`Outer Loop value ${i}`);
//     for (let j = 1; j <=10; j++){
//     console.log(`${i} * ${j} = ${i*j} `)
//     }
// }



//Print Array through loop
// let myArray = ["flash", "batman", "superman"];

// for (let i = 0; i < myArray.length; i++) {
//      const element = myArray[i]
//      console.log(element);
// }



//break and continue

// break breaks the loop and stops 
//continue kip for one time and run whole loop
// for (let index = 0; index <=10; index++) {
//     if(index === 5){
//       console.log(`Dtected ${index}
//     `
//       );
//       break
//     }
//     console.log(index);
    
// }




//While Loop
// let a=0;
// while(a<=10){
//     console.log(a);
//     a+=2;
// }

// let arr  = ["zaeem", "zain", "tehreem"];
// let arr1 =0; 
// while(arr1<arr.length){
//     console.log(`value is ${arr[arr1]}`)
//     arr1 = arr1 + 1;
// }


//DO WHILE LOOP
// let score=11;
// do{
//   console.log(`score is ${score}`);
//   score++;
// }while(score<=10);
//if score is 11 it runs and shows 11 on screen




//*********************** */
//       Array things
//*********************** */

//for of
// const arr = "greet";
// for (const num of arr) {
//     console.log(num);
// }

//Maps:
// const map = new Map()
// map.set('name' , 'zain')
// map.set('na' , 'zaeem')
// console.log(map);
//Mp works on key and value also



// const map =new Map()
// map.set('PAK', 'Pakistan')
// map.set('UAE', 'United Arab Emirates');
// console.log(map);
//map known for unique values must be unique

//Its array destructure
//get values from map through for of
// for (const [key, value] of map) {
//     console.log(key, ':-' , value);
// }


//Important :Map is iteratable with for of loop but the objects are not iteratable with for of
//For to iterate objects we use for in loop
// const myObject ={
//     js : 'Javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by Apple'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }




//for in applied on arrays
// const myArr =[1,2,3,4,5];
// for (const key in myArr) {
//     console.log(myArr[key]);
// }




//call back function have not anyname
//call back is when use it wth in array or array loo methods
// coding.forEach( (item)=>{
//     console.log(item);
// })

//You can use this way also create function and pass function as a parameter in the forEach

//for each have access of whole array to every item, item and index not only item

//array of objects with forEach loop
// const myCoding = [
//     {
//         lang :'javascript',
//         lang_file_name:'js'
//     },
//     {
//         lang :'java',
//         lang_file_name:'java'
//     },
//     {
//         lang :'python',
//         lang_file_name:'py'
//     }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.lang);
// })



//**************************** */
//   Filter, Map and Reduce
//**************************** */



                              //Filter

//for each does not returnvalue and do not fetch out of the scope
//we don not store in a separate variable and use it futhur
// const coding =["ja","shah","gds"]
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item //its wrong it returns undefined
// })
// console.log(values);


//Filter
//filter b call back function hi leta hy
//filter return the values
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>{
//     return num<5
// })
// console.log(newNums);



// apply conditions using forEach
// const newNums = [];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


// const numbers= [1,2,3,4,5,6,7,8,9,10];
//For each
// const newNum = [];
// numbers.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum)







// const userBooks = book.filter((bk)=> bk.genrre ==='History')
// console.log(userBooks);



// const books = [
//     {
//         author: 'zain',
//         publishedAt: '1995',
//         bookName: 'khan pur'
//     },
//     {
//         author: 'kalu',
//         publishedAt: '1995',
//         bookName: 'raaz-faash'
//     },
//     {
//         author: 'farhaad',
//         publishedAt: '2001',
//         bookName: 'namak'
//     },
// ]
// const Books =books.filter((bk)=>bk.publishedAt==1995)
// console.log(Books)




//MAP

// const newNums = myNumber.map((num)=>num+10)  //map

//chaining : you can usemap with map
//jab b ham chaining krtay hain to pehla map dosra k sath add hojata hy 
// const newNums = myNumber
//       .map((num) => num*10)
//       .map((num) => num +2)
//       .filter((num)=>num>=40)
// console.log(newNums);



//Reduce Method:
//this method is used to handle values in cart
// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval){
//        console.log(`acc : ${acc} and currval: ${currval}` )
//        return acc + currval
// }, 1)

// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
// console.log(myTotal);


//Shpoiing cart example

// const shoppingCart = [
//     {
//     itemName:"JS course",
//     price:699
// },
// {
//     itemName:"Python course",
//     price:1080
// },
// {
//     itemName:"Mobile Dev course",
//     price:1388
// }
// ]
// const pricetopay =shoppingCart.reduce((acc,item)=>acc+item.price,0)
// console.log(pricetopay);

//Note: "two things in reduce method one "accumulator" and second "current value".

//MAP
//FOR EACH =>  for each is used only on arrays 
//FOR OF
//FOR IN
//FILTER