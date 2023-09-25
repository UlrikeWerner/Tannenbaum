console.log("Moin");

let age : number = 21;
for (let i = 1; i <= age; i++){
    console.log(i);
}

if(age >= 18){
    console.log("Du darfst Alkohol trinken!");
} else {
    console.log("Du bekommst nur Limo!");
}

let score : number = 0;
if(score !== 0){
    console.log("Score ist verfügbar.");
}
if(score){
    console.log("Score wird als truthy ausgewertet.");
} else {
    console.log("Score wird als falsy ausgewertet.");
}

let username : string = "";
if(username !== ""){
    console.log("Username ist verfügbar.");
}
if(username){
    console.log("Username wird als truthy ausgewertet.");
} else {
    console.log("Username wird als falsy ausgewertet.");
}

let isAdmin : boolean = false;
if(isAdmin){
    console.log("isAdmin wird als truthy ausgewertet.");
} else {
    console.log("isAdmin wird als falsy ausgewertet.");
}
if(isAdmin === false){
    console.log("isAdmin ist false.");
}