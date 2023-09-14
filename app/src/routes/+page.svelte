<script>
	import Select from '../components/select.svelte';
	import PlayerCard from '../components/playerCard.svelte';
    import { db } from '../firebase.js';
    import { collection, getDocs } from 'firebase/firestore';
	/**
	 * @type {any[]}
	 */
	let players = [];
	let selected = false;

	$: getData().then((result) => {
		players = result;
	});

	async function getData() {
		const collectionRef = collection(db, 'players');
		const querySnapshot = await getDocs(collectionRef);

		return querySnapshot.docs.map((doc) => doc.data());
	}

	let selectedId = '';

	// @ts-ignore
	function updateName(Id) {
		selected = true;
		selectedId = Id.detail;
		console.log(selectedId);
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
        color: white;
    }
</style>