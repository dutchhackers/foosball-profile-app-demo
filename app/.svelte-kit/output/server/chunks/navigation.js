import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { w as writable } from "./index.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { g as getFirebaseContext } from "./firebase.js";
function userStore(auth, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3
    };
  }
  if (!auth) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable(null);
    return {
      subscribe: subscribe3
    };
  }
  const { subscribe: subscribe2 } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth = getFirebaseContext().auth;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({
    user: $user,
    auth,
    signOut: () => signOut(auth)
  }) : ``}` : ``}`;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
export {
  SignedIn as S,
  goto as g,
  userStore as u
};
