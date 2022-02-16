var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    

        /* anArray = [family.members];
        let sum = 0; */
//-------------traigo arreglos de lucky numbers
        for (let i = 0; i <anArray.length; i++) {
        //-----------------------traigo los numeros de los arreglos
        let array = (anArray[i].lucky_numbers);
        let sum = 0;
          for (let j=0; j<array.length; j++ ){
            sum += array[j];
        }
console.log(sum);
        }

  
  

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}


//-------1------------------------------
family.members[0].lucky_numbers[3]= 33;
//console.log(family.members[0].lucky_numbers[3]);


//-------2-------------------------------
family.members.push({
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
})


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 