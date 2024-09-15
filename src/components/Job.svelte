<script>
  let WorkingData = [
    {
      title: "Program Coordinator (Intern)",
      logo: "/logo/deerwalk_compware_ltd_logo.jpeg",
      company: "Deerwalk Compware Ltd. ",
      dateStart: "2022-07-01",
      dateEnd: "2022-11-05",
      url: "https://www.deerwalkcompware.com/",
    },
    {
      title: "Laravel Developer (Intern)",
      company: "Young Minds",
      dateStart: "2022-12-11",
      dateEnd: "2023-01-26",
      logo: "/logo/download.png",
      url: "https://www.youngminds.com.np/",
    },
    {
      title: "Associate Software Engineer",
      logo: "/logo/hamropatro.png",
      company: "Hamro Patro ",
      dateStart: "2023-02-01",
      dateEnd: "PRESENT",
      url: "https://www.hamropatro.com/",
    },
  ];
</script>

<section class="mt-32">
  <div class="mb-16 flex justify-center">
    <h2 class="font-semibold text-4xl mb-4">Work Experience</h2>
  </div>

  <div class="w-[100%] flex justify-center">
    <div class="flex flex-col gap-y-12">
      {#each WorkingData as job}
        <div
          class="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
        >
          <a
            href={job.url}
            rel="noreferrer noopener"
            class="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
          >
            <img
              src={job.logo}
              class="object-cover"
              alt={` logo`}
              width="60px"
            />
          </a>
          <div class="flex flex-col items-start">
            <h3 class="text-xl font-bold">{job.company}</h3>
            <p>{job.title}</p>
            <small class="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
              {job.dateStart} -{" "}
              {job.dateEnd}
            </small>
            <p class="text-base text-zinc-400 my-4">
              <!-- {data.description} -->
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
