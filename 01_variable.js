let accountId = 144553;  // Use 'let' instead of 'const' for reassignment
let accountEmail = "Shivam";
var accountPassword = "12345";
let accountCity = "Bihar";  // Ensure variables are declared properly

accountId = 2;  // Now reassignment works since we are using 'let'
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity]);
