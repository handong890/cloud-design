import {c as createElement, C as Component} from "./index.d0c11305.js";
import "./ce63a13f.js";
import {P as Pagination} from "./4a95a792.js";
import {q as qe} from "./ca03a06a.js";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(current) {
    this.setState({
      current
    });
  }
  render() {
    return /* @__PURE__ */ createElement(Pagination, {
      current: this.state.current,
      onChange: this.handleChange
    });
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const handlePageSizeChange = (size) => console.log(size);
const containerStyle = {
  height: "300px",
  padding: 0,
  width: "100%"
};
const boxStyle = {
  overflow: "auto",
  position: "relative",
  width: "100%",
  height: "200px",
  border: "1px solid black"
};
const tempStyle = {
  height: "200px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center"
};
const parentStyle = {
  display: "flex",
  "justify-content": "space-between"
};
const popupProps = {
  align: "bl tl"
};
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "default align - 'tl bl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange
  }), /* @__PURE__ */ createElement("h3", null, "custom align - 'bl tl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange,
    popupProps
  }), /* @__PURE__ */ createElement("h3", null, 'Inside parent with "overlflow: auto"'), /* @__PURE__ */ createElement("div", {
    style: containerStyle
  }, /* @__PURE__ */ createElement("div", {
    style: boxStyle
  }, /* @__PURE__ */ createElement("div", {
    style: tempStyle
  }, "scroll down to see the example"), /* @__PURE__ */ createElement("div", {
    style: parentStyle
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "default align - 'tl bl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange
  })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "custom align - 'bl tl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange,
    popupProps
  }))))));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const format = `${window.location.href}#/{page}`;
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    link: format
  });
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const handlePageSizeChange$1 = (size) => console.log(size);
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "To hidden per page size selector"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: false
  }), /* @__PURE__ */ createElement("h3", null, "Type per page size selector of is dropdown，and as for the tail of the entire component"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    pageSizePosition: "end",
    onPageSizeChange: handlePageSizeChange$1
  }), /* @__PURE__ */ createElement("h3", null, "Filter type per page size selector, and use floating layout"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "filter",
    onPageSizeChange: handlePageSizeChange$1,
    useFloatLayout: true
  }));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "normal"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2
  }), /* @__PURE__ */ createElement("h3", null, "arrow-only"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "arrow-only"
  }), /* @__PURE__ */ createElement("h3", null, "arrow-prev-only"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "arrow-prev-only"
  }), /* @__PURE__ */ createElement("h3", null, "no-border"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "no-border",
    type: "simple"
  }));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .next-pagination + .next-pagination {
    margin-top: 20px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const total = 50;
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Pagination, {
    className: "custom-pagination",
    total,
    totalRender: (total2) => `Total: ${total2}`
  });
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .custom-pagination {
    display: inline-block;
    margin-left: 10px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "small"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "small"
  }), /* @__PURE__ */ createElement("h3", null, "medium"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "medium"
  }), /* @__PURE__ */ createElement("h3", null, "large"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "large"
  }));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "normal"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2
  }), /* @__PURE__ */ createElement("h3", null, "simple"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    type: "simple"
  }), /* @__PURE__ */ createElement("h3", null, "mini"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    type: "mini"
  }));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const change = function(value) {
  console.log(value);
};
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    onChange: change
  });
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const modules = {};
modules["_control"] = m0;
modules["_dropdown-direction"] = m1;
modules["_link"] = m2;
modules["_page-size"] = m3;
modules["_shape"] = m4;
modules["_show-total"] = m5;
modules["_size"] = m6;
modules["_type"] = m7;
modules["_uncontrol"] = m8;
export default modules;