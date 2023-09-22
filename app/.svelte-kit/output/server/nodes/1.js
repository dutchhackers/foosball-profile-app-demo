

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.db1c602c.js","_app/immutable/chunks/scheduler.f7e2830c.js","_app/immutable/chunks/index.680ae559.js","_app/immutable/chunks/singletons.0568a79b.js"];
export const stylesheets = [];
export const fonts = [];
