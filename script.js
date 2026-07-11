// ඔයාගේ WhatsApp Bot Pair ලින්ක්ස් ටික මෙතනට දාන්න
const botLinks = {
    bot1: "https://thuhi-md-pro-sec8.onrender.com/",
    bot2: "https://your-bot2-pair-link.com",
    bot3: "", // 3 වෙනි බොට් එකේ ලින්ක් එක මෙතනට දාන්න
    bot4: "https://queen-neshu-md.onrender.com/",
    bot5: "https://queen-neshu-md.onrender.com/",
};

function openPairLink(botKey) {
    const link = botLinks[botKey];
    if (link && link !== "") {
        window.open(link, '_blank');
    } else {
        alert("කරුණාකර මුලින්ම ලින්ක් එක ඇතුළත් කරන්න!");
    }
}