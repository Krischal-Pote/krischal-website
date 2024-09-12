<script>
  import { Router, Route, Link } from "svelte-navigator";
  import LandingPage from "./pages/LandingPage.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./pages/About.svelte";
  import Project from "./pages/Project.svelte";
  import ProjectDetails from "./pages/ProjectDetails.svelte";
</script>

<main class="bg-[#121517] min-h-screen text-white">
  <Router>
    <header
      class="py-6 md:px-16 px-6 border-b border-[#9F9587] z-30 md:mb-28 mb-20"
    >
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/">KOP</Link>
        <nav>
          <ul class="flex items-center gap-x-8">
            <li>
              <Link to="/about" class="hover:text-purple-400 duration-300"
                >About</Link
              >
            </li>
            <li>
              <Link to="/projects" class="hover:text-purple-400 duration-300"
                >Projects</Link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Route path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Project} />
    <Route path="/projects/:id" component={ProjectDetails} />
  </Router>
  <Footer />
</main>

<style>
</style>
