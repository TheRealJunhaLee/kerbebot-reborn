//Please comment your code I am dumb

const info = require("./botinfo.json");
const Discord = require("discord.js");
const client = new Discord.Client();

//Easy read list of all kerbebot commands
const commands = {
    ">help": "KerbeBot displays all commands",
    ">ping": "Kerbebot will reply with \"pong\" probably"
}

const emojiHelp = [">kerbeDance"];

//All code that runs when kerbebot logs onto discord
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//All code that runs when kerbebot reads a message
client.on("message", message => {
    
    //Surround everything in a try catch because we are not perfect god-tier programmers
    try {
        
        //Parse the message into an array of words, then define the command as the first "word"
        let msg = message.content.split(" ");
        let command = msg[0];
        
        
        /**I refuse to use a switch/case because code environments suck collapsing those**/
        
        //Ping command
        if (command == ">ping") {
            
            //Sends some comedy gold messages to subvert their expectations
            message.channel.send("\"pong\" probably");
            message.channel.send("Haha funny joke amirite fellow kids");
            
        }
        //Help command that I copy pasted from old kerbebot wahaha
        else if (command == ">help") {
            
            //The message that kerbebot will send
            var finalMessage = "**```MAIN COMMANDS```**\n";
            
            //Loop through the help object and for every command add it to the message
            for (var key in commands) {
                if (commands.hasOwnProperty(key)) {
                    
                    //Did some indentation so its slightly easier to mentally parse whats happening here
                    finalMessage += "`"
                                    + key
                                    + "` "
                                    + "- "
                                    + commands[key]
                                    + "\n";
                }
            }
            
            //The rest of this should make sense id rather not commentate on it
            finalMessage += "\n **```EMOJI COMMANDS```**\n";
            
            for (var i in emojiHelp) {
                finalMessage += "`" + emojiHelp[i] + "` "
            }
            
            finalMessage += "\n **```OTHER INFO```**\n`Github Repo` - https://github.com/TheRealJunhaLee/kerbebot-reborn\n`Discord Invite` - https://discord.gg/PWRNymR/ \n\n**Please note that Kerbebot is still in development and is somewhat unstable.**"
                
            //Send the message
            message.channel.send(finalMessage);
            
        }
        
        /**
        
        Single emoji commands because thats what kerbebot is all about
        
        All of them send the emoji then delete the original message
        
        **/
        else if (command == ">kerbeDance") {
            message.channel.send("<a:kerbeDance:409790450799476737>");
            message.delete();
        }
        
    }
    catch(e) {
        console.log(e);
    }
    
});

//Kerbebot logs into discord
client.login(info.token);