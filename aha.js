// but there are ways..

"use strict";

var ds = require('./deterministicStuff');

ds.someFunctionFooBar_1();                  // wait 6 seconds, then write

//ds.someFunctionFooBar_2();                // wait 4 seconds, then write

/*
Promise.resolve(ds.someFunctionFooBar_1())          // wait 6 seconds, then write
    .then( function(){
        return ds.someFunctionFooBar_2()            // wait 4 seconds, then write
    });
*/

/*
Promise.resolve(ds.someFunctionFooBar_bump_counter())   // wait 1.5 seconds, then write
    .then( function(){
        return ds.someFunctionFooBar_bump_counter()})         // wait 1.5 seconds, then write
    .then( function(){
        return ds.someFunctionFooBar_bump_counter()});        // wait 1.5 seconds, then write
*/

/*
//alternate methods
// preferred way - using await, starting in node.js v8:  https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop
// using asynch array, or chained promises (referencing the q library) https://daveceddia.com/waiting-for-promises-in-a-loop/
// nice summary of alternate implementations https://github.com/DukeyToo/es6-promise-patterns/blob/master/examples.js
// another nice summary, start at "Creating a sequence of Promises" and observe the forEach method - http://www.javascriptkit.com/javatutors/javascriptpromises.shtml

// recursive approach
// https://stackoverflow.com/questions/28134271/loop-with-native-promises
// https://lowrey.me/while-loop-with-es6-promises/


// https://stackoverflow.com/questions/30505960/use-promise-to-wait-until-polled-condition-is-satisfied
var i = 0;
function bumpCounterTenTimes (){
    return new Promise(function(resolve){
        (function doItAgain(){
            ds.someFunctionFooBar_bump_counter()
                .then(function(){
                    if ( i < 9) {
                        i += 1;
                        doItAgain();
                    } else {
                        console.log('-> there that worked as desired');
                        return resolve('-> there that worked as desired');
                    }
                })
                .catch(function(){
                    console.log('===> #fail what is going on here...');
                })
        })()
    })
}

Promise.resolve(bumpCounterTenTimes());
*/