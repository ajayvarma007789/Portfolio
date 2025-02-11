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
            animation: fadeIn 2s ease-in-out forwards;
            animation-delay: 0.7s;
        }
</style>


<script lang=ts>
    import Textanimation from "../components/textanimation.svelte";    
</script>

<header class=" mt-8 text-white font-Montserrat flex justify-center items-center md:gap-[500px] gap-[300px]">
    <img src="/header.png" alt="logo" class="w-[60px]">
    <p class="text-2xl  hidden sm:block">Ajay Varma</p>
</header>

<section id="Home" class="flex justify-center items-center sm:h-screen h-[50vh] w-full">
    <img class="text-white sm:-mt-36 px-10 sm:w-[800px] animate-fadeIn  w-[400px]" src="/Group 14.svg" alt="i am a developer">
</section>
<section id="Home" class=" flex justify-center items-center h-[50vh] sm:h-screen w-full">
    <img class="text-white -mt-36 px-10 sm:w-[900px] w-[400px]" src="/Group 1.png" alt="i am a designer">
</section>
<section id="About" class="h-screen w-full">
    <div class="md:text-5xl sm:text-4xl text-xl font-bold font-Montserrat flex flex-col justify-center items-center">
        <Textanimation text="FRONTEND DEVELOPER"/>
        <Textanimation text="AND"/>
        <Textanimation text="GRAPHICS DESIGNER"/>
    </div>
    <div class="md:text-xl sm:text-lg text-sm font-Montserrat  flex flex-col items-center m-5 mx-20">
        <Textanimation text="I am <em>AJAY VARMA<em/>, Self-taught Frontend Web Developer and Graphics Designer. Computer Science with Cyber Security Engineering Student at SJCET Palai"/>
    </div>
    
</section>
<section id="Projects" class="h-screen w-full">
    <img class="text-white" src="" alt="coolpic2">
    <!-- projectcards -->
    <p class="text-white">hello</p>

</section>
<section id="Contact" class="h-screen w-full">
    <a href="githublink"><img src="" alt="github"></a>
    <a href="instalink"><img src="" alt="github"></a>
    <a href="linkedin"><img src="" alt="github"></a>
    <a href="dribbble"><img src="" alt="github"></a>
    <a href="x"><img src="" alt="github"></a>
    <a href="whatsapp"><img src="" alt="github"></a>
    <p class="text-white">hello</p>


</section>
<section id="Skills" class="h-screen w-full">
    <!-- tools and frame works -->
    <p class="text-white">hello</p>

</section>
<section id="Footer">
    <p class="text-white">hello</p>

</section>

