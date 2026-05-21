const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-menu a");
const lofiPlayer = document.querySelector(".lofi-player");
const playToggle = document.querySelector(".play-toggle");
const volumeSlider = document.querySelector(".volume-slider");
const contactForm = document.querySelector(".contact-form");
const languageButtons = document.querySelectorAll(".language-option");
const clockElement = document.querySelector("[data-clock]");
const dateDayElement = document.querySelector("[data-date-day]");
const dateWeekdayElement = document.querySelector("[data-date-weekday]");
const dateFullElement = document.querySelector("[data-date-full]");
const monitorFace = document.querySelector(".monitor-screen span");

document.documentElement.classList.add("js");

const translations = {
  en: {
    skipLink: "Skip to main content",
    navHome: "Home",
    navSkills: "Skills",
    navNotes: "Notes",
    navCertificates: "Certificates",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    resume: "Download Resume",
    heroPill: "Developer Student / Cybersecurity Explorer",
    heroTitle: "Building useful software with a cozy study-room mindset.",
    heroDescription:
      "I am learning development and cybersecurity through practical projects, notes, labs, automation, and daily study routines.",
    viewWork: "View my work",
    openNotes: "Open study notes",
    studyStatus: "Currently studying: Java / Python / Web Security / Linux",
    terminalText: "Focus, build, document, repeat.",
    terminalButton: "Let's build",
    weather: "FOCUS",
    weatherSmall: "study weather",
    quoteTitle: "If future me forgets",
    quoteText: "write it down today.",
    nowBrewing: "Now brewing",
    playerTitle: "Generated Lofi Loop",
    playerSub: "soft keys / vinyl noise / simple beat",
    volumeLabel: "Volume",
    skillsEyebrow: "Skills",
    skillsTitle: "Always learning. Always building.",
    development: "Development",
    cybersecurity: "Cybersecurity",
    languages: "Languages",
    softSkills: "Soft Skills",
    notesEyebrow: "Study Shelf",
    notesTitle: "Notes I can reuse and share.",
    notesIntro:
      "A simple place for commands, checklists, study reminders, and small files I use when learning.",
    gitTipsTitle: "Git commands I always forget",
    gitTipsText: "Useful Git reminders for branches, commits, history, and quick recovery.",
    linuxTitle: "Linux basics checklist",
    linuxText: "Permissions, navigation, processes, logs, and terminal commands for practice.",
    securityTitle: "Web security reminders",
    securityText: "Short notes for authentication, input validation, OWASP basics, and testing flow.",
    openFile: "Open file",
    openFile2: "Open file",
    comingSoon: "Coming soon",
    certEyebrow: "Certificates",
    certTitle: "Collecting knowledge. Earning trust.",
    inProgress: "In progress",
    completed2024: "Completed / 2024",
    completed2024b: "Completed / 2024",
    experienceEyebrow: "Experience",
    experienceTitle: "Building experience. Creating impact.",
    datePresent: "Mar 2026 / Present",
    expOne:
      "Help customers identify technical needs, understand device protection, account setup, connectivity options, and device-related issues.",
    expTwo:
      "Assisted customers with computers, software, protection plans, device setup, and troubleshooting while explaining technical concepts to non-technical users.",
    expThree:
      "Delivered end-user support for hardware, software, and network issues. Supported basic cybersecurity measures and created technical documentation for users.",
    projectsEyebrow: "Projects",
    projectsTitle: "Ideas to code. Code to impact.",
    featuredRepo: "Featured repo",
    watchoutText:
      "A JavaScript project focused on building practical browser-based functionality and improving frontend problem solving.",
    discordBotText:
      "A Java bot project for organizing technical notes and study entries through Discord-based workflows.",
    convertifyText:
      "A responsive conversion app for values across categories like temperature, time, currency, and data.",
    flashcardsText:
      "A spaced repetition learning system built with Java and Spring Boot to help retain vocabulary and knowledge.",
    portfolioText:
      "My personal portfolio repository, where I iterate on design, frontend structure, localization, and presentation.",
    stockText:
      "A console-based stock management system for practicing Java syntax, arrays, loops, and control flow.",
    viewOnGithub: "View on GitHub",
    viewOnGithub2: "View on GitHub",
    viewOnGithub3: "View on GitHub",
    viewOnGithub4: "View on GitHub",
    viewOnGithub5: "View on GitHub",
    viewOnGithub6: "View on GitHub",
    contactEyebrow: "Contact",
    contactTitle: "Good coffee. Good music. Good focus.",
    contactText:
      "I am open to opportunities, collaborations, and projects involving development, automation, security studies, technical support, and practical learning.",
    nameLabel: "Name",
    messageLabel: "Message",
    sendMessage: "Send message",
    sendingMessage: "Sending...",
    formSuccess: "Message sent. Thanks for reaching out.",
    formError: "Something went wrong. Please try again or email me directly.",
    footer: "&copy; 2026 Joao Aguiar. Built with HTML, CSS and JavaScript.",
  },
  pt: {
    skipLink: "Pular para o conteudo principal",
    navHome: "Inicio",
    navSkills: "Skills",
    navNotes: "Notas",
    navCertificates: "Certificados",
    navExperience: "Experiencia",
    navProjects: "Projetos",
    navContact: "Contato",
    resume: "Baixar curriculo",
    heroPill: "Estudante de desenvolvimento / Explorador de cybersecurity",
    heroTitle: "Construindo software util com mentalidade de sala de estudos.",
    heroDescription:
      "Estou aprendendo desenvolvimento e cybersecurity com projetos praticos, notas, labs, automacao e rotina diaria de estudos.",
    viewWork: "Ver projetos",
    openNotes: "Abrir notas",
    studyStatus: "Estudando agora: Java / Python / Web Security / Linux",
    terminalText: "Focar, construir, documentar, repetir.",
    terminalButton: "Vamos construir",
    weather: "FOCO",
    weatherSmall: "clima de estudo",
    quoteTitle: "Se o eu do futuro esquecer",
    quoteText: "escreva hoje.",
    nowBrewing: "Preparando foco",
    playerTitle: "Lofi gerado no navegador",
    playerSub: "keys suaves / ruido vinil / beat simples",
    volumeLabel: "Volume",
    skillsEyebrow: "Skills",
    skillsTitle: "Sempre aprendendo. Sempre construindo.",
    development: "Desenvolvimento",
    cybersecurity: "Cybersecurity",
    languages: "Idiomas",
    softSkills: "Soft Skills",
    notesEyebrow: "Study Shelf",
    notesTitle: "Notas para reutilizar e compartilhar.",
    notesIntro:
      "Um espaco simples para comandos, checklists, lembretes de estudo e pequenos arquivos que uso enquanto aprendo.",
    gitTipsTitle: "Comandos Git que sempre esqueco",
    gitTipsText: "Lembretes uteis de Git para branches, commits, historico e recuperacao rapida.",
    linuxTitle: "Checklist de Linux basics",
    linuxText: "Permissoes, navegacao, processos, logs e comandos de terminal para praticar.",
    securityTitle: "Lembretes de Web Security",
    securityText: "Notas curtas sobre autenticacao, validacao de entrada, OWASP basics e fluxo de testes.",
    openFile: "Abrir arquivo",
    openFile2: "Abrir arquivo",
    comingSoon: "Em breve",
    certEyebrow: "Certificados",
    certTitle: "Acumulando conhecimento. Construindo confianca.",
    inProgress: "Em andamento",
    completed2024: "Concluido / 2024",
    completed2024b: "Concluido / 2024",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Ganhando experiencia. Criando impacto.",
    datePresent: "Mar 2026 / Presente",
    expOne:
      "Ajudo clientes a identificar necessidades tecnicas, entender protecao de dispositivos, configuracao de contas, conectividade e problemas relacionados a devices.",
    expTwo:
      "Ajudei clientes com computadores, softwares, planos de protecao, configuracao de dispositivos e troubleshooting enquanto explicava conceitos tecnicos para usuarios nao tecnicos.",
    expThree:
      "Prestei suporte a usuarios em hardware, software e redes. Apoiei medidas basicas de cybersecurity e criei documentacao tecnica para usuarios.",
    projectsEyebrow: "Projetos",
    projectsTitle: "Ideias virando codigo. Codigo gerando impacto.",
    featuredRepo: "Repositorio em destaque",
    watchoutText:
      "Projeto em JavaScript focado em funcionalidades praticas no navegador e melhoria de resolucao de problemas no frontend.",
    discordBotText:
      "Bot em Java para organizar notas tecnicas e registros de estudo usando fluxos pelo Discord.",
    convertifyText:
      "Aplicacao responsiva para converter valores entre categorias como temperatura, tempo, moeda e dados.",
    flashcardsText:
      "Sistema de aprendizado com repeticao espacada feito com Java e Spring Boot para ajudar a reter vocabulario e conhecimento.",
    portfolioText:
      "Repositorio do meu portfolio pessoal, onde evoluo design, estrutura frontend, localizacao e apresentacao.",
    stockText:
      "Sistema de gerenciamento de estoque no console para praticar sintaxe Java, arrays, loops e fluxo de controle.",
    viewOnGithub: "Ver no GitHub",
    viewOnGithub2: "Ver no GitHub",
    viewOnGithub3: "Ver no GitHub",
    viewOnGithub4: "Ver no GitHub",
    viewOnGithub5: "Ver no GitHub",
    viewOnGithub6: "Ver no GitHub",
    contactEyebrow: "Contato",
    contactTitle: "Bom cafe. Boa musica. Bom foco.",
    contactText:
      "Estou aberto a oportunidades, colaboracoes e projetos envolvendo desenvolvimento, automacao, estudos de seguranca, suporte tecnico e aprendizado pratico.",
    nameLabel: "Nome",
    messageLabel: "Mensagem",
    sendMessage: "Enviar mensagem",
    sendingMessage: "Enviando...",
    formSuccess: "Mensagem enviada. Obrigado pelo contato.",
    formError: "Algo deu errado. Tente novamente ou envie um email diretamente.",
    footer: "&copy; 2026 Joao Aguiar. Feito com HTML, CSS e JavaScript.",
  },
};

let audioContext;
let masterGain;
let padGain;
let noiseGain;
let padOscillators = [];
let beatTimer;
let melodyTimer;
let noiseSource;
let isAudioPlaying = false;
let currentLanguage = localStorage.getItem("portfolio-language") || "en";
const faceFrames = [":-)", ":-D", ";-)", "^_^", ":-)"];
let faceFrameIndex = 0;

function updateDateTime() {
  const now = new Date();
  const locale = currentLanguage === "pt" ? "pt-BR" : "en-US";

  if (clockElement) {
    clockElement.textContent = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);
  }

  if (dateDayElement) {
    dateDayElement.textContent = new Intl.DateTimeFormat(locale, {
      day: "2-digit",
    }).format(now);
  }

  if (dateWeekdayElement) {
    dateWeekdayElement.textContent = new Intl.DateTimeFormat(locale, {
      weekday: "long",
    }).format(now);
  }

  if (dateFullElement) {
    dateFullElement.textContent = new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(now);
  }
}

function animateFace() {
  if (!monitorFace) return;
  faceFrameIndex = (faceFrameIndex + 1) % faceFrames.length;
  monitorFace.textContent = faceFrames[faceFrameIndex];
}

function createNoiseBuffer(context) {
  const bufferSize = context.sampleRate * 2;
  const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const output = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i += 1) {
    output[i] = (Math.random() * 2 - 1) * 0.18;
  }

  return buffer;
}

function playPercussion(frequency, duration, gainValue) {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, frequency * 0.45), now + duration);
  gain.gain.setValueAtTime(gainValue, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function playHat() {
  const now = audioContext.currentTime;
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = createNoiseBuffer(audioContext);
  filter.type = "highpass";
  filter.frequency.value = 4200;
  gain.gain.setValueAtTime(0.035, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  source.start(now);
  source.stop(now + 0.08);
}

function playMelody() {
  const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 392.0, 329.63, 293.66];
  const note = notes[Math.floor(Math.random() * notes.length)];
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(note, now);
  filter.type = "lowpass";
  filter.frequency.value = 1200;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.055, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  oscillator.start(now);
  oscillator.stop(now + 0.9);
}

function startLofiAudio() {
  audioContext = new AudioContext();
  masterGain = audioContext.createGain();
  padGain = audioContext.createGain();
  noiseGain = audioContext.createGain();

  const volume = Number(volumeSlider?.value || 28) / 100;
  masterGain.gain.value = volume * 0.45;
  padGain.gain.value = 0.035;
  noiseGain.gain.value = 0.018;
  masterGain.connect(audioContext.destination);

  padOscillators = [130.81, 196.0, 261.63].map((frequency) => {
    const oscillator = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 600;
    oscillator.connect(filter);
    filter.connect(padGain);
    oscillator.start();
    return oscillator;
  });
  padGain.connect(masterGain);

  noiseSource = audioContext.createBufferSource();
  noiseSource.buffer = createNoiseBuffer(audioContext);
  noiseSource.loop = true;
  const noiseFilter = audioContext.createBiquadFilter();
  noiseFilter.type = "lowpass";
  noiseFilter.frequency.value = 1800;
  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);
  noiseSource.start();

  let step = 0;
  beatTimer = setInterval(() => {
    if (step % 4 === 0) playPercussion(110, 0.22, 0.16);
    if (step % 4 === 2) playPercussion(180, 0.12, 0.065);
    if (step % 2 === 1) playHat();
    step = (step + 1) % 8;
  }, 430);

  melodyTimer = setInterval(playMelody, 1720);
  playMelody();
}

function stopLofiAudio() {
  clearInterval(beatTimer);
  clearInterval(melodyTimer);
  padOscillators.forEach((oscillator) => oscillator.stop());
  padOscillators = [];
  noiseSource?.stop();
  noiseSource = null;
  masterGain?.disconnect();
  masterGain = null;
  padGain = null;
  noiseGain = null;
  audioContext?.close();
  audioContext = null;
}

function setMenuState(isOpen) {
  if (!navbar || !navToggle) return;
  navbar.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navbar.classList.contains("menu-open");
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

playToggle?.addEventListener("click", () => {
  isAudioPlaying = !isAudioPlaying;
  lofiPlayer.classList.toggle("is-playing", isAudioPlaying);

  if (isAudioPlaying) {
    startLofiAudio();
  } else {
    stopLofiAudio();
  }

  playToggle.textContent = isAudioPlaying ? "Pause" : "Play";
  playToggle.setAttribute("aria-pressed", String(isAudioPlaying));
  playToggle.setAttribute(
    "aria-label",
    isAudioPlaying ? "Pause lofi study mode" : "Start lofi study mode"
  );
});

volumeSlider?.addEventListener("input", () => {
  if (!masterGain || !audioContext) return;
  const volume = Number(volumeSlider.value) / 100;
  masterGain.gain.setTargetAtTime(volume * 0.45, audioContext.currentTime, 0.03);
});

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  localStorage.setItem("portfolio-language", language);
  updateDateTime();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const observerOptions = {
  threshold: 0.18,
  rootMargin: "0px 0px -80px 0px",
};

if ("IntersectionObserver" in window) {
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((element) => {
    fadeObserver.observe(element);
  });
} else {
  document.querySelectorAll(".fade-in").forEach((element) => {
    element.classList.add("visible");
  });
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const dictionary = translations[currentLanguage] || translations.en;
  const statusElement = contactForm.querySelector(".form-status");
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);

  statusElement.textContent = "";
  statusElement.classList.remove("is-success", "is-error");
  submitButton.disabled = true;
  submitButton.textContent = dictionary.sendingMessage;

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Formspree submission failed");
    }

    statusElement.textContent = dictionary.formSuccess;
    statusElement.classList.add("is-success");
    contactForm.reset();
  } catch (error) {
    statusElement.textContent = dictionary.formError;
    statusElement.classList.add("is-error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = dictionary.sendMessage;
  }
});

applyLanguage(currentLanguage);
updateDateTime();
setInterval(updateDateTime, 1000);
setInterval(animateFace, 1200);
