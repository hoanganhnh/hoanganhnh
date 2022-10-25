const fs = require("fs");
const axios = require("axios");

const icons = [
  "👋",
  "🤚",
  "🖐",
  "✋",
  "👉",
  "👐",
  "🤙",
  "🤟",
  "🧑",
  "🌏",
  "🔥",
  "🌈",
  "🌼",
  "⛅️",
  "😑",
];
const icon = icons[Math.floor(Math.random() * icons.length)];
const mainHeading = `<p align="center"><img src="https://img.icons8.com/color/48/000000/vietnam-circular.png"/></p> \n## ${icon} Hi, I'm [@hoanganhnh](https://github.com/hoanganhnh)`;

const mainContent = fs.readFileSync("./root/main.md", "utf8");

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod?language=en");
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    console.log("new quote", `"${quote}"`);

    return {
      quote,
      author,
    };
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  fs.writeFileSync(
    "README.md",
    `${mainHeading}\n\n${mainContent}\n\n_**${quote}**_\n\n${author}`
  );
};

generate();
