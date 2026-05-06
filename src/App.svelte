<script>
  import { Router, Route } from "svelte-routing";
  import LandingPage from "./pages/LandingPage.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./pages/About.svelte";
  import Project from "./pages/Project.svelte";
  import ProjectDetails from "./pages/ProjectDetails.svelte";
  import Nav from "./components/Nav.svelte";
  import Cursor from "./components/Cursor.svelte";
</script>

<Cursor />

<main class="bg-[#080b10] min-h-screen text-white overflow-x-hidden">
  <Router>
    <Nav />
    <Route path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Project} />
    <Route path="/projects/:id" component={ProjectDetails} />
    <Footer />
  </Router>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(:root) {
    --bg: #080b10;
    --surface: #0d1117;
    --border: #1c2333;
    --accent: #4af0a2;
    --accent2: #7c6aff;
    --muted: #4a5568;
    --text: #e2e8f0;
    --text-dim: #8892a4;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    cursor: none;
    position: relative;
  }

  :global(body::before) {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.025;
    pointer-events: none;
    z-index: 0;
  }

  :global(a) { cursor: none; }

  :global(::-webkit-scrollbar) { width: 4px; }
  :global(::-webkit-scrollbar-track) { background: var(--bg); }
  :global(::-webkit-scrollbar-thumb) { background: var(--border); border-radius: 4px; }
  :global(::-webkit-scrollbar-thumb:hover) { background: var(--muted); }

  :global(.reveal) {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  :global(.reveal.visible) {
    opacity: 1;
    transform: none;
  }

  :global(.section-label) {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
  }

  :global(.section-title) {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1;
    letter-spacing: 0.01em;
    margin-bottom: 1rem;
  }

  :global(.section-sub) {
    color: var(--text-dim);
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.7;
    margin-bottom: 3.5rem;
  }

  :global(.pill) {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.3rem 0.7rem;
    border-radius: 2px;
    border: 1px solid var(--border);
    color: var(--text-dim);
    background: rgba(255,255,255,0.02);
    transition: all 0.15s;
    display: inline-block;
  }
  :global(.pill:hover) { border-color: var(--accent); color: var(--accent); }
  :global(.pill.active) {
    border-color: rgba(74,240,162,0.4);
    color: var(--accent);
    background: rgba(74,240,162,0.05);
  }
</style>