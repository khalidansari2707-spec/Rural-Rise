// Rural Rise Shared Script & Multilingual Engine
const translations = {
  en: {
    'brand.title': 'Rural Rise',
    'brand.subtitle': 'Rural Skilling & Livelihood Mission',
    'nav.home': 'Home',
    'nav.programmes': 'Programmes',
    'nav.verify': 'Verify Certificate',
    'nav.helpdesk': 'Helpdesk',
    'nav.dashboard': 'Dashboard',
    'nav.nominations': 'Nominations',
    'nav.participants': 'Participants',
    'nav.timetable': 'Timetable & Hostel',
    'nav.attendance': 'Attendance',
    'nav.certificates': 'Certificates',
    'nav.employers': 'Employers',
    'nav.reports': 'Reports',
    'nav.candidates': 'Find Candidates',
    'nav.sessions': 'My Sessions',
    'nav.courses': 'Courses',
    'nav.path': 'Learning Path',
    'nav.career': 'Career AI',
    'nav.readiness': 'AI Readiness',
    'btn.register': 'Register for Programme',
    'btn.verify': 'Verify a Certificate',
    'btn.audio': 'Audio Guide',
    'btn.listen': 'Listen',
    'btn.speak': 'Speak',
    'btn.save_continue': 'Save & Continue',
    'btn.back': 'Back',
    'btn.approve': 'Approve',
    'btn.reject': 'Reject',
    'btn.approved': 'Approved',
    'btn.rejected': 'Rejected',
    'btn.capture': 'Capture & Verify',
    'tab.home': 'Home',
    'tab.courses': 'Courses',
    'tab.path': 'Learning Path',
    'tab.attendance': 'Attendance',
    'tab.career': 'Career AI',
    'tab.verify': 'Verify',
    'verify.title': 'Verify a Certificate',
    'verify.subtitle': 'Enter the certificate ID or scan the QR code to check authenticity.',
    'verify.label': 'Certificate ID',
    'verify.placeholder': 'e.g. RR-2026-004821',
    'verify.check': 'Verify Authenticity',
    'admin.live_monitoring': 'Live Monitoring',
    'admin.enrolments': 'Total Enrolments',
    'admin.attendance_rate': 'Attendance Rate',
    'employer.title': '128 Certified Candidates Found',
    'trainer.live_session': 'Live Session',
    'course.lessons': 'Course Lessons',
    'attendance.mark': 'Mark Attendance',
    'path.title': 'My Adaptive Learning Path',
    'path.subtitle': 'AI-tailored lessons, skill gap diagnostics, and mentor support',
    'path.simulate': 'Simulate AI Inputs',
    'path.why_this': 'Why this for you?',
    'path.skill_gap': 'Skill Gap Diagnostics',
    'path.career_milestones': 'Tailored Career & Learning Roadmap',
    'path.mentor_title': 'Assigned Master Mentor',
    'path.req_mentor': 'Request Mentoring Session',
    'path.low_data_badge': 'Lite Mode Active (Audio + Notes)',
    'match.why': 'Why this match?',
    'readiness.title': 'AI Implementation Readiness',
    'readiness.gauge': 'Deployment Readiness Score',
    'readiness.actions': 'Real-time Guidance Interventions',
    'readiness.act': 'Act',
    'readiness.done': 'Resolved ✓'
  },
  hi: {
    'brand.title': 'रूरल राइज',
    'brand.subtitle': 'ग्रामीण कौशल्य एवं आजीविका मिशन',
    'nav.home': 'मुख्य पृष्ठ',
    'nav.programmes': 'कार्यक्रम / कोर्स',
    'nav.verify': 'प्रमाणपत्र सत्यापन',
    'nav.helpdesk': 'सहायता केंद्र',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.nominations': 'नामांकन',
    'nav.participants': 'प्रशिक्षणार्थी',
    'nav.timetable': 'समय सारणी व हॉस्टल',
    'nav.attendance': 'उपस्थिति',
    'nav.certificates': 'प्रमाणपत्र',
    'nav.employers': 'नियोक्ता / भर्तीकर्ता',
    'nav.reports': 'रिपोर्ट्स',
    'nav.candidates': 'उम्मीदवार खोजें',
    'nav.sessions': 'मेरे सत्र',
    'nav.courses': 'पाठ्यक्रम',
    'nav.path': 'सीखने का मार्ग',
    'nav.career': 'करिअर एआई',
    'nav.readiness': 'एआई तत्परता',
    'btn.register': 'नया पंजीकरण करें',
    'btn.verify': 'प्रमाणपत्र जांचें',
    'btn.audio': 'ऑडियो निर्देश',
    'btn.listen': 'सुनें',
    'btn.speak': 'बोलें',
    'btn.save_continue': 'सुरक्षित करें और आगे बढ़ें',
    'btn.back': 'वापस जाएं',
    'btn.approve': 'स्वीकृत करें',
    'btn.reject': 'अस्वीकृत करें',
    'btn.approved': 'स्वीकृत',
    'btn.rejected': 'अस्वीकृत',
    'btn.capture': 'फोटो खींचें व सत्यापित करें',
    'tab.home': 'होम',
    'tab.courses': 'कोर्स',
    'tab.path': 'शिक्षण मार्ग',
    'tab.attendance': 'उपस्थिति',
    'tab.career': 'करिअर एआई',
    'tab.verify': 'प्रमाणपत्र',
    'verify.title': 'प्रमाणपत्र की प्रामाणिकता जांचें',
    'verify.subtitle': 'सत्यापन हेतु प्रमाणपत्र संख्या दर्ज करें या क्यूआर कोड स्कैन करें।',
    'verify.label': 'प्रमाणपत्र संख्या (ID)',
    'verify.placeholder': 'उदा. RR-2026-004821',
    'verify.check': 'प्रामाणिकता जांचें',
    'admin.live_monitoring': 'सक्रिय निगरानी',
    'admin.enrolments': 'कुल नामांकन',
    'admin.attendance_rate': 'उपस्थिति दर',
    'employer.title': '१२८ प्रमाणित उम्मीदवार उपलब्ध',
    'trainer.live_session': 'सक्रिय सत्र',
    'course.lessons': 'पाठ्यक्रम सूची',
    'attendance.mark': 'उपस्थिति दर्ज करें',
    'path.title': 'मेरा अनुकूली शिक्षण मार्ग',
    'path.subtitle': 'एआई द्वारा व्यक्तिगत पाठ, कौशल अंतराल विश्लेषण व मेंटर सहायता',
    'path.simulate': 'एआई इनपुट सिमुलेट करें',
    'path.why_this': 'यह आपके लिए क्यों चुना गया?',
    'path.skill_gap': 'कौशल अंतराल विश्लेषण',
    'path.career_milestones': 'व्यक्तिगत करिअर एवं शिक्षण रोडमैप',
    'path.mentor_title': 'नियुक्त मास्टर मेंटर',
    'path.req_mentor': 'मेंटरिंग सत्र का अनुरोध करें',
    'path.low_data_badge': 'लाइट मोड सक्रिय (ऑडियो + नोट्स)',
    'match.why': 'यह मिलान क्यों?',
    'readiness.title': 'एआई कार्यान्वयन तत्परता',
    'readiness.gauge': 'कार्यान्वयन तत्परता स्कोर',
    'readiness.actions': 'वास्तविक समय मार्गदर्शन हस्तक्षेप',
    'readiness.act': 'कार्रवाई करें',
    'readiness.done': 'समाधान पूर्ण ✓'
  },
  mr: {
    'brand.title': 'रुरल राईज',
    'brand.subtitle': 'ग्रामीण कौशल्य व उपजीविका अभियान',
    'nav.home': 'मुख्य पृष्ठ',
    'nav.programmes': 'कार्यक्रम / कोर्सेस',
    'nav.verify': 'प्रमाणपत्र पडताळणी',
    'nav.helpdesk': 'मदत केंद्र',
    'nav.dashboard': 'डॅशबोर्ड',
    'nav.nominations': 'नोंदणी यादी',
    'nav.participants': 'प्रशिक्षणार्थी',
    'nav.timetable': 'वेळापत्रक व वसतिगृह',
    'nav.attendance': 'हजेरी',
    'nav.certificates': 'प्रमाणपत्रे',
    'nav.employers': 'नियोक्ते',
    'nav.reports': 'अहवाल',
    'nav.candidates': 'उमेदवार शोधा',
    'nav.sessions': 'माझी सत्रे',
    'nav.courses': 'अभ्यासक्रम',
    'nav.path': 'शिकण्याचा मार्ग',
    'nav.career': 'करिअर एआय',
    'nav.readiness': 'एआय सज्जता',
    'btn.register': 'नवीन नोंदणी करा',
    'btn.verify': 'प्रमाणपत्र पडताळा',
    'btn.audio': 'ऑडिओ मार्गदर्शक',
    'btn.listen': 'ऐका',
    'btn.speak': 'बोला',
    'btn.save_continue': 'जतन करा आणि पुढे चला',
    'btn.back': 'मागे जा',
    'btn.approve': 'मंजूर करा',
    'btn.reject': 'नाकारा',
    'btn.approved': 'मंजूर',
    'btn.rejected': 'नाकारले',
    'btn.capture': 'फोटो घ्या व पडताळा',
    'tab.home': 'होम',
    'tab.courses': 'कोर्सेस',
    'tab.path': 'शिकण्याचा मार्ग',
    'tab.attendance': 'हजेरी',
    'tab.career': 'करिअर एआय',
    'tab.verify': 'प्रमाणपत्र',
    'verify.title': 'प्रमाणपत्राची सत्यता तपासा',
    'verify.subtitle': 'पडताळणीसाठी प्रमाणपत्र क्रमांक प्रविष्ट करा किंवा क्यूआर कोड स्कॅन करा.',
    'verify.label': 'प्रमाणपत्र क्रमांक (ID)',
    'verify.placeholder': 'उदा. RR-2026-004821',
    'verify.check': 'सत्यता तपासा',
    'admin.live_monitoring': 'थेट निरीक्षण',
    'admin.enrolments': 'एकूण नोंदणी',
    'admin.attendance_rate': 'हजेरी प्रमाण',
    'employer.title': '१२८ प्रमाणित उमेदवार उपलब्ध',
    'trainer.live_session': 'थेट सत्र सुरू',
    'course.lessons': 'धडे यादी',
    'attendance.mark': 'हजेरी नोंदवा',
    'path.title': 'माझा अ‍ॅडॉप्टिव्ह शिकण्याचा मार्ग',
    'path.subtitle': 'एआय द्वारे वैयक्तिकृत धडे, कौशल्य तफावत व मेंटर मार्गदर्शन',
    'path.simulate': 'एआय इनपुट सिम्युलेट करा',
    'path.why_this': 'हे तुमच्यासाठी का निवडले?',
    'path.skill_gap': 'कौशल्य तफावत विश्लेषण',
    'path.career_milestones': 'वैयक्तिकृत करिअर व शिक्षण रोडमॅप',
    'path.mentor_title': 'नियुक्त मुख्य मार्गदर्शक',
    'path.req_mentor': 'मार्गदर्शन सत्राची विनंती करा',
    'path.low_data_badge': 'लाइट मोड सुरू (ऑडिओ + नोट्स)',
    'match.why': 'ही जुळणी का?',
    'readiness.title': 'एआय अंमलबजावणी सज्जता',
    'readiness.gauge': 'अंमलबजावणी सज्जता स्कोअर',
    'readiness.actions': 'रिअल-टाइम मार्गदर्शन कृती',
    'readiness.act': 'कृती करा',
    'readiness.done': 'निवारण पूर्ण ✓'
  }
};

let currentLang = localStorage.getItem('rr_lang') || 'en';

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'hi' && lang !== 'mr') lang = 'en';
  currentLang = lang;
  localStorage.setItem('rr_lang', lang);

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update buttons styling
  document.querySelectorAll('.lang-btn, [data-lang]').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang') || btn.textContent.trim().toLowerCase();
    const isTarget = (btnLang === lang || 
      (lang === 'hi' && (btnLang === 'हिं' || btnLang === 'hi' || btnLang === 'हिंदी' || btnLang === 'हिन्दी')) || 
      (lang === 'mr' && (btnLang === 'मराठी' || btnLang === 'mr' || btnLang === 'मरा')) ||
      (lang === 'en' && btnLang === 'en'));

    if (isTarget) {
      btn.classList.add('bg-primary', 'text-white', 'font-bold');
      btn.classList.remove('text-on-surface-variant', 'bg-transparent', 'bg-surface-container');
    } else {
      btn.classList.remove('bg-primary', 'text-white', 'font-bold');
      btn.classList.add('text-on-surface-variant');
    }
  });

  // Fire custom event for reactive components (e.g. adaptive engine, chatbot, matching)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));

  const langNames = { en: 'English', hi: 'हिन्दी', mr: 'मराठी' };
  showToast(`Language switched to ${langNames[lang] || lang}`);
}

function showToast(message, isError = false) {
  let toast = document.getElementById('rr-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rr-toast';
    toast.className = 'rr-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-symbols-outlined text-[20px]">${isError ? 'error' : 'check_circle'}</span><span>${message}</span>`;
  if (isError) {
    toast.classList.add('error');
  } else {
    toast.classList.remove('error');
  }
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Quick Dev Route Switcher
function injectDevSwitcher() {
  if (document.getElementById('dev-role-switcher')) return;
  const switcher = document.createElement('div');
  switcher.id = 'dev-role-switcher';
  switcher.className = 'dev-role-switcher';

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  
  switcher.innerHTML = `
    <span class="material-symbols-outlined text-[16px]">navigation</span>
    <span class="hidden sm:inline">Screen:</span>
    <select onchange="window.location.href = this.value">
      <option value="/" ${currentPath === '/' || currentPath === '' ? 'selected' : ''}>Landing Page (/)</option>
      <option value="/register" ${currentPath === '/register' ? 'selected' : ''}>Registration (/register)</option>
      <option value="/verify" ${currentPath === '/verify' ? 'selected' : ''}>Verify Certificate (/verify)</option>
      <option value="/admin" ${currentPath === '/admin' ? 'selected' : ''}>Admin Dashboard (/admin)</option>
      <option value="/admin/timetable" ${currentPath === '/admin/timetable' ? 'selected' : ''}>Timetable & Hostel (/admin/timetable)</option>
      <option value="/admin/readiness" ${currentPath === '/admin/readiness' ? 'selected' : ''}>AI Readiness (/admin/readiness)</option>
      <option value="/employer" ${currentPath === '/employer' ? 'selected' : ''}>Employer Portal (/employer)</option>
      <option value="/trainer/session" ${currentPath === '/trainer/session' ? 'selected' : ''}>Trainer Live Session (/trainer/session)</option>
      <option value="/trainee" ${currentPath === '/trainee' ? 'selected' : ''}>Trainee Dashboard (/trainee)</option>
      <option value="/trainee/courses" ${currentPath === '/trainee/courses' ? 'selected' : ''}>Course Player (/trainee/courses)</option>
      <option value="/trainee/path" ${currentPath === '/trainee/path' ? 'selected' : ''}>Learning Path (/trainee/path)</option>
      <option value="/trainee/attendance" ${currentPath === '/trainee/attendance' ? 'selected' : ''}>Attendance Check-in (/trainee/attendance)</option>
      <option value="/trainee/career" ${currentPath === '/trainee/career' ? 'selected' : ''}>Career AI Chatbot (/trainee/career)</option>
    </select>
  `;
  document.body.appendChild(switcher);
}

// Auto bind on load
document.addEventListener('DOMContentLoaded', () => {
  // Bind language buttons
  document.querySelectorAll('button').forEach(btn => {
    const text = btn.textContent.trim();
    if (text === 'EN') {
      btn.onclick = () => setLanguage('en');
    } else if (text === 'हिं' || text === 'हिंदी' || text === 'हिन्दी') {
      btn.onclick = () => setLanguage('hi');
    } else if (text === 'मराठी' || text === 'मरा') {
      btn.onclick = () => setLanguage('mr');
    }
  });

  // Inject dev switcher
  injectDevSwitcher();

  // Apply saved language on first load
  const initialLang = localStorage.getItem('rr_lang') || 'en';
  if (translations[initialLang]) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[initialLang][key]) {
        el.textContent = translations[initialLang][key];
      }
    });

    document.querySelectorAll('.lang-btn, [data-lang]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang') || btn.textContent.trim().toLowerCase();
      const isTarget = (btnLang === initialLang || 
        (initialLang === 'hi' && (btnLang === 'हिं' || btnLang === 'hi' || btnLang === 'हिंदी' || btnLang === 'हिन्दी')) || 
        (initialLang === 'mr' && (btnLang === 'मराठी' || btnLang === 'mr' || btnLang === 'मरा')) ||
        (initialLang === 'en' && btnLang === 'en'));

      if (isTarget) {
        btn.classList.add('bg-primary', 'text-white', 'font-bold');
        btn.classList.remove('text-on-surface-variant', 'bg-transparent', 'bg-surface-container');
      } else {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold');
        btn.classList.add('text-on-surface-variant');
      }
    });
  }
});
