// Code your solution here
function findMatching (arrayOfNames, s1) {
    const newArray = arrayOfNames.filter(s2 => s2.toUpperCase() === s1.toUpperCase())
    return s1 ? newArray : []
}

function fuzzyMatch (arrayOfDrivers, d1) {
    const newChar = arrayOfDrivers.filter(d2 => d2.charAt(0) === d1.charAt(0))
    return d1 ? newChar : []

}

function matchName (objDrivers, f1) {
    const newDrivers = objDrivers.filter(f2 => f2.name === f1)
    return f1 ? newDrivers : []

}