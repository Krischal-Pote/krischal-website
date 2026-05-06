<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";

  let scrolled = false;

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 40; };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });
</script>

<header class="nav" class:scrolled>
  <div class="nav-inner">
    <Link to="/" class="nav-logo">KOP<span>.</span>COM</Link>
    <nav>
      <ul class="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(8, 11, 16, 0.6);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
    padding: 1.5rem 4rem;
  }
  .nav.scrolled { border-color: var(--border); }

  .nav-inner {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(.nav-logo) {
    font-family: var(--font-display);
    font-size: 1.6rem;
    letter-spacing: 0.05em;
    color: var(--text) !important;
    text-decoration: none;
  }
  :global(.nav-logo span) { color: var(--accent); }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  :global(.nav-links a) {
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  :global(.nav-links a:hover) { color: var(--accent); }

  :global(.nav-cta) {
    background: var(--accent) !important;
    color: #080b10 !important;
    padding: 0.5rem 1.25rem !important;
    border-radius: 2px;
    font-weight: 500 !important;
    transition: background 0.2s !important;
  }
  :global(.nav-cta:hover) { background: #2dd48a !important; }

  @media (max-width: 768px) {
    .nav { padding: 1.25rem 1.5rem; }
  }
</style>