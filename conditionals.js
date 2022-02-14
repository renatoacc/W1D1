const userName = "renato";
let language = "es";

// switch cases

switch (language){
    case 'en' :
        console.log(`Hello ${userName}`);
        break;
    case 'fr':
        console.log(`Bonjour ${userName}`);
        break;
    case 'es':
        console.log(`Hola ${userName}`);
        break;
    default:
        console.log(`Et ${userName}`);
        break;
}

// if state

if (language === "en"){
    console.log(`Hello ${userName}`);
} else if (language === "fr"){
    console.log(`Bonjour ${userName}`);
} else if (language === "es"){
    console.log(`Hola ${userName}`);
} else {
    console.log(`Et ${userName}`);
}

const greeting = language === "en" ? "Hello" : 
language === "fr" ? "Bonjour" : 
language === "es" ? "Hola" : "Et" ;

console.log(`${greeting} ${userName}`);