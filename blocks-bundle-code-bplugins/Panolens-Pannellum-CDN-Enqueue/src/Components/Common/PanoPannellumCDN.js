import { useEffect, useRef } from "react";


const PanoPannellumCDN = () => {
const imgConRef = useRef(null);

    useEffect(() => {
        if (window.PANOLENS) {
            const panorama = new window.PANOLENS.ImagePanorama('https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_1280.jpg');

            const viewer = new window.PANOLENS.Viewer({
                container: imgConRef.current
            });

            viewer.add(panorama);
        }
    }, []);

    return  <div ref={imgConRef}   style={{
        width: "100%",
        height: "517px",
        display: "block" 
      }}></div> 
};

export default PanoPannellumCDN;