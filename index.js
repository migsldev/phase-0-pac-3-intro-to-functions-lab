// all uppercase functino
function shout(string) {
    return string.toUpperCase()
}
console.log(shout('hello'));

//all lowercase
function whisper(string) {
    return string.toLowerCase()
}
console.log(whisper('HELLO'));

//
function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase())
}
logWhisper("hello");

//greeting to roommate function
function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case string.toLowerCase():
            return "I can't hear you!"
        break;
        case string.toUpperCase():
            return "YES INDEED!"
        break;
        case "Let\'s have dinner together!":
            return "I would love to!"
        break;
    }
        
}
console.log(sayHiToHeadphonedRoommate('hello'));
console.log(sayHiToHeadphonedRoommate('HELLO'));
console.log(sayHiToHeadphonedRoommate('Let\'s have dinner together!'));