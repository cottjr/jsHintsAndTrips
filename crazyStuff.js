// an assortment of functions intended to highlight certain unusual or unexpected things

"use strict";

var internalCounter = 0;


function sayIt( sayWhat ){
    console.log( sayWhat );
}


function delayThenSayIt (sayWhat, afterHowLong){
    setTimeout(
        console.log(sayWhat),       //console.log() is evaluated, placed in event queue and executed in the current node.js event loop turn
        afterHowLong
    );
}

function delayThenSayIt_Corrected(sayWhat, afterHowLong){
    setTimeout(
        function ThisIsBetter(){     //function thatsBetter() is placed in the event queue, and only executed later, in the appropriate node.js event loop turn
            console.log(sayWhat)    //console.log() is only executed when it's surrounding function is executed
        },
        afterHowLong
    );
}


module.exports = {
    delayThenSayIt : delayThenSayIt,
    delayThenSayIt_Corrected : delayThenSayIt_Corrected,
    someFunctionFooBar_1 : function(){
        setTimeout(
            function(){
                sayIt(' FooBar 1')
            },
            6000
        );
    },
    someFunctionFooBar_2 : function(){
        setTimeout(
            function(){
                sayIt(' FooBar 2')
            },
            4000
        );
    },
    someFunctionFooBar_bump_counter : function(){
        setTimeout(
            function(){
                internalCounter += 1;
                console.log(' FooBar Bumped Counter ' + internalCounter)
            },
            1500
        );
    }
};