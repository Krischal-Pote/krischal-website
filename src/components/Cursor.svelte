<script>
  import { onMount } from "svelte";

  let mx = 0, my = 0, rx = 0, ry = 0;
  let cursorEl, ringEl;
  let hovering = false;

  onMount(() => {
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    document.addEventListener("mouseover", (e) => {
      hovering = !!e.target.closest("a, button");
    });

    function animate() {
      if (cursorEl) {
        cursorEl.style.left = mx + "px";
        cursorEl.style.top = my + "px";
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringEl) {
        ringEl.style.left = rx + "px";
        ringEl.style.top = ry + "px";
      }
      requestAnimationFrame(animate);
    }
    animate();
  });
</script>

<div class="cursor" class:hovering bind:this={cursorEl}></div>
<div class="cursor-ring" class:hovering bind:this={ringEl}></div>

<style>
  .cursor {
    width: 12px;
    height: 12px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s, background 0.2s;
    mix-blend-mode: screen;
  }
  .cursor.hovering {
    width: 20px;
    height: 20px;
    background: var(--accent2);
  }
  .cursor-ring {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(74, 240, 162, 0.4);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, border-color 0.3s;
  }
  .cursor-ring.hovering {
    width: 56px;
    height: 56px;
    border-color: rgba(124, 106, 255, 0.4);
  }
</style>