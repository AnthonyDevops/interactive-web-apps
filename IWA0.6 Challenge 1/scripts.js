const primaryPhone = "0748105141";
const secondaryPhone = "O219131568";

// Only change below this line

const primaryValid = (typeof primaryPhone == "string" && isNaN(primaryPhone));
const secondaryValid = (typeof secondaryPhone == "string" && isNaN(secondaryPhone));

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);




