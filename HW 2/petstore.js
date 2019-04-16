
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {

    //check to see if a number or not
    if (isNaN(numAnimals) || isNaN(avgFood))   
    { 
        return -1;
    }
    //return value of calculation
    else
    {
        return (numAnimals * avgFood);
    }
    // IMPLEMENT THIS FUNCTION!
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, 
 * and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
        //check that the arry is not null
    if (!Array.isArray(week) || !week.length) 
    {
        return null;
    }

    //declare our return array and set temp array to edit
    var weekly = new Array();
    const weekin = Array.from(week);
    weekly.push(weekin[0].name);


   //iterate through and set return array
    for (i = 1, n = week.length; i < n; i++)
    {
        if (weekin[0].traffic < week[i].traffic)
        {
            weekin.shift();
            weekly.length = 0;
            weekly.push(week[i].name);
        }
        else if (weekin[0].traffic == week[i].traffic)
        {
            weekin.shift();
            weekly.push(week[i].name);
        }
    }
    //ceturn either array or single string
   if (weekly.length === 1)
   {
        return weekly[0];
   }
   else
   {
        //var result = weekly.map(function(week) {return week.name;});
        return weekly;
   }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
var ns = new Array('aa', 'ss', 'dd');
var ts = new Array('qq', 'ww', 'ee');
var bs = new Array('zz', 'xx', 'cc');


function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animals = new Array();

    if (names === 0 || names === null || names === undefined)
    {
        return animals;
    }
    else if (types === 0 || types === null || types === undefined)
    {
        return animals;
    }
    else if (breeds === 0 || breeds === null || breeds === undefined)
    {
        return animals;
    }
    
    else if (names == null || types == null || breeds == null)
    {
        return animals;
    }
    else if (names != 0 && names.length === types.length && names.length === breeds.length)
    {
        for (i = 0, len = names.length; i < len; i++)
        {
            animals.push(new Animal(names[i], types[i], breeds[i]));
        }
        return animals;
    }
    // else if (names === null || types === null || breeds === null)
    // {
    //     return null;
    // }
    else
    {
        return animals;
    }
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() 
{
    return 'hello world!';
}
