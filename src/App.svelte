<script>
  import { Router, Route } from "svelte-routing";

  import LandingPage from "./pages/LandingPage.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./pages/About.svelte";
  import Project from "./pages/Project.svelte";
  import ProjectDetails from "./pages/ProjectDetails.svelte";
  import Nav from "./components/Nav.svelte";
</script>

<main class="bg-[#121517] min-h-screen text-white">
  <Router>
    <Nav />
    <Route path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Project} />
    <Route path="/projects/:id" component={ProjectDetails} />
    <Footer />
  </Router>
</main>
