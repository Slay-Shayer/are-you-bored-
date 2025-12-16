const contentList = [
    { type: 'iframe', url: 'https://sliding.toys/mystic-square/8-puzzle/daily/', label: 'Deep Sea Scroll' },
    { type: 'iframe', url: 'https://paveldogreat.github.io/WebGL-Fluid-Simulation/', label: 'Fluid ASMR' },
    { type: 'iframe', url: 'https://asoftmurmur.com/', label: 'Audio ASMR' },
    { type: 'iframe', url: 'https://tetris-game.io/', label: 'Tetris' },
    { type: 'iframe', url: 'https://spielzeugz.de/html5/liquid-particles/', label: 'Liquid Particles' },
    { type: 'iframe', url: 'https://theuselessweb.com/', label: 'Uselessweb' },
    { type: 'iframe', url: 'https://www.window-swap.com/', label: 'Change window' },
    { type: 'iframe', url: 'https://littlealchemy2.com/', label: 'Little Alchemy' },
    { type: 'iframe', url: 'https://zzz.zoomquilt.org/', label: 'Zoom quit' },
    { type: 'iframe', url: 'https://www.boredbutton.com/', label: 'Bored' },
    { type: 'iframe', url: 'https://hackertyper.net/', label: 'Type like a hacker' },
    { type: 'iframe', url: 'http://slither.com/io', label: 'Play Snake' },
    { type: 'iframe', url: 'https://www.linerider.com/', label: 'Linerider' },
    { type: 'iframe', url: 'https://justflipacoin.com/', label: 'Coin Flip' },
    { type: 'iframe', url: 'https://zty.pe/', label: 'Typing Game' },
    { type: 'iframe', url: 'https://www.airpano.com/', label: 'Air Piano' },
    { type: 'text', label: 'Breathe in... Breathe out...' } // Fallback simple content
];

const boredBtn = document.getElementById('boredBtn');
const contentDisplay = document.getElementById('contentDisplay');
const gameContainer = document.getElementById('gameContainer');
const closeBtn = document.getElementById('closeBtn');

boredBtn.addEventListener('click', () => {
    // 1. Pick random content
    const randomItem = contentList[Math.floor(Math.random() * contentList.length)];
    
    // 2. Show the overlay
    contentDisplay.classList.remove('hidden');
    
    // 3. Render content
    if (randomItem.type === 'iframe') {
        gameContainer.innerHTML = `<iframe src="${randomItem.url}" style="width:85vw; height:80vh; border:none; border-radius:15px; box-shadow: 0 0 20px rgba(0,0,0,0.5);"></iframe>`;
    } else {
        gameContainer.innerHTML = `<h1 style="color:white; font-size: 3rem;">${randomItem.label}</h1>`;
    }
});

closeBtn.addEventListener('click', () => {
    // Hide the overlay again
    contentDisplay.classList.add('hidden');
    // Stop the iframe from playing audio/video in background by clearing it
    gameContainer.innerHTML = '';
});