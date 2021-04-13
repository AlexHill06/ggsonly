let msg = "Hello Everyone"
let mySprite = sprites.create(img`
    . . . . . . . . . . e . e . . . 
    . . . . . . . . . . . e . . . . 
    . . . . . . . . . . e . e e e e 
    . . . . . . . . . . . . e d d e 
    . . . . . . . . . . . . e d d e 
    . . . . . . . . . . . . e e e e 
    . . . e e e e e e e e e e . . . 
    . . . e d d d d d d d d e . . . 
    . . . e d d d d d d d d e . . . 
    . . . e d d d d d d d d e . . . 
    . . . e e e e e e e e e e . . . 
    . . . . e d e . . e d e . . . . 
    . . . . e d e . . e d e . . . . 
    . . . . e d e . . e d e . . . . 
    . . . . e d e . . e d e . . . . 
    . . . . e e e . . e e e . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(5)
mySprite.say(msg, 2000)
console.log("hello console")
pause(100)
let msg2 = "What's up"
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 7 2 2 2 . . . . . 
    . . . . 2 3 2 7 2 3 2 . . . . . 
    . . . . 2 3 2 7 2 3 2 . . . . . 
    . . . . 2 3 2 2 2 3 2 . . . . . 
    . . . . 2 3 3 2 3 3 2 . . . . . 
    . . . . 2 3 3 2 3 3 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 7 7 9 9 7 7 2 2 2 . . . 
    . . 2 9 9 9 7 7 9 9 9 9 2 . . . 
    . . 2 9 9 9 7 7 9 9 9 9 2 . . . 
    . . 2 9 9 7 9 9 7 9 9 2 2 . . . 
    . . 2 2 7 9 9 9 9 7 2 2 . . . . 
    . . . 2 2 9 9 9 9 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    `, SpriteKind.Player)
mySprite.say(msg2, 1000)
mySprite.setPosition(105, 32)
