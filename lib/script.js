"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _React$useState = React.useState(initialMarkdownPlaceholder),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      markdownText = _React$useState2[0],
      setMarkdownText = _React$useState2[1];

  function handleEditorChange(event) {
    setMarkdownText(event.target.value);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Editor, {
    onChange: handleEditorChange,
    editorText: markdownText
  }), /*#__PURE__*/React.createElement(Preview, {
    previewText: markdownText
  }));
}

function Editor(props) {
  var onChange = props.onChange,
      editorText = props.editorText;
  return /*#__PURE__*/React.createElement("div", {
    className: "editor__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "editor__heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Editor"), /*#__PURE__*/React.createElement("a", {
    href: "https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax",
    target: "_blank",
    className: "button"
  }, "Markdown Guide")), /*#__PURE__*/React.createElement("textarea", {
    className: "editor",
    id: "editor",
    type: "text",
    onChange: onChange,
    value: editorText
  }));
}

function Preview(props) {
  marked.setOptions({
    breaks: true
  });
  var previewText = props.previewText;
  var previewHTML = marked(previewText);
  return /*#__PURE__*/React.createElement("div", {
    className: "preview__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "preview__heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Preview")), /*#__PURE__*/React.createElement("div", {
    className: "preview",
    id: "preview",
    dangerouslySetInnerHTML: {
      __html: previewHTML
    }
  }));
}

var initialMarkdownPlaceholder = "# Heading 1: \\# text\n\n## Heading 2: \\## text\n\n**Bold text**: \\*\\*text\\*\\*\n\n[Link](https://andrewbraun.dev): \\[Text\\]\\(https://link.link)\n\n```javascript\nconst codeArray = [\"This\", \"is\", \"a\", \"code\", \"block\"]\nconsole.log(codeArray.join(\"\"))\n```\n\n`const thisCodeElement = \"inline-code\"`\n\n* List Item 1\n* List Item 2\n\n> This is a blockquote\n\n![Random synthwave picture](https://image.freepik.com/free-vector/synthwave-night-city-background_126980-167.jpg)\n";
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#main-container"));