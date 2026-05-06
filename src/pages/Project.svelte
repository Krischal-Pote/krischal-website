<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";

  let ProjectData = [
    {
      id: 1,
      projectName: "Hamro Patro Bank Rates",
      desc: "Bank rates viewer, scheme comparison, EMI calculator and investment doubling tools for Nepali banks.",
      imageUrl: "/logo/logo bank rate.png",
      tags: ["React", "PHP", "REST API"],
      url: "https://bank-rates.hamropatro.com/",
    },
    {
      id: 2,
      projectName: "Hamro Health",
      desc: "Healthcare app with doctor profile sharing via QR code, user preference customization, and clipboard copy.",
      imageUrl: "/logo/health.png",
      tags: ["React", "QR Code", "UX"],
      url: "https://health.hamropatro.com/",
    },
    {
      id: 3,
      projectName: "Hamro Jyotish",
      desc: "Astrology platform with testimonial integration, attractive layouts, and direct Jyotish expert call feature.",
      imageUrl: "/logo/neww.png",
      tags: ["Svelte", "PHP"],
      url: "https://jyotishsewa.hamropatro.com/j_c_np",
    },
    {
      id: 4,
      projectName: "Let's Read",
      desc: "Children's literacy app with letter tracing, English Decodables landing page, and a custom page builder for super users.",
      imageUrl: "/logo/Letsread.png",
      tags: ["React", "Page Builder", "Education"],
      url: "https://www.letsreadasia.org/",
    },
  ];

  onMount(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (e) => e.forEach((el) => { if (el.isIntersecting) { el.target.classList.add("visible"); obs.unobserve(el.target); } }),
      { threshold: 0.08 }
    );
    reveals.forEach((r) => obs.observe(r));
  });
</script>

<main class="page-wrap">
  <section class="page-header reveal">
    <div class="section-label">// Projects</div>
    <h1 class="section-title">Featured Work</h1>
    <p class="section-sub">
      Projects I've built over the years — shipped at Hamro Patro and beyond. Many reflect real-world product problems solved with clean, performant code.
    </p>
  </section>

  <div class="projects-grid reveal">
    {#each ProjectData as project, i}
      <Link to={`/projects/${project.id}`} class="project-card">
        <div class="project-num">0{i + 1}</div>
        <div class="project-logo-wrap">
          <img src={project.imageUrl} alt={project.projectName} class="project-logo" />
        </div>
        <div class="project-body">
          <div class="project-name">{project.projectName}</div>
          <div class="project-desc">{project.desc}</div>
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="project-tag">{tag}</span>
            {/each}
          </div>
        </div>
        <div class="project-arrow">→</div>
      </Link>
    {/each}
  </div>
</main>

<style>
  .page-wrap {
    max-width: 80rem;
    margin: 0 auto;
    padding: 8rem 4rem 4rem;
  }
  .page-header { margin-bottom: 3.5rem; }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }

  :global(.project-card) {
    background: var(--surface);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: var(--text);
    position: relative;
    overflow: hidden;
    transition: background 0.2s;
  }
  :global(.project-card::before) {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }
  :global(.project-card:hover) { background: #10161f; }
  :global(.project-card:hover::before) { transform: scaleX(1); }

  .project-num {
    font-family: var(--font-display);
    font-size: 3rem;
    color: var(--border);
    line-height: 1;
    transition: color 0.3s;
  }
  :global(.project-card:hover) .project-num { color: rgba(74,240,162,0.12); }

  .project-logo-wrap {
    width: 52px; height: 52px;
    background: #121820;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px;
    overflow: hidden;
  }
  .project-logo { width: 100%; height: 100%; object-fit: contain; }

  .project-name {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--text);
  }
  .project-desc {
    font-size: 0.84rem;
    color: var(--text-dim);
    line-height: 1.65;
    flex: 1;
  }
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .project-tag {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
    background: rgba(124,106,255,0.07);
    border: 1px solid rgba(124,106,255,0.2);
    color: var(--accent2);
    border-radius: 2px;
  }
  .project-arrow {
    font-size: 1.2rem;
    color: var(--muted);
    align-self: flex-end;
    transition: color 0.2s, transform 0.2s;
  }
  :global(.project-card:hover) .project-arrow {
    color: var(--accent);
    transform: translateX(4px);
  }

  @media (max-width: 700px) {
    .page-wrap { padding: 6rem 1.5rem 3rem; }
    .projects-grid { grid-template-columns: 1fr; }
  }
</style>