(function(){
    
    function nickName(nick, name) {

        // nickname must be shorter than name
        if (nick.length >= name.length) {
            return false
        }
        // convert strings to lower case for comparisons
        nick = nick.toLowerCase();
        name = name.toLowerCase();
        // set index for traversing name
        nameIndex = 0;
        // variable for use with inner while loop
        let notFound;
        // variable for retrun value of whether we have a legit nickname
        let isNickname = false;
    
        // use a for loop to traverse the nickname
        for (let i=0; i < nick.length; i += 1) {
            notFound = true;
            //  use while loop to traverse full name
            while ((notFound) && (nameIndex < name.length)) {
                //  if letters match then do stuff
                if (nick[i] == name[nameIndex]){
                    // match found in inner loop
                    notFound = false;
                    if (i == (nick.length - 1)) {
                        // if letters match and we are at end of nickname, then SCORE!!
                        isNickname = true;
                    }
                }
                // increment index for name traversal
                nameIndex++
            }
        }
        return isNickname;
    }
    module.exports = nickName;
    
    })()