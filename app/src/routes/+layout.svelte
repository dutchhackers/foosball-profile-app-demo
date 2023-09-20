<script>
    import { FirebaseApp } from 'sveltefire';
    import { app, auth, firestore } from '../firebase';
</script>

<header>
    <h1>Foosball Profile Cards</h1>
</header>

<FirebaseApp {auth} {firestore} >
    <slot />
</FirebaseApp>

<style>
	:global(body) {
		background-color: black;
	}

	:global(*) {
		font-family: Arial, Helvetica, sans-serif;
		color: white;
	}

    header h1 {
        text-align: center;
        margin: 0;
        padding: 20px;
    }
</style>