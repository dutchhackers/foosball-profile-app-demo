<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { data } from '../../storesUser/store';

	let player = null;

	data.subscribe((data) => {
		player = data;
	});
</script>

<div class="card">
	<div class="backbutton">
		<button on:click={() => goto('/')}>Back</button>
	</div>
	<div class="title">
		<h1>
			{player.name}
			{#if player.nickname}
				- "{player.nickname}"
			{/if}
		</h1>
	</div>
	<div class="profile">
		{#if player.avatar === null || player.avatar === ''}
			<img src="/avatar.jpg" alt="player avatar" />
		{:else}
			<img src={player.avatar} alt="player avatar" />
		{/if}
		{#if !player.totalWins}
			<h2>Slack Id: {player.slackId}</h2>
		{:else if player.totalLosses > player.totalWins}
			<h2>
				{player.name} has more losses than wins... <br />Losses: {player.totalLosses}💩 Wins: {player.totalWins}🔥
			</h2>
		{:else if player.totalWins === player.totalLosses}
			<h2>
				{player.name} has the same amount of wins and losses! <br />Wins: {player.totalWins}🔥
				Losses: {player.totalLosses}💩
			</h2>
		{:else}
			<h2>
				{player.name} has more wins than losses! <br />Wins: {player.totalWins}🔥 Losses: {player.totalLosses}💩
			</h2>
		{/if}
	</div>
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
</div>

<style>
	.card {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #1e1e1e;
		border-radius: 10px;
		width: 100%;
		height: 100vh;
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
	.backbutton button {
		position: absolute;
		top: 0;
		left: 0;
		margin: 20px;
		background-color: #1e1e1e;
		color: white;
		border: 1px solid white;
		border-radius: 10px;
		padding: 10px;
		cursor: pointer;
	}
</style>
