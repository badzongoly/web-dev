export function randomImage(size) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/${size}/${size}`;
    img.alt = 'Random Image';
    return img;
}


export function generateRandomImageSize() {
    return Math.floor(Math.random() * 300) + 200; // Generate a random size between 200 and 500
}   