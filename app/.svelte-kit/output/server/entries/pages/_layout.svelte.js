import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "firebase/auth";
import "firebase/firestore";
import { s as setFirebaseContext, a as auth, f as firestore } from "../../chunks/firebase.js";
import "firebase/storage";
const FirebaseApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firestore: firestore2 } = $$props;
  let { auth: auth2 } = $$props;
  let { storage } = $$props;
  setFirebaseContext({ firestore: firestore2, auth: auth2, storage });
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore2 !== void 0)
    $$bindings.firestore(firestore2);
  if ($$props.auth === void 0 && $$bindings.auth && auth2 !== void 0)
    $$bindings.auth(auth2);
  if ($$props.storage === void 0 && $$bindings.storage && storage !== void 0)
    $$bindings.storage(storage);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(FirebaseApp, "FirebaseApp").$$render($$result, { auth, firestore }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
