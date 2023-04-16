import dogsData from './data.js'
import Dog from './Dog.js'

const dogsArray = ['Rex', 'Bella', 'Teddy']


function getNewDog(){
    return dogsData.find(dog => dog.name === dogsArray.shift())
}

const dogData = getNewDog()
const dog = new Dog(dogData)

function render(){
    document.getElementById('main').innerHTML = dog.getDogHTML()
}

render()


