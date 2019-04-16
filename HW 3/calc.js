/*
 * Implement all your JavaScript in this file!
 */

// .OperandButtons calls match functions
// .NumberButtons calls the numerals only
// .SnowBUttons does the math or wipes the board to reset all variables
"use strict"
//decalarations first
var firstNum; //first set entered
var secondNum; //second set entered
var opera; //actions needed
var displaystart; //literally for display
var finish;
//look and feel overrieds
$("#display").val(displaystart);  //writes value to display field
$(".OperandButtons").css('backgroundColor', 'orange'); //grab and flip styles!!!
$(".SnowButtons").css('backgroundColor', 'orange'); //grab and flip styles!!!

//--------------------------------------------

//handles the first number and run on equations
$(".NumberButtons").click(function(firevent){
    if (firstNum === undefined){
        firstNum = this.innerHTML;
        $("#display").val(firstNum);
    }
    else if (firstNum !== undefined && opera === undefined && finish === undefined){
        firstNum += this.innerHTML;
        $("#display").val(firstNum);
    }

})
//handles the second number in every series
$(".NumberButtons").click(function(secevent){
    if (firstNum !== undefined && opera !== undefined && secondNum === undefined){
        secondNum = this.innerHTML;
        $("#display").val(secondNum);
    }
    else if (firstNum !== undefined && secondNum !== undefined && opera !== undefined){
        secondNum += this.innerHTML;
        $("#display").val(secondNum);
    }
})
//sets the operand on the first run and does math on the second
$(".OperandButtons").click(function(opevent){
    if (opera === undefined && secondNum === undefined){
        opera = this.innerHTML;
    }
    else if (firstNum !== undefined  && secondNum !== undefined){
        finish = undefined;
        finish = eval(firstNum + opera + secondNum);
        $("#display").val(finish);
        firstNum = finish;
        secondNum = undefined;
        opera = undefined;
        opera = this.innerHTML;
    }
    else if (finish !== undefined)
        finish = firstNum;
        finish = undefined;
        opera = this.innerHTML;
})
//operations for alt coded divide button
$("#divideButton").click(function(opevent){
    if (opera === undefined && secondNum === undefined){
        opera = "/";
    }
    else if (firstNum !== undefined  && secondNum !== undefined){
        finish = undefined;
        finish = eval(firstNum + opera + secondNum);
        $("#display").val(finish);
        firstNum = finish;
        secondNum = undefined;
        opera = undefined;
        opera = "/";
    }
    else if (finish !== undefined)
        finish = firstNum;
        finish = undefined;
        opera = "/";
})
//wipes the board
$("#clearButton").click(function(clevent){
    firstNum = undefined;
    secondNum = undefined;
    opera = undefined;
    finish = undefined;
    $("#display").val(displaystart); 
})
//finishes equations and sets up run ons
$("#equalsButton").click(function(eqevent){
   if (opera !== undefined && secondNum !== undefined){
        finish = eval(firstNum + opera + secondNum);
        $("#display").val(finish); 
        firstNum = finish;
        secondNum = undefined;
        opera = undefined;
   }
    else {}
})