import RangyHighlighter from "./RangyHighlighter";
import { Provider } from "react-redux";
import { store } from "../app/store";

export function Highlighter(props) {
  return (
    <div>
      <Provider store={store}>
        <RangyHighlighter {...props} />
      </Provider>
    </div>
  );
}
