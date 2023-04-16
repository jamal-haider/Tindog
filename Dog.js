class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    getDogHTML(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `<img src="${avatar}" alt="Chat" class="img-dog">
                <img src="images/badge-like.png" alt="Like" class="img-like" id="img-like">
                <img src="images/badge-nope.png" alt="Nope" class="img-nope" id="img-nope">
                <div class="detail">
                    <h2>${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>`
    }
}


export default Dog
