function updateTime() {
    const clockElement = document.getElementById('liveClock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        clockElement.innerText = timeString + " WIB";
    }
}
setInterval(updateTime, 1000);
updateTime();


const observerOptions = {
    threshold: 0.1
}; 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.spirit-card, .apresiasi').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});
  
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    const duration = Math.random() * 5 + 3 + 's';
    petal.style.animationDuration = duration;
    
    petal.style.opacity = Math.random() * 0.5 + 0.2;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, parseFloat(duration) * 1000);
}

setInterval(createPetal, 300);