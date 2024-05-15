import { useRef } from "react";
import Displaysection from "./components/Displaysection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Soundsection from "./components/Soundsection";
import WebgiViewer from "./components/WebgiViewer";
import  Loader from "./components/Loader";
// import { useRef } from "react";
function App() {
  const webgiViewerRef=useRef();
  const contentRef=useRef();
  const handlePreview=()=>{  
    webgiViewerRef.current.triggerPreview();
  }
  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
      <Nav />
      <Jumbotron />
      <Soundsection />
      <Displaysection triggerPreview={handlePreview}  />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
