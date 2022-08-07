import RangyHighlighter from "./RangyHighlighter.jsx";
import { Provider } from "react-redux";
import { store } from "../app/store";
import React from "react";

export default function Highlighter(props) {
  return (
    <div>
      <Provider store={store}>
        <RangyHighlighter {...props} />
      </Provider>
    </div>
  );
}
