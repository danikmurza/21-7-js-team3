/* The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." */

let numChildren = 1;
let partnerName = "Gulfiya";
let geoLocation = "The United States";
let job = "JavaScript Developer";

let fortuneTeller =
    "You will be a " +
    job +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    ", will adopt " + numChildren +
    " kid.";

console.log(fortuneTeller);
