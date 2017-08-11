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