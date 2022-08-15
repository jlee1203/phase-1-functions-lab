// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance >= 42){
        return distance - 42;
    }else if (distance <= 42){
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock >= endBlock){
        return (startBlock - endBlock) * 264;
    } else if (startBlock <= endBlock){
        return (endBlock - startBlock) * 264
    }
}

function calculatesFarePrice(startBlock, endBlock){
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400){
        return 0;
    }else if(distance >400 && distance<= 2000){
        return (distance - 400) *.02;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}