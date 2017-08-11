// an assortment of functions intended to highlight certain unusual or unexpected things

"use strict";

var internalCounter = 0;


function sayIt( sayWhat ){
    console.log( sayWhat );
}


module.exports = {
    someFunctionFooBar_1 : function(){
        return new Promise(
            function(resolve){
                setTimeout(
                    function(){
                        sayIt(' FooBar 1');
                        resolve('FooBar 1');
                    },
                    6000
                );
            }
        )
    },
    someFunctionFooBar_2 : function(){
        return new Promise(
            function(resolve){
                setTimeout(
                    function(){
                        sayIt(' FooBar 2');
                        resolve('FooBar 2');
                    },
                    4000
                );
            }
        )
    },
    someFunctionFooBar_bump_counter : function(){
        return new Promise (
            function(resolve){
                setTimeout(
                    function(){
                        internalCounter += 1;
                        console.log(' FooBar Bumped Counter ' + internalCounter);
                        resolve(' FooBar Bumped Counter ' + internalCounter);
                    },
                    1500
                );
            }
        )
    }
};