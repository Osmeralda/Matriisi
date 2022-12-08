function matrixChallenge(strArr) {
    strArr = ["3", "1", "<>", "1", "5"];
    let arr = [];
    let j = 0;
    let i = 0;

    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === "<>") {
            row = strArr.slice(j, i);
            arr.push(row);
            j = i + 1;
        }
    }
    finalRow = strArr.slice(j, i);
    arr.push(finalRow);
    j = i + 1;
    console.log(arr)


    for (let x = 0; x < arr.length; x++) {
        if (arr.length != arr[x].length) {
            return "Not possible";
        }
    }


    for (let rowI = 0; rowI < arr.length; rowI++) {
        row = arr[rowI];

        for (let columnI = 0; columnI < arr.length; columnI++) {
            if (row[columnI] != arr[columnI][rowI]) {
                return "Not symmetrical";
            }
        }
    }

    return "Symmetrical";
}
console.log(matrixChallenge());