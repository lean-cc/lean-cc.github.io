document.getElementById('loading').style.display = 'block';

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

const botUserAgents = [
    'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider',
    'YandexBot', 'Sogou', 'Exabot', 'facebot', 'ia_archiver',
    'MJ12bot', 'AhrefsBot', 'SEMrushBot', 'DotBot',
    'GrapeshotCrawler', 'MegaIndex', 'Wotbox', 'bot', 'Bot'
];

function isBot(userAgent) {
    for (let bot of botUserAgents) {
        if (userAgent.includes(bot)) {
            return true;
        }
    }
    return false;
}

window.onload = function () {
    const userAgent = navigator.userAgent;
    if (isBot(userAgent)) {
        document.body.innerHTML = 'Access Denied: Bots are not allowed';
    } else {
        setTimeout(() => {
            var main = document.querySelector('main');
            var loadingDiv = document.getElementById('loading');
            loadingDiv.style.opacity = "0";

            setTimeout(function () {
                loadingDiv.style.display = 'none';
                main.style.display = 'flex';
                main.style.opacity = "1";
            }, 500);
        }, 1500);
    }
}