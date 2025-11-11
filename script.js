// ===== Responsive Navigation =====
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// ===== Form Handlers =====
document.getElementById('joinForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.name.value;
  alert(`🎉 Thank you, ${name}! Your membership request has been submitted.`);
  e.target.reset();
});

document.getElementById('messageForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('📨 Message sent successfully! (Demo only)');
  e.target.reset();
});
