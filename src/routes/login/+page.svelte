<script lang="ts">
	import { setPersistence } from 'firebase/auth';
	import { browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { auth } from '../../firebase';
	import { SignedIn, userStore } from 'sveltefire';
	import { goto } from '$app/navigation';

	function login() {
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				const provider = new GoogleAuthProvider();
				return signInWithPopup(auth, provider);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(errorCode, errorMessage, email, credential);
			});
	}

    function home() {
        goto('/');
    }

    const user = userStore(auth);

	console.log(user);
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="container">
	<button on:click={() => login()} class="sign-in"> Sign In </button>
</div>

<SignedIn>
	<slot />
    {home()}
</SignedIn>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70vh;
	}

	.sign-in {
		background-color: transparent;
		border: white 2px solid;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 1.2rem;
		cursor: pointer;
		transition: 200ms;
	}
	.sign-in:hover {
		background-color: white;
		color: black;
	}
</style>
