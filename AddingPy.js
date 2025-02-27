// Add 'Py' to Start of String if Not Present
// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

const addPy = (str) => {
    if (str === null || str === undefined ||str.substring(0, 2) === 'Py') {
        return str;
    } else {
        return `Py${str}`;
    }
}

console.log(addPy('thon'));
console.log(addPy('Python'));