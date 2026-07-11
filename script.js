// ඔයාගේ WhatsApp Bot Pair ලින්ක්ස් ටික මෙතනට දාන්න
const botLinks = {
    bot1: "https://thuhi-md-pro-sec8.onrender.com/",
    bot2: "https://your-bot2-pair-link.com", // 2 වෙනි බොට් එකේ ලින්ක් එක මෙතනට දාන්න
    bot3: "https://your-bot3-pair-link.com", // 3 වෙනි බොට් එකේ ලින්ක් එක මෙතනට දාන්න
    bot4: "https://your-bot4-pair-link.com"  // 4 වෙනි බොට් එකේ ලින්ක් එක මෙතනට දාන්න
};

// බටන් එක ක්ලික් කරාම ලින්ක් එක අලුත් ටැබ් එකක ඕපන් වෙන ෆන්ක්ෂන් එක
function openPairLink(botKey) {
    const link = botLinks[botKey];
    if (link && link !== "") {
        window.open(link, '_blank');
    } else {
        alert("කරුණාකර මුලින්ම ලින්ක් එක ඇතුළත් කරන්න!");
    }
}