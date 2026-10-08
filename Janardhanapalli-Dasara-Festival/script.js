let currentLanguage = "en";

const translations = {
    en: {
        navHome: "Home",
        navPrograms: "Programs",
        navUpdates: "Updates",
        navGallery: "Gallery",
        navLogin: "Login",

        title: "Dasara Navaratri 2K26",
        welcome: "Welcome to Janardhanapalli Dasara Navaratri.",
        hear: "Hear Welcome",
        viewPrograms: "📅 View Programs",

        programs: "📅 Navaratri Programs",
        updates: "📢 Latest Updates",
        gallery: "🖼️ Dasara 2K26 Gallery",
        login: "🔐 User Login",

        day1: "🙏 Ganapati Puja",
        day2: "🕉️ Rudra Abhishekam",
        day3: "🌸 Lalitha Devi Pooja",
        day4: "🪔 Sudarshana Pooja",
        day5: "🌿 Ayushya & Medha Dakshinamurthy Pooja",
        day6: "🌸 Lakshmi & Saraswathi Pooja",
        day7: "⚔️ Durga Pooja",
        day8: "🌟 Navagraha & Anjaneya Swamy Pooja",

        latest: "Sri Sunkulamma Devi Navaratri celebrations will be conducted with special poojas and events.",
        special: "Special devotional programs will be updated here.",
        announcements: "Check this section for the latest announcements.",

        galleryText: "Photos and videos of Janardhanapalli Dasara Navaratri celebrations.",
        temple: "Sri Sunkulamma Devi Temple",
        celebrations: "Dasara Celebrations",
        poojas: "Special Poojas",
        videos: "Videos",

        loginText: "Real mobile OTP login will be added with Firebase.",
        loginButton: "📱 Login with Mobile OTP",

        footer: "© 2026 Janardhanapalli Dasara Navaratri",
        jai: "🙏 Jai Maa Sunkulamma Devi 🙏"
    },

    te: {
        navHome: "హోమ్",
        navPrograms: "కార్యక్రమాలు",
        navUpdates: "తాజా సమాచారం",
        navGallery: "గ్యాలరీ",
        navLogin: "లాగిన్",

        title: "దసరా నవరాత్రులు 2K26",
        welcome: "జనార్ధనపల్లి దసరా నవరాత్రి ఉత్సవాలకు స్వాగతం.",
        hear: "స్వాగత సందేశం వినండి",
        viewPrograms: "📅 కార్యక్రమాలు చూడండి",

        programs: "📅 నవరాత్రి కార్యక్రమాలు",
        updates: "📢 తాజా సమాచారం",
        gallery: "🖼️ దసరా 2K26 గ్యాలరీ",
        login: "🔐 వినియోగదారు లాగిన్",

        day1: "🙏 గణపతి పూజ",
        day2: "🕉️ రుద్రాభిషేకం",
        day3: "🌸 లలితా దేవి పూజ",
        day4: "🪔 సుదర్శన పూజ",
        day5: "🌿 ఆయుష్య & మేధా దక్షిణామూర్తి పూజ",
        day6: "🌸 లక్ష్మీ & సరస్వతి పూజ",
        day7: "⚔️ దుర్గా పూజ",
        day8: "🌟 నవగ్రహ & ఆంజనేయ స్వామి పూజ",

        latest: "శ్రీ సుంకులమ్మ దేవి నవరాత్రి ఉత్సవాలు ప్రత్యేక పూజలు మరియు కార్యక్రమాలతో నిర్వహించబడతాయి.",
        special: "ప్రత్యేక భక్తి కార్యక్రమాల వివరాలు ఇక్కడ అప్డేట్ చేయబడతాయి.",
        announcements: "తాజా ప్రకటనల కోసం ఈ విభాగాన్ని చూడండి.",

        galleryText: "జనార్ధనపల్లి దసరా నవరాత్రి ఉత్సవాల ఫోటోలు మరియు వీడియోలు.",
        temple: "శ్రీ సుంకులమ్మ దేవి ఆలయం",
        celebrations: "దసరా వేడుకలు",
        poojas: "ప్రత్యేక పూజలు",
        videos: "వీడియోలు",

        loginText: "Firebase ద్వారా నిజమైన మొబైల్ OTP లాగిన్ త్వరలో జోడించబడుతుంది.",
        loginButton: "📱 మొబైల్ OTP ద్వారా లాగిన్",

        footer: "© 2026 జనార్ధనపల్లి దసరా నవరాత్రి",
        jai: "🙏 జై మా సుంకులమ్మ దేవి 🙏"
    }
};


function setLanguage(language) {

    currentLanguage = language;

    const t = translations[language];

    document.getElementById("welcomeTitle").innerText = t.title;
    document.getElementById("welcomeText").innerText = t.welcome;
    document.getElementById("voiceButton").innerText = t.hear;

    document.getElementById("viewPrograms").innerText =
        t.viewPrograms;

    document.getElementById("navHome").innerText = t.navHome;
    document.getElementById("navPrograms").innerText = t.navPrograms;
    document.getElementById("navUpdates").innerText = t.navUpdates;
    document.getElementById("navGallery").innerText = t.navGallery;
    document.getElementById("navLogin").innerText = t.navLogin;

    document.getElementById("programTitle").innerText = t.programs;
    document.getElementById("updatesTitle").innerText = t.updates;
    document.getElementById("galleryTitle").innerText = t.gallery;
    document.getElementById("loginTitle").innerText = t.login;

    document.getElementById("day1").innerText = t.day1;
    document.getElementById("day2").innerText = t.day2;
    document.getElementById("day3").innerText = t.day3;
    document.getElementById("day4").innerText = t.day4;
    document.getElementById("day5").innerText = t.day5;
    document.getElementById("day6").innerText = t.day6;
    document.getElementById("day7").innerText = t.day7;
    document.getElementById("day8").innerText = t.day8;

    document.getElementById("latestText").innerText = t.latest;
    document.getElementById("specialText").innerText = t.special;
    document.getElementById("announcementText").innerText =
        t.announcements;

    document.getElementById("galleryText").innerText =
        t.galleryText;

    document.getElementById("celebrations").innerText =
        t.celebrations;

    document.getElementById("temple").innerText =
        t.temple;

    document.getElementById("poojas").innerText =
        t.poojas;

    document.getElementById("videos").innerText =
        t.videos;

    document.getElementById("loginText").innerText =
        t.loginText;

    document.getElementById("loginButton").innerText =
        t.loginButton;

    document.getElementById("footerText").innerText =
        t.footer;

    document.getElementById("jaiText").innerText =
        t.jai;
}


function speakWelcome() {

    let message;

    if (currentLanguage === "te") {

        message =
            "జనార్ధనపల్లి దసరా నవరాత్రి ఉత్సవాలకు మీకు హృదయపూర్వక స్వాగతం.";

    } else {

        message =
            "Welcome to Janardhanapalli Dasara Navaratri 2K26.";

    }

    let speech =
        new SpeechSynthesisUtterance(message);

    speech.lang =
        currentLanguage === "te"
            ? "te-IN"
            : "en-IN";

    speech.rate = 0.9;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}


function showPrograms() {

    document.getElementById("events")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function loadLiveAnnouncements() {

    const container =
        document.getElementById("liveAnnouncements");

    if (!container) {
        return;
    }

    let announcements =
        JSON.parse(
            localStorage.getItem("announcements")
        ) || [];

    container.innerHTML = "";

    announcements.forEach(function(text) {

        let card =
            document.createElement("div");

        card.className = "update-card";

        card.innerHTML = `
            <span class="update-badge">
                LIVE
            </span>

            <h3>📢 Announcement</h3>

            <p>${text}</p>
        `;

        container.appendChild(card);

    });

}


loadLiveAnnouncements();
ocument.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_tmfcs1r', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message.', error);
        });
});