var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createCommentVNode, r as ref, d as createVNode, w as withDirectives, v as vModelText, i as isRef, F as Fragment, p as pushScopeId, e as popScopeId, n as normalizeStyle, t as toDisplayString, f as normalizeClass, g as watch, h as createBlock, j as createApp } from "./vendor.30f85827.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var style = "";
const _TriggerOption = class {
  constructor(option) {
    this.option = option;
  }
};
let TriggerOption = _TriggerOption;
__publicField(TriggerOption, "Shake", new _TriggerOption("shake"));
__publicField(TriggerOption, "Touch", new _TriggerOption("touch"));
__publicField(TriggerOption, "Voice", new _TriggerOption("voice"));
const _Role = class {
  constructor(role) {
    this.role = role;
  }
};
let Role = _Role;
__publicField(Role, "Jump", new _Role("jump"));
__publicField(Role, "ShotCharge", new _Role("shotCharge"));
__publicField(Role, "ShotRelease", new _Role("shotRelease"));
__publicField(Role, "Enemy", new _Role("enemy"));
const _ScreenType = class {
  constructor(type) {
    this.type = type;
  }
};
let ScreenType = _ScreenType;
__publicField(ScreenType, "EnterName", new _ScreenType("enterName"));
__publicField(ScreenType, "RoleSelection", new _ScreenType("roleSelection"));
__publicField(ScreenType, "TriggerSelection", new _ScreenType("triggerSelection"));
__publicField(ScreenType, "Instruction", new _ScreenType("instruction"));
__publicField(ScreenType, "WaitingRoom", new _ScreenType("waitingRoom"));
__publicField(ScreenType, "Gameplay", new _ScreenType("gamePlay"));
__publicField(ScreenType, "Options", new _ScreenType("options"));
__publicField(ScreenType, "Impressum", new _ScreenType("impressum"));
__publicField(ScreenType, "LeaveConfirmation", new _ScreenType("leaveConfirmation"));
__publicField(ScreenType, "Disconnected", new _ScreenType("disconnected"));
var _imports_3$1 = "./assets/play.fd2ed0f0.svg";
var _imports_0$5 = "./assets/background_start.003b6737.png";
var _imports_1$5 = "./assets/background_default.f7e5fa83.png";
var PageBackground_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$c = {
  key: 0,
  id: "backgroundImage",
  src: _imports_0$5,
  alt: ""
};
const _hoisted_2$a = {
  key: 1,
  id: "backgroundImage",
  src: _imports_1$5,
  alt: ""
};
const _sfc_main$f = {
  props: {
    currentScreen: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return unref(props).currentScreen == unref(ScreenType).EnterName ? (openBlock(), createElementBlock("img", _hoisted_1$c)) : (openBlock(), createElementBlock("img", _hoisted_2$a));
    };
  }
};
var _imports_0$4 = "./assets/arrow_left.6dd9a121.svg";
var _imports_1$4 = "./assets/quit.da3a859b.svg";
var _imports_2$2 = "./assets/options.994df32a.svg";
var HeaderBar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$b = { id: "header" };
const _hoisted_2$9 = { class: "iconContainerLeft" };
const _hoisted_3$7 = { class: "iconContainerRight" };
const _sfc_main$e = {
  props: {
    screenType: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$b, [
        createBaseVNode("div", _hoisted_2$9, [
          unref(props).screenType == unref(ScreenType).RoleSelection || unref(props).screenType == unref(ScreenType).TriggerSelection || unref(props).screenType == unref(ScreenType).Instruction || unref(props).screenType == unref(ScreenType).Impressum ? (openBlock(), createElementBlock("img", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_back")),
            src: _imports_0$4,
            alt: ""
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$7, [
          unref(props).screenType != unref(ScreenType).Gameplay ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _imports_1$4,
            alt: "",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
          })) : (openBlock(), createElementBlock("img", {
            key: 1,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_btn_options")),
            src: _imports_2$2,
            alt: ""
          }))
        ])
      ]);
    };
  }
};
var EnterName_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$7 = (n) => (pushScopeId("data-v-f519a810"), n = n(), popScopeId(), n);
const _hoisted_1$a = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("h1", { id: "title" }, "Babushka Run", -1));
const _hoisted_2$8 = { id: "nameBar" };
const _sfc_main$d = {
  setup(__props) {
    let name = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f, {
          currentScreen: unref(ScreenType).EnterName
        }, null, 8, ["currentScreen"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).EnterName,
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        _hoisted_1$a,
        createBaseVNode("div", _hoisted_2$8, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(name) ? name.value = $event : name = $event),
            id: "inputName",
            type: "text",
            placeholder: "Enter Name"
          }, null, 512), [
            [vModelText, unref(name)]
          ]),
          createBaseVNode("img", {
            id: "btnStart",
            src: _imports_3$1,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_set_name", unref(name)))
          })
        ])
      ], 64);
    };
  }
};
var EnterName = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-f519a810"]]);
var _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGkWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMi0xOVQwMzo0ODoyMSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMDJUMDU6MDY6MTcrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMDJUMDU6MDY6MTcrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNmNzg5N2Y5LTg4MzMtNGNkMy05MzBmLTM1YzM0OTNjNmQ1NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkMzY3YTJkYi00MjQzLTQxNGQtOGJiNS1mNGVlMDQxMjJkN2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkMzY3YTJkYi00MjQzLTQxNGQtOGJiNS1mNGVlMDQxMjJkN2EiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzNjdhMmRiLTQyNDMtNDE0ZC04YmI1LWY0ZWUwNDEyMmQ3YSIgc3RFdnQ6d2hlbj0iMjAyMS0xMi0xOVQwMzo0ODoyMSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmYmJkMTNjLTBkNmMtNGQwYS1iZGM3LTMzZTJkNmUyM2FiMiIgc3RFdnQ6d2hlbj0iMjAyMi0wNC0wMlQwNTowMjozNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmNzg5N2Y5LTg4MzMtNGNkMy05MzBmLTM1YzM0OTNjNmQ1NyIgc3RFdnQ6d2hlbj0iMjAyMi0wNC0wMlQwNTowNjoxNyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+y0r6oAAAAvlJREFUWIXtmDFoWkEYx//XhJY0GeNz6BIyKGigooVsHQoRYp9TaYeC0pZuhQ4F07EtdFLoUOJsMFvbTYlglqabUJ1iwEwuhebFUSkJltch3nG+d3fvnhqaIX8Q7p3v7vu9//fdu1Ni2zauim78bwBe1zAyzevcVDAMndvGiu9O6j5tEr7/6c636WD8QFD92vtBoej3RHQfr2nTpFyKqWIedx+aFMxz2V5azaSK+bE2dWomMDnLcnb5ekGlinllvWjDUJCcZYmgXLr3YWvseu3Jc50w/tPEray/MhBjeVk4tv11Z7YwAOZwkaK5ztKS1oDDLyUAwO3vv5WpnQRmCAA8CN/++S4Pq9eTjVUub+JnoywYhu0MDgDhft91ryhd0cfPlDC+nRGlhvapHNp7teX5Jtd2pmAY9igYCff7yFkWXq6uAtwSFznExwKErwh/MKP0EJEr5wtRBnTzT1sF5Qkj3ZscljKQUXCU2xUAQDaaZk9zvhBFKBjA2eja/PSaTbCfTNoUiBACkQlSGNUTZKPpMQiq3aMqMjABAKFggAfBRr2O/WQSiURCCAL4XE08DBzbwe5RlbUzEZPB3Dq86N+o11nMWCwmnHfSjVIKQnV8cgoAOFszeRClfMM40+MEyURM15jqm898W5qKWRyuXCChYADHJ6fMnVAwMAYkky9nvFyh4iHoNe0DgI8PXgjdmfhwpZMeHkBH2jC8K2/fP/IEoeKXuBfcRM5YvR47FqhAdAB8wzhrpbR9AKvXQyZiojMYagejhT0VDABX0NL2AQAgvKi/IL1c8pyJuhJenHcBUZDOYDgTKOUMFESUCh6OB9EEEx6ypGlSgTj7O4OhC4xe+6kpIcz6yqbNB2h0a6TRrUmPjDwA/dA+p0vldkU6j2vXXl/ZHPtt3OjWhLCyCRWwpNyuIBtNs7OQJ8womJ9Y7OnL7QoIITYAxONxACDNZhMAO3YwiYA8K01UjM46EE3carUQj8ftRCLBgLw00eHqsnSl/rm6hpHpHxFTVRB/qboaAAAAAElFTkSuQmCC";
var _imports_1$3 = "./assets/shot_charge.2480caf6.png";
var _imports_2$1 = "./assets/shot_release.1f939fba.png";
var _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMi0xOVQwMzo0ODoyNSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDMtMjFUMDU6MDA6MDkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDMtMjFUMDU6MDA6MDkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4MGM4YTBhLTUwZTItNDdjZS05YjI4LTU5ODZlMTVlN2U5YiIgeG1wTU06RG9jdW1lbnRJ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";
var RoleSelectionCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$9 = {
  key: 0,
  src: _imports_0$3,
  alt: ""
};
const _hoisted_2$7 = {
  key: 1,
  src: _imports_1$3,
  alt: ""
};
const _hoisted_3$6 = {
  key: 2,
  src: _imports_2$1,
  alt: ""
};
const _hoisted_4$3 = {
  key: 3,
  src: _imports_3,
  alt: ""
};
const _hoisted_5$1 = { class: "roleDescription" };
const _sfc_main$c = {
  props: {
    role: Object
  },
  setup(__props) {
    const props = __props;
    let description = "";
    let color = "";
    switch (props.role) {
      case Role.Jump:
        description = "Jump";
        color = "#00FFF0";
        break;
      case Role.ShotCharge:
        description = "Charge Shot";
        color = "#6BC203";
        break;
      case Role.ShotRelease:
        description = "Release Shot";
        color = "#FF9900";
        break;
      case Role.Enemy:
        description = "Enemy";
        color = "#DB00FF";
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "selectionCard",
        style: normalizeStyle({ borderColor: unref(color) })
      }, [
        unref(props).role == unref(Role).Jump ? (openBlock(), createElementBlock("img", _hoisted_1$9)) : unref(props).role == unref(Role).ShotCharge ? (openBlock(), createElementBlock("img", _hoisted_2$7)) : unref(props).role == unref(Role).ShotRelease ? (openBlock(), createElementBlock("img", _hoisted_3$6)) : unref(props).role == unref(Role).Enemy ? (openBlock(), createElementBlock("img", _hoisted_4$3)) : createCommentVNode("", true),
        createBaseVNode("hr", {
          style: normalizeStyle({ borderColor: unref(color) })
        }, null, 4),
        createBaseVNode("div", _hoisted_5$1, toDisplayString(unref(description)), 1)
      ], 4);
    };
  }
};
var RoleSelectionCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-f73dd7cc"]]);
var RoleSelection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$6 = (n) => (pushScopeId("data-v-173202be"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { id: "playerName" };
const _hoisted_2$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("h2", null, "Choose your role:", -1));
const _hoisted_3$5 = { id: "selectionGrid" };
const _sfc_main$b = {
  props: {
    playerInfo: Object,
    roleState: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).RoleSelection,
          onHandle_btn_back: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).EnterName)),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        createBaseVNode("h1", _hoisted_1$8, toDisplayString(__props.playerInfo.name), 1),
        _hoisted_2$6,
        createBaseVNode("div", _hoisted_3$5, [
          createVNode(RoleSelectionCard, {
            role: unref(Role).Jump,
            class: normalizeClass({ selected: unref(props).roleState.jump.selected }),
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_select_role", unref(Role).Jump))
          }, null, 8, ["role", "class"]),
          createVNode(RoleSelectionCard, {
            role: unref(Role).ShotCharge,
            class: normalizeClass({ selected: unref(props).roleState.shotCharge.selected }),
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("handle_select_role", unref(Role).ShotCharge))
          }, null, 8, ["role", "class"]),
          createVNode(RoleSelectionCard, {
            role: unref(Role).ShotRelease,
            class: normalizeClass({ selected: unref(props).roleState.shotRelease.selected }),
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("handle_select_role", unref(Role).ShotRelease))
          }, null, 8, ["role", "class"]),
          createVNode(RoleSelectionCard, {
            role: unref(Role).Enemy,
            class: normalizeClass({ selected: unref(props).roleState.enemy.selected }),
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("handle_select_role", unref(Role).Enemy))
          }, null, 8, ["role", "class"])
        ])
      ], 64);
    };
  }
};
var RoleSelection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-173202be"]]);
var ColorBorder_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  props: {
    role: Object
  },
  setup(__props) {
    const props = __props;
    let color = "";
    switch (props.role) {
      case Role.Jump:
        color = "#00FFF0";
        break;
      case Role.ShotCharge:
        color = "#6BC203";
        break;
      case Role.ShotRelease:
        color = "#FF9900";
        break;
      case Role.Enemy:
        color = "#DB00FF";
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "colorBorder",
        style: normalizeStyle({ borderColor: unref(color) })
      }, null, 4);
    };
  }
};
var ColorBorder = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-3e087d30"]]);
var TriggerSelectionCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { id: "triggerSelectionCard" };
const _hoisted_2$5 = {
  key: 0,
  class: "icon shake"
};
const _hoisted_3$4 = {
  key: 1,
  class: "icon touch"
};
const _hoisted_4$2 = {
  key: 2,
  class: "icon voice"
};
const _sfc_main$9 = {
  props: {
    triggerOption: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        unref(props).triggerOption == unref(TriggerOption).Shake ? (openBlock(), createElementBlock("div", _hoisted_2$5)) : unref(props).triggerOption == unref(TriggerOption).Touch ? (openBlock(), createElementBlock("div", _hoisted_3$4)) : unref(props).triggerOption == unref(TriggerOption).Voice ? (openBlock(), createElementBlock("div", _hoisted_4$2)) : createCommentVNode("", true)
      ]);
    };
  }
};
var TriggerSelectionCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-294a335e"]]);
var TriggerSelection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$5 = (n) => (pushScopeId("data-v-14d46df8"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("h2", null, "Choose your playstyle", -1));
const _hoisted_2$4 = { id: "triggerSelectionGrid" };
const _sfc_main$8 = {
  props: {
    playerInfo: Object
  },
  emits: ["navigate_to", "release_role"],
  setup(__props, { emit }) {
    let handle_btn_back = () => {
      emit("release_role");
      emit("navigate_to", ScreenType.RoleSelection);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: __props.playerInfo.role
        }, null, 8, ["role"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).TriggerSelection,
          onHandle_btn_back: unref(handle_btn_back),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType", "onHandle_btn_back"]),
        createBaseVNode("h1", null, toDisplayString(__props.playerInfo.name), 1),
        _hoisted_1$6,
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Shake,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_trigger_selection", unref(TriggerOption).Shake))
          }, null, 8, ["triggerOption"]),
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Touch,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_trigger_selection", unref(TriggerOption).Touch))
          }, null, 8, ["triggerOption"]),
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Voice,
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("handle_trigger_selection", unref(TriggerOption).Voice))
          }, null, 8, ["triggerOption"])
        ])
      ], 64);
    };
  }
};
var TriggerSelection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-14d46df8"]]);
var _imports_0$2 = "./assets/ready.b6485a90.svg";
var _imports_1$2 = "./assets/unready.8176aec6.svg";
var ControlElement_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = {
  key: 0,
  class: "icon shake"
};
const _hoisted_2$3 = {
  key: 1,
  class: "icon touch"
};
const _hoisted_3$3 = {
  key: 2,
  class: "icon voice"
};
const _sfc_main$7 = {
  props: {
    triggerOption: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "controlElement",
        class: normalizeClass({ background: unref(props).triggerOption == unref(TriggerOption).Touch })
      }, [
        unref(props).triggerOption == unref(TriggerOption).Shake ? (openBlock(), createElementBlock("div", _hoisted_1$5)) : unref(props).triggerOption == unref(TriggerOption).Touch ? (openBlock(), createElementBlock("div", _hoisted_2$3)) : unref(props).triggerOption == unref(TriggerOption).Voice ? (openBlock(), createElementBlock("div", _hoisted_3$3)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
var ControlElement = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-270730a7"]]);
var Instruction_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-697f0c7a"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h1", null, "Instruction", -1));
const _hoisted_2$2 = {
  key: 2,
  class: "heartbeat"
};
const _hoisted_3$2 = {
  key: 3,
  id: "startingOverlay"
};
const _hoisted_4$1 = { id: "countdown" };
const _sfc_main$6 = {
  props: {
    playerInfo: Object,
    starting: Object
  },
  emits: [
    "handle_ready_change",
    "navigate_to",
    "release_trigger",
    "handle_trigger"
  ],
  setup(__props, { emit }) {
    const props = __props;
    let ready = ref(false);
    let counter = ref(3);
    let description_1 = "";
    let description_2 = "";
    let readyText = ref("Tap to ready up");
    switch (props.playerInfo.triggerOption) {
      case TriggerOption.Shake:
        description_1 = "Shake your phone to jump.";
        description_2 = "Shake again to doublejump.";
        break;
      case TriggerOption.Touch:
        description_1 = "Tap to jump.";
        description_2 = "Tap again to doublejump.";
        break;
      case TriggerOption.Voice:
        description_1 = "Say 'jump' to jump.";
        description_2 = "Say 'jump' again to doublejump.";
        break;
      default:
        console.log("Trigger option misconfigured");
        break;
    }
    switch (props.playerInfo.role) {
      case Role.Jump:
        break;
      case Role.ChargeShot:
        break;
      case Role.ReleaseShot:
        break;
      case Role.Enemy:
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    let toggleReady = () => {
      ready.value = !ready.value;
      if (ready.value) {
        readyText.value = "Tap to unready";
      } else {
        readyText.value = "Tap to ready up";
      }
      emit("handle_ready_change", ready.value);
    };
    let handle_btn_back = () => {
      emit("navigate_to", ScreenType.TriggerSelection);
      emit("release_trigger");
    };
    watch(() => props.starting, async (newValue, oldValue) => {
      console.log("Watched props.srating. New value is: " + newValue);
      if (newValue == true) {
        countDown();
      }
      if (newValue == false) {
        ready.value = false;
        counter.value = 3;
      }
    });
    let countDown = () => {
      if (counter.value > 0) {
        setTimeout(() => {
          counter.value--;
          countDown();
        }, 1e3);
      }
    };
    let handle_control_element = () => {
      if (props.playerInfo.triggerOption == TriggerOption.Touch) {
        emit("handle_trigger");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: unref(props).playerInfo.role
        }, null, 8, ["role"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Instruction,
          onHandle_btn_back: unref(handle_btn_back),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType", "onHandle_btn_back"]),
        _hoisted_1$4,
        createBaseVNode("h3", null, toDisplayString(unref(description_1)), 1),
        createBaseVNode("h3", null, toDisplayString(unref(description_2)), 1),
        createVNode(ControlElement, {
          onClick: unref(handle_control_element),
          triggerOption: unref(props).playerInfo.triggerOption
        }, null, 8, ["onClick", "triggerOption"]),
        !unref(ready) ? (openBlock(), createElementBlock("img", {
          key: 0,
          id: "btnReady",
          src: _imports_0$2,
          onClick: _cache[1] || (_cache[1] = (...args) => unref(toggleReady) && unref(toggleReady)(...args)),
          alt: ""
        })) : (openBlock(), createElementBlock("img", {
          key: 1,
          id: "btnReady",
          src: _imports_1$2,
          onClick: _cache[2] || (_cache[2] = (...args) => unref(toggleReady) && unref(toggleReady)(...args)),
          alt: ""
        })),
        createBaseVNode("h3", null, toDisplayString(unref(readyText)), 1),
        unref(ready) ? (openBlock(), createElementBlock("h3", _hoisted_2$2, "Waiting for other players...")) : createCommentVNode("", true),
        __props.starting ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode("h1", _hoisted_4$1, toDisplayString(unref(counter)), 1)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
};
var Instruction = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-697f0c7a"]]);
var Gameplay_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  props: {
    playerInfo: Object
  },
  emits: ["handle_trigger"],
  setup(__props, { emit }) {
    const props = __props;
    let description_1 = "";
    let description_2 = "";
    switch (props.playerInfo.triggerOption) {
      case TriggerOption.Shake:
        description_1 = "Shake your phone to jump.";
        description_2 = "Shake again to doublejump.";
        break;
      case TriggerOption.Touch:
        description_1 = "Tap to jump.";
        description_2 = "Tap again to doublejump.";
        break;
      case TriggerOption.Voice:
        description_1 = "Say 'jump' to jump.";
        description_2 = "Say 'jump' again to doublejump.";
        break;
      default:
        console.log("Trigger option misconfigured");
        break;
    }
    switch (props.playerInfo.role) {
      case Role.Jump:
        break;
      case Role.ChargeShot:
        break;
      case Role.ReleaseShot:
        break;
      case Role.Enemy:
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    let handle_control_element = () => {
      if (props.playerInfo.triggerOption == TriggerOption.Touch) {
        emit("handle_trigger");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: unref(props).playerInfo.role
        }, null, 8, ["role"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Gameplay,
          onHandle_btn_options: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("show_options"))
        }, null, 8, ["screenType"]),
        createBaseVNode("h1", null, toDisplayString(unref(props).playerInfo.name), 1),
        createBaseVNode("h3", null, toDisplayString(unref(description_1)), 1),
        createBaseVNode("h3", null, toDisplayString(unref(description_2)), 1),
        createVNode(ControlElement, {
          onClick: unref(handle_control_element),
          triggerOption: unref(props).playerInfo.triggerOption
        }, null, 8, ["onClick", "triggerOption"])
      ], 64);
    };
  }
};
var Gameplay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-26149bb2"]]);
var _imports_0$1 = "./assets/impressum.790ad1b6.svg";
var _imports_1$1 = "./assets/sound_unmuted.552d3431.svg";
var _imports_2 = "./assets/refresh.c01e1f53.svg";
var Options_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-5e8d8693"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { id: "optionsContainer" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1$1,
  alt: ""
}, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: ""
}, null, -1));
const _sfc_main$4 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Options,
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("img", {
            src: _imports_0$1,
            alt: "",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).Impressum))
          }),
          _hoisted_2$1,
          _hoisted_3$1,
          createBaseVNode("img", {
            src: _imports_3$1,
            alt: "",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).Gameplay))
          })
        ])
      ], 64);
    };
  }
};
var Options = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5e8d8693"]]);
var Impressum_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-c6313060"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { id: "impressumContainer" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, "Impressum"),
  /* @__PURE__ */ createBaseVNode("h2", null, "Created by:"),
  /* @__PURE__ */ createBaseVNode("div", null, [
    /* @__PURE__ */ createBaseVNode("h2", null, "Vanessa Buchmann"),
    /* @__PURE__ */ createBaseVNode("h2", null, "Nicole B\xE4nninger"),
    /* @__PURE__ */ createBaseVNode("h2", null, "Michael Brechb\xFChl"),
    /* @__PURE__ */ createBaseVNode("h2", null, "Nathalie Schwartz"),
    /* @__PURE__ */ createBaseVNode("h2", null, "Nicolas Vondru")
  ])
], -1));
const _sfc_main$3 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Impressum,
          onHandle_btn_back: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).Options)),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        _hoisted_1$2
      ], 64);
    };
  }
};
var Impressum = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c6313060"]]);
var _imports_0 = "./assets/tick.f821d064.svg";
var _imports_1 = "./assets/quit_x.55f14bfb.svg";
var LeaveConfirmation_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-0afb2c12"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { id: "leaveConfirmationContainer" };
const _hoisted_2 = { id: "innerContainer" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h1", null, "Do you really want to LEAVE?", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "The current game will terminate", -1));
const _hoisted_5 = { class: "icons" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "Yes", -1));
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "No", -1));
const _hoisted_11 = [
  _hoisted_9,
  _hoisted_10
];
const _sfc_main$2 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", {
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("confirm_leave_game"))
              }, _hoisted_8),
              createBaseVNode("div", {
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("abort_leave_game"))
              }, _hoisted_11)
            ])
          ])
        ])
      ], 64);
    };
  }
};
var LeaveConfirmation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0afb2c12"]]);
var Disconnected_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-bcb08dd4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { id: "container" }, [
  /* @__PURE__ */ createBaseVNode("div", { id: "innerContainer" }, [
    /* @__PURE__ */ createBaseVNode("h1", null, "You left the game."),
    /* @__PURE__ */ createBaseVNode("h2", null, "To play again, scan a game QR-code.")
  ])
], -1));
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        _hoisted_1
      ], 64);
    };
  }
};
var Disconnected = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bcb08dd4"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup(__props) {
    let currentScreen = ref(ScreenType.EnterName);
    let lastScreen = ref(currentScreen.value);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let url = urlParams.get("url");
    let roomId = urlParams.get("id");
    console.log("Retrieved socket.io URL: " + url);
    console.log("Retrieved Room ID: " + roomId);
    let playerInfo = {
      name: "",
      role: new Role(),
      triggerOption: new TriggerOption(),
      readyState: false
    };
    let roleState = ref([]);
    let starting = ref(false);
    let setPlayerName = (name) => {
      playerInfo.name = name;
      socket.emit("set name", name);
      setCurrentScreen(ScreenType.RoleSelection);
    };
    let setPlayerRole = (role) => {
      playerInfo.role = role;
      socket.emit("role selected", playerInfo);
      setCurrentScreen(ScreenType.TriggerSelection);
    };
    let setPlayerTriggerOption = (triggerOption) => {
      playerInfo.triggerOption = triggerOption;
      socket.emit("trigger option selected", playerInfo);
      setCurrentScreen(ScreenType.Instruction);
    };
    let setPlayerReadyState = (readyState) => {
      playerInfo.readyState = readyState;
      socket.emit("update ready state", playerInfo);
    };
    let setCurrentScreen = (screen) => {
      lastScreen.value = currentScreen.value;
      console.log("Last screen was: " + lastScreen.value.type);
      console.log("Setting screen: " + screen.type);
      currentScreen.value = screen;
    };
    let showOptions = () => {
      setCurrentScreen(ScreenType.Options);
    };
    let leaveGame = () => {
      setCurrentScreen(ScreenType.Disconnected);
      socket.disconnect();
    };
    let requestRoleState = () => {
      socket.emit("request role state");
    };
    let releaseRole = () => {
      socket.emit("release role");
    };
    let releaseTrigger = () => {
      socket.emit("release trigger");
      if (playerInfo.readyState == true) {
        setPlayerReadyState(false);
      }
    };
    let trigger = () => {
      console.log("Emitting trigger: " + playerInfo.role.role);
      socket.emit(playerInfo.role.role);
    };
    let socket = io(url || "https://2a5a-2a02-1210-88f4-c400-91a5-22d0-6b51-b1b7.ngrok.io/");
    socket.on("connection success", (response) => {
      console.log(response);
      socket.emit("join room", roomId || "nSTjRDJTC-_QkiJeAAAB");
      requestRoleState();
    });
    socket.on("disconnect", () => {
      setCurrentScreen(ScreenType.Disconnected);
    });
    socket.on("update role state", (states) => {
      states.forEach((state) => {
        roleState.value[state.role] = {
          selected: state.selected,
          playerName: state.playerName
        };
      });
    });
    socket.on("start game", () => {
      starting.value = true;
      setTimeout(() => {
        setCurrentScreen(ScreenType.Gameplay);
      }, 3e3);
    });
    socket.on("reset ready state", () => {
      starting.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(currentScreen).type == unref(ScreenType).EnterName.type ? (openBlock(), createBlock(EnterName, {
          key: 0,
          onHandle_set_name: unref(setPlayerName),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["onHandle_set_name"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).RoleSelection.type ? (openBlock(), createBlock(RoleSelection, {
          key: 1,
          playerInfo: unref(playerInfo),
          roleState: unref(roleState),
          onNavigate_to: unref(setCurrentScreen),
          onHandle_select_role: unref(setPlayerRole),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["playerInfo", "roleState", "onNavigate_to", "onHandle_select_role"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).TriggerSelection.type ? (openBlock(), createBlock(TriggerSelection, {
          key: 2,
          playerInfo: unref(playerInfo),
          onNavigate_to: unref(setCurrentScreen),
          onRelease_role: unref(releaseRole),
          onHandle_trigger_selection: unref(setPlayerTriggerOption),
          onHandle_btn_leave: _cache[2] || (_cache[2] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["playerInfo", "onNavigate_to", "onRelease_role", "onHandle_trigger_selection"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Instruction.type ? (openBlock(), createBlock(Instruction, {
          key: 3,
          playerInfo: unref(playerInfo),
          starting: unref(starting),
          onNavigate_to: unref(setCurrentScreen),
          onRelease_trigger: unref(releaseTrigger),
          onHandle_ready_change: unref(setPlayerReadyState),
          onHandle_btn_leave: _cache[3] || (_cache[3] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation)),
          onHandle_trigger: unref(trigger)
        }, null, 8, ["playerInfo", "starting", "onNavigate_to", "onRelease_trigger", "onHandle_ready_change", "onHandle_trigger"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Gameplay.type ? (openBlock(), createBlock(Gameplay, {
          key: 4,
          playerInfo: unref(playerInfo),
          onShow_options: unref(showOptions),
          onHandle_trigger: unref(trigger)
        }, null, 8, ["playerInfo", "onShow_options", "onHandle_trigger"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Options.type ? (openBlock(), createBlock(Options, {
          key: 5,
          onNavigate_to: unref(setCurrentScreen),
          onHandle_btn_leave: _cache[4] || (_cache[4] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["onNavigate_to"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Impressum.type ? (openBlock(), createBlock(Impressum, {
          key: 6,
          onNavigate_to: unref(setCurrentScreen),
          onHandle_btn_leave: _cache[5] || (_cache[5] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["onNavigate_to"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).LeaveConfirmation.type ? (openBlock(), createBlock(LeaveConfirmation, {
          key: 7,
          onConfirm_leave_game: unref(leaveGame),
          onAbort_leave_game: _cache[6] || (_cache[6] = ($event) => unref(setCurrentScreen)(unref(lastScreen)))
        }, null, 8, ["onConfirm_leave_game"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Disconnected.type ? (openBlock(), createBlock(Disconnected, { key: 8 })) : createCommentVNode("", true)
      ], 64);
    };
  }
};
createApp(_sfc_main).mount("#app");
