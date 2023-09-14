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
