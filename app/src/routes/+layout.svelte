<script>
    import { FirebaseApp } from 'sveltefire';
    import { app, auth, firestore } from '../firebase';
</script>

<FirebaseApp {auth} {firestore} >
    <slot />
</FirebaseApp>