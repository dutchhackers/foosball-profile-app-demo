

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_player_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.93ec305b.js","_app/immutable/chunks/scheduler.f7e2830c.js","_app/immutable/chunks/index.680ae559.js","_app/immutable/chunks/singletons.0568a79b.js","_app/immutable/chunks/navigation.8c18fbd4.js","_app/immutable/chunks/store.9872db70.js"];
export const stylesheets = ["_app/immutable/assets/3.727c8ceb.css"];
export const fonts = [];
