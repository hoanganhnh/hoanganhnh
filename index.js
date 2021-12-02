const fs = require("fs");

const icons = ['👋', '🤚', '🖐', '✋', '👉', '👐', '🤙', '🤟', '🧑', '🌏', '🔥', '🌈', '🌼', '⛅️', '😑'];
const icon = icons[Math.floor(Math.random() * icons.length)];
const mainHeading = `## ${icon} Hi, I'm [@hoanganhnh](https://github.com/hoanganhnh)`

const mainContent = fs.readFileSync('./root/main.md', 'utf8');

const generate = () => {
    console.log(mainContent);
    fs.writeFileSync("README.md", `${mainHeading}\n\n${mainContent}\n\n`);
};

generate();
