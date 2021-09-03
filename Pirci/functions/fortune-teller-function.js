/*
* The Fortune Teller: With Functions!
Let's turn one of the previous example into a function.

! Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(jobTitle, geoLocation, partnerName, numPets) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    ", will adopt " +
    numPets +
    " cats.";
  console.log(future);
}

tellFortune("Full Stack Developer", "Amsterdam", "Ozlem", 2);
tellFortune("JavaScript Developer", "Eindhoven", "Ozlem", 3);
tellFortune("React Developer", "Rotterdam", "Ozlem", 4);
