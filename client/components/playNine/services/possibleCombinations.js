export default (possibleNumbers, numberOfStars) => {

    var possibleCombinationSum = function(possibleNumbers, numberOfStars) {
    if (possibleNumbers.indexOf(numberOfStars) >= 0) { return true; }
    if (possibleNumbers[0] > numberOfStars) { return false; }
    if (possibleNumbers[possibleNumbers.length - 1] > numberOfStars) {
        possibleNumbers.pop();
        return possibleCombinationSum(possibleNumbers, numberOfStars);
    }
    var listSize = possibleNumbers.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
        var combinationSum = 0;
        for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += possibleNumbers[j]; }
        }
        if (numberOfStars === combinationSum) { return true; }
    }
    return false;
    };

}