// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#app.svelte-naqm83.svelte-naqm83{height:100vh;display:flex;flex-direction:column;overflow:hidden}#app.svelte-naqm83>div.svelte-naqm83:first-child{flex:1 0 auto;position:relative;display:grid;grid-template-rows:1fr;grid-template-columns:auto 1fr auto;grid-template-areas:\"left center right\"}#left-sidebar{grid-area:left}#left-sidebar p.svelte-naqm83.svelte-naqm83{opacity:0.5;padding:0.5em 1em}#roll.svelte-naqm83.svelte-naqm83{position:relative;flex:1 0 auto;grid-area:center}#right-sidebar{grid-area:right}#keyboard-container.svelte-naqm83.svelte-naqm83{flex:0 1 auto}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}