let blockCount = 16;
let blocks = [];

function buildGrid() {
    const blockSize = 800 / blockCount;
    const container = document.querySelector('#container');
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => container.removeChild(block));
    for (i=0; i < (blockCount * blockCount); i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block', 'bgWhite');
        newBlock.style.width = blockSize + 'px';
        newBlock.style.height = blockSize + 'px';
        newBlock.style.filter = 'brightness(100%)';
        container.appendChild(newBlock);
    }
    listen();
}

function listen() {
    blocks = document.querySelectorAll('.block');
    const grid = document.querySelector('.grid');
    const reset = document.querySelector('.reset');
    
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.classList.remove('bgWhite');
            block.classList.add('bgBlack');
            const brightness = Number(block.style.filter.slice(11, -2));
        })
    })
    
    reset.addEventListener('click', () => {
        blocks.forEach((block) => {
            block.classList.remove('bgBlack');
            block.classList.add('bgWhite');
        })
    })
    
    grid.addEventListener('click', newGrid);
}

function newGrid() {
    blockCount = Number(window.prompt("New grid row length (max 100)"));
    if ((typeof blockCount != "number") || 
    (blockCount < 1) || (blockCount > 100) ||
    (blockCount % 1 != 0)) {
        alertMsg();
        return;
    }
    buildGrid();
}

function alertMsg() {
    alert("Must be a whole number between 1 and 100");
    listen();
}


buildGrid();


