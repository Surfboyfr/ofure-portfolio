// Modal Image Array (For the modal gallery)
const modalImages = [
   "./img/IMG-20250404-WA0017.jpg",
   "./img/IMG-20250404-WA0002.jpg",
   "./img/IMG-20250404-WA0003.jpg",
   "./img/IMG-20250404-WA0005.jpg",
   "./img/IMG-20250404-WA0008.jpg", 
   "./img/IMG-20250404-WA0007.jpg",
   "./img/IMG-20250404-WA0012.jpg",
];

// Variable to keep track of the current image index in the modal
let currentImageIndex = 0;

// Open modal and display clicked image
function openModal(imgElement) {
   // Find the index of the clicked image in the array
   currentImageIndex = modalImages.indexOf(imgElement.src);
   
   // Set the clicked image in the modal
   document.getElementById("modalImage").src = imgElement.src;

   // Show the modal
   document.getElementById("imageModal").style.display = "flex";
}

// Close modal
function closeModal() {
   document.getElementById("imageModal").style.display = "none";
}

// Change image based on the direction (left or right)
function changeImage(direction) {
   // Update the current image index based on the direction
   currentImageIndex += direction;

   // Loop the images if the index goes out of bounds
   if (currentImageIndex < 0) {
       currentImageIndex = modalImages.length - 1; // Go to the last image
   } else if (currentImageIndex >= modalImages.length) {
       currentImageIndex = 0; // Go to the first image
   }

   // Set the new image in the modal
   document.getElementById("modalImage").src = modalImages[currentImageIndex];
}

// Close the modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
   // Only close if the background is clicked (not the image or buttons)
   if (event.target === this) {
       closeModal();
   }
});



// Function to load images into the gallery based on selected category
// function loadImages(category) {
//    const imageGallery = document.getElementById('image-gallery');
//    const artsImgSection = document.querySelector('.arts-img');
   
//    // Clear the current images in the gallery using innerHTML
//    // imageGallery.innerHTML = ''; 
   
//    // Get the images for the selected category
//    // const categoryImages = galleryImages[category];

//    // Hide the .arts-img section when a filter is applied
//    artsImgSection.style.display = 'none'; 

//    // Append the new images to the gallery
//    categoryImages.forEach(src => {
//        const img = document.createElement('img');
//        img.src = src;
//        img.alt = 'Image';
       
//      //  Add event listener to open modal when clicked (optional)
//        img.addEventListener('click', function() {
//            openModal(this); // Open the modal and display the clicked image (optional)
//        });

//        imageGallery.appendChild(img);
//    });
// }

 // Event listener for filter buttons
//  document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const category = this.getAttribute('data-category');
//         loadImages(category); // Load the appropriate images based on the selected category
//     });
//  });

// // Load all images by default on page load
// loadImages('all');

// If the 'ALL' filter is clicked, show the .arts-img section again
// document.querySelector('[data-category="all"]').addEventListener('click', function() {
//    const artsImgSection = document.querySelector('.arts-img');
//    artsImgSection.style.display = 'block'; // Show the original images section
// });


// const hamBurger = document.getElementById("hamburger").addEventListener("click", function() {
//   console.log('clicked')

//    // console.log(aside)

// });
const openSideBar = (e)=>{
   document.querySelector(".parent").addEventListener('click', ()=>{
      const sidebar = document.querySelector('.sidebar')
      const closeBtn = document.querySelector('.closeside');

      // sidebar.style.display = 'block'
      sidebar.classList.add('active');
      closeBtn.style.display = 'block';
      console.log('clicked');

     
      closeBtn.addEventListener('click', ()=>{
         sidebar.classList.remove('active');
         console.log('clicked it')
         // sidebar.style.display = 'none';
         closeBtn.style.display='none';
      })
   })

}
openSideBar();


// document.getElementById('ul').addEventListener('click', function(event) { 
//    const sidebar = document.querySelector('.sidebar')
//    sidebar.classList.remove= 'active'
//  });