const checkBloodDonationEligiblity = (age, weight) => {
    if( age < 18) {
        return "UnderAge";
    }
    else if ( weight <= 50) {
        return "UnderWeight";
    }
    else {
        return "Eligible";
    }
}


console.log(checkBloodDonationEligiblity(17, 49)) // UnderAge
console.log(checkBloodDonationEligiblity(17, 50)) // UnderAge
console.log(checkBloodDonationEligiblity(18, 50)) // Eligible
console.log(checkBloodDonationEligiblity(18, 51)) // Eligible
console.log(checkBloodDonationEligiblity(17, 51)) // UnderAge
console.log(checkBloodDonationEligiblity(18, 49)) // UnderWeight
