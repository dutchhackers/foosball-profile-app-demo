import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
const data = writable({});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-dc1w8r.svelte-dc1w8r{position:fixed;top:0;left:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#1e1e1e;border-radius:10px;width:100%;height:100vh}.profile.svelte-dc1w8r.svelte-dc1w8r{margin-top:70px;display:flex;flex-direction:row;align-items:center;justify-content:center;border-bottom:beige 1px solid;width:100%;padding-bottom:70px}.profile.svelte-dc1w8r h2.svelte-dc1w8r{margin-left:100px}img.svelte-dc1w8r.svelte-dc1w8r{border-radius:50%;max-width:200px}.title.svelte-dc1w8r.svelte-dc1w8r{display:flex;align-items:center;justify-content:center;width:100%;border-bottom:beige 1px solid}.title.svelte-dc1w8r h1.svelte-dc1w8r{text-decoration:underline 2px rgb(13, 13, 171)}.stats.svelte-dc1w8r.svelte-dc1w8r{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:50px;font-size:1.5rem}.backbutton.svelte-dc1w8r button.svelte-dc1w8r{position:absolute;top:0;left:0;margin:20px;background-color:#1e1e1e;color:white;border:1px solid white;border-radius:10px;padding:10px;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let player = null;
  data.subscribe((data2) => {
    player = data2;
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ba9n89_START -->${$$result.title = `<title>${escape(player.name)}</title>`, ""}<!-- HEAD_svelte-ba9n89_END -->`, ""} <div class="card svelte-dc1w8r"><div class="backbutton svelte-dc1w8r"><button class="svelte-dc1w8r" data-svelte-h="svelte-2cwai8">Back</button></div> <div class="title svelte-dc1w8r"><h1 class="svelte-dc1w8r">${escape(player.name)} ${player.nickname ? `- &quot;${escape(player.nickname)}&quot;` : ``}</h1></div> <div class="profile svelte-dc1w8r">${player.avatar === null || player.avatar === "" ? `<img src="/avatar.jpg" alt="player avatar" class="svelte-dc1w8r">` : `<img${add_attribute("src", player.avatar, 0)} alt="player avatar" class="svelte-dc1w8r">`} ${!player.totalWins ? `<h2 class="svelte-dc1w8r">Slack Id: ${escape(player.slackId)}</h2>` : `${player.totalLosses > player.totalWins ? `<h2 class="svelte-dc1w8r">${escape(player.name)} has more losses than wins... <br>Losses: ${escape(player.totalLosses)}💩 Wins: ${escape(player.totalWins)}🔥</h2>` : `${player.totalWins === player.totalLosses ? `<h2 class="svelte-dc1w8r">${escape(player.name)} has the same amount of wins and losses! <br>Wins: ${escape(player.totalWins)}🔥
				Losses: ${escape(player.totalLosses)}💩</h2>` : `<h2 class="svelte-dc1w8r">${escape(player.name)} has more wins than losses! <br>Wins: ${escape(player.totalWins)}🔥 Losses: ${escape(player.totalLosses)}💩</h2>`}`}`}</div> <div class="stats svelte-dc1w8r"><ul><li>Matches: ${escape(player.totalMatches)}</li> <li>Wins: ${escape(player.totalWins)}</li> <li>Losses: ${escape(player.totalLosses)}</li> <li>Humiliations: ${escape(player.totalHumiliations)}</li></ul> <ul><li>Flawless Victories: ${escape(player.totalFlawlessVictories)}</li> <li>Knockouts: ${escape(player.totalKnockouts)}</li> <li>Suckerpunches: ${escape(player.totalSuckerpunches)}</li> <li>Highest Winstreak: ${escape(player.highestWinStreak)}</li></ul></div> </div>`;
});
export {
  Page as default
};
