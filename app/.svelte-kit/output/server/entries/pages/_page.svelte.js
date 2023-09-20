import { c as create_ssr_component, a as subscribe, b as each, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "firebase/auth";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { u as userStore, g as goto, S as SignedIn } from "../../chunks/navigation.js";
import { g as getFirebaseContext, a as auth, f as firestore } from "../../chunks/firebase.js";
import "firebase/storage";
const SignedOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${!$user ? `${slots.default ? slots.default({ auth: auth2 }) : ``}` : ``}`;
});
const select_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-exjqxb{max-width:200px;border-radius:50%;cursor:pointer;border:3px solid white;transition:transform 0.2s}img.svelte-exjqxb:hover{transform:scale(1.1)}.grid.svelte-exjqxb{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:1rem}.container.svelte-exjqxb{margin:0 auto;max-width:1200px;padding:0 50px}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { players } = $$props;
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  $$result.css.add(css$2);
  return `<div class="container svelte-exjqxb"><h1 data-svelte-h="svelte-a2dcos">Players</h1> <div class="grid svelte-exjqxb">${each(players, (eachPlayer) => {
    return `${eachPlayer.avatar === null || eachPlayer.avatar === "" ? `  <img src="/avatar.jpg" alt="player avatar" class="svelte-exjqxb">` : `  <img${add_attribute("src", eachPlayer.avatar, 0)} alt="player avatar" class="svelte-exjqxb">`}`;
  })}</div> </div>`;
});
const profileMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".profile-container.svelte-v3d5yw.svelte-v3d5yw{top:10px;right:30px;position:absolute;display:inline-block}#profile-picture.svelte-v3d5yw.svelte-v3d5yw{width:50px;height:50px;border-radius:50%;cursor:pointer}.dropdown.svelte-v3d5yw.svelte-v3d5yw{display:none;position:absolute;top:100%;right:-18px;background-color:#fff;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);border-radius:5px}ul.svelte-v3d5yw.svelte-v3d5yw{list-style-type:none;padding:0;margin:0}ul.svelte-v3d5yw li.svelte-v3d5yw{padding:10px;color:black;text-align:right}ul.svelte-v3d5yw li button.svelte-v3d5yw{background-color:black;color:white;text-decoration:none;display:block;border:none;border-radius:5px}ul.svelte-v3d5yw li button.svelte-v3d5yw:hover{background-color:white;color:black}",
  map: null
};
const ProfileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  function closeDropdown(event) {
  }
  window.addEventListener("click", closeDropdown);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<div class="profile-container svelte-v3d5yw">  <img id="profile-picture" src="/Generic-Profile-Placeholder-v3.png" alt="profile" class="svelte-v3d5yw"> <div class="dropdown svelte-v3d5yw"${add_attribute("style", "display:none", 0)}><ul class="svelte-v3d5yw"><li class="svelte-v3d5yw">${escape($user?.displayName)}</li> <li class="svelte-v3d5yw"><button class="svelte-v3d5yw" data-svelte-h="svelte-1moigui">Sign Out</button></li></ul></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:black}*{font-family:Arial, Helvetica, sans-serif;color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let players = [];
  async function getData() {
    const collectionRef = collection(firestore, "players");
    const q = query(collectionRef, where("totalWins", "!=", "undefined"), orderBy("totalWins", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  }
  function login() {
    goto("/login");
  }
  $$result.css.add(css);
  {
    getData().then((result) => {
      players = result;
    });
  }
  return `${$$result.head += `<!-- HEAD_svelte-1aaipci_START -->${$$result.title = `<title>Players</title>`, ""}<!-- HEAD_svelte-1aaipci_END -->`, ""} ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ProfileMenu, "ProfileMenu").$$render($$result, {}, {}, {})} ${validate_component(Select, "Select").$$render($$result, { players }, {}, {})}`;
    }
  })} ${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}
	Uitgelogd
	${escape(login())}`;
    }
  })}`;
});
export {
  Page as default
};
