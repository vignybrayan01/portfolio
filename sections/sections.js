/* =========================================================
   SECTIONS.JS
   Construction de toute la page à partir des fichiers data/
   ========================================================= */

const app = document.getElementById("app");


/* Petite protection pour les textes injectés */

function safe(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}


/* Nom avec dégradé sur la dernière partie */

function heroName() {

    const parts = PROFIL.personal.name.trim().split(" ");

    if (parts.length === 1) {
        return safe(parts[0]);
    }

    return `
        ${safe(parts[0])}
        <span class="grad">
            ${safe(parts.slice(1).join(" "))}
        </span>
    `;
}


/* =========================================================
   STATISTIQUES
   ========================================================= */

function renderStats() {

    return PROFIL.stats.map(stat => `

        <div class="metric">

            <div
                class="v"
                data-count="${stat.value}"
                data-suffix="${safe(stat.suffix || "")}"
            >
                0
            </div>

            <div
                class="l"
                data-fr="${safe(stat.labelFr)}"
                data-en="${safe(stat.labelEn)}"
            >
                ${safe(stat.labelFr)}
            </div>

        </div>

    `).join("");
}


/* =========================================================
   EXPÉRIENCES
   ========================================================= */

function renderExperiences() {

    return EXPERIENCES.map(exp => `

        <div class="tl-item">

            <div
                class="tl-date"
                data-fr="${safe(exp.dateFr)}"
                data-en="${safe(exp.dateEn)}"
            >
                ${safe(exp.dateFr)}
            </div>


            <div>

                <div
                    class="tl-role"
                    data-fr="${safe(exp.roleFr)}"
                    data-en="${safe(exp.roleEn)}"
                >
                    ${safe(exp.roleFr)}
                </div>


                <div class="tl-org">
                    ${safe(exp.company)}
                </div>


                <div
                    class="tl-sub"
                    data-fr="${safe(exp.descriptionFr)}"
                    data-en="${safe(exp.descriptionEn)}"
                >
                    ${safe(exp.descriptionFr)}
                </div>


                <ul>

                    ${exp.missionsFr.map((mission, index) => `

                        <li
                            data-fr="${safe(mission)}"
                            data-en="${safe(
                                exp.missionsEn[index] || mission
                            )}"
                        >
                            ${safe(mission)}
                        </li>

                    `).join("")}

                </ul>


                <div class="tags">

                    ${exp.technologies.map(tech => `
                        <span class="tag">
                            ${safe(tech)}
                        </span>
                    `).join("")}

                </div>

            </div>

        </div>

    `).join("");
}


/* =========================================================
   PROJETS
   ========================================================= */

function renderProjects() {

    return PROJETS.map(project => `

        <div class="card">

            <div class="card-bar">

                <span>
                    ${safe(project.id)}.project
                </span>

                <span
                    class="badge"
                    data-fr="${safe(project.badgeFr)}"
                    data-en="${safe(project.badgeEn)}"
                >
                    ${safe(project.badgeFr)}
                </span>

            </div>


            <div class="card-body">

                <h3
                    data-fr="${safe(project.titleFr)}"
                    data-en="${safe(project.titleEn)}"
                >
                    ${safe(project.titleFr)}
                </h3>


                <ul>

                    <li
                        data-fr="${safe(project.descriptionFr)}"
                        data-en="${safe(project.descriptionEn)}"
                    >
                        ${safe(project.descriptionFr)}
                    </li>

                </ul>

            </div>


            <div class="proj-tags">

                ${project.technologies.map(tech => `
                    <span class="tag">
                        ${safe(tech)}
                    </span>
                `).join("")}

            </div>

        </div>

    `).join("");
}


/* =========================================================
   COMPÉTENCES
   ========================================================= */

function renderSkills() {

    return COMPETENCES.map(skill => `

        <div class="skill-card">

            <div class="sk-header">

                <div
                    class="sk-head"
                    data-fr="${safe(skill.categoryFr)}"
                    data-en="${safe(skill.categoryEn)}"
                >
                    ${safe(skill.categoryFr)}
                </div>

                <span class="sk-count">
                    ${skill.items.length} items
                </span>

            </div>


            <div class="sk-progress-track">
                <div class="sk-progress-fill"></div>
            </div>


            <div class="tags">

                ${skill.items.map(item => `
                    <span class="tag">
                        ${safe(item)}
                    </span>
                `).join("")}

            </div>

        </div>

    `).join("");
}


/* =========================================================
   FORMATION
   ========================================================= */

function renderEducation() {

    return PROFIL.education.map(item => `

        <div class="edu-item">

            <div
                class="e-deg"
                data-fr="${safe(item.degreeFr)}"
                data-en="${safe(item.degreeEn)}"
            >
                ${safe(item.degreeFr)}
            </div>

            <div class="e-org">
                ${safe(item.school)}
            </div>

            <div class="e-date">
                ${safe(item.date)}
            </div>

        </div>

    `).join("");
}


/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function renderCertifications() {

    return PROFIL.certifications.map(cert => `

        <div class="cert-card">

            <div class="cert-info">

                <div
                    class="c-name"
                    data-fr="${safe(cert.nameFr)}"
                    data-en="${safe(cert.nameEn)}"
                >
                    ${safe(cert.nameFr)}
                </div>

                <div class="c-issuer">
                    ${safe(cert.issuer)}
                </div>

            </div>

        </div>

    `).join("");
}


/* =========================================================
   LANGUES
   ========================================================= */

function renderLanguages() {

    return PROFIL.languages.map(language => `

        <div class="lang-row">

            <span
                data-fr="${safe(language.nameFr)}"
                data-en="${safe(language.nameEn)}"
            >
                ${safe(language.nameFr)}
            </span>

            <div class="lang-bar">

                <i style="width:${language.level}%"></i>

            </div>

        </div>

    `).join("");
}


/* =========================================================
   PAGE
   ========================================================= */

app.innerHTML = `

    <!-- SPLASH -->

    <div id="splash-screen">

        <div class="splash-content">

            <div class="splash-logo">
                ${heroName()}
            </div>

            <div class="splash-sub">
                ${safe(PROFIL.personal.titleFr)}
            </div>

            <div class="splash-bar"></div>

            <div class="splash-tag">
                ⚡ ${safe(PROFIL.personal.titleFr)}
            </div>

        </div>

    </div>


    <!-- FOND -->

    <div class="aurora">
        <span></span>
        <span></span>
        <span></span>
    </div>


    <svg
        class="net"
        viewBox="0 0 1180 520"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
    >

        <defs>

            <linearGradient
                id="netGrad"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >

                <stop
                    offset="0%"
                    stop-color="#8b7cf6"
                />

                <stop
                    offset="100%"
                    stop-color="#2dd9c9"
                />

            </linearGradient>

        </defs>

        <line x1="120" y1="80" x2="360" y2="160"/>
        <line x1="360" y1="160" x2="300" y2="330"/>
        <line x1="360" y1="160" x2="600" y2="90"/>
        <line x1="600" y1="90" x2="820" y2="200"/>
        <line x1="820" y1="200" x2="1040" y2="120"/>
        <line x1="820" y1="200" x2="900" y2="380"/>
        <line x1="300" y1="330" x2="560" y2="400"/>
        <line x1="560" y1="400" x2="900" y2="380"/>

        <circle cx="120" cy="80" r="3"/>
        <circle cx="360" cy="160" r="3"/>
        <circle cx="300" cy="330" r="3"/>
        <circle cx="600" cy="90" r="3"/>
        <circle cx="820" cy="200" r="3"/>
        <circle cx="1040" cy="120" r="3"/>
        <circle cx="900" cy="380" r="3"/>
        <circle cx="560" cy="400" r="3"/>

    </svg>


    <div
        class="scroll-progress"
        id="scrollProgress"
    ></div>


    <!-- NAVBAR -->

    <header class="nav">

        <div class="nav-inner">

            <a class="nav-brand" href="#profil">

                <span class="mark">
                    ${safe(PROFIL.personal.initials)}
                </span>

                <span>
                    ${safe(PROFIL.personal.name)}
                </span>

            </a>


            <nav class="nav-links">

                <a
                    href="#profil"
                    data-fr="profil"
                    data-en="profile"
                >
                    profil
                </a>

                <a
                    href="#experience"
                    data-fr="expérience"
                    data-en="experience"
                >
                    expérience
                </a>

                <a
                    href="#projets"
                    data-fr="projets"
                    data-en="projects"
                >
                    projets
                </a>

                <a
                    href="#competences"
                    data-fr="compétences"
                    data-en="skills"
                >
                    compétences
                </a>

                <a
                    href="#contact"
                    data-fr="contact"
                    data-en="contact"
                >
                    contact
                </a>

            </nav>


            <div class="nav-actions">

                <button
                    class="btn btn-ghost btn-sm"
                    id="themeToggle"
                    type="button"
                >
                    🌓
                </button>


                <button
                    class="btn btn-outline btn-sm"
                    id="langToggle"
                    type="button"
                >
                    EN
                </button>


                <a
                    class="btn btn-ghost btn-sm"
                    data-linkedin
                    href="${safe(CONTACT.linkedin)}"
                    target="_blank"
                    rel="noopener"
                >
                    LinkedIn
                </a>


                <a
                    class="btn btn-primary btn-sm"
                    id="navCvBtn"
                    href="${safe(PROFIL.personal.cv)}"
                    download
                    data-fr="↓ CV"
                    data-en="↓ Resume"
                >
                    ↓ CV
                </a>

            </div>

        </div>

    </header>


    <main>


        <!-- HERO -->

        <section
            class="hero wrap"
            style="border-top:none;"
        >

            <div class="hero-ia-ribbon hero-in d1">

                <div class="ia-badge">

                    <span class="ia-icon">
                        ⚡
                    </span>

                    <span>
                        AI Engineer
                    </span>

                    <span class="ia-line"></span>

                    <span
                        data-fr="${safe(PROFIL.personal.titleFr)}"
                        data-en="${safe(PROFIL.personal.titleEn)}"
                    >
                        ${safe(PROFIL.personal.titleFr)}
                    </span>

                </div>


                <div class="status-pill">

                    <span class="pulse"></span>

                    <span
                        data-fr="${safe(PROFIL.personal.availabilityFr)}"
                        data-en="${safe(PROFIL.personal.availabilityEn)}"
                    >
                        ${safe(PROFIL.personal.availabilityFr)}
                    </span>

                </div>

            </div>


            <h1 class="name hero-in d2">
                ${heroName()}
            </h1>


            <div
                class="role-line hero-in d3"
                id="roleLine"
            >
                &gt;

                <span id="roleTyped"></span>

                <span class="caret"></span>
            </div>


            <p
                class="hero-desc hero-in d4"
                data-fr="${safe(PROFIL.descriptionFr)}"
                data-en="${safe(PROFIL.descriptionEn)}"
            >
                ${safe(PROFIL.descriptionFr)}
            </p>


            <div class="hero-actions hero-in d5">

                <a
                    class="btn btn-primary"
                    id="cvBtn"
                    href="${safe(PROFIL.personal.cv)}"
                    download
                    data-fr="↓ Télécharger le CV"
                    data-en="↓ Download Resume"
                >
                    ↓ Télécharger le CV
                </a>


                <a
                    class="btn btn-outline"
                    id="mailBtn"
                    href="#"
                    data-fr="✉ Email direct"
                    data-en="✉ Direct Email"
                >
                    ✉ Email direct
                </a>


                <a
                    class="btn"
                    id="waBtn"
                    href="#"
                    target="_blank"
                    rel="noopener"
                >
                    ↗ WhatsApp
                </a>

            </div>


            <div class="metric-strip hero-in d6">

                ${renderStats()}

            </div>

        </section>


        <!-- PROFIL -->

        <section id="profil">

            <div class="wrap">

                <div class="eyebrow">

                    <span class="dot"></span>

                    <span
                        data-fr="profil"
                        data-en="profile"
                    >
                        profil
                    </span>

                </div>


                <div class="readme reveal">

                    <div
                        class="readme-bar"
                        data-fr="profil.md — ${safe(PROFIL.personal.titleFr)}"
                        data-en="profile.md — ${safe(PROFIL.personal.titleEn)}"
                    >
                        profil.md — ${safe(PROFIL.personal.titleFr)}
                    </div>


                    <div class="readme-body">

                        <div class="profile-photo">

                            <div class="ph-inner">

                                <img
                                    src="${safe(PROFIL.personal.photo)}"
                                    alt="Photo de ${safe(PROFIL.personal.name)}"
                                    id="profilePhotoImg"
                                    onerror="this.style.display='none';document.getElementById('photoFallback').style.display='flex';"
                                >

                                <div
                                    class="ph-fallback"
                                    id="photoFallback"
                                >
                                    ${safe(PROFIL.personal.initials)}
                                </div>

                            </div>

                        </div>


                        <div class="readme-text">

                            <div class="profil-name">
                                ${safe(PROFIL.personal.name)}
                            </div>


                            <div class="role-line profil-role">

                                <span id="roleTypedProfil"></span>

                                <span class="caret"></span>

                            </div>


                            <p
                                data-fr="${safe(PROFIL.descriptionFr)}"
                                data-en="${safe(PROFIL.descriptionEn)}"
                            >
                                ${safe(PROFIL.descriptionFr)}
                            </p>


                            <div class="readme-chips">

                                ${PROFIL.tags.map(tag => `
                                    <span class="tag">
                                        ${safe(tag)}
                                    </span>
                                `).join("")}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- EXPERIENCE -->

        <section id="experience">

            <div class="wrap">

                <div class="section-head reveal">

                    <div>

                        <div class="eyebrow">

                            <span class="dot"></span>

                            <span
                                data-fr="historique"
                                data-en="history"
                            >
                                historique
                            </span>

                        </div>


                        <h2
                            class="title"
                            data-fr="Expérience professionnelle"
                            data-en="Professional Experience"
                        >
                            Expérience professionnelle
                        </h2>

                    </div>


                    <span class="section-tag">

                        ${EXPERIENCES.length}

                        <span
                            data-fr=" expériences"
                            data-en=" experiences"
                        >
                            expériences
                        </span>

                    </span>

                </div>


                <div class="timeline reveal">

                    ${renderExperiences()}

                </div>

            </div>

        </section>


        <!-- PROJETS -->

        <section id="projets">

            <div class="wrap">

                <div class="section-head reveal">

                    <div>

                        <div class="eyebrow">

                            <span class="dot"></span>

                            <span
                                data-fr="portfolio technique"
                                data-en="technical portfolio"
                            >
                                portfolio technique
                            </span>

                        </div>


                        <h2
                            class="title"
                            data-fr="Projets"
                            data-en="Projects"
                        >
                            Projets
                        </h2>

                    </div>


                    <span class="section-tag">

                        ${PROJETS.length}

                        <span
                            data-fr=" projets"
                            data-en=" projects"
                        >
                            projets
                        </span>

                    </span>

                </div>


                <div
                    class="proj-grid reveal"
                    id="projGrid"
                >

                    ${renderProjects()}

                </div>

            </div>

        </section>


        <!-- COMPÉTENCES -->

        <section id="competences">

            <div class="wrap">

                <div class="section-head reveal">

                    <div>

                        <div class="eyebrow">

                            <span class="dot"></span>

                            stack

                        </div>


                        <h2
                            class="title"
                            data-fr="Compétences"
                            data-en="Skills"
                        >
                            Compétences
                        </h2>

                    </div>

                </div>


                <div class="skill-grid reveal">

                    ${renderSkills()}

                </div>

            </div>

        </section>


        <!-- FORMATION -->

        <section id="formation">

            <div class="wrap">

                <div class="section-head reveal">

                    <div>

                        <div class="eyebrow">

                            <span class="dot"></span>

                            <span
                                data-fr="dossier"
                                data-en="credentials"
                            >
                                dossier
                            </span>

                        </div>


                        <h2
                            class="title"
                            data-fr="Formation, certifications & langues"
                            data-en="Education, Certifications & Languages"
                        >
                            Formation, certifications & langues
                        </h2>

                    </div>

                </div>


                <div class="grid3 reveal">


                    <!-- CERTIFICATIONS -->

                    <div class="panel cert-panel">

                        <h4>

                            <span
                                data-fr="Certifications"
                                data-en="Certifications"
                            >
                                Certifications
                            </span>

                            — ${PROFIL.certifications.length}

                        </h4>


                        <div class="cert-grid">

                            ${renderCertifications()}

                        </div>

                    </div>


                    <!-- FORMATION -->

                    <div class="panel">

                        <h4
                            data-fr="Formation"
                            data-en="Education"
                        >
                            Formation
                        </h4>

                        ${renderEducation()}

                    </div>


                    <!-- LANGUES -->

                    <div class="panel">

                        <h4
                            data-fr="Langues"
                            data-en="Languages"
                        >
                            Langues
                        </h4>

                        ${renderLanguages()}

                    </div>

                </div>

            </div>

        </section>


        <!-- CONTACT -->

        <section id="contact">

            <div class="wrap">

                <div class="contact-band reveal">

                    <div>

                        <div class="eyebrow">

                            <span class="dot"></span>

                            <span
                                data-fr="prochaine étape"
                                data-en="next step"
                            >
                                prochaine étape
                            </span>

                        </div>


                        <h2
                            data-fr="${safe(CONTACT.titleFr)}"
                            data-en="${safe(CONTACT.titleEn)}"
                        >
                            ${safe(CONTACT.titleFr)}
                        </h2>


                        <p
                            data-fr="${safe(CONTACT.descriptionFr)}"
                            data-en="${safe(CONTACT.descriptionEn)}"
                        >
                            ${safe(CONTACT.descriptionFr)}
                        </p>

                    </div>


                    <div class="contact-actions">

                        <a
                            class="btn btn-outline"
                            id="mailBtn2"
                            href="#"
                        >
                            ✉ ${safe(CONTACT.email)}
                        </a>


                        <a
                            class="btn btn-primary"
                            id="waBtn2"
                            href="#"
                            target="_blank"
                            rel="noopener"
                        >
                            ↗ WhatsApp ${safe(CONTACT.phone)}
                        </a>


                        <a
                            class="btn"
                            id="cvBtn2"
                            href="${safe(PROFIL.personal.cv)}"
                            download
                            data-fr="↓ Télécharger le CV (PDF)"
                            data-en="↓ Download Resume (PDF)"
                        >
                            ↓ Télécharger le CV (PDF)
                        </a>


                        <a
                            class="btn btn-ghost"
                            data-linkedin
                            href="${safe(CONTACT.linkedin)}"
                            target="_blank"
                            rel="noopener"
                            data-fr="↗ Profil LinkedIn"
                            data-en="↗ LinkedIn Profile"
                        >
                            ↗ Profil LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </section>

    </main>


    <!-- FOOTER -->

    <footer
        data-fr="${safe(PROFIL.personal.name)} — ${safe(PROFIL.personal.locationFr)}"
        data-en="${safe(PROFIL.personal.name)} — ${safe(PROFIL.personal.locationEn)}"
    >
        ${safe(PROFIL.personal.name)}
        —
        ${safe(PROFIL.personal.locationFr)}
    </footer>


    <!-- CHATBOT -->

    <button
        class="ai-fab"
        id="aiFab"
    >

        <span class="dot2"></span>

        <span
            data-fr="Demander à l'assistant IA"
            data-en="Ask the AI assistant"
        >
            Demander à l'assistant IA
        </span>

    </button>


    <div
        class="ai-panel"
        id="aiPanel"
    >

        <div class="ai-head">

            <div class="ai-head-id">

                <div class="ai-avatar">
                    🤖
                </div>


                <div>

                    <div class="t">
                        Assistant — ${safe(PROFIL.personal.name)}
                    </div>


                    <div class="sub">

                        <span
                            style="
                                width:6px;
                                height:6px;
                                border-radius:50%;
                                background:var(--cyan);
                                display:inline-block;
                            "
                        ></span>

                        <span
                            data-fr="En ligne · réponses fondées sur le profil"
                            data-en="Online · answers based on the profile"
                        >
                            En ligne · réponses fondées sur le profil
                        </span>

                    </div>

                </div>

            </div>


            <button
                class="ai-send"
                id="aiClose"
                type="button"
                aria-label="Fermer"
            >
                ✕
            </button>

        </div>


        <div
            class="ai-body"
            id="aiBody"
        >

            <div class="msg-row">

                <div class="msg-avatar">
                    🤖
                </div>


                <div class="msg-col">

                    <div
                        class="msg bot"
                        id="aiFirstMsg"
                        data-fr="${safe(CONTACT.chatbot.welcomeFr)}"
                        data-en="${safe(CONTACT.chatbot.welcomeEn)}"
                    >
                        ${safe(CONTACT.chatbot.welcomeFr)}
                    </div>

                </div>

            </div>

        </div>


        <div
            class="ai-suggest"
            id="aiSuggest"
        >

            <button
                data-q-fr="Quels projets en RAG ou LLM avez-vous réalisés ?"
                data-q-en="What RAG or LLM projects have you worked on?"
                data-fr="Projets RAG / LLM"
                data-en="RAG / LLM projects"
            >
                Projets RAG / LLM
            </button>


            <button
                data-q-fr="Êtes-vous disponible immédiatement ?"
                data-q-en="Are you available immediately?"
                data-fr="Disponibilité"
                data-en="Availability"
            >
                Disponibilité
            </button>


            <button
                data-q-fr="Quelles sont vos compétences principales ?"
                data-q-en="What are your main skills?"
                data-fr="Compétences"
                data-en="Skills"
            >
                Compétences
            </button>

        </div>


        <div class="ai-input-row">

            <input
                type="text"
                id="aiInput"
                data-fr-ph="Écrivez votre question..."
                data-en-ph="Type your question..."
                placeholder="Écrivez votre question..."
            >


            <button
                class="ai-send"
                id="aiSend"
                type="button"
                aria-label="Envoyer"
            >
                ➤
            </button>

        </div>

    </div>

`;