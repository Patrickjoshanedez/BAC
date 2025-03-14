// --- Tab Switching Functionality ---
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// --- Tracking Bar Functionality ---
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var trak = document.getElementById('progress');
var step = document.getElementById('step');

next.addEventListener('click', function(){
  var cls = trak.className.split('-').pop();
  cls > 6 ? cls = 0 : cls++;
  
  step.innerHTML = cls;
  trak.className = 'progress-' + cls;
});

prev.addEventListener('click', function(){
  var cls = trak.className.split('-').pop();
  cls < 1 ? cls = 7 : cls--;
  
  step.innerHTML = cls;
  trak.className = 'progress-' + cls;
});

// --- Quick View Modal Functionality ---
const modal = document.getElementById('quick-view-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalExtra = document.getElementById('modal-extra');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    // Populate modal with product details
    const title = card.getAttribute('data-title');
    const price = card.getAttribute('data-price');
    const extra = card.getAttribute('data-extra');
    const imgSrc = card.querySelector('img').src;
    
    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalExtra.textContent = extra;
    modalImage.src = imgSrc;
    
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});
