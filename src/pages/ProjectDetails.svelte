<script>
  import { onMount } from "svelte";
  let id;

  const projects = {
    "1": {
      title: "Hamro Patro Bank Rates",
      url: "https://bank-rates.hamropatro.com/",
      image: "/okok.png",
      tags: ["React", "PHP", "REST API", "Financial Tools"],
      summary: "A comprehensive financial tool for Nepali users to view and compare bank rates, run EMI calculations, and plan investments.",
      points: [
        "Bank Rates Viewing: Developed functionality to display current bank rates, ensuring users have access to up-to-date financial information from Nepali banks.",
        "Bank Scheme Comparison: Created a feature enabling users to compare schemes offered by various Nepali banks, empowering them to make informed financial decisions.",
        "EMI Calculator: Designed and integrated an EMI calculator to help users estimate their equated monthly installments based on loan amount, interest rate, and tenure.",
        "Interest Rate Tools: Implemented tools for calculating the rate required for doubling an investment and determining the time it takes for an investment to double.",
      ],
    },
    "2": {
      title: "Hamro Health",
      url: "https://health.hamropatro.com/",
      image: "/health photo.png",
      tags: ["React", "QR Code", "Healthcare", "UX"],
      summary: "A healthcare accessibility app with smart doctor discovery, QR-based profile sharing, and user-customizable health preferences.",
      points: [
        "User Preference Customization: Designed and integrated functionality for users to customize their preferences within the app, including weight and height units, enhancing user experience.",
        "Doctor Profile Sharing: Developed a feature allowing users to share doctor profiles with others via QR code scanning or clipboard copy.",
        "QR Code Integration: Integrated QR code generation and scanning capabilities within the app to facilitate seamless sharing of doctor profiles.",
        "Clipboard Copy Functionality: Implemented functionality to copy doctor profiles to the clipboard for easy sharing via messaging apps or other communication channels.",
      ],
    },
    "3": {
      title: "Hamro Jyotish",
      url: "https://jyotishsewa.hamropatro.com/j_c_np",
      image: "/jyotish photo.png",
      tags: ["Svelte", "PHP", "UI Design"],
      summary: "An astrology services platform connecting users with Jyotish experts via call, featuring testimonial displays and trust-building layouts.",
      points: [
        "Testimonial Integration: Designed and implemented a feature to display user testimonials prominently on the Hamro Jyotish website, showcasing authentic feedback and experiences.",
        "Attractive Testimonial Layout: Created visually appealing layouts for testimonials, incorporating engaging design elements and compelling copy to capture users' attention.",
        "Jyotish Call Integration: Integrated a feature enabling users to directly connect with Jyotish experts via phone or video call for personalized astrological consultations.",
      ],
    },
    "4": {
      title: "Let's Read",
      url: "https://www.letsreadasia.org/",
      image: "/letsread_homepage.png",
      tags: ["React", "Education", "Page Builder", "CMS"],
      summary: "A children's literacy platform with interactive letter tracing, an English Decodables section, and a flexible page builder for content managers.",
      points: [
        "Letter Tracing Integration: Designed and implemented a feature for letter tracing for young users, making literacy learning interactive and engaging.",
        "Attractive English Decodables Landing Page: Created a visually appealing landing page for English Decodables, adding 30 decodable books from around 10 countries.",
        "English Decodables Page Builder: Built a page builder for English Decodables, allowing super users to customize the layout and content of their choice.",
      ],
    },
  };

  onMount(() => {
    const path = location.pathname;
    const parts = path.split("/");
    id = parts[parts.length - 1];
  });

  $: project = projects[id];
</script>

{#if project}
<main class="page-wrap">
  <div class="project-detail reveal">

    <!-- Header -->
    <div class="detail-header">
      <div>
        <div class="section-label">// Project</div>
        <h1 class="detail-title">{project.title}</h1>
        <p class="detail-summary">{project.summary}</p>
        <div class="detail-tags">
          {#each project.tags as tag}
            <span class="detail-tag">{tag}</span>
          {/each}
        </div>
      </div>
      <a href={project.url} target="_blank" rel="noreferrer noopener" class="explore-btn">
        Explore Live →
      </a>
    </div>

    <!-- Image -->
    <div class="detail-image-wrap">
      <img src={project.image} alt={project.title} class="detail-image" />
    </div>

    <!-- Features -->
    <div class="features-section">
      <div class="features-label">// Features & Contributions</div>
      <ul class="features-list">
        {#each project.points as point}
          {@const [title, ...rest] = point.split(": ")}
          <li class="feature-item">
            <div class="feature-icon">→</div>
            <div>
              <span class="feature-title">{title}:</span>
              <span class="feature-desc"> {rest.join(": ")}</span>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Back -->
    <a href="/projects" class="back-link">← Back to Projects</a>
  </div>
</main>
{/if}

<style>
  .page-wrap {
    max-width: 72rem;
    margin: 0 auto;
    padding: 8rem 4rem 4rem;
  }

  .project-detail {}

  /* HEADER */
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  .detail-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1;
    color: var(--text);
    margin-bottom: 1rem;
  }
  .detail-summary {
    color: var(--text-dim);
    font-size: 1rem;
    line-height: 1.7;
    max-width: 560px;
    margin-bottom: 1.25rem;
  }
  .detail-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .detail-tag {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    padding: 0.25rem 0.6rem;
    background: rgba(74,240,162,0.06);
    border: 1px solid rgba(74,240,162,0.2);
    color: var(--accent);
    border-radius: 2px;
  }

  .explore-btn {
    flex-shrink: 0;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 3px;
    font-size: 0.88rem;
    font-weight: 500;
    transition: all 0.2s;
    white-space: nowrap;
    margin-top: 1rem;
  }
  .explore-btn:hover { border-color: var(--accent); color: var(--accent); }

  /* IMAGE */
  .detail-image-wrap {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border);
    margin-bottom: 3rem;
  }
  .detail-image {
    width: 100%;
    height: auto;
    display: block;
  }

  /* FEATURES */
  .features-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 2rem;
    margin-bottom: 2.5rem;
  }
  .features-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
  }
  .features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .feature-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .feature-icon {
    color: var(--accent);
    font-size: 0.9rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
    font-family: var(--font-mono);
  }
  .feature-title {
    font-weight: 500;
    color: var(--text);
    font-size: 0.9rem;
  }
  .feature-desc {
    color: var(--text-dim);
    font-size: 0.88rem;
    line-height: 1.65;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.85rem;
    font-family: var(--font-mono);
    transition: color 0.2s, gap 0.2s;
  }
  .back-link:hover { color: var(--accent); }

  @media (max-width: 700px) {
    .page-wrap { padding: 6rem 1.5rem 3rem; }
    .detail-header { flex-direction: column; }
    .explore-btn { width: 100%; text-align: center; }
  }
</style>