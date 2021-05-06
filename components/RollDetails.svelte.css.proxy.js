// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "dl.svelte-m7danx{display:block;overflow:auto;padding:0.5em 1em}dt.svelte-m7danx{font-family:serif;font-size:1.4em;margin-top:0.5em;margin-bottom:0.2em}dd.svelte-m7danx:not(:has(a)){text-transform:capitalize}dd.svelte-m7danx span{opacity:0.5}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}