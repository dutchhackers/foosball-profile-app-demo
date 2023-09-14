<script>
	import Select from './select.svelte';

	export let selectedId;
	export let players;

	var player = getPlayer(selectedId);
	var length = Object.keys(player).length;

	function getPlayer(id) {
		const player = players.find((player) => player.id === id);
		const length = Object.keys(player).length;
		return player;
	}

	$: {
		player = getPlayer(selectedId);
	}
</script>

<div class="card">
	<div class="title">
		<h1>
			{player.name}
			{#if player.nickname}
				- "{player.nickname}"
			{/if}
		</h1>
	</div>
	<div class="profile">
		<img src={player.avatar} alt="player avatar" />
		{#if !player.totalWins}
			<h2>Slack Id: {player.slackId}</h2>
		{:else if player.totalLosses > player.totalWins}
			<h2>
				You have more losses than wins... <br />Losses: {player.totalLosses}💩 Wins: {player.totalWins}🔥
			</h2>
		{:else}
			<h2>
				You have more wins than losses! <br />Wins: {player.totalWins}🔥 Losses: {player.totalLosses}💩
			</h2>
		{/if}
	</div>
	{#if length > 4}
		<div class="stats">
			<ul>
				<li>Matches: {player.totalMatches}</li>
				<li>Wins: {player.totalWins}</li>
				<li>Losses: {player.totalLosses}</li>
				<li>Humiliations: {player.totalHumiliations}</li>
			</ul>
			<ul>
				<li>Flawless Victories: {player.totalFlawlessVictories}</li>
                <li>Knockouts: {player.totalKnockouts}</li>
                <li>Suckerpunches: {player.totalSuckerpunches}</li>
                <li>Highest Winstreak: {player.highestWinStreak}</li>
			</ul>
		</div>
	{/if}
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #1e1e1e;
		border-radius: 10px;
	}
	.profile {
		margin-top: 70px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-bottom: beige 1px solid;
		width: 100%;
		padding-bottom: 70px;
	}
	.profile h2 {
		margin-left: 100px;
	}
	img {
		border-radius: 50%;
		max-width: 200px;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-bottom: beige 1px solid;
	}
	.title h1 {
		text-decoration: underline 2px rgb(13, 13, 171);
	}
    .stats {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        font-size: 1.5rem;
    }
</style>
