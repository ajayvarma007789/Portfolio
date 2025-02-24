<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .animate-fadeIn {
            animation: fadeIn 2.5s ease-in-out forwards;   
        }
</style>


<script lang=ts>
    import Textanimation from "../components/textanimation.svelte"; 
    import { onMount } from "svelte";  
    
    let images: any[] = [];
    let projects: any[] = [];

    onMount(async () => {
        const response = await fetch("/tools.json");
        images = await response.json();
    });
    onMount(async () => {
        const response = await fetch("/projects.json");
        projects = await response.json();
    });
</script>

<header class=" mt-8 text-white font-Montserrat flex justify-center items-center md:gap-[500px] gap-[300px]">
    <img src="/header.png" alt="logo" class="w-[60px]">
    <p class="text-2xl  hidden sm:block">Ajay Varma</p>
</header>


<section id="Home" class="flex justify-center items-center sm:h-screen h-[50vh] w-full">
    <img class="text-white sm:-mt-36 px-10 sm:w-[800px] animate-fadeIn  w-[400px]" src="/Group 14.svg" alt="i am a developer">
</section>
<section id="Home" class=" flex justify-center items-center h-[50vh] sm:h-screen w-full">
    <img class="text-white -mt-36 px-10 sm:w-[900px] w-[400px] animate-fadeIn" src="/Group 1.png" alt="i am a designer">
</section>
<section id="About" class=" mb-16 w-full">
    <div class="lg:text-5xl md:text-4xl text-2xl font-bold font-Montserrat flex flex-col justify-center items-center">
        <Textanimation text="FRONTEND DEVELOPER"/>
        <Textanimation text="AND"/>
        <Textanimation text="GRAPHICS DESIGNER"/>
    </div>
    <div class="lg:text-lg md:text-md text-sm font-Montserrat  flex flex-col items-center m-5 mx-20 opacity-60">
        <Textanimation text="I am <em>AJAY VARMA<em/>, Self-taught Frontend Web Developer and Graphics Designer. Computer Science with Cyber Security Engineering Student at SJCET Palai"/>
    </div>

    <div class="text-2xl md:text-3xl lg:text-4xl font-Montserrat flex flex-col items-center mt-20 sm:mt-15">
        <em>
            <Textanimation text="Tools i learned till now "/>
        </em>
    </div>

    <div class="lg:text-lg md:text-md text-sm font-Montserrat  flex flex-col items-center opacity-60">
        <Textanimation text="Tools,Softwares and Libraries used"/>
    </div>

    <div class="grid justify-items-center mt-20 mx-10 sm:mx-40 gap-1 grid-cols-2 lg:grid-cols-8 md:grid-cols-4 overflow-visible" >
        {#each images as image}
            <div title="git" class="flex group items-center hover:bg-white/5 hover:backdrop-blur-lg w-full h-24 justify-center rounded-md border border-transparent hover:border-gray-700 transition-all duration-300">
                <img src={image.src}  loading="lazy" alt={image.alt} class="group-hover:w-12 w-10 opacity-90 transition-all duration-300">
            </div>
        {/each}
    </div>

   
</section>
<section id="Projects" class="w-full sm:mb-16 text-white">

    <div class="text-2xl md:text-3xl lg:text-5xl font-Montserrat font-bold flex flex-col items-center mb-32">
        <em>
            <Textanimation text="Projects"/>
        </em>
    </div>
    <div class="grid justify-items-center my-20 mx-10 sm:mx-40 gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
    {#each projects as project}
            <div title="git" class="flex items-center justify-center">
                <img src={project.src}  loading="lazy" alt={project.alt} class="project-card">
            </div>
        {/each}
    </div>
</section>


<section id="contact">
    <div class="flex gap-5 -mt-12 mb-10 justify-center items-center  ">
        <a href="mailto:ajaydesigns75@gmail.com">
        <div class="flex hover:bg-white/5 hover:backdrop-blur-lg justify-center items-center p-5 text-white rounded-md border border-transparent hover:border-gray-700 transition-all duration-300">
            <img src="email-30.png" alt="Email"> 
        </div>
        </a>
        
        <div class="flex gap-5 hover:bg-white/5 hover:backdrop-blur-lg justify-center items-center p-5 text-white rounded-md border border-transparent hover:border-gray-700 transition-all duration-300">
            <img class="w-[30px]" src="phone.png" alt="Phone"> 
            <p>
                +919530204516
            </p>
        </div>
    </div>

<div id="contact" class="grid gap-10 mb-10 mx-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
    <a href="https://github.com/ajayvarma007789">
        <div id="github" class="flex text-white p-5 gap-10 items-center hover:bg-white/10 hover:backdrop-blur-lg justify-center rounded-xl border  border-gray-700 transition-all duration-300">
            <img src="/github.svg" alt="github" class="w-16">
            <div class="">
                <p class="font-Montserrat lg:text-lg sm:text-md">Github</p>
                <em><p class="font-Montserrat lg:text-md sm:text-sm opacity-70">look here for more of my projects</p></em>
            </div>
        </div>
    </a>
    <a href="https://www.instagram.com/ajaydesigns2023?igsh=MWdrZ2pwNm4yMzl5dQ==">
        <div id="github" class="flex text-white p-5 gap-10 items-center hover:bg-white/10 hover:backdrop-blur-lg justify-center rounded-xl border  border-gray-700 transition-all duration-300">
            <img src="/instagram.svg" alt="instagram" class="w-14">
            <div >
                <p class="font-Montserrat lg:text-lg sm:text-md">Instagram</p>
                <em><p class="font-Montserrat lg:text-md sm:text-sm opacity-70">contact me through instagram</p></em>
            </div>
        </div>
    </a><a href="https://www.linkedin.com/in/ajay-varma-aaa71933b/">
        <div id="github" class="flex text-white p-5 gap-10 items-center hover:bg-white/10 hover:backdrop-blur-lg justify-center rounded-xl border  border-gray-700 transition-all duration-300">
            <img src="/linkedin.svg" alt="linkedin" class="w-14">
            <div >
                <p class="font-Montserrat lg:text-lg sm:text-md">Linkedin</p>
                <em><p class="font-Montserrat lg:text-md sm:text-sm opacity-70">contact me though linkedin</p></em>
            </div>
        </div>
    </a>
    <a href="https://x.com/AJAYVARMA123629">
        <div id="github" class="flex text-white p-5 gap-10 items-center hover:bg-white/10 hover:backdrop-blur-lg justify-center rounded-xl border  border-gray-700 transition-all duration-300">
            <img src="/twitter.svg" alt="x" class="w-14">
            <div >
                <p class="font-Montserrat lg:text-lg sm:text-md">Twitter</p>
                <em><p class="font-Montserrat lg:text-md sm:text-sm opacity-70">contact me through twitter</p></em>
            </div>
        </div>
    </a>
    
    <a href="https://dribbble.com/AjayVarmadesignare">
        <div id="dribbble" class="flex text-white p-5 gap-10 items-center hover:bg-white/10 hover:backdrop-blur-lg justify-center rounded-xl border  border-gray-700 transition-all duration-300">
            <img src="/dribbble.svg" alt="dribbble" class="w-14">
            <div >
                <p class="font-Montserrat lg:text-lg sm:text-md">Dribbble</p>
                <em><p class="font-Montserrat lg:text-md sm:text-sm opacity-70">Look at my designs in dribbble</p></em>
            </div>
        </div>
    </a>
</div>
    

</section>


