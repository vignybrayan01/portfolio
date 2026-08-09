/* =========================================================
   APP.JS
   Comportements généraux du portfolio
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initSplash();
    initTheme();
    initLanguage();
    initNavigation();
    initScrollProgress();
    initTypewriters();
    initCounters();
    initReveal();
    initContact();
    initChatbot();

});


/* =========================================================
   SPLASH SCREEN
   ========================================================= */

function initSplash() {

    const splash = document.getElementById("splash-screen");

    if (!splash) return;

    setTimeout(function () {
        splash.classList.add("hide");

        setTimeout(function () {
            splash.style.display = "none";
        }, 500);

    }, 1200);
}


/* =========================================================
   THÈME SOMBRE / CLAIR
   ========================================================= */

function initTheme() {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    let theme = localStorage.getItem("theme") || "dark";

    applyTheme(theme);

    button.addEventListener("click", function () {

        theme = theme === "dark" ? "light" : "dark";

        localStorage.setItem("theme", theme);

        applyTheme(theme);
    });


    function applyTheme(value) {

        document.body.dataset.theme = value;

        document.body.classList.toggle(
            "light-theme",
            value === "light"
        );
    }
}


/* =========================================================
   FRANÇAIS / ANGLAIS
   ========================================================= */

function initLanguage() {

    const button = document.getElementById("langToggle");

    let language =
        localStorage.getItem("language") || "fr";

    applyLanguage(language);


    if (button) {

        button.addEventListener("click", function () {

            language =
                language === "fr" ? "en" : "fr";

            localStorage.setItem(
                "language",
                language
            );

            applyLanguage(language);

            restartTypewriters();
        });
    }


    function applyLanguage(lang) {

        document.documentElement.lang = lang;

        document.body.dataset.lang = lang;


        /* Textes simples */

        document
            .querySelectorAll("[data-fr][data-en]")
            .forEach(function (element) {

                const value =
                    lang === "fr"
                        ? element.dataset.fr
                        : element.dataset.en;

                /*
                 * innerHTML permet de conserver
                 * les <strong>, <br>, etc.
                 */
                element.innerHTML = value;
            });


        /* Placeholders */

        document
            .querySelectorAll("[data-fr-ph][data-en-ph]")
            .forEach(function (element) {

                element.placeholder =
                    lang === "fr"
                        ? element.dataset.frPh
                        : element.dataset.enPh;
            });


        if (button) {
            button.textContent =
                lang === "fr" ? "EN" : "FR";
        }
    }
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function initNavigation() {

    const links =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    /* Scroll doux */

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* Section active */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    if (!sections.length) return;


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) return;

                    links.forEach(function (link) {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        );
                    });
                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(function (section) {
        observer.observe(section);
    });
}


/* =========================================================
   BARRE DE PROGRESSION DU SCROLL
   ========================================================= */

function initScrollProgress() {

    const progress =
        document.getElementById("scrollProgress");

    if (!progress) return;


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            height > 0
                ? (scrollTop / height) * 100
                : 0;

        progress.style.width =
            percentage + "%";
    }


    window.addEventListener(
        "scroll",
        updateProgress
    );

    updateProgress();
}


/* =========================================================
   TYPEWRITER
   ========================================================= */

let typewriterTimers = [];


function initTypewriters() {

    if (typeof PROFIL === "undefined") return;

    const language =
        document.body.dataset.lang || "fr";

    const roles =
        language === "fr"
            ? PROFIL.rolesFr
            : PROFIL.rolesEn;


    createTypewriter(
        document.getElementById("roleTyped"),
        roles
    );

    createTypewriter(
        document.getElementById("roleTypedProfil"),
        roles
    );
}


function createTypewriter(element, words) {

    if (
        !element ||
        !Array.isArray(words) ||
        !words.length
    ) {
        return;
    }


    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function type() {

        const word = words[wordIndex];


        if (!deleting) {

            charIndex++;

            element.textContent =
                word.substring(0, charIndex);


            if (charIndex === word.length) {

                deleting = true;

                typewriterTimers.push(
                    setTimeout(type, 1300)
                );

                return;
            }


            typewriterTimers.push(
                setTimeout(type, 70)
            );

        } else {

            charIndex--;

            element.textContent =
                word.substring(0, charIndex);


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

                typewriterTimers.push(
                    setTimeout(type, 300)
                );

                return;
            }


            typewriterTimers.push(
                setTimeout(type, 35)
            );
        }
    }


    type();
}


function restartTypewriters() {

    typewriterTimers.forEach(function (timer) {
        clearTimeout(timer);
    });

    typewriterTimers = [];

    const hero =
        document.getElementById("roleTyped");

    const profil =
        document.getElementById("roleTypedProfil");

    if (hero) hero.textContent = "";
    if (profil) profil.textContent = "";

    initTypewriters();
}


/* =========================================================
   COMPTEURS
   ========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );

    if (!counters.length) return;


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) return;

                    animateCounter(entry.target);

                    observer.unobserve(
                        entry.target
                    );
                });

            },
            {
                threshold: 0.4
            }
        );


    counters.forEach(function (counter) {
        observer.observe(counter);
    });
}


function animateCounter(element) {

    const target =
        Number(element.dataset.count);

    const suffix =
        element.dataset.suffix || "";

    if (!Number.isFinite(target)) return;


    let current = 0;

    const duration = 900;

    const step =
        Math.max(
            1,
            Math.ceil(
                target /
                (duration / 30)
            )
        );


    const timer =
        setInterval(function () {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);
            }

            element.textContent =
                current + suffix;

        }, 30);
}


/* =========================================================
   ANIMATIONS D'APPARITION
   ========================================================= */

function initReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "in"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(function (element) {
        observer.observe(element);
    });
}


/* =========================================================
   CONTACT
   ========================================================= */

function initContact() {

    if (typeof CONTACT === "undefined") return;


    const mailButtons = [
        document.getElementById("mailBtn"),
        document.getElementById("mailBtn2")
    ];


    const whatsappButtons = [
        document.getElementById("waBtn"),
        document.getElementById("waBtn2")
    ];


    const linkedinButtons =
        document.querySelectorAll(
            "[data-linkedin]"
        );


    const language =
        document.body.dataset.lang || "fr";


    const subject =
        language === "fr"
            ? "Contact depuis votre portfolio"
            : "Contact from your portfolio";


    const emailUrl =
        "mailto:" +
        CONTACT.email +
        "?subject=" +
        encodeURIComponent(subject);


    mailButtons.forEach(function (button) {

        if (!button) return;

        button.href = emailUrl;
    });


    const message =
        language === "fr"
            ? CONTACT.whatsappMessageFr
            : CONTACT.whatsappMessageEn;


    const whatsappUrl =
        "https://wa.me/" +
        CONTACT.whatsapp +
        "?text=" +
        encodeURIComponent(message);


    whatsappButtons.forEach(function (button) {

        if (!button) return;

        button.href = whatsappUrl;
    });


    linkedinButtons.forEach(function (button) {
        button.href = CONTACT.linkedin;
    });
}


/* =========================================================
   CHATBOT
   ========================================================= */

function initChatbot() {

    if (
        typeof CONTACT === "undefined" ||
        !CONTACT.chatbot
    ) {
        return;
    }


    const fab =
        document.getElementById("aiFab");

    const panel =
        document.getElementById("aiPanel");

    const close =
        document.getElementById("aiClose");

    const body =
        document.getElementById("aiBody");

    const input =
        document.getElementById("aiInput");

    const send =
        document.getElementById("aiSend");

    const suggestions =
        document.querySelectorAll(
            "#aiSuggest button"
        );


    if (!fab || !panel) return;


    fab.addEventListener("click", function () {
        panel.classList.toggle("open");
    });


    if (close) {

        close.addEventListener("click", function () {
            panel.classList.remove("open");
        });
    }


    if (send) {
        send.addEventListener("click", ask);
    }


    if (input) {

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    ask();
                }
            }
        );
    }


    suggestions.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const lang =
                    document.body.dataset.lang ||
                    "fr";

                const question =
                    lang === "fr"
                        ? button.dataset.qFr
                        : button.dataset.qEn;

                if (!question) return;

                if (input) {
                    input.value = question;
                }

                ask();
            }
        );
    });


    function ask() {

        if (!input || !body) return;

        const question =
            input.value.trim();

        if (!question) return;


        appendMessage(
            question,
            "user"
        );


        input.value = "";


        setTimeout(function () {

            appendMessage(
                getChatbotAnswer(question),
                "bot"
            );

        }, 350);
    }


    function getChatbotAnswer(question) {

        const lang =
            document.body.dataset.lang ||
            "fr";

        const chatbot =
            CONTACT.chatbot;

        const answers =
            lang === "fr"
                ? chatbot.answersFr
                : chatbot.answersEn;

        const normalized =
            normalizeText(question);


        for (const key in answers) {

            if (
                normalized.includes(
                    normalizeText(key)
                )
            ) {

                return answers[key];
            }
        }


        return lang === "fr"
            ? chatbot.defaultFr
            : chatbot.defaultEn;
    }


    function appendMessage(text, type) {

        const row =
            document.createElement("div");

        row.className =
            "msg-row " + type;


        const message =
            document.createElement("div");

        message.className =
            "msg " + type;

        message.textContent = text;


        row.appendChild(message);

        body.appendChild(row);


        body.scrollTop =
            body.scrollHeight;
    }
}


/* =========================================================
   UTILITAIRE
   ========================================================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        );
}