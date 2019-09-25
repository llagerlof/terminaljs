Termpage.init(document.getElementById('term'), (command) => {
    command = command.toLowerCase().trim();
    commands = ["boot", "help", "version", "source"];
    switch(command) {
        case "boot":
            return "terminaljs ready. Type 'help'.";
        break;
        case "help":
            return {text: "Available commands: " + commands.join(", "), commands: commands};
        break;
        case "version":
            return "1.0";
        break;
        case "source":
            return Termpage.replace("github.com/llagerlof/terminaljs", {"github.com/llagerlof/terminaljs": Termpage.link('http://www.github.com/llagerlof/terminaljs')});
        break;
        default:
            return "Command '" + command + "' unknown.";
    }
},
{
    prompt: '>',
    initialCommand: 'boot'
});
