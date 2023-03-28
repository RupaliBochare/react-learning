const heading = React.createElement(
  "h1",
  { id: "heading", customAttr: "xyz" },
  "Welcome for react programming"
);
const rootEle = ReactDOM.createRoot(document.getElementById("test"));
rootEle.render(heading);
