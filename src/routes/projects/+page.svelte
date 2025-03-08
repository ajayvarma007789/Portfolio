<script lang=ts>
  import { onMount } from "svelte";  
	import Textanimation from "../../components/textanimation.svelte";

  let projects: any[] = [];

  onMount(async () => {
        const response = await fetch("/projects.json");
        projects = await response.json();
    });

</script>

<section id="Projects" class="w-full sm:mb-16 text-white mt-20">

  <div class="text-2xl md:text-3xl lg:text-5xl font-Montserrat font-bold flex flex-col items-center mb-32">
      <em>
          <Textanimation text="Projects"/>
      </em>
  </div>
  <div class="grid justify-items-center my-20 mx-10 sm:mx-40 gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
  {#each projects as project} 
          <div title="git" class="flex items-center justify-center">
              <img src={project.src} alt={project.alt} class="project-card">
          </div>
  {/each}
  </div>
</section>