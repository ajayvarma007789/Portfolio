<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    let carouselTop: HTMLDivElement;
    let text: HTMLDivElement;
    let carouselBottom: HTMLDivElement;
    let container: HTMLDivElement;

    onMount(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        tl.to(carouselTop, { x: -900, ease: "none" }, 0)
            .to(text, { x: -200, ease: "none" }, 0)
            .to(carouselBottom, { x: 900, ease: "none" }, 0);

        return () => {
            // Clean up ScrollTrigger on component unmount
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    });
</script>

<div
    class="relative flex flex-col py-6 w-full overflow-hidden"
    bind:this={container}
>
    <div class="flex flex-row gap-4 md:gap-8 p-6 mt-auto md:mt-0" bind:this={carouselTop}>
        <img src="/satwa.webp" alt="satwa" class="h-72 rounded-sm" />
        <img src="/nasa.webp" alt="nasa space apps" class="h-72 rounded-sm" />
        <img
            src="/sih.webp"
            alt="smart india hackathon"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight2nd.webp"
            alt="Twilight Hackathon 2nd place"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight4th.webp"
            alt="Twilight Hackathon 4th place"
            class="h-72 rounded-sm"
        />
        <img src="/satwa.webp" alt="satwa" class="h-72 rounded-sm" />
        <img src="/nasa.webp" alt="nasa space apps" class="h-72 rounded-sm" />
        <img
            src="/sih.webp"
            alt="smart india hackathon"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight2nd.webp"
            alt="Twilight Hackathon 2nd place"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight4th.webp"
            alt="Twilight Hackathon 4th place"
            class="h-72 rounded-sm"
        />
        <img src="/satwa.webp" alt="satwa" class="h-72 rounded-sm" />
    </div>
    <div class="font-bold text-3xl md:text-5xl py-6 border-y border-neutral-500">
        <div bind:this={text} class="flex flex-row gap-20 font-[Montserrat] items-center">
            <h1>ACHIEVEMENTS</h1>
            <h1>ACHIEVEMENTS</h1>
            <h1>ACHIEVEMENTS</h1>
            <h1>ACHIEVEMENTS</h1>
            <h1>ACHIEVEMENTS</h1>
        </div>
    </div>
    <div
        class="flex flex-row-reverse gap-4 md:gap-8 p-6 mb-auto md:mb-0"
        bind:this={carouselBottom}
    >
        <img src="/projects/1.webp" alt="satwa" class="h-72 rounded-sm" />
        <img src="/projects/2.webp" alt="nasa space apps" class="h-72 rounded-sm" />
        <img
            src="/projects/3.webp"
            alt="smart india hackathon"
            class="h-72 rounded-sm"
        />
        <img
            src="/projects/ieee ras poster 1.webp"
            alt="Twilight Hackathon 2nd place"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight4th.webp"
            alt="Twilight Hackathon 4th place"
            class="h-72 rounded-sm"
        />
        <img src="/satwa.webp" alt="satwa" class="h-72 rounded-sm" />
        <img src="/nasa.webp" alt="nasa space apps" class="h-72 rounded-sm" />
        <img
            src="/sih.webp"
            alt="smart india hackathon"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight2nd.webp"
            alt="Twilight Hackathon 2nd place"
            class="h-72 rounded-sm"
        />
        <img
            src="/twilight4th.webp"
            alt="Twilight Hackathon 4th place"
            class="h-72 rounded-sm"
        />
        <img src="/satwa.webp" alt="satwa" class="h-72 rounded-sm" />
    </div>
</div>