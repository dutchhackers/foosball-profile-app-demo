import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { g as goto, S as SignedIn } from "../../../chunks/navigation.js";
import "firebase/storage";
import { a as auth } from "../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    credential.accessToken;
    result.user;
  }).catch((error) => {
    error.code;
    error.message;
    error.email;
    GoogleAuthProvider.credentialFromError(error);
  });
  function home() {
    goto("/");
  }
  return `${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
    default: ({ user }) => {
      return `${slots.default ? slots.default({}) : ``}
	hello ${escape(user.displayName)} ${escape(home())}`;
    }
  })}`;
});
export {
  Page as default
};
