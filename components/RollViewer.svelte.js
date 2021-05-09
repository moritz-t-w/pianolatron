import './RollViewer.svelte.css.proxy.js';
/* src/components/RollViewer.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	add_flush_callback,
	add_render_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_bidirectional_transition,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	prevent_default,
	run_all,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../_snowpack/pkg/svelte.js";
import { fade } from "../_snowpack/pkg/svelte/transition.js";
import OpenSeadragon from "../_snowpack/pkg/openseadragon.js";
import { rollMetadata, currentTick, userSettings } from "../stores.js";
import RollViewerControls from "./RollViewerControls.svelte.js";

function create_if_block_1(ctx) {
	let p;
	let p_transition;
	let current;

	return {
		c() {
			p = element("p");
			p.textContent = "Downloading roll image...";
			attr(p, "class", "svelte-1pt7pyv");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			current = true;
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!p_transition) p_transition = create_bidirectional_transition(p, fade, {}, true);
				p_transition.run(1);
			});

			current = true;
		},
		o(local) {
			if (!p_transition) p_transition = create_bidirectional_transition(p, fade, {}, false);
			p_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(p);
			if (detaching && p_transition) p_transition.end();
		}
	};
}

// (332:2) {#if showControls}
function create_if_block(ctx) {
	let rollviewercontrols;
	let updating_strafing;
	let current;

	function rollviewercontrols_strafing_binding(value) {
		/*rollviewercontrols_strafing_binding*/ ctx[10].call(null, value);
	}

	let rollviewercontrols_props = {
		openSeadragon: /*openSeadragon*/ ctx[1],
		minZoomLevel,
		maxZoomLevel
	};

	if (/*strafing*/ ctx[3] !== void 0) {
		rollviewercontrols_props.strafing = /*strafing*/ ctx[3];
	}

	rollviewercontrols = new RollViewerControls({ props: rollviewercontrols_props });
	binding_callbacks.push(() => bind(rollviewercontrols, "strafing", rollviewercontrols_strafing_binding));

	return {
		c() {
			create_component(rollviewercontrols.$$.fragment);
		},
		m(target, anchor) {
			mount_component(rollviewercontrols, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollviewercontrols_changes = {};
			if (dirty & /*openSeadragon*/ 2) rollviewercontrols_changes.openSeadragon = /*openSeadragon*/ ctx[1];

			if (!updating_strafing && dirty & /*strafing*/ 8) {
				updating_strafing = true;
				rollviewercontrols_changes.strafing = /*strafing*/ ctx[3];
				add_flush_callback(() => updating_strafing = false);
			}

			rollviewercontrols.$set(rollviewercontrols_changes);
		},
		i(local) {
			if (current) return;
			transition_in(rollviewercontrols.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rollviewercontrols.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(rollviewercontrols, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	let mounted;
	let dispose;
	let if_block0 = !/*rollImageReady*/ ctx[4] && create_if_block_1(ctx);
	let if_block1 = /*showControls*/ ctx[5] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			attr(div, "id", "roll-viewer");
			attr(div, "class", "svelte-1pt7pyv");
			toggle_class(div, "active-note-details", /*$userSettings*/ ctx[7].activeNoteDetails);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append(div, t);
			if (if_block1) if_block1.m(div, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "mouseenter", /*mouseenter_handler*/ ctx[11]),
					listen(div, "mouseleave", /*mouseleave_handler*/ ctx[12]),
					listen(div, "wheel", prevent_default(/*wheel_handler*/ ctx[13]), true)
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!/*rollImageReady*/ ctx[4]) {
				if (if_block0) {
					if (dirty & /*rollImageReady*/ 16) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*showControls*/ ctx[5]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*showControls*/ 32) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (dirty & /*$userSettings*/ 128) {
				toggle_class(div, "active-note-details", /*$userSettings*/ ctx[7].activeNoteDetails);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

const WELTE_MIDI_START = 10;
const WELTE_RED_FIRST_NOTE = 24;
const WELTE_RED_LAST_NOTE = 103;
const defaultZoomLevel = 1;
const minZoomLevel = 0.1;
const maxZoomLevel = 4;

function instance($$self, $$props, $$invalidate) {
	let $rollMetadata;
	let $currentTick;
	let $userSettings;
	component_subscribe($$self, rollMetadata, $$value => $$invalidate(16, $rollMetadata = $$value));
	component_subscribe($$self, currentTick, $$value => $$invalidate(17, $currentTick = $$value));
	component_subscribe($$self, userSettings, $$value => $$invalidate(7, $userSettings = $$value));
	let { imageUrl } = $$props;
	let { holesByTickInterval } = $$props;
	let { skipToTick } = $$props;
	let openSeadragon;
	let firstHolePx;
	let strafing = false;
	let rollImageReady;
	let marks = [];
	let hoveredMark;
	let showControls;

	const getNoteName = trackerHole => {
		const midiNumber = trackerHole + WELTE_MIDI_START;

		if (midiNumber >= WELTE_RED_FIRST_NOTE && midiNumber <= WELTE_RED_LAST_NOTE) {
			const octave = parseInt(midiNumber / 12, 10) - 1;
			const name = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"][(midiNumber - 21) % 12];
			return `${name}${octave}`;
		}

		return null;
	};

	const createMark = hole => {
		const { WIDTH_COL, ORIGIN_COL, ORIGIN_ROW, OFF_TIME, TRACKER_HOLE } = hole;
		const mark = document.createElement("mark");
		const noteName = getNoteName(TRACKER_HOLE);
		if (noteName) mark.dataset.info = noteName;

		mark.addEventListener("mouseout", () => {
			if (!marks.map(([_hole]) => _hole).includes(hole)) openSeadragon.viewport.viewer.removeOverlay(hoveredMark);
		});

		const viewportRectangle = openSeadragon.viewport.imageToViewportRectangle(ORIGIN_COL, ORIGIN_ROW, WIDTH_COL, OFF_TIME - ORIGIN_ROW);
		openSeadragon.viewport.viewer.addOverlay(mark, viewportRectangle);
		return mark;
	};

	const createHolesOverlaySvg = () => {
		const { IMAGE_WIDTH, IMAGE_LENGTH, holeData } = $rollMetadata;
		if (!holeData) return;
		const imageWidth = parseInt(IMAGE_WIDTH, 10);
		const imageLength = parseInt(IMAGE_LENGTH, 10);
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
		const entireViewportRectangle = openSeadragon.viewport.imageToViewportRectangle(0, 0, imageWidth, imageLength);
		svg.setAttribute("width", imageWidth);
		svg.setAttribute("height", imageLength);
		svg.setAttribute("viewBox", `0 0 ${imageWidth} ${imageLength}`);
		svg.appendChild(g);

		holeData.forEach(hole => {
			const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			const { ORIGIN_COL, ORIGIN_ROW, WIDTH_COL, OFF_TIME } = hole;
			rect.setAttribute("x", ORIGIN_COL);
			rect.setAttribute("y", ORIGIN_ROW);
			rect.setAttribute("width", WIDTH_COL);
			rect.setAttribute("height", OFF_TIME - ORIGIN_ROW);

			rect.addEventListener("mouseover", () => {
				if (marks.map(([_hole]) => _hole).includes(hole)) return;
				openSeadragon.viewport.viewer.removeOverlay(hoveredMark);
				hoveredMark = createMark(hole);
			});

			g.appendChild(rect);
		});

		openSeadragon.viewport.viewer.addOverlay(svg, entireViewportRectangle);
	};

	const advanceToTick = tick => {
		if (!openSeadragon) return;
		const { viewport } = openSeadragon;

		// if we're panning horizontally we want the target bounds, if otherwise
		//  (and most especially if we happen to be zooming) we want the current bounds
		const viewportBounds = viewport.getBounds(!strafing);

		const linePx = firstHolePx + (scrollDownwards ? tick : -tick);
		const lineViewport = viewport.imageToViewportCoordinates(0, linePx);
		const lineCenter = new OpenSeadragon.Point(viewportBounds.x + viewportBounds.width / 2, lineViewport.y);
		viewport.panTo(lineCenter);
	};

	const highlightHoles = tick => {
		if (!openSeadragon) return;
		const holes = holesByTickInterval.search(tick, tick);

		marks = marks.filter(([hole, elem]) => {
			if (holes.includes(hole)) return true;
			openSeadragon.viewport.viewer.removeOverlay(elem);
			return false;
		});

		holes.forEach(hole => {
			if (marks.map(([_hole]) => _hole).includes(hole)) return;
			const mark = createMark(hole);
			mark.classList.add("active");
			marks.push([hole, mark]);
		});
	};

	onMount(async () => {
		$$invalidate(1, openSeadragon = OpenSeadragon({
			id: "roll-viewer",
			showNavigationControl: false,
			panHorizontal: true,
			visibilityRatio: 1,
			defaultZoomLevel,
			minZoomLevel,
			maxZoomLevel,
			constrainDuringPan: true,
			preserveImageSizeOnResize: true
		}));

		openSeadragon.addOnceHandler("update-viewport", () => {
			createHolesOverlaySvg();
			advanceToTick(0);
		});

		openSeadragon.addHandler("canvas-drag", () => {
			const { viewport } = openSeadragon;
			const viewportCenter = viewport.getCenter(false);
			const imgCenter = viewport.viewportToImageCoordinates(viewportCenter);

			skipToTick(scrollDownwards
			? imgCenter.y - firstHolePx
			: firstHolePx - imgCenter.y);

			$$invalidate(3, strafing = true);
		});

		openSeadragon.addHandler("canvas-drag-end", () => $$invalidate(3, strafing = false));

		openSeadragon.addHandler("open", () => {
			const tiledImage = openSeadragon.viewport.viewer.world.getItemAt(0);
			tiledImage.addOnceHandler("fully-loaded-change", () => $$invalidate(4, rollImageReady = true));
		});

		openSeadragon.open(imageUrl);
	});

	function rollviewercontrols_strafing_binding(value) {
		strafing = value;
		$$invalidate(3, strafing);
	}

	const mouseenter_handler = () => $$invalidate(5, showControls = true);
	const mouseleave_handler = () => $$invalidate(5, showControls = false);

	const wheel_handler = event => {
		if (event.ctrlKey) {
			const { viewport } = openSeadragon;
			const viewportBounds = viewport.getBounds();
			const imgBounds = viewport.viewportToImageRectangle(viewportBounds);

			const delta = event.deltaY > 0
			? imgBounds.height / 10
			: -imgBounds.height / 10;

			const centerY = imgBounds.y + imgBounds.height / 2;

			skipToTick(scrollDownwards
			? centerY + delta - firstHolePx
			: firstHolePx - centerY + delta);

			event.stopPropagation();
		}
	};

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(8, imageUrl = $$props.imageUrl);
		if ("holesByTickInterval" in $$props) $$invalidate(9, holesByTickInterval = $$props.holesByTickInterval);
		if ("skipToTick" in $$props) $$invalidate(0, skipToTick = $$props.skipToTick);
	};

	let scrollDownwards;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$currentTick*/ 131072) {
			$: advanceToTick($currentTick);
		}

		if ($$self.$$.dirty & /*$currentTick*/ 131072) {
			$: highlightHoles($currentTick);
		}

		if ($$self.$$.dirty & /*$rollMetadata*/ 65536) {
			$: $$invalidate(6, scrollDownwards = $rollMetadata.ROLL_TYPE === "welte-red");
		}

		if ($$self.$$.dirty & /*scrollDownwards, $rollMetadata*/ 65600) {
			$: $$invalidate(2, firstHolePx = scrollDownwards
			? parseInt($rollMetadata.FIRST_HOLE, 10)
			: parseInt($rollMetadata.IMAGE_LENGTH, 10) - parseInt($rollMetadata.FIRST_HOLE, 10));
		}
	};

	return [
		skipToTick,
		openSeadragon,
		firstHolePx,
		strafing,
		rollImageReady,
		showControls,
		scrollDownwards,
		$userSettings,
		imageUrl,
		holesByTickInterval,
		rollviewercontrols_strafing_binding,
		mouseenter_handler,
		mouseleave_handler,
		wheel_handler
	];
}

class RollViewer extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			imageUrl: 8,
			holesByTickInterval: 9,
			skipToTick: 0
		});
	}
}

export default RollViewer;