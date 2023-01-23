<script lang="ts">
	import '@fontsource/bebas-neue';
	import '@fontsource/montserrat';

	export let data: { results: { Número: string; Vendido: 'FALSE' | 'TRUE' }[] };
	const results = data.results;
	const vendidos = results.filter(({ Vendido }) => Vendido == 'TRUE');
	const disponible = results.filter(({ Vendido }) => Vendido == 'FALSE');
	console.log(results);

	function createLink(number: number) {
		const message = `¡Quiero el ${number}!`;
		let phone: string;

		if (number >= 1 && number <=150){
			phone = "5491157553203";
		}else{
			phone = "5491162957756";
		}

		return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
	}

	function createOnClick(number: number) {
		const URL = createLink(number);
		return function onClick() {
			window.open(URL, '_blank');
		};
	}
</script>

<section>
	<h1>Rifa del Orgullo ❤️‍🔥</h1>
	<h2>disponibles 👀</h2>
	<ul class="disponibles">
		{#each disponible as row, index}
			<li>
				<button on:click={createOnClick(Number(row['Número']))}>
					{row['Número']}
				</button>
			</li>
		{/each}
	</ul>
	<h2>en juego 😽</h2>
	<ul class="vendidos">
		{#each vendidos as row, index}
			<li>
				{row['Número']}
			</li>
		{/each}
	</ul>
</section>
<p class="copy">&copy; página creada por <a href="https://www.linkedin.com/in/nahuel-rabey-260857180/">Nahuel Rabey</a></p>
<style>
	section {
		font-family: sans-serif;
		width: 75vw;
		margin: auto;
	}

	@media (max-width: 600px) {
		section {
			width: 95vw;
		}
	}

	h1 {
		font-family: 'Bebas Neue', cursive;
		font-size: 3em;
	}
	h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: lighter;
		color: #2f2f2f;
	}
	ul {
		padding: 0px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		/* justify-content: space-between; */
		justify-content: left;
	}
	ul li {
		list-style: none;
		padding: none;
	}
	.disponibles li button {
		font-size: medium;
		display: block;
		padding: 1em;
		border: 2px solid rgb(138, 138, 138);
		margin: 0px;
		border-radius: 5px;
		background-color: white;
	}
	.disponibles li button:hover {
		cursor: pointer;
		border-color: rgb(0, 0, 0);
        /* border-width: 1px; */
	}

	.vendidos li {
		font-size: medium;
		display: block;
		padding: 1em;
		border: 1px solid black;
		margin: 0px;
		border-radius: 5px;
		background-color: #2f2f2f0f;
	}

	.copy {
		text-align: center;
		font-size: smaller;
		font-family: sans-serif;
	}
	.copy a {
		color:rgb(0, 0, 0);
		font-weight: bold;
		text-decoration: none;
	}
	.copy a:visited{
		color:rgb(0, 0, 0);
	}
</style>
