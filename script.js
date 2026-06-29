
const invitationCover = document.getElementById("invitationCover");
const openInvitationBtn = document.getElementById("openInvitationBtn");
const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

function setMusicButton(isPlaying) {
  if (!musicToggle) return;
  musicToggle.textContent = isPlaying ? "♫ إيقاف الموسيقى" : "♫ تشغيل الموسيقى";
  musicToggle.classList.toggle("paused", !isPlaying);
}

function playMusic() {
  if (!weddingMusic) return;
  weddingMusic.volume = 0.35;
  weddingMusic.play()
    .then(() => setMusicButton(true))
    .catch(() => setMusicButton(false));
}

function toggleMusic() {
  if (!weddingMusic) return;

  if (weddingMusic.paused) {
    playMusic();
  } else {
    weddingMusic.pause();
    setMusicButton(false);
  }
}

setMusicButton(false);

if (musicToggle) {
  musicToggle.addEventListener("click", event => {
    event.stopPropagation();
    toggleMusic();
  });
}

function openInvitation() {
  if (!invitationCover) return;
  invitationCover.classList.add("hide");
  document.body.classList.remove("cover-active");
  playMusic();

  setTimeout(() => {
    invitationCover.style.display = "none";
  }, 750);
}

if (invitationCover) {
  invitationCover.addEventListener("click", openInvitation);
  invitationCover.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openInvitation();
    }
  });
}

if (openInvitationBtn) {
  openInvitationBtn.addEventListener("click", event => {
    event.stopPropagation();
    openInvitation();
  });
}

// Wedding Invitation Settings
const weddingDate = new Date("2026-12-01T17:00:00").getTime();

// غيّر الرقم هنا إلى رقم الاستفسار والتواصل الحقيقي بصيغة دولية بدون +
// مثال الأردن: 96279XXXXXXX
const contactNumber = "962790000000";
const displayContactNumber = "+962 79 000 0000";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const phoneLink = document.getElementById("phoneLink");
const callBtn = document.getElementById("callBtn");
const whatsappBtn = document.getElementById("whatsappBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (phoneLink && callBtn && whatsappBtn) {
  phoneLink.textContent = displayContactNumber;
  phoneLink.href = `tel:+${contactNumber}`;
  callBtn.href = `tel:+${contactNumber}`;
  whatsappBtn.href = `https://wa.me/${contactNumber}?text=${encodeURIComponent("مرحباً، لدي استفسار بخصوص دعوة فرح أحمد وكريمته.")}`;
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const count = document.getElementById("guestCount").value.trim();
    const message = document.getElementById("guestMessage").value.trim();

    const text = `تأكيد حضور دعوة الفرح\n\nالاسم: ${name}\nعدد الحضور: ${count}\nالرسالة: ${message || "لا يوجد"}`;

    window.open(`https://wa.me/${contactNumber}?text=${encodeURIComponent(text)}`, "_blank");
  });
}
