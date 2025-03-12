document.addEventListener("DOMContentLoaded", function () {
  // Fade-in animation for about image
  const aboutImage = document.querySelector('.about__image');
  aboutImage.style.opacity = 0;
  setTimeout(() => {
    aboutImage.style.transition = 'opacity 1s ease-in-out';
    aboutImage.style.opacity = 1;
  }, 500);

  // Hover effect for about image
  aboutImage.addEventListener('mouseenter', () => {
    aboutImage.style.transform = 'scale(1.1)';
    aboutImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  aboutImage.addEventListener('mouseleave', () => {
    aboutImage.style.transform = 'scale(1)';
    aboutImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });

  // Fade-in animation for education items
  const educationItems = document.querySelectorAll('.education__item');
  educationItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }, 500 + index * 200); // Staggered delay for each item
  });

  // Flip animation for experience cards on scroll
  const experienceSection = document.getElementById('experience');
  const flipCards = document.querySelectorAll('.flip-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('flip');
          }, index * 300); // Staggered delay for each card
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  observer.observe(experienceSection);

  // Reset flip animation after it ends
  flipCards.forEach((card) => {
    card.addEventListener('animationend', () => {
      card.classList.remove('flip');
    });
  });

  // Pie Chart Animation
  const chartSlices = document.querySelectorAll(".chart-slice");
  let totalPercent = 0;

  chartSlices.forEach((slice, index) => {
    const percent = parseFloat(slice.getAttribute("data-percent"));
    slice.style.setProperty("--percent", `${totalPercent + percent}%`);
    slice.style.setProperty("--rotate", `${totalPercent * 3.6}deg`);
    slice.style.setProperty("--delay", `${index * 0.2}s`); // Add delay for each slice
    totalPercent += percent;
  });

  // Modal functionality for project images
  const projectImages = document.querySelectorAll(".project__image img");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  const modalContent = document.createElement("img");
  modalContent.classList.add("modal-content");
  modal.appendChild(modalContent);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  modal.appendChild(closeBtn);

  // Function to open the modal
  function openModal(imgSrc) {
    modal.style.display = "block";
    modalContent.src = imgSrc;
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Add click event listeners to project images
  projectImages.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src);
    });
  });

  // Close modal when clicking on the close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Modal functionality for certificates
  const certificateImages = document.querySelectorAll(".certification__page img");

  // Add click event listeners to certificate images
  certificateImages.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src);
    });
  });
// Certification Page Flip Functionality
let currentPage = 0;
const pages = document.querySelectorAll(".certification__page");

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.style.transform = "rotateY(0deg)";
    } else if (i === index + 1) {
      page.style.transform = "rotateY(180deg)";
    } else {
      page.style.transform = "rotateY(180deg)";
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 2) {
    currentPage += 2;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage -= 2;
    showPage(currentPage);
  }
}

// Initialize the first page
showPage(currentPage);
  
  // Initialize the first page
  showPage(currentPage);
});
document.addEventListener("DOMContentLoaded", function () {
  // ... (other existing code)

  // Certification Page Flip Functionality
  let currentPage = 0;
  const pages = document.querySelectorAll(".certification__page");

  function showPage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.style.transform = "rotateY(0deg)";
        page.style.zIndex = 1;
      } else if (i === index + 1) {
        page.style.transform = "rotateY(180deg)";
        page.style.zIndex = 0;
      } else {
        page.style.transform = "rotateY(180deg)";
        page.style.zIndex = -1;
      }
    });
  }

  function nextPage() {
    console.log("Next Page Clicked", currentPage);
    if (currentPage < pages.length - 2) {
      currentPage += 2;
      showPage(currentPage);
    }
  }

  function prevPage() {
    console.log("Previous Page Clicked", currentPage);
    if (currentPage > 0) {
      currentPage -= 2;
      showPage(currentPage);
    }
  }

  // Initialize the first page
  showPage(currentPage);

  // Add event listeners to the buttons
  document.querySelector(".certification__next").addEventListener("click", nextPage);
  document.querySelector(".certification__prev").addEventListener("click", prevPage);
});
function nextPage() {
  console.log("Next Page Clicked", currentPage);
  if (currentPage < pages.length - 2) {
    currentPage += 2;
    showPage(currentPage);
  }
}

function prevPage() {
  console.log("Previous Page Clicked", currentPage);
  if (currentPage > 0) {
    currentPage -= 2;
    showPage(currentPage);
  }
}