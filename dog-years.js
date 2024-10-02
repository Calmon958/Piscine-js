const dogYears = (planetName, dogAge) => {
const planetYear = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

var res = 0
var DogAgeInSec = dogAge /31557600 
var planet = DogAgeInSec / planetYear[planetName]

res = planet * 7
return Number(res.toFixed(2))

}
console.log(dogYears("earth", 1000000000))