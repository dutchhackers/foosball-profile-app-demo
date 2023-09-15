<script>
	import Select from '../components/select.svelte';
	import PlayerCard from '../components/playerCard.svelte';
    import { db } from '../firebase.js';
    import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
	let players = [];
	let selected = false;

	$: getData().then((result) => {
		players = result;
	});

	async function getData() {
		const collectionRef = collection(db, 'players');
        const q = query(collectionRef, 
		where('totalWins', '!=', 'undefined'),
		orderBy('totalWins', 'desc'));
		const querySnapshot = await getDocs(q);

		return querySnapshot.docs.map((doc) => doc.data());
	}

	let selectedId = '';

	function updateName(Id) {
		selected = true;
		selectedId = Id.detail;
	}

    function resetSelected() {
        selected = false;
    }
</script>

<Select {players} {selectedId} on:resetSelected={resetSelected} on:change={updateName} />
{#if selected}
	<PlayerCard {players} {selectedId} />
{/if}


<style>
    :global(body) {
        background-color: black;
    }
    :global(*) {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }
</style>