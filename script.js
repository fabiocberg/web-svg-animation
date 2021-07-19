function animatePath(path, strokeColor, 
        strokeWidth, transtionTime) {
        
    path.style.fill = 'none';
    path.style.stroke = strokeColor;
    path.style.strokeWidth = strokeWidth;
    var length = path.getTotalLength();
    // console.log(length);
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition = 
    `stroke-dashoffset ${transtionTime}s ease-in-out`;
    // Go!
    path.style.strokeDashoffset = length * 0.67;          
}

const svg = document.getElementById('svg');
const width = Number(svg.getAttribute('width'));
const height = Number(svg.getAttribute('height'));

const strokeWidth = 6;
svg.setAttribute('viewBox', [
    -strokeWidth,
    -strokeWidth,
    width + strokeWidth * 2,
    height + strokeWidth * 2
].join(' '))

const paths = svg.getElementsByTagName('path');

for (const path of paths) {
    animatePath(path, 'black', strokeWidth, 8);
}