const embyImage = new Image()
embyImage.src = './img/embySprite.png'

const monsters = {
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: embyImage,
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        name: 'Emby'
    }
}