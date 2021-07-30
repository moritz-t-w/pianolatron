import './RollDetails.svelte.css.proxy.js';
/* src/components/RollDetails.svelte generated by Svelte v3.41.0 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	attr,
	component_subscribe,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../_snowpack/pkg/svelte/internal.js";

import { rollMetadata } from "../stores.js";

function create_fragment(ctx) {
	let dl;
	let dt0;
	let dd0;
	let html_tag;
	let raw0_value = (/*$rollMetadata*/ ctx[0].TITLE || /*$rollMetadata*/ ctx[0].title || unavailable) + "";
	let t1;
	let dt1;
	let dd1;
	let html_tag_1;
	let raw1_value = (/*$rollMetadata*/ ctx[0].PERFORMER || /*$rollMetadata*/ ctx[0].performer || unavailable) + "";
	let t3;
	let dt2;
	let dd2;
	let html_tag_2;
	let raw2_value = (/*$rollMetadata*/ ctx[0].COMPOSER || /*$rollMetadata*/ ctx[0].composer || unavailable) + "";
	let t5;
	let dt3;
	let dd3;
	let html_tag_3;
	let raw3_value = (/*$rollMetadata*/ ctx[0].LABEL || /*$rollMetadata*/ ctx[0].label || unavailable) + "";
	let t7;
	let dt4;
	let dd4;
	let a;
	let raw4_value = (/*$rollMetadata*/ ctx[0].PURL || unavailable) + "";
	let a_href_value;
	let t9;
	let dt5;
	let dd5;
	let raw5_value = (/*$rollMetadata*/ ctx[0].CALLNUM || unavailable) + "";

	return {
		c() {
			dl = element("dl");
			dt0 = element("dt");
			dt0.textContent = "Title";
			dd0 = element("dd");
			html_tag = new HtmlTag();
			t1 = space();
			dt1 = element("dt");
			dt1.textContent = "Performer";
			dd1 = element("dd");
			html_tag_1 = new HtmlTag();
			t3 = space();
			dt2 = element("dt");
			dt2.textContent = "Composer";
			dd2 = element("dd");
			html_tag_2 = new HtmlTag();
			t5 = space();
			dt3 = element("dt");
			dt3.textContent = "Label";
			dd3 = element("dd");
			html_tag_3 = new HtmlTag();
			t7 = space();
			dt4 = element("dt");
			dt4.textContent = "PURL";
			dd4 = element("dd");
			a = element("a");
			t9 = space();
			dt5 = element("dt");
			dt5.textContent = "Call No";
			dd5 = element("dd");
			attr(dt0, "class", "svelte-m7danx");
			html_tag.a = t1;
			attr(dd0, "class", "svelte-m7danx");
			attr(dt1, "class", "svelte-m7danx");
			html_tag_1.a = t3;
			attr(dd1, "class", "svelte-m7danx");
			attr(dt2, "class", "svelte-m7danx");
			html_tag_2.a = t5;
			attr(dd2, "class", "svelte-m7danx");
			attr(dt3, "class", "svelte-m7danx");
			html_tag_3.a = t7;
			attr(dd3, "class", "svelte-m7danx");
			attr(dt4, "class", "svelte-m7danx");
			attr(a, "href", a_href_value = /*$rollMetadata*/ ctx[0].PURL);
			attr(dd4, "class", "svelte-m7danx");
			attr(dt5, "class", "svelte-m7danx");
			attr(dd5, "class", "svelte-m7danx");
			attr(dl, "class", "svelte-m7danx");
		},
		m(target, anchor) {
			insert(target, dl, anchor);
			append(dl, dt0);
			append(dl, dd0);
			html_tag.m(raw0_value, dd0);
			append(dd0, t1);
			append(dl, dt1);
			append(dl, dd1);
			html_tag_1.m(raw1_value, dd1);
			append(dd1, t3);
			append(dl, dt2);
			append(dl, dd2);
			html_tag_2.m(raw2_value, dd2);
			append(dd2, t5);
			append(dl, dt3);
			append(dl, dd3);
			html_tag_3.m(raw3_value, dd3);
			append(dd3, t7);
			append(dl, dt4);
			append(dl, dd4);
			append(dd4, a);
			a.innerHTML = raw4_value;
			append(dd4, t9);
			append(dl, dt5);
			append(dl, dd5);
			dd5.innerHTML = raw5_value;
		},
		p(ctx, [dirty]) {
			if (dirty & /*$rollMetadata*/ 1 && raw0_value !== (raw0_value = (/*$rollMetadata*/ ctx[0].TITLE || /*$rollMetadata*/ ctx[0].title || unavailable) + "")) html_tag.p(raw0_value);
			if (dirty & /*$rollMetadata*/ 1 && raw1_value !== (raw1_value = (/*$rollMetadata*/ ctx[0].PERFORMER || /*$rollMetadata*/ ctx[0].performer || unavailable) + "")) html_tag_1.p(raw1_value);
			if (dirty & /*$rollMetadata*/ 1 && raw2_value !== (raw2_value = (/*$rollMetadata*/ ctx[0].COMPOSER || /*$rollMetadata*/ ctx[0].composer || unavailable) + "")) html_tag_2.p(raw2_value);
			if (dirty & /*$rollMetadata*/ 1 && raw3_value !== (raw3_value = (/*$rollMetadata*/ ctx[0].LABEL || /*$rollMetadata*/ ctx[0].label || unavailable) + "")) html_tag_3.p(raw3_value);
			if (dirty & /*$rollMetadata*/ 1 && raw4_value !== (raw4_value = (/*$rollMetadata*/ ctx[0].PURL || unavailable) + "")) a.innerHTML = raw4_value;;

			if (dirty & /*$rollMetadata*/ 1 && a_href_value !== (a_href_value = /*$rollMetadata*/ ctx[0].PURL)) {
				attr(a, "href", a_href_value);
			}

			if (dirty & /*$rollMetadata*/ 1 && raw5_value !== (raw5_value = (/*$rollMetadata*/ ctx[0].CALLNUM || unavailable) + "")) dd5.innerHTML = raw5_value;;
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(dl);
		}
	};
}

const unavailable = "<span>Unavailable</span>";

function instance($$self, $$props, $$invalidate) {
	let $rollMetadata;
	component_subscribe($$self, rollMetadata, $$value => $$invalidate(0, $rollMetadata = $$value));
	return [$rollMetadata];
}

class RollDetails extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default RollDetails;