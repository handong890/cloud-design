import {c as createElement, C as Component} from "./index.d0c11305.js";
import {N as NextBox} from "./f3ad3915.js";
import {N as NextSwitch} from "./387002e3.js";
import {q as qe} from "./ca03a06a.js";
class BoxDemo extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      direction: "row",
      align: "center",
      style: {height: 90}
    }, /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }))), /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      direction: "row",
      justify: "center"
    }, /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }))), /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      direction: "row",
      justify: "center",
      padding: 20
    }, /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50"
    }))));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(BoxDemo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
    border: 1px solid #ddd;
  }
  .box {
    background: #5584ff;
    min-height: 100%;
  }
  .distinct {
    background: #46bc15;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class BoxDemo$1 extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      spacing: 20
    }, /* @__PURE__ */ createElement("div", {
      className: "border-box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "border-box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "border-box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "border-box height-30"
    }))));
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(BoxDemo$1, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .border-box {
    background: #5584ff;
  }
  .height-30 {
    height: 30px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class BoxDemo$2 extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      spacing: 20
    }, /* @__PURE__ */ createElement("div", {
      className: "box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box height-30"
    }))), /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      spacing: 20,
      direction: "row"
    }, /* @__PURE__ */ createElement("div", {
      className: "box width-30 height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box width-30 height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box width-30 height-30"
    }), /* @__PURE__ */ createElement("div", {
      className: "box width-30 height-30"
    }))));
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(BoxDemo$2, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
    min-height: 30px;
  }
  .box {
    background: #5584ff;
  }

  .height-30 {
    height: 30px;
  }

  .width-30 {
    width: 30px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class BoxDemo$3 extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      direction: "row",
      align: "center",
      padding: 20,
      className: "box"
    }, /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }))), /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      direction: "row"
    }, /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50 box"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50 box"
    }), /* @__PURE__ */ createElement(NextBox, {
      margin: [0, 20],
      className: "box-180-50 box"
    }), /* @__PURE__ */ createElement(NextBox, {
      className: "box-180-50 box"
    }))));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(BoxDemo$3, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .box-180-50 {
    width: 180px;
    height: 50px;
    border: 1px solid #5584ff;
    background: #fff;
  }
  .box {
    background: #5584ff;
    min-height: 100%;
    border: 1px solid #ddd;
  }
  .distinct {
    background: #46bc15;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class BoxDemo$4 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      wrap: true
    };
    this.onSwitchChange = (checked) => {
      this.setState({
        wrap: checked
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement(NextSwitch, {
      style: {width: 70},
      defaultChecked: true,
      checkedChildren: "wrap",
      onChange: this.onSwitchChange
    }), /* @__PURE__ */ createElement("div", {
      className: "list-item"
    }, /* @__PURE__ */ createElement(NextBox, {
      spacing: 20,
      wrap: this.state.wrap,
      direction: "row"
    }, /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }), /* @__PURE__ */ createElement("div", {
      className: "box-180-50"
    }))));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(BoxDemo$4, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
    min-height: 50px;
  }
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const modules = {};
modules["_align&justify"] = m0;
modules["_basic"] = m1;
modules["_direction"] = m2;
modules["_padding&margin"] = m3;
modules["_wrap"] = m4;
export default modules;