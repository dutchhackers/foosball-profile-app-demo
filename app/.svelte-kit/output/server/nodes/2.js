

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0c970928.js","_app/immutable/chunks/scheduler.f7e2830c.js","_app/immutable/chunks/index.680ae559.js","_app/immutable/chunks/store.9872db70.js","_app/immutable/chunks/singletons.0568a79b.js","_app/immutable/chunks/navigation.8c18fbd4.js","_app/immutable/chunks/firebase.42cd626d.js","_app/immutable/chunks/SignedIn.3295180d.js"];
export const stylesheets = ["_app/immutable/assets/2.4dfff09c.css"];
export const fonts = [];
