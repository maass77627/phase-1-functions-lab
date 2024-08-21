// Code your solution in this file!
function distanceFromHqInBlocks(value) {
        if (value > 42) {
            return value - 42
        } else {
            return 42 - value
        }
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264

}

function distanceTravelledInFeet(start, end) {
    if (end > start) {
    return (end - start) * 264
    } else {
        return (start - end) * 264
    }

}

function calculatesFarePrice(start, end) {

   let distance = distanceTravelledInFeet(start, end)
   let newdistance = distance - 400

    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return newdistance * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500)  {
        return 'cannot travel that far'
    }

}
