<script>
  let WorkingData = [
      {
      title: "Software Engineer Lead",
      logo: "/logo/astergazelogo.svg",
      company: "Aster Gaze",
      dateStart: "Aug 2025",
      dateEnd: "Present",
      url: "https://astergaze.com/",
      desc: "Our approach hasn't changed: we still treat every project like it's our own. We still care more about solving real problems than following trends. And we still believe the best products come from teams that genuinely care about the people using them",
    },
    {
      title: "Software Engineer",
      logo: "/logo/hamropatro.png",
      company: "Hamro Patro",
      dateStart: "Feb 2023",
      dateEnd: "Feb 2025",
      url: "https://www.hamropatro.com/",
      desc: "Building and shipping features for Hamro Patro's web ecosystem — including Bank Rates, Hamro Health, Hamro Jyotish, and Let's Read — using React, Svelte, and PHP.",
    },
    {
      title: "Laravel Developer (Intern)",
      company: "Young Minds",
      dateStart: "Dec 2022",
      dateEnd: "Jan 2023",
      logo: "/logo/download.png",
      url: "https://www.youngminds.com.np/",
      desc: "Developed backend features using Laravel, contributed to internal tools and REST API design.",
    },
    {
      title: "Program Coordinator (Intern)",
      logo: "/logo/deerwalk_compware_ltd_logo.jpeg",
      company: "Deerwalk Compware Ltd.",
      dateStart: "Jul 2022",
      dateEnd: "Nov 2022",
      url: "https://www.deerwalkcompware.com/",
      desc: "Coordinated tech programs and assisted in internal project management and development workflows.",
    },
  ];
</script>

<section class="exp-section">
  <div class="exp-header reveal">
    <div class="section-label">// Experience</div>
    <h2 class="section-title">Where I've Worked</h2>
  </div>

  <div class="exp-list reveal">
    {#each WorkingData as job}
      <div class="exp-item">
        <a href={job.url} target="_blank" rel="noreferrer noopener" class="exp-logo">
          <img src={job.logo} alt={job.company} width="48" height="48" />
        </a>
        <div class="exp-content">
          <div class="exp-company">{job.company}</div>
          <div class="exp-role">{job.title}</div>
          <div class="exp-desc">{job.desc}</div>
        </div>
        <div class="exp-date">{job.dateStart} — {job.dateEnd}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .exp-section {
    padding: 5rem 0;
  }
  .exp-header {
    margin-bottom: 2.5rem;
  }
  .exp-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .exp-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 1.75rem 2rem;
    display: grid;
    grid-template-columns: 48px 1fr auto;
    gap: 1.5rem;
    align-items: start;
    transition: border-color 0.2s, transform 0.2s;
  }
  .exp-item:hover {
    border-color: rgba(74,240,162,0.3);
    transform: translateX(4px);
  }
  .exp-logo {
    width: 48px; height: 48px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    background: #121820;
    flex-shrink: 0;
  }
  .exp-logo img { 
 width: 100%; 
  height: 100%; 
  object-fit: contain;  
  padding: 6px; 
   }
  .exp-company {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  .exp-role {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 0.5rem;
  }
  .exp-desc {
    font-size: 0.84rem;
    color: var(--text-dim);
    line-height: 1.65;
  }
  .exp-date {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    white-space: nowrap;
    padding-top: 0.25rem;
  }

  @media (max-width: 640px) {
    .exp-item { grid-template-columns: 40px 1fr; }
    .exp-date { grid-column: 2; margin-top: -0.5rem; }
  }
</style>