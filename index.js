function shout(text){
    return text.toUpperCase();
}

function whisper(text){
    return text.toLowerCase();
}

function logShout(text){
    console.log(text.toUpperCase());
}

function logWhisper(text){
    console.log(text.toLowerCase());
}

function sayHiToGrandma(text){
    if(text === text.toLowerCase()){
        return "I can't hear you!";
    } else if(text === text.toUpperCase()){
        return "YES INDEED!";
    } else if(text.toLowerCase() === "I love you, grandma."){
        return "I love you, too.";
    }
}
