<script async script>
	import { createEventDispatcher } from 'svelte';
	import { data } from '../storesUser/store.js';
	import { goto } from '$app/navigation';

	let player = null;
	export let players;

	function updatePlayer(selectedPlayer) {
		player = selectedPlayer;

		data.set(player);
		if (player) {
			goto('/' + player.id);
		}
	}
</script>

<div class="container">
	<div class="grid">
		{#each players as eachPlayer}
			{#if eachPlayer.avatar === null || eachPlayer.avatar === ''}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img on:click={() => updatePlayer(eachPlayer)} src="/avatar.jpg" alt="player avatar" />
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					on:click={() => updatePlayer(eachPlayer)}
					src={eachPlayer.avatar}
					alt="player avatar"
				/>
			{/if}
		{/each}
	</div>
</div>

<style>
	img {
		max-width: 200px;
		border-radius: 50%;
		cursor: pointer;
		border: 3px solid white;
		transition: transform 0.2s;
	}
	img:hover {
		transform: scale(1.1);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
	.container {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 50px;
	}
	button {
		background: none;
		border: none;
		border-radius: 50%;
	}
</style>
