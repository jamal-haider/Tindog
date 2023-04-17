import dogsData from './data.js'
import Dog from './Dog.js'

function getNewDog(){
    const nextDog = dogsData.find(dog => dog.hasBeenSwiped === false)
    return nextDog ? new Dog(nextDog) : false
}

function getNextDog(name){
    setTimeout(() => {
        dog = getNewDog()
        if(dog){
            render()
        }
        else{
            endDate()
        }
    }, 1500);
}

function endDate(){
    const likedOnes = dogsData.filter(dog => dog.hasBeenLiked === true)
    console.log(likedOnes)
    document.getElementById('main').innerHTML = `<h1>You've liked <br> ${likedOnes.map(dog => dog.name)} </h1>`
    document.getElementById('footer').style.display = 'none'
}

let dog = getNewDog()

function render(){
    document.getElementById('main').innerHTML = dog.getDogHTML()
}

function getCross(){
    document.getElementById('img-nope').style.display = 'block'
    dogsData.map(data => {
        if(data.name === dog.name)
            data.hasBeenSwiped = true
    })

    getNextDog()
}

function getHeart(){
    document.getElementById('img-like').style.display = 'block'
    dogsData.map(data => {
        if(data.name === dog.name){
            data.hasBeenSwiped = true
            data.hasBeenLiked = true
        }
    })
    getNextDog()
}

document.getElementById('icon-cross').addEventListener('click', getCross)
document.getElementById('icon-heart').addEventListener('click', getHeart)


render()


