//

//first kilometer to meter convert

function kilometerToMeter(kilometer) {
    var meter;
    if (0 > kilometer) {
        return "Please Enter your valid information??"
    }
    else {
        meter = kilometer * 1000;
    }
    return meter;
}

var result = kilometerToMeter(123);
console.log(result);

//second total amout of electroic porduct

function budgetCalculator(watch, mobile, laptop) {

    var total = 50 * watch + 100 * mobile + 500 * laptop;
    return total;
}

var result = budgetCalculator(2, 4, 1);
console.log(result);


// Third 

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 0) {
        return 'Do not Enter  0 or less than 0'
    }
    else if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var first10DayCost = 10 * 100;
        var remaining = day - 10;
        var after10DayCost = remaining * 80;
        totalCost = first10DayCost + after10DayCost
    }
    else {
        var first10DayCost = 10 * 100;
        var day10todayTo20Cost = 10 * 80;
        var remaining = day - 20;
        var after20Day = remaining * 50;
        totalCost = first10DayCost + day10todayTo20Cost + after20Day;
    }


    return totalCost;

}
var totalAmount = hotelCost(11);
console.log(totalAmount);

//fourth

function megaFriend(arrayName) {

    if (arrayName.length == 0) {
        return ('Enter your array element--??');
    }

    else if (arrayName.length > 0) {
        var largestName = '';
        for (var i = 0; i < arrayName.length; i++) {
            var element = arrayName[i];
            if (element.length > largestName.length) {
                largestName = element;
            }
        }
    }
    return largestName;
}

var friendName = megaFriend(["RASADULRASHED", "MAHIN", "RANA", "SAKIB", "MAHAFUZ", "HOUQ", "MOFAZZAL", "MAHI", "SUMAIYA", "RASADUL"]);

console.log(friendName);


