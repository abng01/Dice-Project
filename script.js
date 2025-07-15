// function for generating number on D6 dice
function randomD6() {
    return Math.floor(Math.random()* 6) + 1
}

function resultD6() {
    alert(`Your number is ${randomD6()}!`)
}

// D6 test - ensuring numbers are between 1 and 6 and not a decimal

const testRollD6 = randomD6()
if (testRollD6 < 1 || testRollD6 > 6 || !Number.isInteger(testRollD6)) {
    throw new Error(`Test failed: generated ${testRollD6}`)
}

// function for generating number on D10 dice
function randomD10() {
    return Math.floor(Math.random()* 10) + 1
}

function resultD10() {
    alert(`Your number is ${randomD10()}!`)
}

// D10 test - ensuring numbers are between 1 and 6 and not a decimal

const testRollD10 = randomD10()
if (testRollD10 < 1 || testRollD10 > 10 || !Number.isInteger(testRollD10)) {
    throw new Error(`Test failed: generated ${testRollD10}`)
}