const displayedImage = document.querySelector('.displayed-img'); //I need to do something with this. 
                                                                 //Swap it out with the selected image.Event listener stuff
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = [pic1.jpg, pic2.jpg, pic3.jpg, pic4.jpg, pic5.jpg]; //I need to call these to correspond with what's clicked
                                                                                     
/* Declaring the alternative text for each image file */
const altText =
{
    pic1.jpg: "Close up of a human eye",
    pic2.jpg: "A obscure image of wavy brown, perhaps a rock formation",
    pic3.jpg: "White and purple pansies",
    pic4.jpg: "Egyptian painting with three figures. One with a dog head",
    pic5.jpg: "Picture of a brown butterfly sitting on an elephant ear leaf"
};
/* Looping through images */
    //This creates the thumbnail
const newImage = document.createElement('img'); //This creates an element within the last div. I think it creates an <img>
newImage.setAttribute('src', array[]); //This sets the source. Effectively making the image appear
newImage.setAttribute('alt', xxx); // This sets the alt text for the photo
thumbBar.appendChild(newImage); //This adds the photos to the thumb bar.

/* Wiring up the Darken/Lighten button */
//Use btn and overlay

//NOTES//
/*  -Probably going to use for...of loop
    -
*/