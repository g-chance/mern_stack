// console.log(example);
// let example = "I'm the example!";

// console.log(hello);
// var hello = 'world';

    // var hello;
    // console.log(hello);
    // var hello = 'world'
    // // Will log undefined -- CORRECT!

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }


    // var needle;
    // function test(){
    //     var needle;
    //     needle = 'magnet';
    //     console.log(needle)
    // }
    // needle = 'haystack';
    // test();
    // // Will log 'magnet' -- CORRECT!

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

    // var brendan;
    // function print(){
    //     brendan = 'only okay'
    //     console.log(brendan)
    // }
    // brendan = 'super cool'
    // console.log(brendan)
    // // Will log 'super cool' -- CORRECT!

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

    // var food;
    // function eat(){
    //     var food;
    //     food = 'half chicken';
    //     console.log(food);
    //     food = 'gone'
    // }
    // food = 'chicken'
    // console.log(food)
    // eat()
    // // Will log 'chicken' 'half chicken' -- CORRECT!

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

    // var mean;
    // mean()
    // console.log(food);
    // mean = function(){
    //     var food;
    //     food = 'chicken';
    //     console.log(food);
    //     food = 'fish';
    //     console.log(food);
    // }
    // console.log(food)
    // // Will log reference error -- WRONG!
    // // // Actually logged TypeError

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

    // var genre;
    // function rewind() {
    //     var genre;
    //     genre = 'rock';
    //     console.log(genre);
    //     genre = 'r&b';
    //     console.log(genre);
    // }
    
    // console.log(genre);
    // genre = 'disco';
    // rewind();
    // console.log(genre);
    // // Will log undefined, 'rock', 'r&b', 'disco'

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

    // function learn(){
    //     var dojo;
    //     dojo = 'seattle';
    //     console.log(dojo);
    //     dojo = 'burbank';
    //     console.log(dojo);
    // }
    // dojo = 'san jose';
    // console.log(dojo);
    // learn();
    // console.log(dojo)
    // // Will log ReferenceError? -- WRONG!
    // // // Actually logs 'san jose', 'seattle', 'burbank', 'san jose'

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

    // function makeDojo(name, students){ 
    //     const dojo = {};
    //     dojo.name = name;
    //     dojo.students = students;
    //     if(dojo.students > 50){
    //         dojo.hiring = true;
    //     }
    //     else if(dojo.students <= 0){
    //         dojo = 'closed for now;'
    //     }
    //     return dojo;
    // }
    // console.log(makeDojo("Chicago", 65));
    // console.log(makeDojo("Berkeley", 0));
    // // Will log {name:Chicago,students:65,hiring:true}
    // // Will log {name=Berkeley,students:0,hiring:closed for now}