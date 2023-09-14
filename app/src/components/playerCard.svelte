<script>
	export let selectedId;
	export let players;
	
	const player = getPlayer();
	const length = Object.keys(player).length;

	function getPlayer() {
		const player = players.find((player) => player.id === selectedId);
		const length = Object.keys(player).length;
		return player;
	}
</script>

<div class="card">
    <div class="title">
        <h1>{player.name}</h1>
    </div>
    <div class="profile">
        <img src="{player.avatar}" alt="player avatar">
        {#if !player.totalWins} 
            <h2>Slack Id: {player.slackId}</h2>
        {:else}
            <h2>Total Wins: {player.totalWins}</h2>
        {/if}

    </div>
</div>