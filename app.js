// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// async function exercise1() {
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json =await res.json()
//     console.log(json)
//     console.log('I should log after the data!');
// }
// exercise1();


// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should log after the data!');
// });





// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should be between the cats and dogs');
//     fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     .then((res) => res.json()).then((json) => {
//         console.log(json);
//         console.log('I should be last');
//     });
// });

// async function exercise2() {
//     console.log('I should be before the cats data');

//     const catRes = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//     const catData = await catRes.json();
//     console.log(catData);

//     console.log('I should be between the cats and dogs');

//     const dogRes = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no');
//     const dogData = await dogRes.json();
//     console.log(dogData);

//     console.log('I should be last');
// }
// exercise2();

// const sucessfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve()
//       }, 3000)
// });
// console.log(sucessfulPromise);

// const unsucessfulPromise =  new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject()
//     }, 3000)
// });
// console.log(unsucessfulPromise);
// setTimeout(function() {
//     console.log(sucessfulPromise);
//     console.log(unsucessfulPromise);
// }, 4000);

// const conditionalPromise = (condition) => new Promise(function(resolve, reject) {
//     if (condition) {
//         setTimeout(function() {resolve()}, 1000)
//     } else {
//         setTimeout(function() {reject()}, 1000)
//     }
// })

// console.log(conditionalPromise(true));

// function myFetch(url) {
//     const myPromise = (condition) => new Promise(function(resolve, reject) {
//         const webData = somehowGetWebData()
//         if (webData.statusCode < 400) {
//             resolve();
//         } else if (400 <=webData.statusCode <= 599) {
//             reject();
//         }
//     })

//     return myPromise;
// }

// myFetch('some-url.com').then(...).catch(...)

const conditionalPromise = (condition) => new Promise(function(resolve, reject) {
    if (condition) {
        resolve();
    } else {
        reject();
    }
})

console.log(conditionalPromise(true));
conditionalPromise.then((res) => console.log(res)).catch((err) => console.error (err))