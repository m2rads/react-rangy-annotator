'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var rangy = require('rangy');
require('rangy/lib/rangy-classapplier');
require('rangy/lib/rangy-core');
require('rangy/lib/rangy-highlighter');
require('rangy/lib/rangy-textrange');
require('rangy/lib/rangy-serializer');
require('rangy/lib/rangy-selectionsaverestore');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var rangy__default = /*#__PURE__*/_interopDefaultLegacy(rangy);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "a{text-decoration:none}.clear{display:inline}.h-y{background-color:#fdd835}.h-g{background-color:#a5d6a7}.h-p{background-color:#f48fb1}.h-b{background-color:#e1f5fe}";
styleInject(css_248z$2);

var css_248z$1 = ".tooltip{background:#fff;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);opacity:0;padding:7px;position:fixed;z-index:1000}.h-color{align-items:center;display:flex;justify-content:space-evenly;margin:0 auto}.h-color p{font-size:1rem}.color-btn{border-radius:50%;cursor:pointer;margin-right:5px;padding:15px}.color-btn:focus,.color-btn:hover{border:2px solid #00695c}.h-y{background-color:#ffeb3b}.h-g{background-color:#c5e1a5}.h-p{background-color:#f8bbd0}.h-b{background-color:#81d4fa}.btn-gp{display:flex;flex-wrap:wrap;margin-top:10px;padding:10px 0;width:100%}.btn-gp>*{flex:1 100%}.btn-el{-webkit-appearance:none;-moz-appearance:none;background:#fff;border:none;border-bottom:2px solid #00695c;color:#000;cursor:pointer;display:inline-block;font-family:sans-serif;font-size:1rem;margin:0;padding:8px 5px;text-align:left;text-decoration:none;transition:background 90ms ease-in-out,transform 90ms ease;width:100%}.btn-gp:first-child{border-top:2px solid #00695c!important}.btn-el:focus,.btn-el:hover{background:#e0f2f1}.btn-el:focus{outline:1px solid #fff;outline-offset:-4px}.btn-el:active{transform:scale(.99)}";
styleInject(css_248z$1);

class Tootlip extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
      hColor: "h-y"
    };
  }

  handleSetColor = color => {
    this.setState((state, props) => {
      return {
        hColor: color
      };
    }, () => {
      this.props.onHighlight(this.state.hColor);
    });
  };

  render() {
    if (this.props.annotator) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "tooltip",
        id: "tooltip",
        style: this.props.toolTipLocStyle
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "heading"
      }, /*#__PURE__*/React__default["default"].createElement("p", null, "Highlight"), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "h-color"
      }, /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-y",
        onClick: () => this.handleSetColor("h-y")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-g",
        onClick: () => this.handleSetColor("h-g")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-p",
        onClick: () => this.handleSetColor("h-p")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-b",
        onClick: () => this.handleSetColor("h-b")
      }))), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "btn-gp"
      }, /*#__PURE__*/React__default["default"].createElement("button", {
        className: "btn-el",
        onClick: () => this.props.onAddNote(this.state.hColor)
      }, "Add Note"), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "btn-el",
        onClick: () => this.props.onRead()
      }, "Read"), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "btn-el",
        onClick: () => this.props.onRemove()
      }, "Remove")));
    } else {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "tooltip",
        id: "tooltip",
        style: this.props.toolTipLocStyle
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "heading"
      }, /*#__PURE__*/React__default["default"].createElement("p", null, "Highlight"), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "h-color"
      }, /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-y",
        onClick: () => this.handleSetColor("h-y")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-g",
        onClick: () => this.handleSetColor("h-g")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-p",
        onClick: () => this.handleSetColor("h-p")
      }), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "color-btn h-b",
        onClick: () => this.handleSetColor("h-b")
      }))), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "btn-gp"
      }, /*#__PURE__*/React__default["default"].createElement("button", {
        className: "btn-el",
        onClick: () => this.props.onRemove()
      }, "Remove")));
    }
  }

}

const useAppDispatch = () => reactRedux.useDispatch();
const useAppSelector = reactRedux.useSelector;

const initialState = {
  value: ""
};
const noteSlice = toolkit.createSlice({
  name: "note",
  initialState,
  reducers: {
    //update note
    updated(state, action) {
      // immer library allows us to mutate state directly under the hood
      state.value = action.payload;
    },

    clearNote(state) {
      state.value = "";
    }

  }
});
const {
  updated,
  clearNote
} = noteSlice.actions;
var noteReducer = noteSlice.reducer;

var css_248z = ".note-container{background:#fff;border:1px solid grey;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.19);opacity:0;position:fixed;z-index:10}.note-header{border-radius:10px 10px 0 0}.note-footer,.note-header{background-color:#ffefd5;height:20px}.note-footer{border-radius:0 0 10px 10px}.close-butt{border:none;border-radius:0 10px 0 0}.close-butt,.save-butt{float:right;height:20px;opacity:.5}.save-butt{border:none;border-radius:0 0 10px 0}.del-butt{border:none;border-radius:0 0 0 10px;float:left;height:20px;opacity:.5}.note-content{background-color:hsla(0,0%,100%,.2);border:none;color:#000;height:200px;width:200px}";
styleInject(css_248z);

function StickyNote(props) {
  const note = useAppSelector(state => state.note.value);
  const dispatch = useAppDispatch();
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "note-container",
    style: props.stickyNoteStyle
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "note-header"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "close-butt",
    onClick: () => props.onCloseNote()
  }, "X")), /*#__PURE__*/React__default["default"].createElement("textarea", {
    className: "note-content",
    id: "noteTextArea",
    value: note,
    onChange: e => dispatch(updated(e.target.value)),
    type: "text"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "note-footer"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "save-butt",
    onClick: e => props.onSave(note)
  }, "Save"), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "del-butt",
    onClick: e => props.onDelete()
  }, "Delete"))));
}

class RangyHighlighter extends React__default["default"].Component {
  constructor(props) {
    super(props);
    rangy__default["default"].init();
    this.highlighter = rangy__default["default"].createHighlighter();
    this.state = {
      toolTipStyle: {
        opacity: 0
      },
      stickyNoteStyle: {
        opacity: 0
      },
      noteList: {},
      activeHighlight: null
    };
    this.showToolTip = this.showToolTip.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
    let sr = JSON.parse(localStorage.getItem("sr"));
    console.log(sr);

    if (sr !== null) {
      this.serializedHls = sr;
    } else {
      this.serializedHls = [];
    }

    if (!this.props.localStorage) {
      window.localStorage.clear();
    }

    this.highlighter.addClassApplier(rangy__default["default"].createClassApplier("h-y", {
      ignoreWhiteSpace: true,
      elementTagName: "span",
      elementProperties: {
        id: "highlight",
        onclick: e => {
          // let highlight = this.highlighter.getHighlightsInSelection();
          this.activateTooltip(e);
        }
      }
    }));
    this.highlighter.addClassApplier(rangy__default["default"].createClassApplier("h-g", {
      ignoreWhiteSpace: true,
      elementTagName: "span",
      elementProperties: {
        id: "highlight",
        onclick: e => {
          this.activateTooltip(e);
        }
      }
    }));
    this.highlighter.addClassApplier(rangy__default["default"].createClassApplier("h-p", {
      ignoreWhiteSpace: true,
      elementTagName: "span",
      elementProperties: {
        id: "highlight",
        onclick: e => {
          // let highlight = this.highlighter.getHighlightsInSelection();
          this.activateTooltip(e);
        }
      }
    }));
    this.highlighter.addClassApplier(rangy__default["default"].createClassApplier("h-b", {
      ignoreWhiteSpace: true,
      elementTagName: "span",
      elementProperties: {
        id: "highlight",
        onclick: e => {
          // let highlight = this.highlighter.getHighlightsInSelection();
          console.log(this.state.globalHighlighter);
          this.displaySerialized();
          this.activateTooltip(e);
        }
      }
    })); // restore the highlights

    if (this.serializedHls !== null) {
      for (let i in this.serializedHls) {
        try {
          rangy__default["default"].deserializeSelection(this.serializedHls[i].sr);
          this.highlighter.highlightSelection(this.serializedHls[i].color);
          let highlightInSelection = this.highlighter.getHighlightsInSelection();
          console.log(highlightInSelection);
        } catch (exp) {}
      }
    }
  }

  componentDidUpdate() {// window.localStorage.setItem("sr", this.serializedHighlights);
  } // cleanup event listeners to avoid memory leak on older browsers


  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  render() {
    if (this.props.annotator) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/React__default["default"].createElement(Tootlip, {
        toolTipLocStyle: this.state.toolTipStyle,
        onHighlight: color => this.highlightSelectedText(color),
        onRemove: () => this.removeHighlightSelection(),
        onAddNote: noteColor => this.handleAddNote(noteColor),
        onRead: () => this.highlightTextReader(),
        annotator: true
      }), /*#__PURE__*/React__default["default"].createElement(StickyNote, {
        stickyNoteStyle: this.state.stickyNoteStyle,
        onCloseNote: () => this.handleCloseNote(),
        onSave: noteTxt => this.saveNote(noteTxt),
        onDelete: () => this.deleteNote()
      }));
    } else {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/React__default["default"].createElement(Tootlip, {
        toolTipLocStyle: this.state.toolTipStyle,
        onHighlight: color => this.highlightSelectedText(color),
        onRemove: () => this.removeHighlightSelection(),
        annotator: false
      }));
    }
  }

  storeSerializedHighlights = (hlId, hlColor, sr) => {
    let srHl = {
      id: hlId,
      sr: sr,
      color: hlColor
    };
    console.log(srHl);
    this.serializedHls.push(srHl);
    window.localStorage.setItem("sr", JSON.stringify(this.serializedHls));
  }; // make the call to highlight state driven

  highlightSelectedText = color => {
    let sr = rangy__default["default"].serializeSelection();
    this.highlighter.highlightSelection(color);
    let highlightInSelection = this.highlighter.getHighlightsInSelection();
    this.storeSerializedHighlights(highlightInSelection[0].id, color, sr);
  };
  displaySerialized = () => {
    this.setState({
      isSerialized: this.highlighter.serialize()
    });
    console.log(this.state.isSerialized);
  };
  removeHighlightSelection = () => {
    // let highlight = this.highlighter.getHighlightsInSelection();
    this.deleteNote(true);
    this.highlighter.unhighlightSelection(); // if (window.confirm("Delete this highlight (ID " + highlight[0].id + ")?")) {
    // }
  };
  handleMouseUp = e => {
    if (e.target.className !== "highlight") {
      setTimeout(this.showToolTip(), 2);
    }
  };
  showToolTip = () => {
    let selection = window.getSelection();
    let toolTipLocStyle = {
      opacity: 0,
      display: "none"
    };

    if (selection.toString() !== "") {
      toolTipLocStyle = {
        top: 30 + "%",
        left: 40 + "%",
        opacity: 1
      };
    }

    this.setState({
      toolTipStyle: toolTipLocStyle
    });
  }; // show tooltip when clicking on the highlighted text

  activateTooltip(e) {
    if (e.target.id === "highlight") {
      this.setState({
        toolTipStyle: {
          top: 30 + "%",
          left: 40 + "%",
          opacity: 1
        }
      });
    }
  }

  handleCloseNote = () => {
    this.setState({
      stickyNoteStyle: {
        display: "none",
        opacity: 0
      }
    });
    this.props.clearNote();
  };

  noteDisplay() {
    let toolTipLocStyle = {
      opacity: 0,
      display: "none"
    };
    this.setState({
      toolTipStyle: toolTipLocStyle,
      stickyNoteStyle: {
        top: 30 + "%",
        left: 50 + "%",
        opacity: 1
      }
    });
  }

  handleAddNote = hlcolor => {
    let highlightInSelection = this.highlighter.getHighlightsInSelection();

    if (highlightInSelection[0] !== undefined) {
      console.log(highlightInSelection);
      console.log(this.serializedHls); // let currentNote = this.serializedHls[0].sr
    } else {
      // serialize the selction before dom makes any new changes for highlights
      let sr = rangy__default["default"].serializeSelection();
      this.highlighter.highlightSelection(hlcolor);
      highlightInSelection = this.highlighter.getHighlightsInSelection();
      this.storeSerializedHighlights(highlightInSelection[0].id, hlcolor, sr);
    } // console.log(highlightInSelection);


    this.setState({
      activeHighlight: highlightInSelection[0].id
    }, () => {
      return 0;
    });
    let currentNote = window.localStorage.getItem(highlightInSelection[0].id);

    if (currentNote !== undefined) {
      this.props.updated(currentNote);
    } else {
      window.localStorage.setItem(highlightInSelection[0].id, " ");
    }

    this.noteDisplay();
  };
  saveNote = noteTxt => {
    let currentHighlight = this.state.activeHighlight;
    window.localStorage.setItem(currentHighlight, noteTxt);
  };
  deleteNote = rmHl => {
    let currentHighlight = this.state.activeHighlight;

    if (rmHl) {
      if (window.confirm("Delete this highlight (ID " + currentHighlight + ")?")) {
        // window.localStorage.clear();
        if (this.serializedHls !== null) {
          for (let i in this.serializedHls) {
            try {
              let highlightInSelection = this.highlighter.getHighlightsInSelection();

              if (this.serializedHls[i].id === highlightInSelection[0].id) {
                this.serializedHls.splice(i, 1);
                window.localStorage.setItem("sr", JSON.stringify(this.serializedHls));
                window.localStorage.removeItem(currentHighlight);
                this.handleCloseNote();
              }
            } catch (exp) {}
          }
        }
      }
    } else {
      if (window.confirm("Delete this note (ID " + currentHighlight + ")?")) {
        // window.localStorage.clear();
        window.localStorage.removeItem(currentHighlight);
        this.handleCloseNote();
      }
    }
  };
  highlightTextReader = () => {
    let highlightInSelection = this.highlighter.getHighlightsInSelection();

    if (highlightInSelection[0] === undefined) {
      if ("speechSynthesis" in window) {
        let textSlection = window.getSelection().toString();
        var speech = new SpeechSynthesisUtterance();
        speech.text = textSlection;
        window.speechSynthesis.speak(speech);
      } else {
        alert("Sorry, your browser doesn't support text to speech!");
      }
    } else {
      console.log("throw an error");
    }
  };
}

const mapStateToProps = state => {
  return {
    note: state.note.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updated: noteTxt => dispatch(updated(noteTxt)),
    clearNote: () => dispatch(clearNote())
  };
};

var RangyHighlighter$1 = reactRedux.connect(mapStateToProps, mapDispatchToProps)(RangyHighlighter);

const store = toolkit.configureStore({
  reducer: {
    note: noteReducer
  }
});

function Highlighter(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default["default"].createElement(RangyHighlighter$1, props)));
}

exports.Highlighter = Highlighter;
