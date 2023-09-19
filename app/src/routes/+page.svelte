<script>
	import Select from '../components/select.svelte';
	import { SignedIn, SignedOut, userStore } from 'sveltefire';
	import { firestore, auth } from '../firebase.js';
	import { goto } from '$app/navigation';
	import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
	import { signOut } from 'firebase/auth';
	
	let players = [];

	$: getData().then((result) => {
		players = result;
	});

	async function getData() {
		const collectionRef = collection(firestore, 'players');
		const q = query(
			collectionRef,
			where('totalWins', '!=', 'undefined'),
			orderBy('totalWins', 'desc')
		);
		const querySnapshot = await getDocs(q);

		return querySnapshot.docs.map((doc) => doc.data());
	}

	const user = userStore(auth);

	function login() {
		setTimeout(() => {
		goto('/login');
		}, 1000);
	}
</script>

<SignedIn>
	<button on:click={() => signOut(auth)}>Sign out</button>
	<Select {players} />
</SignedIn>

<SignedOut>
	<slot />
	Uitgelogd
	{login()}
</SignedOut>

<style>
	:global(body) {
		background-color: black;
	}
	:global(*) {
		font-family: Arial, Helvetica, sans-serif;
		color: white;
	}
</style>
