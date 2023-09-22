import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.800af229.js","_app/immutable/chunks/scheduler.f7e2830c.js","_app/immutable/chunks/index.680ae559.js","_app/immutable/chunks/firebase.42cd626d.js"];
export const stylesheets = [];
export const fonts = [];
