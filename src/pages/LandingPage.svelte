<script>
  import { onMount } from "svelte";
  import Job from "../components/Job.svelte";
  import ProfileImage from "../../public/profile.png";
  let posts = [
    "Full Stack Developer",
    "Frontend Engineer",
    "Software Engineer",
  ];
  let currentPost = "";
  let postIndex = 0;
  let letterIndex = 0;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let isDeleting = false;

  onMount(() => {
    typeWriter();
  });

  function typeWriter() {
    if (postIndex < posts.length) {
      let fullPost = posts[postIndex];

      if (!isDeleting) {
        currentPost = fullPost.slice(0, letterIndex++);
        if (letterIndex > fullPost.length) {
          isDeleting = true;
          setTimeout(typeWriter, 1000); // Pause before deleting
          return;
        }
      } else {
        currentPost = fullPost.slice(0, letterIndex--);
        if (letterIndex === 0) {
          isDeleting = false;
          postIndex++;
          if (postIndex === posts.length) {
            postIndex = 0; // Loop back to the first post
          }
        }
      }

      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
  }
  let SocialInfo = [
    { name: "GitHub", url: "https://github.com/Krischal-Pote" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/krischal-om-pote-271283244/",
    },
  ];
</script>

<main class="max-w-7xl mx-auto lg:px-16 px-6">
  <section
    class="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16"
  >
    <div class="flex flex-col-reverse lg:flex-row">
      <div class="lg:max-w-2xl max-w-2xl">
        <h1
          class="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full outline-none"
        >
          <p>{currentPost}|</p>
        </h1>
        <p class="text-base text-[#9F9587] leading-relaxed">
          I am Krischal Om Pote, and I'm a dedicated web developer passionate
          about creating outstanding online experiences. With a strong
          foundation in computer science and years of practical experience, I've
          honed my skills in both front-end and back-end web development. My
          proficiency spans various web technologies, including HTML, CSS,
          JavaScript, and a range of frameworks and libraries.
        </p>
        <ul class="flex items-center gap-x-6 my-10">
          {#each SocialInfo as { name, url }, id}
            <li>
              <a
                href={url}
                target="_blank"
                rel="noreferer noopener"
                class="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        class="rounded-2xl mb-4 max-h-96 min-h-96 bg-top"
        src={ProfileImage}
        alt="Profile Image"
        width={400}
        height={400}
      />
    </div>
  </section>
  <Job />
</main>

<style>
</style>
