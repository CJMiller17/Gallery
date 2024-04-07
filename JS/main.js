const displayedImage = document.querySelector('.displayed-img'); 
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const picArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const altText =
{
    'pic1.jpg': "Close up of a human eye",
    'pic2.jpg': "A obscure image of wavy brown, perhaps a rock formation",
    'pic3.jpg': "White and purple pansies",
    'pic4.jpg': "Egyptian painting with three figures. One with a dog head",
    'pic5.jpg': "Picture of a brown butterfly sitting on an elephant ear leaf"
};
//This creates the thumbnail
for (let i = 0; i < picArray.length; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute("src", "IMG/" + picArray[i]);
    newImage.setAttribute("alt", altText[picArray[i]]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src
        displayedImage.alt = e.target.alt
    })
}
//Creating the button that change text, opacity, and class
btn.addEventListener("click", e => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});