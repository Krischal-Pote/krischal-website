<script>
  import { Link } from "svelte-routing";
</script>

<header
  class="py-6 md:px-16 px-6 border-b border-[#9F9587] z-30 md:mb-28 mb-20"
>
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <Link to="/" class="text-white">KOP</Link>
    <nav>
      <ul class="flex items-center gap-x-8">
        <li>
          <Link to="/about" class="hover:text-purple-400 duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" class="hover:text-purple-400 duration-300">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
