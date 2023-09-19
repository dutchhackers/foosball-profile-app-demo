<script>
	import { SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth } from '../../firebase.js';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			// @ts-ignore
			const token = credential.accessToken;
			const user = result.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});

	function home() {
		setTimeout(() => {
			goto('/');
		}, 1000);
	}
</script>

<SignedIn let:user>
	<slot />
	hello {user.displayName}
	{home()}
</SignedIn>
