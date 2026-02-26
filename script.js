window.onload = () => {
    const win = document.getElementById("window");
    const titlebar = document.getElementById("draggable");
    
    let isDragging = false;
    let offsetX, offsetY;

    titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;

        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;

        titlebar.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        win.style.left = `${x}px`;
        win.style.top = `${y}px`;
        console.log("moving");
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        titlebar.style.cursor = 'grab';
    });
}