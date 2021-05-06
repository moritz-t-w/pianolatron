import './App.svelte.css.proxy.js';
/* src/App.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_store_value,
	space,
	transition_in,
	transition_out
} from "./_snowpack/pkg/svelte/internal.js";

import IntervalTree from "./_snowpack/pkg/node-interval-tree.js";

import {
	pedalling,
	volume,
	tempoControl,
	playbackProgress,
	activeNotes,
	currentTick,
	rollMetadata
} from "./stores.js";

import {
	midiSamplePlayer,
	pianoReady,
	stopAllNotes
} from "./components/SamplePlayer.js";

import RollSelector from "./components/RollSelector.svelte.js";
import RollDetails from "./components/RollDetails.svelte.js";
import RollViewer from "./components/RollViewer.svelte.js";
import Keyboard from "./components/Keyboard.svelte.js";
import TabbedPanel from "./components/TabbedPanel.svelte.js";
import Notification, { notify } from "./ui-components/Notification.svelte.js";
import FlexCollapsible from "./ui-components/FlexCollapsible.svelte.js";

function create_if_block_2(ctx) {
	let rolldetails;
	let t;
	let if_block_anchor;
	let current;
	rolldetails = new RollDetails({});
	let if_block = !/*holesByTickInterval*/ ctx[2].count && create_if_block_3(ctx);

	return {
		c() {
			create_component(rolldetails.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(rolldetails, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!/*holesByTickInterval*/ ctx[2].count) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(rolldetails.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rolldetails.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(rolldetails, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (185:8) {#if !holesByTickInterval.count}
function create_if_block_3(ctx) {
	let p;

	return {
		c() {
			p = element("p");

			p.innerHTML = `Note:<br/>Hole visualization data is not available for this roll at
            this time. Hole highlighting will not be enabled.`;

			attr(p, "class", "svelte-naqm83");
		},
		m(target, anchor) {
			insert(target, p, anchor);
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (181:4) <FlexCollapsible id="left-sidebar" width="20vw">
function create_default_slot_1(ctx) {
	let rollselector;
	let updating_currentRoll;
	let t;
	let if_block_anchor;
	let current;

	function rollselector_currentRoll_binding(value) {
		/*rollselector_currentRoll_binding*/ ctx[6].call(null, value);
	}

	let rollselector_props = {};

	if (/*currentRoll*/ ctx[1] !== void 0) {
		rollselector_props.currentRoll = /*currentRoll*/ ctx[1];
	}

	rollselector = new RollSelector({ props: rollselector_props });
	binding_callbacks.push(() => bind(rollselector, "currentRoll", rollselector_currentRoll_binding));
	let if_block = /*appReady*/ ctx[0] && create_if_block_2(ctx);

	return {
		c() {
			create_component(rollselector.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(rollselector, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollselector_changes = {};

			if (!updating_currentRoll && dirty & /*currentRoll*/ 2) {
				updating_currentRoll = true;
				rollselector_changes.currentRoll = /*currentRoll*/ ctx[1];
				add_flush_callback(() => updating_currentRoll = false);
			}

			rollselector.$set(rollselector_changes);

			if (/*appReady*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*appReady*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(rollselector.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(rollselector.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			destroy_component(rollselector, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (193:4) {#if appReady}
function create_if_block_1(ctx) {
	let div;
	let rollviewer;
	let t;
	let flexcollapsible;
	let current;

	rollviewer = new RollViewer({
			props: {
				imageUrl: /*currentRoll*/ ctx[1].image_url,
				holesByTickInterval: /*holesByTickInterval*/ ctx[2]
			}
		});

	flexcollapsible = new FlexCollapsible({
			props: {
				id: "right-sidebar",
				width: "20vw",
				position: "left",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = element("div");
			create_component(rollviewer.$$.fragment);
			t = space();
			create_component(flexcollapsible.$$.fragment);
			attr(div, "id", "roll");
			attr(div, "class", "svelte-naqm83");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(rollviewer, div, null);
			insert(target, t, anchor);
			mount_component(flexcollapsible, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollviewer_changes = {};
			if (dirty & /*currentRoll*/ 2) rollviewer_changes.imageUrl = /*currentRoll*/ ctx[1].image_url;
			if (dirty & /*holesByTickInterval*/ 4) rollviewer_changes.holesByTickInterval = /*holesByTickInterval*/ ctx[2];
			rollviewer.$set(rollviewer_changes);
			const flexcollapsible_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				flexcollapsible_changes.$$scope = { dirty, ctx };
			}

			flexcollapsible.$set(flexcollapsible_changes);
		},
		i(local) {
			if (current) return;
			transition_in(rollviewer.$$.fragment, local);
			transition_in(flexcollapsible.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rollviewer.$$.fragment, local);
			transition_out(flexcollapsible.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(rollviewer);
			if (detaching) detach(t);
			destroy_component(flexcollapsible, detaching);
		}
	};
}

// (197:6) <FlexCollapsible id="right-sidebar" width="20vw" position="left">
function create_default_slot(ctx) {
	let tabbedpanel;
	let current;

	tabbedpanel = new TabbedPanel({
			props: {
				playPauseApp: /*playPauseApp*/ ctx[3],
				stopApp: /*stopApp*/ ctx[4],
				skipToPercentage: /*skipToPercentage*/ ctx[5]
			}
		});

	return {
		c() {
			create_component(tabbedpanel.$$.fragment);
		},
		m(target, anchor) {
			mount_component(tabbedpanel, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(tabbedpanel.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tabbedpanel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(tabbedpanel, detaching);
		}
	};
}

// (205:2) {#if !appReady}
function create_if_block(ctx) {
	let div1;

	return {
		c() {
			div1 = element("div");

			div1.innerHTML = `<div><span></span>  <span></span>  <span></span>  <span></span>  <span></span></div>
      Loading resources...`;

			attr(div1, "id", "loading");
			attr(div1, "class", "svelte-naqm83");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let flexcollapsible;
	let t0;
	let t1;
	let div1;
	let keyboard;
	let t2;
	let t3;
	let notification;
	let current;

	flexcollapsible = new FlexCollapsible({
			props: {
				id: "left-sidebar",
				width: "20vw",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	let if_block0 = /*appReady*/ ctx[0] && create_if_block_1(ctx);
	keyboard = new Keyboard({ props: { keyCount: "88", activeNotes } });
	let if_block1 = !/*appReady*/ ctx[0] && create_if_block(ctx);
	notification = new Notification({});

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			create_component(flexcollapsible.$$.fragment);
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			div1 = element("div");
			create_component(keyboard.$$.fragment);
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			create_component(notification.$$.fragment);
			attr(div0, "class", "svelte-naqm83");
			attr(div1, "id", "keyboard-container");
			attr(div1, "class", "svelte-naqm83");
			attr(div2, "id", "app");
			attr(div2, "class", "svelte-naqm83");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(flexcollapsible, div0, null);
			append(div0, t0);
			if (if_block0) if_block0.m(div0, null);
			append(div2, t1);
			append(div2, div1);
			mount_component(keyboard, div1, null);
			append(div2, t2);
			if (if_block1) if_block1.m(div2, null);
			insert(target, t3, anchor);
			mount_component(notification, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const flexcollapsible_changes = {};

			if (dirty & /*$$scope, holesByTickInterval, appReady, currentRoll*/ 65543) {
				flexcollapsible_changes.$$scope = { dirty, ctx };
			}

			flexcollapsible.$set(flexcollapsible_changes);

			if (/*appReady*/ ctx[0]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*appReady*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (!/*appReady*/ ctx[0]) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(flexcollapsible.$$.fragment, local);
			transition_in(if_block0);
			transition_in(keyboard.$$.fragment, local);
			transition_in(notification.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(flexcollapsible.$$.fragment, local);
			transition_out(if_block0);
			transition_out(keyboard.$$.fragment, local);
			transition_out(notification.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_component(flexcollapsible);
			if (if_block0) if_block0.d();
			destroy_component(keyboard);
			if (if_block1) if_block1.d();
			if (detaching) detach(t3);
			destroy_component(notification, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $rollMetadata;
	let $currentTick;
	component_subscribe($$self, rollMetadata, $$value => $$invalidate(10, $rollMetadata = $$value));
	component_subscribe($$self, currentTick, $$value => $$invalidate(11, $currentTick = $$value));
	let appReady = false;
	let mididataReady;
	let metadataReady;
	let currentRoll;
	let previousRoll;
	let holesByTickInterval = new IntervalTree();

	const buildHolesIntervalTree = () => {
		const { ROLL_TYPE, FIRST_HOLE, IMAGE_LENGTH, holeData } = $rollMetadata;
		const scrollDownwards = ROLL_TYPE === "welte-red";

		const firstHolePx = scrollDownwards
		? parseInt(FIRST_HOLE, 10)
		: parseInt(IMAGE_LENGTH, 10) - parseInt(FIRST_HOLE, 10);

		holeData.forEach(hole => {
			const { ORIGIN_ROW, OFF_TIME } = hole;

			const tickOn = scrollDownwards
			? ORIGIN_ROW - firstHolePx
			: firstHolePx - ORIGIN_ROW;

			const tickOff = scrollDownwards
			? OFF_TIME - firstHolePx
			: firstHolePx - OFF_TIME;

			holesByTickInterval.insert(tickOn, tickOff, hole);
		});
	};

	const playPauseApp = () => {
		if (midiSamplePlayer.isPlaying()) {
			midiSamplePlayer.pause();
			stopAllNotes();
			activeNotes.reset();
		} else {
			midiSamplePlayer.play();
		}
	};

	const stopApp = () => {
		midiSamplePlayer.stop();
		stopAllNotes();
		playbackProgress.set(0);
		currentTick.set(0);
		activeNotes.reset();
		pedalling.set({ soft: false, sustain: false });
	};

	const resetApp = () => {
		mididataReady = false;
		$$invalidate(0, appReady = false);
		stopApp();
		tempoControl.set(60);
		volume.update(val => ({ ...val, left: 1, right: 1 }));
		$$invalidate(2, holesByTickInterval = new IntervalTree());
	};

	const skipToTick = tick => {
		set_store_value(currentTick, $currentTick = tick, $currentTick);

		if (midiSamplePlayer.isPlaying()) {
			midiSamplePlayer.pause();
			midiSamplePlayer.skipToTick($currentTick);
			midiSamplePlayer.play();
		} else {
			midiSamplePlayer.skipToTick($currentTick);
		}
	};

	const skipToPercentage = percentage => skipToTick(midiSamplePlayer.totalTicks * percentage);

	const loadRoll = roll => {
		mididataReady = fetch(`./assets/midi/${roll.druid}.mid`).then(mididataResponse => {
			if (mididataResponse.status === 200) return mididataResponse.arrayBuffer();
			throw new Error("Error fetching MIDI file! (Operation cancelled)");
		}).then(mididataArrayBuffer => {
			resetApp();
			midiSamplePlayer.loadArrayBuffer(mididataArrayBuffer);
		}).catch(err => {
			notify({
				title: "Error!",
				message: err,
				type: "error"
			});

			$$invalidate(1, currentRoll = previousRoll);
		});

		metadataReady = fetch(`./assets/json/${roll.druid}.json`).then(metadataResponse => {
			if (metadataResponse.status === 200) return metadataResponse.json();
			throw new Error("Error fetching metadata file! (Operation cancelled)");
		}).catch(err => {
			notify({
				title: "Error!",
				message: err,
				type: "error"
			});

			$$invalidate(1, currentRoll = previousRoll);
		});

		Promise.all([mididataReady, metadataReady, pianoReady]).then(({ 1: metadataJson }) => {
			set_store_value(rollMetadata, $rollMetadata = { ...$rollMetadata, ...metadataJson }, $rollMetadata);
			if (metadataJson.holeData) buildHolesIntervalTree(metadataJson.holeData);
			$$invalidate(0, appReady = true);
			$$invalidate(9, previousRoll = currentRoll);
		});
	};

	midiSamplePlayer.on("endOfFile", () => stopApp());

	function rollselector_currentRoll_binding(value) {
		currentRoll = value;
		$$invalidate(1, currentRoll);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*currentRoll, previousRoll*/ 514) {
			$: {
				if (currentRoll !== previousRoll) {
					loadRoll(currentRoll);
				}
			}
		}

		if ($$self.$$.dirty & /*$currentTick*/ 2048) {
			$: playbackProgress.update(() => $currentTick / midiSamplePlayer.totalTicks);
		}
	};

	return [
		appReady,
		currentRoll,
		holesByTickInterval,
		playPauseApp,
		stopApp,
		skipToPercentage,
		rollselector_currentRoll_binding
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;