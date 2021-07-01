// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#roll-viewer.svelte-1d56u5j.svelte-1d56u5j{position:relative;height:100%;width:100%}#roll-viewer.svelte-1d56u5j p.svelte-1d56u5j{background:rgba(0, 0, 0, 0.4);border-radius:4px;color:white;left:1em;padding:4px 8px;position:absolute;top:1em;z-index:1}#roll-viewer.svelte-1d56u5j.svelte-1d56u5j::before{background:var(--primary-accent);content:\"\";display:block;height:1px;pointer-events:none;position:absolute;top:50%;width:100%;z-index:1}#roll-viewer.svelte-1d56u5j.svelte-1d56u5j::after{background:linear-gradient(var(--background-angle), var(--background-darker) 0%, var(--background-color) 25%, var(--background-color) 75%, var(--background-darker) 100%);background-attachment:fixed;background-position:center;bottom:0;content:\" \";left:0;mix-blend-mode:multiply;pointer-events:none;position:absolute;right:0;top:0}canvas{background:white !important}.openseadragon-canvas:focus{outline:none}svg rect{fill:none;pointer-events:all}mark{background-color:transparent}mark:hover{background-color:transparent;box-shadow:none;outline:6px solid darkturquoise;outline-offset:8px;z-index:1}.svelte-1d56u5j.svelte-1d56u5jmark:hover::before{height:0;position:relative}mark.active::before{position:absolute;content:\"\";top:0;left:0;bottom:0;right:0;mix-blend-mode:multiply;animation:svelte-1d56u5j-mark-recede 0.5s ease-in-out;background-color:yellow;box-shadow:0 0 5px yellow;display:inline-block}mark:hover[data-info]::after{background-color:darkturquoise;color:white;content:attr(data-info);display:block;font-weight:bold;left:calc( 100% + 8px + 6px );padding:8px 10px 8px 4px;position:absolute;text-shadow:0px 0px 8px black;top:-14px;transform:none}.active-note-details.svelte-1d56u5j mark.active[data-info]::after{background-color:none;color:white;content:attr(data-info);display:block;font-weight:bold;left:50%;padding:8px 4px;position:absolute;text-shadow:0px 0px 8px black;top:0;mix-blend-mode:normal;transform:translate(-50%, -100%)}.active-note-details.svelte-1d56u5j mark.active[data-info]:hover::after{left:calc( 100% + 8px + 6px );top:-14px;transform:none}@keyframes svelte-1d56u5j-mark-recede{from{border-radius:30%;mix-blend-mode:normal}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}