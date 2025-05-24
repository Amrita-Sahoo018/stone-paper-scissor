let bot1 = document.querySelector("#bot1");
let bot2 = document.querySelector("#bot2");
let bot3 = document.querySelector("#bot3");
let msg = document.querySelector("#msg");

const bots = [bot1, bot2, bot3];


function getRandomBot(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function handleClick(selectedBot) {
    const randomBot = getRandomBot(bots);
    console.log(randomBot.id);

    if (randomBot === selectedBot) {
        alert("Draw!");
    } else if (
        (selectedBot === bot1 && randomBot === bot2) ||
        (selectedBot === bot2 && randomBot === bot3) ||
        (selectedBot === bot3 && randomBot === bot1)
    ) {
        alert("You lose!",randomBot);
    } else {
        alert("You win!");
    }
}

bot1.onclick = () => handleClick(bot1);
bot2.onclick = () => handleClick(bot2);
bot3.onclick = () => handleClick(bot3);
