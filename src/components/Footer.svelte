<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="footer-inner">
    <small>All rights reserved &copy; {year}</small>
    <small>
      <a href="https://github.com/Krischal-Pote" target="_blank" rel="noreferrer noopener">
        Designed & built by <span>Krischal Om Pote</span>
      </a>
    </small>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    margin-top: 6rem;
    padding: 2rem 4rem;
  }
  .footer-inner {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  small {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted);
  }
  a { color: var(--muted); text-decoration: none; transition: color 0.2s; }
  a:hover { color: var(--text); }
  span { color: var(--accent); }

  @media (max-width: 768px) {
    footer { padding: 2rem 1.5rem; }
    .footer-inner { flex-direction: column; text-align: center; }
  }
</style>