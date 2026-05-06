<script>
  import ProfileImage from "../../public/profile.png";
  import { onMount } from "svelte";

  let Expertise = ["HTML", "CSS", "JS", "React", "Svelte", "PHP", "Laravel", "Tailwind CSS", "Next.js", "TypeScript", "Git", "REST APIs"];

  let skills = [
    { name: "React / TypeScript", pct: 92 },
    { name: "Svelte", pct: 85 },
    { name: "Tailwind CSS", pct: 90 },
    { name: "PHP / Laravel", pct: 78 },
    { name: "Next.js", pct: 80 },
    { name: "REST API Integration", pct: 88 },
  ];

  onMount(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    reveals.forEach((r) => obs.observe(r));
  });
</script>

<main class="page-wrap">

  <!-- ABOUT HEADER -->
  <section class="about-hero reveal">
    <div class="section-label">// About Me</div>
    <h1 class="section-title">The Person<br>Behind the Code</h1>
  </section>

  <!-- PROFILE GRID -->
  <section class="profile-grid reveal">
    <div class="profile-left">
      <img src={ProfileImage} alt="Krischal Om Pote" class="profile-img" />
      <a href="/Krischal Om Pote.pdf" download="Krischal_Om_Pote.pdf" class="dl-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resumé
      </a>
      <a href="mailto:crischal1234@gmail.com" class="email-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        crischal1234@gmail.com
      </a>
    </div>

    <div class="profile-right">
      <div class="bio-card">
        <div class="bio-card-header">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="file-name">about.txt</span>
        </div>
        <div class="bio-text">
          <p>Hello, I'm <strong>Krischal Om Pote</strong>, and I'm truly passionate about the world of web development. With a strong academic foundation in computer science and several years of hands-on experience, I've developed expertise in both front-end and back-end web development.</p>
          <p>I've honed my skills in a wide range of web technologies, including HTML, CSS, JavaScript, and various frameworks and libraries. Building websites and web applications is not just my job — it's my creative outlet.</p>
          <p>One of the things that sets me apart is my commitment to staying on the cutting edge of web development trends. I ensure that every project I work on is not only visually appealing but also highly functional and responsive.</p>
          <p>Beyond code, I'm an anime lover, a movie buff, and an avid football fan who enjoys immersing himself in the excitement of the game. 🎌⚽</p>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- EXPERTISE -->
  <section class="expertise-section reveal">
    <div class="section-label">// Expertise</div>
    <h2 class="section-title">My Arsenal</h2>
    <p class="section-sub">Technologies and tools I work with regularly. In no particular order.</p>

    <ul class="expertise-pills">
      {#each Expertise as skill}
        <li class="pill">{skill}</li>
      {/each}
    </ul>
  </section>

  <div class="divider"></div>

  <!-- SKILL BARS -->
  <section class="skills-section reveal">
    <div class="section-label">// Proficiency</div>
    <h2 class="section-title">Skill Levels</h2>

    <div class="skill-bars">
      {#each skills as s}
        <div class="skill-item">
          <div class="skill-top">
            <span class="skill-name">{s.name}</span>
            <span class="skill-pct">{s.pct}%</span>
          </div>
          <div class="skill-track">
            <div class="skill-fill" style="width:{s.pct}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </section>

</main>

<style>
  .page-wrap {
    max-width: 80rem;
    margin: 0 auto;
    padding: 8rem 4rem 4rem;
  }

  /* HERO */
  .about-hero { margin-bottom: 4rem; }

  /* PROFILE GRID */
  .profile-grid {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 3.5rem;
    align-items: start;
    margin-bottom: 5rem;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .profile-img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface);
  }

  .dl-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--accent);
    color: #080b10;
    padding: 0.75rem 1.25rem;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    border: 1px solid var(--accent);
    transition: all 0.2s;
  }
  .dl-btn:hover { background: transparent; color: var(--accent); }

  .email-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .email-link:hover { color: var(--accent); }

  /* BIO CARD */
  .bio-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .bio-card-header {
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .file-name {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    margin-left: 0.5rem;
  }
  .dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .r { background: #ff5f57; }
  .y { background: #ffbd2e; }
  .g { background: #28c840; }

  .bio-text {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }
  .bio-text p {
    color: var(--text-dim);
    font-size: 0.93rem;
    line-height: 1.8;
  }
  .bio-text :global(strong) { color: var(--text); font-weight: 500; }

  /* EXPERTISE */
  .expertise-section { padding: 4rem 0; }
  .expertise-pills {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  /* SKILL BARS */
  .skills-section { padding: 4rem 0; }
  .skill-bars {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .skill-item {}
  .skill-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  }
  .skill-name { font-size: 0.88rem; color: var(--text); }
  .skill-pct { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); }
  .skill-track {
    height: 2px;
    background: var(--border);
    border-radius: 2px;
    overflow: hidden;
  }
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    animation: barGrow 1.4s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes barGrow {
    from { transform: scaleX(0); transform-origin: left; }
    to { transform: scaleX(1); }
  }

  .divider { height: 1px; background: var(--border); }

  @media (max-width: 800px) {
    .page-wrap { padding: 6rem 1.5rem 3rem; }
    .profile-grid { grid-template-columns: 1fr; }
    .skill-bars { grid-template-columns: 1fr; }
  }
</style>