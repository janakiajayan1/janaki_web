let images = [
    "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];
let current = 0;
function showImage(index) {
    current = index;
    document.getElementById("slide").src = images[current];
}
function next() {
    current = (current + 1) % images.length;
    document.getElementById("slide").src = images[current];
}
function previous() {
    current = (current - 1 + images.length) % images.length;
    document.getElementById("slide").src = images[current];
}
setInterval(next, 3000);