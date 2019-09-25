Termpage.init(document.getElementById('term'), (command) => {
    command = command.toLowerCase().trim();
    commands = ["boot", "help", "version", "clear", "source", "glitch"];
    switch(command) {
        case "boot":
            return "terminaljs ready. Type 'help'.";
        break;
        case "help":
            commands.shift();
            return {text: "Available commands: " + commands.join(", "), commands: commands};
        break;
        case "version":
            return "1.1";
        break;
        case "clear":
            document.location.reload();
            return "";
        break;
        case "source":
            return Termpage.replace("github.com/llagerlof/terminaljs", {"github.com/llagerlof/terminaljs": Termpage.link("http://www.github.com/llagerlof/terminaljs")});
        break;
        case "glitch":
            return Termpage.replace("Glitch is a tool for coding, collaborate and publish web applications. terminaljs is hosted on Glitch.", {"Glitch": Termpage.link("https://glitch.com/create"), "terminaljs": Termpage.link("https://www.github.com/llagerlof/terminaljs")});
        break;

        default:
            return "Command '" + command + "' unknown.";
    }
},
{
    prompt: '>',
    initialCommand: 'boot'
});
