# React Rangy Highlighter

Web annotation tool that allows users to apply highlights on the selected text and add annotations. 

# Peer Dependencies

react-rangy-highlighter relize on two dependencies. It utilizes the **[rangy/core][rangy]** which is a cross browser Javascript library that helps with processing user text selection.
It also takes advantage of react-redux for updating anntotations across components seemlessly.


**NOTE:** You need to have both rangy and react-redux installed to be able to use this library. 

```
npm install rangy rangy-serializer @types/rangy
```

```
npm install @reduxjs/toolkit@next react-redux
```

# Installation

```
npm install react-rangy-highlighter --save
```

## Usage
```js
import Highlighter from "react-rangy-highlighter";

function App() {
  return (
    <div className="App">
        <Highlighter annotator />
    </div>
  );
}

export default App;
```

## Props

- `annotator`: Defaults to false. Allows the user to make annotations on the web
- `localStorage`: Defaults to false. Allows the user to save their highlights and annotations in localStorage 


[rangy]: https://github.com/timdown/rangy
