<script>
  import { Link } from "svelte-routing";

  // import { Link } from "svelte-navigator";
  let ProjectData = [
    {
      id: 1,
      projectName: "Hamro Patro Bank Rates",
      imageUrl: "/logo/logo bank rate.png",
    },
    {
      id: 2,
      projectName: "Hamro Health",
      imageUrl: "/logo/health.png",
    },
    {
      id: 3,
      projectName: "Hamro Jytoish",
      imageUrl: "/logo/neww.png",
    },
  ];
</script>

<main class="max-w-7xl mx-auto md:px-16 px-6">
  <section class="max-w-2xl mb-16">
    <h1
      class="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight outline-none"
    >
      Featured projects I&apos;ve built over the years
    </h1>
    <p class="text-base text-zinc-400 leading-relaxed">
      I&apos;ve worked on tons of little projects over the years but these are
      the ones that I&apos;m most proud of. Many of them are open-source, so if
      you see something that piques your interest, check out the code and
      contribute if you have ideas for how it can be improved.
    </p>
  </section>

  <section class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
    {#each ProjectData as project}
      <Link
        to={`/projects/${project.id}`}
        class="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
      >
        <img
          src={project.imageUrl}
          width={60}
          height={60}
          alt={project.projectName}
          class="bg-zinc-800 rounded-md p-2"
        />
        <div>
          <h2 class="font-semibold mb-1">{project.projectName}</h2>
          <div class="text-sm text-zinc-400">{project.projectName}</div>
        </div>
      </Link>
    {/each}
  </section>
</main>
