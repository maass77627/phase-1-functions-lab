

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
    // if (end > start) {
    // let blocks = end - start
    // return blocks * 264
    // } else {
    // let blocks = start - end
    // return blocks * 264
    // }
    let blocks = Math.abs(end - start)
    return blocks * 264

}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
       return 0
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02

    } else if (distance <= 2500) {
         return 25
    } else {
       return 'cannot travel that far'
    }
    

}
