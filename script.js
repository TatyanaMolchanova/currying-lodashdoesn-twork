// let dragons = [
//     { name: 'fluffykins',   element: 'lightning' },
//     { name: 'noomi',        element: 'lightning' },
//     { name: 'karo',         element: 'fire' },
//     { name: 'doomer',       element: 'timewarp' }
// ]

// let hasElement =
//     (element, obj) => obj.element === element

// let lightningDragons = 
//     dragons.filter(x => hasElement('lightning', x))

//     console.log(lightningDragons)
















import _ from 'lodash'

// import lodash from 'lodash'

let dragon = (name, size, element) => 
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

dragon = _.curry(dragon)

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

    console.log(tinyDragon('lightning'))


//currying https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6
// let dragon = 
//     name => 
//         size =>
//             element =>
//                 name + ' is a ' +
//                 size + ' dragon that breathes ' +
//                 element + '!'

//     console.log(dragon('fluffykins')('tiny')('lightning'))

// let dragon = 
//     name => 
//         size =>
//             element =>
//                 name + ' is a ' +
//                 size + ' dragon that breathes ' +
//                 element + '!'

// let fluffykinsDragon = dragon('fluffykins')

//     console.log(fluffykinsDragon('tiny')('lightning'))

// let fluffykinsDragon = dragon('fluffykins')
// let tinyDragon = fluffykinsDragon('tiny')

//     console.log(tinyDragon('lightning'))

// the original code

// let dragon = (name, size, element) => 
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

// console.log(dragon('fluffykins', 'tiny', 'lightning'))































// function sendRequest() {
//     var requestID = '123'
//     $.ajax({
//         url: '/myUrl',
//         success: function(response) {
//             alert('Request ' + requestID + ' returned')
//         }
//     });
// }


// sendRequest()
















//1 in JS

// var me = 'Tatyana Molchanova'
// function greetMe() {
//     // console.log('Hello, ' + me + '!')
//     console.log(`Hello ${me}!`)
// }

// me = 'Batman'

// greetMe()


//2 in other languages

// // var me = 'Tatyana Molchanova'
// function greetMe(me) {
//     // console.log('Hello, ' + me + '!')
//     console.log(`Hello ${me}!`)
// }
// greetMe('Tatyana Molchanova')