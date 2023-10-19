// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User {
    username;
    password;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    getPassword(){
    return this.password.replace(/./g, "*");
    }

    setPassword(newpassword){
        let containNumber = false;
        let containUppercase = false;
         for(let i = 0; i < newpassword.lenght; i++){
            const char = newpassword.charAt(i);
            if (!isNaN(char)) {
                containNumber = true;
            }else if(char === char.toUppercase()){
                containUppercase = true;
            }
         }

         if (newpassword.lenght >= 8 && containNumber && containUppercase) {
            this.password = newpassword;
         } else{
            console.log( "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
            );
         }   

    }
}

let user = new User("divanshu03", "Password03");
console.log(user.getPassword());

user.setPassword("myPassword"); 
user.setPassword("MyPassword");
user.setPassword("Mypassword123");
console.log(user.getPassword());
