const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (driverName, string) {
    let returnValue = driverName.filter(function (name){
        if(name.toLowerCase() === string.toLowerCase()){
            return ([name])
        }
    })
    return returnValue;
}

function fuzzyMatch(driverName, string) {
    let returnValue = driverName.filter(function (name) {
        const length = string.length
        if (name.slice(0, length) === string) {
            return [name]
        }

    })
    return returnValue;
}

function matchName (driverDetails, string) {
    let driverProperties = driverDetails.filter(function (item) {
        if (item["name"] === string) {
            return [item]
        }
    })
    return driverProperties;
} 
