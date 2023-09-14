<script async script>
	import { createEventDispatcher } from 'svelte';
	export let selectedId;
	/**
	 * @type {any}
	 */
	export let players;

	let dispatch = createEventDispatcher();

	function handleSelectChange(event) {
		if (event.target.value === 'Pick a player') {
			dispatch('resetSelected');
			return;
		}
		selectedId = event.target.value;
		dispatch('change', selectedId);
	}
</script>

<div class="select">
    <h1>Pick a Player to view</h1>
	<select on:change={handleSelectChange} name="players" id="players">
		<option value="Pick a player">Pick a Player</option>
		{#each players as player}
			{#if player.name === 'Michael Schilling' && player.id === 'mschilling@move4mobile.com'}
				<option value={player.id}>{player.name}</option>
			{:else if player.name !== 'Michael Schilling' && player.name !== 'Michael' && player.name !== '_Michael Schilling'}
				<option value={player.id}>{player.name}</option>
			{/if}
		{/each}
	</select>
</div>

<style>
    .select {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .select h1 {
        padding-right: 50px;
        margin-bottom: 50px;
    }
    .select select {
        padding-left: 20px;
        width: 300px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: #1e1e1e;
        color: white;
        font-size: 20px;
    }
    .select select option {
        background-color: #1e1e1e;
        color: white;
        font-size: 20px;
    }
</style>
