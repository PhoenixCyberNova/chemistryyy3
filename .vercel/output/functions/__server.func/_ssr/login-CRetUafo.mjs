import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import "./client-BzrKyXF3.mjs";
import "./server-zH86KfTb.mjs";
import { t as ChemLab } from "./ChemLab-CHr5D4wx.mjs";
import { Y as ArrowLeft, k as FlaskConical } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CRetUafo.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative grid min-h-dvh place-items-center overflow-x-clip p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChemLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-enter glass w-full max-w-sm rounded-[1.5rem] p-7 shadow-[0_40px_90px_-20px_rgb(0_0_0/0.7)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }), "ChemVault 10"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-fg",
					children: "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "Sync stars, mastery and quiz streaks across devices. Gate viewers are signed in automatically."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Sign-in is disabled."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Back to the vault"]
				})
			]
		})]
	});
}
//#endregion
export { Login as component };
