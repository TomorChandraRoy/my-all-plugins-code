import { useRef, useEffect } from "react";

const SwiperDemo = () => {
    const swiperRef = useRef(null);
    const pageRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        new Swiper(swiperRef.current, {
            direction: "horizontal",
            loop: true,
            pagination: {
                el: pageRef.current,
                clickable: true,
            },
            navigation: {
                nextEl: nextRef.current,
                prevEl: prevRef.current,
            },
        });
    }, []);

    return (

        <div className="swiper mySwiper" style={{ width: "80%", height: "50%" }} ref={swiperRef}>
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ textAlign: "center", fontSize: "18px", background: "#3fa6a2", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{
                        display: "block", width: "100%", height: "100%",
                        objectFit: "cover"
                    }} src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
                </div>

                <div className="swiper-slide" style={{ textAlign: "center", fontSize: "18px", background: "#3fa6a2", display: "flex", justifyContent: "center", alignItems: "center" }}>                         <img style={{
                    display: "block", width: "100%", height: "100%",
                    objectFit: "cover"
                }} src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" /></div>
                <div className="swiper-slide" style={{ textAlign: "center", fontSize: "18px", background: "#3fa6a2", display: "flex", justifyContent: "center", alignItems: "center" }}>                        <img style={{
                    display: "block", width: "100%", height: "100%",
                    objectFit: "cover"
                }} src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" /></div>
                <div className="swiper-slide" style={{ textAlign: "center", fontSize: "18px", background: "#3fa6a2", display: "flex", justifyContent: "center", alignItems: "center" }}>                        <img style={{
                    display: "block", width: "100%", height: "100%",
                    objectFit: "cover"
                }} src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" /></div>
            </div>
            <div className="swiper-pagination" ref={pageRef}></div>
            <div className="swiper-button-prev" ref={prevRef}></div>
            <div className="swiper-button-next" ref={nextRef}></div>
        </div>


    );
};

export default SwiperDemo;


