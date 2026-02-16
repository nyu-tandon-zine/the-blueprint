// Magazine viewer functionality
const images = [
  '../assets/images/1.jpg',
  '../assets/images/2.jpg',
  '../assets/images/3.jpg',
  '../assets/images/4.jpg',
  '../assets/images/5.jpg',
  '../assets/images/6.jpg',
  '../assets/images/7.jpg',
  '../assets/images/8.jpg'
];

let currentPage = 0; // 0 means pages 1-2, 1 means pages 3-4, etc.

const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const leftPageNum = document.getElementById('leftPageNum');
const rightPageNum = document.getElementById('rightPageNum');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updatePages() {
  const leftIndex = currentPage * 2;
  const rightIndex = currentPage * 2 + 1;

  // Update images
  if (leftIndex < images.length) {
    leftImage.src = images[leftIndex];
  }
  if (rightIndex < images.length) {
    rightImage.src = images[rightIndex];
  }

  // Update page numbers
  leftPageNum.textContent = `Page ${leftIndex + 1}`;
  rightPageNum.textContent = `Page ${rightIndex + 1}`;

  // Disable/enable buttons based on available pages
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = rightIndex >= images.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

nextBtn.addEventListener('click', () => {
  const rightIndex = currentPage * 2 + 1;
  if (rightIndex < images.length - 1) {
    currentPage++;
    updatePages();
  }
});

// Initialize on page load
updatePages();
