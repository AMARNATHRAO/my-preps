function secondHigestNumberApproch1(numbers) {
    let firstHighestNumber = 0,
        secondHigestNumber = 0;

    for (i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > firstHighestNumber) {
            firstHighestNumber = numbers[i];
        }
    }

    for (i = 0; i < numbers.length; i += 1) {
        if (
            numbers[i] > secondHigestNumber &&
            numbers[i] < firstHighestNumber
        ) {
            secondHigestNumber = numbers[i];
        }
    }

    console.log(`First Highest Number - ${firstHighestNumber}`);
    console.log(`Second Highest Number - ${secondHigestNumber}`);
}

function secondHigestNumberApproch2(numbers) {
    let firstHighestNumber = 0,
        secondHigestNumber;

    if (numbers.length < 2) {
        return;
    }

    for (i = 0; i < numbers.length; i += 1) {
        const number = numbers[i];
        if (number > firstHighestNumber) {
            secondHigestNumber = firstHighestNumber;
            firstHighestNumber = number;
        } else if (
            number !== firstHighestNumber &&
            number > secondHigestNumber
        ) {
            secondHigestNumber = number;
        }
    }
    console.log(`First Highest Number - ${firstHighestNumber}`);
    console.log(`Second Highest Number - ${secondHigestNumber}`);
}

secondHigestNumberApproch1([5, 15, 5]);
secondHigestNumberApproch2([5, 15, 5]);
