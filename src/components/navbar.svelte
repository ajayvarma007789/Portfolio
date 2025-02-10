<script>
    	let open = $state(false);
</script>

	
<div id="navbar" class="flex fixed left-1/2 -translate-x-1/2 shadow-md justify-center text-gray-400 mt-2 sm:mt-5 ">
	<div class="hidden sm:block ">
		<div class="flex items-center gap-10 border rounded-full border-red-500  bg-black  p-2 px-5 "> 
			<img src="/header.png" alt="logo" class="w-[40px] m-2 m">
			<a href="#Home"class="text-lg hover:text-red-500 transition duration-500 hover:text-2xl font-Montserrat ">Home</a>
			<a href="#About" class="text-lg hover:text-red-500 hover:text-2xl transition duration-500 font-Montserrat ">About</a>
			<a href="#Projects" class="text-lg hover:text-red-500 transition duration-500 hover:text-2xl font-Montserrat ">Projects</a>
			<a href="#Contact" class="text-lg hover:text-red-500 transition duration-500 hover:text-2xl font-Montserrat ">Contact</a>
			<a href="#Skills" class="text-lg hover:text-red-500 transition duration-500 hover:text-2xl font-Montserrat ">Skills</a>
		</div>
	</div>
		
	<div class="block sm:hidden">
		<button onclick={() => open = !open} class=" font-Montserrat text-white p-3 rounded-full mb-5 hover:bg-red-500">
			<img src="/header.png" alt="Nav" class="font-Montserrat">
		</button>
		<div class="overflow-hidden transition-all duration-300" style="max-height: {open ? '500px' : '0'}">
			<div class="flex bg-black flex-col text-gray-400 p-2 px-40 gap-10 items-center border rounded border-red-500 ">
				<a href="#Home"class="text-lg font-Montserrat ">Home</a>
				<a href="#About" class="text-lg font-Montserrat ">About</a>
				<a href="#Projects" class="text-lg font-Montserrat ">Projects</a>
				<a href="#Contact" class="text-lg font-Montserrat ">Contact</a>
				<a href="#Skills" class="text-lg font-Montserrat ">Skills</a>
			</div>
		</div>
	</div>
</div>