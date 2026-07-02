const invitationCover = document.getElementById("invitationCover");
const openInvitationBtn = document.getElementById("openInvitationBtn");
const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
const languageToggle = document.getElementById("languageToggle");

const translations = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    title: "دعوة فرح يوسف وهند",
    coverAria: "اضغط لفتح الدعوة",
    musicAria: "تشغيل أو إيقاف الموسيقى",
    menuAria: "فتح القائمة",
    musicPlay: "♫ تشغيل الموسيقى",
    musicPause: "♫ إيقاف الموسيقى",
    coverKicker: "دعوة زفاف",
    coupleNameHtml: "يوسف <span>و</span> هند",
    coverDate: "الثلاثاء 1 / 12 / 2026",
    coverTime: "الساعة 5:00 مساءً",
    place: "فندق InterContinental",
    openInvite: "اضغط لفتح الدعوة",
    coverSmall: "نتشرف بحضوركم ومشاركتكم فرحتنا",
    logo: "دعوة فرح",
    navDetails: "التفاصيل",
    navCountdown: "العد التنازلي",
    navLocation: "الموقع",
    navRsvp: "تأكيد الحضور",
    navContact: "التواصل والاستفسار",
    heroSubtitle: "بكل الحب والسرور",
    heroText: "يتشرفان بدعوتكم لمشاركتهما فرحة العمر وحضور حفل الزفاف",
    dateBadge: "الثلاثاء 1 / 12 / 2026 — الساعة 5:00 مساءً",
    detailsBtn: "تفاصيل الدعوة",
    contactBtn: "التواصل والاستفسار",
    verse: "ومن آياته أن خلق لكم من أنفسكم أزواجاً لتسكنوا إليها وجعل بينكم مودة ورحمة",
    honorTitle: "يتشرف",
    groomFamily: "عائلة العريس",
    groomName: "يوسف",
    brideFamily: "عائلة العروس",
    brideName: "هند",
    formalText: "بكل الحب والسرور، ندعوكم لمشاركتنا الاحتفال بزفاف",
    formalSubtext: "يسرّنا أن تشاركونا فرحتنا وأن تكونوا جزءاً من أجمل أيام حياتنا",
    formalDate: "الثلاثاء، 1-12-2026",
    formalTime: "الساعة 5:00 مساءً",
    detailsLabel: "Wedding Details",
    detailsTitle: "تفاصيل الحفل",
    dateTitle: "التاريخ",
    dateValue: "الثلاثاء، 1 ديسمبر 2026",
    timeTitle: "الوقت",
    timeValue: "الساعة 5:00 مساءً",
    occasionTitle: "المناسبة",
    occasionValue: "حفل زفاف يوسف وهند",
    placeTitle: "المكان",
    saveDate: "Save The Date",
    countdownTitle: "نعدّ الأيام ليومنا",
    daysLabel: "يوم",
    hoursLabel: "ساعة",
    minutesLabel: "دقيقة",
    secondsLabel: "ثانية",
    locationLabel: "Location",
    locationText: "يمكنكم فتح الموقع مباشرة عبر خرائط Google للوصول بسهولة إلى مكان الحفل.",
    mapBtn: "فتح الموقع على الخريطة",
    rsvpLabel: "RSVP",
    rsvpTitle: "تأكيد الحضور",
    guestNamePlaceholder: "الاسم الكريم",
    guestCountPlaceholder: "عدد الحضور",
    guestMessagePlaceholder: "رسالة اختيارية",
    rsvpSubmit: "إرسال تأكيد الحضور عبر WhatsApp",
    contactLabel: "Contact & Inquiry",
    contactTitle: "التواصل والاستفسار",
    contactText: "لأي استفسار بخصوص الدعوة، موعد الحفل، أو موقع فندق InterContinental، يمكنكم التواصل مباشرة عبر الاتصال أو WhatsApp.",
    phoneSmall: "رقم الاستفسار والتواصل",
    whatsappWelcome: "نرحب باستفساراتكم",
    callBtn: "اتصال مباشر",
    whatsappBtn: "إرسال WhatsApp",
    footerText: "نتشرف بحضوركم ومشاركتكم فرحتنا",
    footerDetails: "يوسف وهند — 1 / 12 / 2026 — الساعة 5:00 مساءً",
    inquiryMessage: "مرحباً، لدي استفسار بخصوص دعوة فرح يوسف وهند.",
    rsvpMessageTitle: "تأكيد حضور دعوة الفرح",
    rsvpName: "الاسم",
    rsvpCount: "عدد الحضور",
    rsvpMsg: "الرسالة",
    noMessage: "لا يوجد"
  },
  en: {
    dir: "ltr",
    langButton: "عربي",
    title: "Yousef & Hind Wedding Invitation",
    coverAria: "Press to open the invitation",
    musicAria: "Play or pause music",
    menuAria: "Open menu",
    musicPlay: "♫ Play music",
    musicPause: "♫ Pause music",
    coverKicker: "Wedding Invitation",
    coupleNameHtml: "Yousef <span>&</span> Hind",
    coverDate: "Tuesday, December 1, 2026",
    coverTime: "5:00 PM",
    place: "InterContinental Hotel",
    openInvite: "Open Invitation",
    coverSmall: "We are honored to have you join our celebration",
    logo: "Wedding Invitation",
    navDetails: "Details",
    navCountdown: "Countdown",
    navLocation: "Location",
    navRsvp: "RSVP",
    navContact: "Contact & Inquiry",
    heroSubtitle: "With love and joy",
    heroText: "Yousef and Hind are honored to invite you to share their joy and attend their wedding celebration.",
    dateBadge: "Tuesday, December 1, 2026 — 5:00 PM",
    detailsBtn: "Invitation Details",
    contactBtn: "Contact & Inquiry",
    verse: "And among His signs is that He created for you spouses from among yourselves, so that you may find tranquility in them, and He placed between you affection and mercy.",
    honorTitle: "Cordially invite you",
    groomFamily: "Groom's Family",
    groomName: "Yousef",
    brideFamily: "Bride's Family",
    brideName: "Hind",
    formalText: "With love and joy, we invite you to celebrate the wedding of",
    formalSubtext: "We would be delighted to have you share our happiness and be part of this beautiful day.",
    formalDate: "Tuesday, 1-12-2026",
    formalTime: "5:00 PM",
    detailsLabel: "Wedding Details",
    detailsTitle: "Event Details",
    dateTitle: "Date",
    dateValue: "Tuesday, December 1, 2026",
    timeTitle: "Time",
    timeValue: "5:00 PM",
    occasionTitle: "Occasion",
    occasionValue: "Yousef & Hind Wedding Celebration",
    placeTitle: "Venue",
    saveDate: "Save The Date",
    countdownTitle: "Counting the days to our day",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    locationLabel: "Location",
    locationText: "You can open the venue location directly on Google Maps for easy directions.",
    mapBtn: "Open Location on Map",
    rsvpLabel: "RSVP",
    rsvpTitle: "Confirm Attendance",
    guestNamePlaceholder: "Your name",
    guestCountPlaceholder: "Number of guests",
    guestMessagePlaceholder: "Optional message",
    rsvpSubmit: "Send RSVP via WhatsApp",
    contactLabel: "Contact & Inquiry",
    contactTitle: "Contact & Inquiry",
    contactText: "For any inquiries about the invitation, wedding time, or InterContinental Hotel location, you can contact us directly by phone or WhatsApp.",
    phoneSmall: "Contact number",
    whatsappWelcome: "We welcome your inquiries",
    callBtn: "Call Now",
    whatsappBtn: "Send WhatsApp",
    footerText: "We are honored to have you join our celebration",
    footerDetails: "Yousef & Hind — 1 / 12 / 2026 — 5:00 PM",
    inquiryMessage: "Hello, I have an inquiry about Yousef and Hind's wedding invitation.",
    rsvpMessageTitle: "Wedding RSVP Confirmation",
    rsvpName: "Name",
    rsvpCount: "Number of guests",
    rsvpMsg: "Message",
    noMessage: "No message"
  }
};

let currentLanguage = localStorage.getItem("weddingLanguage") || "ar";
let isMusicPlaying = false;

function t(key) {
  return translations[currentLanguage][key] || translations.ar[key] || key;
}

function setMusicButton(isPlaying) {
  isMusicPlaying = isPlaying;
  if (!musicToggle) return;
  musicToggle.textContent = isPlaying ? t("musicPause") : t("musicPlay");
  musicToggle.classList.toggle("paused", !isPlaying);
}

function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("weddingLanguage", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = translations[lang].dir;
  document.title = t("title");

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  if (languageToggle) {
    languageToggle.textContent = t("langButton");
  }

  setMusicButton(isMusicPlaying && weddingMusic && !weddingMusic.paused);
  updateContactLinks();
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

if (musicToggle) {
  musicToggle.addEventListener("click", event => {
    event.stopPropagation();
    toggleMusic();
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", event => {
    event.stopPropagation();
    applyLanguage(currentLanguage === "ar" ? "en" : "ar");
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

function updateContactLinks() {
  if (phoneLink && callBtn && whatsappBtn) {
    phoneLink.textContent = displayContactNumber;
    phoneLink.href = `tel:+${contactNumber}`;
    callBtn.href = `tel:+${contactNumber}`;
    whatsappBtn.href = `https://wa.me/${contactNumber}?text=${encodeURIComponent(t("inquiryMessage"))}`;
  }
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

    const text = `${t("rsvpMessageTitle")}\n\n${t("rsvpName")}: ${name}\n${t("rsvpCount")}: ${count}\n${t("rsvpMsg")}: ${message || t("noMessage")}`;

    window.open(`https://wa.me/${contactNumber}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

applyLanguage(currentLanguage);
