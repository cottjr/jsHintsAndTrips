// this stuff can drive you nuts

"use strict";

var cs = require('./crazyStuff');

//cs.someFunctionFooBar_1();                  // wait 6 seconds, then write

//cs.someFunctionFooBar_2();                // wait 4 seconds, then write

/*
cs.someFunctionFooBar_bump_counter();       // wait 1.5 seconds, then write
cs.someFunctionFooBar_bump_counter();       // wait 1.5 seconds, then write
cs.someFunctionFooBar_bump_counter();       // wait 1.5 seconds, then write

*/

/*
for (var i = 0; i < 10; i += 1){
    cs.someFunctionFooBar_bump_counter();       // wait 1.5 seconds, then write
}

*/


//cs.delayThenSayIt('this text should appear only after 5 seconds', 5000);

// => now, let's start to fix things,
// starting with some basics...
//cs.delayThenSayIt_Corrected('this text should appear only after 5 seconds', 5000);

