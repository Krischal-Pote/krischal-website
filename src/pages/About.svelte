<script>
  import ProfileImage from "../../public/profile.png";
  import CvSvg from "../../public/svg/CvFile.svg";
  import Email from "../../public/svg/Email.svg";
  let Expertise = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Svelte",
    "PHP",
    "Tailwind CSS",
    "Next JS",
  ];
</script>

<main class="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
  <div>
    <section
      class="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center"
    >
      <div class="order-2 lg:order-none">
        <h1
          class="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8 outline-none"
        >
          I&apos;m Krischal Om Pote
        </h1>

        <div class="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
          Hello, I'm Krischal Om Pote, and I'm truly passionate about the world
          of web development. My journey in this field has been an exciting one,
          and I'm eager to share a bit about myself with you. <br /><br /> With
          a strong academic foundation in computer science and several years of
          hands-on experience, I've developed expertise in both front-end and
          back-end web development. I've honed my skills in a wide range of web
          technologies, including HTML, CSS, JavaScript, and various frameworks
          and libraries. Building websites and web applications is not just my
          job; it's my creative outlet.<br /><br /> One of the things that sets
          me apart is my commitment to staying on the cutting edge of web
          development trends and best practices. In an industry that evolves
          rapidly, I make it a priority to ensure that the projects I work on
          are not only visually appealing but also highly functional and
          responsive. I believe that every website should be a delightful and
          seamless experience for its users.<br /><br /> I take great pride in
          my meticulous attention to detail and my ability to solve complex
          problems. Meeting deadlines is essential to me, and I have a track
          record of delivering projects punctually. Whether it's creating
          responsive websites, optimizing site performance, or diving into
          intricate coding challenges, I thrive on the diversity of tasks that
          web development offers.<br /><br /> Beyond the world of web development,
          I am an anime lover and a movie buff. Exploring captivating stories and
          characters through animated series and films is one of my favorite pastimes.
          Additionally, I'm an avid football fan and enjoy watching matches, cheering
          for my favorite teams, and immersing myself in the excitement of the game.
        </div>
      </div>

      <div
        class="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12"
      >
        <div>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            class="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
            src={ProfileImage}
            width="400px"
            height="400px"
            alt="Profile photo"
          />

          <a
            href="/Krischal Om Pote.pdf"
            download="Krischal_Om_Pote.pdf"
            class="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-pointer font-medium"
          >
            <img src={CvSvg} alt="cv" />
            Download Resumé
          </a>
        </div>

        <ul>
          <li>
            <a
              href="mailto:crischal1234@gmail.com"
              class="flex items-center gap-x-2 hover:text-purple-400 duration-300"
            >
              <img src={Email} alt="email" />
              crischal1234@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="mt-24 max-w-2xl">
      <h2 class="font-semibold text-4xl mb-4">Expertise</h2>
      <p class="text-zinc-400 max-w-lg">
        I&apos;ve spent few years working on my skills. In no particular order,
        here are a few of them.
      </p>

      <ul class="flex flex-wrap items-center gap-3 mt-8">
        {#each Expertise as skill}
          <li
            class="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
          >
            {skill}
          </li>
        {/each}
      </ul>
    </section>
  </div>
</main>
