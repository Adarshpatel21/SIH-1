(() => {
  const STORAGE_KEY = 'neurosyncLanguage';
  const languages = {
    en: 'English',
    hi: 'Hindi',
    as: 'Assamese',
    bn: 'Bengali',
    kha: 'Khasi',
    mni: 'Manipuri',
    brx: 'Bodo'
  };

  const translations = {
    en: {},
    hi: {
      'Select Language': 'भाषा चुनें', 'Welcome back': 'वापसी पर स्वागत है',
      "Sign in to continue your loved one's care journey.": 'अपने प्रियजन की देखभाल जारी रखने के लिए साइन इन करें।',
      'Full name': 'पूरा नाम', 'Personal email': 'व्यक्तिगत ईमेल', 'Password': 'पासवर्ड',
      'Sign in': 'साइन इन', 'Sign in with Google': 'Google से साइन इन करें',
      'Create your account': 'अपना खाता बनाएं', 'Create account': 'खाता बनाएं',
      'New to NeuroSync?': 'NeuroSync पर नए हैं?', 'Create an account': 'खाता बनाएं',
      'Already have an account?': 'क्या आपका खाता पहले से है?', 'Family & Caregiver': 'परिवार और देखभालकर्ता',
      'Doctor & Clinician': 'डॉक्टर और चिकित्सक', 'Today': 'आज', 'Activities': 'गतिविधियां',
      'Care team': 'देखभाल टीम', 'Reports': 'रिपोर्ट', 'Hydration Vault': 'जलयोजन',
      'Activity': 'गतिविधि', 'Medication': 'दवा', 'Upcoming Appointment': 'आगामी अपॉइंटमेंट',
      'Reset': 'रीसेट', 'Mind Cards': 'माइंड कार्ड्स', 'Memory Match': 'मेमोरी मैच',
      'Picture Recall': 'चित्र स्मरण', 'Back to dashboard': 'डैशबोर्ड पर वापस जाएं',
      'Game scores': 'गेम स्कोर', 'Loading scores...': 'स्कोर लोड हो रहे हैं...',
      'No completed game scores yet.': 'अभी तक कोई पूरा किया गया गेम स्कोर नहीं है।',
      'Back': 'वापस', 'Restart': 'फिर शुरू करें', 'Moves': 'चालें', 'Matches': 'मिलान', 'Time': 'समय',
      'Score saved to your account.': 'स्कोर आपके खाते में सेव हो गया है।'
    },
    as: {
      'Select Language': 'ভাষা বাছক', 'Welcome back': 'আকৌ স্বাগতম',
      "Sign in to continue your loved one's care journey.": 'আপোনাৰ আপোনজনৰ যত্নৰ যাত্ৰা অব্যাহত ৰাখিবলৈ ছাইন ইন কৰক।',
      'Full name': 'সম্পূৰ্ণ নাম', 'Personal email': 'ব্যক্তিগত ইমেইল', 'Password': 'পাছৱৰ্ড',
      'Sign in': 'ছাইন ইন', 'Sign in with Google': 'Google-ৰে ছাইন ইন কৰক', 'Create your account': 'আপোনাৰ একাউণ্ট সৃষ্টি কৰক',
      'Create account': 'একাউণ্ট সৃষ্টি কৰক', 'New to NeuroSync?': 'NeuroSync-লৈ নতুন?', 'Create an account': 'একাউণ্ট সৃষ্টি কৰক',
      'Family & Caregiver': 'পৰিয়াল আৰু যত্ন লওঁতা', 'Doctor & Clinician': 'ডাক্তৰ আৰু চিকিৎসক',
      'Today': 'আজি', 'Activities': 'কাৰ্যকলাপ', 'Care team': 'যত্ন দল', 'Reports': 'প্ৰতিবেদন',
      'Hydration Vault': 'পানী সেৱন', 'Activity': 'কাৰ্যকলাপ', 'Medication': 'ঔষধ', 'Upcoming Appointment': 'আগন্তুক সাক্ষাৎ',
      'Reset': 'ৰিছেট', 'Mind Cards': 'মাইণ্ড কাৰ্ড', 'Memory Match': 'মেমৰি মেচ', 'Picture Recall': 'ছবি স্মৰণ',
      'Back': 'উভতি যাওক', 'Restart': 'পুনৰ আৰম্ভ কৰক', 'Moves': 'চাল', 'Matches': 'মিল', 'Time': 'সময়'
    },
    bn: {
      'Select Language': 'ভাষা নির্বাচন করুন', 'Welcome back': 'আবার স্বাগতম',
      "Sign in to continue your loved one's care journey.": 'আপনার প্রিয়জনের যত্নের যাত্রা চালিয়ে যেতে সাইন ইন করুন।',
      'Full name': 'পুরো নাম', 'Personal email': 'ব্যক্তিগত ইমেইল', 'Password': 'পাসওয়ার্ড',
      'Sign in': 'সাইন ইন', 'Sign in with Google': 'Google দিয়ে সাইন ইন করুন', 'Create your account': 'আপনার অ্যাকাউন্ট তৈরি করুন',
      'Create account': 'অ্যাকাউন্ট তৈরি করুন', 'New to NeuroSync?': 'NeuroSync-এ নতুন?', 'Create an account': 'অ্যাকাউন্ট তৈরি করুন',
      'Family & Caregiver': 'পরিবার ও যত্নদাতা', 'Doctor & Clinician': 'ডাক্তার ও চিকিৎসক', 'Today': 'আজ',
      'Activities': 'কার্যক্রম', 'Care team': 'যত্ন দল', 'Reports': 'রিপোর্ট', 'Hydration Vault': 'জলপান',
      'Activity': 'কার্যক্রম', 'Medication': 'ওষুধ', 'Upcoming Appointment': 'আসন্ন সাক্ষাৎ', 'Reset': 'রিসেট',
      'Mind Cards': 'মাইন্ড কার্ড', 'Memory Match': 'মেমরি ম্যাচ', 'Picture Recall': 'ছবি স্মরণ', 'Back': 'ফিরে যান',
      'Restart': 'আবার শুরু করুন', 'Moves': 'চাল', 'Matches': 'মিল', 'Time': 'সময়'
    },
    kha: {
      'Select Language': 'Jied ktien', 'Welcome back': 'Pdiang biang', 'Full name': 'Ka kyrteng pura',
      'Personal email': 'Ka email shimet', 'Password': 'Ka password', 'Sign in': 'Rung hapoh',
      'Sign in with Google': 'Rung hapoh da Google', 'Create account': 'Thaw account', 'New to NeuroSync?': 'Thymmai ha NeuroSync?',
      'Create an account': 'Thaw ka account', 'Family & Caregiver': 'Kur bad nongsumar', 'Doctor & Clinician': 'Doktor bad nongpynkhiah',
      'Today': 'Mynta', 'Activities': 'Ki kam', 'Care team': 'Ka kynhun sumar', 'Reports': 'Ki jingïathuh',
      'Hydration Vault': 'Ka um', 'Activity': 'Kam', 'Medication': 'Dawai', 'Upcoming Appointment': 'Ka jingïakynduh ban wan',
      'Reset': 'Pynbeit biang', 'Mind Cards': 'Ki card jingmut', 'Memory Match': 'Memory Match', 'Picture Recall': 'Kynmaw dur',
      'Back': 'Phai dien', 'Restart': 'Sdang biang', 'Moves': 'Ki sien', 'Matches': 'Ki jingïadei', 'Time': 'Por'
    },
    mni: {
      'Select Language': 'লোন বাছউ', 'Welcome back': 'নুংশি হায়গনি', 'Full name': 'মিং পুম্নমক',
      'Personal email': 'ইমেইল', 'Password': 'পাসওয়ার্ড', 'Sign in': 'সাইন ইন তৌ',
      'Sign in with Google': 'Google গা সাইন ইন তৌ', 'Create account': 'অ্যাকাউন্ট শেমদোকপা', 'New to NeuroSync?': 'NeuroSync-দা অনৌবা?',
      'Create an account': 'অ্যাকাউন্ট শেমদোকপা', 'Family & Caregiver': 'ইমা-ইপা অমসুং শেমজিংবা', 'Doctor & Clinician': 'ডাক্টর অমসুং চিকিত্সক',
      'Today': 'নুমিত্তং', 'Activities': 'থৌরম', 'Care team': 'শেমজিংবা দল', 'Reports': 'রিপোর্ট',
      'Hydration Vault': 'ইশিং থকপা', 'Activity': 'থৌরম', 'Medication': 'ওষুধ', 'Upcoming Appointment': 'লাকপা সাক্ষাৎকার',
      'Reset': 'অমুক হান্না', 'Mind Cards': 'মাইন্ড কার্ড', 'Memory Match': 'মেমোরি ম্যাচ', 'Picture Recall': 'মশিং তম্বা',
      'Back': 'হন্না', 'Restart': 'অমুক হান্না হৌ', 'Moves': 'চলন', 'Matches': 'ম্যাচ', 'Time': 'মতম'
    },
    brx: {
      'Select Language': 'राव सायख', 'Welcome back': 'फिन फैयो', 'Full name': 'फुं नाम',
      'Personal email': 'निजी इमेल', 'Password': 'पासवर्ड', 'Sign in': 'साइन इन',
      'Sign in with Google': 'Google जों साइन इन', 'Create account': 'अकाउन्ट सोरजि', 'New to NeuroSync?': 'NeuroSync आव गोदान?',
      'Create an account': 'अकाउन्ट सोरजि', 'Family & Caregiver': 'नखर आरो सुस्रायगिरि', 'Doctor & Clinician': 'डक्टर आरो थिखानायगिरि',
      'Today': 'दिनै', 'Activities': 'हाबाफारि', 'Care team': 'सुस्राय दल', 'Reports': 'रिपर्ट',
      'Hydration Vault': 'दै जानाय', 'Activity': 'हाबाफारि', 'Medication': 'औषध', 'Upcoming Appointment': 'फैगौ सानजाय',
      'Reset': 'फिन फोजोब', 'Mind Cards': 'माइन्ड कार्ड', 'Memory Match': 'मेमरि माच', 'Picture Recall': 'नायनाय फिन फैयो',
      'Back': 'उनथिं', 'Restart': 'फिन जागाय', 'Moves': 'दाव', 'Matches': 'मिल', 'Time': 'सम'
    }
  };
  const landingTranslations = {
    hi: {
      Login: 'लॉगिन', 'Support for Mind & Memory': 'मन और स्मृति के लिए सहायता',
      'Your digital companion for daily cognitive care, deeply rooted in the warmth of home.': 'दैनिक संज्ञानात्मक देखभाल के लिए आपका डिजिटल साथी, घर की गर्मजोशी से जुड़ा हुआ।',
      'Start Daily Training': 'दैनिक अभ्यास शुरू करें', 'Brain Games': 'मस्तिष्क खेल',
      'Engaging, culturally relevant puzzles to keep the mind active and joyful.': 'मन को सक्रिय और प्रसन्न रखने वाली रोचक और सांस्कृतिक पहेलियां।',
      'Daily Reminders': 'दैनिक अनुस्मारक', 'Gentle prompts for medication, tasks, and meals with clear visuals.': 'दवा, कार्य और भोजन के लिए स्पष्ट दृश्यों के साथ सरल अनुस्मारक।',
      'Caregiver Connect': 'देखभालकर्ता संपर्क', 'Seamlessly share progress and stay connected with loved ones.': 'प्रगति साझा करें और प्रियजनों से जुड़े रहें।', 'Privacy Policy': 'गोपनीयता नीति'
    },
    as: { Login: 'লগ ইন', 'Support for Mind & Memory': 'মন আৰু স্মৃতিৰ সহায়', 'Start Daily Training': 'দৈনিক প্ৰশিক্ষণ আৰম্ভ কৰক', 'Brain Games': 'মগজুৰ খেল', 'Daily Reminders': 'দৈনিক সোঁৱৰণী', 'Caregiver Connect': 'যত্ন লওঁতাৰ সংযোগ', 'Privacy Policy': 'গোপনীয়তা নীতি' },
    bn: { Login: 'লগইন', 'Support for Mind & Memory': 'মন ও স্মৃতির সহায়তা', 'Start Daily Training': 'দৈনিক প্রশিক্ষণ শুরু করুন', 'Brain Games': 'মস্তিষ্কের খেলা', 'Daily Reminders': 'দৈনিক অনুস্মারক', 'Caregiver Connect': 'যত্নদাতার যোগাযোগ', 'Privacy Policy': 'গোপনীয়তা নীতি' },
    kha: { Login: 'Rung hapoh', 'Support for Mind & Memory': 'Ka jingïarap ïa ka jingmut bad ka jingkynmaw', 'Start Daily Training': 'Sdang ka jinghikai man ka sngi', 'Brain Games': 'Ki jingïalehkai jingmut', 'Daily Reminders': 'Ki jingkynmaw man ka sngi', 'Caregiver Connect': 'Ka jingïadei nongsumar', 'Privacy Policy': 'Ka polisi shimet' },
    mni: { Login: 'লগ ইন', 'Support for Mind & Memory': 'মাইন্ড অমসুং মেমোরিগী মতম', 'Start Daily Training': 'নুমিত্তংগী তম্বা হৌ', 'Brain Games': 'মাইন্ডগী গেম', 'Daily Reminders': 'নুমিত্তংগী খঙহনবা', 'Caregiver Connect': 'শেমজিংবাগী মরী', 'Privacy Policy': 'প্রাইভেসি পলিসি' },
    brx: { Login: 'लग इन', 'Support for Mind & Memory': 'सोनाय आरो सोलोंनायनि हेफाजाब', 'Start Daily Training': 'सानफ्रोमबो सोलोंथाय जागाय', 'Brain Games': 'सोनायनि खेल', 'Daily Reminders': 'सानफ्रोमबो सावराय', 'Caregiver Connect': 'सुस्रायगिरि जों जोगाजोग', 'Privacy Policy': 'प्राइभेसि पालिसि' }
  };
  const originalText = new WeakMap();

  function currentLanguage() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function translate(value) {
    const language = currentLanguage();
    return translations[language]?.[value] || landingTranslations[language]?.[value] || value;
  }

  function applyTranslations(root = document) {
    const language = currentLanguage();
    document.documentElement.lang = language;
    const walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      if (node.parentElement.closest('script, style, select')) return;
      if (!originalText.has(node)) originalText.set(node, node.textContent.trim());
      const original = originalText.get(node);
      if (!original) return;
      const translated = translate(original);
      if (translated !== original) {
        const leadingWhitespace = node.textContent.match(/^\s*/)?.[0] || '';
        const trailingWhitespace = node.textContent.match(/\s*$/)?.[0] || '';
        node.textContent = `${leadingWhitespace}${translated}${trailingWhitespace}`;
      } else {
        const leadingWhitespace = node.textContent.match(/^\s*/)?.[0] || '';
        const trailingWhitespace = node.textContent.match(/\s*$/)?.[0] || '';
        node.textContent = `${leadingWhitespace}${original}${trailingWhitespace}`;
      }
    });
    root.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translate(key);
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      element.placeholder = translate(element.dataset.i18nPlaceholder);
    });
    root.querySelectorAll('[data-language-selector]').forEach((select) => {
      select.value = language;
    });
  }

  function addSelector() {
    if (!document.querySelector('[data-language-selector]')) {
      const wrapper = document.createElement('label');
      wrapper.className = 'neurosync-language-control';
      wrapper.innerHTML = '<span data-i18n="Select Language">Select Language</span><select data-language-selector aria-label="Select Language"></select>';
      document.body.prepend(wrapper);
      const select = wrapper.querySelector('select');
      Object.entries(languages).forEach(([code, label]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = label;
        select.append(option);
      });
    }
    document.querySelectorAll('[data-language-selector]').forEach((select) => {
      if (select.dataset.languageBound) return;
      select.dataset.languageBound = 'true';
      select.addEventListener('change', () => {
        localStorage.setItem(STORAGE_KEY, select.value);
        applyTranslations();
        window.dispatchEvent(new CustomEvent('neurosync-language-change', { detail: select.value }));
      });
    });
    document.querySelectorAll('[data-language-option]').forEach((link) => {
      if (link.dataset.languageBound) return;
      link.dataset.languageBound = 'true';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem(STORAGE_KEY, link.dataset.languageOption);
        applyTranslations();
      });
    });
  }

  const style = document.createElement('style');
  style.textContent = '.neurosync-language-control{position:fixed;top:1rem;right:1rem;z-index:1000;display:flex;align-items:center;gap:.5rem;padding:.45rem .7rem;border:1px solid #d6d3d1;border-radius:999px;background:rgba(255,255,255,.94);box-shadow:0 4px 12px rgba(70,50,40,.08);font:600 12px/1.2 system-ui,sans-serif;color:#57534e}.neurosync-language-control select{border:0;background:transparent;color:#292524;font:inherit;outline:none;cursor:pointer}.neurosync-language-control option{color:#292524}@media(max-width:640px){.neurosync-language-control{top:.5rem;right:.5rem}.neurosync-language-control span{display:none}}';
  document.head.append(style);
  window.neuroSyncLanguage = { currentLanguage, translate, applyTranslations, languages };
  window.addEventListener('DOMContentLoaded', () => { addSelector(); applyTranslations(); });
  if (document.readyState !== 'loading') { addSelector(); applyTranslations(); }
})();
