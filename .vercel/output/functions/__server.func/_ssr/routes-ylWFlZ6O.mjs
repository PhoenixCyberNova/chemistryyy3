import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import "./client-BzrKyXF3.mjs";
import { i as hasGateSessionMarker } from "./server-zH86KfTb.mjs";
import { t as ChemLab } from "./ChemLab-CHr5D4wx.mjs";
import { A as Flame, B as ChevronDown, C as ListChecks, D as GraduationCap, E as Hammer, F as CornerDownLeft, G as BookOpen, H as Brain, I as Clock, J as ArrowRight, K as BookMarked, L as CircleX, M as Droplets, N as Download, O as Gauge, P as Crosshair, R as CircleCheck, S as Megaphone, T as LayoutGrid, U as Bookmark, V as Check, W as BookmarkCheck, X as AlarmClock, _ as Play, a as Timer, b as MessageCircle, c as Target, d as Sparkles, f as Shuffle, g as RotateCcw, h as Rows3, j as Eye, k as FlaskConical, l as Sun, m as Search, n as Users, o as Thermometer, p as Send, q as Beaker, r as Trophy, s as TestTubes, t as X, u as Star, v as Palette, w as Lightbulb, x as Menu, y as Moon, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as mergePayload, n as authMiddleware, r as bumpStreak, t as EMPTY_STUDENT } from "./types-vbGz7LKS.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ylWFlZ6O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askChem = createServerFn({ method: "POST" }).validator((input) => {
	return {
		message: (input?.message ?? "").trim().slice(0, 800),
		history: (input?.history ?? []).slice(-6)
	};
}).handler(createSsrRpc("3d9b8d195d02142ee527bd4b887243a9b9a3fbf18736926791b744105b556aa8"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var SUGGESTIONS = [
	"Why is ZnO yellow when hot?",
	"Difference between roasting and calcination?",
	"Explain esterification with the equation",
	"Why does tooth enamel decay below pH 5.5?"
];
function AiTutor() {
	const [input, setInput] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msgs, setMsgs] = (0, import_react.useState)([{
		role: "assistant",
		content: "Welcome to your private tutor. Ask any Class 10 Chemistry question — reactions, colours, pH, extraction, ethanol, esters…"
	}]);
	const box = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		box.current?.scrollTo({
			top: box.current.scrollHeight,
			behavior: "smooth"
		});
	}, [msgs, busy]);
	const send = async (raw) => {
		const message = (raw ?? input).trim();
		if (!message || busy) return;
		setInput("");
		const history = msgs.filter((_, idx) => idx > 0);
		setMsgs((m) => [...m, {
			role: "user",
			content: message
		}]);
		setBusy(true);
		try {
			const res = await askChem({ data: {
				message,
				history
			} });
			const text = res.ok ? res.text : res.error;
			setMsgs((m) => [...m, {
				role: "assistant",
				content: text
			}]);
		} catch {
			setMsgs((m) => [...m, {
				role: "assistant",
				content: "Could not reach the tutor. Try again."
			}]);
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass overflow-hidden rounded-[1.35rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 border-b border-border px-5 py-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-xl border border-primary/30 bg-primary/12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-4 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-fg",
						children: "ChemVault Tutor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.14em] text-gold",
						children: "GROK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ms-auto flex items-center gap-1.5 text-[0.65rem] font-semibold text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${busy ? "bg-gold pulse-dot" : "bg-ok"}` }), busy ? "Thinking" : "Online"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: box,
				className: "flex h-96 flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-5",
				children: [msgs.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("pop-in max-w-[86%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[0.85rem] leading-relaxed", m.role === "user" ? "ms-auto rounded-br-md bg-primary text-[var(--color-on-primary)]" : "me-auto rounded-bl-md border border-border bg-raised/80 text-fg"),
					children: m.content
				}, idx)), busy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "me-auto flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md border border-border bg-raised/80 px-4 py-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-primary" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border px-4 py-3 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "no-scrollbar mb-2.5 flex gap-2 overflow-x-auto",
						children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void send(s),
							disabled: busy,
							className: "chip h-8 text-[0.72rem] disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-gold" }), s]
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: input,
							suppressHydrationWarning: true,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") send();
							},
							placeholder: "Ask a chemistry question…",
							className: "input h-12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: busy || !input.trim(),
							onClick: () => void send(),
							"aria-label": "Send message",
							className: "btn btn-primary size-12 shrink-0 rounded-xl p-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-center gap-1.5 text-[0.65rem] text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3" }), "User-initiated · answers follow NCERT Class 10 language"]
					})
				]
			})
		]
	});
}
/**
* Stable fallback user, used ONLY when auth is disabled
* (`VITE_AUTH_ENABLED=false`, the shipped default). With auth on, the sandbox
* live preview does real sign-in via the baked preview client. Its id is
* `"dev-user"` — the SAME id `verify.server.ts` returns server-side — so per-user
* rows written in that mode belong to one consistent owner.
*/
var DEV_USER = {
	id: "dev-user",
	displayName: "Dev User",
	primaryEmail: "dev@example.com",
	profileImageUrl: null,
	isDevFallback: true
};
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	return {
		user: DEV_USER,
		isPending: false
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	(0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			false
		]
	});
}
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "size-10 shrink-0 animate-pulse rounded-xl bg-raised",
		"aria-hidden": true
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-w-0 max-w-[42vw] overflow-hidden sm:max-w-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		className: "btn btn-ghost h-10 shrink-0 rounded-xl px-3.5 text-xs",
		children: "Sign in"
	});
}
var RULES = [
	{
		re: /\bsilvery\s*white\b/i,
		hex: "#d6dde6",
		label: "silvery white"
	},
	{
		re: /\bpale\s*yellow\b/i,
		hex: "#fde68a",
		label: "pale yellow"
	},
	{
		re: /\bgreenish[-\s]?yellow\b/i,
		hex: "#a3e635",
		label: "greenish-yellow"
	},
	{
		re: /\breddish[-\s]?brown\b/i,
		hex: "#b45309",
		label: "reddish-brown"
	},
	{
		re: /\byellowish[-\s]?brown\b/i,
		hex: "#b45309",
		label: "yellowish-brown"
	},
	{
		re: /\bbluish[-\s]?green\b/i,
		hex: "#0d9488",
		label: "bluish-green"
	},
	{
		re: /\bpale\s*green\b/i,
		hex: "#86efac",
		label: "pale green"
	},
	{
		re: /\bdazzling white\b/i,
		hex: "#f8fafc",
		label: "dazzling white"
	},
	{
		re: /\bshiny white\b/i,
		hex: "#f8fafc",
		label: "shiny white"
	},
	{
		re: /\bbrown fumes\b|\bbrown gas\b|\bbrown no/i,
		hex: "#9a3412",
		label: "brown"
	},
	{
		re: /\bpurple\b/i,
		hex: "#6b21a8",
		label: "purple"
	},
	{
		re: /\borange\b/i,
		hex: "#ea580c",
		label: "orange"
	},
	{
		re: /\bviolet\b/i,
		hex: "#5b21b6",
		label: "violet"
	},
	{
		re: /\bpink\b/i,
		hex: "#f472b6",
		label: "pink"
	},
	{
		re: /\bgrey\b|\bgray\b/i,
		hex: "#6b7280",
		label: "grey"
	},
	{
		re: /\bgreen\b/i,
		hex: "#22c55e",
		label: "green"
	},
	{
		re: /\bbrown\b/i,
		hex: "#92400e",
		label: "brown"
	},
	{
		re: /\byellow\b/i,
		hex: "#eab308",
		label: "yellow"
	},
	{
		re: /\bblue\b/i,
		hex: "#1e90ff",
		label: "blue"
	},
	{
		re: /\bblack\b/i,
		hex: "#111827",
		label: "black"
	},
	{
		re: /\bwhite\b/i,
		hex: "#f8fafc",
		label: "white"
	},
	{
		re: /\bmilky\b/i,
		hex: "#f1f5f9",
		label: "milky"
	},
	{
		re: /\bcolourless\b|\bcolorless\b/i,
		hex: "#e5e7eb",
		label: "colourless"
	}
];
function chipsFromColour(text) {
	const found = [];
	const seen = /* @__PURE__ */ new Set();
	for (const rule of RULES) {
		if (!rule.re.test(text)) continue;
		if (seen.has(rule.label)) continue;
		seen.add(rule.label);
		found.push({
			hex: rule.hex,
			label: rule.label
		});
	}
	return found.slice(0, 4);
}
function ColorChips({ text }) {
	const chips = chipsFromColour(text);
	if (!chips.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex flex-wrap items-center gap-1.5",
		children: [chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			title: c.label,
			className: "inline-block size-3.5 shrink-0 rounded-md border border-border",
			style: { background: c.hex }
		}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
	});
}
/** Fires once when the element scrolls into view. */
function useInView(rootMargin = "0px 0px -8% 0px") {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			rootMargin,
			threshold: .06
		});
		io.observe(el);
		return () => io.disconnect();
	}, [rootMargin]);
	return {
		ref,
		inView
	};
}
/** Wrapper that fades/rises its content in on scroll. */
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`,
		style: { "--rv-delay": `${delay}ms` },
		children
	});
}
/** Animated number that counts up when scrolled into view. */
function CountUp({ to, duration = 900, suffix = "", className }) {
	const { ref, inView } = useInView("0px 0px -4% 0px");
	const [val, setVal] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!inView || started.current) return;
		started.current = true;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVal(to);
			return;
		}
		let raf = 0;
		const t0 = performance.now();
		const tick = (t) => {
			const p = Math.min(1, (t - t0) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [val, suffix]
	});
}
var extraReactions = [
	{
		ch: "ch1",
		title: "Heating of Hydrated Copper Sulphate",
		eq: "CuSO₄·5H₂O(s) → CuSO₄(s) + 5H₂O(g)",
		type: "Thermal Decomposition (Water of crystallisation)",
		colour: "Blue crystals → white anhydrous CuSO₄",
		obs: "Blue colour disappears; water droplets may appear on the test tube",
		cond: "Strong heating",
		tip: "On adding water, the white powder turns blue again. Classic reversibility question.",
		desc: "Hydrated copper sulphate loses water of crystallisation on heating and becomes white anhydrous copper sulphate."
	},
	{
		ch: "ch1",
		title: "Iron + Sulphur (Combination)",
		eq: "Fe(s) + S(s) → FeS(s)",
		type: "Combination",
		colour: "Black iron sulphide",
		obs: "Mixture glows; a black compound is formed that is attracted weakly or not like free iron",
		cond: "Heating the mixture",
		tip: "Shows that a compound has properties different from its elements.",
		desc: "Iron and sulphur combine on heating to form iron sulphide. A standard combination example."
	},
	{
		ch: "ch1",
		title: "Silver Nitrate + Sodium Chloride",
		eq: "AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)",
		type: "Double Displacement (Precipitation)",
		colour: "White precipitate of AgCl",
		obs: "White curdy precipitate that turns grey in sunlight",
		cond: "Aqueous solutions mixed",
		tip: "AgCl is photosensitive — links Chapter 1 photolysis to precipitation.",
		desc: "Mixing silver nitrate and sodium chloride gives insoluble silver chloride."
	},
	{
		ch: "ch1",
		title: "Incomplete Combustion of Methane",
		eq: "CH₄(g) + O₂(g) → C(s) + 2H₂O(g)",
		type: "Combustion (Incomplete)",
		colour: "Sooty black carbon",
		obs: "Yellow sooty flame; black carbon deposits",
		cond: "Limited supply of oxygen",
		tip: "Saturated hydrocarbons give a clean blue flame in enough air; limited air gives soot.",
		desc: "When methane burns in insufficient oxygen, carbon (soot) is produced instead of only CO₂."
	},
	{
		ch: "ch2",
		title: "Ethanoic Acid + Zinc (Metal + Acid)",
		eq: "2CH₃COOH + Zn → (CH₃COO)₂Zn + H₂↑",
		type: "Acid + Metal",
		colour: "Colourless solution",
		obs: "Hydrogen gas with pop sound",
		cond: "Room temperature",
		tip: "Carboxylic acids react with metals like mineral acids, but more slowly.",
		desc: "Ethanoic acid reacts with zinc to form zinc ethanoate and hydrogen."
	},
	{
		ch: "ch2",
		title: "Tooth Enamel Attack (Conceptual)",
		eq: "Ca₁₀(PO₄)₆(OH)₂ + acids from bacteria → soluble calcium salts",
		type: "Acid attack / Everyday chemistry",
		colour: "Enamel is white; damage is not a colour change",
		obs: "Tooth decay when mouth pH falls below 5.5",
		cond: "Bacterial acids after sugary food",
		tip: "pH of mouth below 5.5 dissolves enamel. Toothpaste is basic to neutralise acids.",
		desc: "Bacteria produce acids that dissolve calcium phosphate of enamel when pH < 5.5."
	},
	{
		ch: "ch2",
		title: "Treatment of Acidic Soil",
		eq: "Acidic soil + Ca(OH)₂ → more neutral soil",
		type: "Neutralisation (Agriculture)",
		colour: "—",
		obs: "Soil pH rises towards neutral",
		cond: "Adding slaked lime / quicklime / chalk",
		tip: "Factories treat acidic wastes with bases before releasing them.",
		desc: "Slaked lime is added to acidic soil to neutralise it so plants can grow well."
	},
	{
		ch: "ch3",
		title: "Magnesium + Steam (Correct NCERT Form)",
		eq: "Mg(s) + H₂O(g) → MgO(s) + H₂(g)",
		type: "Metal + Steam",
		colour: "White MgO",
		obs: "Hydrogen gas evolved; white oxide forms",
		cond: "Steam (not cold water)",
		tip: "With hot water magnesium can give Mg(OH)₂; with steam it gives MgO. Write the form asked.",
		desc: "Magnesium reacts with steam to form magnesium oxide and hydrogen."
	},
	{
		ch: "ch3",
		title: "Electrolytic Refining of Copper",
		eq: "Cu (impure, anode) → Cu²⁺ + 2e⁻ ; Cu²⁺ + 2e⁻ → Cu (pure, cathode)",
		type: "Electrolytic refining",
		colour: "Reddish-brown pure copper at cathode; anode mud",
		obs: "Pure copper deposits on cathode; impurities settle as anode mud",
		cond: "Acidified copper sulphate electrolyte",
		tip: "Anode is impure metal, cathode is pure metal. Anode mud may contain Au, Ag.",
		desc: "Impure copper is refined by electrolysis using acidified CuSO₄. Pure copper plates on the cathode."
	},
	{
		ch: "ch3",
		title: "Reduction of Iron Oxide in Blast Furnace",
		eq: "Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)",
		type: "Reduction (Extraction)",
		colour: "Molten iron",
		obs: "Iron is obtained from its oxide using carbon monoxide",
		cond: "High temperature in blast furnace",
		tip: "Moderately reactive metals are reduced by carbon / CO. Highly reactive metals need electrolysis.",
		desc: "Haematite is reduced by carbon monoxide to iron in the blast furnace."
	},
	{
		ch: "ch3",
		title: "Copper + Zinc Sulphate (No Reaction)",
		eq: "Cu(s) + ZnSO₄(aq) → no reaction",
		type: "Reactivity series (negative test)",
		colour: "Blue-green / colourless solution unchanged; no deposit",
		obs: "No displacement occurs",
		cond: "Aqueous solution",
		tip: "A less reactive metal cannot displace a more reactive metal. Copper is below zinc.",
		desc: "Copper cannot displace zinc from zinc sulphate because copper is less reactive than zinc."
	},
	{
		ch: "ch4",
		title: "Bromine Water Test for Unsaturation",
		eq: "CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br",
		type: "Addition (Test for unsaturation)",
		colour: "Reddish-brown bromine water is decolourised",
		obs: "Brown colour of bromine disappears",
		cond: "Room temperature, no sunlight needed",
		tip: "Alkanes do not decolourise bromine water in the dark; alkenes and alkynes do.",
		desc: "Ethene adds bromine across the double bond, decolourising bromine water — a test for unsaturation."
	},
	{
		ch: "ch4",
		title: "Hydrogenation of Vegetable Oils",
		eq: "Vegetable oil (unsaturated) + H₂ → vanaspati / saturated fat",
		type: "Addition / Hydrogenation",
		colour: "Liquid oil becomes semi-solid fat",
		obs: "Oil hardens on catalytic hydrogenation",
		cond: "Ni / Pd catalyst, heat",
		tip: "Industrial application of addition reactions. Often a 3-mark question.",
		desc: "Unsaturated vegetable oils add hydrogen in presence of nickel to form saturated fats (vanaspati)."
	},
	{
		ch: "ch4",
		title: "Scum Formation with Hard Water",
		eq: "2C₁₇H₃₅COONa + Ca²⁺ → (C₁₇H₃₅COO)₂Ca ↓ + 2Na⁺",
		type: "Soap + Hard water",
		colour: "White / grey scum",
		obs: "Insoluble scum floats; lather is poor",
		cond: "Hard water containing Ca²⁺ or Mg²⁺",
		tip: "Detergents do not form scum. Soaps fail in hard water because of this precipitate.",
		desc: "Calcium or magnesium ions in hard water form insoluble salts (scum) with soap."
	},
	{
		ch: "ch4",
		title: "Incomplete Combustion of Unsaturated Hydrocarbons",
		eq: "C₂H₄ + O₂ (limited) → C + oxides / sooty flame",
		type: "Combustion",
		colour: "Yellow sooty flame",
		obs: "Black soot; luminous flame",
		cond: "Burning in air",
		tip: "Unsaturated hydrocarbons generally give a sooty flame because of higher carbon content.",
		desc: "Alkenes and alkynes burn with a yellow sooty flame compared with the clean flame of methane."
	},
	{
		ch: "ch4",
		title: "Ethanoic Acid + Sodium Metal",
		eq: "2CH₃COOH + 2Na → 2CH₃COONa + H₂↑",
		type: "Acid + Metal",
		colour: "Colourless",
		obs: "Hydrogen evolved",
		cond: "Room temperature",
		tip: "Both ethanol and ethanoic acid give H₂ with sodium; only the acid gives CO₂ with NaHCO₃.",
		desc: "Ethanoic acid reacts with sodium to form sodium ethanoate and hydrogen."
	}
];
var extraColours = [
	{
		name: "Potassium permanganate (alkaline)",
		formula: "KMnO₄",
		colour: "Purple solution",
		remarks: "Decolourises when it oxidises ethanol.",
		swatch: "#6b21a8"
	},
	{
		name: "Potassium dichromate (acidified)",
		formula: "K₂Cr₂O₇",
		colour: "Orange solution",
		remarks: "Turns green on reduction while oxidising ethanol.",
		swatch: "#ea580c"
	},
	{
		name: "Bromine water",
		formula: "Br₂(aq)",
		colour: "Reddish-brown",
		remarks: "Decolourised by unsaturated hydrocarbons.",
		swatch: "#9a3412"
	},
	{
		name: "Sulphur",
		formula: "S",
		colour: "Yellow",
		remarks: "Burning sulphur smell of SO₂.",
		swatch: "#eab308"
	},
	{
		name: "Graphite",
		formula: "C",
		colour: "Grey-black, slippery",
		remarks: "Allotrope of carbon; conducts electricity.",
		swatch: "#374151"
	},
	{
		name: "Diamond",
		formula: "C",
		colour: "Colourless, brilliant",
		remarks: "Allotrope of carbon; insulator, very hard.",
		swatch: "#e5e7eb"
	},
	{
		name: "Ferric chloride solution",
		formula: "FeCl₃",
		colour: "Yellowish-brown",
		remarks: "Often confused with FeCl₂ (pale green).",
		swatch: "#b45309"
	},
	{
		name: "Sulphur dioxide",
		formula: "SO₂",
		colour: "Colourless gas",
		remarks: "Pungent burning-sulphur smell; from roasting / FeSO₄ heating.",
		swatch: "#f8fafc"
	},
	{
		name: "Carbon monoxide",
		formula: "CO",
		colour: "Colourless, poisonous",
		remarks: "Product of incomplete combustion; reducing agent in blast furnace.",
		swatch: "#e5e7eb"
	},
	{
		name: "Iodine vapour",
		formula: "I₂",
		colour: "Violet vapours",
		remarks: "Sometimes used as extra colour memory; not a core NCERT reaction.",
		swatch: "#5b21b6"
	},
	{
		name: "Sodium metal",
		formula: "Na",
		colour: "Silvery-white, soft",
		remarks: "Stored under kerosene.",
		swatch: "#d1d5db"
	},
	{
		name: "Potassium metal",
		formula: "K",
		colour: "Silvery-white, soft",
		remarks: "Most reactive common metal in the series; stored in kerosene/oil.",
		swatch: "#d1d5db"
	}
];
var extraDefs = [
	{
		title: "Exothermic Reaction",
		body: "A chemical reaction in which heat is released to the surroundings (e.g. respiration, burning of natural gas, neutralisation)."
	},
	{
		title: "Endothermic Reaction",
		body: "A chemical reaction in which heat is absorbed from the surroundings (e.g. photosynthesis, thermal decomposition of CaCO₃)."
	},
	{
		title: "Catalyst",
		body: "A substance that changes the rate of a chemical reaction without itself being consumed (e.g. Ni in hydrogenation, conc. H₂SO₄ in esterification/dehydration)."
	},
	{
		title: "Water of Crystallisation",
		body: "The fixed number of water molecules present in one formula unit of a salt (e.g. CuSO₄·5H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O)."
	},
	{
		title: "Strong Acid",
		body: "An acid that ionises almost completely in water, giving a high concentration of H⁺ ions (e.g. HCl, H₂SO₄, HNO₃)."
	},
	{
		title: "Weak Acid",
		body: "An acid that ionises only partially in water (e.g. CH₃COOH, carbonic acid, citric acid)."
	},
	{
		title: "Universal Indicator",
		body: "A mixture of several indicators that shows different colours at different pH values and is used to find the approximate pH of a solution."
	},
	{
		title: "Ore",
		body: "A mineral from which a metal can be extracted profitably."
	},
	{
		title: "Mineral",
		body: "Naturally occurring substances in the earth’s crust that may contain metals in combined form."
	},
	{
		title: "Metallurgy",
		body: "The various processes used to obtain a metal from its ore: concentration, conversion to oxide, reduction, and refining."
	},
	{
		title: "Alloy",
		body: "A homogeneous mixture of two or more metals, or a metal and a non-metal (e.g. brass = Cu + Zn, bronze = Cu + Sn, steel = Fe + C)."
	},
	{
		title: "Galvanisation",
		body: "The process of coating iron or steel with a thin layer of zinc to prevent rusting."
	},
	{
		title: "Anodising",
		body: "The process of forming a thick protective oxide layer on aluminium by electrolysis."
	},
	{
		title: "Electrolytic Refining",
		body: "Purification of a metal by electrolysis: impure metal is the anode, pure metal is the cathode, and a salt of the metal is the electrolyte."
	},
	{
		title: "Allotropy",
		body: "The property of an element to exist in two or more different physical forms (allotropes) with different properties (diamond, graphite, buckminsterfullerene for carbon)."
	},
	{
		title: "Oxidising Agent",
		body: "A substance that oxidises another substance by providing oxygen or removing hydrogen (and is itself reduced)."
	},
	{
		title: "Reducing Agent",
		body: "A substance that reduces another substance by removing oxygen or providing hydrogen (and is itself oxidised)."
	},
	{
		title: "Hard Water",
		body: "Water that does not easily form lather with soap because it contains Ca²⁺ and Mg²⁺ ions."
	},
	{
		title: "Hydrophobic Tail",
		body: "The long hydrocarbon chain of a soap molecule that is water-repelling and oil-attracting."
	},
	{
		title: "Hydrophilic Head",
		body: "The ionic –COO⁻Na⁺ part of a soap molecule that is water-attracting."
	},
	{
		title: "Detergent",
		body: "A cleansing agent (usually a sodium salt of a long-chain sulphonic acid or similar) that works even in hard water because it does not form scum."
	},
	{
		title: "Isomers (Class 10 mention)",
		body: "Compounds with the same molecular formula but different structures (e.g. C₄H₁₀ as n-butane and iso-butane). Mentioned with carbon compounds."
	}
];
var extraNotes = [
	{
		title: "Water of Crystallisation — Must Know",
		body: "Blue vitriol CuSO₄·5H₂O (5 H₂O)\nWashing soda Na₂CO₃·10H₂O (10 H₂O)\nGypsum CaSO₄·2H₂O (2 H₂O)\nPlaster of Paris CaSO₄·½H₂O (½ H₂O)\nBaking soda NaHCO₃ has NO water of crystallisation."
	},
	{
		title: "Extraction of Metals — Map",
		body: "Highly reactive (K, Na, Ca, Mg, Al) → electrolysis of molten compounds.\nModerately reactive (Zn, Fe, Pb, Cu) → roast/calcine to oxide, then reduce with C/CO/Al.\nLeast reactive (Ag, Au, Hg) → found native or obtained by heating the ore alone (e.g. Hg from cinnabar)."
	},
	{
		title: "Homologous Series Snapshots",
		body: "Alkanes: CₙH₂ₙ₊₂ — methane, ethane, propane, butane\nAlkenes: CₙH₂ₙ — ethene, propene\nAlkynes: CₙH₂ₙ₋₂ — ethyne, propyne\nAlcohols: CₙH₂ₙ₊₁OH — methanol, ethanol\nCarboxylic acids: CₙH₂ₙ₊₁COOH — methanoic, ethanoic\nGeneral properties: same functional group, gradation in physical properties, similar chemical properties, differ by –CH₂."
	},
	{
		title: "Tests that Separate Alcohol vs Carboxylic Acid",
		body: "Both can give H₂ with sodium.\nOnly carboxylic acid gives brisk effervescence of CO₂ with NaHCO₃ / Na₂CO₃.\nEthanoic acid has a vinegar smell; esters have a fruity smell."
	},
	{
		title: "Electron-dot Structures to Practise",
		body: "H₂, O₂, N₂, HCl, H₂O, NH₃, CH₄, C₂H₆, C₂H₄, C₂H₂, CO₂, N₂ (triple bond), O₂ (double bond).\nCount valence electrons, share to complete octets (duet for H)."
	},
	{
		title: "Uses — High Frequency",
		body: "Ethanol: fuel, solvent, drinks (restricted), spirit lamps, starting material for ethanoic acid.\nEthanoic acid: vinegar (5–8% in water), preservative, making esters.\nBleaching powder: bleach cotton/linen, disinfectant for water, oxidising agent.\nBaking soda: baking, antacid, soda-acid fire extinguisher.\nWashing soda: glass, soap, paper, removing permanent hardness.\nPOP: casts, statues, false ceilings."
	},
	{
		title: "How to Balance Equations Fast",
		body: "1. Write skeleton formulae.\n2. Balance metals, then non-metals, then hydrogen, then oxygen.\n3. Balance polyatomic ions as a group if they appear on both sides.\n4. Add state symbols (s, l, g, aq) if the question asks.\n5. Never change formulae to balance — only coefficients."
	},
	{
		title: "Alloys Board Table",
		body: "Brass: Cu + Zn — utensils, decorative\nBronze: Cu + Sn — statues, medals, coins\nSolder: Pb + Sn — joining wires (low melting point)\nSteel: Fe + C — construction\nStainless steel: Fe + Ni + Cr — resists rust"
	}
];
var extraQuiz = {
	ch1: [{
		q: "Blue copper sulphate crystals turn white on heating because they lose:",
		options: [
			"Oxygen",
			"Sulphur trioxide",
			"Water of crystallisation",
			"Copper"
		],
		ans: 2
	}, {
		q: "Which reaction is endothermic?",
		options: [
			"Respiration",
			"Burning of methane",
			"Decomposition of CaCO₃",
			"Neutralisation of NaOH and HCl"
		],
		ans: 2
	}],
	ch2: [{
		q: "Tooth enamel starts dissolving when the pH in the mouth is:",
		options: [
			"Above 7",
			"Equal to 7",
			"Below 5.5",
			"Exactly 14"
		],
		ans: 2
	}, {
		q: "Which salt has no water of crystallisation?",
		options: [
			"Gypsum",
			"Washing soda",
			"Blue vitriol",
			"Baking soda"
		],
		ans: 3
	}],
	ch3: [{
		q: "In electrolytic refining of copper, pure copper is deposited at the:",
		options: [
			"Anode",
			"Cathode",
			"Bottom as anode mud",
			"Electrolyte surface"
		],
		ans: 1
	}, {
		q: "Brass is an alloy of copper and:",
		options: [
			"Tin",
			"Zinc",
			"Nickel",
			"Aluminium"
		],
		ans: 1
	}],
	ch4: [{
		q: "Bromine water is decolourised by:",
		options: [
			"Methane",
			"Ethane",
			"Ethene",
			"Sodium chloride"
		],
		ans: 2
	}, {
		q: "Soap forms scum with hard water due to ions of:",
		options: [
			"Na⁺ and K⁺",
			"Ca²⁺ and Mg²⁺",
			"Cl⁻ and SO₄²⁻",
			"H⁺ and OH⁻"
		],
		ans: 1
	}]
};
var moreReactions = [
	{
		ch: "ch1",
		title: "Photosynthesis (Endothermic)",
		eq: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂  (sunlight, chlorophyll)",
		type: "Endothermic / Combination of processes",
		colour: "Green leaf (chlorophyll)",
		obs: "Glucose stored; oxygen released",
		cond: "Sunlight and chlorophyll",
		tip: "Board contrast: respiration is exothermic, photosynthesis is endothermic.",
		desc: "Green plants convert carbon dioxide and water into glucose using sunlight. Heat/light is absorbed, so it is endothermic."
	},
	{
		ch: "ch1",
		title: "Heating of Calcium Carbonate (Limestone)",
		eq: "CaCO₃(s) → CaO(s) + CO₂(g)",
		type: "Thermal Decomposition",
		colour: "White solid remains (quicklime)",
		obs: "CO₂ evolved; lime water turns milky if tested",
		cond: "Strong heating (lime kiln)",
		tip: "Same chemistry as manufacture of lime. Reverse is combination of CaO + CO₂.",
		desc: "Limestone decomposes on strong heating to quicklime and carbon dioxide."
	},
	{
		ch: "ch1",
		title: "Electrolysis of Water",
		eq: "2H₂O(l) → 2H₂(g) + O₂(g)",
		type: "Electrolytic Decomposition",
		colour: "Colourless gases",
		obs: "H₂ at cathode (twice the volume); O₂ at anode",
		cond: "Electric current; a little acid to make water conducting",
		tip: "Volume of H₂ : O₂ = 2 : 1. Cathode = hydrogen (pop), anode = oxygen (relights splint).",
		desc: "Electric current splits water into hydrogen and oxygen. A textbook electrolytic decomposition."
	},
	{
		ch: "ch1",
		title: "Lead Nitrate Heating",
		eq: "2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)",
		type: "Thermal Decomposition",
		colour: "Yellow PbO; brown NO₂ fumes",
		obs: "Crackling; dense brown gas; yellow residue",
		cond: "Strong heating of white crystals",
		tip: "Brown fumes = NO₂. Do not write N₂O or NO.",
		desc: "Lead nitrate decomposes to lead oxide, nitrogen dioxide and oxygen."
	},
	{
		ch: "ch1",
		title: "Ferrous Sulphate Heating",
		eq: "2FeSO₄(s) → Fe₂O₃(s) + SO₂(g) + SO₃(g)",
		type: "Thermal Decomposition",
		colour: "Green crystals → reddish-brown Fe₂O₃",
		obs: "Colour change; smell of burning sulphur",
		cond: "Strong heating",
		tip: "Two gases: SO₂ and SO₃. Residue is ferric oxide.",
		desc: "Hydrated ferrous sulphate first loses water, then decomposes to ferric oxide and sulphur oxides."
	},
	{
		ch: "ch2",
		title: "Acid + Metal Carbonate",
		eq: "Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)",
		type: "Acid + carbonate",
		colour: "Colourless; lime water milky with the gas",
		obs: "Brisk effervescence of CO₂",
		cond: "Room temperature",
		tip: "All metal carbonates and hydrogencarbonates give CO₂ with acids. Test with lime water.",
		desc: "Acids react with carbonates to form salt, water and carbon dioxide."
	},
	{
		ch: "ch2",
		title: "Acid + Metal Hydrogencarbonate",
		eq: "NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)",
		type: "Acid + hydrogencarbonate",
		colour: "Colourless",
		obs: "Brisk effervescence",
		cond: "Room temperature",
		tip: "Same gas test as carbonates. Used in soda-acid fire extinguishers.",
		desc: "Baking soda reacts with acid to release carbon dioxide, which is the working of a soda-acid extinguisher."
	},
	{
		ch: "ch2",
		title: "Neutralisation (HCl + NaOH)",
		eq: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) + Heat",
		type: "Neutralisation",
		colour: "Phenolphthalein pink → colourless at end point from base side",
		obs: "Mixture becomes hot",
		cond: "Aqueous solutions",
		tip: "Always mention salt + water + heat. Exothermic.",
		desc: "Hydrochloric acid and sodium hydroxide form sodium chloride and water."
	},
	{
		ch: "ch2",
		title: "Chlor-Alkali Process",
		eq: "2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) + H₂(g)",
		type: "Electrolysis of brine",
		colour: "Cl₂ greenish-yellow; NaOH colourless",
		obs: "Chlorine at anode, hydrogen at cathode, NaOH in solution",
		cond: "Electrolysis of aqueous NaCl",
		tip: "Products: NaOH, Cl₂, H₂. Uses of each are frequent 3-mark questions.",
		desc: "Electrolysis of brine is the industrial source of sodium hydroxide, chlorine and hydrogen."
	},
	{
		ch: "ch2",
		title: "Manufacture of Bleaching Powder",
		eq: "Ca(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l)",
		type: "Preparation of salt",
		colour: "Yellowish-white powder",
		obs: "Chlorine is absorbed by dry slaked lime",
		cond: "Dry slaked lime + chlorine",
		tip: "Formula is CaOCl₂, not Ca(OCl)₂ in Class 10 NCERT.",
		desc: "Bleaching powder is made by the action of chlorine on dry slaked lime."
	},
	{
		ch: "ch2",
		title: "Heating Baking Soda",
		eq: "2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)",
		type: "Thermal Decomposition",
		colour: "White solid",
		obs: "CO₂ makes cakes rise",
		cond: "Heating (baking)",
		tip: "The CO₂ bubbles make the cake spongy. Sodium carbonate left behind can give a bitter taste if excess is used.",
		desc: "Sodium hydrogencarbonate decomposes on heating, which is why it is used in baking."
	},
	{
		ch: "ch2",
		title: "Gypsum → Plaster of Paris",
		eq: "CaSO₄·2H₂O → CaSO₄·½H₂O + 1½ H₂O",
		type: "Controlled heating",
		colour: "White powder",
		obs: "Loses water of crystallisation",
		cond: "373 K (100 °C) — not too high",
		tip: "If heated much above 373 K, anhydrous CaSO₄ (dead burnt plaster) forms and will not set.",
		desc: "Gentle heating of gypsum at 373 K gives plaster of Paris."
	},
	{
		ch: "ch2",
		title: "Setting of Plaster of Paris",
		eq: "CaSO₄·½H₂O + 1½ H₂O → CaSO₄·2H₂O",
		type: "Hydration / setting",
		colour: "Hard white mass",
		obs: "Sets into a hard solid (gypsum)",
		cond: "Mixing with water",
		tip: "POP must be stored in a moisture-proof container.",
		desc: "Plaster of Paris recombines with water to form gypsum and sets into a hard mass."
	},
	{
		ch: "ch3",
		title: "Sodium + Water",
		eq: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) + Heat",
		type: "Metal + cold water",
		colour: "Silvery metal; colourless solution",
		obs: "Metal darts on water; may catch fire",
		cond: "Cold water; sodium stored under kerosene",
		tip: "K, Na, Ca react with cold water. Mg needs hot water/steam.",
		desc: "Sodium reacts violently with water to form sodium hydroxide and hydrogen."
	},
	{
		ch: "ch3",
		title: "Thermite Reaction",
		eq: "Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat",
		type: "Displacement / redox (aluminothermy)",
		colour: "Molten iron; white-hot",
		obs: "Intense heat; molten iron produced",
		cond: "Ignition mixture",
		tip: "Al is the reducing agent. Used to weld railway tracks.",
		desc: "Aluminium reduces iron(III) oxide in a highly exothermic reaction."
	},
	{
		ch: "ch3",
		title: "Roasting of Zinc Blende",
		eq: "2ZnS(s) + 3O₂(g) → 2ZnO(s) + 2SO₂(g)",
		type: "Roasting",
		colour: "SO₂ is colourless, pungent",
		obs: "Sulphide converted to oxide",
		cond: "Excess air, high temperature",
		tip: "Roasting = sulphide ores. Calcination = carbonate ores.",
		desc: "Zinc sulphide is heated in excess air to obtain zinc oxide before reduction."
	},
	{
		ch: "ch3",
		title: "Calcination of Zinc Carbonate (Calamine)",
		eq: "ZnCO₃(s) → ZnO(s) + CO₂(g)",
		type: "Calcination",
		colour: "White ZnO (yellow when hot)",
		obs: "CO₂ evolved",
		cond: "Limited air, strong heating",
		tip: "ZnO is yellow when hot and white when cold — a favourite colour question.",
		desc: "Calamine is heated in limited air to convert it to zinc oxide."
	},
	{
		ch: "ch3",
		title: "Amphoteric Nature of Aluminium Oxide (Acid)",
		eq: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
		type: "Amphoteric oxide + acid",
		colour: "Colourless solution",
		obs: "Oxide dissolves",
		cond: "Aqueous acid",
		tip: "Always write BOTH acid and base reactions for amphoteric oxides.",
		desc: "Aluminium oxide reacts with hydrochloric acid like a base."
	},
	{
		ch: "ch3",
		title: "Amphoteric Nature of Aluminium Oxide (Base)",
		eq: "Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O",
		type: "Amphoteric oxide + base",
		colour: "Colourless sodium aluminate",
		obs: "Oxide dissolves in alkali",
		cond: "Aqueous NaOH",
		tip: "NaAlO₂ is sodium aluminate. Same pattern for ZnO.",
		desc: "Aluminium oxide also reacts with sodium hydroxide like an acid."
	},
	{
		ch: "ch3",
		title: "Anodising of Aluminium",
		eq: "4Al(s) + 3O₂ → 2Al₂O₃ (thick oxide coat by electrolysis)",
		type: "Corrosion protection",
		colour: "Oxide film can be dyed",
		obs: "Thicker, harder oxide layer",
		cond: "Electrolysis with Al as anode",
		tip: "The oxide layer protects aluminium and can be coloured.",
		desc: "Anodising thickens the natural oxide film on aluminium."
	},
	{
		ch: "ch4",
		title: "Substitution of Methane with Chlorine",
		eq: "CH₄ + Cl₂ → CH₃Cl + HCl  (sunlight)",
		type: "Substitution",
		colour: "Colourless gases",
		obs: "HCl fumes; further substitution can give CH₂Cl₂, CHCl₃, CCl₄",
		cond: "Sunlight",
		tip: "Saturated hydrocarbons give substitution, not addition, in sunlight.",
		desc: "Methane reacts with chlorine in sunlight by replacing hydrogen atoms one by one."
	},
	{
		ch: "ch4",
		title: "Dehydration of Ethanol",
		eq: "C₂H₅OH → C₂H₄ + H₂O  (conc. H₂SO₄, 443 K)",
		type: "Dehydration / elimination",
		colour: "Colourless ethene gas",
		obs: "Ethene burns with a sooty flame compared with methane",
		cond: "Concentrated H₂SO₄ at 443 K",
		tip: "Temperature 443 K is compulsory in the answer.",
		desc: "Hot concentrated sulphuric acid removes water from ethanol to give ethene."
	},
	{
		ch: "ch4",
		title: "Ethanol + Sodium",
		eq: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑",
		type: "Alcohol + metal",
		colour: "Colourless",
		obs: "Hydrogen with pop; sodium ethoxide formed",
		cond: "Room temperature",
		tip: "This does NOT prove it is an acid like ethanoic acid. Use NaHCO₃ to distinguish.",
		desc: "Ethanol reacts with sodium to form sodium ethoxide and hydrogen."
	},
	{
		ch: "ch4",
		title: "Oxidation of Ethanol (Alkaline KMnO₄)",
		eq: "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O",
		type: "Oxidation",
		colour: "Purple KMnO₄ decolourised",
		obs: "Vinegar smell of ethanoic acid",
		cond: "Alkaline KMnO₄ or acidified K₂Cr₂O₇, heat",
		tip: "Orange dichromate turns green; purple permanganate is decolourised.",
		desc: "Ethanol is oxidised to ethanoic acid by alkaline potassium permanganate."
	},
	{
		ch: "ch4",
		title: "Esterification",
		eq: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O  (conc. H₂SO₄)",
		type: "Esterification",
		colour: "Colourless ester",
		obs: "Sweet / fruity smell",
		cond: "A few drops of concentrated H₂SO₄ and warming",
		tip: "Ester = ethyl ethanoate. Conc. H₂SO₄ is the catalyst (dehydrating agent).",
		desc: "Ethanoic acid and ethanol form ethyl ethanoate, used in flavouring."
	},
	{
		ch: "ch4",
		title: "Saponification",
		eq: "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH",
		type: "Alkaline hydrolysis",
		colour: "Colourless",
		obs: "Ester smell disappears; soap-like salt formed for long-chain esters",
		cond: "NaOH, heat",
		tip: "For fats/oils this is how soap is made. Name both products.",
		desc: "An ester is hydrolysed by alkali to the sodium salt of the acid and the alcohol."
	},
	{
		ch: "ch4",
		title: "Ethanoic Acid + Sodium Hydrogencarbonate",
		eq: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑",
		type: "Acid + hydrogencarbonate",
		colour: "Colourless; lime water milky",
		obs: "Brisk effervescence",
		cond: "Room temperature",
		tip: "The test that separates carboxylic acids from alcohols.",
		desc: "Ethanoic acid liberates carbon dioxide from sodium hydrogencarbonate."
	}
];
var moreColours = [
	{
		name: "Chlorine",
		formula: "Cl₂",
		colour: "Greenish-yellow gas",
		remarks: "Chlor-alkali anode product; bleaching action.",
		swatch: "#a3e635"
	},
	{
		name: "Nitrogen dioxide",
		formula: "NO₂",
		colour: "Reddish-brown gas",
		remarks: "From heating lead nitrate.",
		swatch: "#9a3412"
	},
	{
		name: "Silver chloride",
		formula: "AgCl",
		colour: "White, turns grey in sunlight",
		remarks: "Photolytic decomposition to Ag.",
		swatch: "#f8fafc"
	},
	{
		name: "Silver bromide",
		formula: "AgBr",
		colour: "Pale yellow, turns grey in sunlight",
		remarks: "Used in black-and-white photography.",
		swatch: "#fde68a"
	},
	{
		name: "Zinc oxide (hot)",
		formula: "ZnO",
		colour: "Yellow when hot",
		remarks: "Turns white on cooling. Board favourite.",
		swatch: "#facc15"
	},
	{
		name: "Zinc oxide (cold)",
		formula: "ZnO",
		colour: "White when cold",
		remarks: "Pair with the hot colour.",
		swatch: "#f8fafc"
	},
	{
		name: "Magnesium oxide",
		formula: "MgO",
		colour: "White powder",
		remarks: "Ash after burning Mg ribbon.",
		swatch: "#f1f5f9"
	},
	{
		name: "Calcium carbonate",
		formula: "CaCO₃",
		colour: "White / milky",
		remarks: "Lime water milkiness; marble; chalk.",
		swatch: "#f8fafc"
	},
	{
		name: "Iron (rust)",
		formula: "Fe₂O₃·xH₂O",
		colour: "Reddish-brown flaky",
		remarks: "Needs both air and moisture.",
		swatch: "#9a3412"
	},
	{
		name: "Phenolphthalein in base",
		formula: "indicator",
		colour: "Pink",
		remarks: "Colourless in acid.",
		swatch: "#f472b6"
	},
	{
		name: "Methyl orange in acid",
		formula: "indicator",
		colour: "Red",
		remarks: "Yellow in base.",
		swatch: "#ef4444"
	},
	{
		name: "Red litmus in base",
		formula: "indicator",
		colour: "Turns blue",
		remarks: "Blue litmus turns red in acid.",
		swatch: "#3b82f6"
	}
];
var moreDefs = [
	{
		title: "Law of Conservation of Mass",
		body: "Mass can neither be created nor destroyed in a chemical reaction. That is why we balance chemical equations."
	},
	{
		title: "Concentration of an Ore",
		body: "Removing earthy impurities (gangue) from the ore before extraction of the metal."
	},
	{
		title: "Gangue",
		body: "The earthy or unwanted impurities present in an ore."
	},
	{
		title: "Malleability",
		body: "The property of metals of being beaten into thin sheets (e.g. gold, silver)."
	},
	{
		title: "Ductility",
		body: "The property of metals of being drawn into wires."
	},
	{
		title: "Sonority",
		body: "The property of metals of producing a ringing sound when struck."
	},
	{
		title: "Ionic Compound",
		body: "A compound formed by transfer of electrons, made of oppositely charged ions. High melting point; conducts electricity in molten or aqueous state."
	},
	{
		title: "Covalent Compound",
		body: "A compound formed by sharing of electrons. Generally low melting point and poor electrical conductivity."
	},
	{
		title: "Sacrificial Protection",
		body: "A more reactive metal is connected to iron so that it corrodes first (e.g. magnesium or zinc blocks on ships)."
	},
	{
		title: "Homologous Series (Alkanes)",
		body: "CₙH₂ₙ₊₂. Successive members differ by CH₂. Similar chemical properties, gradual change in physical properties."
	},
	{
		title: "Nomenclature (Class 10)",
		body: "Alkane names: methane, ethane, propane, butane. Alkene: ethene. Alkyne: ethyne. Alcohol: ethanol. Acid: ethanoic acid. Ester: ethyl ethanoate."
	},
	{
		title: "Electron Dot Structure",
		body: "A diagram showing valence electrons of atoms as dots (or crosses) around the symbol, used to show covalent bonding."
	},
	{
		title: "pH",
		body: "pH = −log₁₀[H⁺]. In Class 10: a number from 0 to 14 that tells how acidic or basic a solution is."
	},
	{
		title: "Strong Base",
		body: "A base that ionises almost completely in water (e.g. NaOH, KOH)."
	},
	{
		title: "Weak Base",
		body: "A base that ionises only partially in water (e.g. NH₄OH, Mg(OH)₂)."
	},
	{
		title: "Family of Salts",
		body: "Salts having the same positive ion (e.g. sodium salts) or the same negative ion (e.g. chlorides, sulphates)."
	},
	{
		title: "Cinnabar",
		body: "HgS, the ore of mercury. On heating in air it gives mercury."
	},
	{
		title: "Haematite",
		body: "Fe₂O₃, an important ore of iron."
	},
	{
		title: "Bauxite",
		body: "Al₂O₃·2H₂O, the ore of aluminium."
	},
	{
		title: "Flame Test Memory (extra)",
		body: "Not core NCERT listing, but sodium compounds give a yellow flame in lab work. Do not write unless the question asks."
	}
];
var moreNotes = [
	{
		title: "Indicator Colour Card",
		body: "Litmus: acid red · base blue\nMethyl orange: acid red · base yellow\nPhenolphthalein: acid colourless · base pink\nUniversal indicator: rainbow from red (strong acid) to purple (strong base)\nOlfactory: onion / vanilla / clove — smell lost in base for onion/vanilla."
	},
	{
		title: "pH in Daily Life",
		body: "Tooth decay if mouth pH < 5.5\nAcids in stomach (~1.2) — antacids (Mg(OH)₂, NaHCO₃)\nNettle sting: methanoic acid — dock leaf soothes\nAcid rain < 5.6 damages monuments (CaCO₃)\nFactory wastes: neutralise before discharge\nSoil: acidic soils treated with slaked lime / chalk."
	},
	{
		title: "Reactivity vs Water / Acid / Air",
		body: "K, Na: cold water, stored in kerosene, dull quickly.\nCa: cold water, less violently; sinks.\nMg: hot water / steam; burns in air with dazzling flame.\nAl, Zn, Fe: steam; Al oxide coat protects.\nPb, Cu: no H₂ with water; CuO black on heating.\nAg, Au: unreactive; found free."
	},
	{
		title: "Carbon Compounds — Formula Sheet",
		body: "Methane CH₄ · Ethane C₂H₆ · Propane C₃H₈ · Butane C₄H₁₀\nEthene C₂H₄ · Ethyne C₂H₂\nMethanol CH₃OH · Ethanol C₂H₅OH\nMethanoic HCOOH · Ethanoic CH₃COOH\nEthyl ethanoate CH₃COOC₂H₅\nFunctional groups: –OH alcohol, –COOH carboxylic acid, –COO– ester, >C=C< alkene, –C≡C– alkyne."
	},
	{
		title: "Electron-dot Practice Order",
		body: "H₂ (single) → Cl₂ / HCl → O₂ (double) → N₂ (triple) → H₂O → NH₃ → CH₄ → C₂H₄ → C₂H₂ → CO₂.\nCarbon always four bonds. Hydrogen one. Oxygen two. Nitrogen three."
	},
	{
		title: "Periodic Classification — Extra Appendix",
		body: "Removed from some recent CBSE Science papers but still taught in many classrooms:\nDobereiner triads · Newlands octaves · Mendeleev (atomic mass, periodic law, predictions of eka-silicon) · Modern periodic law (atomic number) · 18 groups, 7 periods · Metals left, non-metals right, metalloids on the zig-zag.\nValency, atomic size, metallic character trends: size increases down a group, decreases across a period; metallic character increases down, decreases across."
	},
	{
		title: "Board 3-mark Equation Pack",
		body: "Always be ready to write, balance, and add conditions for:\nMg + O₂ · CaO + H₂O · Ca(OH)₂ + CO₂ · AgCl sunlight · FeSO₄ heat · Pb(NO₃)₂ heat · Zn + CuSO₄ · BaCl₂ + Na₂SO₄ · NaCl electrolysis · Ca(OH)₂ + Cl₂ · gypsum 373 K · thermite · ZnO + C · CH₄ + Cl₂ sunlight · ethanol 443 K · esterification · saponification."
	}
];
var moreQuiz = {
	ch1: [
		{
			q: "The brown gas evolved on heating lead nitrate is identified as NO₂ because it is:",
			options: [
				"Colourless and odourless",
				"Reddish-brown and pungent",
				"Greenish-yellow",
				"Turns lime water milky"
			],
			ans: 1,
			why: "Lead nitrate gives reddish-brown nitrogen dioxide. Lime water milkiness is CO₂, not NO₂."
		},
		{
			q: "In electrolysis of water the volume ratio H₂ : O₂ is:",
			options: [
				"1 : 1",
				"1 : 2",
				"2 : 1",
				"1 : 8"
			],
			ans: 2,
			why: "From 2H₂O → 2H₂ + O₂, two volumes of hydrogen form for one volume of oxygen."
		},
		{
			q: "Photosynthesis is classified as endothermic because:",
			options: [
				"Oxygen is released",
				"Glucose is a carbohydrate",
				"Sunlight energy is absorbed",
				"Chlorophyll is green"
			],
			ans: 2,
			why: "Endothermic reactions absorb energy. Plants absorb sunlight to make glucose."
		}
	],
	ch2: [
		{
			q: "The formula of bleaching powder in NCERT is written as:",
			options: [
				"CaCl₂",
				"Ca(OCl)₂",
				"CaOCl₂",
				"CaO"
			],
			ans: 2,
			why: "Class 10 NCERT uses CaOCl₂ (calcium oxychloride)."
		},
		{
			q: "Plaster of Paris becomes dead burnt plaster if:",
			options: [
				"It is mixed with water",
				"It is heated well above 373 K",
				"It is stored in a dry box",
				"Gypsum is cooled"
			],
			ans: 1,
			why: "Excess heating drives off all water and gives anhydrous CaSO₄ that will not set."
		},
		{
			q: "Methyl orange is red in:",
			options: [
				"Strongly basic solution",
				"Acidic solution",
				"Pure ethanol",
				"Distilled water only"
			],
			ans: 1,
			why: "Methyl orange is red in acid and yellow in base."
		}
	],
	ch3: [
		{
			q: "The ore of mercury is:",
			options: [
				"Haematite",
				"Bauxite",
				"Cinnabar",
				"Calamine"
			],
			ans: 2,
			why: "Cinnabar is HgS. Haematite = iron, bauxite = aluminium, calamine = zinc carbonate."
		},
		{
			q: "Which oxide is amphoteric?",
			options: [
				"Na₂O",
				"MgO",
				"Al₂O₃",
				"CO₂"
			],
			ans: 2,
			why: "Al₂O₃ and ZnO react with both acids and bases. CO₂ is acidic; Na₂O and MgO are basic."
		},
		{
			q: "Ionic compounds conduct electricity when:",
			options: [
				"Solid only",
				"Molten or aqueous",
				"In any state",
				"Only as vapour"
			],
			ans: 1,
			why: "Ions must be free to move. In the solid lattice they are fixed."
		}
	],
	ch4: [
		{
			q: "The next homologue of C₃H₈ is:",
			options: [
				"C₂H₆",
				"C₃H₆",
				"C₄H₁₀",
				"C₄H₈"
			],
			ans: 2,
			why: "Alkanes differ by CH₂. C₃H₈ + CH₂ = C₄H₁₀ (butane)."
		},
		{
			q: "Conc. H₂SO₄ at 443 K converts ethanol into:",
			options: [
				"Ethane",
				"Ethene",
				"Ethanoic acid",
				"Ethyne"
			],
			ans: 1,
			why: "Dehydration of ethanol with conc. H₂SO₄ at 443 K gives ethene."
		},
		{
			q: "The cleansing action of soap is due to:",
			options: [
				"High pH only",
				"Micelle formation",
				"Evaporation of water",
				"Catenation"
			],
			ans: 1,
			why: "Soap molecules form micelles that trap oil in the hydrophobic core."
		}
	]
};
var indicators = [
	{
		name: "Blue litmus",
		acid: "Red",
		base: "Stays blue",
		notes: "Natural dye on paper"
	},
	{
		name: "Red litmus",
		acid: "Stays red",
		base: "Blue",
		notes: "Natural dye on paper"
	},
	{
		name: "Methyl orange",
		acid: "Red",
		base: "Yellow",
		notes: "Synthetic; sharp change"
	},
	{
		name: "Phenolphthalein",
		acid: "Colourless",
		base: "Pink",
		notes: "Colourless in acid and in pure water"
	},
	{
		name: "Universal indicator",
		acid: "Red → orange → yellow",
		base: "Green → blue → purple",
		notes: "Gives approximate pH"
	},
	{
		name: "Onion (olfactory)",
		acid: "Characteristic smell remains",
		base: "Smell lost",
		notes: "No colour change"
	},
	{
		name: "Vanilla",
		acid: "Smell remains",
		base: "Smell lost",
		notes: "Olfactory indicator"
	}
];
var pHGuide = [
	{
		item: "Gastric juice",
		pH: "~1.2",
		tag: "Strongly acidic"
	},
	{
		item: "Lemon juice",
		pH: "~2.2",
		tag: "Acidic"
	},
	{
		item: "Vinegar",
		pH: "~2.9",
		tag: "Acidic"
	},
	{
		item: "Tomato juice",
		pH: "~4.1",
		tag: "Weakly acidic"
	},
	{
		item: "Rain (unpolluted)",
		pH: "~5.6",
		tag: "Slightly acidic"
	},
	{
		item: "Milk",
		pH: "~6.6",
		tag: "Nearly neutral"
	},
	{
		item: "Pure water",
		pH: "7.0",
		tag: "Neutral"
	},
	{
		item: "Blood",
		pH: "7.4",
		tag: "Slightly basic"
	},
	{
		item: "Sea water",
		pH: "~8.5",
		tag: "Basic"
	},
	{
		item: "Milk of magnesia",
		pH: "~10",
		tag: "Basic"
	},
	{
		item: "Sodium hydroxide",
		pH: "~14",
		tag: "Strongly basic"
	}
];
var series = [
	"K",
	"Na",
	"Ca",
	"Mg",
	"Al",
	"Zn",
	"Fe",
	"Pb",
	"H",
	"Cu",
	"Hg",
	"Ag",
	"Au"
];
var functionalGroups = [
	{
		name: "Halo",
		group: "—X (Cl, Br, I)",
		example: "Chloroethane"
	},
	{
		name: "Alcohol",
		group: "—OH",
		example: "Ethanol"
	},
	{
		name: "Aldehyde",
		group: "—CHO",
		example: "Methanal (mentioned with groups)"
	},
	{
		name: "Ketone",
		group: ">C=O",
		example: "Propanone (mentioned with groups)"
	},
	{
		name: "Carboxylic acid",
		group: "—COOH",
		example: "Ethanoic acid"
	},
	{
		name: "Ester",
		group: "—COO—",
		example: "Ethyl ethanoate"
	},
	{
		name: "Alkene",
		group: ">C=C<",
		example: "Ethene"
	},
	{
		name: "Alkyne",
		group: "—C≡C—",
		example: "Ethyne"
	}
];
var credits = [
	{
		name: "Udirn",
		role: "Creator",
		tone: "rainbow",
		description: "The architect of it all — he imagined ChemVault 10, shaped every panel of it, and built it end to end with obsessive care."
	},
	{
		name: "Ansh",
		role: "Chief Moderator",
		tone: "teal",
		description: "The guardian of accuracy — he reviews every explanation with a fine-tooth comb, keeping the content exam-true and trustworthy."
	},
	{
		name: "Aryan",
		role: "Research Director",
		tone: "gold",
		description: "The investigator — he mined the NCERT lines and years of board papers so every reaction and rule here earns its marks."
	},
	{
		name: "Grok AI",
		role: "Build Partner",
		tone: "sky",
		description: "The tireless co-engineer — it paired on the code, powered the quiz engine, and keeps the AI tutor answering around the clock."
	}
];
/** Assertion–reason and case-based papers — additive, original MCQs stay intact. */
var plusQuiz = {
	ch1: [
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Silver chloride turns grey in sunlight.\nReason (R): Silver chloride undergoes photolytic decomposition forming silver metal.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is true — white AgCl turns grey in sunlight (NCERT activity).\nStep 2: R is true — 2AgCl(s) → 2Ag(s) + Cl₂(g) in light.\nStep 3: The grey colour is the finely divided silver, so R explains A."
		},
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Respiration is an exothermic reaction.\nReason (R): Glucose is oxidised in cells and energy is released.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is true — NCERT lists respiration as exothermic.\nStep 2: R is true — C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy.\nStep 3: Released energy is why it is called exothermic, so R explains A."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: Green crystals of ferrous sulphate are heated strongly. The colour changes and a gas smelling of burning sulphur is evolved.\nThe brown residue left in the tube is:",
			options: [
				"FeO",
				"FeSO₄",
				"Fe₂O₃",
				"FeS"
			],
			ans: 2,
			why: "Step 1: Write the equation: 2FeSO₄(s) → Fe₂O₃(s) + SO₂(g) + SO₃(g).\nStep 2: The residue is ferric oxide, reddish-brown.\nStep 3: The burning-sulphur smell is SO₂ (with SO₃). FeO / FeS are not the NCERT products."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: A strip of iron is placed in blue copper sulphate solution. After some time the solution turns pale green and a brown coating appears on iron.\nThis reaction is:",
			options: [
				"Combination",
				"Double displacement",
				"Displacement and redox",
				"Photolytic decomposition"
			],
			ans: 2,
			why: "Step 1: Fe + CuSO₄ → FeSO₄ + Cu. Iron displaces copper.\nStep 2: Blue Cu²⁺ is replaced by pale-green Fe²⁺; brown Cu metal deposits.\nStep 3: Fe is oxidised, Cu²⁺ is reduced — so it is displacement as well as redox."
		}
	],
	ch2: [
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Tooth enamel starts dissolving when the pH in the mouth falls below 5.5.\nReason (R): Enamel is made of calcium phosphate, which is attacked by acids.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is the NCERT pH value for enamel attack.\nStep 2: R is true — enamel is calcium phosphate / hydroxyapatite.\nStep 3: Bacterial acids after sugar lower pH and dissolve that phosphate, so R explains A."
		},
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Baking soda has water of crystallisation.\nReason (R): The formula of baking soda is NaHCO₃.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 3,
			why: "Step 1: A is false — NaHCO₃ has no water of crystallisation (unlike washing soda, gypsum, blue vitriol).\nStep 2: R is true — baking soda is sodium hydrogencarbonate, NaHCO₃.\nStep 3: Correct choice is A false, R true."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: Brine is electrolysed. A gas that bleaches moist litmus is collected at one electrode and a gas that burns with a pop at the other. The solution left is used to make soap.\nThe bleaching gas is:",
			options: [
				"H₂ at the cathode",
				"Cl₂ at the anode",
				"O₂ at the anode",
				"CO₂ at the cathode"
			],
			ans: 1,
			why: "Step 1: Chlor-alkali: 2NaCl(aq) + 2H₂O → 2NaOH + Cl₂ + H₂.\nStep 2: Cl₂ (greenish-yellow) is liberated at the anode and bleaches moist litmus.\nStep 3: H₂ (pop) is at the cathode; NaOH remains in solution and is used for soap."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: Gypsum is heated at 373 K to get a white powder used for setting fractured bones. If this powder is heated much more strongly it will not set with water.\nThe white powder is:",
			options: [
				"CaSO₄·2H₂O",
				"CaSO₄·½H₂O",
				"CaSO₄ (dead burnt)",
				"CaOCl₂"
			],
			ans: 1,
			why: "Step 1: Gypsum CaSO₄·2H₂O at 373 K → Plaster of Paris CaSO₄·½H₂O.\nStep 2: POP sets with water back to gypsum — used for casts.\nStep 3: Stronger heating gives anhydrous CaSO₄ (dead burnt plaster) that will not set. Bleaching powder is CaOCl₂, unrelated."
		}
	],
	ch3: [
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Aluminium oxide is amphoteric.\nReason (R): Al₂O₃ reacts with both acids and bases to give salt and water.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is true — NCERT lists Al₂O₃ and ZnO as amphoteric.\nStep 2: R is the definition of an amphoteric oxide.\nStep 3: Therefore R is the correct explanation of A. Write both acid and base equations in 3-mark answers."
		},
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Roasting is used for carbonate ores.\nReason (R): Roasting is heating in excess air, typically converting sulphide ores to oxides.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 3,
			why: "Step 1: A is false — carbonate ores are calcined (limited air).\nStep 2: R is true — roasting = sulphide ore + excess air → oxide + SO₂.\nStep 3: So A is false and R is true. Mixing roasting with calcination is a classic mark-loss."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: A mixture of Fe₂O₃ and aluminium powder is ignited. The reaction is highly exothermic and molten iron is produced, used to join railway tracks.\nAluminium here acts as:",
			options: [
				"Oxidising agent",
				"Reducing agent",
				"Catalyst",
				"Flux"
			],
			ans: 1,
			why: "Step 1: Thermite: Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + heat.\nStep 2: Al takes oxygen from Fe₂O₃, so Al is oxidised and is the reducing agent.\nStep 3: Molten iron produced welds the tracks. Not a catalyst — Al is consumed."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: Sodium is stored under kerosene. A small piece dropped on water darts about, melts, and the gas evolved burns with a yellow flame.\nSodium is stored under kerosene because it:",
			options: [
				"Is denser than kerosene only",
				"Reacts vigorously with air and moisture",
				"Dissolves in water slowly",
				"Is a non-metal"
			],
			ans: 1,
			why: "Step 1: Na is at the top of the reactivity series.\nStep 2: It reacts with oxygen and moisture of air, so oil/kerosene cuts off air.\nStep 3: With water: 2Na + 2H₂O → 2NaOH + H₂; the yellow flame is sodium, the pop is hydrogen."
		}
	],
	ch4: [
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Ethene decolourises bromine water.\nReason (R): Unsaturated hydrocarbons undergo addition reactions.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is true — reddish-brown Br₂ water is decolourised by ethene.\nStep 2: R is true — alkenes add Br₂ across the C=C.\nStep 3: The addition of bromine is exactly why the colour vanishes, so R explains A. Saturated hydrocarbons do not do this in the cold."
		},
		{
			kind: "assertion",
			mark: "2",
			q: "Assertion (A): Soaps form scum with hard water.\nReason (R): Ca²⁺ and Mg²⁺ ions give insoluble calcium and magnesium salts of fatty acids.\nChoose the correct option.",
			options: [
				"Both A and R are true and R is the correct explanation of A",
				"Both A and R are true but R is not the correct explanation of A",
				"A is true but R is false",
				"A is false but R is true"
			],
			ans: 0,
			why: "Step 1: A is true — soaps do not lather well in hard water.\nStep 2: R is true — scum is Ca/Mg salts of the soap’s fatty acids.\nStep 3: That precipitate is the scum, so R explains A. Detergents avoid this."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: Ethanol is heated with conc. H₂SO₄ at 443 K. A gas is evolved which decolourises bromine water.\nThe organic product is:",
			options: [
				"Ethane",
				"Ethene",
				"Ethyne",
				"Ethanoic acid"
			],
			ans: 1,
			why: "Step 1: Dehydration: C₂H₅OH → C₂H₄ + H₂O (conc. H₂SO₄, 443 K).\nStep 2: Ethene is unsaturated, so it decolourises bromine water.\nStep 3: Oxidation of ethanol (KMnO₄/K₂Cr₂O₇) would give ethanoic acid, not this gas. 443 K is the key condition."
		},
		{
			kind: "case",
			mark: "3",
			q: "Case: A student mixes ethanoic acid and ethanol with a few drops of conc. H₂SO₄ and warms the tube. A sweet, fruity smell is noticed.\nThe reaction is called:",
			options: [
				"Saponification",
				"Esterification",
				"Addition",
				"Substitution"
			],
			ans: 1,
			why: "Step 1: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, catalysed by conc. H₂SO₄.\nStep 2: The fruity smell is the ester ethyl ethanoate.\nStep 3: Saponification is the reverse (alkaline hydrolysis of an ester to soap + alcohol)."
		}
	]
};
var notes$1 = [
	{
		"title": "How to Identify Reaction Type Instantly",
		"body": "**Combination:** Many reactants → One product\n\n          **Decomposition:** One reactant → Many products\n\n          **Displacement:** A + BC → AC + B\n\n          **Double Displacement:** AB + CD → AD + CB\n\n          **Redox:** Oxidation and reduction occur together\n\n          **Neutralisation:** Acid + Base → Salt + Water"
	},
	{
		"title": "Oxidation & Reduction Shortcut (Class 10 Level)",
		"body": "**Oxidation:** Gain of oxygen **or** Loss of hydrogen\n\n          **Reduction:** Loss of oxygen **or** Gain of hydrogen\n\n          When both happen in the same reaction → **Redox reaction**.\n\n          Example: CuO + H₂ → Cu + H₂O\n\n          CuO is reduced, H₂ is oxidised."
	},
	{
		"title": "Must-Remember Colour Changes",
		"body": "CuSO₄ (blue) → FeSO₄ (pale green) + Cu (reddish-brown)\n\n          Cu → CuO (black) on heating\n\n          CuO (black) → Cu (reddish-brown) by H₂\n\n          FeSO₄ (green) → Fe₂O₃ (brown) on heating\n\n          Pb(NO₃)₂ → PbO (yellow) + NO₂ (brown gas)\n\n          AgCl (white) → Ag (grey) in sunlight\n\n          ZnO : yellow when hot, white when cold\n\n          PbI₂ : bright yellow precipitate"
	},
	{
		"title": "Important Gas Tests",
		"body": "**H₂:** Burns with a pop sound\n\n          **O₂:** Relights a glowing splint\n\n          **CO₂:** Turns lime water milky\n\n          **Cl₂:** Greenish-yellow gas, bleaching action\n\n          **SO₂:** Colourless gas with burning sulphur smell\n\n          **NO₂:** Brown fumes"
	},
	{
		"title": "State Symbols & Arrows",
		"body": "(s) = solid    (l) = liquid    (g) = gas    (aq) = aqueous solution\n\n          ↓ = precipitate    ↑ = gas evolved\n\n          Always write state symbols in board answers when asked."
	},
	{
		"title": "Conditions That Must Be Written",
		"body": "Heat, sunlight, electricity, catalyst (Ni, Pd), conc. H₂SO₄, 443 K, excess air, limited air, electrolysis of brine, etc.\n\n          Missing the condition often costs marks in equation questions."
	},
	{
		"title": "Reactivity Series (Must Memorise)",
		"body": "K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au\n\n          A metal can displace any metal that is below it from its salt solution."
	},
	{
		"title": "Amphoteric Oxides",
		"body": "Al₂O₃ and ZnO react with both acids and bases.\n\n          This is a very common 2 or 3 mark question.\n\n          Always write both reactions when asked."
	},
	{
		"title": "Roasting vs Calcination",
		"body": "**Roasting:** Sulphide ore + excess air → Oxide + SO₂\n\n          **Calcination:** Carbonate ore + limited air → Oxide + CO₂\n\n          Both are done before reduction of the metal oxide."
	},
	{
		"title": "Thermite Reaction – Key Points",
		"body": "Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + Heat\n\n          Aluminium acts as reducing agent.\n\n          Highly exothermic → molten iron produced.\n\n          Used for welding railway tracks."
	},
	{
		"title": "Prevention of Corrosion / Rusting",
		"body": "1. Painting\n\n          2. Oiling / Greasing\n\n          3. Galvanisation (coating with zinc)\n\n          4. Chrome plating\n\n          5. Anodising\n\n          6. Making alloys (stainless steel)\n\n          7. Sacrificial protection"
	},
	{
		"title": "Prevention of Rancidity",
		"body": "1. Adding antioxidants\n\n          2. Refrigeration\n\n          3. Storing in airtight containers\n\n          4. Flushing with nitrogen gas\n\n          5. Keeping away from light"
	},
	{
		"title": "Important pH Values",
		"body": "Gastric juice → ~1.2 (highly acidic)\n\n          Lemon juice → ~2.2\n\n          Pure water / NaCl → 7 (neutral)\n\n          Blood → 7.4\n\n          Milk of magnesia → ~10\n\n          Sodium hydroxide → ~14"
	},
	{
		"title": "Important Salts – Formulae & Uses",
		"body": "Bleaching powder → CaOCl₂ → bleaching & disinfectant\n\n          Baking soda → NaHCO₃ → baking, antacid, fire extinguisher\n\n          Washing soda → Na₂CO₃·10H₂O → cleaning, glass, removing hardness\n\n          Plaster of Paris → CaSO₄·½H₂O → casts, statues\n\n          Gypsum → CaSO₄·2H₂O → source of POP"
	},
	{
		"title": "Carbon Chapter – Quick Rules",
		"body": "Saturated → Substitution reaction\n\n          Unsaturated → Addition reaction\n\n          Alcohol + Carboxylic acid → Ester (esterification)\n\n          Ester + NaOH → Soap + Alcohol (saponification)\n\n          Ethanol + Na → Sodium ethoxide + H₂\n\n          Ethanol + conc. H₂SO₄ (443 K) → Ethene"
	},
	{
		"title": "Common Mistakes That Cost Marks",
		"body": "• Forgetting to balance the equation\n\n          • Missing state symbols when asked\n\n          • Writing wrong condition (especially 443 K, sunlight, heat)\n\n          • Confusing roasting and calcination\n\n          • Writing CuSO₄ colour as green instead of blue\n\n          • Forgetting that ZnO is yellow when hot"
	},
	{
		"title": "How to Predict Displacement",
		"body": "Look at the reactivity series.\n\n          Only a metal placed **above** another metal can displace it from its salt solution.\n\n          Example: Zn can displace Cu, Fe, Ag etc. but Cu cannot displace Zn."
	},
	{
		"title": "Ionic vs Covalent Compounds (Quick Difference)",
		"body": "**Ionic:** Metal + Non-metal, electron transfer, high melting point, conduct electricity in molten/aqueous state\n\n          **Covalent:** Non-metal + Non-metal, electron sharing, low melting point, generally do not conduct electricity"
	},
	{
		"title": "Why Carbon Forms Large Number of Compounds",
		"body": "1. Catenation (self-linking ability)\n\n          2. Tetravalency\n\n          3. Ability to form single, double and triple bonds\n\n          4. Ability to form straight chains, branched chains and rings"
	},
	{
		"title": "Soap vs Detergent (Exam Point)",
		"body": "Soaps form scum with hard water.\n\n          Detergents work well even in hard water because they do not form insoluble scum with calcium and magnesium ions."
	}
];
var quizData$1 = {
	ch1: [
		{
			q: "Which of the following is a decomposition reaction?",
			options: [
				"2Mg + O₂ → 2MgO",
				"CaCO₃ → CaO + CO₂",
				"Zn + CuSO₄ → ZnSO₄ + Cu",
				"NaOH + HCl → NaCl + H₂O"
			],
			ans: 1
		},
		{
			q: "When silver chloride is exposed to sunlight, it turns grey because of the formation of:",
			options: [
				"Silver oxide",
				"Silver carbonate",
				"Silver metal",
				"Silver nitrate"
			],
			ans: 2
		},
		{
			q: "The brown fumes evolved on heating lead nitrate are of:",
			options: [
				"NO",
				"N₂O",
				"NO₂",
				"N₂O₅"
			],
			ans: 2
		},
		{
			q: "In the reaction Fe + CuSO₄ → FeSO₄ + Cu, the colour change observed is:",
			options: [
				"Blue to green",
				"Green to blue",
				"Blue to colourless",
				"Green to colourless"
			],
			ans: 0
		},
		{
			q: "Which of the following is an example of a photolytic decomposition reaction?",
			options: [
				"2FeSO₄ → Fe₂O₃ + SO₂ + SO₃",
				"2AgBr → 2Ag + Br₂",
				"CaCO₃ → CaO + CO₂",
				"2H₂O → 2H₂ + O₂"
			],
			ans: 1
		},
		{
			q: "Respiration is regarded as an exothermic reaction because:",
			options: [
				"Glucose is broken down",
				"Energy is absorbed",
				"Energy is released",
				"Oxygen is used"
			],
			ans: 2
		},
		{
			q: "The reaction 2H₂ + O₂ → 2H₂O is an example of:",
			options: [
				"Decomposition",
				"Displacement",
				"Combination",
				"Double displacement"
			],
			ans: 2
		},
		{
			q: "Rancidity can be prevented by:",
			options: [
				"Keeping food in airtight containers",
				"Adding antioxidants",
				"Flushing with nitrogen",
				"All of these"
			],
			ans: 3
		},
		{
			q: "In the electrolysis of water, the gas collected at the cathode is:",
			options: [
				"Oxygen",
				"Hydrogen",
				"Chlorine",
				"Nitrogen"
			],
			ans: 1
		},
		{
			q: "Which of the following reactions is a redox reaction?",
			options: [
				"NaOH + HCl → NaCl + H₂O",
				"BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl",
				"CuO + H₂ → Cu + H₂O",
				"CaCO₃ → CaO + CO₂"
			],
			ans: 2
		},
		{
			q: "The white precipitate formed when BaCl₂ reacts with Na₂SO₄ is:",
			options: [
				"BaSO₃",
				"BaSO₄",
				"BaCl₂",
				"NaCl"
			],
			ans: 1
		},
		{
			q: "Quick lime reacts with water to form:",
			options: [
				"Limestone",
				"Slaked lime",
				"Calcium carbonate",
				"Calcium sulphate"
			],
			ans: 1
		},
		{
			q: "Which metal is more reactive than iron but less reactive than zinc?",
			options: [
				"Cu",
				"Pb",
				"Al",
				"None of these (according to series)"
			],
			ans: 3
		},
		{
			q: "The chemical formula of rust is:",
			options: [
				"FeO",
				"Fe₂O₃",
				"Fe₂O₃·xH₂O",
				"Fe₃O₄"
			],
			ans: 2
		},
		{
			q: "When copper is heated in air, the black coating formed is of:",
			options: [
				"Cu₂O",
				"CuO",
				"CuCO₃",
				"Cu(OH)₂"
			],
			ans: 1
		},
		{
			q: "In the reaction Zn + H₂SO₄ → ZnSO₄ + H₂, zinc is:",
			options: [
				"Oxidised",
				"Reduced",
				"Neither",
				"Both"
			],
			ans: 0
		},
		{
			q: "A solution of AgNO₃ is mixed with NaCl. The precipitate formed is:",
			options: [
				"White and soluble",
				"White and insoluble",
				"Yellow and insoluble",
				"No precipitate"
			],
			ans: 1
		},
		{
			q: "Which of the following is not a combination reaction?",
			options: [
				"CaO + H₂O → Ca(OH)₂",
				"2H₂ + O₂ → 2H₂O",
				"CaCO₃ → CaO + CO₂",
				"C + O₂ → CO₂"
			],
			ans: 2
		},
		{
			q: "The reaction used in whitewashing is:",
			options: [
				"CaO + H₂O → Ca(OH)₂",
				"Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
				"Both A and B",
				"None"
			],
			ans: 2
		},
		{
			q: "Which gas is produced when dilute HCl reacts with zinc?",
			options: [
				"CO₂",
				"H₂",
				"Cl₂",
				"O₂"
			],
			ans: 1
		}
	],
	ch2: [
		{
			q: "The chemical formula of bleaching powder is:",
			options: [
				"CaCl₂",
				"CaOCl₂",
				"Ca(OCl)₂",
				"CaO"
			],
			ans: 1
		},
		{
			q: "When CO₂ is passed through lime water, it turns milky due to the formation of:",
			options: [
				"CaO",
				"Ca(OH)₂",
				"CaCO₃",
				"Ca(HCO₃)₂"
			],
			ans: 2
		},
		{
			q: "On passing excess CO₂ through the milky lime water, the milkiness disappears because of the formation of:",
			options: [
				"CaCO₃",
				"Ca(HCO₃)₂",
				"CaO",
				"CaCl₂"
			],
			ans: 1
		},
		{
			q: "Plaster of Paris is obtained by heating gypsum at:",
			options: [
				"100°C",
				"373 K",
				"573 K",
				"273 K"
			],
			ans: 1
		},
		{
			q: "The products of chlor-alkali process are:",
			options: [
				"NaOH, Cl₂, H₂",
				"NaCl, Cl₂, H₂",
				"NaOH, HCl, H₂",
				"Na₂CO₃, Cl₂, H₂"
			],
			ans: 0
		},
		{
			q: "Which of the following is an olfactory indicator?",
			options: [
				"Litmus",
				"Phenolphthalein",
				"Onion",
				"Methyl orange"
			],
			ans: 2
		},
		{
			q: "Baking soda on heating gives:",
			options: [
				"Na₂CO₃ + H₂O + CO₂",
				"NaOH + CO₂",
				"NaCl + H₂O",
				"Na₂O + CO₂"
			],
			ans: 0
		},
		{
			q: "The pH of pure water is:",
			options: [
				"0",
				"7",
				"14",
				"1"
			],
			ans: 1
		},
		{
			q: "Which acid is present in vinegar?",
			options: [
				"Citric acid",
				"Acetic acid",
				"Lactic acid",
				"Formic acid"
			],
			ans: 1
		},
		{
			q: "Tooth enamel is made of:",
			options: [
				"Calcium carbonate",
				"Calcium phosphate",
				"Calcium sulphate",
				"Calcium chloride"
			],
			ans: 1
		},
		{
			q: "Aqueous solution of sodium carbonate is:",
			options: [
				"Acidic",
				"Basic",
				"Neutral",
				"Amphoteric"
			],
			ans: 1
		},
		{
			q: "Which of the following salts does not contain water of crystallisation?",
			options: [
				"Blue vitriol",
				"Washing soda",
				"Baking soda",
				"Gypsum"
			],
			ans: 2
		},
		{
			q: "The reaction between an acid and a base to form salt and water is called:",
			options: [
				"Combination",
				"Decomposition",
				"Neutralisation",
				"Displacement"
			],
			ans: 2
		},
		{
			q: "When zinc reacts with sodium hydroxide, the gas evolved is:",
			options: [
				"CO₂",
				"H₂",
				"O₂",
				"Cl₂"
			],
			ans: 1
		},
		{
			q: "Methyl orange shows which colour in basic medium?",
			options: [
				"Red",
				"Yellow",
				"Pink",
				"Colourless"
			],
			ans: 1
		},
		{
			q: "Phenolphthalein is colourless in:",
			options: [
				"Acidic medium",
				"Basic medium",
				"Neutral medium",
				"Both acidic and neutral"
			],
			ans: 0
		},
		{
			q: "The chemical name of washing soda is:",
			options: [
				"Sodium carbonate",
				"Sodium hydrogen carbonate",
				"Sodium carbonate decahydrate",
				"Sodium hydroxide"
			],
			ans: 2
		},
		{
			q: "Gypsum is:",
			options: [
				"CaSO₄·½H₂O",
				"CaSO₄·2H₂O",
				"CaSO₄",
				"CaOCl₂"
			],
			ans: 1
		},
		{
			q: "Which of the following is used as an antacid?",
			options: [
				"NaOH",
				"NaHCO₃",
				"Na₂CO₃",
				"CaOCl₂"
			],
			ans: 1
		},
		{
			q: "In the reaction CuO + 2HCl → CuCl₂ + H₂O, CuO acts as:",
			options: [
				"Acid",
				"Base",
				"Salt",
				"Indicator"
			],
			ans: 1
		}
	],
	ch3: [
		{
			q: "Which of the following metals reacts vigorously with cold water?",
			options: [
				"Mg",
				"Al",
				"Na",
				"Zn"
			],
			ans: 2
		},
		{
			q: "The correct order of reactivity is:",
			options: [
				"Zn > Fe > Cu",
				"Cu > Fe > Zn",
				"Fe > Zn > Cu",
				"Zn > Cu > Fe"
			],
			ans: 0
		},
		{
			q: "Aluminium oxide is:",
			options: [
				"Acidic",
				"Basic",
				"Amphoteric",
				"Neutral"
			],
			ans: 2
		},
		{
			q: "The process of coating iron with zinc is called:",
			options: [
				"Anodising",
				"Galvanisation",
				"Electroplating",
				"Alloying"
			],
			ans: 1
		},
		{
			q: "Thermite reaction is used for:",
			options: [
				"Extraction of iron",
				"Welding railway tracks",
				"Making alloys",
				"Purification of metals"
			],
			ans: 1
		},
		{
			q: "Roasting is done for which type of ores?",
			options: [
				"Carbonate",
				"Sulphide",
				"Oxide",
				"Chloride"
			],
			ans: 1
		},
		{
			q: "Calcination is done for which type of ores?",
			options: [
				"Sulphide",
				"Carbonate",
				"Oxide",
				"Nitrate"
			],
			ans: 1
		},
		{
			q: "Which metal is stored under kerosene?",
			options: [
				"Mg",
				"Al",
				"Na",
				"Zn"
			],
			ans: 2
		},
		{
			q: "The chemical formula of rust is:",
			options: [
				"FeO",
				"Fe₂O₃",
				"Fe₂O₃·xH₂O",
				"Fe₃O₄"
			],
			ans: 2
		},
		{
			q: "Which of the following is an ionic compound?",
			options: [
				"CH₄",
				"H₂O",
				"NaCl",
				"CO₂"
			],
			ans: 2
		},
		{
			q: "In the reactivity series, hydrogen is placed between:",
			options: [
				"Cu and Ag",
				"Pb and Cu",
				"Fe and Pb",
				"Zn and Fe"
			],
			ans: 1
		},
		{
			q: "Zinc oxide is:",
			options: [
				"Acidic",
				"Basic",
				"Amphoteric",
				"Neutral"
			],
			ans: 2
		},
		{
			q: "Which gas is evolved when a metal reacts with dilute acid?",
			options: [
				"CO₂",
				"H₂",
				"O₂",
				"N₂"
			],
			ans: 1
		},
		{
			q: "Anodising is done for which metal?",
			options: [
				"Iron",
				"Copper",
				"Aluminium",
				"Zinc"
			],
			ans: 2
		},
		{
			q: "In the reaction ZnO + C → Zn + CO, carbon acts as:",
			options: [
				"Oxidising agent",
				"Reducing agent",
				"Catalyst",
				"None"
			],
			ans: 1
		},
		{
			q: "Which of the following metals does not react with dilute HCl?",
			options: [
				"Zn",
				"Fe",
				"Cu",
				"Mg"
			],
			ans: 2
		},
		{
			q: "The property of metals by which they can be beaten into thin sheets is called:",
			options: [
				"Ductility",
				"Malleability",
				"Sonority",
				"Conductivity"
			],
			ans: 1
		},
		{
			q: "Brass is an alloy of:",
			options: [
				"Cu and Zn",
				"Cu and Sn",
				"Cu and Ni",
				"Fe and Cr"
			],
			ans: 0
		},
		{
			q: "Bronze is an alloy of:",
			options: [
				"Cu and Zn",
				"Cu and Sn",
				"Cu and Al",
				"Fe and Ni"
			],
			ans: 1
		},
		{
			q: "Which of the following is not a method to prevent corrosion?",
			options: [
				"Painting",
				"Galvanisation",
				"Alloying",
				"Heating the metal"
			],
			ans: 3
		}
	],
	ch4: [
		{
			q: "The number of covalent bonds in methane is:",
			options: [
				"1",
				"2",
				"3",
				"4"
			],
			ans: 3
		},
		{
			q: "Which of the following is an unsaturated hydrocarbon?",
			options: [
				"CH₄",
				"C₂H₆",
				"C₂H₄",
				"C₃H₈"
			],
			ans: 2
		},
		{
			q: "The functional group present in ethanol is:",
			options: [
				"–CHO",
				"–COOH",
				"–OH",
				"–CO"
			],
			ans: 2
		},
		{
			q: "Esterification reaction is the reaction between:",
			options: [
				"Acid and base",
				"Acid and alcohol",
				"Alcohol and sodium",
				"Acid and sodium carbonate"
			],
			ans: 1
		},
		{
			q: "The catalyst used in hydrogenation of oils is:",
			options: [
				"Fe",
				"Ni",
				"Pt",
				"Both Ni and Pt"
			],
			ans: 3
		},
		{
			q: "Saponification is the process of:",
			options: [
				"Making soap",
				"Making ester",
				"Making alcohol",
				"Making acid"
			],
			ans: 0
		},
		{
			q: "Ethene on hydrogenation gives:",
			options: [
				"Ethane",
				"Ethyne",
				"Methane",
				"Propane"
			],
			ans: 0
		},
		{
			q: "The reaction of ethanol with sodium gives:",
			options: [
				"Sodium ethoxide + H₂",
				"Sodium acetate + H₂",
				"Sodium carbonate + H₂",
				"No reaction"
			],
			ans: 0
		},
		{
			q: "Dehydration of ethanol with conc. H₂SO₄ at 443 K gives:",
			options: [
				"Ethane",
				"Ethene",
				"Ethyne",
				"Methane"
			],
			ans: 1
		},
		{
			q: "Which of the following compounds has a fruity smell?",
			options: [
				"Ethanol",
				"Ethanoic acid",
				"Ethyl ethanoate",
				"Methane"
			],
			ans: 2
		},
		{
			q: "The molecular formula of ethanoic acid is:",
			options: [
				"CH₃OH",
				"CH₃COOH",
				"C₂H₅OH",
				"HCOOH"
			],
			ans: 1
		},
		{
			q: "Carbon forms a large number of compounds mainly due to:",
			options: [
				"Tetravalency only",
				"Catenation only",
				"Both tetravalency and catenation",
				"Ductility"
			],
			ans: 2
		},
		{
			q: "In a homologous series, successive members differ by:",
			options: [
				"CH₃",
				"CH₂",
				"CH",
				"C₂H₅"
			],
			ans: 1
		},
		{
			q: "Which type of reaction is shown by saturated hydrocarbons with chlorine in sunlight?",
			options: [
				"Addition",
				"Substitution",
				"Combustion",
				"Decomposition"
			],
			ans: 1
		},
		{
			q: "Soaps do not work well in hard water because:",
			options: [
				"They form scum",
				"They are acidic",
				"They are basic",
				"They evaporate"
			],
			ans: 0
		},
		{
			q: "The structure of methane is:",
			options: [
				"Linear",
				"Planar",
				"Tetrahedral",
				"Pyramidal"
			],
			ans: 2
		},
		{
			q: "Which of the following is used as a fuel as well as a solvent?",
			options: [
				"Methane",
				"Ethanol",
				"Ethanoic acid",
				"Ethene"
			],
			ans: 1
		},
		{
			q: "Vinegar is a dilute solution of:",
			options: [
				"Ethanol",
				"Ethanoic acid",
				"Methanol",
				"Formic acid"
			],
			ans: 1
		},
		{
			q: "The reaction CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O is catalysed by:",
			options: [
				"NaOH",
				"Conc. H₂SO₄",
				"Ni",
				"Pt"
			],
			ans: 1
		},
		{
			q: "Micelles are formed by:",
			options: [
				"Acids",
				"Bases",
				"Soap molecules in water",
				"Hydrocarbons"
			],
			ans: 2
		}
	]
};
var reactions$1 = [
	{
		ch: "ch1",
		title: "Burning of Magnesium Ribbon",
		eq: "2Mg(s) + O₂(g) → 2MgO(s)",
		type: "Combination + Oxidation",
		colour: "Mg: silvery white → MgO: white powder",
		obs: "Dazzling white flame; white ash left behind",
		cond: "Heat / burning in air",
		tip: "Always clean magnesium ribbon with sandpaper before burning to remove oxide layer.",
		desc: "Classic combination reaction. Magnesium is oxidised to magnesium oxide. Very important for board exams."
	},
	{
		ch: "ch1",
		title: "Quicklime + Water (Slaked Lime Formation)",
		eq: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat",
		type: "Combination + Exothermic",
		colour: "White solid dissolves forming colourless solution",
		obs: "Mixture becomes hot; hissing sound sometimes heard",
		cond: "Room temperature",
		tip: "This is the reaction used in whitewashing. Heat released shows it is exothermic.",
		desc: "Calcium oxide (quicklime) reacts vigorously with water to form calcium hydroxide (slaked lime)."
	},
	{
		ch: "ch1",
		title: "Whitewashing Reaction",
		eq: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
		type: "Base + acidic oxide",
		colour: "Milky / shiny white layer forms on walls",
		obs: "Thin shiny layer of calcium carbonate appears after 2–3 days",
		cond: "CO₂ from air",
		tip: "Marble also has the formula CaCO₃. Very frequently asked.",
		desc: "Slaked lime reacts with carbon dioxide in air to form calcium carbonate which gives the walls a shiny finish."
	},
	{
		ch: "ch1",
		title: "Combustion of Methane",
		eq: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Heat",
		type: "Combination + Exothermic",
		colour: "Blue flame (complete combustion)",
		obs: "Heat and light are produced",
		cond: "Ignition in sufficient oxygen",
		tip: "Natural gas is mainly methane. Write state symbols carefully.",
		desc: "Complete combustion of methane produces carbon dioxide, water vapour and a large amount of heat."
	},
	{
		ch: "ch1",
		title: "Respiration (Biological Oxidation)",
		eq: "C₆H₁₂O₆(aq) + 6O₂(g) → 6CO₂(g) + 6H₂O(l) + Energy",
		type: "Oxidation + Exothermic",
		colour: "No visible colour change",
		obs: "Energy is released in cells",
		cond: "Enzymatic process in living cells",
		tip: "Often asked as an example of exothermic reaction in living organisms.",
		desc: "Glucose is oxidised by oxygen in our body to release energy required for life processes."
	},
	{
		ch: "ch1",
		title: "Formation of Water",
		eq: "2H₂(g) + O₂(g) → 2H₂O(l)",
		type: "Combination",
		colour: "Colourless liquid formed",
		obs: "Explosive reaction if mixture is ignited",
		cond: "Electric spark or heat",
		tip: "Remember the 2:1 volume ratio of H₂ : O₂.",
		desc: "Hydrogen burns in oxygen to form water. Highly exothermic combination reaction."
	},
	{
		ch: "ch1",
		title: "Thermal Decomposition of Calcium Carbonate",
		eq: "CaCO₃(s) → CaO(s) + CO₂(g)",
		type: "Thermal Decomposition",
		colour: "White solid remains",
		obs: "Gas is evolved which turns lime water milky",
		cond: "Strong heating",
		tip: "Industrial process for making quicklime and cement.",
		desc: "Limestone decomposes on strong heating to form quicklime and carbon dioxide."
	},
	{
		ch: "ch1",
		title: "Decomposition of Ferrous Sulphate",
		eq: "2FeSO₄(s) → Fe₂O₃(s) + SO₂(g) + SO₃(g)",
		type: "Thermal Decomposition",
		colour: "Green crystals → brown Fe₂O₃",
		obs: "Smell of burning sulphur; colour changes from green to brown",
		cond: "Heating",
		tip: "Remember both SO₂ and SO₃ are produced. Colour change is important.",
		desc: "Green ferrous sulphate crystals first lose water and then decompose to form ferric oxide, sulphur dioxide and sulphur trioxide."
	},
	{
		ch: "ch1",
		title: "Thermal Decomposition of Lead Nitrate",
		eq: "2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)",
		type: "Thermal Decomposition",
		colour: "White crystals → yellow PbO; brown NO₂ gas",
		obs: "Brown fumes of nitrogen dioxide are evolved",
		cond: "Heating",
		tip: "One of the most important colour-change decomposition reactions.",
		desc: "Lead nitrate decomposes on heating to form yellow lead oxide, brown nitrogen dioxide gas and oxygen."
	},
	{
		ch: "ch1",
		title: "Electrolysis of Water",
		eq: "2H₂O(l) → 2H₂(g) + O₂(g)",
		type: "Electrolytic Decomposition",
		colour: "Colourless gases",
		obs: "Hydrogen collected at cathode (twice the volume of oxygen)",
		cond: "Electric current + acidified water",
		tip: "Volume of H₂ is double that of O₂. Very common board question.",
		desc: "Water is decomposed into hydrogen and oxygen by passing electric current through acidified water."
	},
	{
		ch: "ch1",
		title: "Photolytic Decomposition of Silver Chloride",
		eq: "2AgCl(s) → 2Ag(s) + Cl₂(g)",
		type: "Photolytic Decomposition",
		colour: "White AgCl → grey Ag",
		obs: "White silver chloride turns grey on exposure to sunlight",
		cond: "Sunlight",
		tip: "Basis of black-and-white photography. Must remember colour change.",
		desc: "Silver chloride decomposes in sunlight into silver and chlorine. Colour changes from white to grey."
	},
	{
		ch: "ch1",
		title: "Photolytic Decomposition of Silver Bromide",
		eq: "2AgBr(s) → 2Ag(s) + Br₂(g)",
		type: "Photolytic Decomposition",
		colour: "Pale yellow AgBr → grey Ag",
		obs: "Pale yellow silver bromide turns grey",
		cond: "Sunlight",
		tip: "Also used in photography. Similar to AgCl.",
		desc: "Silver bromide undergoes photolytic decomposition in sunlight forming silver and bromine."
	},
	{
		ch: "ch1",
		title: "Iron + Copper Sulphate",
		eq: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
		type: "Displacement",
		colour: "Blue CuSO₄ → pale green FeSO₄; reddish-brown Cu deposited",
		obs: "Blue solution turns pale green; brown coating on iron",
		cond: "Aqueous solution, room temperature",
		tip: "Iron is more reactive than copper. Colour change is very important.",
		desc: "Iron displaces copper from copper sulphate solution because it is higher in the reactivity series."
	},
	{
		ch: "ch1",
		title: "Zinc + Copper Sulphate",
		eq: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
		type: "Displacement",
		colour: "Blue solution becomes colourless; reddish-brown Cu deposited",
		obs: "Blue colour disappears; copper is deposited",
		cond: "Aqueous solution",
		tip: "Zinc is more reactive than copper.",
		desc: "Zinc displaces copper from copper sulphate solution."
	},
	{
		ch: "ch1",
		title: "Zinc + Silver Nitrate",
		eq: "Zn(s) + 2AgNO₃(aq) → Zn(NO₃)₂(aq) + 2Ag(s)",
		type: "Displacement",
		colour: "Colourless solution; greyish-white Ag deposited",
		obs: "Silver is deposited on zinc",
		cond: "Aqueous solution",
		tip: "Zinc is more reactive than silver.",
		desc: "Zinc displaces silver from silver nitrate solution."
	},
	{
		ch: "ch1",
		title: "Aluminium + Copper Chloride",
		eq: "2Al(s) + 3CuCl₂(aq) → 2AlCl₃(aq) + 3Cu(s)",
		type: "Displacement",
		colour: "Blue-green CuCl₂ fades; copper deposited",
		obs: "Colour of solution fades; copper metal appears",
		cond: "Aqueous solution",
		tip: "Aluminium is more reactive than copper.",
		desc: "Aluminium displaces copper from copper chloride solution."
	},
	{
		ch: "ch1",
		title: "Lead + Copper Chloride",
		eq: "Pb(s) + CuCl₂(aq) → PbCl₂(aq) + Cu(s)",
		type: "Displacement",
		colour: "Blue-green solution fades; copper deposited",
		obs: "Copper is deposited on lead",
		cond: "Aqueous solution",
		tip: "Lead is more reactive than copper.",
		desc: "Lead displaces copper from copper chloride solution."
	},
	{
		ch: "ch1",
		title: "Barium Chloride + Sodium Sulphate",
		eq: "BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq)",
		type: "Double Displacement (Precipitation)",
		colour: "White precipitate of BaSO₄",
		obs: "Immediate white precipitate forms",
		cond: "Aqueous solutions mixed",
		tip: "Classic precipitation reaction. BaSO₄ is insoluble.",
		desc: "Barium sulphate is precipitated as a white insoluble solid when solutions of barium chloride and sodium sulphate are mixed."
	},
	{
		ch: "ch1",
		title: "Lead Nitrate + Potassium Iodide",
		eq: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)",
		type: "Double Displacement (Precipitation)",
		colour: "Bright yellow precipitate of PbI₂",
		obs: "Yellow precipitate forms instantly",
		cond: "Aqueous solutions",
		tip: "One of the most beautiful precipitation reactions. Yellow colour is important.",
		desc: "Lead iodide is precipitated as a bright yellow solid."
	},
	{
		ch: "ch1",
		title: "Sodium Hydroxide + Hydrochloric Acid",
		eq: "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
		type: "Neutralisation",
		colour: "Colourless solution",
		obs: "Heat is evolved",
		cond: "Aqueous solutions",
		tip: "Neutralisation is a special case of double displacement.",
		desc: "Acid and base react to form salt and water. Reaction is exothermic."
	},
	{
		ch: "ch1",
		title: "Oxidation of Copper",
		eq: "2Cu(s) + O₂(g) → 2CuO(s)",
		type: "Oxidation",
		colour: "Reddish-brown Cu → black CuO",
		obs: "Black coating forms on copper",
		cond: "Heating in air",
		tip: "Copper is oxidised; oxygen is reduced.",
		desc: "Copper on heating in air forms black copper(II) oxide."
	},
	{
		ch: "ch1",
		title: "Reduction of Copper Oxide by Hydrogen",
		eq: "CuO(s) + H₂(g) → Cu(s) + H₂O(l)",
		type: "Redox",
		colour: "Black CuO → reddish-brown Cu",
		obs: "Black powder turns reddish-brown",
		cond: "Heating while passing H₂ gas",
		tip: "CuO is reduced; H₂ is oxidised. Classic redox example.",
		desc: "Black copper oxide is reduced to copper metal by hydrogen."
	},
	{
		ch: "ch1",
		title: "Zinc + Dilute Sulphuric Acid",
		eq: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑",
		type: "Displacement + Redox",
		colour: "Colourless solution; colourless gas",
		obs: "Bubbles of hydrogen gas; gas burns with pop sound",
		cond: "Room temperature",
		tip: "Hydrogen is tested by pop sound. Very common experiment.",
		desc: "Zinc displaces hydrogen from dilute sulphuric acid."
	},
	{
		ch: "ch1",
		title: "Iron + Steam",
		eq: "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)",
		type: "Redox",
		colour: "Black Fe₃O₄ formed",
		obs: "Hydrogen gas is produced",
		cond: "Red hot iron + steam",
		tip: "Earlier used for commercial production of hydrogen.",
		desc: "Red hot iron reacts with steam to form iron(II,III) oxide and hydrogen."
	},
	{
		ch: "ch1",
		title: "Rusting of Iron (Corrosion)",
		eq: "4Fe(s) + 3O₂(g) + xH₂O(l) → 2Fe₂O₃·xH₂O(s)",
		type: "Oxidation / Corrosion",
		colour: "Reddish-brown rust",
		obs: "Reddish-brown flaky coating develops over time",
		cond: "Moist air (both O₂ and H₂O required)",
		tip: "Both oxygen and water are essential for rusting. Prevention methods are asked.",
		desc: "Iron reacts with oxygen and moisture to form hydrated iron(III) oxide (rust)."
	},
	{
		ch: "ch1",
		title: "Rancidity (Oxidation of Oils & Fats)",
		eq: "Oils/Fats + O₂ → Rancid products (general)",
		type: "Oxidation",
		colour: "No specific colour; unpleasant smell develops",
		obs: "Change in smell and taste of food",
		cond: "Exposure to air",
		tip: "Prevented by antioxidants, refrigeration, airtight packing, nitrogen packing.",
		desc: "Oxidation of oils and fats causes unpleasant smell and taste. This is called rancidity."
	},
	{
		ch: "ch1",
		title: "Copper turning green (Basic Copper Carbonate)",
		eq: "2Cu + H₂O + CO₂ + O₂ → Cu(OH)₂·CuCO₃",
		type: "Corrosion",
		colour: "Green coating on copper",
		obs: "Copper articles develop green coating on long exposure to moist air",
		cond: "Moist air containing CO₂",
		tip: "The green coating is basic copper carbonate. Often asked with silver tarnishing.",
		desc: "Copper reacts with carbon dioxide, oxygen and moisture to form a green layer of basic copper carbonate."
	},
	{
		ch: "ch1",
		title: "Tarnishing of Silver",
		eq: "2Ag + H₂S → Ag₂S + H₂",
		type: "Corrosion",
		colour: "Black coating of Ag₂S",
		obs: "Silver articles turn black",
		cond: "Presence of H₂S in air",
		tip: "Black coating is silver sulphide. Very common extra reaction asked in exams.",
		desc: "Silver reacts with hydrogen sulphide present in air to form black silver sulphide."
	},
	{
		ch: "ch2",
		title: "Zinc + Dilute Hydrochloric Acid",
		eq: "Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑",
		type: "Acid + Metal",
		colour: "Colourless solution; colourless gas",
		obs: "Bubbles of hydrogen gas; gas burns with a pop sound",
		cond: "Room temperature",
		tip: "Hydrogen is tested by bringing a burning matchstick near the gas — it gives a characteristic pop.",
		desc: "Zinc reacts with dilute hydrochloric acid to liberate hydrogen gas and form zinc chloride."
	},
	{
		ch: "ch2",
		title: "Zinc + Dilute Sulphuric Acid",
		eq: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑",
		type: "Acid + Metal",
		colour: "Colourless solution",
		obs: "Hydrogen gas is evolved with effervescence",
		cond: "Room temperature",
		tip: "One of the most common laboratory methods to prepare hydrogen gas.",
		desc: "Zinc granules react with dilute sulphuric acid to produce hydrogen gas and zinc sulphate."
	},
	{
		ch: "ch2",
		title: "Magnesium + Dilute Hydrochloric Acid",
		eq: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑",
		type: "Acid + Metal",
		colour: "Colourless solution",
		obs: "Rapid evolution of hydrogen gas",
		cond: "Room temperature",
		tip: "Magnesium reacts faster than zinc with dilute acids.",
		desc: "Magnesium reacts vigorously with dilute hydrochloric acid to form magnesium chloride and hydrogen."
	},
	{
		ch: "ch2",
		title: "Iron + Dilute Hydrochloric Acid",
		eq: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑",
		type: "Acid + Metal",
		colour: "Pale green solution",
		obs: "Hydrogen gas is evolved slowly",
		cond: "Room temperature",
		tip: "Reaction is slower than Mg and Zn. FeCl₂ solution is pale green.",
		desc: "Iron reacts with dilute hydrochloric acid to form ferrous chloride and hydrogen gas."
	},
	{
		ch: "ch2",
		title: "Sodium Carbonate + Hydrochloric Acid",
		eq: "Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)↑",
		type: "Acid + Carbonate",
		colour: "Colourless gas",
		obs: "Brisk effervescence due to CO₂",
		cond: "Room temperature",
		tip: "CO₂ turns lime water milky. Very important confirmatory test.",
		desc: "Sodium carbonate reacts with dilute hydrochloric acid to liberate carbon dioxide gas."
	},
	{
		ch: "ch2",
		title: "Sodium Hydrogen Carbonate + Hydrochloric Acid",
		eq: "NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)↑",
		type: "Acid + Hydrogen Carbonate",
		colour: "Colourless gas",
		obs: "Effervescence due to carbon dioxide",
		cond: "Room temperature",
		tip: "Used in soda-acid fire extinguishers.",
		desc: "Baking soda reacts with hydrochloric acid to produce carbon dioxide, sodium chloride and water."
	},
	{
		ch: "ch2",
		title: "Calcium Carbonate + Hydrochloric Acid",
		eq: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)↑",
		type: "Acid + Carbonate",
		colour: "Colourless gas",
		obs: "Brisk effervescence; gas turns lime water milky",
		cond: "Room temperature",
		tip: "Marble chips / limestone are used in this experiment.",
		desc: "Calcium carbonate (marble or limestone) reacts with dilute hydrochloric acid to liberate carbon dioxide."
	},
	{
		ch: "ch2",
		title: "Lime Water Test for Carbon Dioxide",
		eq: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ + H₂O(l)",
		type: "Test Reaction",
		colour: "Colourless solution becomes milky",
		obs: "White precipitate of calcium carbonate forms",
		cond: "Passing CO₂ gas",
		tip: "Standard confirmatory test for CO₂. Must be remembered.",
		desc: "Carbon dioxide turns lime water milky due to the formation of insoluble calcium carbonate."
	},
	{
		ch: "ch2",
		title: "Excess CO₂ with Lime Water",
		eq: "CaCO₃(s) + H₂O(l) + CO₂(g) → Ca(HCO₃)₂(aq)",
		type: "Further Reaction",
		colour: "Milkiness disappears",
		obs: "Milky solution becomes clear again",
		cond: "Excess CO₂ passed",
		tip: "Insoluble CaCO₃ converts into soluble calcium hydrogen carbonate.",
		desc: "When excess carbon dioxide is passed, the milkiness disappears because calcium carbonate dissolves as calcium bicarbonate."
	},
	{
		ch: "ch2",
		title: "Sodium Hydroxide + Hydrochloric Acid",
		eq: "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
		type: "Neutralisation",
		colour: "Colourless solution",
		obs: "Heat is liberated",
		cond: "Aqueous solutions",
		tip: "Classic neutralisation reaction. Salt + water are formed.",
		desc: "Strong base reacts with strong acid to form sodium chloride and water. Reaction is exothermic."
	},
	{
		ch: "ch2",
		title: "Potassium Hydroxide + Nitric Acid",
		eq: "KOH(aq) + HNO₃(aq) → KNO₃(aq) + H₂O(l)",
		type: "Neutralisation",
		colour: "Colourless solution",
		obs: "Heat is evolved",
		cond: "Aqueous solutions",
		tip: "Another standard neutralisation example.",
		desc: "Potassium hydroxide neutralises nitric acid to form potassium nitrate and water."
	},
	{
		ch: "ch2",
		title: "Sodium Hydroxide + Sulphuric Acid",
		eq: "2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)",
		type: "Neutralisation",
		colour: "Colourless solution",
		obs: "Heat is released",
		cond: "Aqueous solutions",
		tip: "Two moles of NaOH are required for one mole of H₂SO₄.",
		desc: "Complete neutralisation of sulphuric acid requires two molecules of sodium hydroxide."
	},
	{
		ch: "ch2",
		title: "Copper Oxide + Hydrochloric Acid",
		eq: "CuO(s) + 2HCl(aq) → CuCl₂(aq) + H₂O(l)",
		type: "Metal Oxide + Acid",
		colour: "Black CuO → blue-green CuCl₂ solution",
		obs: "Black solid dissolves forming a coloured solution",
		cond: "Room temperature / mild heating",
		tip: "Metal oxides are basic and react with acids to form salt and water.",
		desc: "Black copper oxide reacts with dilute hydrochloric acid to form bluish-green copper chloride."
	},
	{
		ch: "ch2",
		title: "Copper Oxide + Sulphuric Acid",
		eq: "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)",
		type: "Metal Oxide + Acid",
		colour: "Black solid → blue solution",
		obs: "Blue copper sulphate solution is formed",
		cond: "Mild heating",
		tip: "Colour change from black to blue is important.",
		desc: "Copper oxide dissolves in dilute sulphuric acid to form blue copper sulphate solution."
	},
	{
		ch: "ch2",
		title: "Calcium Hydroxide + Carbon Dioxide",
		eq: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
		type: "Base + Non-metal Oxide",
		colour: "Milky appearance",
		obs: "White precipitate forms",
		cond: "Passing CO₂",
		tip: "Non-metal oxides are acidic in nature.",
		desc: "Calcium hydroxide (base) reacts with carbon dioxide (acidic oxide) to form salt and water."
	},
	{
		ch: "ch2",
		title: "Sodium Hydroxide + Carbon Dioxide",
		eq: "2NaOH(aq) + CO₂(g) → Na₂CO₃(aq) + H₂O(l)",
		type: "Base + Non-metal Oxide",
		colour: "Colourless solution",
		obs: "CO₂ is absorbed",
		cond: "Passing CO₂ through NaOH solution",
		tip: "Used to remove CO₂ from air in closed systems.",
		desc: "Sodium hydroxide absorbs carbon dioxide to form sodium carbonate and water."
	},
	{
		ch: "ch2",
		title: "Zinc + Sodium Hydroxide",
		eq: "Zn(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂(g)↑",
		type: "Base + Metal (Amphoteric)",
		colour: "Colourless solution",
		obs: "Hydrogen gas is evolved",
		cond: "Hot concentrated NaOH",
		tip: "Zinc is amphoteric — it reacts with both acids and bases.",
		desc: "Zinc reacts with hot concentrated sodium hydroxide to form sodium zincate and hydrogen gas."
	},
	{
		ch: "ch2",
		title: "Aluminium + Sodium Hydroxide",
		eq: "2Al(s) + 2NaOH(aq) + 2H₂O(l) → 2NaAlO₂(aq) + 3H₂(g)↑",
		type: "Base + Metal (Amphoteric)",
		colour: "Colourless solution",
		obs: "Hydrogen gas is evolved",
		cond: "Hot concentrated NaOH",
		tip: "Aluminium is also amphoteric.",
		desc: "Aluminium reacts with sodium hydroxide to form sodium aluminate and hydrogen."
	},
	{
		ch: "ch2",
		title: "Chlor-Alkali Process",
		eq: "2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) + H₂(g)",
		type: "Electrolysis",
		colour: "Chlorine: greenish-yellow gas",
		obs: "Chlorine at anode, hydrogen at cathode, NaOH in solution",
		cond: "Electrolysis of brine",
		tip: "Products: Chlorine, Hydrogen and Sodium hydroxide. Name comes from Chlor + Alkali.",
		desc: "Electrolysis of aqueous sodium chloride (brine) produces sodium hydroxide, chlorine and hydrogen."
	},
	{
		ch: "ch2",
		title: "Formation of Bleaching Powder",
		eq: "Ca(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l)",
		type: "Preparation of Salt",
		colour: "Pale yellowish-white solid",
		obs: "Bleaching powder is formed",
		cond: "Dry slaked lime + chlorine gas",
		tip: "Formula is written as CaOCl₂. Used for bleaching and disinfecting water.",
		desc: "Bleaching powder is prepared by the action of chlorine on dry slaked lime."
	},
	{
		ch: "ch2",
		title: "Heating of Baking Soda",
		eq: "2NaHCO₃(s) → Na₂CO₃(s) + H₂O(l) + CO₂(g)",
		type: "Thermal Decomposition",
		colour: "White solid",
		obs: "Carbon dioxide is released",
		cond: "Heating",
		tip: "This reaction helps cakes and bread to rise.",
		desc: "On heating, baking soda decomposes to form sodium carbonate, water and carbon dioxide."
	},
	{
		ch: "ch2",
		title: "Formation of Washing Soda",
		eq: "Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O",
		type: "Crystallisation",
		colour: "White crystals",
		obs: "Crystals of washing soda form",
		cond: "Recrystallisation from water",
		tip: "Washing soda is Na₂CO₃·10H₂O. Used to remove permanent hardness.",
		desc: "Anhydrous sodium carbonate is recrystallised to obtain washing soda (sodium carbonate decahydrate)."
	},
	{
		ch: "ch2",
		title: "Gypsum → Plaster of Paris",
		eq: "CaSO₄·2H₂O → CaSO₄·½H₂O + 1½H₂O",
		type: "Thermal Decomposition",
		colour: "White solid",
		obs: "Water of crystallisation is partially removed",
		cond: "Heating at 373 K",
		tip: "Temperature must be controlled at 373 K. Higher temperature gives dead burnt plaster.",
		desc: "Gypsum on heating at 373 K forms Plaster of Paris (calcium sulphate hemihydrate)."
	},
	{
		ch: "ch2",
		title: "Setting of Plaster of Paris",
		eq: "CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O",
		type: "Hydration",
		colour: "White hard mass",
		obs: "Plaster sets into a hard solid",
		cond: "Mixing with water",
		tip: "Used for setting fractured bones and making casts.",
		desc: "When Plaster of Paris is mixed with water, it rehydrates and forms gypsum which sets hard."
	},
	{
		ch: "ch2",
		title: "Sodium Hydroxide + Zinc (Amphoteric Nature)",
		eq: "Zn + 2NaOH → Na₂ZnO₂ + H₂",
		type: "Amphoteric Behaviour",
		colour: "Colourless solution",
		obs: "Hydrogen gas evolved",
		cond: "Hot concentrated alkali",
		tip: "Proves zinc is amphoteric.",
		desc: "Zinc reacts with strong bases to form zincate salt and hydrogen, showing amphoteric nature."
	},
	{
		ch: "ch3",
		title: "Sodium + Oxygen",
		eq: "4Na(s) + O₂(g) → 2Na₂O(s)",
		type: "Combination / Oxidation",
		colour: "White solid (Na₂O)",
		obs: "Sodium burns with a yellow flame",
		cond: "Heating in air / oxygen",
		tip: "Sodium is stored under kerosene because it reacts vigorously with air and moisture.",
		desc: "Sodium reacts with oxygen to form sodium oxide. Highly reactive metal."
	},
	{
		ch: "ch3",
		title: "Magnesium + Oxygen",
		eq: "2Mg(s) + O₂(g) → 2MgO(s)",
		type: "Combination / Oxidation",
		colour: "White powder (MgO)",
		obs: "Dazzling white flame",
		cond: "Burning in air",
		tip: "Clean the ribbon before burning. MgO is basic in nature.",
		desc: "Magnesium burns with a brilliant white flame to form white magnesium oxide."
	},
	{
		ch: "ch3",
		title: "Aluminium + Oxygen",
		eq: "4Al(s) + 3O₂(g) → 2Al₂O₃(s)",
		type: "Oxidation",
		colour: "White solid (Al₂O₃)",
		obs: "Thin protective oxide layer forms",
		cond: "Exposure to air",
		tip: "The oxide layer protects aluminium from further corrosion (anodising makes it thicker).",
		desc: "Aluminium forms a thin, tough layer of aluminium oxide which prevents further oxidation."
	},
	{
		ch: "ch3",
		title: "Zinc + Oxygen",
		eq: "2Zn(s) + O₂(g) → 2ZnO(s)",
		type: "Oxidation",
		colour: "ZnO is yellow when hot, white when cold",
		obs: "Zinc burns to form zinc oxide",
		cond: "Heating in air",
		tip: "Colour change of ZnO (yellow hot → white cold) is frequently asked.",
		desc: "Zinc reacts with oxygen to form zinc oxide which is amphoteric."
	},
	{
		ch: "ch3",
		title: "Iron + Oxygen",
		eq: "3Fe(s) + 2O₂(g) → Fe₃O₄(s)",
		type: "Oxidation",
		colour: "Black Fe₃O₄",
		obs: "Iron filings burn to form magnetic oxide of iron",
		cond: "Heating / burning",
		tip: "Fe₃O₄ is also called magnetic oxide of iron.",
		desc: "Iron reacts with oxygen to form iron(II,III) oxide."
	},
	{
		ch: "ch3",
		title: "Copper + Oxygen",
		eq: "2Cu(s) + O₂(g) → 2CuO(s)",
		type: "Oxidation",
		colour: "Reddish-brown Cu → black CuO",
		obs: "Black coating forms on copper",
		cond: "Heating in air",
		tip: "Very important colour change for board exams.",
		desc: "Copper on heating in air is oxidised to black copper(II) oxide."
	},
	{
		ch: "ch3",
		title: "Aluminium Oxide + Hydrochloric Acid",
		eq: "Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)",
		type: "Amphoteric Oxide (Basic behaviour)",
		colour: "Colourless solution",
		obs: "Oxide dissolves",
		cond: "Aqueous acid",
		tip: "Shows basic character of Al₂O₃.",
		desc: "Aluminium oxide reacts with acids to form salt and water, showing basic nature."
	},
	{
		ch: "ch3",
		title: "Aluminium Oxide + Sodium Hydroxide",
		eq: "Al₂O₃(s) + 2NaOH(aq) → 2NaAlO₂(aq) + H₂O(l)",
		type: "Amphoteric Oxide (Acidic behaviour)",
		colour: "Colourless solution",
		obs: "Oxide dissolves in base",
		cond: "Aqueous NaOH",
		tip: "Shows acidic character of Al₂O₃. Hence amphoteric.",
		desc: "Aluminium oxide also reacts with bases to form sodium aluminate, proving it is amphoteric."
	},
	{
		ch: "ch3",
		title: "Zinc Oxide + Hydrochloric Acid",
		eq: "ZnO(s) + 2HCl(aq) → ZnCl₂(aq) + H₂O(l)",
		type: "Amphoteric Oxide",
		colour: "Colourless solution",
		obs: "Oxide dissolves",
		cond: "Aqueous acid",
		tip: "ZnO is amphoteric like Al₂O₃.",
		desc: "Zinc oxide reacts with acids to form zinc chloride and water."
	},
	{
		ch: "ch3",
		title: "Zinc Oxide + Sodium Hydroxide",
		eq: "ZnO(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂O(l)",
		type: "Amphoteric Oxide",
		colour: "Colourless solution",
		obs: "Oxide dissolves in alkali",
		cond: "Aqueous NaOH",
		tip: "Formation of sodium zincate proves amphoteric nature.",
		desc: "Zinc oxide reacts with sodium hydroxide to form sodium zincate."
	},
	{
		ch: "ch3",
		title: "Potassium + Water",
		eq: "2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)↑ + Heat",
		type: "Metal + Water",
		colour: "Colourless solution",
		obs: "Violent reaction; hydrogen catches fire",
		cond: "Cold water",
		tip: "Most reactive metal. Stored under kerosene.",
		desc: "Potassium reacts violently with cold water. Hydrogen gas produced catches fire."
	},
	{
		ch: "ch3",
		title: "Sodium + Water",
		eq: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Heat",
		type: "Metal + Water",
		colour: "Colourless solution",
		obs: "Vigorous reaction; melts into a ball; hydrogen may catch fire",
		cond: "Cold water",
		tip: "Stored under kerosene. Very common demonstration (with precautions).",
		desc: "Sodium reacts vigorously with cold water to form sodium hydroxide and hydrogen."
	},
	{
		ch: "ch3",
		title: "Calcium + Water",
		eq: "Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)↑",
		type: "Metal + Water",
		colour: "Colourless solution; milky if excess",
		obs: "Less violent than Na/K; calcium floats",
		cond: "Cold water",
		tip: "Hydrogen bubbles stick to calcium making it float.",
		desc: "Calcium reacts with water less vigorously than sodium and potassium."
	},
	{
		ch: "ch3",
		title: "Magnesium + Hot Water / Steam",
		eq: "Mg(s) + 2H₂O(g) → Mg(OH)₂ / MgO + H₂(g)",
		type: "Metal + Water",
		colour: "White solid",
		obs: "Hydrogen gas evolved",
		cond: "Hot water or steam",
		tip: "Does not react with cold water.",
		desc: "Magnesium reacts with hot water or steam to form magnesium hydroxide/oxide and hydrogen."
	},
	{
		ch: "ch3",
		title: "Aluminium + Steam",
		eq: "2Al(s) + 3H₂O(g) → Al₂O₃(s) + 3H₂(g)",
		type: "Metal + Steam",
		colour: "White Al₂O₃",
		obs: "Hydrogen gas produced",
		cond: "Steam",
		tip: "Aluminium reacts only with steam, not with cold or hot water easily due to oxide layer.",
		desc: "Aluminium reacts with steam to form aluminium oxide and hydrogen."
	},
	{
		ch: "ch3",
		title: "Iron + Steam",
		eq: "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)",
		type: "Metal + Steam",
		colour: "Black Fe₃O₄",
		obs: "Hydrogen gas is produced",
		cond: "Red hot iron + steam",
		tip: "Earlier method for commercial production of hydrogen.",
		desc: "Red hot iron reacts with steam to form magnetic oxide of iron and hydrogen."
	},
	{
		ch: "ch3",
		title: "Magnesium + Dilute HCl",
		eq: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑",
		type: "Metal + Acid",
		colour: "Colourless solution",
		obs: "Rapid evolution of hydrogen",
		cond: "Room temperature",
		tip: "Most reactive among common metals with dilute acids.",
		desc: "Magnesium reacts rapidly with dilute hydrochloric acid to liberate hydrogen."
	},
	{
		ch: "ch3",
		title: "Aluminium + Dilute HCl",
		eq: "2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)↑",
		type: "Metal + Acid",
		colour: "Colourless solution",
		obs: "Hydrogen gas evolved",
		cond: "Room temperature",
		tip: "Oxide layer must be removed for smooth reaction.",
		desc: "Aluminium reacts with dilute hydrochloric acid to form aluminium chloride and hydrogen."
	},
	{
		ch: "ch3",
		title: "Zinc + Dilute HCl",
		eq: "Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑",
		type: "Metal + Acid",
		colour: "Colourless solution",
		obs: "Hydrogen gas with pop sound",
		cond: "Room temperature",
		tip: "Standard laboratory preparation of hydrogen.",
		desc: "Zinc reacts with dilute hydrochloric acid to produce hydrogen gas."
	},
	{
		ch: "ch3",
		title: "Iron + Dilute HCl",
		eq: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑",
		type: "Metal + Acid",
		colour: "Pale green solution",
		obs: "Slow evolution of hydrogen",
		cond: "Room temperature",
		tip: "Reaction is slower than Zn and Mg.",
		desc: "Iron reacts with dilute hydrochloric acid to form ferrous chloride and hydrogen."
	},
	{
		ch: "ch3",
		title: "Zinc + Dilute H₂SO₄",
		eq: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑",
		type: "Metal + Acid",
		colour: "Colourless solution",
		obs: "Hydrogen gas evolved",
		cond: "Room temperature",
		tip: "Copper, silver and gold do not react with dilute acids.",
		desc: "Zinc reacts with dilute sulphuric acid to form zinc sulphate and hydrogen."
	},
	{
		ch: "ch3",
		title: "Iron + Copper Sulphate",
		eq: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
		type: "Displacement",
		colour: "Blue → pale green; reddish-brown Cu deposited",
		obs: "Blue colour fades; brown coating on iron",
		cond: "Aqueous solution",
		tip: "Iron is more reactive than copper. Classic reactivity series experiment.",
		desc: "Iron displaces copper from copper sulphate solution."
	},
	{
		ch: "ch3",
		title: "Zinc + Copper Sulphate",
		eq: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
		type: "Displacement",
		colour: "Blue solution becomes colourless; Cu deposited",
		obs: "Blue colour disappears",
		cond: "Aqueous solution",
		tip: "Zinc is higher than copper in reactivity series.",
		desc: "Zinc displaces copper from copper sulphate solution."
	},
	{
		ch: "ch3",
		title: "Zinc + Iron Sulphate",
		eq: "Zn(s) + FeSO₄(aq) → ZnSO₄(aq) + Fe(s)",
		type: "Displacement",
		colour: "Green solution fades",
		obs: "Iron is deposited",
		cond: "Aqueous solution",
		tip: "Zinc is more reactive than iron.",
		desc: "Zinc displaces iron from iron sulphate solution."
	},
	{
		ch: "ch3",
		title: "Copper + Silver Nitrate",
		eq: "Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)",
		type: "Displacement",
		colour: "Colourless → blue; greyish Ag deposited",
		obs: "Silver is deposited; solution turns blue",
		cond: "Aqueous solution",
		tip: "Copper is more reactive than silver.",
		desc: "Copper displaces silver from silver nitrate solution."
	},
	{
		ch: "ch3",
		title: "Thermite Reaction",
		eq: "Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat",
		type: "Displacement / Redox (Highly Exothermic)",
		colour: "Molten iron produced",
		obs: "Large amount of heat; molten iron formed",
		cond: "Ignition mixture",
		tip: "Used for welding railway tracks. Aluminium acts as reducing agent.",
		desc: "Aluminium reduces iron(III) oxide to molten iron. Extremely exothermic reaction used in thermite welding."
	},
	{
		ch: "ch3",
		title: "Roasting of Zinc Sulphide",
		eq: "2ZnS(s) + 3O₂(g) → 2ZnO(s) + 2SO₂(g)",
		type: "Roasting",
		colour: "ZnO: yellow when hot, white when cold",
		obs: "Sulphur dioxide gas evolved",
		cond: "Heating in excess air",
		tip: "Roasting is for sulphide ores. Calcination is for carbonate ores.",
		desc: "Zinc sulphide is converted to zinc oxide by heating in excess air (roasting)."
	},
	{
		ch: "ch3",
		title: "Calcination of Zinc Carbonate",
		eq: "ZnCO₃(s) → ZnO(s) + CO₂(g)",
		type: "Calcination",
		colour: "ZnO: yellow hot → white cold",
		obs: "Carbon dioxide is released",
		cond: "Heating in limited air",
		tip: "Calcination is heating of carbonate ore in limited supply of air.",
		desc: "Zinc carbonate is heated to obtain zinc oxide and carbon dioxide."
	},
	{
		ch: "ch3",
		title: "Reduction of Zinc Oxide",
		eq: "ZnO(s) + C(s) → Zn(s) + CO(g)",
		type: "Reduction",
		colour: "Zinc metal obtained",
		obs: "Zinc is liberated",
		cond: "High temperature",
		tip: "Carbon acts as reducing agent for moderately reactive metals.",
		desc: "Zinc oxide is reduced to zinc metal by heating with carbon."
	},
	{
		ch: "ch3",
		title: "Formation of Sodium Chloride (Ionic Compound)",
		eq: "2Na(s) + Cl₂(g) → 2NaCl(s)",
		type: "Combination (Ionic Bond)",
		colour: "White crystalline solid",
		obs: "Bright yellow flame; white smoke of NaCl",
		cond: "Heating sodium in chlorine",
		tip: "Classic example of ionic compound formation by electron transfer.",
		desc: "Sodium loses electron and chlorine gains electron to form ionic sodium chloride."
	},
	{
		ch: "ch3",
		title: "Rusting of Iron",
		eq: "4Fe(s) + 3O₂(g) + xH₂O(l) → 2Fe₂O₃·xH₂O(s)",
		type: "Corrosion",
		colour: "Reddish-brown rust",
		obs: "Flaky reddish-brown coating develops",
		cond: "Moist air (both O₂ and H₂O needed)",
		tip: "Prevention: painting, galvanising, alloying, sacrificial protection.",
		desc: "Iron reacts with oxygen and moisture to form hydrated iron(III) oxide known as rust."
	},
	{
		ch: "ch4",
		title: "Combustion of Methane",
		eq: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Heat + Light",
		type: "Combustion",
		colour: "Blue flame (complete combustion)",
		obs: "Heat and light are produced",
		cond: "Ignition in sufficient air/oxygen",
		tip: "Complete combustion gives clean blue flame. Insufficient oxygen gives sooty flame.",
		desc: "Methane burns completely in oxygen to form carbon dioxide and water, releasing large amount of energy."
	},
	{
		ch: "ch4",
		title: "Combustion of Ethanol",
		eq: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(g) + Heat + Light",
		type: "Combustion",
		colour: "Blue flame",
		obs: "Heat and light released",
		cond: "Burning in air",
		tip: "Alcohols also undergo complete combustion like hydrocarbons.",
		desc: "Ethanol burns in air to produce carbon dioxide, water and energy."
	},
	{
		ch: "ch4",
		title: "Combustion of Carbon",
		eq: "C(s) + O₂(g) → CO₂(g) + Heat + Light",
		type: "Combustion",
		colour: "—",
		obs: "Heat and light produced",
		cond: "Burning in air/oxygen",
		tip: "Basic combustion reaction of carbon.",
		desc: "Carbon burns in oxygen to form carbon dioxide."
	},
	{
		ch: "ch4",
		title: "Oxidation of Ethanol to Ethanoic Acid",
		eq: "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O",
		type: "Oxidation",
		colour: "Purple KMnO₄ decolourises",
		obs: "Colour of alkaline KMnO₄ disappears",
		cond: "Alkaline KMnO₄ or acidified K₂Cr₂O₇ + Heat",
		tip: "Very important. Alkaline KMnO₄ is a common oxidising agent in Class 10.",
		desc: "Ethanol is oxidised to ethanoic acid by strong oxidising agents on heating."
	},
	{
		ch: "ch4",
		title: "Hydrogenation of Ethene",
		eq: "CH₂=CH₂ + H₂ → CH₃–CH₃",
		type: "Addition Reaction",
		colour: "Colourless",
		obs: "Unsaturated compound becomes saturated",
		cond: "Nickel or Palladium catalyst",
		tip: "Used in hydrogenation of vegetable oils to make vanaspati ghee.",
		desc: "Ethene adds hydrogen in presence of Ni catalyst to form ethane (saturated hydrocarbon)."
	},
	{
		ch: "ch4",
		title: "Hydrogenation of Ethyne",
		eq: "CH≡CH + 2H₂ → CH₃–CH₃",
		type: "Addition Reaction",
		colour: "Colourless",
		obs: "Triple bond becomes single bond",
		cond: "Nickel catalyst",
		tip: "Shows addition reaction across multiple bonds.",
		desc: "Ethyne adds two molecules of hydrogen to form ethane."
	},
	{
		ch: "ch4",
		title: "Chlorination of Methane (Substitution)",
		eq: "CH₄ + Cl₂ → CH₃Cl + HCl",
		type: "Substitution Reaction",
		colour: "—",
		obs: "Chloromethane and hydrogen chloride formed",
		cond: "Sunlight",
		tip: "Substitution occurs only in presence of sunlight. Further substitution possible.",
		desc: "In sunlight, chlorine replaces hydrogen atom of methane to form chloromethane."
	},
	{
		ch: "ch4",
		title: "Ethanol + Sodium",
		eq: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑",
		type: "Reaction with Metal",
		colour: "Colourless",
		obs: "Hydrogen gas is evolved",
		cond: "Room temperature",
		tip: "Used to detect alcoholic –OH group. Hydrogen burns with pop sound.",
		desc: "Ethanol reacts with sodium to form sodium ethoxide and hydrogen gas."
	},
	{
		ch: "ch4",
		title: "Dehydration of Ethanol",
		eq: "CH₃CH₂OH → CH₂=CH₂ + H₂O",
		type: "Dehydration",
		colour: "Colourless gas (ethene)",
		obs: "Ethene gas is produced",
		cond: "Conc. H₂SO₄, 443 K",
		tip: "Concentrated sulphuric acid acts as dehydrating agent. Temperature is important.",
		desc: "Ethanol on heating with excess concentrated sulphuric acid at 443 K undergoes dehydration to form ethene."
	},
	{
		ch: "ch4",
		title: "Ethanoic Acid + Sodium Hydroxide",
		eq: "CH₃COOH + NaOH → CH₃COONa + H₂O",
		type: "Neutralisation",
		colour: "Colourless solution",
		obs: "Salt and water formed",
		cond: "Room temperature",
		tip: "Ethanoic acid is a weak acid. This is a neutralisation reaction.",
		desc: "Ethanoic acid reacts with sodium hydroxide to form sodium ethanoate and water."
	},
	{
		ch: "ch4",
		title: "Ethanoic Acid + Sodium Carbonate",
		eq: "2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑",
		type: "Acid + Carbonate",
		colour: "Colourless gas",
		obs: "Brisk effervescence due to CO₂",
		cond: "Room temperature",
		tip: "Confirms acidic nature of ethanoic acid. CO₂ turns lime water milky.",
		desc: "Ethanoic acid reacts with sodium carbonate to liberate carbon dioxide."
	},
	{
		ch: "ch4",
		title: "Ethanoic Acid + Sodium Hydrogen Carbonate",
		eq: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑",
		type: "Acid + Hydrogen Carbonate",
		colour: "Colourless gas",
		obs: "Effervescence due to CO₂",
		cond: "Room temperature",
		tip: "Very common test for carboxylic acids.",
		desc: "Ethanoic acid reacts with baking soda to produce carbon dioxide, sodium ethanoate and water."
	},
	{
		ch: "ch4",
		title: "Esterification Reaction",
		eq: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
		type: "Esterification",
		colour: "Colourless; sweet smell",
		obs: "Sweet-smelling ester (ethyl ethanoate) is formed",
		cond: "Conc. H₂SO₄ (catalyst) + Heat",
		tip: "Reversible reaction. Concentrated H₂SO₄ is used as catalyst. Fruity smell is characteristic.",
		desc: "Ethanoic acid reacts with ethanol in presence of concentrated sulphuric acid to form ethyl ethanoate (ester) and water."
	},
	{
		ch: "ch4",
		title: "Saponification Reaction",
		eq: "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH",
		type: "Saponification",
		colour: "—",
		obs: "Ester is hydrolysed to salt and alcohol",
		cond: "NaOH + Heat",
		tip: "Alkaline hydrolysis of ester. Used in soap manufacture.",
		desc: "When an ester is heated with sodium hydroxide, it gives the sodium salt of carboxylic acid and alcohol. This is saponification."
	},
	{
		ch: "ch4",
		title: "Reaction of Ethanoic Acid with Alcohol (General Esterification)",
		eq: "RCOOH + R'OH ⇌ RCOOR' + H₂O",
		type: "Esterification",
		colour: "Sweet smelling product",
		obs: "Ester with characteristic fruity smell formed",
		cond: "Acid catalyst + Heat",
		tip: "General reaction between carboxylic acid and alcohol.",
		desc: "Carboxylic acids react with alcohols to form esters in presence of acid catalyst."
	},
	{
		ch: "ch4",
		title: "Addition of Hydrogen to Unsaturated Hydrocarbon (General)",
		eq: "R–CH=CH–R + H₂ → R–CH₂–CH₂–R",
		type: "Addition / Hydrogenation",
		colour: "—",
		obs: "Unsaturated compound becomes saturated",
		cond: "Ni / Pd / Pt catalyst",
		tip: "Industrial application: conversion of oils into solid fats (vanaspati).",
		desc: "Unsaturated hydrocarbons add hydrogen across the double or triple bond in presence of catalyst to become saturated."
	},
	{
		ch: "ch4",
		title: "Substitution Reaction of Alkanes (General)",
		eq: "RH + Cl₂ → RCl + HCl",
		type: "Substitution",
		colour: "—",
		obs: "Haloalkane formed",
		cond: "Sunlight",
		tip: "Saturated hydrocarbons undergo substitution, not addition.",
		desc: "In presence of sunlight, hydrogen atoms of alkanes are replaced by halogen atoms."
	},
	{
		ch: "ch4",
		title: "Ethanol as Fuel (Combustion)",
		eq: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + Energy",
		type: "Combustion",
		colour: "Blue flame",
		obs: "Clean burning",
		cond: "Burning",
		tip: "Ethanol is used as a fuel and in spirit lamps.",
		desc: "Complete combustion of ethanol produces carbon dioxide, water and energy."
	},
	{
		ch: "ch4",
		title: "Formation of Micelle (Soap Action)",
		eq: "Soap molecules arrange into micelle (no chemical equation)",
		type: "Cleansing Action",
		colour: "—",
		obs: "Dirt and grease are emulsified and washed away",
		cond: "Soap + water + dirt",
		tip: "Hydrophobic tail attaches to grease, hydrophilic head to water. Micelle formation is key.",
		desc: "Soap molecules form micelles that trap grease and dirt, which are then washed away by water."
	}
];
var colours$1 = [
	{
		"name": "Copper Sulphate (hydrated)",
		"formula": "CuSO₄·5H₂O",
		"colour": "Blue crystals / blue solution",
		"remarks": "Most frequently asked. Turns white on strong heating.",
		"swatch": "#1e90ff"
	},
	{
		"name": "Copper Sulphate (anhydrous)",
		"formula": "CuSO₄",
		"colour": "White",
		"remarks": "Formed when hydrated CuSO₄ is heated strongly.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Ferrous Sulphate (hydrated)",
		"formula": "FeSO₄·7H₂O",
		"colour": "Green crystals",
		"remarks": "Turns brown on heating due to formation of Fe₂O₃.",
		"swatch": "#22c55e"
	},
	{
		"name": "Ferric Oxide / Iron(III) Oxide",
		"formula": "Fe₂O₃",
		"colour": "Reddish-brown",
		"remarks": "Also the colour of rust (Fe₂O₃·xH₂O).",
		"swatch": "#b45309"
	},
	{
		"name": "Copper(II) Oxide",
		"formula": "CuO",
		"colour": "Black",
		"remarks": "Formed when copper is heated in air.",
		"swatch": "#000000"
	},
	{
		"name": "Copper metal",
		"formula": "Cu",
		"colour": "Reddish-brown",
		"remarks": "Deposited in displacement reactions.",
		"swatch": "#b45309"
	},
	{
		"name": "Copper Chloride",
		"formula": "CuCl₂",
		"colour": "Bluish-green solution",
		"remarks": "Formed when CuO reacts with HCl.",
		"swatch": "#0d9488"
	},
	{
		"name": "Barium Sulphate",
		"formula": "BaSO₄",
		"colour": "White precipitate",
		"remarks": "Insoluble. Classic double displacement product.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Lead Iodide",
		"formula": "PbI₂",
		"colour": "Bright yellow precipitate",
		"remarks": "One of the most beautiful precipitates in Class 10.",
		"swatch": "#eab308"
	},
	{
		"name": "Lead Oxide",
		"formula": "PbO",
		"colour": "Yellow",
		"remarks": "Formed on heating lead nitrate.",
		"swatch": "#eab308"
	},
	{
		"name": "Lead Nitrate",
		"formula": "Pb(NO₃)₂",
		"colour": "White crystals",
		"remarks": "Gives brown fumes of NO₂ on heating.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Nitrogen Dioxide",
		"formula": "NO₂",
		"colour": "Brown gas",
		"remarks": "Evolved when lead nitrate or some nitrates are heated.",
		"swatch": "#7f1d1d"
	},
	{
		"name": "Silver Chloride",
		"formula": "AgCl",
		"colour": "White (turns grey in sunlight)",
		"remarks": "Photolytic decomposition. Used in photography.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Silver Bromide",
		"formula": "AgBr",
		"colour": "Pale yellow (turns grey in sunlight)",
		"remarks": "Also used in photography.",
		"swatch": "#fde68a"
	},
	{
		"name": "Silver Sulphide",
		"formula": "Ag₂S",
		"colour": "Black",
		"remarks": "Cause of tarnishing of silver.",
		"swatch": "#000000"
	},
	{
		"name": "Magnesium Oxide",
		"formula": "MgO",
		"colour": "White powder",
		"remarks": "Formed when magnesium burns with dazzling white flame.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Calcium Oxide (Quick lime)",
		"formula": "CaO",
		"colour": "White",
		"remarks": "Formed by heating limestone.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Calcium Carbonate",
		"formula": "CaCO₃",
		"colour": "White",
		"remarks": "Marble, limestone, chalk. Also the milky precipitate in lime water test.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Zinc Oxide",
		"formula": "ZnO",
		"colour": "Yellow when hot, white when cold",
		"remarks": "Very important colour change question.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Zinc metal",
		"formula": "Zn",
		"colour": "Bluish-white / grey",
		"remarks": "—",
		"swatch": "#d1d5db"
	},
	{
		"name": "Iron metal",
		"formula": "Fe",
		"colour": "Grey",
		"remarks": "—",
		"swatch": "#9ca3af"
	},
	{
		"name": "Aluminium metal",
		"formula": "Al",
		"colour": "Silvery-white",
		"remarks": "Protected by oxide layer.",
		"swatch": "#e5e7eb"
	},
	{
		"name": "Copper Carbonate / Basic Copper Carbonate",
		"formula": "CuCO₃·Cu(OH)₂",
		"colour": "Green",
		"remarks": "Green coating on copper articles (patina).",
		"swatch": "#16a34a"
	},
	{
		"name": "Copper Sulphide",
		"formula": "CuS",
		"colour": "Black",
		"remarks": "—",
		"swatch": "#000000"
	},
	{
		"name": "Sodium Chloride",
		"formula": "NaCl",
		"colour": "White crystalline",
		"remarks": "Common salt / rock salt.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Sodium Carbonate (Washing Soda)",
		"formula": "Na₂CO₃·10H₂O",
		"colour": "White crystals",
		"remarks": "—",
		"swatch": "#f8fafc"
	},
	{
		"name": "Sodium Hydrogen Carbonate (Baking Soda)",
		"formula": "NaHCO₃",
		"colour": "White powder",
		"remarks": "—",
		"swatch": "#f8fafc"
	},
	{
		"name": "Bleaching Powder",
		"formula": "CaOCl₂",
		"colour": "Pale yellowish-white",
		"remarks": "—",
		"swatch": "#fef9c3"
	},
	{
		"name": "Plaster of Paris",
		"formula": "CaSO₄·½H₂O",
		"colour": "White powder",
		"remarks": "Sets into hard mass with water.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Gypsum",
		"formula": "CaSO₄·2H₂O",
		"colour": "White solid",
		"remarks": "—",
		"swatch": "#f8fafc"
	},
	{
		"name": "Chlorine gas",
		"formula": "Cl₂",
		"colour": "Greenish-yellow",
		"remarks": "Produced at anode in chlor-alkali process.",
		"swatch": "#22c55e"
	},
	{
		"name": "Hydrogen gas",
		"formula": "H₂",
		"colour": "Colourless",
		"remarks": "Burns with pop sound.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Oxygen gas",
		"formula": "O₂",
		"colour": "Colourless",
		"remarks": "Supports combustion; relights glowing splint.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Carbon Dioxide",
		"formula": "CO₂",
		"colour": "Colourless",
		"remarks": "Turns lime water milky.",
		"swatch": "#f8fafc"
	},
	{
		"name": "Phenolphthalein (in basic medium)",
		"formula": "—",
		"colour": "Pink",
		"remarks": "Colourless in acid, pink in base.",
		"swatch": "#f472b6"
	},
	{
		"name": "Phenolphthalein (in acidic medium)",
		"formula": "—",
		"colour": "Colourless",
		"remarks": "—",
		"swatch": "#f8fafc"
	},
	{
		"name": "Methyl Orange (in acid)",
		"formula": "—",
		"colour": "Red / Pink",
		"remarks": "—",
		"swatch": "#ef4444"
	},
	{
		"name": "Methyl Orange (in base)",
		"formula": "—",
		"colour": "Yellow",
		"remarks": "—",
		"swatch": "#eab308"
	},
	{
		"name": "Blue Litmus (in acid)",
		"formula": "—",
		"colour": "Red",
		"remarks": "—",
		"swatch": "#ef4444"
	},
	{
		"name": "Red Litmus (in base)",
		"formula": "—",
		"colour": "Blue",
		"remarks": "—",
		"swatch": "#3b82f6"
	},
	{
		"name": "Turmeric (in base)",
		"formula": "—",
		"colour": "Reddish-brown",
		"remarks": "Remains yellow in acid.",
		"swatch": "#eab308"
	}
];
var definitions$1 = [
	{
		"title": "Chemical Reaction",
		"body": "A process in which two or more substances (reactants) react to form new substances (products) with completely different properties."
	},
	{
		"title": "Chemical Equation",
		"body": "A symbolic representation of a chemical reaction using symbols and formulae of the reactants and products."
	},
	{
		"title": "Balanced Chemical Equation",
		"body": "A chemical equation in which the number of atoms of each element is equal on both the reactant and product sides. It follows the law of conservation of mass."
	},
	{
		"title": "Combination Reaction",
		"body": "A reaction in which two or more substances combine to form a single new product."
	},
	{
		"title": "Decomposition Reaction",
		"body": "A reaction in which a single compound breaks down into two or more simpler substances."
	},
	{
		"title": "Thermal Decomposition",
		"body": "A decomposition reaction that is carried out by heating the reactant."
	},
	{
		"title": "Electrolytic Decomposition",
		"body": "A decomposition reaction that takes place when electric current is passed through the compound (usually in molten or aqueous state)."
	},
	{
		"title": "Photolytic Decomposition / Photochemical Decomposition",
		"body": "A decomposition reaction that is carried out by the action of light (usually sunlight)."
	},
	{
		"title": "Displacement Reaction",
		"body": "A reaction in which a more reactive element displaces a less reactive element from its compound."
	},
	{
		"title": "Double Displacement Reaction",
		"body": "A reaction in which two compounds exchange their ions to form two new compounds."
	},
	{
		"title": "Precipitation Reaction",
		"body": "A double displacement reaction in which one of the products is an insoluble solid (precipitate) that settles down."
	},
	{
		"title": "Neutralisation Reaction",
		"body": "A reaction in which an acid reacts with a base to form salt and water. It is a special case of double displacement reaction."
	},
	{
		"title": "Oxidation",
		"body": "In Class 10, oxidation is defined as the addition of oxygen to a substance or the removal of hydrogen from a substance."
	},
	{
		"title": "Reduction",
		"body": "In Class 10, reduction is defined as the removal of oxygen from a substance or the addition of hydrogen to a substance."
	},
	{
		"title": "Redox Reaction",
		"body": "A reaction in which oxidation and reduction take place simultaneously."
	},
	{
		"title": "Corrosion",
		"body": "The process of slow conversion of metals into their undesirable compounds (oxides, carbonates, sulphides, etc.) by the action of air, moisture and chemicals present in the atmosphere."
	},
	{
		"title": "Rancidity",
		"body": "The process of oxidation of oils and fats which results in an unpleasant smell and taste."
	},
	{
		"title": "Acid",
		"body": "A substance which releases H⁺ ions (or H₃O⁺ ions) when dissolved in water. Acids turn blue litmus red."
	},
	{
		"title": "Base",
		"body": "A substance which releases OH⁻ ions when dissolved in water. Bases turn red litmus blue and feel soapy to touch."
	},
	{
		"title": "Salt",
		"body": "A compound formed when the hydrogen ion of an acid is replaced by a metal ion or ammonium ion."
	},
	{
		"title": "Indicator",
		"body": "A substance that shows different colours in acidic and basic media and is used to test whether a substance is acidic or basic."
	},
	{
		"title": "pH Scale",
		"body": "A scale that measures the concentration of hydrogen ions in a solution. It ranges from 0 to 14. pH &lt; 7 is acidic, pH = 7 is neutral, pH &gt; 7 is basic."
	},
	{
		"title": "Olfactory Indicators",
		"body": "Substances whose smell changes in acidic or basic medium (e.g., onion, vanilla, clove oil)."
	},
	{
		"title": "Chlor-Alkali Process",
		"body": "The process of electrolysis of aqueous sodium chloride (brine) to produce sodium hydroxide, chlorine and hydrogen."
	},
	{
		"title": "Bleaching Powder",
		"body": "Calcium oxychloride (CaOCl₂) prepared by the action of chlorine on dry slaked lime. Used for bleaching and disinfecting water."
	},
	{
		"title": "Baking Soda",
		"body": "Sodium hydrogen carbonate (NaHCO₃). Used in baking, as an antacid and in soda-acid fire extinguishers."
	},
	{
		"title": "Washing Soda",
		"body": "Sodium carbonate decahydrate (Na₂CO₃·10H₂O). Used in glass, soap and paper industries and for removing permanent hardness of water."
	},
	{
		"title": "Plaster of Paris",
		"body": "Calcium sulphate hemihydrate (CaSO₄·½H₂O) obtained by heating gypsum at 373 K. Used for setting fractured bones and making casts."
	},
	{
		"title": "Gypsum",
		"body": "Calcium sulphate dihydrate (CaSO₄·2H₂O). On heating at 373 K it forms Plaster of Paris."
	},
	{
		"title": "Reactivity Series",
		"body": "A series of metals arranged in the order of their decreasing reactivity. K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; H &gt; Cu &gt; Hg &gt; Ag &gt; Au."
	},
	{
		"title": "Amphoteric Oxide",
		"body": "An oxide that can react with both acids and bases to form salt and water (e.g., Al₂O₃, ZnO)."
	},
	{
		"title": "Roasting",
		"body": "The process of heating a sulphide ore strongly in excess of air so that it is converted into its oxide."
	},
	{
		"title": "Calcination",
		"body": "The process of heating a carbonate ore strongly in limited supply of air so that it is converted into its oxide."
	},
	{
		"title": "Thermite Reaction",
		"body": "A highly exothermic reaction in which aluminium acts as a reducing agent and reduces iron(III) oxide to molten iron. Used for welding railway tracks."
	},
	{
		"title": "Ionic Bond / Electrovalent Bond",
		"body": "The chemical bond formed by the complete transfer of electrons from a metal atom to a non-metal atom, resulting in the formation of oppositely charged ions."
	},
	{
		"title": "Covalent Bond",
		"body": "The chemical bond formed by the mutual sharing of electrons between two atoms (usually non-metals)."
	},
	{
		"title": "Catenation",
		"body": "The property of carbon atoms to link with other carbon atoms through covalent bonds to form long chains, branched chains or rings."
	},
	{
		"title": "Tetravalency of Carbon",
		"body": "Carbon has four valence electrons and therefore forms four covalent bonds with other atoms."
	},
	{
		"title": "Saturated Hydrocarbons",
		"body": "Hydrocarbons in which all carbon-carbon bonds are single bonds (alkanes). They undergo substitution reactions."
	},
	{
		"title": "Unsaturated Hydrocarbons",
		"body": "Hydrocarbons that contain at least one carbon-carbon double bond (alkenes) or triple bond (alkynes). They undergo addition reactions."
	},
	{
		"title": "Homologous Series",
		"body": "A series of organic compounds having the same functional group and similar chemical properties, in which each successive member differs by a –CH₂ group."
	},
	{
		"title": "Functional Group",
		"body": "An atom or group of atoms that determines the characteristic chemical properties of an organic compound (e.g., –OH, –COOH, –CHO)."
	},
	{
		"title": "Addition Reaction",
		"body": "A reaction in which atoms or groups of atoms are added across a double or triple bond of an unsaturated compound."
	},
	{
		"title": "Substitution Reaction",
		"body": "A reaction in which an atom or group of atoms in a molecule is replaced by another atom or group of atoms."
	},
	{
		"title": "Esterification",
		"body": "The reaction between a carboxylic acid and an alcohol in the presence of concentrated sulphuric acid to form an ester and water."
	},
	{
		"title": "Saponification",
		"body": "The alkaline hydrolysis of an ester to form the sodium salt of carboxylic acid (soap) and alcohol."
	},
	{
		"title": "Micelle",
		"body": "A spherical aggregate of soap molecules in water in which the hydrophobic tails are directed inwards and hydrophilic heads are directed outwards."
	}
];
function uniqBy(rows, key) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const row of rows) {
		const k = key(row);
		if (seen.has(k)) continue;
		seen.add(k);
		out.push(row);
	}
	return out;
}
var reactions = uniqBy([
	...reactions$1,
	...extraReactions,
	...moreReactions
], (r) => `${r.ch}|${r.title}|${r.eq}`);
var colours = uniqBy([
	...colours$1,
	...extraColours,
	...moreColours
], (c) => `${c.name}|${c.formula}`);
var definitions = uniqBy([
	...definitions$1,
	...extraDefs,
	...moreDefs
], (d) => d.title);
var notes = uniqBy([
	...notes$1,
	...extraNotes,
	...moreNotes
], (n) => n.title);
function mergeQuiz(parts) {
	return uniqBy(parts.flat(), (q) => q.q);
}
var quizData = {
	ch1: mergeQuiz([
		quizData$1.ch1,
		extraQuiz.ch1,
		moreQuiz.ch1,
		plusQuiz.ch1
	]),
	ch2: mergeQuiz([
		quizData$1.ch2,
		extraQuiz.ch2,
		moreQuiz.ch2,
		plusQuiz.ch2
	]),
	ch3: mergeQuiz([
		quizData$1.ch3,
		extraQuiz.ch3,
		moreQuiz.ch3,
		plusQuiz.ch3
	]),
	ch4: mergeQuiz([
		quizData$1.ch4,
		extraQuiz.ch4,
		moreQuiz.ch4,
		plusQuiz.ch4
	])
};
var chapters = [
	{
		id: "ch1",
		num: "01",
		title: "Chemical Reactions & Equations",
		blurb: "Combination, decomposition, displacement, redox, corrosion and rancidity."
	},
	{
		id: "ch2",
		title: "Acids, Bases & Salts",
		num: "02",
		blurb: "Indicators, pH, salts, chlor-alkali, bleaching powder, POP and baking soda."
	},
	{
		id: "ch3",
		title: "Metals & Non-metals",
		num: "03",
		blurb: "Reactivity series, extraction, thermite, roasting, calcination and alloys."
	},
	{
		id: "ch4",
		title: "Carbon & its Compounds",
		num: "04",
		blurb: "Bonding, combustion, ethanol, ethanoic acid, esters, soaps and micelles."
	}
];
var FAMILIES = [
	"Clear",
	"White",
	"Grey",
	"Black",
	"Red",
	"Orange",
	"Brown",
	"Yellow",
	"Green",
	"Blue",
	"Purple",
	"Pink"
];
var FAMILY_DOT = {
	Clear: "#e2e8f0",
	White: "#f8fafc",
	Grey: "#94a3b8",
	Black: "#111827",
	Red: "#ef4444",
	Orange: "#f97316",
	Brown: "#92400e",
	Yellow: "#eab308",
	Green: "#22c55e",
	Blue: "#3b82f6",
	Purple: "#8b5cf6",
	Pink: "#f472b6"
};
function hexToHsl(hex) {
	const m = hex.replace("#", "");
	const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
	const r = parseInt(full.slice(0, 2), 16) / 255;
	const g = parseInt(full.slice(2, 4), 16) / 255;
	const b = parseInt(full.slice(4, 6), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	if (max === min) return {
		h: 0,
		s: 0,
		l
	};
	const d = max - min;
	const s = l > .5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
	else if (max === g) h = ((b - r) / d + 2) * 60;
	else h = ((r - g) / d + 4) * 60;
	return {
		h,
		s,
		l
	};
}
/** Classify from the written appearance first — exam colour beats the swatch hex. */
function familyFromText(colour) {
	const t = colour;
	if (/colourless|colorless/i.test(t) && !/\bwhite\b|\bmilky\b/i.test(t)) return "Clear";
	if (/\bmilky\b/i.test(t) && /colourless|colorless/i.test(t)) return "White";
	for (const [re, fam] of [
		[/bluish[-\s]?green|greenish[-\s]?blue/i, "Green"],
		[/greenish[-\s]?yellow|yellowish[-\s]?green/i, "Yellow"],
		[/yellowish[-\s]?white/i, "White"],
		[/bluish[-\s]?white/i, "Grey"],
		[/silvery[-\s]?white/i, "Grey"],
		[/reddish[-\s]?brown|yellowish[-\s]?brown/i, "Brown"]
	]) if (re.test(t)) return fam;
	const words = [
		[/\bpink\b/i, "Pink"],
		[/\bpurple\b|\bviolet\b/i, "Purple"],
		[/\borange\b/i, "Orange"],
		[/\bbrown\b/i, "Brown"],
		[/\bblack\b/i, "Black"],
		[/\bgrey\b|\bgray\b/i, "Grey"],
		[/\bgreen\b/i, "Green"],
		[/\byellow\b/i, "Yellow"],
		[/\bred\b/i, "Red"],
		[/\bblue\b/i, "Blue"],
		[/\bwhite\b|\bmilky\b/i, "White"]
	];
	let best = null;
	for (const [re, fam] of words) {
		const m = re.exec(t);
		if (!m) continue;
		if (!best || m.index < best.idx) best = {
			idx: m.index,
			fam
		};
	}
	return best?.fam ?? null;
}
function familyFromSwatch(swatch) {
	const { h, s, l } = hexToHsl(swatch);
	if (l >= .9 || l >= .82 && s < .5) return "White";
	if (s < .14) {
		if (l >= .82) return "White";
		if (l <= .22) return "Black";
		return "Grey";
	}
	if (h >= 345 || h < 12) return "Red";
	if (h < 40) return l < .5 ? "Brown" : "Orange";
	if (h < 66) return "Yellow";
	if (h < 168) return "Green";
	if (h < 200) return "Green";
	if (h < 258) return "Blue";
	if (h < 300) return "Purple";
	return "Pink";
}
function familyOf(row) {
	return familyFromText(row.colour) ?? familyFromSwatch(row.swatch);
}
function luminance(hex) {
	const m = hex.replace("#", "");
	const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
	const chan = [
		0,
		2,
		4
	].map((i) => {
		const c = parseInt(full.slice(i, i + 2), 16) / 255;
		return c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
	});
	return .2126 * chan[0] + .7152 * chan[1] + .0722 * chan[2];
}
function SwatchCard({ row, index }) {
	const family = familyOf(row);
	const onSwatch = luminance(row.swatch) > .45;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: Math.min(index, 8) * 45,
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "swatch-card glass glass-hover group flex h-full flex-col overflow-hidden rounded-[1.15rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[7.5rem] shrink-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "swatch-zoom absolute inset-0",
						style: { background: row.swatch },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "swatch-gloss absolute inset-0" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] backdrop-blur-md",
						style: {
							background: onSwatch ? "rgb(0 0 0 / 0.32)" : "rgb(255 255 255 / 0.22)",
							color: onSwatch ? "rgb(255 255 255 / 0.92)" : "rgb(255 255 255 / 0.95)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 rounded-full",
							style: { background: FAMILY_DOT[family] }
						}), family]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eq absolute bottom-3 left-3 rounded-lg px-2.5 py-1 text-[0.78rem] font-semibold backdrop-blur-md",
						style: {
							background: onSwatch ? "rgb(0 0 0 / 0.34)" : "rgb(255 255 255 / 0.24)",
							color: onSwatch ? "rgb(255 255 255 / 0.95)" : "rgb(255 255 255 / 0.96)"
						},
						children: row.formula
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-[1.05rem] leading-snug text-fg",
						children: row.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: row.colour })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-auto flex gap-2 text-xs leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 size-3.5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.remarks })]
					})
				]
			})]
		})
	});
}
function SwatchRow({ row }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[auto_1.4fr_1fr_2fr] items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-raised/50 sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-9 shrink-0 rounded-xl border border-border shadow-inner",
				style: { background: row.swatch }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-fg",
					children: row.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eq block text-xs text-primary",
					children: row.formula
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 text-xs text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: row.colour })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden min-w-0 truncate text-xs text-muted md:block",
				children: row.remarks
			})
		]
	});
}
function ColourAtlas() {
	const [family, setFamily] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [view, setView] = (0, import_react.useState)("swatch");
	const counts = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const row of colours) {
			const f = familyOf(row);
			map.set(f, (map.get(f) ?? 0) + 1);
		}
		return map;
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return colours.filter((row) => {
			if (family !== "all" && familyOf(row) !== family) return false;
			if (!needle) return true;
			return `${row.name} ${row.formula} ${row.colour} ${row.remarks}`.toLowerCase().includes(needle);
		});
	}, [family, q]);
	const activeFamilies = FAMILIES.filter((f) => (counts.get(f) ?? 0) > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-sm leading-relaxed text-muted",
				children: "Every appearance the board examiners ask for — rendered as a collector’s swatch catalogue. Filter by colour family or search a formula."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 rounded-xl border border-border bg-surface/70 p-1",
				children: [[
					"swatch",
					"Swatches",
					LayoutGrid
				], [
					"rows",
					"Table",
					Rows3
				]].map(([id, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setView(id),
					className: cn("inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors", view === id ? "bg-primary/15 text-primary" : "text-muted hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), label]
				}, id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative block max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search CuSO₄, white, precipitate…",
					className: "input pl-10"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-scrollbar flex gap-2 overflow-x-auto pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFamily("all"),
					className: cn("chip", family === "all" && "chip-on"),
					children: ["All families", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip-count",
						children: colours.length
					})]
				}), activeFamilies.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFamily(family === f ? "all" : f),
					className: cn("chip", family === f && "chip-on"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 rounded-full",
							style: { background: FAMILY_DOT[f] }
						}),
						f,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip-count",
							children: counts.get(f)
						})
					]
				}, f))]
			})]
		}),
		filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-2xl border border-dashed border-border px-6 py-16 text-center text-muted",
			children: "No colours match. Clear the search or pick another family."
		}) : view === "swatch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: filtered.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchCard, {
				row,
				index: i
			}, `${row.name}|${row.formula}`))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass overflow-hidden rounded-[1.15rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[auto_1.4fr_1fr] gap-3 border-b border-border bg-raised/60 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted sm:px-5 md:grid-cols-[auto_1.4fr_1fr_2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-9",
						children: "Swatch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Compound" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Appearance" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden md:block",
						children: "Exam remark"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/60",
				children: filtered.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, { row }, `${row.name}|${row.formula}`))
			})]
		})
	] });
}
/** Board-style explanations for bank items that shipped without a `why`. */
var QUIZ_WHY = {
	"Which of the following is a decomposition reaction?": "Step 1: Decomposition = one reactant → two or more products.\nStep 2: CaCO₃ → CaO + CO₂ fits. 2Mg + O₂ is combination, Zn + CuSO₄ is displacement, NaOH + HCl is neutralisation.",
	"When silver chloride is exposed to sunlight, it turns grey because of the formation of:": "Step 1: 2AgCl → 2Ag + Cl₂ in sunlight (photolysis).\nStep 2: Finely divided silver looks grey.\nStep 3: Not oxide, carbonate or nitrate.",
	"The brown fumes evolved on heating lead nitrate are of:": "Step 1: 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂.\nStep 2: NO₂ is reddish-brown. Do not write NO, N₂O or N₂O₅.",
	"In the reaction Fe + CuSO₄ → FeSO₄ + Cu, the colour change observed is:": "Step 1: Blue CuSO₄ solution becomes pale green FeSO₄.\nStep 2: Reddish-brown copper deposits on iron.\nStep 3: So the solution goes blue → green.",
	"Which of the following is an example of a photolytic decomposition reaction?": "Step 1: Photolysis needs light.\nStep 2: 2AgBr → 2Ag + Br₂ in sunlight.\nStep 3: FeSO₄ and CaCO₃ are thermal; water is electrolytic.",
	"Respiration is regarded as an exothermic reaction because:": "Step 1: Exothermic = energy released.\nStep 2: Oxidation of glucose in cells releases energy for life processes.\nStep 3: “Glucose is broken down” or “oxygen is used” are incomplete reasons.",
	"The reaction 2H₂ + O₂ → 2H₂O is an example of:": "Two reactants combine to one product — combination. Not decomposition, displacement or double displacement.",
	"Rancidity can be prevented by:": "Oxidation of oils/fats causes rancidity. Airtight packing, antioxidants and nitrogen flushing all slow that oxidation — all of these.",
	"In the electrolysis of water, the gas collected at the cathode is:": "Cathode = reduction = hydrogen. Anode = oxygen. Volume of H₂ is twice O₂.",
	"Which of the following reactions is a redox reaction?": "CuO + H₂ → Cu + H₂O: CuO loses oxygen (reduction), H₂ gains oxygen (oxidation). Neutralisation and precipitation are not redox at Class 10 level; CaCO₃ heat is decomposition.",
	"The white precipitate formed when BaCl₂ reacts with Na₂SO₄ is:": "BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl. BaSO₄ is the insoluble white precipitate.",
	"Quick lime reacts with water to form:": "CaO + H₂O → Ca(OH)₂ (slaked lime) + heat. Limestone is CaCO₃.",
	"Which metal is more reactive than iron but less reactive than zinc?": "Series: Zn > Fe > Pb > H > Cu. Nothing in the given list sits between Zn and Fe, so “none of these”.",
	"The chemical formula of rust is:": "Rust is hydrated ferric oxide, Fe₂O₃·xH₂O — not plain FeO, Fe₂O₃ or Fe₃O₄.",
	"When copper is heated in air, the black coating formed is of:": "2Cu + O₂ → 2CuO (black). Cu₂O is reddish; not carbonate or hydroxide here.",
	"In the reaction Zn + H₂SO₄ → ZnSO₄ + H₂, zinc is:": "Zinc gains oxygen / loses electrons: it is oxidised. Hydrogen ions are reduced to H₂.",
	"A solution of AgNO₃ is mixed with NaCl. The precipitate formed is:": "AgNO₃ + NaCl → AgCl↓ + NaNO₃. AgCl is a white insoluble (curdy) precipitate.",
	"Which of the following is not a combination reaction?": "CaCO₃ → CaO + CO₂ is decomposition (one reactant). The others join two reactants into one product.",
	"The reaction used in whitewashing is:": "Both steps: CaO + H₂O → Ca(OH)₂, then Ca(OH)₂ + CO₂ → CaCO₃ (shiny layer). Boards often want both.",
	"Which gas is produced when dilute HCl reacts with zinc?": "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen burns with a pop. Not CO₂ (that is acid + carbonate).",
	"The chemical formula of bleaching powder is:": "NCERT writes bleaching powder as CaOCl₂ (calcium oxychloride), not Ca(OCl)₂ or CaCl₂.",
	"When CO₂ is passed through lime water, it turns milky due to the formation of:": "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O. Insoluble CaCO₃ makes it milky.",
	"On passing excess CO₂ through the milky lime water, the milkiness disappears because of the formation of:": "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂, which is soluble, so milkiness goes.",
	"Plaster of Paris is obtained by heating gypsum at:": "CaSO₄·2H₂O → CaSO₄·½H₂O at 373 K (about 100°C). Higher temperatures give dead-burnt plaster.",
	"The products of chlor-alkali process are:": "Electrolysis of brine: NaOH, Cl₂ (anode) and H₂ (cathode).",
	"Which of the following is an olfactory indicator?": "Onion, vanilla and clove oil — smell changes in acid/base. Litmus, phenolphthalein and methyl orange are visual.",
	"Baking soda on heating gives:": "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. That CO₂ makes cakes rise.",
	"The pH of pure water is:": "Neutral water has pH 7 at 298 K. 0 is strongly acidic, 14 strongly basic.",
	"Which acid is present in vinegar?": "Vinegar is 5–8% ethanoic / acetic acid in water. Not citric, lactic or formic.",
	"Tooth enamel is made of:": "Calcium phosphate (hydroxyapatite). Attacked when mouth pH < 5.5.",
	"Aqueous solution of sodium carbonate is:": "Na₂CO₃ solution is basic (hydrolysis). Used in washing soda chemistry.",
	"Which of the following salts does not contain water of crystallisation?": "Baking soda NaHCO₃ has none. Blue vitriol 5H₂O, washing soda 10H₂O, gypsum 2H₂O.",
	"The reaction between an acid and a base to form salt and water is called:": "Neutralisation — a special double displacement. Combination/decomposition/displacement are different types.",
	"When zinc reacts with sodium hydroxide, the gas evolved is:": "Zn + 2NaOH → Na₂ZnO₂ + H₂. Amphoteric zinc gives hydrogen with both acid and strong base.",
	"Methyl orange shows which colour in basic medium?": "Methyl orange: red in acid, yellow in base. Phenolphthalein is pink in base.",
	"Phenolphthalein is colourless in:": "Colourless in acidic (and in pure water / neutral). Pink only in basic medium.",
	"The chemical name of washing soda is:": "Sodium carbonate decahydrate, Na₂CO₃·10H₂O. Baking soda is NaHCO₃.",
	"Gypsum is:": "CaSO₄·2H₂O. POP is the hemihydrate; bleaching powder is CaOCl₂.",
	"Which of the following is used as an antacid?": "NaHCO₃ (baking soda) and Mg(OH)₂ (milk of magnesia) neutralise excess HCl. NaOH is too strong; bleaching powder is not an antacid.",
	"In the reaction CuO + 2HCl → CuCl₂ + H₂O, CuO acts as:": "Metal oxide + acid → salt + water, so CuO behaves as a base.",
	"Which of the following metals reacts vigorously with cold water?": "Sodium (and potassium) react vigorously with cold water. Mg needs hot water/steam; Al and Zn do not react with cold water.",
	"The correct order of reactivity is:": "Zn > Fe > Cu. Copper is below hydrogen and cannot displace iron or zinc.",
	"Aluminium oxide is:": "Amphoteric — reacts with both acids and bases. Na₂O is basic, CO₂ acidic.",
	"The process of coating iron with zinc is called:": "Galvanisation. Anodising is for aluminium oxide coats; electroplating is general; alloying is mixing metals.",
	"Thermite reaction is used for:": "Welding railway tracks with molten iron from Fe₂O₃ + 2Al.",
	"Roasting is done for which type of ores?": "Sulphide ores, heated in excess air to the oxide + SO₂. Carbonates are calcined.",
	"Calcination is done for which type of ores?": "Carbonate ores, heated in limited air to oxide + CO₂.",
	"Which metal is stored under kerosene?": "Sodium (and potassium) — they react with air and moisture. Mg, Al, Zn are not stored in kerosene.",
	"Which of the following is an ionic compound?": "NaCl is formed by electron transfer (metal + non-metal). CH₄, H₂O, CO₂ are covalent.",
	"In the reactivity series, hydrogen is placed between:": "Pb > H > Cu. Metals above H displace H₂ from dilute acids; Cu, Hg, Ag, Au do not.",
	"Zinc oxide is:": "Amphoteric, like Al₂O₃. Yellow when hot, white when cold.",
	"Which gas is evolved when a metal reacts with dilute acid?": "Hydrogen (pop test), for metals above hydrogen. Carbon dioxide is acid + carbonate.",
	"Anodising is done for which metal?": "Aluminium — a thick protective Al₂O₃ layer is grown by electrolysis.",
	"In the reaction ZnO + C → Zn + CO, carbon acts as:": "Carbon removes oxygen from ZnO, so it is the reducing agent (and is oxidised to CO).",
	"Which of the following metals does not react with dilute HCl?": "Copper is below hydrogen, so no H₂ with dilute HCl. Zn, Fe, Mg do react.",
	"The property of metals by which they can be beaten into thin sheets is called:": "Malleability. Ductility = wires; sonority = ringing sound.",
	"Brass is an alloy of:": "Copper + zinc. Bronze is copper + tin.",
	"Bronze is an alloy of:": "Copper + tin. Brass is copper + zinc.",
	"Which of the following is not a method to prevent corrosion?": "Painting, galvanisation and alloying protect. Simply heating the metal does not prevent rust.",
	"The number of covalent bonds in methane is:": "CH₄ is tetrahedral with four C–H single bonds. Carbon’s tetravalency.",
	"Which of the following is an unsaturated hydrocarbon?": "C₂H₄ (ethene) has a C=C double bond. CH₄, C₂H₆, C₃H₈ are saturated alkanes.",
	"The functional group present in ethanol is:": "–OH (alcohol). –CHO aldehyde, –COOH carboxylic acid, >C=O ketone.",
	"Esterification reaction is the reaction between:": "Carboxylic acid + alcohol (conc. H₂SO₄) → ester + water.",
	"The catalyst used in hydrogenation of oils is:": "Nickel or palladium/platinum. NCERT allows Ni (and mentions Pd/Pt). “Both Ni and Pt” matches the book’s catalysts.",
	"Saponification is the process of:": "Alkaline hydrolysis of an ester/fat to soap (sodium salt of fatty acid) and alcohol.",
	"Ethene on hydrogenation gives:": "C₂H₄ + H₂ → C₂H₆ (ethane) with Ni catalyst. Addition across the double bond.",
	"The reaction of ethanol with sodium gives:": "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂. Sodium ethoxide + hydrogen. This does not prove it is as acidic as ethanoic acid.",
	"Dehydration of ethanol with conc. H₂SO₄ at 443 K gives:": "Ethene. Remember the exact temperature 443 K — a favourite 1-mark trap.",
	"Which of the following compounds has a fruity smell?": "Esters such as ethyl ethanoate. Ethanol is spirit-like; ethanoic acid is vinegar.",
	"The molecular formula of ethanoic acid is:": "CH₃COOH (or C₂H₄O₂). CH₃OH methanol, C₂H₅OH ethanol, HCOOH methanoic acid.",
	"Carbon forms a large number of compounds mainly due to:": "Catenation plus tetravalency (and multiple bonds). Either one alone is incomplete.",
	"In a homologous series, successive members differ by:": "A –CH₂ group (mass 14 u), not CH₃.",
	"Which type of reaction is shown by saturated hydrocarbons with chlorine in sunlight?": "Substitution (CH₄ + Cl₂ → CH₃Cl + HCl in sunlight). Unsaturated compounds prefer addition.",
	"Soaps do not work well in hard water because:": "They form scum with Ca²⁺ and Mg²⁺. Detergents do not.",
	"The structure of methane is:": "Tetrahedral, bond angle about 109.5°. Not planar or linear.",
	"Which of the following is used as a fuel as well as a solvent?": "Ethanol — spirit lamps, fuel blends, and an industrial solvent.",
	"Vinegar is a dilute solution of:": "Ethanoic acid (5–8%) in water.",
	"The reaction CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O is catalysed by:": "Concentrated H₂SO₄. NaOH would hydrolyse the ester (saponification). Ni is for hydrogenation.",
	"Micelles are formed by:": "Soap (or detergent) molecules in water: hydrophobic tails in, hydrophilic heads out.",
	"Blue copper sulphate crystals turn white on heating because they lose:": "Water of crystallisation (5H₂O). White anhydrous CuSO₄ turns blue again on adding water.",
	"Which reaction is endothermic?": "Thermal decomposition of CaCO₃ (and photosynthesis) absorb heat. Respiration, combustion and neutralisation are exothermic.",
	"Tooth enamel starts dissolving when the pH in the mouth is:": "Below 5.5. Toothpaste is basic to neutralise acids.",
	"Which salt has no water of crystallisation?": "Baking soda NaHCO₃. Gypsum, washing soda and blue vitriol all do.",
	"In electrolytic refining of copper, pure copper is deposited at the:": "Cathode (pure Cu strip). Impure Cu is the anode; anode mud holds impurities.",
	"Brass is an alloy of copper and:": "Zinc. Bronze is copper and tin.",
	"Bromine water is decolourised by:": "Unsaturated hydrocarbons such as ethene (addition). Methane and ethane do not decolourise cold bromine water.",
	"Soap forms scum with hard water due to ions of:": "Ca²⁺ and Mg²⁺. Na⁺ and K⁺ are the soap cations themselves."
};
function whyFor(q, options, ans, existing) {
	if (existing && existing.trim()) return existing.trim();
	const hit = QUIZ_WHY[q];
	if (hit) return hit;
	return `Correct choice: ${options[ans]}. Tie it back to the NCERT definition, colour change or balanced equation for this topic. Check why each distractor names the wrong product, condition or reaction type.`;
}
var TOPIC = {
	ch1: "reactions",
	ch2: "acids",
	ch3: "metals",
	ch4: "carbon"
};
function inferKind(item) {
	if (item.kind) return item.kind;
	const q = item.q.toLowerCase();
	if (q.includes("assertion") || q.startsWith("a:") || q.includes("reason (r)")) return "assertion";
	if (q.startsWith("case:") || q.includes("case:")) return "case";
	return "mcq";
}
function inferMark(item, kind) {
	if (item.mark) return item.mark;
	if (kind === "assertion") return "2";
	if (kind === "case") return "3";
	return "1";
}
function slug(q) {
	return q.slice(0, 72).replace(/\s+/g, " ").trim();
}
var quizBank = [
	"ch1",
	"ch2",
	"ch3",
	"ch4"
].flatMap((ch) => quizData[ch].map((item) => {
	const kind = inferKind(item);
	return {
		...item,
		id: `${ch}::${slug(item.q)}`,
		ch,
		kind,
		mark: inferMark(item, kind),
		why: whyFor(item.q, item.options, item.ans, item.why),
		topic: TOPIC[ch]
	};
}));
var quizByChapter = (ch) => {
	if (ch === "mix") return quizBank;
	return quizBank.filter((q) => q.ch === ch);
};
quizBank.length, quizBank.filter((q) => q.kind === "mcq").length, quizBank.filter((q) => q.kind === "assertion").length, quizBank.filter((q) => q.kind === "case").length;
/** Common Class 10 names, formulae and everyday aliases used by global search. */
var ALIASES$1 = {
	hcl: [
		"hydrochloric acid",
		"hydrogen chloride",
		"muriatic acid",
		"acid"
	],
	"hydrochloric acid": [
		"hcl",
		"hydrogen chloride",
		"acid"
	],
	h2so4: [
		"sulphuric acid",
		"sulfuric acid",
		"oil of vitriol",
		"acid"
	],
	"sulphuric acid": [
		"h2so4",
		"sulfuric acid",
		"acid"
	],
	hno3: [
		"nitric acid",
		"aqua fortis",
		"acid"
	],
	"nitric acid": ["hno3", "acid"],
	naoh: [
		"sodium hydroxide",
		"caustic soda",
		"lye",
		"base",
		"alkali"
	],
	"sodium hydroxide": [
		"naoh",
		"caustic soda",
		"base"
	],
	koh: [
		"potassium hydroxide",
		"caustic potash",
		"base"
	],
	caoh2: [
		"calcium hydroxide",
		"slaked lime",
		"lime water",
		"base"
	],
	"slaked lime": [
		"calcium hydroxide",
		"ca(oh)2",
		"lime water"
	],
	cao: [
		"calcium oxide",
		"quicklime",
		"lime"
	],
	"quicklime": ["cao", "calcium oxide"],
	caco3: [
		"calcium carbonate",
		"limestone",
		"marble",
		"chalk",
		"lime water milky"
	],
	"lime water": [
		"calcium hydroxide",
		"ca(oh)2",
		"caco3"
	],
	nahco3: [
		"sodium hydrogencarbonate",
		"sodium bicarbonate",
		"baking soda",
		"antacid"
	],
	"baking soda": ["nahco3", "sodium hydrogencarbonate"],
	na2co3: [
		"sodium carbonate",
		"washing soda",
		"soda ash"
	],
	"washing soda": [
		"na2co3",
		"na2co3·10h2o",
		"sodium carbonate decahydrate"
	],
	caocl2: ["bleaching powder", "calcium oxychloride"],
	"bleaching powder": ["caocl2", "calcium oxychloride"],
	caso4: [
		"gypsum",
		"plaster of paris",
		"pop"
	],
	gypsum: ["caso4·2h2o", "plaster of paris"],
	"plaster of paris": [
		"pop",
		"caso4·½h2o",
		"gypsum"
	],
	cuso4: [
		"copper sulphate",
		"copper sulfate",
		"blue vitriol"
	],
	"blue vitriol": ["cuso4·5h2o", "copper sulphate"],
	feso4: [
		"ferrous sulphate",
		"green vitriol",
		"iron(ii) sulphate"
	],
	fe2o3: [
		"ferric oxide",
		"iron(iii) oxide",
		"rust",
		"haematite"
	],
	rust: [
		"fe2o3·xh2o",
		"corrosion",
		"hydrated ferric oxide"
	],
	pbo: ["lead oxide", "litharge"],
	pbno3: ["lead nitrate"],
	pbi2: ["lead iodide", "yellow precipitate"],
	agcl: ["silver chloride", "photography"],
	agbr: ["silver bromide", "photography"],
	zno: [
		"zinc oxide",
		"yellow when hot",
		"white when cold"
	],
	cuo: ["copper oxide", "black copper oxide"],
	ch4: ["methane", "natural gas"],
	c2h4: [
		"ethene",
		"ethylene",
		"unsaturated"
	],
	c2h2: ["ethyne", "acetylene"],
	c2h5oh: [
		"ethanol",
		"ethyl alcohol",
		"alcohol"
	],
	ethanol: [
		"c2h5oh",
		"alcohol",
		"spirit"
	],
	ch3cooh: [
		"ethanoic acid",
		"acetic acid",
		"vinegar"
	],
	"ethanoic acid": [
		"acetic acid",
		"vinegar",
		"ch3cooh"
	],
	vinegar: [
		"ethanoic acid",
		"acetic acid",
		"ch3cooh"
	],
	"ethyl ethanoate": [
		"ester",
		"ch3cooc2h5",
		"fruity smell"
	],
	ester: [
		"ethyl ethanoate",
		"esterification",
		"fruity"
	],
	soap: [
		"saponification",
		"micelle",
		"sodium salt"
	],
	detergent: ["hard water", "scum"],
	thermite: [
		"fe2o3 + al",
		"welding railway tracks",
		"aluminothermy"
	],
	roasting: [
		"sulphide ore",
		"excess air",
		"so2"
	],
	calcination: [
		"carbonate ore",
		"limited air",
		"co2"
	],
	"chlor-alkali": [
		"brine",
		"nacl electrolysis",
		"naoh",
		"cl2",
		"h2"
	],
	brine: ["aqueous nacl", "chlor-alkali"],
	redox: [
		"oxidation",
		"reduction",
		"oxidised",
		"reduced"
	],
	acid: [
		"hcl",
		"h2so4",
		"hno3",
		"ethanoic acid",
		"h+"
	],
	base: [
		"naoh",
		"koh",
		"ca(oh)2",
		"oh-"
	],
	indicator: [
		"litmus",
		"methyl orange",
		"phenolphthalein",
		"universal"
	],
	ph: [
		"hydrogen ion",
		"acidic",
		"basic",
		"neutral"
	],
	catenation: ["carbon chain", "self linking"],
	homologous: ["ch2", "same functional group"]
};
function expandAliases(q) {
	const raw = q.trim().toLowerCase();
	if (!raw) return [];
	const extra = /* @__PURE__ */ new Set([raw]);
	for (const [k, vals] of Object.entries(ALIASES$1)) {
		if (raw.includes(k) || k.includes(raw)) {
			extra.add(k);
			for (const v of vals) extra.add(v);
		}
		for (const v of vals) if (raw.includes(v) || v.includes(raw)) {
			extra.add(k);
			extra.add(v);
			for (const x of vals) extra.add(x);
		}
	}
	return [...extra];
}
var TYPE_BUCKETS = [
	"Combination",
	"Thermal Decomposition",
	"Decomposition",
	"Displacement",
	"Double Displacement",
	"Redox",
	"Neutralisation",
	"Combustion",
	"Electrolysis",
	"Photolysis",
	"Acid + Metal",
	"Esterification",
	"Addition",
	"Substitution",
	"Corrosion",
	"Extraction"
];
function bucketsFor(type) {
	const t = type.toLowerCase();
	const out = [];
	const add = (b) => {
		if (!out.includes(b)) out.push(b);
	};
	if (t.includes("double displacement") || t.includes("precipitation")) add("Double Displacement");
	else if (t.includes("displacement")) add("Displacement");
	if (t.includes("thermal decomposition")) add("Thermal Decomposition");
	if (t.includes("photolyt") || t.includes("photochemical")) add("Photolysis");
	if (t.includes("electroly")) add("Electrolysis");
	if (t.includes("decomposition") && !t.includes("thermal") && !t.includes("photolyt") && !t.includes("electroly")) add("Decomposition");
	if (t.includes("combination")) add("Combination");
	if (t.includes("redox") || t.includes("oxidation") || t.includes("reduction")) add("Redox");
	if (t.includes("neutral")) add("Neutralisation");
	if (t.includes("combustion")) add("Combustion");
	if (t.includes("acid + metal") || t.includes("metal + acid")) add("Acid + Metal");
	if (t.includes("ester")) add("Esterification");
	if (t.includes("addition") || t.includes("hydrogenation")) add("Addition");
	if (t.includes("substitution")) add("Substitution");
	if (t.includes("corrosion") || t.includes("rust") || t.includes("galvanis")) add("Corrosion");
	if (t.includes("roast") || t.includes("calcin") || t.includes("extraction") || t.includes("aluminotherm")) add("Extraction");
	return out;
}
var REAGENTS = [
	{
		id: "HCl",
		labels: ["hcl", "hydrochloric"]
	},
	{
		id: "H₂SO₄",
		labels: [
			"h2so4",
			"h₂so₄",
			"sulphuric",
			"sulfuric"
		]
	},
	{
		id: "NaOH",
		labels: ["naoh", "sodium hydroxide"]
	},
	{
		id: "CuSO₄",
		labels: [
			"cuso4",
			"cuso₄",
			"copper sulphate",
			"copper sulfate"
		]
	},
	{
		id: "FeSO₄",
		labels: [
			"feso4",
			"feso₄",
			"ferrous"
		]
	},
	{
		id: "CaCO₃",
		labels: [
			"caco3",
			"caco₃",
			"limestone",
			"marble"
		]
	},
	{
		id: "CaO",
		labels: ["cao", "quicklime"]
	},
	{
		id: "Zn",
		labels: ["zn", "zinc"]
	},
	{
		id: "Fe",
		labels: ["fe", "iron"]
	},
	{
		id: "Al",
		labels: [
			"al",
			"aluminium",
			"aluminum"
		]
	},
	{
		id: "Cu",
		labels: ["cu", "copper"]
	},
	{
		id: "AgNO₃",
		labels: [
			"agno3",
			"agno₃",
			"silver nitrate"
		]
	},
	{
		id: "Ethanol",
		labels: [
			"ethanol",
			"c2h5oh",
			"c₂h₅oh"
		]
	},
	{
		id: "Ethanoic acid",
		labels: [
			"ethanoic",
			"acetic",
			"ch3cooh",
			"ch₃cooh"
		]
	},
	{
		id: "NaHCO₃",
		labels: [
			"nahco3",
			"nahco₃",
			"baking soda"
		]
	}
];
function matchesReagent(r, id) {
	const spec = REAGENTS.find((x) => x.id === id);
	if (!spec) return false;
	const blob = `${r.title} ${r.eq} ${r.type} ${r.desc} ${r.cond} ${r.tip}`.toLowerCase();
	return spec.labels.some((l) => blob.includes(l));
}
function reactionKey(r) {
	return `${r.ch}::${r.title}`;
}
function fold(s) {
	return s.toLowerCase().replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (c) => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(c)] ?? c).replace(/[·•]/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
}
function fuzzy(hay, needle) {
	if (!needle) return 0;
	const h = fold(hay);
	const n = fold(needle);
	if (!h || !n) return 0;
	if (h === n) return 100;
	if (h.startsWith(n)) return 92;
	if (h.includes(` ${n} `) || h.includes(` ${n}`) || h.startsWith(`${n} `)) return 84;
	if (h.includes(n)) return 72;
	const parts = n.split(" ").filter(Boolean);
	if (parts.length > 1 && parts.every((p) => h.includes(p))) return 64;
	let i = 0;
	for (const ch of h) {
		if (ch === n[i]) i += 1;
		if (i >= n.length) return Math.max(28, 48 - Math.min(20, h.length - n.length));
	}
	return 0;
}
function bestScore(blob, needles) {
	let m = 0;
	for (const n of needles) m = Math.max(m, fuzzy(blob, n));
	return m;
}
function searchVault(query, limit = 24) {
	const q = query.trim();
	if (q.length < 1) return [];
	const needles = [q, ...expandAliases(q)].slice(0, 12);
	const hits = [];
	for (const ch of chapters) {
		const score = bestScore(`${ch.title} ${ch.blurb} chapter ${ch.num} ${ch.id}`, needles);
		if (score >= 28) hits.push({
			id: ch.id,
			kind: "chapter",
			title: `Chapter ${ch.num} · ${ch.title}`,
			snippet: ch.blurb,
			href: "chapter-map",
			score: score + 4
		});
	}
	for (const r of reactions) {
		const score = bestScore(`${r.title} ${r.eq} ${r.type} ${r.colour} ${r.obs} ${r.cond} ${r.tip} ${r.desc} ${r.ch}`, needles);
		if (score >= 28) hits.push({
			id: reactionKey(r),
			kind: "reaction",
			title: r.title,
			snippet: `${r.type} · ${r.eq}`,
			href: "reactions",
			score
		});
	}
	for (const c of colours) {
		const score = bestScore(`${c.name} ${c.formula} ${c.colour} ${c.remarks}`, needles);
		if (score >= 28) hits.push({
			id: `${c.name}|${c.formula}`,
			kind: "colour",
			title: c.name,
			snippet: `${c.formula} · ${c.colour}`,
			href: "colours",
			score
		});
	}
	for (const d of definitions) {
		const score = bestScore(`${d.title} ${d.body}`, needles);
		if (score >= 28) hits.push({
			id: d.title,
			kind: "definition",
			title: d.title,
			snippet: d.body.slice(0, 140),
			href: "definitions",
			score
		});
	}
	for (const n of notes) {
		const score = bestScore(`${n.title} ${n.body}`, needles);
		if (score >= 28) hits.push({
			id: n.title,
			kind: "note",
			title: n.title,
			snippet: n.body.replace(/\s+/g, " ").slice(0, 140),
			href: "notes",
			score
		});
	}
	for (const item of quizBank) {
		const score = bestScore(`${item.q} ${item.options.join(" ")} ${item.why}`, needles);
		if (score >= 28) hits.push({
			id: item.id,
			kind: "quiz",
			title: item.q.replace(/\n/g, " ").slice(0, 110),
			snippet: `Chapter ${item.ch.slice(2)} · ${item.mark}-mark ${item.kind}`,
			href: "quiz",
			score
		});
	}
	hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const h of hits) {
		const k = `${h.kind}:${h.id}`;
		if (seen.has(k)) continue;
		seen.add(k);
		out.push(h);
		if (out.length >= limit) break;
	}
	return out;
}
var KIND_META = {
	reaction: {
		label: "Reaction",
		icon: FlaskConical
	},
	colour: {
		label: "Colour",
		icon: Palette
	},
	definition: {
		label: "Definition",
		icon: BookOpen
	},
	note: {
		label: "Note",
		icon: Lightbulb
	},
	quiz: {
		label: "Question",
		icon: GraduationCap
	},
	chapter: {
		label: "Chapter",
		icon: BookOpen
	}
};
function GlobalSearch({ open, query, onQuery, onClose, onPick }) {
	const inputRef = (0, import_react.useRef)(null);
	const [cursor, setCursor] = (0, import_react.useState)(0);
	const hits = (0, import_react.useMemo)(() => searchVault(query, 18), [query]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setCursor(0);
			inputRef.current?.focus();
		}
	}, [open]);
	(0, import_react.useEffect)(() => setCursor(0), [query]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (!open) return;
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setCursor((c) => Math.min(c + 1, hits.length - 1));
			}
			if (e.key === "ArrowUp") {
				e.preventDefault();
				setCursor((c) => Math.max(c - 1, 0));
			}
			if (e.key === "Enter" && hits[cursor]) {
				e.preventDefault();
				onPick(hits[cursor]);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		onClose,
		hits,
		cursor,
		onPick
	]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] flex items-start justify-center bg-bg/70 p-3 pt-[10vh] backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 cursor-default",
			"aria-label": "Close search",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-enter glass relative w-full max-w-xl overflow-hidden rounded-[1.35rem] shadow-[0_40px_90px_-20px_rgb(0_0_0/0.7)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 border-b border-border px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: query,
							onChange: (e) => onQuery(e.target.value),
							placeholder: "Search reactions, HCl, colours, notes, questions…",
							className: "h-14 min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-muted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "hidden rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-muted sm:block",
							children: "ESC"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[min(26rem,52vh)] overflow-y-auto p-2",
					children: query.trim() && hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-10 text-center text-sm text-muted",
						children: "No matches. Try a formula or an alias."
					}) : hits.map((hit, idx) => {
						const meta = KIND_META[hit.kind];
						const Icon = meta.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onPick(hit),
							onMouseEnter: () => setCursor(idx),
							className: cn("flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors", idx === cursor ? "bg-primary/10" : "hover:bg-raised/60"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg border", idx === cursor ? "border-primary/40 bg-primary/15 text-primary" : "border-border text-muted"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("block text-[0.62rem] font-bold uppercase tracking-[0.18em]", idx === cursor ? "text-primary" : "text-muted"),
											children: meta.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block truncate text-sm font-medium text-fg",
											children: hit.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block truncate text-xs text-muted",
											children: hit.snippet
										})
									]
								}),
								idx === cursor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "mt-1 hidden shrink-0 items-center gap-0.5 rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-muted sm:flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "size-2.5" })
								})
							]
						}, `${hit.kind}-${hit.id}`);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-t border-border px-4 py-2.5 text-[0.68rem] text-muted",
					children: "Aliases work: HCl · blue vitriol · POP · gypsum — navigate with ↑ ↓ and open with ↵"
				})
			]
		})]
	});
}
function topicMastery(ch, state) {
	const rx = reactions.filter((r) => r.ch === ch);
	const learned = rx.filter((r) => state.mastery[reactionKey(r)] === "learned").length;
	const review = rx.filter((r) => state.mastery[reactionKey(r)] === "review").length;
	const rxScore = rx.length ? (learned + .35 * review) / rx.length : 0;
	const logs = state.quizLog.filter((l) => l.ch === ch || l.ch === "mix").slice(-6);
	const quizPct = logs.length ? logs.reduce((s, l) => s + (l.total ? l.score / l.total : 0), 0) / logs.length : 0;
	return {
		pct: learned + review + logs.length > 0 ? Math.round(100 * (.55 * rxScore + .45 * quizPct)) : 0,
		learned,
		review,
		total: rx.length,
		quizPct: Math.round(quizPct * 100)
	};
}
function overallMastery(state) {
	const parts = [
		"ch1",
		"ch2",
		"ch3",
		"ch4"
	].map((c) => topicMastery(c, state).pct);
	if (parts.every((p) => p === 0)) return 0;
	return Math.round(parts.reduce((a, b) => a + b, 0) / 4);
}
function weakestChapter(state) {
	let min = "ch1";
	let val = 101;
	for (const ch of [
		"ch1",
		"ch2",
		"ch3",
		"ch4"
	]) {
		const p = topicMastery(ch, state).pct;
		if (p < val) {
			val = p;
			min = ch;
		}
	}
	return min;
}
function wrongQuestionIds(state) {
	const last = [...state.quizLog].reverse();
	const ids = /* @__PURE__ */ new Set();
	for (const log of last) for (const w of log.wrong) ids.add(w);
	return [...ids].filter((id) => quizBank.some((q) => q.id === id));
}
var OLD_STAR_KEY = "chemvault-stars";
function readLegacyStars() {
	if (typeof localStorage === "undefined") return [];
	try {
		const raw = localStorage.getItem(OLD_STAR_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
	} catch {
		return [];
	}
}
function touch(s) {
	return {
		...s,
		updatedAt: Date.now()
	};
}
function toggleIn(list, key) {
	return list.includes(key) ? list.filter((x) => x !== key) : [...list, key];
}
var useStudent = create()(persist((set, get) => ({
	...EMPTY_STUDENT,
	hydrated: false,
	markHydrated: () => {
		const legacy = readLegacyStars();
		if (legacy.length && get().stars.length === 0) {
			set({
				stars: legacy,
				hydrated: true,
				updatedAt: Date.now()
			});
			return;
		}
		set({ hydrated: true });
	},
	applyRemote: (remote) => {
		set({
			...mergePayload(get().snapshot(), remote),
			hydrated: true
		});
	},
	setTheme: (theme) => set(touch({
		...get().snapshot(),
		theme
	})),
	finishOnboarding: () => set(touch({
		...get().snapshot(),
		onboardingDone: true
	})),
	toggleStar: (key) => set(touch({
		...get().snapshot(),
		stars: toggleIn(get().stars, key)
	})),
	toggleBook: (kind, key) => {
		const snap = get().snapshot();
		if (kind === "def") set(touch({
			...snap,
			bookDefs: toggleIn(snap.bookDefs, key)
		}));
		else if (kind === "note") set(touch({
			...snap,
			bookNotes: toggleIn(snap.bookNotes, key)
		}));
		else set(touch({
			...snap,
			bookQuiz: toggleIn(snap.bookQuiz, key)
		}));
	},
	setMastery: (key, flag) => set(touch({
		...get().snapshot(),
		mastery: {
			...get().mastery,
			[key]: flag
		}
	})),
	cycleMastery: (key) => {
		const cur = get().mastery[key] ?? "unset";
		const next = cur === "unset" ? "learned" : cur === "learned" ? "review" : "unset";
		set(touch({
			...get().snapshot(),
			mastery: {
				...get().mastery,
				[key]: next
			}
		}));
	},
	recordQuiz: (entry) => {
		const snap = get().snapshot();
		set(touch({
			...snap,
			quizLog: [...snap.quizLog, entry].slice(-80),
			streak: bumpStreak(snap.streak)
		}));
	},
	snapshot: () => {
		const s = get();
		return {
			v: 1,
			updatedAt: s.updatedAt,
			theme: s.theme,
			onboardingDone: s.onboardingDone,
			stars: s.stars,
			bookDefs: s.bookDefs,
			bookNotes: s.bookNotes,
			bookQuiz: s.bookQuiz,
			mastery: s.mastery,
			quizLog: s.quizLog,
			streak: s.streak
		};
	}
}), {
	name: "chemvault-student",
	storage: createJSONStorage(() => localStorage),
	partialize: (s) => ({
		v: s.v,
		updatedAt: s.updatedAt,
		theme: s.theme,
		onboardingDone: s.onboardingDone,
		stars: s.stars,
		bookDefs: s.bookDefs,
		bookNotes: s.bookNotes,
		bookQuiz: s.bookQuiz,
		mastery: s.mastery,
		quizLog: s.quizLog,
		streak: s.streak
	}),
	skipHydration: true
}));
function useAnimatedValue(target, duration = 800) {
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVal(target);
			return;
		}
		let raf = 0;
		const t0 = performance.now();
		const tick = (t) => {
			const p = Math.min(1, (t - t0) / duration);
			setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, duration]);
	return val;
}
function ChapterRing({ pct }) {
	const r = 26;
	const C = 2 * Math.PI * r;
	const [offset, setOffset] = (0, import_react.useState)(C);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setOffset(C * (1 - pct / 100)), 120);
		return () => window.clearTimeout(t);
	}, [pct, C]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid size-16 shrink-0 place-items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 64",
			className: "size-full -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r,
				fill: "none",
				stroke: "var(--color-border)",
				strokeWidth: "5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r,
				fill: "none",
				stroke: "var(--color-primary)",
				strokeWidth: "5",
				strokeLinecap: "round",
				strokeDasharray: C,
				strokeDashoffset: offset,
				style: { transition: "stroke-dashoffset 1s cubic-bezier(0.2,0,0,1)" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular absolute text-[0.72rem] font-bold text-fg",
			children: [pct, "%"]
		})]
	});
}
function MasteryStrip() {
	const mastery = useStudent((s) => s.mastery);
	const quizLog = useStudent((s) => s.quizLog);
	const streak = useStudent((s) => s.streak);
	const stars = useStudent((s) => s.stars);
	const snap = (0, import_react.useMemo)(() => ({
		v: 1,
		updatedAt: 0,
		theme: "dark",
		onboardingDone: true,
		stars,
		bookDefs: [],
		bookNotes: [],
		bookQuiz: [],
		mastery,
		quizLog,
		streak
	}), [
		mastery,
		quizLog,
		stars,
		streak
	]);
	const animated = useAnimatedValue(overallMastery(snap));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-[1.35rem] p-5 sm:p-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Command centre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular mt-2 font-display text-[2.6rem] font-semibold leading-none text-fg",
						children: [animated, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl text-muted",
							children: "%"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-[0.83rem] leading-relaxed text-muted",
						children: "Overall mastery — blended from learned reactions, review flags and recent quiz accuracy, computed per chapter."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-gold/8 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted",
					children: "Day streak"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular font-display text-2xl leading-tight text-gold",
					children: streak.count
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: chapters.map((ch) => {
				const m = topicMastery(ch.id, snap);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex items-center gap-3.5 rounded-2xl border border-border/70 bg-bg/55 p-3.5 transition-colors hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterRing, { pct: m.pct }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-[0.95rem] text-fg",
								children: ch.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[0.7rem] text-muted",
								children: [
									m.learned,
									"/",
									m.total,
									" learned · quiz ",
									m.quizPct,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1 overflow-hidden rounded-full bg-raised",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bar-sweep h-full rounded-full bg-gradient-to-r from-primary to-primary-deep transition-[width] duration-700",
									style: { width: `${m.pct}%` }
								})
							})
						]
					})]
				}, ch.id);
			})
		})]
	}) });
}
var STEPS = [
	{
		title: "Your Class 10 chemistry vault",
		body: "Reactions, colours, definitions, exam notes and a full quiz bank — written in NCERT language, designed like a premium study instrument.",
		icon: FlaskConical
	},
	{
		title: "Find anything in a second",
		body: "Search HCl, hydrochloric acid, or just “acid”. Aliases, formulae, colours and questions all live in one index. Press ⌘K anywhere.",
		icon: Search
	},
	{
		title: "Mark it. Master it.",
		body: "Toggle Learned or Needs review on every reaction. Stars, definitions and missed questions collect in My Revision.",
		icon: BookMarked
	},
	{
		title: "Quiz like the board paper",
		body: "1-mark MCQs, assertion–reason, case-based, timed mode, a full exam simulation and an adaptive engine that targets your weakest chapter.",
		icon: Sparkles
	}
];
function Onboarding() {
	const done = useStudent((s) => s.onboardingDone);
	const hydrated = useStudent((s) => s.hydrated);
	const finish = useStudent((s) => s.finishOnboarding);
	const [i, setI] = (0, import_react.useState)(0);
	if (!hydrated || done) return null;
	const step = STEPS[i];
	const Icon = step.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] grid place-items-end bg-bg/70 p-4 backdrop-blur-md sm:place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-enter glass w-full max-w-md rounded-[1.5rem] p-6 shadow-[0_40px_90px_-20px_rgb(0_0_0/0.7)] sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-12 place-items-center rounded-2xl border border-primary/30 bg-primary/12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-gold",
					children: [
						"Step ",
						i + 1,
						" / ",
						STEPS.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[1.65rem] leading-snug text-fg",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 text-sm leading-relaxed text-muted",
					children: step.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex gap-1.5",
					children: STEPS.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full transition-colors duration-300 ${idx <= i ? "bg-gradient-to-r from-primary to-gold" : "bg-border"}` }, idx))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => finish(),
						className: "btn btn-ghost h-11 flex-1",
						children: "Skip"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							if (i + 1 >= STEPS.length) finish();
							else setI((n) => n + 1);
						},
						className: "btn btn-primary h-11 flex-[1.4]",
						children: i + 1 >= STEPS.length ? "Enter the vault" : "Continue"
					})]
				})
			]
		})
	});
}
function PwaRegister() {
	const [offline, setOffline] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!("serviceWorker" in navigator)) return;
		const register = () => {
			navigator.serviceWorker.register("/sw.js").catch(() => void 0);
		};
		if (document.readyState === "complete") register();
		else window.addEventListener("load", register, { once: true });
	}, []);
	(0, import_react.useEffect)(() => {
		const sync = () => setOffline(!navigator.onLine);
		sync();
		window.addEventListener("online", sync);
		window.addEventListener("offline", sync);
		return () => {
			window.removeEventListener("online", sync);
			window.removeEventListener("offline", sync);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [offline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "hidden h-11 items-center rounded-xl border border-border px-3 text-xs font-medium text-muted sm:inline-flex",
		children: "Offline pack ready"
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "?install=1",
		className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border text-muted hover:text-fg",
		"aria-label": "Install ChemVault",
		title: "Install as an app",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
	})] });
}
/** Mulberry32 — deterministic enough to reshuffle on each page load. */
function mulberry32(seed) {
	let t = seed >>> 0;
	return () => {
		t += 1831565813;
		let r = Math.imul(t ^ t >>> 15, 1 | t);
		r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
		return ((r ^ r >>> 14) >>> 0) / 4294967296;
	};
}
function shuffle(items, seed) {
	const rand = mulberry32(seed);
	const arr = [...items];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(rand() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
function sessionSeed() {
	if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
		const buf = /* @__PURE__ */ new Uint32Array(1);
		crypto.getRandomValues(buf);
		return buf[0];
	}
	return (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
}
var MODE_META = {
	practice: {
		label: "Practice",
		desc: "Instant marking with a step-by-step method after each question.",
		icon: Play
	},
	timed: {
		label: "Timed",
		desc: "45 seconds per question. Trains recall speed for the real paper.",
		icon: Timer
	},
	exam: {
		label: "Exam sim",
		desc: "20 questions · 12-minute paper. Marking withheld until the end.",
		icon: AlarmClock
	},
	adaptive: {
		label: "Adaptive",
		desc: "Targets your weakest chapter automatically from quiz history.",
		icon: Brain
	},
	retry: {
		label: "Retry missed",
		desc: "Only the questions you missed or saved — perfect for the night before.",
		icon: RotateCcw
	}
};
var KIND_LABEL = {
	mcq: "MCQ",
	assertion: "Assertion–Reason",
	case: "Case-based"
};
function prepare(items, seed) {
	return shuffle(items, seed).map((item, idx) => {
		const order = shuffle(item.options.map((text, i) => ({
			text,
			i
		})), seed + idx * 97 + 13);
		return {
			...item,
			options: order.map((o) => o.text),
			ans: order.findIndex((o) => o.i === item.ans),
			seed
		};
	});
}
function filterBank(ch, kind) {
	let src = quizByChapter(ch);
	if (kind !== "all") src = src.filter((q) => q.kind === kind);
	return src;
}
function studentSnapshot(s) {
	return {
		v: 1,
		updatedAt: 0,
		theme: "dark",
		onboardingDone: true,
		stars: s.stars,
		bookDefs: [],
		bookNotes: [],
		bookQuiz: s.bookQuiz,
		mastery: s.mastery,
		quizLog: s.quizLog,
		streak: {
			count: 0,
			lastDay: ""
		}
	};
}
function ScoreRing({ pct, size = 132 }) {
	const r = 54;
	const C = 2 * Math.PI * r;
	const [offset, setOffset] = (0, import_react.useState)(C);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setOffset(C * (1 - Math.min(100, Math.max(0, pct)) / 100)), 90);
		return () => window.clearTimeout(t);
	}, [pct, C]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid shrink-0 place-items-center",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 128 128",
			className: "size-full -rotate-90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "64",
					cy: "64",
					r,
					fill: "none",
					stroke: "var(--color-border)",
					strokeWidth: "9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "64",
					cy: "64",
					r,
					fill: "none",
					stroke: "url(#ringGrad)",
					strokeWidth: "9",
					strokeLinecap: "round",
					strokeDasharray: C,
					strokeDashoffset: offset,
					style: { transition: "stroke-dashoffset 1.1s cubic-bezier(0.2,0,0,1)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "ringGrad",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#3ce0cb"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "60%",
							stopColor: "#2fd4c0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#e2c284"
						})
					]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "tabular font-display text-3xl font-semibold text-fg",
				children: [pct, "%"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted",
				children: "score"
			})]
		})]
	});
}
function QuizEngine({ focusId, onConsumedFocus }) {
	const [phase, setPhase] = (0, import_react.useState)("setup");
	const [focusMode, setFocusMode] = (0, import_react.useState)(false);
	const [ch, setCh] = (0, import_react.useState)("mix");
	const [mode, setMode] = (0, import_react.useState)("practice");
	const [kind, setKind] = (0, import_react.useState)("all");
	const [bank, setBank] = (0, import_react.useState)([]);
	const [i, setI] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [secondsLeft, setSecondsLeft] = (0, import_react.useState)(0);
	const [elapsedMs, setElapsedMs] = (0, import_react.useState)(0);
	const startedAtRef = (0, import_react.useRef)(0);
	const deadlineRef = (0, import_react.useRef)(null);
	const advanceTimerRef = (0, import_react.useRef)(null);
	const phaseRef = (0, import_react.useRef)("setup");
	phaseRef.current = phase;
	const cardRef = (0, import_react.useRef)(null);
	const seedRef = (0, import_react.useRef)(sessionSeed());
	const stars = useStudent((s) => s.stars);
	const bookQuiz = useStudent((s) => s.bookQuiz);
	const mastery = useStudent((s) => s.mastery);
	const quizLog = useStudent((s) => s.quizLog);
	const recordQuiz = useStudent((s) => s.recordQuiz);
	const toggleBook = useStudent((s) => s.toggleBook);
	const retryIds = (0, import_react.useMemo)(() => {
		const wrong = wrongQuestionIds(studentSnapshot({
			stars,
			bookQuiz,
			mastery,
			quizLog
		}));
		return [.../* @__PURE__ */ new Set([...wrong, ...bookQuiz])];
	}, [
		stars,
		bookQuiz,
		mastery,
		quizLog
	]);
	const counts = (0, import_react.useMemo)(() => {
		const countFor = (c) => {
			const src = filterBank(c, kind);
			return {
				total: src.length,
				mcq: src.filter((q) => q.kind === "mcq").length,
				assertion: src.filter((q) => q.kind === "assertion").length,
				case: src.filter((q) => q.kind === "case").length
			};
		};
		return {
			sel: countFor(ch),
			per: Object.fromEntries([
				"ch1",
				"ch2",
				"ch3",
				"ch4"
			].map((c) => [c, countFor(c)]))
		};
	}, [ch, kind]);
	const q = bank[i];
	const answered = q ? answers[i] : void 0;
	const examMode = mode === "exam";
	const timedQuestion = mode === "timed";
	const score = (0, import_react.useMemo)(() => answers.reduce((n, a, idx) => n + (a && !a.timedOut && a.picked === bank[idx]?.ans ? 1 : 0), 0), [answers, bank]);
	const wrongIds = (0, import_react.useMemo)(() => answers.flatMap((a, idx) => {
		if (!a) return [];
		return a.timedOut || a.picked !== bank[idx]?.ans ? [bank[idx].id] : [];
	}), [answers, bank]);
	const stats = (0, import_react.useMemo)(() => {
		const sessions = quizLog.length;
		return {
			sessions,
			acc: sessions ? Math.round(100 * quizLog.reduce((s, l) => s + l.score / Math.max(l.total, 1), 0) / sessions) : null,
			missed: new Set(quizLog.flatMap((l) => l.wrong)).size,
			minutes: Math.max(1, Math.round(quizLog.reduce((s, l) => s + l.durationMs, 0) / 6e4))
		};
	}, [quizLog]);
	const chAccuracy = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const c of [
			"ch1",
			"ch2",
			"ch3",
			"ch4"
		]) {
			const rows = quizLog.filter((l) => l.ch === c).slice(-6);
			map.set(c, rows.length ? Math.round(100 * rows.reduce((s, l) => s + l.score / Math.max(l.total, 1), 0) / rows.length) : null);
		}
		return map;
	}, [quizLog]);
	const clearAdvance = () => {
		if (advanceTimerRef.current != null) {
			window.clearTimeout(advanceTimerRef.current);
			advanceTimerRef.current = null;
		}
	};
	const finishRef = (0, import_react.useRef)(() => void 0);
	const expireRef = (0, import_react.useRef)(() => void 0);
	const startSession = (items, m, chapter, focused = false) => {
		clearAdvance();
		seedRef.current = sessionSeed();
		const cap = m === "exam" ? 20 : m === "timed" ? 16 : 12;
		const sliced = shuffle(items, seedRef.current).slice(0, Math.min(cap, items.length));
		setCh(chapter);
		setMode(m);
		setBank(prepare(sliced, seedRef.current));
		setAnswers([]);
		setI(0);
		setFocusMode(focused);
		startedAtRef.current = Date.now();
		deadlineRef.current = m === "exam" ? Date.now() + 72e4 : m === "timed" ? Date.now() + 45e3 : null;
		setSecondsLeft(m === "exam" ? 720 : m === "timed" ? 45 : 0);
		setPhase("run");
	};
	const start = (chapter, m) => {
		if (m === "retry") {
			const source = quizBank.filter((item) => retryIds.includes(item.id));
			if (!source.length) return;
			startSession(source, m, chapter);
			return;
		}
		if (m === "adaptive") {
			const weak = weakestChapter(studentSnapshot({
				stars,
				bookQuiz,
				mastery,
				quizLog
			}));
			startSession(filterBank(weak, kind), m, weak);
			return;
		}
		startSession(filterBank(chapter, kind), m, chapter);
	};
	(0, import_react.useEffect)(() => {
		if (!focusId) return;
		const item = quizBank.find((x) => x.id === focusId);
		if (item) startSession([item], "practice", item.ch, true);
		onConsumedFocus?.();
	}, [focusId]);
	const finish = () => {
		if (phaseRef.current !== "run") return;
		phaseRef.current = "done";
		clearAdvance();
		deadlineRef.current = null;
		setElapsedMs(Date.now() - startedAtRef.current);
		recordQuiz({
			id: `${Date.now()}`,
			at: Date.now(),
			mode,
			ch,
			score,
			total: bank.length,
			wrong: wrongIds,
			durationMs: Date.now() - startedAtRef.current
		});
		setPhase("done");
	};
	finishRef.current = finish;
	const expireCurrent = () => {
		if (phaseRef.current !== "run" || !q) return;
		deadlineRef.current = null;
		setAnswers((prev) => {
			if (prev[i]) return prev;
			const next = [...prev];
			next[i] = {
				picked: null,
				timedOut: true
			};
			return next;
		});
	};
	expireRef.current = expireCurrent;
	(0, import_react.useEffect)(() => {
		if (phase !== "run" || mode !== "exam" && mode !== "timed") return;
		const iv = window.setInterval(() => {
			const dl = deadlineRef.current;
			if (dl == null) return;
			const remain = Math.max(0, Math.round((dl - Date.now()) / 1e3));
			setSecondsLeft(remain);
			if (remain <= 0) {
				if (mode === "exam") finishRef.current();
				else expireRef.current();
			}
		}, 250);
		return () => window.clearInterval(iv);
	}, [phase, mode]);
	(0, import_react.useEffect)(() => () => clearAdvance(), []);
	(0, import_react.useEffect)(() => {
		if (phase !== "run") return;
		const el = cardRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		if (r.top < 72 || r.top > window.innerHeight * .55) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [i, phase]);
	const goto = (idx) => {
		setI(idx);
		if (timedQuestion) {
			deadlineRef.current = Date.now() + 45e3;
			setSecondsLeft(45);
		}
	};
	const next = () => {
		if (phaseRef.current !== "run") return;
		if (i + 1 >= bank.length) {
			finish();
			return;
		}
		goto(i + 1);
	};
	const choose = (idx) => {
		if (!q || answers[i]) return;
		if (timedQuestion) deadlineRef.current = null;
		setAnswers((prev) => {
			const next = [...prev];
			next[i] = {
				picked: idx,
				timedOut: false
			};
			return next;
		});
		if (examMode) {
			clearAdvance();
			advanceTimerRef.current = window.setTimeout(() => {
				advanceTimerRef.current = null;
				if (phaseRef.current !== "run") return;
				if (i + 1 >= bank.length) finishRef.current();
				else goto(i + 1);
			}, 420);
		}
	};
	(0, import_react.useEffect)(() => {
		if (phase !== "run" || examMode || !q) return;
		const onKey = (e) => {
			if (e.target?.tagName === "INPUT") return;
			const n = Number(e.key);
			if (n >= 1 && n <= q.options.length && !answers[i]) {
				choose(n - 1);
				return;
			}
			if (e.key === "Enter" && answers[i]) next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		phase,
		examMode,
		q,
		i,
		answers
	]);
	const clock = mode === "exam" ? `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, "0")}` : timedQuestion ? `${secondsLeft}s` : null;
	const exitFocus = () => {
		setFocusMode(false);
		clearAdvance();
		deadlineRef.current = null;
		setPhase("setup");
	};
	if (phase === "setup") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5",
		children: [
			stats.sessions > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					[
						"Sessions",
						stats.sessions,
						Target
					],
					[
						"Avg accuracy",
						stats.acc != null ? `${stats.acc}%` : "—",
						Gauge
					],
					[
						"Missed pool",
						retryIds.length ? `${retryIds.length}` : `${stats.missed}`,
						RotateCcw
					],
					[
						"Minutes practised",
						stats.minutes,
						Clock
					]
				].map(([label, value, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl px-4 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 text-gold" }), label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular mt-1 font-display text-2xl text-fg",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "size-3.5" }), " 1 · Choose your mode"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: Object.keys(MODE_META).map((m) => {
					const meta = MODE_META[m];
					const disabled = m === "retry" && retryIds.length === 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled,
						onClick: () => setMode(m),
						className: cn("mode-card", mode === m && "on", disabled && "opacity-40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-8 place-items-center rounded-lg border", mode === m ? "border-primary/40 bg-primary/15 text-primary" : "border-border text-muted"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(meta.icon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[1.05rem] text-fg",
									children: meta.label
								}),
								mode === m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-auto size-4 text-primary" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs leading-relaxed text-muted",
							children: disabled ? "No missed questions yet — appear after your first attempt." : meta.desc
						})]
					}, m);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }), " 2 · Pick the question types"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					[
						"all",
						"All types",
						quizByChapter(ch).length
					],
					[
						"mcq",
						"1-mark MCQ",
						counts.sel.mcq
					],
					[
						"assertion",
						"Assertion–Reason",
						counts.sel.assertion
					],
					[
						"case",
						"Case-based",
						counts.sel.case
					]
				].map(([id, label, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: id !== "all" && n === 0,
					onClick: () => setKind(id),
					className: cn("chip", kind === id && "chip-gold-on"),
					children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip-count",
						children: n
					})]
				}, id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "size-3.5" }), " 3 · Select the chapter & launch"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: [chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCh(c.id),
					className: cn("mode-card", ch === c.id && "on"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[0.65rem] tracking-[0.22em] text-gold",
								children: ["CH ", c.num]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chip-count",
								children: [counts.per[c.id].total, " Q"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[1.02rem] leading-snug text-fg",
							children: c.title
						}),
						chAccuracy.get(c.id) != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.7rem] font-semibold text-muted",
							children: ["Recent accuracy ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular text-primary",
								children: [chAccuracy.get(c.id), "%"]
							})]
						})
					]
				}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCh("mix"),
					className: cn("mode-card", ch === "mix" && "on"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.65rem] tracking-[0.22em] text-gold",
								children: "MIX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chip-count",
								children: [quizByChapter("mix").length, " Q"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[1.02rem] text-fg",
							children: "Mixed set"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "Full syllabus sampling across all four chapters."
						})
					]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => start(ch, mode),
					disabled: mode !== "retry" && counts.sel.total === 0,
					className: "btn btn-primary h-12 px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
						"Start ",
						MODE_META[mode].label.toLowerCase(),
						" quiz",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: counts.sel.total > 0 ? `${Math.min(counts.sel.total, mode === "exam" ? 20 : mode === "timed" ? 16 : 12)} questions · shuffled every run` : "No questions match this combination — relax a filter."
				})]
			})
		]
	});
	if (phase === "done") {
		const pct = Math.round(score / Math.max(bank.length, 1) * 100);
		const mins = Math.floor(elapsedMs / 6e4);
		const secs = Math.floor(elapsedMs % 6e4 / 1e3);
		const verdict = pct >= 90 ? "Outstanding — board ready." : pct >= 75 ? "Strong run — polish the misses." : pct >= 50 ? "Solid base — revise the misses below." : "Rebuild from the misses below — you'll get there.";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass pop-in rounded-[1.35rem] p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, { pct }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow justify-center sm:justify-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3.5" }),
									" ",
									MODE_META[mode].label,
									" · ",
									ch === "mix" ? "Mixed set" : chapters.find((c) => c.id === ch).title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-2 font-display text-3xl text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular text-primary",
										children: score
									}),
									" / ",
									bank.length,
									" correct"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: verdict
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap justify-center gap-2 sm:justify-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "chip chip-on",
										children: [
											"Time ",
											mins,
											":",
											String(secs).padStart(2, "0")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "chip",
										children: [wrongIds.length, " missed"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chip",
										children: "Saved to revision"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => startSession(bank.map(({ seed: _s, ...item }) => item), mode, ch),
							className: "btn btn-primary h-11 px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4" }), " Reshuffle & retry"]
						}),
						wrongIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								const missed = bank.filter((item) => wrongIds.includes(item.id)).map(({ seed: _s, ...item }) => item);
								startSession(missed, "practice", ch);
							},
							className: "btn btn-gold h-11 px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }),
								" Drill the ",
								wrongIds.length,
								" missed"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPhase("setup"),
							className: "btn btn-ghost h-11 px-5",
							children: "New session"
						})
					]
				})]
			}), bank.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass overflow-hidden rounded-[1.35rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-b border-border px-5 py-4 font-display text-lg text-fg",
					children: "Answer review"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border/60",
					children: bank.map((item, idx) => {
						const a = answers[idx];
						const ok = a && !a.timedOut && a.picked === item.ans;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							open: !ok,
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex cursor-pointer list-none items-start gap-3 px-5 py-4 transition-colors hover:bg-raised/40 [&::-webkit-details-marker]:hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 grid size-6 shrink-0 place-items-center rounded-full", ok ? "bg-ok/15 text-ok" : "bg-danger/15 text-danger"),
										children: ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block whitespace-pre-line text-sm leading-snug text-fg",
											children: [item.q.replace(/\n+/g, " ").slice(0, 160), item.q.length > 160 ? "…" : ""]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-muted",
											children: ok ? "Correct" : a?.timedOut ? "Time expired" : `Correct answer: ${item.options[item.ans]}`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "mt-1 size-4 shrink-0 text-muted transition-transform group-open:rotate-180" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 pb-5 pl-14",
								children: [!ok && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-danger",
									children: ["You chose: ", a?.timedOut ? "— (ran out of time)" : a?.picked != null ? item.options[a.picked] : "—"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 whitespace-pre-line text-sm leading-relaxed text-muted",
									children: item.why
								})]
							})]
						}, item.id);
					})
				})]
			})]
		});
	}
	const showFeedback = !examMode && answered != null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					focusMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "chip chip-gold-on",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "size-3.5" }), " Focused question"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "chip chip-on",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }),
							" ",
							MODE_META[mode].label,
							" · ",
							ch === "mix" ? "Mixed" : `Ch ${chapters.find((c) => c.id === ch).num}`
						]
					}),
					clock && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("chip tabular gap-1.5", secondsLeft <= 10 && secondsLeft > 0 && "timer-low"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }), clock]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "chip tabular",
						children: [
							i + 1,
							" / ",
							bank.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ms-auto flex gap-2",
						children: focusMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: exitFocus,
							className: "btn btn-ghost h-9 px-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), " Exit focus"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: exitFocus,
							className: "btn btn-ghost h-9 px-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), " End session"]
						})
					})
				]
			}),
			!focusMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				"aria-hidden": true,
				children: bank.map((item, idx) => {
					const a = answers[idx];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 flex-1 rounded-full transition-colors duration-300", a ? !examMode ? a.timedOut || a.picked !== bank[idx].ans ? "bg-danger/70" : "bg-ok/80" : "bg-primary/50" : idx === i ? "bg-primary" : "bg-border") }, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: cardRef,
				className: "glass scroll-mt-24 rounded-[1.35rem] p-5 sm:p-7",
				children: q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "q-enter",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip chip-gold-on h-7 text-[0.7rem]",
									children: KIND_LABEL[q.kind]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "chip h-7 text-[0.7rem]",
									children: [q.mark, "-mark"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip h-7 text-[0.7rem]",
									children: chapters.find((c) => c.id === q.ch)?.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 whitespace-pre-line font-display text-[clamp(1.2rem,3.2vw,1.6rem)] font-medium leading-snug text-fg",
							children: q.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-2.5",
							children: q.options.map((opt, idx) => {
								const letter = String.fromCharCode(65 + idx);
								const isPicked = answered != null && answered.picked === idx;
								const isCorrect = idx === q.ans;
								let state = "";
								if (showFeedback || examMode && answered != null) {
									if (isCorrect) state = "opt-correct-state";
									else if (isPicked) state = "opt-wrong-state opt-wrong";
									else state = "opt-dim";
								}
								if (isPicked && isCorrect) state += " opt-correct";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: answered != null,
									onClick: () => choose(idx),
									"aria-live": isPicked ? "polite" : void 0,
									className: cn("opt", isPicked && state === "" && "opt-picked", state),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "opt-letter",
											children: letter
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0",
											children: opt
										}),
										state.includes("opt-correct-state") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "ms-auto mt-0.5 size-4 shrink-0" }),
										state.includes("opt-wrong-state") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "ms-auto mt-0.5 size-4 shrink-0" })
									]
								}, `${idx}-${opt.slice(0, 24)}`);
							})
						}),
						answered?.timedOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-enter mt-5 rounded-2xl border border-danger/40 bg-danger/8 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-danger",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlarmClock, { className: "size-4" }), " Time expired"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									"Correct answer: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-fg",
										children: q.options[q.ans]
									}),
									". Read the method below — then carry it into the next one."
								]
							})]
						}),
						showFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-enter mt-5 rounded-2xl border border-border bg-bg/60 p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]", answered && !answered.timedOut && answered.picked === q.ans ? "text-ok" : "text-gold"),
									children: answered && !answered.timedOut && answered.picked === q.ans ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Correct"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4" }), " Step-by-step method"] })
								}),
								answered && !answered.timedOut && answered.picked !== q.ans && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-danger",
									children: [
										"You chose “",
										answered.picked != null ? q.options[answered.picked] : "—",
										"”. Correct answer:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-fg",
											children: q.options[q.ans]
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 whitespace-pre-line text-sm leading-relaxed text-fg",
									children: q.why
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleBook("quiz", q.id),
										className: cn("btn h-10 px-4 text-xs", bookQuiz.includes(q.id) ? "btn-gold" : "btn-ghost"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "size-3.5" }), bookQuiz.includes(q.id) ? "Saved to revision" : "Save to revision"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: next,
										className: "btn btn-primary h-10 px-5 text-xs",
										children: [i + 1 >= bank.length ? "Finish & see results" : "Next question", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								})
							]
						}),
						examMode && answered != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 flex items-center gap-2 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot size-1.5 rounded-full bg-primary" }), "Answer locked — exam sim reveals marking at the end."]
						})
					]
				}, `${q.id}-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-center text-sm text-muted",
					children: "This question is no longer available."
				})
			}),
			!examMode && answered != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: next,
					className: "btn btn-primary h-11 px-6 sm:hidden",
					children: [i + 1 >= bank.length ? "Finish" : "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function Meta({ k, v, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/60 bg-bg/55 p-3 transition-colors hover:border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: "flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
			children: [icon, k]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1.5 text-[0.83rem] leading-snug text-fg",
			children: v
		})]
	});
}
function ReactionCard({ r, index }) {
	const key = reactionKey(r);
	const starred = useStudent((s) => s.stars.includes(key));
	const flag = useStudent((s) => s.mastery[key] ?? "unset");
	const toggleStar = useStudent((s) => s.toggleStar);
	const setMastery = useStudent((s) => s.setMastery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-enter glass glass-hover flex flex-col rounded-[1.15rem] p-5",
		style: { animationDelay: `${Math.min(index, 8) * 45}ms` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "min-w-0 font-display text-[1.15rem] leading-snug text-fg",
					children: r.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": starred ? "Unsave reaction" : "Save reaction",
					onClick: () => toggleStar(key),
					className: "shrink-0 rounded-lg p-1 text-muted transition-all duration-150 hover:bg-raised hover:text-gold active:scale-90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-[1.05rem]", starred && "fill-gold text-gold") })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-gold",
					children: r.type
				}), flag !== "unset" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wide", flag === "learned" ? "bg-ok/15 text-ok" : "bg-gold/15 text-gold"),
					children: flag === "learned" ? "✓ Learned" : "⟳ Needs review"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "eq mt-4 max-w-full overflow-x-auto rounded-xl border border-primary/20 bg-bg/80 px-3.5 py-3 text-[0.8rem] leading-relaxed text-primary",
				children: r.eq
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border/60 bg-bg/55 p-3 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }), "Colour change"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1.5 text-[0.83rem] leading-snug text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: r.colour })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						k: "Observation",
						v: r.obs
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						k: "Condition",
						v: r.cond
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-gold/25 bg-gold/6 p-3 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-3" }), "Exam tip"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1.5 text-[0.83rem] leading-snug text-fg",
							children: r.tip
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 border-l-2 border-primary/50 pl-3 text-[0.83rem] leading-relaxed text-muted",
				children: r.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto grid grid-cols-2 gap-2 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMastery(key, flag === "learned" ? "unset" : "learned"),
					className: cn("btn h-10 text-xs", flag === "learned" ? "border border-ok/50 bg-ok/12 text-ok" : "border border-border text-muted hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-3.5" }), "Learned"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMastery(key, flag === "review" ? "unset" : "review"),
					className: cn("btn h-10 text-xs", flag === "review" ? "border border-gold/50 bg-gold/12 text-gold" : "border border-border text-muted hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Review"]
				})]
			})
		]
	});
}
function RevisionQueue({ onOpenQuiz }) {
	const stars = useStudent((s) => s.stars);
	const mastery = useStudent((s) => s.mastery);
	const bookDefs = useStudent((s) => s.bookDefs);
	const bookNotes = useStudent((s) => s.bookNotes);
	const bookQuiz = useStudent((s) => s.bookQuiz);
	const quizLog = useStudent((s) => s.quizLog);
	const toggleStar = useStudent((s) => s.toggleStar);
	const toggleBook = useStudent((s) => s.toggleBook);
	const starredRx = reactions.filter((r) => stars.includes(reactionKey(r)));
	const reviewRx = reactions.filter((r) => mastery[reactionKey(r)] === "review");
	const defs = definitions.filter((d) => bookDefs.includes(d.title));
	const noteRows = notes.filter((n) => bookNotes.includes(n.title));
	const wrongIds = [...new Set(quizLog.flatMap((l) => l.wrong))];
	const questions = quizBank.filter((q) => bookQuiz.includes(q.id) || wrongIds.includes(q.id));
	if (starredRx.length + reviewRx.length + defs.length + noteRows.length + questions.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-[1.35rem] px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid size-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 text-gold" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-xl text-fg",
				children: "Your revision shelf is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted",
				children: "Star a reaction, flag one for review, save a definition — or miss a quiz question. It all lands here automatically."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			reviewRx.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Needs review",
				count: reviewRx.length,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4 text-gold" }),
				children: reviewRx.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border/60 bg-bg/55 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eq mt-1 text-xs text-primary",
						children: r.eq
					})]
				}, reactionKey(r)))
			}),
			starredRx.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Starred reactions",
				count: starredRx.length,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-gold" }),
				children: starredRx.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-bg/55 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eq mt-1 truncate text-xs text-primary",
							children: r.eq
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-semibold text-muted transition-colors hover:text-danger",
						onClick: () => toggleStar(reactionKey(r)),
						children: "Remove"
					})]
				}, reactionKey(r)))
			}),
			defs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Saved definitions",
				count: defs.length,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 text-primary" }),
				children: defs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-bg/55 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: d.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted",
							children: d.body
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-semibold text-muted transition-colors hover:text-danger",
						onClick: () => toggleBook("def", d.title),
						children: "Remove"
					})]
				}, d.title))
			}),
			noteRows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Saved notes",
				count: noteRows.length,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-4 text-gold" }),
				children: noteRows.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-bg/55 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: n.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-semibold text-muted transition-colors hover:text-danger",
						onClick: () => toggleBook("note", n.title),
						children: "Remove"
					})]
				}, n.title))
			}),
			questions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-[1.35rem] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-3 flex items-center gap-2 font-display text-lg text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 text-primary" }),
							"Questions to retry",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip-count ms-1 bg-primary/15 text-primary",
								children: questions.length
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-bg/55 px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-2 text-sm text-fg",
								children: q.q.replace(/\n/g, " ")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-primary h-8 shrink-0 rounded-lg px-3 text-[0.7rem]",
								onClick: () => onOpenQuiz(q.id),
								children: "Retry"
							})]
						}, q.id))
					})]
				})
			})
		]
	});
}
function Block({ title, icon, count, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass h-full rounded-[1.35rem] p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "mb-3 flex items-center gap-2 font-display text-lg text-fg",
			children: [
				icon,
				title,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("chip-count ms-1"),
					children: count
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid max-h-[22rem] gap-2 overflow-y-auto pr-1",
			children
		})]
	}) });
}
var NAV_GROUPS = [
	{
		label: "Library",
		items: [
			{
				id: "overview",
				label: "Overview",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-[1.05rem]" })
			},
			{
				id: "reactions",
				label: "Reactions",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-[1.05rem]" })
			},
			{
				id: "colours",
				label: "Colour Atlas",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-[1.05rem]" })
			},
			{
				id: "lab",
				label: "Lab Bench",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestTubes, { className: "size-[1.05rem]" })
			},
			{
				id: "simulator",
				label: "Virtual Lab",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beaker, { className: "size-[1.05rem]" })
			},
			{
				id: "definitions",
				label: "Definitions",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-[1.05rem]" })
			},
			{
				id: "notes",
				label: "Exam Notes",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-[1.05rem]" })
			}
		]
	},
	{
		label: "Practice",
		items: [
			{
				id: "quiz",
				label: "Quiz Arena",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-[1.05rem]" })
			},
			{
				id: "revision",
				label: "My Revision",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-[1.05rem]" })
			},
			{
				id: "ai",
				label: "Ask AI",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-[1.05rem]" })
			}
		]
	},
	{
		label: "More",
		items: [{
			id: "credits",
			label: "Credits",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-[1.05rem]" })
		}]
	}
];
function BrandMark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative grid size-10 shrink-0 place-items-center rounded-[0.85rem] border border-primary/30 bg-gradient-to-br from-primary/25 via-primary/10 to-gold/15 shadow-[0_8px_22px_-8px_rgb(47_212_192/0.5)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				className: "size-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9.5 3h5M10.5 3v5.2c0 .9-3 3.4-3 7.3a4.5 4.5 0 0 0 9 0c0-3.9-3-6.4-3-7.3V3",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "round",
					className: "text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 13.6c2.4 1.4 5.6 1.4 8 0",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "round",
					className: "text-gold"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot absolute -right-0.5 -top-0.5 size-2 rounded-full bg-gold shadow-[0_0_8px_2px_rgb(226_194_132/0.5)]" })]
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "wordmark block font-display text-[1.35rem] font-semibold tracking-tight",
				children: "ChemVault 10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted",
				children: "CBSE · Class 10"
			})]
		})]
	});
}
function Sidebar({ section, onNavigate, mobileOpen, onCloseMobile, footer }) {
	const streak = useStudent((s) => s.streak);
	const stars = useStudent((s) => s.stars);
	const mastery = useStudent((s) => s.mastery);
	const quizLog = useStudent((s) => s.quizLog);
	const overall = (0, import_react.useMemo)(() => overallMastery({
		v: 1,
		updatedAt: 0,
		theme: "dark",
		onboardingDone: true,
		stars,
		bookDefs: [],
		bookNotes: [],
		bookQuiz: [],
		mastery,
		quizLog,
		streak
	}), [
		mastery,
		quizLog,
		stars,
		streak
	]);
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 pb-2 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close menu",
					onClick: onCloseMobile,
					className: "grid size-9 place-items-center rounded-xl border border-border text-muted transition-colors hover:text-fg lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-scrollbar flex-1 overflow-y-auto px-2.5 pb-4",
				children: NAV_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "nav-group-label",
					children: group.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid gap-0.5",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onNavigate(item.id),
						"aria-current": section === item.id ? "true" : void 0,
						className: `nav-item ${section === item.id ? "on" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: section === item.id ? "text-primary" : "text-muted",
								children: item.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1",
								children: item.label
							}),
							section === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 8 8",
								className: "size-1.5 text-gold",
								fill: "currentColor",
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "4",
									cy: "4",
									r: "4"
								})
							})
						]
					}, item.id))
				})] }, group.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/70 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 rounded-2xl border border-border/70 bg-bg/60 px-3.5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted",
							children: "Mastery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "tabular font-display text-xl leading-tight text-fg",
							children: [overall, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted",
							children: "Streak"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "tabular font-display text-xl leading-tight text-primary",
							children: [streak.count, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-0.5 text-[0.65rem] font-sans font-medium text-muted",
								children: "d"
							})]
						})]
					})]
				}), footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex items-center justify-end gap-2",
					children: footer
				}) : null]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "fixed inset-y-0 left-0 z-40 hidden w-[264px] border-r border-border/70 bg-surface/70 backdrop-blur-2xl lg:block",
		children: body
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[55] lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`,
		"aria-hidden": !mobileOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: onCloseMobile,
			className: `absolute inset-0 bg-bg/70 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: `absolute inset-y-0 left-0 w-[290px] max-w-[86vw] border-r border-border bg-surface shadow-[0_0_80px_rgb(0_0_0/0.6)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`,
			children: body
		})]
	})] });
}
var loadStudentState = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("6b006a96ba7db80aaa087efb52077d4f16ace3a5f43ca828b40000e56e11a966"));
var saveStudentState = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("82bdbdfe7762fe104451afe8e0045b3d7441b5caaed33a9717659b3440bb3443"));
function StudentHydrate() {
	const { user, isPending } = useCurrentUserState();
	const theme = useStudent((s) => s.theme);
	const updatedAt = useStudent((s) => s.updatedAt);
	const applyRemote = useStudent((s) => s.applyRemote);
	const booted = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		Promise.resolve(useStudent.persist.rehydrate()).then(() => {
			if (cancelled) return;
			useStudent.getState().markHydrated();
			const t = useStudent.getState().theme;
			document.documentElement.classList.toggle("light", t === "light");
		});
		return () => {
			cancelled = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", theme === "light");
	}, [theme]);
	(0, import_react.useEffect)(() => {
		if (isPending || !user) return;
		loadStudentState().then((res) => {
			if (res.ok) applyRemote(res.payload);
		}).catch(() => void 0);
	}, [
		user,
		isPending,
		applyRemote
	]);
	(0, import_react.useEffect)(() => {
		if (isPending || !user) return;
		if (!booted.current) {
			booted.current = true;
			return;
		}
		if (!updatedAt) return;
		const handle = window.setTimeout(() => {
			saveStudentState({ data: { payload: useStudent.getState().snapshot() } }).catch(() => void 0);
		}, 900);
		return () => window.clearTimeout(handle);
	}, [
		updatedAt,
		user,
		isPending
	]);
	return null;
}
function ThemeToggle() {
	const theme = useStudent((s) => s.theme);
	const setTheme = useStudent((s) => s.setTheme);
	const light = theme === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": light ? "Switch to dark mode" : "Switch to light mode",
		onClick: () => setTheme(light ? "dark" : "light"),
		className: "grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface/60 text-muted transition-[color,border-color,transform] duration-200 hover:border-primary/50 hover:text-fg active:scale-90",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative inline-block size-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ${light ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ${light ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"}` })]
		})
	});
}
var CHEMICAL_GROUPS = [
	{
		id: "metals",
		label: "Metals",
		blurb: "Reactivity series & alloy stock"
	},
	{
		id: "nonmetals",
		label: "Non-metals",
		blurb: "C, S, P and the common gases"
	},
	{
		id: "acids",
		label: "Acids",
		blurb: "Mineral and organic acids"
	},
	{
		id: "bases",
		label: "Bases",
		blurb: "Hydroxides used in Class 10"
	},
	{
		id: "salts",
		label: "Salts",
		blurb: "Board-favourite crystals & precipitates"
	},
	{
		id: "organic",
		label: "Organic compounds",
		blurb: "Carbon chapter reagents"
	},
	{
		id: "oxidizers",
		label: "Oxidizers",
		blurb: "Permanganate & peroxide"
	},
	{
		id: "indicators",
		label: "Indicators",
		blurb: "Colour change in acid / base"
	},
	{
		id: "solvents",
		label: "Solvents",
		blurb: "Water and alcohol"
	}
];
var CHEMICALS = [
	{
		id: "na",
		name: "Sodium",
		formula: "Na",
		category: "metals",
		state: "s",
		color: "#d7dde4",
		hint: "Soft; stored in kerosene; reacts violently with water."
	},
	{
		id: "mg",
		name: "Magnesium",
		formula: "Mg",
		category: "metals",
		state: "s",
		color: "#e4e9ee",
		hint: "Burns with a dazzling white flame."
	},
	{
		id: "fe",
		name: "Iron",
		formula: "Fe",
		category: "metals",
		state: "s",
		color: "#8d939c",
		hint: "Displaces copper from CuSO₄; rusts in moist air."
	},
	{
		id: "zn",
		name: "Zinc",
		formula: "Zn",
		category: "metals",
		state: "s",
		color: "#b7c0c8",
		hint: "Classic metal for H₂ with dilute acid."
	},
	{
		id: "cu",
		name: "Copper",
		formula: "Cu",
		category: "metals",
		state: "s",
		color: "#c46a3a",
		hint: "Below hydrogen; will not displace H₂ from acids."
	},
	{
		id: "ca",
		name: "Calcium",
		formula: "Ca",
		category: "metals",
		state: "s",
		color: "#efe6d2",
		hint: "Reacts with cold water; used in slaked lime chemistry."
	},
	{
		id: "al",
		name: "Aluminium",
		formula: "Al",
		category: "metals",
		state: "s",
		color: "#cfd6dd",
		hint: "Protective oxide layer; magnalium / duralumin."
	},
	{
		id: "k",
		name: "Potassium",
		formula: "K",
		category: "metals",
		state: "s",
		color: "#c8b4d8",
		hint: "Most reactive metal in the Class 10 series."
	},
	{
		id: "pb",
		name: "Lead",
		formula: "Pb",
		category: "metals",
		state: "s",
		color: "#9aa3ad",
		hint: "Just above hydrogen; used in solder."
	},
	{
		id: "ag",
		name: "Silver",
		formula: "Ag",
		category: "metals",
		state: "s",
		color: "#e8edf2",
		hint: "Very low reactivity; dental amalgam partner."
	},
	{
		id: "hg",
		name: "Mercury",
		formula: "Hg",
		category: "metals",
		state: "l",
		color: "#b8c0c4",
		hint: "Liquid metal; forms amalgams."
	},
	{
		id: "sn",
		name: "Tin",
		formula: "Sn",
		category: "metals",
		state: "s",
		color: "#c5ccd3",
		hint: "With copper → bronze; with lead → solder."
	},
	{
		id: "ni",
		name: "Nickel",
		formula: "Ni",
		category: "metals",
		state: "s",
		color: "#8f9aa6",
		hint: "Stainless steel and cupronickel."
	},
	{
		id: "cr",
		name: "Chromium",
		formula: "Cr",
		category: "metals",
		state: "s",
		color: "#7b8f8a",
		hint: "Gives stainless steel its corrosion resistance."
	},
	{
		id: "c",
		name: "Carbon",
		formula: "C",
		category: "nonmetals",
		state: "s",
		color: "#3a3f46",
		hint: "Reducing agent; alloyed into steel."
	},
	{
		id: "s",
		name: "Sulfur",
		formula: "S",
		category: "nonmetals",
		state: "s",
		color: "#e3c84a",
		hint: "Burns with a blue flame to SO₂."
	},
	{
		id: "p",
		name: "Phosphorus",
		formula: "P",
		category: "nonmetals",
		state: "s",
		color: "#d4543a",
		hint: "White P is stored in water; burns to P₄O₁₀."
	},
	{
		id: "h2",
		name: "Hydrogen",
		formula: "H₂",
		category: "nonmetals",
		state: "g",
		color: "#f4f7fb",
		hint: "Pop test; reducing agent for metal oxides."
	},
	{
		id: "cl2",
		name: "Chlorine",
		formula: "Cl₂",
		category: "nonmetals",
		state: "g",
		color: "#9fd16a",
		hint: "Greenish-yellow; bleaching and combination with Na."
	},
	{
		id: "o2",
		name: "Oxygen",
		formula: "O₂",
		category: "nonmetals",
		state: "g",
		color: "#7dd3fc",
		hint: "Supports combustion; combination / oxidation."
	},
	{
		id: "co2",
		name: "Carbon dioxide",
		formula: "CO₂",
		category: "nonmetals",
		state: "g",
		color: "#9aa7b5",
		hint: "Turns lime water milky; acidic oxide."
	},
	{
		id: "hcl",
		name: "Hydrochloric acid",
		formula: "HCl",
		category: "acids",
		state: "aq",
		color: "#d9f3ef",
		hint: "Dilute acid for metals, carbonates, bases."
	},
	{
		id: "h2so4",
		name: "Sulfuric acid",
		formula: "H₂SO₄",
		category: "acids",
		state: "aq",
		color: "#efe6b8",
		hint: "Dehydrating; used in esterification (conc.)."
	},
	{
		id: "hno3",
		name: "Nitric acid",
		formula: "HNO₃",
		category: "acids",
		state: "aq",
		color: "#f3d9a8",
		hint: "Oxidising acid; metals generally do not give H₂."
	},
	{
		id: "ch3cooh",
		name: "Acetic acid",
		formula: "CH₃COOH",
		category: "acids",
		state: "l",
		color: "#f4e7c8",
		hint: "Weak acid; vinegar is 5–8% ethanoic acid."
	},
	{
		id: "naoh",
		name: "Sodium hydroxide",
		formula: "NaOH",
		category: "bases",
		state: "aq",
		color: "#e6f4ff",
		hint: "Caustic soda; strong alkali."
	},
	{
		id: "caoh2",
		name: "Calcium hydroxide",
		formula: "Ca(OH)₂",
		category: "bases",
		state: "aq",
		color: "#f2f0e4",
		hint: "Slaked lime / lime water."
	},
	{
		id: "nh4oh",
		name: "Ammonium hydroxide",
		formula: "NH₄OH",
		category: "bases",
		state: "aq",
		color: "#e8eef6",
		hint: "Aqueous ammonia; weak base."
	},
	{
		id: "nacl",
		name: "Sodium chloride",
		formula: "NaCl",
		category: "salts",
		state: "s",
		color: "#f7f8fb",
		hint: "Common salt; white crystalline."
	},
	{
		id: "cuso4",
		name: "Copper sulfate",
		formula: "CuSO₄·5H₂O",
		category: "salts",
		state: "s",
		color: "#2b7de9",
		hint: "Blue vitriol; turns white on strong heating."
	},
	{
		id: "bacl2",
		name: "Barium chloride",
		formula: "BaCl₂",
		category: "salts",
		state: "aq",
		color: "#eef2f6",
		hint: "Gives white BaSO₄ with sulfate ions."
	},
	{
		id: "na2co3",
		name: "Sodium carbonate",
		formula: "Na₂CO₃",
		category: "salts",
		state: "s",
		color: "#f4f6f8",
		hint: "Washing soda; brisk effervescence with acids."
	},
	{
		id: "feso4",
		name: "Ferrous sulfate",
		formula: "FeSO₄·7H₂O",
		category: "salts",
		state: "s",
		color: "#5a8f5a",
		hint: "Green vitriol; thermal decomposition is a board favourite."
	},
	{
		id: "agno3",
		name: "Silver nitrate",
		formula: "AgNO₃",
		category: "salts",
		state: "aq",
		color: "#f3f0e8",
		hint: "Gives white AgCl ppt with chlorides."
	},
	{
		id: "ki",
		name: "Potassium iodide",
		formula: "KI",
		category: "salts",
		state: "aq",
		color: "#f0e8ff",
		hint: "With lead nitrate → bright yellow PbI₂."
	},
	{
		id: "pbno3",
		name: "Lead nitrate",
		formula: "Pb(NO₃)₂",
		category: "salts",
		state: "s",
		color: "#f7f4ee",
		hint: "White crystals; brown NO₂ on heating."
	},
	{
		id: "caco3",
		name: "Calcium carbonate",
		formula: "CaCO₃",
		category: "salts",
		state: "s",
		color: "#f4f1ea",
		hint: "Limestone / marble / chalk."
	},
	{
		id: "nahco3",
		name: "Sodium hydrogencarbonate",
		formula: "NaHCO₃",
		category: "salts",
		state: "s",
		color: "#f6f7f4",
		hint: "Baking soda; CO₂ with acids."
	},
	{
		id: "fecl3",
		name: "Ferric chloride",
		formula: "FeCl₃",
		category: "salts",
		state: "aq",
		color: "#c48a2a",
		hint: "Yellowish-brown solution."
	},
	{
		id: "cao",
		name: "Calcium oxide",
		formula: "CaO",
		category: "salts",
		state: "s",
		color: "#f2efe6",
		hint: "Quicklime; hissing, exothermic slaking."
	},
	{
		id: "zno",
		name: "Zinc oxide",
		formula: "ZnO",
		category: "salts",
		state: "s",
		color: "#f6f4ea",
		hint: "White when cold, yellow when hot."
	},
	{
		id: "cuo",
		name: "Copper oxide",
		formula: "CuO",
		category: "salts",
		state: "s",
		color: "#1f2a36",
		hint: "Black; reduced by H₂ / C on heating."
	},
	{
		id: "fe2o3",
		name: "Ferric oxide",
		formula: "Fe₂O₃",
		category: "salts",
		state: "s",
		color: "#a33b24",
		hint: "Reddish-brown rust / haematite."
	},
	{
		id: "ethanol",
		name: "Ethanol",
		formula: "C₂H₅OH",
		category: "organic",
		state: "l",
		color: "#dcefff",
		hint: "Alcohol; combustion, Na, esterification."
	},
	{
		id: "ethanoic",
		name: "Ethanoic acid",
		formula: "CH₃COOH",
		category: "organic",
		state: "l",
		color: "#f4e7c8",
		hint: "Same as acetic acid; vinegar odour."
	},
	{
		id: "methane",
		name: "Methane",
		formula: "CH₄",
		category: "organic",
		state: "g",
		color: "#e8f0f6",
		hint: "Main constituent of natural gas."
	},
	{
		id: "kmno4",
		name: "Potassium permanganate",
		formula: "KMnO₄",
		category: "oxidizers",
		state: "s",
		color: "#6b1f8a",
		hint: "Purple crystals; decolourises in redox."
	},
	{
		id: "h2o2",
		name: "Hydrogen peroxide",
		formula: "H₂O₂",
		category: "oxidizers",
		state: "l",
		color: "#eef6ff",
		hint: "Decomposes on heating to water and oxygen."
	},
	{
		id: "phph",
		name: "Phenolphthalein",
		formula: "C₂₀H₁₄O₄",
		category: "indicators",
		state: "aq",
		color: "#f4c4d4",
		hint: "Colourless in acid, pink in base."
	},
	{
		id: "methylorange",
		name: "Methyl orange",
		formula: "C₁₄H₁₄N₃NaO₃S",
		category: "indicators",
		state: "aq",
		color: "#e07a2a",
		hint: "Red in acid, yellow in base."
	},
	{
		id: "universal",
		name: "Universal indicator",
		formula: "UI",
		category: "indicators",
		state: "aq",
		color: "#4cd964",
		hint: "Red → purple across the pH scale."
	},
	{
		id: "h2o",
		name: "Water",
		formula: "H₂O",
		category: "solvents",
		state: "l",
		color: "#6ec8e8",
		hint: "Universal solvent of the lab."
	},
	{
		id: "alcohol",
		name: "Alcohol",
		formula: "C₂H₅OH",
		category: "solvents",
		state: "l",
		color: "#dcefff",
		hint: "Ethanol used as solvent."
	}
];
var LAB_REACTIONS = [
	{
		id: "na-h2o",
		reagents: ["na", "h2o"],
		needsHeat: false,
		title: "Sodium in water",
		equation: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)",
		observation: "Metal darts on the surface; fizzing of H₂; solution becomes strongly alkaline (phenolphthalein would turn pink).",
		type: "Displacement · Exothermic",
		ncert: "Ch 3 — metals above hydrogen react with water. Sodium is stored in kerosene because the reaction with moisture is vigorous and exothermic.",
		flaskColor: "#d9f4ea",
		effects: {
			bubbles: true,
			steam: true,
			glow: true
		}
	},
	{
		id: "k-h2o",
		reagents: ["k", "h2o"],
		needsHeat: false,
		title: "Potassium in water",
		equation: "2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)",
		observation: "Even more vigorous than sodium; hydrogen often catches fire with a lilac flame.",
		type: "Displacement · Exothermic",
		ncert: "Ch 3 — potassium is the most reactive metal in the Class 10 series and reacts violently with cold water.",
		flaskColor: "#e4d4f4",
		effects: {
			bubbles: true,
			steam: true,
			flame: true,
			glow: true
		}
	},
	{
		id: "ca-h2o",
		reagents: ["ca", "h2o"],
		needsHeat: false,
		title: "Calcium in water",
		equation: "Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)",
		observation: "Steady fizzing; solution turns milky as slightly soluble Ca(OH)₂ forms.",
		type: "Displacement · Exothermic",
		ncert: "Ch 3 — calcium reacts with cold water, less violently than Na/K. The milky look is slaked lime.",
		flaskColor: "#f2efe4",
		effects: {
			bubbles: true,
			precipitate: "#f4f1ea"
		}
	},
	{
		id: "mg-h2o-heat",
		reagents: ["mg", "h2o"],
		needsHeat: true,
		title: "Magnesium and steam",
		equation: "Mg(s) + 2H₂O(g) → MgO(s) + H₂(g)",
		observation: "With steam / strong heating, white MgO and hydrogen form. Cold water is too slow to see.",
		type: "Displacement · Requires heat",
		ncert: "Ch 3 — Mg does not react readily with cold water but reacts with steam. Clean the ribbon first.",
		flaskColor: "#f4f6f8",
		effects: {
			steam: true,
			glow: true,
			bubbles: true
		}
	},
	{
		id: "zn-hcl",
		reagents: ["zn", "hcl"],
		needsHeat: false,
		title: "Zinc in dilute HCl",
		equation: "Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)",
		observation: "Brisk effervescence; colourless gas burns with a pop (hydrogen).",
		type: "Displacement · Acid + metal",
		ncert: "Ch 2 / Ch 3 — metals above hydrogen displace H₂ from dilute acids. Pop test confirms hydrogen.",
		flaskColor: "#dce8ea",
		effects: { bubbles: true }
	},
	{
		id: "mg-hcl",
		reagents: ["mg", "hcl"],
		needsHeat: false,
		title: "Magnesium in dilute HCl",
		equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
		observation: "Rapid bubbling of hydrogen; flask warms slightly.",
		type: "Displacement · Exothermic",
		ncert: "Ch 2 — acid + metal → salt + hydrogen. Mg is more reactive than Zn, so the fizz is faster.",
		flaskColor: "#d7ecec",
		effects: {
			bubbles: true,
			glow: true
		}
	},
	{
		id: "fe-hcl",
		reagents: ["fe", "hcl"],
		needsHeat: false,
		title: "Iron in dilute HCl",
		equation: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)",
		observation: "Slow fizzing; pale green Fe²⁺ solution forms.",
		type: "Displacement · Acid + metal",
		ncert: "Ch 3 — iron is above hydrogen, so H₂ is evolved. Rate is slower than Zn or Mg.",
		flaskColor: "#c5d9c4",
		effects: { bubbles: true }
	},
	{
		id: "al-hcl",
		reagents: ["al", "hcl"],
		needsHeat: false,
		title: "Aluminium in dilute HCl",
		equation: "2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)",
		observation: "After the oxide film is breached, rapid hydrogen evolution.",
		type: "Displacement · Acid + metal",
		ncert: "Ch 3 — Al is high in the series but the oxide coat can delay the start. Once it starts, it is vigorous.",
		flaskColor: "#d9e4ea",
		effects: { bubbles: true }
	},
	{
		id: "zn-h2so4",
		reagents: ["zn", "h2so4"],
		needsHeat: false,
		title: "Zinc in dilute sulfuric acid",
		equation: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)",
		observation: "Brisk hydrogen bubbles; colourless ZnSO₄ solution.",
		type: "Displacement · Acid + metal",
		ncert: "Ch 2 — same pattern as HCl. Dilute H₂SO₄ is the usual laboratory preparation of hydrogen with Zn.",
		flaskColor: "#e8e6c8",
		effects: { bubbles: true }
	},
	{
		id: "cu-hcl-none",
		reagents: ["cu", "hcl"],
		needsHeat: false,
		title: "Copper in dilute HCl",
		equation: "No reaction",
		observation: "No hydrogen, no colour change. Copper sits unreacted.",
		type: "No reaction",
		ncert: "Ch 3 — copper is below hydrogen in the reactivity series, so it cannot displace H₂ from dilute acids. A frequent 1-mark trap.",
		flaskColor: "#c46a3a",
		effects: {}
	},
	{
		id: "cu-h2o-none",
		reagents: ["cu", "h2o"],
		needsHeat: false,
		title: "Copper in water",
		equation: "No reaction",
		observation: "Copper does not react with water (cold or steam) under lab conditions.",
		type: "No reaction",
		ncert: "Ch 3 — metals below hydrogen (Cu, Ag, Au) do not react with water. Contrast with Na, Ca, Mg.",
		flaskColor: "#6ec8e8",
		effects: {}
	},
	{
		id: "zn-cuso4",
		reagents: ["zn", "cuso4"],
		needsHeat: false,
		title: "Zinc displaces copper",
		equation: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
		observation: "Blue colour of CuSO₄ fades; reddish-brown copper coats the zinc.",
		type: "Single displacement",
		ncert: "Ch 1 / Ch 3 — a more reactive metal displaces a less reactive metal from its salt. Zn > Cu.",
		flaskColor: "#8fbc8f",
		effects: { precipitate: "#c46a3a" }
	},
	{
		id: "fe-cuso4",
		reagents: ["fe", "cuso4"],
		needsHeat: false,
		title: "Iron displaces copper",
		equation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
		observation: "Blue solution turns pale green; reddish-brown copper deposits on iron.",
		type: "Single displacement",
		ncert: "Ch 1 — the iron nail in copper sulfate experiment. Fe is above Cu in the series.",
		flaskColor: "#6a9a6a",
		effects: { precipitate: "#c46a3a" }
	},
	{
		id: "pb-cuso4",
		reagents: ["pb", "cuso4"],
		needsHeat: false,
		title: "Lead displaces copper",
		equation: "Pb(s) + CuSO₄(aq) → PbSO₄(s) + Cu(s)",
		observation: "Blue fades; brown copper appears. (PbSO₄ is sparingly soluble.)",
		type: "Single displacement",
		ncert: "Ch 3 — Pb is above Cu, so displacement is allowed, though slower than Zn or Fe.",
		flaskColor: "#7aa3c4",
		effects: { precipitate: "#c46a3a" }
	},
	{
		id: "cu-agno3",
		reagents: ["cu", "agno3"],
		needsHeat: false,
		title: "Copper displaces silver",
		equation: "Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)",
		observation: "Silver crystals appear; solution turns blue due to Cu²⁺.",
		type: "Single displacement",
		ncert: "Ch 3 — Cu is more reactive than Ag. A textbook illustration of the series below hydrogen.",
		flaskColor: "#3b82c4",
		effects: { precipitate: "#e8edf2" }
	},
	{
		id: "hcl-naoh",
		reagents: ["hcl", "naoh"],
		needsHeat: false,
		title: "Neutralisation — HCl + NaOH",
		equation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
		observation: "Solution warms; mixture becomes colourless salt solution. With phenolphthalein, pink → colourless at end point.",
		type: "Neutralisation · Exothermic",
		ncert: "Ch 2 — acid + base → salt + water. Heat released shows it is exothermic. NaCl is a neutral salt.",
		flaskColor: "#e8eef2",
		effects: { glow: true }
	},
	{
		id: "h2so4-naoh",
		reagents: ["h2so4", "naoh"],
		needsHeat: false,
		title: "Neutralisation — H₂SO₄ + NaOH",
		equation: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)",
		observation: "Flask warms; colourless sodium sulfate solution.",
		type: "Neutralisation · Exothermic",
		ncert: "Ch 2 — diprotic acid needs two moles of NaOH. Remember the 1 : 2 ratio for a balanced equation.",
		flaskColor: "#eee8c8",
		effects: { glow: true }
	},
	{
		id: "hno3-naoh",
		reagents: ["hno3", "naoh"],
		needsHeat: false,
		title: "Neutralisation — HNO₃ + NaOH",
		equation: "HNO₃(aq) + NaOH(aq) → NaNO₃(aq) + H₂O(l)",
		observation: "Heat evolved; colourless sodium nitrate solution.",
		type: "Neutralisation · Exothermic",
		ncert: "Ch 2 — same pattern: acid + base → salt + water. NaNO₃ is used in fertilisers.",
		flaskColor: "#f3e6c4",
		effects: { glow: true }
	},
	{
		id: "hcl-caoh2",
		reagents: ["hcl", "caoh2"],
		needsHeat: false,
		title: "Neutralisation — HCl + slaked lime",
		equation: "2HCl(aq) + Ca(OH)₂(aq) → CaCl₂(aq) + 2H₂O(l)",
		observation: "Milky lime water clears as soluble CaCl₂ forms; mixture warms.",
		type: "Neutralisation",
		ncert: "Ch 2 — hydroxides are bases. Ca(OH)₂ is used to treat acidic soil — same chemistry.",
		flaskColor: "#eef2f0",
		effects: { glow: true }
	},
	{
		id: "hcl-nh4oh",
		reagents: ["hcl", "nh4oh"],
		needsHeat: false,
		title: "Neutralisation — HCl + NH₄OH",
		equation: "HCl(aq) + NH₄OH(aq) → NH₄Cl(aq) + H₂O(l)",
		observation: "White fumes of NH₄Cl if concentrated; otherwise a colourless ammonium chloride solution.",
		type: "Neutralisation",
		ncert: "Ch 2 — NH₄Cl is the salt of a strong acid and weak base, so its solution is acidic — a board favourite.",
		flaskColor: "#eef0f4",
		effects: { steam: true }
	},
	{
		id: "ch3cooh-naoh",
		reagents: ["ch3cooh", "naoh"],
		needsHeat: false,
		title: "Neutralisation — ethanoic acid",
		equation: "CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)",
		observation: "Vinegar smell fades; sodium ethanoate solution forms. Phenolphthalein stays pink until acid is in excess.",
		type: "Neutralisation",
		ncert: "Ch 4 — ethanoic acid is a weak acid but still undergoes neutralisation. Salt is sodium ethanoate.",
		flaskColor: "#f4ead4",
		effects: {}
	},
	{
		id: "na2co3-hcl",
		reagents: ["na2co3", "hcl"],
		needsHeat: false,
		title: "Carbonate + acid",
		equation: "Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)",
		observation: "Brisk effervescence of CO₂; gas turns lime water milky.",
		type: "Acid + carbonate",
		ncert: "Ch 2 — all metal carbonates give CO₂ with acids. Test: lime water milky. Do not confuse with H₂ (pop test).",
		flaskColor: "#e8eef2",
		effects: { bubbles: true }
	},
	{
		id: "nahco3-hcl",
		reagents: ["nahco3", "hcl"],
		needsHeat: false,
		title: "Hydrogencarbonate + acid",
		equation: "NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)",
		observation: "Immediate fizzing of carbon dioxide.",
		type: "Acid + hydrogencarbonate",
		ncert: "Ch 2 — baking soda with acid is the same CO₂ test used in fire extinguishers and cooking.",
		flaskColor: "#eaf2f4",
		effects: { bubbles: true }
	},
	{
		id: "caco3-hcl",
		reagents: ["caco3", "hcl"],
		needsHeat: false,
		title: "Marble / limestone + HCl",
		equation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
		observation: "Chips fizz; colourless gas evolved (CO₂).",
		type: "Acid + carbonate",
		ncert: "Ch 2 — marble / chalk / egg shell all contain CaCO₃. This is the chemical test for carbonates.",
		flaskColor: "#ece8dc",
		effects: { bubbles: true }
	},
	{
		id: "na2co3-h2so4",
		reagents: ["na2co3", "h2so4"],
		needsHeat: false,
		title: "Washing soda + sulfuric acid",
		equation: "Na₂CO₃(s) + H₂SO₄(aq) → Na₂SO₄(aq) + H₂O(l) + CO₂(g)",
		observation: "Brisk CO₂ bubbles; colourless sodium sulfate solution.",
		type: "Acid + carbonate",
		ncert: "Ch 2 — same carbonate test with a different acid. Gas is always CO₂, never SO₂ here.",
		flaskColor: "#eee8c4",
		effects: { bubbles: true }
	},
	{
		id: "caoh2-co2",
		reagents: ["caoh2", "co2"],
		needsHeat: false,
		title: "Lime water test",
		equation: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
		observation: "Lime water turns milky due to insoluble CaCO₃. Excess CO₂ clears it (Ca(HCO₃)₂).",
		type: "Base + acidic oxide",
		ncert: "Ch 1 / Ch 2 — the standard laboratory test for CO₂. Excess CO₂ dissolving the ppt is a frequent follow-up.",
		flaskColor: "#f4f1ea",
		effects: { precipitate: "#f7f4ee" }
	},
	{
		id: "cao-h2o",
		reagents: ["cao", "h2o"],
		needsHeat: false,
		title: "Slaking of lime",
		equation: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat",
		observation: "Hissing; mixture becomes hot; slaked lime forms.",
		type: "Combination · Exothermic",
		ncert: "Ch 1 — quicklime + water is the classic exothermic combination. Used in whitewashing.",
		flaskColor: "#f2efe4",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "cuso4-naoh",
		reagents: ["cuso4", "naoh"],
		needsHeat: false,
		title: "Blue hydroxide precipitate",
		equation: "CuSO₄(aq) + 2NaOH(aq) → Cu(OH)₂(s) + Na₂SO₄(aq)",
		observation: "Pale blue gelatinous precipitate of Cu(OH)₂.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 / Ch 2 — ionic exchange. Colour of the ppt is a colour-atlas staple (blue Cu(OH)₂).",
		flaskColor: "#5ba3e8",
		effects: { precipitate: "#7ec8f4" }
	},
	{
		id: "feso4-naoh",
		reagents: ["feso4", "naoh"],
		needsHeat: false,
		title: "Dirty-green hydroxide",
		equation: "FeSO₄(aq) + 2NaOH(aq) → Fe(OH)₂(s) + Na₂SO₄(aq)",
		observation: "Dirty green Fe(OH)₂ ppt, slowly turning brown on standing (oxidation to Fe(OH)₃).",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — Fe²⁺ salts give dirty green hydroxide. Contrast with Fe³⁺ (reddish-brown).",
		flaskColor: "#6a8f5a",
		effects: { precipitate: "#6b7f3a" }
	},
	{
		id: "fecl3-naoh",
		reagents: ["fecl3", "naoh"],
		needsHeat: false,
		title: "Reddish-brown hydroxide",
		equation: "FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s) + 3NaCl(aq)",
		observation: "Reddish-brown gelatinous ppt of Fe(OH)₃.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — Fe³⁺ identification. Do not write Fe(OH)₂ here.",
		flaskColor: "#b4532a",
		effects: { precipitate: "#a33b24" }
	},
	{
		id: "bacl2-h2so4",
		reagents: ["bacl2", "h2so4"],
		needsHeat: false,
		title: "Barium sulfate white ppt",
		equation: "BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2HCl(aq)",
		observation: "Immediate white precipitate of BaSO₄, insoluble in acids.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — the sulfate ion test. White ppt insoluble in HCl distinguishes sulfate from sulfite / carbonate.",
		flaskColor: "#f4f4f0",
		effects: { precipitate: "#f7f7f2" }
	},
	{
		id: "agno3-nacl",
		reagents: ["agno3", "nacl"],
		needsHeat: false,
		title: "Silver chloride white ppt",
		equation: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
		observation: "White curdy ppt of AgCl; darkens on standing in light.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — chloride ion test. AgCl is soluble in NH₄OH (not asked as a step, but the white ppt is).",
		flaskColor: "#f2f0e8",
		effects: { precipitate: "#f7f6f0" }
	},
	{
		id: "agno3-hcl",
		reagents: ["agno3", "hcl"],
		needsHeat: false,
		title: "AgNO₃ + HCl",
		equation: "AgNO₃(aq) + HCl(aq) → AgCl(s) + HNO₃(aq)",
		observation: "White curdy AgCl precipitate.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — same chloride test using hydrochloric acid as the Cl⁻ source.",
		flaskColor: "#f1eee6",
		effects: { precipitate: "#f7f6f0" }
	},
	{
		id: "pbno3-ki",
		reagents: ["pbno3", "ki"],
		needsHeat: false,
		title: "Golden rain — PbI₂",
		equation: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)",
		observation: "Bright yellow precipitate of lead iodide.",
		type: "Double displacement · Precipitation",
		ncert: "Ch 1 — the most-photographed yellow ppt in Class 10. Recrystallises from hot water as golden crystals.",
		flaskColor: "#f0d24a",
		effects: { precipitate: "#e3c84a" }
	},
	{
		id: "na-cl2",
		reagents: ["na", "cl2"],
		needsHeat: false,
		title: "Formation of sodium chloride",
		equation: "2Na(s) + Cl₂(g) → 2NaCl(s)",
		observation: "Bright yellow flame; white NaCl smoke / solid.",
		type: "Combination · Redox",
		ncert: "Ch 1 / Ch 3 — sodium is oxidised, chlorine is reduced. Product is common salt.",
		flaskColor: "#f7f8fb",
		effects: {
			flame: true,
			glow: true
		}
	},
	{
		id: "h2-cl2",
		reagents: ["h2", "cl2"],
		needsHeat: true,
		title: "Hydrogen chloride gas",
		equation: "H₂(g) + Cl₂(g) → 2HCl(g)",
		observation: "With sunlight / heat, colourless HCl gas forms; greenish chlorine colour fades.",
		type: "Combination · Photochemical",
		ncert: "Ch 1 — combination of two non-metals. Often quoted as a photochemical combination.",
		flaskColor: "#eef4ee",
		effects: { glow: true }
	},
	{
		id: "h2-o2-heat",
		reagents: ["h2", "o2"],
		needsHeat: true,
		title: "Formation of water",
		equation: "2H₂(g) + O₂(g) → 2H₂O(l)",
		observation: "Explosive pop if ignited; droplets of water form.",
		type: "Combination · Exothermic",
		ncert: "Ch 1 — remember the 2 : 1 volume ratio. Highly exothermic combination.",
		flaskColor: "#6ec8e8",
		effects: {
			flame: true,
			steam: true,
			glow: true
		}
	},
	{
		id: "mg-o2-heat",
		reagents: ["mg", "o2"],
		needsHeat: true,
		title: "Burning magnesium",
		equation: "2Mg(s) + O₂(g) → 2MgO(s)",
		observation: "Dazzling white flame; white ash of MgO.",
		type: "Combination · Oxidation",
		ncert: "Ch 1 — clean the ribbon with sandpaper. Mg is oxidised; this is the classic combination example.",
		flaskColor: "#f6f7f8",
		effects: {
			flame: true,
			glow: true
		}
	},
	{
		id: "cu-o2-heat",
		reagents: ["cu", "o2"],
		needsHeat: true,
		title: "Black copper oxide",
		equation: "2Cu(s) + O₂(g) → 2CuO(s)",
		observation: "Reddish-brown copper turns black on heating in air.",
		type: "Combination · Oxidation",
		ncert: "Ch 1 / Ch 3 — heating copper in air. Reverse: CuO + H₂ on heating reduces it back to Cu.",
		flaskColor: "#1f2a36",
		effects: {
			glow: true,
			steam: true
		}
	},
	{
		id: "c-o2-heat",
		reagents: ["c", "o2"],
		needsHeat: true,
		title: "Combustion of carbon",
		equation: "C(s) + O₂(g) → CO₂(g)",
		observation: "Glowing coal; colourless CO₂ evolved (lime water milky).",
		type: "Combination · Combustion",
		ncert: "Ch 1 / Ch 4 — complete combustion in sufficient oxygen gives CO₂, not CO.",
		flaskColor: "#4a5560",
		effects: {
			glow: true,
			steam: true
		}
	},
	{
		id: "s-o2-heat",
		reagents: ["s", "o2"],
		needsHeat: true,
		title: "Burning sulfur",
		equation: "S(s) + O₂(g) → SO₂(g)",
		observation: "Blue flame; choking smell of burning sulfur.",
		type: "Combination · Combustion",
		ncert: "Ch 1 — SO₂ is an acidic oxide; turns moist blue litmus red.",
		flaskColor: "#d4c46a",
		effects: {
			flame: true,
			steam: true
		}
	},
	{
		id: "p-o2-heat",
		reagents: ["p", "o2"],
		needsHeat: true,
		title: "Burning phosphorus",
		equation: "P₄(s) + 5O₂(g) → P₄O₁₀(s)",
		observation: "Brilliant yellow-white flame; dense white fumes of phosphorus pentoxide.",
		type: "Combination · Combustion",
		ncert: "Ch 1 — white phosphorus is stored in water for this reason. Product is P₄O₁₀ (or P₂O₅ in older books).",
		flaskColor: "#f4e0c4",
		effects: {
			flame: true,
			steam: true,
			glow: true
		}
	},
	{
		id: "fe-s-heat",
		reagents: ["fe", "s"],
		needsHeat: true,
		title: "Iron sulfide",
		equation: "Fe(s) + S(s) → FeS(s)",
		observation: "Mixture glows red; black iron sulfide forms. Properties differ from both elements.",
		type: "Combination",
		ncert: "Ch 1 — a compound, not a mixture: FeS is not attracted to a magnet the way iron is.",
		flaskColor: "#2a2e32",
		effects: { glow: true }
	},
	{
		id: "caco3-heat",
		reagents: ["caco3"],
		needsHeat: true,
		title: "Thermal decomposition of limestone",
		equation: "CaCO₃(s) → CaO(s) + CO₂(g)",
		observation: "White quicklime remains; CO₂ evolved (lime water milky).",
		type: "Thermal decomposition",
		ncert: "Ch 1 — lime kiln chemistry. Reverse is CaO + CO₂. Do not write this as a displacement.",
		flaskColor: "#f2efe6",
		effects: {
			steam: true,
			bubbles: true
		}
	},
	{
		id: "cuso4-heat",
		reagents: ["cuso4"],
		needsHeat: true,
		title: "Dehydration of blue vitriol",
		equation: "CuSO₄·5H₂O(s) → CuSO₄(s) + 5H₂O(g)",
		observation: "Blue crystals turn white; steam given off. Add a drop of water and the blue returns (exothermic).",
		type: "Thermal decomposition · Dehydration",
		ncert: "Ch 1 / Ch 2 — water of crystallisation. White anhydrous CuSO₄ is the test for water / moisture.",
		flaskColor: "#f4f4f0",
		effects: { steam: true }
	},
	{
		id: "feso4-heat",
		reagents: ["feso4"],
		needsHeat: true,
		title: "Heating ferrous sulfate",
		equation: "2FeSO₄(s) → Fe₂O₃(s) + SO₂(g) + SO₃(g)",
		observation: "Green crystals → reddish-brown Fe₂O₃; smell of burning sulfur.",
		type: "Thermal decomposition",
		ncert: "Ch 1 — two gases, SO₂ and SO₃. Residue is ferric oxide. A must-write equation.",
		flaskColor: "#a33b24",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "pbno3-heat",
		reagents: ["pbno3"],
		needsHeat: true,
		title: "Heating lead nitrate",
		equation: "2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)",
		observation: "Crackling; dense brown NO₂ fumes; yellow PbO residue.",
		type: "Thermal decomposition",
		ncert: "Ch 1 — brown fumes = NO₂, not NO or N₂O. Yellow residue is litharge (PbO).",
		flaskColor: "#c9a227",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "kmno4-heat",
		reagents: ["kmno4"],
		needsHeat: true,
		title: "Heating KMnO₄",
		equation: "2KMnO₄(s) → K₂MnO₄(s) + MnO₂(s) + O₂(g)",
		observation: "Purple crystals give oxygen (relights a glowing splint); dark residue.",
		type: "Thermal decomposition",
		ncert: "Ch 1 — laboratory preparation of oxygen. Residue is potassium manganate + MnO₂.",
		flaskColor: "#3a2048",
		effects: {
			bubbles: true,
			glow: true
		}
	},
	{
		id: "h2o2-heat",
		reagents: ["h2o2"],
		needsHeat: true,
		title: "Decomposition of hydrogen peroxide",
		equation: "2H₂O₂(l) → 2H₂O(l) + O₂(g)",
		observation: "Bubbling of oxygen; glowing splint relights. MnO₂ (if present) catalyses even without heat.",
		type: "Thermal decomposition",
		ncert: "Ch 1 — catalytic decomposition is also accepted. Oxygen relights a glowing splint.",
		flaskColor: "#cfe8f8",
		effects: {
			bubbles: true,
			steam: true
		}
	},
	{
		id: "zno-heat",
		reagents: ["zno"],
		needsHeat: true,
		title: "Zinc oxide — hot and cold",
		equation: "ZnO (white, cold) ⇌ ZnO (yellow, hot)",
		observation: "White powder turns yellow on heating and white again on cooling. No new substance.",
		type: "Physical change · Reversible",
		ncert: "Ch 1 / Ch 3 — frequently asked: it is NOT a chemical reaction. Colour change is due to a slight non-stoichiometry on heating.",
		flaskColor: "#e3c84a",
		effects: { glow: true }
	},
	{
		id: "cuo-h2-heat",
		reagents: ["cuo", "h2"],
		needsHeat: true,
		title: "Reduction of copper oxide",
		equation: "CuO(s) + H₂(g) → Cu(s) + H₂O(g)",
		observation: "Black CuO turns reddish-brown copper; water droplets in the cooler part of the tube.",
		type: "Redox · Reduction of metal oxide",
		ncert: "Ch 3 — hydrogen is a reducing agent. CuO is reduced, H₂ is oxidised to water.",
		flaskColor: "#c46a3a",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "cuo-c-heat",
		reagents: ["cuo", "c"],
		needsHeat: true,
		title: "Carbon reduces CuO",
		equation: "2CuO(s) + C(s) → 2Cu(s) + CO₂(g)",
		observation: "Black mixture yields reddish copper; CO₂ evolved.",
		type: "Redox · Extraction",
		ncert: "Ch 3 — carbon reduces oxides of metals low in the series (Cu, Pb, Fe in the blast furnace is related).",
		flaskColor: "#c46a3a",
		effects: {
			glow: true,
			steam: true
		}
	},
	{
		id: "fe2o3-al-heat",
		reagents: ["fe2o3", "al"],
		needsHeat: true,
		title: "Thermite reaction",
		equation: "Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat",
		observation: "Once ignited, molten iron and white Al₂O₃ form with intense heat.",
		type: "Displacement · Redox · Highly exothermic",
		ncert: "Ch 3 — thermite welding of railway tracks. Al is more reactive than Fe, so it reduces Fe₂O₃.",
		flaskColor: "#c46a3a",
		effects: {
			flame: true,
			glow: true,
			steam: true
		}
	},
	{
		id: "phph-naoh",
		reagents: ["phph", "naoh"],
		needsHeat: false,
		title: "Phenolphthalein in base",
		equation: "Phenolphthalein (colourless) → pink in alkaline medium",
		observation: "Colourless indicator turns bright pink.",
		type: "Indicator",
		ncert: "Ch 2 — phenolphthalein is colourless in acid, pink in base. Used to find the end point of a titration.",
		flaskColor: "#e86aa0",
		effects: { glow: true }
	},
	{
		id: "phph-hcl",
		reagents: ["phph", "hcl"],
		needsHeat: false,
		title: "Phenolphthalein in acid",
		equation: "Phenolphthalein remains colourless in acid",
		observation: "No pink colour. Solution stays colourless.",
		type: "Indicator",
		ncert: "Ch 2 — if the student writes 'red' for phenolphthalein in acid, marks are lost. It is colourless.",
		flaskColor: "#f4e8ee",
		effects: {}
	},
	{
		id: "methylorange-hcl",
		reagents: ["methylorange", "hcl"],
		needsHeat: false,
		title: "Methyl orange in acid",
		equation: "Methyl orange → red in acid",
		observation: "Indicator turns red / pink-red.",
		type: "Indicator",
		ncert: "Ch 2 — methyl orange: red in acid, yellow in base. Do not confuse with phenolphthalein.",
		flaskColor: "#d4544a",
		effects: {}
	},
	{
		id: "methylorange-naoh",
		reagents: ["methylorange", "naoh"],
		needsHeat: false,
		title: "Methyl orange in base",
		equation: "Methyl orange → yellow in base",
		observation: "Indicator turns yellow.",
		type: "Indicator",
		ncert: "Ch 2 — yellow in alkaline medium. Universal indicator is preferred when a pH number is asked.",
		flaskColor: "#e3c84a",
		effects: {}
	},
	{
		id: "universal-hcl",
		reagents: ["universal", "hcl"],
		needsHeat: false,
		title: "Universal indicator in acid",
		equation: "UI → red / orange (pH ≈ 1–3)",
		observation: "Strong red for dilute HCl (pH ~ 1).",
		type: "Indicator",
		ncert: "Ch 2 — universal indicator is a mixture; colour maps onto the pH scale. Gastric juice is ~1.2.",
		flaskColor: "#d4543a",
		effects: {}
	},
	{
		id: "universal-naoh",
		reagents: ["universal", "naoh"],
		needsHeat: false,
		title: "Universal indicator in base",
		equation: "UI → blue / purple (pH ≈ 13–14)",
		observation: "Deep blue-purple for NaOH (pH ~ 14).",
		type: "Indicator",
		ncert: "Ch 2 — sodium hydroxide sits at the top of the pH strip (~14). Green is neutral (pH 7).",
		flaskColor: "#5b4ad4",
		effects: { glow: true }
	},
	{
		id: "universal-h2o",
		reagents: ["universal", "h2o"],
		needsHeat: false,
		title: "Universal indicator in water",
		equation: "UI → green (pH = 7)",
		observation: "Green, showing a neutral solution.",
		type: "Indicator",
		ncert: "Ch 2 — pure water is neutral, pH 7. Distilled water is the reference, not tap water.",
		flaskColor: "#4cd964",
		effects: {}
	},
	{
		id: "ethanol-na",
		reagents: ["ethanol", "na"],
		needsHeat: false,
		title: "Sodium in ethanol",
		equation: "2C₂H₅OH(l) + 2Na(s) → 2C₂H₅ONa(aq) + H₂(g)",
		observation: "Steady hydrogen evolution (less violent than water); sodium ethoxide remains.",
		type: "Displacement",
		ncert: "Ch 4 — alcohols react with sodium to give H₂. This is a test that ethanol contains a replaceable hydrogen.",
		flaskColor: "#dcefff",
		effects: { bubbles: true }
	},
	{
		id: "ethanol-ethanoic-heat",
		reagents: ["ethanol", "ethanoic"],
		needsHeat: true,
		title: "Esterification",
		equation: "CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l)",
		observation: "Sweet, fruity smell of ethyl ethanoate. Concentrated H₂SO₄ (if added) is the catalyst.",
		type: "Esterification · Reversible",
		ncert: "Ch 4 — warm with a few drops of conc. H₂SO₄. Esters have fruity smells and are used in flavourings.",
		flaskColor: "#f0d9a0",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "ethanol-ethanoic-h2so4",
		reagents: [
			"ethanol",
			"ethanoic",
			"h2so4"
		],
		needsHeat: true,
		title: "Catalysed esterification",
		equation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O   (conc. H₂SO₄, heat)",
		observation: "Fruity ethyl ethanoate odour. Acid catalyst also absorbs water, shifting equilibrium forward.",
		type: "Esterification · Catalysed",
		ncert: "Ch 4 — write the condition: conc. H₂SO₄ and heat. Product is an ester, not an ether.",
		flaskColor: "#e8c878",
		effects: {
			steam: true,
			glow: true
		}
	},
	{
		id: "ethanol-h2so4-heat",
		reagents: ["ethanol", "h2so4"],
		needsHeat: true,
		title: "Dehydration of ethanol",
		equation: "C₂H₅OH(l) → C₂H₄(g) + H₂O(l)   (conc. H₂SO₄, 443 K)",
		observation: "Ethene gas evolved; can be collected over water. Burns with a yellow flame.",
		type: "Dehydration",
		ncert: "Ch 4 — hot conc. H₂SO₄ dehydrates ethanol to ethene. Temperature 443 K is often asked.",
		flaskColor: "#ddd6a8",
		effects: {
			bubbles: true,
			steam: true
		}
	},
	{
		id: "methane-o2-heat",
		reagents: ["methane", "o2"],
		needsHeat: true,
		title: "Combustion of methane",
		equation: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Heat",
		observation: "Blue flame if complete; heat and light. Incomplete combustion gives a sooty yellow flame + CO.",
		type: "Combustion · Exothermic",
		ncert: "Ch 1 / Ch 4 — natural gas is mainly methane. Write state symbols. Complete vs incomplete is a common split question.",
		flaskColor: "#7dd3fc",
		effects: {
			flame: true,
			steam: true,
			glow: true
		}
	},
	{
		id: "ethanol-o2-heat",
		reagents: ["ethanol", "o2"],
		needsHeat: true,
		title: "Combustion of ethanol",
		equation: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(g) + Heat",
		observation: "Clean blue flame; used as a fuel / spirit lamp.",
		type: "Combustion · Exothermic",
		ncert: "Ch 4 — alcohols burn in air giving CO₂ and water. This is why ethanol is blended into fuels.",
		flaskColor: "#8ecae6",
		effects: {
			flame: true,
			steam: true,
			glow: true
		}
	},
	{
		id: "kmno4-hcl",
		reagents: ["kmno4", "hcl"],
		needsHeat: false,
		title: "KMnO₄ oxidises HCl",
		equation: "2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O",
		observation: "Purple colour fades; greenish-yellow chlorine evolved (bleach smell).",
		type: "Redox",
		ncert: "Ch 1 / Ch 3 — KMnO₄ is a strong oxidising agent. Cl⁻ is oxidised to Cl₂. Handle chlorine conceptually, not in a real lab without a fume hood.",
		flaskColor: "#8fbc5a",
		effects: {
			bubbles: true,
			steam: true
		}
	},
	{
		id: "kmno4-feso4-h2so4",
		reagents: [
			"kmno4",
			"feso4",
			"h2so4"
		],
		needsHeat: false,
		title: "Acidified permanganate redox",
		equation: "2KMnO₄ + 8H₂SO₄ + 10FeSO₄ → K₂SO₄ + 2MnSO₄ + 5Fe₂(SO₄)₃ + 8H₂O",
		observation: "Purple KMnO₄ decolourises as Fe²⁺ is oxidised to Fe³⁺.",
		type: "Redox",
		ncert: "Ch 1 — decolourisation of acidified KMnO₄ is a standard test that Fe²⁺ (or many reductants) is present.",
		flaskColor: "#c5b86a",
		effects: { glow: true }
	},
	{
		id: "kmno4-h2o2",
		reagents: ["kmno4", "h2o2"],
		needsHeat: false,
		title: "Permanganate + peroxide",
		equation: "2KMnO₄ + 3H₂SO₄ + 5H₂O₂ → K₂SO₄ + 2MnSO₄ + 8H₂O + 5O₂",
		observation: "Purple fades with brisk oxygen bubbling. (Acid makes the decolourisation clean.)",
		type: "Redox",
		ncert: "Ch 1 — both KMnO₄ and H₂O₂ are oxidisers, but peroxide acts as a reductant towards acidified permanganate.",
		flaskColor: "#c8c07a",
		effects: { bubbles: true }
	},
	{
		id: "cl2-h2o",
		reagents: ["cl2", "h2o"],
		needsHeat: false,
		title: "Chlorine water",
		equation: "Cl₂(g) + H₂O(l) → HCl(aq) + HOCl(aq)",
		observation: "Greenish-yellow gas dissolves; solution bleaches moist litmus (after turning red).",
		type: "Combination / hydrolysis",
		ncert: "Ch 2 — bleaching action of chlorine is due to nascent oxygen from HOCl. Moist blue litmus: red, then white.",
		flaskColor: "#c5e08a",
		effects: {}
	}
];
var ALLOYS = [
	{
		id: "brass",
		metals: ["cu", "zn"],
		name: "Brass",
		composition: [{
			label: "Cu",
			pct: 70
		}, {
			label: "Zn",
			pct: 30
		}],
		properties: "Golden, sonorous, malleable, takes a high polish.",
		hardness: "Harder than copper",
		corrosion: "Better than iron; tarnishes slowly",
		melting: "Lower than pure copper (~900–940 °C)",
		uses: "Utensils, decorative hardware, musical instruments, screws, jewellery findings.",
		ncert: "Ch 3 — brass is Cu + Zn. Examiners love 'why not a pure metal?' — alloys are harder and more corrosion-resistant.",
		meltColor: "#d4a44a"
	},
	{
		id: "bronze",
		metals: ["cu", "sn"],
		name: "Bronze",
		composition: [{
			label: "Cu",
			pct: 90
		}, {
			label: "Sn",
			pct: 10
		}],
		properties: "Hard, sonorous, resists corrosion in air and water.",
		hardness: "Harder than brass for statues / bells",
		corrosion: "Excellent — forms a protective patina",
		melting: "~950 °C",
		uses: "Statues, medals, bells, cannon, marine fittings.",
		ncert: "Ch 3 — bronze is Cu + Sn. Contrast with brass (Cu + Zn). Bronze medals vs brass instruments is a useful memory hook.",
		meltColor: "#b87333"
	},
	{
		id: "steel",
		metals: ["fe", "c"],
		name: "Steel",
		composition: [{
			label: "Fe",
			pct: 99
		}, {
			label: "C",
			pct: 1
		}],
		properties: "Hard, strong, can be tempered; less brittle than cast iron.",
		hardness: "Hard (depends on % C)",
		corrosion: "Rusts unless alloyed further",
		melting: "~1400–1500 °C",
		uses: "Construction, tools, bodies of vehicles, machinery.",
		ncert: "Ch 3 — steel is iron with 0.05–1.5% carbon. More carbon → harder, more brittle. Cast iron has 2–4% C.",
		meltColor: "#8d939c"
	},
	{
		id: "stainless",
		metals: [
			"fe",
			"c",
			"cr"
		],
		name: "Stainless steel",
		composition: [
			{
				label: "Fe",
				pct: 81
			},
			{
				label: "Cr",
				pct: 18
			},
			{
				label: "C",
				pct: 1
			}
		],
		properties: "Hard, does not rust, takes a mirror finish.",
		hardness: "High",
		corrosion: "Outstanding — chromium oxide film",
		melting: "~1450 °C",
		uses: "Cutlery, utensils, surgical instruments, kitchen sinks.",
		ncert: "Ch 3 — stainless steel is Fe + Ni + Cr (C in small amount). Chromium is the reason it does not rust. A very high-yield alloy.",
		meltColor: "#c5ccd3"
	},
	{
		id: "stainless-ni",
		metals: [
			"fe",
			"ni",
			"cr"
		],
		name: "Stainless steel",
		composition: [
			{
				label: "Fe",
				pct: 74
			},
			{
				label: "Cr",
				pct: 18
			},
			{
				label: "Ni",
				pct: 8
			}
		],
		properties: "Austenitic stainless — hard, rust-proof, used for utensils.",
		hardness: "High",
		corrosion: "Outstanding",
		melting: "~1450 °C",
		uses: "Cutlery, surgical tools, dairy / food equipment.",
		ncert: "Ch 3 — the NCERT wording is iron, nickel and chromium. Nickel improves toughness and the finish.",
		meltColor: "#d0d5da"
	},
	{
		id: "solder",
		metals: ["pb", "sn"],
		name: "Solder",
		composition: [{
			label: "Pb",
			pct: 50
		}, {
			label: "Sn",
			pct: 50
		}],
		properties: "Low melting, wets copper wires, solidifies to a conductive joint.",
		hardness: "Soft",
		corrosion: "Fair",
		melting: "~180–200 °C (well below Cu or Fe)",
		uses: "Electrical soldering, joining electronic components, plumbing (historically).",
		ncert: "Ch 3 — solder is Pb + Sn. The point of an alloy here is the low melting point, not hardness.",
		meltColor: "#9aa3ad"
	},
	{
		id: "amalgam-na",
		metals: ["hg", "na"],
		name: "Sodium amalgam",
		composition: [{
			label: "Hg",
			pct: 90
		}, {
			label: "Na",
			pct: 10
		}],
		properties: "Softer reducing agent than free sodium; liquid to pasty.",
		hardness: "Soft / liquid",
		corrosion: "Reacts slowly with water",
		melting: "Near room temperature",
		uses: "Laboratory reductant; historically, Castner cells.",
		ncert: "Ch 3 — an amalgam is an alloy of mercury with another metal. Sodium amalgam is the textbook example.",
		meltColor: "#b8c0c4"
	},
	{
		id: "amalgam-ag",
		metals: ["hg", "ag"],
		name: "Silver amalgam",
		composition: [{
			label: "Hg",
			pct: 50
		}, {
			label: "Ag",
			pct: 50
		}],
		properties: "Pasty when mixed, hardens in minutes; silver-grey.",
		hardness: "Sets hard",
		corrosion: "Good in the mouth (historical dental use)",
		melting: "Sets rather than a sharp melting point",
		uses: "Traditional dental fillings (being phased out in many places).",
		ncert: "Ch 3 — dental amalgam is mercury with silver / tin / copper. 'Amalgam = mercury + metal' is the definition they want.",
		meltColor: "#c5ccd0"
	},
	{
		id: "amalgam-sn",
		metals: ["hg", "sn"],
		name: "Tin amalgam",
		composition: [{
			label: "Hg",
			pct: 55
		}, {
			label: "Sn",
			pct: 45
		}],
		properties: "Silvery, historically used on mirrors.",
		hardness: "Soft",
		corrosion: "Fair",
		melting: "Low",
		uses: "Old-style mirror backing; component of dental amalgam mixes.",
		ncert: "Ch 3 — any Hg + metal mix is an amalgam. Name the other metal in the answer.",
		meltColor: "#c0c6cc"
	},
	{
		id: "amalgam-cu",
		metals: ["hg", "cu"],
		name: "Copper amalgam",
		composition: [{
			label: "Hg",
			pct: 60
		}, {
			label: "Cu",
			pct: 40
		}],
		properties: "Silvery-reddish; used in some older dental formulations.",
		hardness: "Medium once set",
		corrosion: "Fair",
		melting: "Low",
		uses: "Historical dentistry; extraction metallurgy (gold / silver).",
		ncert: "Ch 3 — amalgams are used because mercury wets other metals and can extract silver / gold from ores.",
		meltColor: "#c4a090"
	},
	{
		id: "magnalium",
		metals: ["al", "mg"],
		name: "Magnalium",
		composition: [{
			label: "Al",
			pct: 95
		}, {
			label: "Mg",
			pct: 5
		}],
		properties: "Light, strong, machines well, brighter than aluminium.",
		hardness: "Harder than pure Al",
		corrosion: "Good",
		melting: "~650 °C",
		uses: "Aircraft parts, scientific instruments, pyrotechnics.",
		ncert: "Ch 3 — magnalium is Al + Mg. Light + strong is the property pair they want for aircraft.",
		meltColor: "#cfd6dd"
	},
	{
		id: "duralumin",
		metals: ["al", "cu"],
		name: "Duralumin",
		composition: [
			{
				label: "Al",
				pct: 95
			},
			{
				label: "Cu",
				pct: 4
			},
			{
				label: "Mg",
				pct: 1
			}
		],
		properties: "Light, very strong after age-hardening, aircraft-grade.",
		hardness: "High for a light alloy",
		corrosion: "Good if clad with pure Al",
		melting: "~650 °C",
		uses: "Aircraft bodies, pressure vessels.",
		ncert: "Ch 3 — duralumin is Al + Cu (+ Mg, Mn). Remember: light alloys of aluminium for aircraft.",
		meltColor: "#d3c4a8"
	},
	{
		id: "cupronickel",
		metals: ["cu", "ni"],
		name: "Cupronickel",
		composition: [{
			label: "Cu",
			pct: 75
		}, {
			label: "Ni",
			pct: 25
		}],
		properties: "Silvery despite being mostly copper; very corrosion-resistant in salt water.",
		hardness: "Medium-hard",
		corrosion: "Excellent in seawater",
		melting: "~1200 °C",
		uses: "Coins, marine condensers, desalination tubing.",
		ncert: "Ch 3 — coins are rarely a pure metal. Cu + Ni is the silvery 'nickel' of many currencies.",
		meltColor: "#c5d0d6"
	},
	{
		id: "german-silver",
		metals: [
			"cu",
			"zn",
			"ni"
		],
		name: "German silver (nickel silver)",
		composition: [
			{
				label: "Cu",
				pct: 60
			},
			{
				label: "Zn",
				pct: 20
			},
			{
				label: "Ni",
				pct: 20
			}
		],
		properties: "Looks like silver, contains no silver; hard and corrosion-resistant.",
		hardness: "Hard",
		corrosion: "Very good",
		melting: "~1100 °C",
		uses: "Utensils, decorative fittings, musical instruments, resistors.",
		ncert: "Ch 3 — German silver is Cu + Zn + Ni. A trap question: it does not contain silver.",
		meltColor: "#d0d5da"
	}
];
var LAB_DEMOS = [
	{
		label: "Zn + HCl",
		ids: ["zn", "hcl"],
		mode: "lab"
	},
	{
		label: "Iron nail in CuSO₄",
		ids: ["fe", "cuso4"],
		mode: "lab"
	},
	{
		label: "Neutralise",
		ids: ["hcl", "naoh"],
		mode: "lab"
	},
	{
		label: "Lime water",
		ids: ["caoh2", "co2"],
		mode: "lab"
	},
	{
		label: "Blue vitriol, heat",
		ids: ["cuso4"],
		mode: "lab",
		heat: true
	},
	{
		label: "Phenolphthalein",
		ids: ["phph", "naoh"],
		mode: "lab"
	},
	{
		label: "Forge brass",
		ids: ["cu", "zn"],
		mode: "alloy"
	},
	{
		label: "Stainless steel",
		ids: [
			"fe",
			"ni",
			"cr"
		],
		mode: "alloy"
	},
	{
		label: "Solder",
		ids: ["pb", "sn"],
		mode: "alloy"
	}
];
var ALIASES = {
	alcohol: "ethanol",
	ethanoic: "ch3cooh"
};
function canonicalId(id) {
	return ALIASES[id] ?? id;
}
function chemById(id) {
	const cid = canonicalId(id);
	return CHEMICALS.find((c) => c.id === id) ?? CHEMICALS.find((c) => canonicalId(c.id) === cid);
}
function chemicalsIn(category) {
	return CHEMICALS.filter((c) => c.category === category);
}
function setOf(ids) {
	return new Set(ids.map(canonicalId));
}
function reagentsMatch(reagents, flask) {
	return reagents.every((r) => flask.has(canonicalId(r)));
}
function matchLabReaction(ids, heated) {
	if (!ids.length) return null;
	const flask = setOf(ids);
	const hits = LAB_REACTIONS.filter((rxn) => reagentsMatch(rxn.reagents, flask));
	if (!hits.length) return null;
	hits.sort((a, b) => {
		const n = b.reagents.length - a.reagents.length;
		if (n) return n;
		if (heated) return Number(b.needsHeat) - Number(a.needsHeat);
		return Number(a.needsHeat) - Number(b.needsHeat);
	});
	if (heated) return hits.find((h) => h.needsHeat) ?? hits[0] ?? null;
	return hits[0] ?? null;
}
function matchAlloy(ids) {
	const flask = setOf(ids);
	if (flask.size < 2) return null;
	const exactish = ALLOYS.filter((a) => {
		const metals = a.metals.map(canonicalId);
		return metals.every((m) => flask.has(m)) && metals.length === flask.size;
	});
	if (exactish.length) {
		exactish.sort((a, b) => b.metals.length - a.metals.length);
		return exactish[0] ?? null;
	}
	const subset = ALLOYS.filter((a) => a.metals.every((m) => flask.has(canonicalId(m))));
	subset.sort((a, b) => b.metals.length - a.metals.length);
	if (subset.length) return subset[0] ?? null;
	if (flask.has("hg")) {
		const other = [...flask].find((id) => id !== "hg");
		const named = ALLOYS.find((a) => a.metals.includes("hg") && other && a.metals.includes(other));
		if (named) return named;
		return ALLOYS.find((a) => a.id === "amalgam-ag") ?? null;
	}
	return null;
}
var ALLOY_METALS = CHEMICALS.filter((c) => c.category === "metals" || c.id === "c");
function prefersReducedMotion() {
	return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function blendColors(ids, fallback = "#6ec8e8") {
	const hexes = ids.map((id) => chemById(id)?.color).filter((c) => Boolean(c));
	if (!hexes.length) return fallback;
	let r = 0;
	let g = 0;
	let b = 0;
	for (const h of hexes) {
		const n = h.replace("#", "");
		r += parseInt(n.slice(0, 2), 16);
		g += parseInt(n.slice(2, 4), 16);
		b += parseInt(n.slice(4, 6), 16);
	}
	const k = hexes.length;
	const to = (v) => Math.round(v / k).toString(16).padStart(2, "0");
	return `#${to(r)}${to(g)}${to(b)}`;
}
function VirtualLab() {
	const [mode, setMode] = (0, import_react.useState)("lab");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "simulator",
		className: "scroll-mt-24 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beaker, { className: "size-3.5" }), "Chem Simulator"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2.5 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight text-fg",
						children: "Virtual Lab"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Mix Class 10 reagents, heat the flask, or forge an alloy — every result is a board-ready equation, observation and NCERT note. Instant, offline, no API key."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" })
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMode("lab"),
					className: cn("mode-card min-h-12 flex-1 px-4 sm:flex-none sm:min-w-[12.5rem]", mode === "lab" && "on"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 font-display text-base text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-4 text-primary" }), "Mixing lab"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.72rem] text-muted",
						children: "Acids, metals, indicators, heat"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMode("alloy"),
					className: cn("mode-card min-h-12 flex-1 px-4 sm:flex-none sm:min-w-[12.5rem]", mode === "alloy" && "on"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 font-display text-base text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, { className: "size-4 text-gold" }), "Alloy forge"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.72rem] text-muted",
						children: "Brass, bronze, steel, amalgam"
					})]
				})]
			}),
			mode === "lab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MixingLab, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlloyForge, {})
		]
	});
}
function MixingLab() {
	const [openGroup, setOpenGroup] = (0, import_react.useState)("metals");
	const [flask, setFlask] = (0, import_react.useState)([]);
	const [heated, setHeated] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [result, setResult] = (0, import_react.useState)(null);
	const [miss, setMiss] = (0, import_react.useState)(null);
	const inFlask = (0, import_react.useMemo)(() => new Set(flask.map(canonicalId)), [flask]);
	const addChem = (id) => {
		setResult(null);
		setMiss(null);
		setPhase("idle");
		setFlask((prev) => {
			if (prev.some((x) => canonicalId(x) === canonicalId(id))) return prev;
			if (prev.length >= 6) return prev;
			return [...prev, id];
		});
	};
	const removeChem = (id) => {
		setResult(null);
		setMiss(null);
		setPhase("idle");
		setHeated(false);
		setFlask((prev) => prev.filter((x) => x !== id));
	};
	const clearFlask = () => {
		setFlask([]);
		setHeated(false);
		setResult(null);
		setMiss(null);
		setPhase("idle");
	};
	const run = (withHeat) => {
		if (!flask.length) return;
		const nextHeat = withHeat || heated;
		if (withHeat) setHeated(true);
		setPhase("running");
		setMiss(null);
		const delay = prefersReducedMotion() ? 0 : withHeat ? 620 : 320;
		window.setTimeout(() => {
			const hit = matchLabReaction(flask, nextHeat);
			if (hit) {
				setResult(hit);
				setMiss(null);
			} else if (flask.length < 2 && !nextHeat) {
				setResult(null);
				setMiss("Add a second reagent, or use Heat if this substance decomposes on its own.");
			} else if (flask.length < 2 && nextHeat) {
				setResult(null);
				setMiss("No thermal change is recorded for this single reagent in the Class 10 set.");
			} else {
				setResult(null);
				setMiss(nextHeat ? "No matching heated reaction in the vault. Try a listed pair — Zn + acid, CuSO₄ crystals, or limestone." : "No room-temperature reaction matches this mix. Check the reactivity series, or try Heat.");
			}
			setPhase("done");
		}, delay);
	};
	const loadDemo = (ids, heat) => {
		setFlask(ids);
		setHeated(Boolean(heat));
		setResult(null);
		setMiss(null);
		setPhase("running");
		const delay = prefersReducedMotion() ? 0 : heat ? 620 : 280;
		window.setTimeout(() => {
			setResult(matchLabReaction(ids, Boolean(heat)));
			setMiss(null);
			setPhase("done");
		}, delay);
	};
	const liquid = result?.flaskColor ?? blendColors(flask);
	const fill = flask.length ? Math.min(.82, .22 + flask.length * .12) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoragePanel, {
			openGroup,
			onToggle: (id) => setOpenGroup((g) => g === id ? "" : id),
			inFlask,
			onAdd: addChem
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 content-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass overflow-hidden rounded-[1.35rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-b border-border px-5 py-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-fg",
								children: "Mixing flask"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.72rem] text-muted",
								children: flask.length ? `${flask.length} reagent${flask.length === 1 ? "" : "s"} charged` : "Empty — pick reagents from storage"
							})] }), heated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chip chip-gold-on h-8 text-[0.7rem]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5" }), "Heated"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskVisual, {
								color: liquid,
								fill,
								heated: heated || phase === "running",
								bubbles: Boolean(result?.effects.bubbles) && phase === "done",
								steam: Boolean(result?.effects.steam) || heated,
								flame: Boolean(result?.effects.flame) && phase === "done",
								glow: Boolean(result?.effects.glow) || phase === "running",
								precipitate: phase === "done" ? result?.effects.precipitate : void 0,
								analyzing: phase === "running"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [flask.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-2xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted",
									children: "Storage is on the left. Tap a chemical to charge the flask."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap gap-2",
									children: flask.map((id) => {
										const c = chemById(id);
										if (!c) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => removeChem(id),
											className: "chip h-9 pr-2",
											title: `Remove ${c.name}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "size-2.5 rounded-full border border-border",
													style: { background: c.color }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "eq text-[0.75rem]",
													children: c.formula
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3 opacity-70" })
											]
										}) }, id);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !flask.length || phase === "running",
											onClick: () => run(false),
											className: "btn btn-primary col-span-2 h-11 px-3 sm:col-span-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Analyze"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !flask.length || phase === "running",
											onClick: () => run(true),
											className: "btn btn-gold h-11 px-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "size-4" }), "Heat"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !flask.length && !result && !miss,
											onClick: clearFlask,
											className: "btn btn-ghost h-11 px-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Clear"]
										})
									]
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoStrip, {
					mode: "lab",
					onPick: (ids, heat) => loadDemo(ids, heat)
				}),
				phase === "running" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyzingCard, { heated }),
				phase === "done" && result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionResult, {
					rxn: result,
					heated
				}),
				phase === "done" && miss && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-[1.35rem] px-5 py-6 text-sm leading-relaxed text-muted",
					children: miss
				})
			]
		})]
	});
}
function StoragePanel({ openGroup, onToggle, inFlask, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass overflow-hidden rounded-[1.35rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border px-5 py-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg text-fg",
				children: "Chemical storage"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.72rem] text-muted",
				children: [CHEMICALS.length, " Class 10 reagents · nine cabinets"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[36rem] overflow-y-auto lg:max-h-[42rem]",
			children: CHEMICAL_GROUPS.map((group) => {
				const items = chemicalsIn(group.id);
				const open = openGroup === group.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/60 last:border-b-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => onToggle(group.id),
						className: "flex min-h-12 w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-raised/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-bg/50 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-fg",
									children: group.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-[0.7rem] text-muted",
									children: group.blurb
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip-count",
								children: items.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition-transform duration-200", open && "rotate-180") })
						]
					}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-1.5 px-3 pb-3 sm:grid-cols-2",
						children: items.map((c) => {
							const on = inFlask.has(canonicalId(c.id));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: on,
								onClick: () => onAdd(c.id),
								title: on ? `${c.name} is in the flask` : c.hint,
								className: cn("flex min-h-11 items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-colors", on ? "border-primary/50 bg-primary/10 text-primary" : "border-border bg-bg/40 hover:border-primary/40 hover:bg-raised/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-2.5 shrink-0 rounded-full border border-border",
									style: { background: c.color }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[0.8rem] font-medium text-fg",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eq block truncate text-[0.68rem] text-muted",
										children: c.formula
									})]
								})]
							}, c.id);
						})
					})]
				}, group.id);
			})
		})]
	});
}
function FlaskVisual({ color, fill, heated, bubbles, steam, flame, glow, precipitate, analyzing }) {
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const clip = `flask-clip-${uid}`;
	const liquidY = 86 + (1 - fill) * 150;
	const liquidH = fill * 150;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto grid h-[280px] w-[200px] place-items-center sm:h-[300px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flask-halo absolute inset-6 rounded-full blur-2xl", (glow || heated) && "opacity-80"),
				style: { background: heated ? "rgb(226 194 132 / 0.28)" : "rgb(47 212 192 / 0.18)" }
			}),
			flame && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flask-flame" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 200 280",
				className: "relative z-[1] h-full w-full",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-glass`,
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "rgb(255 255 255 / 0.22)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "45%",
								stopColor: "rgb(255 255 255 / 0.04)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "rgb(47 212 192 / 0.08)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
						id: clip,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M78 38 h44 v52 c0 10 6 22 22 48 18 30 28 52 28 78 0 38-26 62-72 62s-72-24-72-62c0-26 10-48 28-78 16-26 22-38 22-48 z" })
					})] }),
					steam && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "flask-steam",
						opacity: "0.55",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M92 28 c-6 -18 4 -28 0 -38",
								fill: "none",
								stroke: "currentColor",
								className: "text-muted",
								strokeWidth: "2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M102 24 c-4 -16 6 -26 2 -36",
								fill: "none",
								stroke: "currentColor",
								className: "text-muted",
								strokeWidth: "2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M112 28 c-5 -18 5 -28 1 -38",
								fill: "none",
								stroke: "currentColor",
								className: "text-muted",
								strokeWidth: "2"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M74 22 h52 v14 H74 z",
						fill: `url(#${uid}-glass)`,
						stroke: "color-mix(in oklab, var(--color-primary) 35%, var(--color-border))",
						strokeWidth: "1.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M78 36 h44 v54 c0 10 6 22 22 48 18 30 28 52 28 78 0 40-28 64-72 64s-72-24-72-64c0-26 10-48 28-78 16-26 22-38 22-48 z",
						fill: `url(#${uid}-glass)`,
						stroke: "color-mix(in oklab, var(--color-primary) 40%, var(--color-border))",
						strokeWidth: "1.6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						clipPath: `url(#${clip})`,
						children: [
							fill > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "28",
								y: liquidY,
								width: "144",
								height: liquidH + 40,
								fill: color,
								opacity: analyzing ? .72 : .88,
								className: analyzing ? "flask-swirl" : void 0
							}),
							precipitate && fill > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "40",
								y: "228",
								width: "120",
								height: "22",
								rx: "10",
								fill: precipitate,
								opacity: "0.92"
							}),
							bubbles && [
								0,
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "flask-bubble",
								cx: 70 + i % 3 * 22,
								cy: 200,
								r: 2.2 + i % 3,
								fill: "rgb(255 255 255 / 0.55)",
								style: { animationDelay: `${i * .28}s` }
							}, i))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M86 58 h10 c6 40 -6 70 -14 108",
						fill: "none",
						stroke: "rgb(255 255 255 / 0.28)",
						strokeWidth: "3",
						strokeLinecap: "round"
					})
				]
			})
		]
	});
}
function AnalyzingCard({ heated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-[1.35rem] px-5 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-sm font-medium text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), heated ? "Applying heat and reading the flask…" : "Matching reagents against the NCERT vault…"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bar-sweep mt-4 h-1.5 overflow-hidden rounded-full bg-raised" })]
	});
}
function ReactionResult({ rxn, heated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass pop-in rounded-[1.35rem] p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }), "Reaction result"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl text-fg",
					children: rxn.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [rxn.type.split("·").map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip chip-on h-8 text-[0.7rem]",
						children: t.trim()
					}, t)), rxn.needsHeat && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "chip chip-gold-on h-8 text-[0.7rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3" }), heated ? "Heat applied" : "Needs heat"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl border border-primary/25 bg-primary/8 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted",
					children: "Balanced equation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eq mt-1.5 text-[0.95rem] leading-relaxed text-primary",
					children: rxn.equation
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/70 bg-bg/40 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted",
						children: "Observation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.86rem] leading-relaxed text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: rxn.observation })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/70 bg-bg/40 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold",
						children: "NCERT Class 10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.86rem] leading-relaxed text-muted",
						children: rxn.ncert
					})]
				})]
			})
		]
	});
}
function AlloyForge() {
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [result, setResult] = (0, import_react.useState)(null);
	const [miss, setMiss] = (0, import_react.useState)(null);
	const toggle = (id) => {
		setPhase("idle");
		setResult(null);
		setMiss(null);
		setPicked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 4 ? prev : [...prev, id]);
	};
	const clear = () => {
		setPicked([]);
		setResult(null);
		setMiss(null);
		setPhase("idle");
	};
	const forge = (ids = picked) => {
		if (ids.length < 2) return;
		setPhase("running");
		const delay = prefersReducedMotion() ? 0 : 700;
		window.setTimeout(() => {
			const hit = matchAlloy(ids);
			setResult(hit);
			setMiss(hit ? null : "No named Class 10 alloy for this melt. Try Cu+Zn (brass), Cu+Sn (bronze), Fe+C, Fe+Ni+Cr, Pb+Sn, or Hg + a metal.");
			setPhase("done");
		}, delay);
	};
	const loadDemo = (ids) => {
		setPicked(ids);
		forge(ids);
	};
	const melt = result?.meltColor ?? blendColors(picked, "#c46a3a");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass overflow-hidden rounded-[1.35rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-5 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-fg",
					children: "Metal stock"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.72rem] text-muted",
					children: "Select two or more metallic elements (carbon counts)."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 p-3 sm:grid-cols-3",
				children: ALLOY_METALS.map((c) => {
					const on = picked.includes(c.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(c.id),
						className: cn("flex min-h-12 items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-colors", on ? "border-gold/55 bg-gold/12 text-gold" : "border-border bg-bg/40 hover:border-gold/40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 shrink-0 rounded-full border border-border",
							style: { background: c.color }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-[0.8rem] font-medium text-fg",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eq block text-[0.68rem] text-muted",
								children: c.formula
							})]
						})]
					}, c.id);
				})
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 content-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass overflow-hidden rounded-[1.35rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between gap-3 border-b border-border px-5 py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-fg",
								children: "Crucible"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.72rem] text-muted",
								children: picked.length ? picked.map((id) => chemById(id)?.formula).join(" + ") : "Awaiting charge"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrucibleVisual, {
								color: melt,
								active: phase === "running" || Boolean(result),
								empty: !picked.length
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: picked.map((id) => {
									const c = chemById(id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggle(id),
										className: "chip chip-gold-on h-9 pr-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eq text-[0.75rem]",
											children: c?.formula
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })]
									}, id);
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: picked.length < 2 || phase === "running",
									onClick: () => forge(),
									className: "btn btn-gold h-11",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, { className: "size-4" }), "Forge alloy"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: !picked.length,
									onClick: clear,
									className: "btn btn-ghost h-11",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Clear"]
								})]
							})] })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoStrip, {
					mode: "alloy",
					onPick: (ids) => loadDemo(ids)
				}),
				phase === "running" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-[1.35rem] px-5 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-medium text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4" }), "Melt in progress — reading the forge card…"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bar-sweep mt-4 h-1.5 overflow-hidden rounded-full bg-raised" })]
				}),
				phase === "done" && result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlloyCard, { alloy: result }),
				phase === "done" && miss && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-[1.35rem] px-5 py-6 text-sm leading-relaxed text-muted",
					children: miss
				})
			]
		})]
	});
}
function CrucibleVisual({ color, active, empty }) {
	const uid = (0, import_react.useId)().replace(/:/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto grid h-[240px] w-[200px] place-items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-8 rounded-full blur-2xl",
			style: { background: active ? "rgb(226 194 132 / 0.32)" : "rgb(47 212 192 / 0.1)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 220",
			className: "relative z-[1] h-full w-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${uid}-melt`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: empty ? "#1a2230" : color,
						stopOpacity: empty ? .4 : 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: empty ? "#0a0e16" : color
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 70 h120 l-16 110 c-4 22-28 32-44 32s-40-10-44-32 z",
					fill: `url(#${uid}-melt)`,
					stroke: "color-mix(in oklab, var(--color-gold) 50%, var(--color-border))",
					strokeWidth: "1.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "100",
					cy: "70",
					rx: "60",
					ry: "16",
					fill: empty ? "#111725" : color,
					stroke: "color-mix(in oklab, var(--color-gold) 55%, var(--color-border))",
					strokeWidth: "1.6",
					opacity: empty ? .7 : .95
				}),
				active && !empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "crucible-spark",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "88",
							cy: "62",
							r: "2.2",
							fill: "#f0d9a8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "118",
							cy: "66",
							r: "1.6",
							fill: "#e2c284"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "102",
							cy: "58",
							r: "1.4",
							fill: "#fff6d8"
						})
					]
				})
			]
		})]
	});
}
function AlloyCard({ alloy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass pop-in rounded-[1.35rem] p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, { className: "size-3.5" }), "Named alloy"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-[1.65rem] text-fg",
				children: alloy.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: alloy.properties
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-2",
				children: alloy.composition.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-baseline justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eq font-semibold text-fg",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular text-muted",
						children: [row.pct, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 overflow-hidden rounded-full bg-raised",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-gradient-to-r from-primary to-gold",
						style: { width: `${row.pct}%` }
					})
				})] }, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
						label: "Hardness",
						value: alloy.hardness
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
						label: "Corrosion",
						value: alloy.corrosion
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
						label: "Melting",
						value: alloy.melting
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/70 bg-bg/40 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted",
						children: "Applications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.86rem] leading-relaxed text-fg",
						children: alloy.uses
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/70 bg-bg/40 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold",
						children: "NCERT Class 10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.86rem] leading-relaxed text-muted",
						children: alloy.ncert
					})]
				})]
			})
		]
	});
}
function Spec({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/70 bg-bg/40 px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[0.8rem] leading-snug text-fg",
			children: value
		})]
	});
}
function DemoStrip({ mode, onPick }) {
	const items = LAB_DEMOS.filter((d) => d.mode === mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted",
			children: "Try"
		}), items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onPick(d.ids, d.heat),
			className: "chip h-8 text-[0.72rem]",
			children: d.label
		}, d.label))]
	});
}
var SECTION_IDS = [
	"overview",
	"reactions",
	"colours",
	"lab",
	"simulator",
	"definitions",
	"notes",
	"quiz",
	"revision",
	"ai",
	"credits"
];
/** Role tone → text class (Udirn's Creator role cycles a full RGB rainbow). */
var ROLE_TONE_CLASS = {
	rainbow: "rainbow-role",
	teal: "text-primary",
	gold: "text-gold",
	sky: "text-sky"
};
var EXHIBITS = [
	{
		label: "Exhibit A",
		src: "/credits/he-looks-like-this-1.png"
	},
	{
		label: "Exhibit B",
		src: "/credits/he-looks-like-this-2.png"
	},
	{
		label: "Exhibit C",
		src: "/credits/he-looks-like-this-3.png"
	}
];
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function VaultApp() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [chapter, setChapter] = (0, import_react.useState)("all");
	const [section, setSection] = (0, import_react.useState)("overview");
	const [savedOnly, setSavedOnly] = (0, import_react.useState)(false);
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const [reagent, setReagent] = (0, import_react.useState)("all");
	const [progressFilter, setProgressFilter] = (0, import_react.useState)("all");
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	const [quizFocus, setQuizFocus] = (0, import_react.useState)();
	const stars = useStudent((s) => s.stars);
	const mastery = useStudent((s) => s.mastery);
	const bookDefs = useStudent((s) => s.bookDefs);
	const bookNotes = useStudent((s) => s.bookNotes);
	const toggleBook = useStudent((s) => s.toggleBook);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setSearchOpen(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		const els = SECTION_IDS.map((id) => document.getElementById(id)).filter((el) => el != null);
		if (!els.length || typeof IntersectionObserver === "undefined") return;
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible[0]) {
				const id = visible[0].target.id;
				setSection(id);
			}
		}, {
			rootMargin: "-15% 0px -62% 0px",
			threshold: 0
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return reactions.filter((r) => {
			if (chapter !== "all" && r.ch !== chapter) return false;
			const key = reactionKey(r);
			if (savedOnly && !stars.includes(key)) return false;
			if (typeFilter !== "all" && !bucketsFor(r.type).includes(typeFilter)) return false;
			if (reagent !== "all" && !matchesReagent(r, reagent)) return false;
			const flag = mastery[key] ?? "unset";
			if (progressFilter === "learned" && flag !== "learned") return false;
			if (progressFilter === "review" && flag !== "review") return false;
			if (progressFilter === "unseen" && flag !== "unset") return false;
			if (!q) return true;
			return `${r.title} ${r.eq} ${r.type} ${r.colour} ${r.obs} ${r.cond} ${r.tip} ${r.desc}`.toLowerCase().includes(q);
		});
	}, [
		query,
		chapter,
		savedOnly,
		stars,
		typeFilter,
		reagent,
		progressFilter,
		mastery
	]);
	const navigate = (0, import_react.useCallback)((id) => {
		setDrawerOpen(false);
		if (id === "ch1" || id === "ch2" || id === "ch3" || id === "ch4") {
			setChapter(id);
			setSection("reactions");
			scrollToId("reactions");
			return;
		}
		setSection(id);
		if (id === "overview") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		else scrollToId(id);
	}, []);
	const pickHit = (hit) => {
		setSearchOpen(false);
		if (hit.kind === "reaction") {
			const found = reactions.find((r) => reactionKey(r) === hit.id);
			if (found) setChapter(found.ch);
			setSection("reactions");
			scrollToId("reactions");
			return;
		}
		if (hit.kind === "quiz") {
			setQuizFocus(hit.id);
			setSection("quiz");
			scrollToId("quiz");
			return;
		}
		if (hit.kind === "chapter") {
			navigate(hit.id);
			return;
		}
		if (hit.href === "chapter-map") {
			scrollToId("chapter-map");
			setSection("overview");
			return;
		}
		setSection(hit.href);
		scrollToId(hit.href);
	};
	const sidebarFooter = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PwaRegister, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
	] });
	const quizTotal = Object.values(quizData).reduce((n, q) => n + q.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh w-full overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentHydrate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSearch, {
				open: searchOpen,
				query,
				onQuery: setQuery,
				onClose: () => setSearchOpen(false),
				onPick: pickHit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
				section,
				onNavigate: navigate,
				mobileOpen: drawerOpen,
				onCloseMobile: () => setDrawerOpen(false),
				footer: sidebarFooter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative lg:pl-[264px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChemLab, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-50 flex h-16 items-center gap-2 border-b border-border/70 bg-bg/80 px-4 backdrop-blur-xl lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ms-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Open search",
								onClick: () => setSearchOpen(true),
								className: "grid size-10 place-items-center rounded-xl border border-border text-muted transition-colors hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Open menu",
								onClick: () => setDrawerOpen(true),
								className: "grid size-10 place-items-center rounded-xl border border-border text-muted transition-colors hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "safe-pad relative mx-auto w-full max-w-[1140px] px-4 pb-20 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								id: "overview",
								className: "scroll-mt-24 pb-4 pt-10 sm:pt-14 lg:pt-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stagger",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "eyebrow",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }), "CBSE · Class 10 · NCERT Chemistry"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "wordmark mt-4 max-w-3xl font-display text-[clamp(2.6rem,8vw,5.2rem)] font-semibold leading-[1.02] tracking-tight",
											children: "ChemVault 10"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
											children: "A private revision laboratory — every high-yield reaction, colour, definition and exam rule, engineered into one premium, precision-built study instrument."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "relative flex min-h-12 min-w-0 flex-1 items-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 size-4 text-muted" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														value: query,
														suppressHydrationWarning: true,
														onFocus: () => setSearchOpen(true),
														onChange: (e) => {
															setQuery(e.target.value);
															setSearchOpen(true);
														},
														placeholder: "Search a reaction, HCl, colour, definition…",
														className: "input pl-11 pr-16"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
														className: "absolute right-3 hidden rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-muted sm:block",
														children: "⌘K"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => scrollToId("chapter-map"),
													className: "btn btn-primary h-12 flex-1 px-5 sm:flex-none",
													children: ["Explore chapters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => navigate("quiz"),
													className: "btn btn-ghost h-12 flex-1 px-5 sm:flex-none",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }), "Take a quiz"]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4",
											children: [
												[
													reactions.length,
													"Reactions",
													FlaskConical
												],
												[
													definitions.length,
													"Definitions",
													BookOpen
												],
												[
													colours.length,
													"Colours",
													Palette
												],
												[
													quizTotal,
													"Quiz items",
													GraduationCap
												]
											].map(([n, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "glass rounded-2xl px-4 py-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3 text-gold" }), label]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "tabular mt-1 font-display text-2xl text-fg",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: n })
												})]
											}, label))
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "chapter-map",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "The syllabus",
									title: "Chapter map",
									sub: "Four NCERT chapters, distilled into exam-ready intelligence."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: chapters.map((ch, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: idx * 70,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => navigate(ch.id),
											className: "glass glass-hover group w-full rounded-[1.35rem] p-6 text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-xs tracking-[0.28em] text-gold",
														children: ch.num
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "grid size-9 place-items-center rounded-xl border border-border text-muted transition-all duration-300 group-hover:border-primary/50 group-hover:text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-5 font-display text-[1.45rem] leading-snug text-fg",
													children: ch.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-[0.83rem] leading-relaxed text-muted",
													children: ch.blurb
												})
											]
										})
									}, ch.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasteryStrip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "reactions",
								className: "scroll-mt-24 py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-7 flex flex-wrap items-end justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
											eyebrow: "Core content",
											title: "Important reactions",
											sub: `Showing ${filtered.length} of ${reactions.length} board-curated reactions.`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSavedOnly((v) => !v),
											className: cn("chip", savedOnly && "chip-gold-on"),
											children: [savedOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), "Saved only"]
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 grid gap-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
												label: "Chapter",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setChapter("all"),
													className: cn("chip", chapter === "all" && "chip-on"),
													children: ["All chapters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "chip-count",
														children: reactions.length
													})]
												}), chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setChapter(c.id),
													className: cn("chip", chapter === c.id && "chip-on"),
													children: [
														"Ch ",
														c.num,
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "chip-count",
															children: reactions.filter((r) => r.ch === c.id).length
														})
													]
												}, c.id))]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
												label: "Progress",
												children: [
													["all", "All"],
													["unseen", "Unseen"],
													["learned", "Learned"],
													["review", "Needs review"]
												].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setProgressFilter(id),
													className: cn("chip", progressFilter === id && "chip-on"),
													children: label
												}, id))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
												label: "Type",
												scroll: true,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setTypeFilter("all"),
													className: cn("chip", typeFilter === "all" && "chip-on"),
													children: "All types"
												}), TYPE_BUCKETS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setTypeFilter(b),
													className: cn("chip", typeFilter === b && "chip-on"),
													children: b
												}, b))]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
												label: "Reagent",
												scroll: true,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setReagent("all"),
													className: cn("chip", reagent === "all" && "chip-on"),
													children: "Any reagent"
												}), REAGENTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setReagent(r.id),
													className: cn("chip eq text-xs", reagent === r.id && "chip-on"),
													children: r.id
												}, r.id))]
											})
										]
									}),
									filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "glass rounded-[1.35rem] px-6 py-16 text-center text-muted",
										children: "No reactions match. Clear a filter or try another keyword."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: filtered.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionCard, {
											r,
											index: i
										}, reactionKey(r)))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "colours",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "Signature collection",
									title: "Colour Atlas",
									sub: `${colours.length} compounds · every appearance the paper demands, presented like a gallery.`
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColourAtlas, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabBench, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualLab, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "definitions",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "Exact wording",
									title: "Quick definitions",
									sub: "Board-ready phrasing. Memorise these as written — they win full marks."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3",
									children: definitions.map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: Math.min(idx, 6) * 40,
										className: "h-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "glass glass-hover flex h-full flex-col rounded-[1.15rem] p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "flex items-start gap-2 font-display text-[1.05rem] leading-snug text-fg",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mt-1 size-4 shrink-0 text-primary" }), d.title]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": "Save definition",
														onClick: () => toggleBook("def", d.title),
														className: "shrink-0 rounded-lg p-1 text-muted transition-colors hover:text-gold",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-4", bookDefs.includes(d.title) && "fill-gold text-gold") })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-3.5" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-muted",
													children: d.body
												})
											]
										})
									}, d.title))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "notes",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "Mark-winning rules",
									title: "Core exam notes",
									sub: "Shortcuts, traps and the exact rules that convert effort into marks."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3.5 md:grid-cols-2",
									children: notes.map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: Math.min(idx, 6) * 40,
										className: "h-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "glass glass-hover flex h-full flex-col rounded-[1.15rem] p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "flex items-start gap-2 font-display text-[1.05rem] leading-snug text-fg",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "mt-1 size-4 shrink-0 text-gold" }), n.title]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": "Save note",
														onClick: () => toggleBook("note", n.title),
														className: "shrink-0 rounded-lg p-1 text-muted transition-colors hover:text-gold",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-4", bookNotes.includes(n.title) && "fill-gold text-gold") })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-3.5" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-muted",
													children: n.body
												})
											]
										})
									}, n.title))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "quiz",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "The arena",
									title: "Quiz Arena",
									sub: `${quizTotal} questions · 1-mark MCQs, assertion–reason and case-based. Instant marking, worked reasons, timed and full exam simulations.`
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizEngine, {
									focusId: quizFocus,
									onConsumedFocus: () => setQuizFocus(void 0)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "revision",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "Your shelf",
									title: "My Revision",
									sub: "Starred reactions, review flags, saved definitions and every question you missed — in one queue."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevisionQueue, { onOpenQuiz: (id) => {
									if (id) setQuizFocus(id);
									setSection("quiz");
									scrollToId("quiz");
								} })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "ai",
								className: "scroll-mt-24 py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
									eyebrow: "Concierge",
									title: "Ask the AI tutor",
									sub: "A Grok-powered chemistry tutor that speaks fluent NCERT Class 10."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTutor, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "credits",
								className: "scroll-mt-24 py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
										eyebrow: "Acknowledgement",
										title: "Credits",
										sub: "The people behind this vault."
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 80,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "glass rounded-[1.5rem] p-7 sm:p-12",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow justify-center text-center",
												children: "With gratitude to"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-8 grid gap-4 sm:grid-cols-2",
												children: credits.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "group flex flex-col gap-3 rounded-2xl border border-border/70 bg-bg/55 px-5 py-5 transition-colors hover:border-gold/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "grid size-12 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold/10",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-gold" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-display text-2xl text-fg",
																children: c.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: cn("text-xs font-semibold uppercase tracking-[0.16em]", ROLE_TONE_CLASS[c.tone]),
																children: c.role
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm leading-relaxed text-muted",
														children: c.description
													})]
												}, c.name))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 120,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
											className: "glass relative mt-6 rounded-[1.5rem] border-gold/25 p-7 sm:p-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/10 px-4 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold shadow-[0_0_26px_-6px_rgb(226_194_132_/_0.5)]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-3.5" }), "Public notice"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 space-y-4 text-[0.95rem] leading-relaxed text-fg/90",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
															"Following a recent internal investigation, we have reason to believe that an individual has been attempting to claim credit for this website — a claim that is, regrettably, entirely unfounded. The person in question goes by the name of",
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold text-danger",
																children: "Ansh"
															}),
															"."
														] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
															"For the record: he happens to share his name with our distinguished",
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold text-primary",
																children: "Chief Moderator"
															}),
															" above. They are not the same person."
														] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Should he be encountered making such claims, he may be identified as follows:" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-7 grid gap-4 sm:grid-cols-3",
													children: EXHIBITS.map((exhibit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
														className: "group overflow-hidden rounded-2xl border border-border/70 bg-bg/55",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: exhibit.src,
																alt: `${exhibit.label} — recent sighting, mid-claim`,
																loading: "lazy",
																className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
															className: "flex items-center justify-between gap-2 px-4 py-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-xs uppercase tracking-[0.2em] text-gold",
																children: exhibit.label
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-right text-[0.7rem] leading-tight text-muted",
																children: "Recent sighting, mid-claim"
															})]
														})]
													}) }, exhibit.label))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-7 text-right font-display text-lg italic text-gold",
													children: "— The ChemVault Team"
												})
											]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "safe-pad relative border-t border-border/70 py-9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex w-full max-w-[1140px] flex-wrap items-center justify-between gap-4 px-4 text-xs text-muted sm:px-6 lg:px-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestTubes, { className: "size-3.5 text-primary" }), "ChemVault 10 — always cross-check with the latest NCERT textbook."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3.5" }), "Crafted for CBSE Class 10 toppers."]
							})]
						})
					})
				]
			})
		]
	});
}
function FilterRow({ label, scroll = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-16 shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex min-w-0 flex-1 gap-2 pb-0.5", scroll ? "no-scrollbar overflow-x-auto" : "flex-wrap"),
			children
		})]
	});
}
function SectionHead({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2.5 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: sub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" })
		]
	});
}
function LabBench() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "lab",
		className: "scroll-mt-24 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Practical instruments",
				title: "Lab bench",
				sub: "Indicators, pH memory, reactivity series and functional groups — the tables you rewrite in the paper."
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass h-full overflow-hidden rounded-[1.35rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-fg",
							children: "Indicator reference"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[26rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-raised/60 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-2.5",
										children: "Indicator"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2.5",
										children: "In acid"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2.5",
										children: "In base"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: indicators.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border/60 transition-colors hover:bg-raised/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-3 text-fg",
										children: [row.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted",
											children: row.notes
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: row.acid })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorChips, { text: row.base })
									})
								]
							}, row.name)) })]
						})
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass h-full rounded-[1.35rem] p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-fg",
								children: "pH strip"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "Memorise the anchor values examiners quote."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2",
								children: pHGuide.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-bg/55 px-3.5 py-2.5 text-sm transition-colors hover:border-primary/40",
									style: { animationDelay: `${idx * 40}ms` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 truncate text-fg",
										children: p.item
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary",
										children: [
											p.pH,
											" · ",
											p.tag
										]
									})]
								}, p.item))
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass mt-4 rounded-[1.35rem] p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-fg",
							children: "Reactivity series"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Most reactive first · hydrogen sits between Pb and Cu."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "no-scrollbar mt-5 flex items-center gap-0 overflow-x-auto pb-2",
						children: series.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-11 shrink-0 place-items-center rounded-xl border font-mono text-sm font-semibold transition-transform duration-200 hover:scale-110", m === "H" ? "border-gold/60 bg-gold/10 text-gold shadow-[0_0_18px_-4px_rgb(226_194_132/0.5)]" : "border-border bg-bg/60 text-fg"),
								title: m === "H" ? "Hydrogen — the reference line" : void 0,
								children: m
							}), i < series.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-3 shrink-0 bg-border" })]
						}, m))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: functionalGroups.map((g, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 50,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass glass-hover h-full rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted",
								children: g.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eq mt-2.5 inline-block rounded-lg border border-primary/25 bg-primary/8 px-2.5 py-1 text-sm font-semibold text-primary",
								children: g.group
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.83rem] text-fg",
								children: g.example
							})
						]
					})
				}, g.name))
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultApp, {});
}
//#endregion
export { Home as component };
