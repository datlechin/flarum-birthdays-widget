(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const r=flarum.core.compat["admin/app"];var a=t.n(r);const n=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var i=t.n(n);function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}const s=flarum.core.compat["forum/app"];var c=t.n(s);const d=flarum.core.compat["common/components/LoadingIndicator"];var l=t.n(d);const u=flarum.core.compat["common/components/Tooltip"];var h=t.n(u);const p=flarum.core.compat["common/components/Link"];var f=t.n(p);const y=flarum.core.compat["common/helpers/avatar"];var g=t.n(y);const b=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var v=function(t){var e,r;function a(){return t.apply(this,arguments)||this}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r);var n=a.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.birthdays=[],this.load()},n.className=function(){return"BirthdaysWidget"},n.icon=function(){return"fas fa-birthday-cake"},n.title=function(){return c().translator.trans("datlechin-birthdays-widget.forum.widget.title")},n.content=function(){return this.loading?m(l(),null):m("div",{className:"Datlechin-BirthdaysWidget-users"},this.birthdays.map((function(t){return m("div",{className:"Datlechin-BirthdaysWidget-users-item"},m("div",{className:"Datlechin-BirthdaysWidget-users-item-avatar"},m(h(),{text:t.displayName()},m(f(),{href:c().route.user(t)},g()(t)))),m("div",{className:"Datlechin-BirthdaysWidget-users-item-name"},m(f(),{href:c().route.user(t)},t.displayName())))})),m("div",{className:"Datlechin-BirthdaysWidget-more"},m(f(),{href:c().route("birthdays")},c().translator.trans("datlechin-birthdays-widget.forum.widget.more_label"))))},n.load=function(){var t=this,e=(new Date).toISOString().slice(0,10);c().store.find("users",{filter:{birthday:e},page:{limit:c().forum.attribute("datlechin-birthdays-widget.maxUsers")}}).then((function(e){t.setResults(e)}))},n.setResults=function(t){this.birthdays=t,this.loading=!1,m.redraw()},a}(t.n(b)());a().initializers.add("datlechin/flarum-birthdays-widget",(function(){var t;t=a(),(new(i())).add({key:"birthdays",component:v,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"datlechin-birthdays-widget"),a().extensionData.for("datlechin-birthdays-widget").registerSetting({setting:"datlechin-birthdays-widget.max_users",label:a().translator.trans("datlechin-birthdays-widget.admin.settings.max_users"),type:"number"})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map