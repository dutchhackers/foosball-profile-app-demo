<script>
	import Select from '../components/select.svelte';
	import { SignedIn, SignedOut, userStore } from 'sveltefire';
	import { firestore, auth } from '../firebase.js';
	import { goto } from '$app/navigation';
	import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
	import ProfileMenu from '../components/profileMenu.svelte';

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

	function login() {
		goto('/login');
	}

	const user = userStore(auth);

	console.log(user);
</script>

<svelte:head>
	<title>Players</title>
</svelte:head>

<SignedIn>
	<ProfileMenu />
	<Select {players} />
</SignedIn>

<SignedOut>
	<slot />
	{login()}
</SignedOut>


