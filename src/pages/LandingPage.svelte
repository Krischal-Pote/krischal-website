<script>
  import { onMount } from "svelte";
  import Job from "../components/Job.svelte";
  import ProfileImage from "../../public/profile.png";

  let posts = ["Full Stack Developer", "Frontend Engineer", "Software Engineer"];
  let currentPost = "";
  let postIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  let SocialInfo = [
    { name: "GitHub", url: "https://github.com/Krischal-Pote" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/krischal-om-pote-271283244/" },
  ];

  let stack = ["React", "TypeScript", "Svelte", "Next.js", "Tailwind CSS", "PHP", "Laravel", "Node.js"];

  onMount(() => {
    typeWriter();
    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    reveals.forEach((r) => obs.observe(r));
  });

  function typeWriter() {
    const fullPost = posts[postIndex];
    if (!isDeleting) {
      currentPost = fullPost.slice(0, letterIndex++);
      if (letterIndex > fullPost.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
        return;
      }
    } else {
      currentPost = fullPost.slice(0, letterIndex--);
      if (letterIndex === 0) {
        isDeleting = false;
        postIndex = (postIndex + 1) % posts.length;
      }
    }
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
</script>

<main class="page-wrap">
  <section class="hero">
    <div class="hero-left">
   
      <h1 class="hero-name">
        <span class="typewriter">{currentPost}<span class="caret">|</span></span>
      </h1>
      <h2 class="hero-sub">Krischal Om Pote</h2>

      <p class="hero-bio">
        I'm a dedicated web developer passionate about creating outstanding online experiences. With a strong foundation in computer science and years of practical experience, I've honed my skills in both front-end and back-end web development.
      </p>

      <ul class="social-list">
        {#each SocialInfo as { name, url }}
          <li>
            <a href={url} target="_blank" rel="noreferrer noopener" class="social-link">
              {name} <span class="arrow">→</span>
            </a>
          </li>
        {/each}
      </ul>

      <div class="hero-actions">
        <a href="/projects" class="btn-primary">View Projects</a>
        <a href="mailto:crischal1234@gmail.com" class="btn-outline">Get in Touch</a>
      </div>
    </div>

    <div class="hero-right">
      <div class="profile-wrap">
        <img src={ProfileImage} alt="Krischal Om Pote" class="profile-img" width="380" height="460" />
      </div>

      <div class="stack-card">
        <div class="stack-label">// tech stack</div>
        <div class="stack-pills">
          {#each stack as s, i}
            <span class="pill" class:active={i < 4}>{s}</span>
          {/each}
        </div>
      </div>
    </div>
        <div class="stats-row">
          <div class="stat">
            <div class="stat-n">3+</div>
            <div class="stat-l">Years Exp.</div>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <div class="stat-n">10+</div>
            <div class="stat-l">Projects</div>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <div class="stat-n">3</div>
            <div class="stat-l">Companies</div>
          </div>
        </div>
  </section>

  <div class="divider"></div>

  <!-- JOB SECTION -->
  <div class="job-wrap">
    <Job />
  </div>
</main>

<style>

  .page-wrap {
    max-width: 95rem;
    margin: 0 auto;
    padding: 0 4rem;
    padding-top: 8rem;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 85vh;
    padding-bottom: 5rem;
    position: relative;
  }
  .hero::after {
    content: '';
    position: absolute;
    right: -60px; top: 50%;
    transform: translateY(-50%);
    width: 500px; height: 500px;
    background: radial-gradient(ellipse, rgba(74,240,162,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(74,240,162,0.08);
    border: 1px solid rgba(74,240,162,0.2);
    padding: 0.35rem 0.9rem;
    border-radius: 100px;
    font-size: 0.73rem;
    color: var(--accent);
    font-family: var(--font-mono);
    letter-spacing: 0.06em;
    margin-bottom: 1.75rem;
    animation: fadeUp 0.6s ease both;
  }
  .tag-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1.05;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
  color: var(--accent);
  animation: fadeUp 0.6s 0.1s ease both;
  /* min-height: 11rem;   */
  display: flex;
  align-items: flex-start;
}
  .typewriter { display: block; }
  .caret {
    color: var(--accent2);
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  .hero-sub {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--text-dim);
    font-weight: 400;
    margin-bottom: 1.5rem;
    animation: fadeUp 0.6s 0.15s ease both;
  }

  .hero-bio {
    color: var(--text-dim);
    line-height: 1.75;
    font-size: 0.95rem;
    max-width: 440px;
    margin-bottom: 2rem;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .social-list {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeUp 0.6s 0.25s ease both;
  }
  .social-link {
    font-size: 0.85rem;
    color: var(--text-dim);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    border-bottom: 1px solid transparent;
    transition: color 0.2s, border-color 0.2s;
    padding-bottom: 2px;
  }
  .social-link:hover { color: var(--accent); border-color: var(--accent); }
  .arrow { transition: transform 0.2s; }
  .social-link:hover .arrow { transform: translateX(4px); }

  .hero-actions {
    display: flex;
    gap: 1rem;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .btn-primary {
    background: var(--accent);
    color: #080b10;
    padding: 0.8rem 1.75rem;
    border-radius: 3px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.88rem;
    border: 1px solid var(--accent);
    transition: all 0.2s;
  }
  .btn-primary:hover { background: transparent; color: var(--accent); }
  .btn-outline {
    color: var(--text-dim);
    padding: 0.8rem 1.75rem;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.88rem;
    border: 1px solid var(--border);
    transition: all 0.2s;
  }
  .btn-outline:hover { border-color: var(--text-dim); color: var(--text); }

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;       
  flex-direction: column;
  gap: 1.25rem;
  animation: fadeUp 0.6s 0.35s ease both;
}

  .profile-wrap {
    position: relative;
    display: inline-block;
  }
  .profile-img {
    width: 100%;
    max-width: 380px;
    height: 380px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface);
    display: block;
  }
  .profile-badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(8,11,16,0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(74,240,162,0.3);
    border-radius: 100px;
    padding: 0.35rem 0.9rem;
    font-size: 0.72rem;
    color: var(--accent);
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .badge-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .stack-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.25rem 1.5rem;
  }
  .stack-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.75rem;
  }
  .stack-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }

  .stats-row {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .stat { text-align: center; }
  .stat-n {
    font-family: var(--font-display);
    font-size: 2.25rem;
    color: var(--accent);
    line-height: 1;
  }
  .stat-l {
    font-size: 0.72rem;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.25rem;
    font-family: var(--font-mono);
  }
  .stat-div {
    width: 1px;
    height: 2.5rem;
    background: var(--border);
  }

  .divider {
    height: 1px;
    background: var(--border);
    margin: 2rem 0;
  }

  .job-wrap { padding-bottom: 2rem; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: none; }
  }

@media (max-width: 900px) {
  .page-wrap { padding: 0 1.5rem; padding-top: 6rem; }
  .hero { grid-template-columns: 1fr; min-height: auto; }
  .profile-img { max-width: 100%; height: 260px; }
}
</style>