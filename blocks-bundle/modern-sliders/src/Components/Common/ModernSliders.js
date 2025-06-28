import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { useRef } from 'react';
import { useSelect } from '@wordpress/data';



const ModernSliders = ({ attributes, }) => {
    const { items, contentAlignment, autoPlay, sliderNavigation, sliderPagination, sliderMouseWheel, slidersimulateTouch, prevArrow, nextArrow , selectedAnimation,animationDuration,animationDelay,decAnimation,decAnimationDelay,decAnimationDuration,buttonAnimation,buttonAnimationDelay,buttonAnimationDuration} = attributes;
    const swiperRef = useRef(null);
    const { status, delay } = autoPlay;
    const isEditor = useSelect((select) => select('core/editor'));

    const autopPlayConfiq = autoPlay.status ? { delay, disableOnInteraction: false, } : "";

    const pagination = sliderPagination ? { clickable: true } : "";

    const SliderMousewheel = sliderMouseWheel ? true : "";

    const SliderslidersimulateTouch = slidersimulateTouch ? true : false;

    const renderCustomArrow = (arrow) => {
        return <span dangerouslySetInnerHTML={{ __html: arrow }} />;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                simulateTouch={SliderslidersimulateTouch}
                autoplay={autopPlayConfiq}
                mousewheel={SliderMousewheel}
                pagination={
                    pagination
                }
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation={sliderNavigation ? { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' } : false}

                modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                className="mySwiper"
                key={`${status}-${delay}-${sliderPagination}-${sliderMouseWheel}-${slidersimulateTouch}`}
            >
                {items.map((item, itemIndex) => (
                    <SwiperSlide
                        key={itemIndex}
                        className='swiper-main-content'
                        style={{
                            backgroundImage: item.image ? `url(${item.image})` : "none",
                            backgroundColor: item.image ? "transparent" : "#595e5a",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",

                        }}
                    >
                        <div className="overlay"></div>

                        <div className={`slide-content align-${contentAlignment.replace(' ', '-')}`}>
                            <h2  className={`slide-title animate-slide ${selectedAnimation}`} style={{
                                    animationDelay: `${animationDelay}s`,
                                    animationDuration: `${animationDuration}s`}} >{item.title}</h2>
                            <p className={`slide-description animate-slide ${decAnimation}`} style={{
                                    animationDelay: `${decAnimationDelay}s`,
                                    animationDuration: `${decAnimationDuration}s`
                                }}>{item.description}</p>

                            {isEditor ? (
                                item.buttonName && (
                                    <a
                                    href={item.buttonUrl || "#"}
                                    target={isEditor ? "_self" : "_blank"} onClick={(e) => isEditor && e.preventDefault()}
                                    rel="noopener noreferrer"
                                >
                                    <button className={`button animate-slide ${buttonAnimation}`} style={{
                                                animationDelay: `${buttonAnimationDelay}s`,
                                                animationDuration: `${buttonAnimationDuration}s`
                                            }}>
                                        {item.buttonName}</button>
                                </a>
                                )
                            ) :(
                                    item.buttonName && (
                                        <a
                                            href={item.buttonUrl || "#"}
                                            target={item.buttonNewTab ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                        >
                                            <button  className={`button animate-slide ${buttonAnimation}`} style={{
                                                animationDelay: `${buttonAnimationDelay}s`,
                                                animationDuration: `${buttonAnimationDuration}s`
                                            }} 
                                            >{item.buttonName}</button>
                                        </a>
                                    )
                                )
                            }
                        </div>

                    </SwiperSlide>
                ))}

                {sliderNavigation && (
                    <>
                        <div className="swiper-button-prev" onClick={() => swiperRef.current.slidePrev()}>
                            {renderCustomArrow(prevArrow)}
                        </div>
                        <div className="swiper-button-next" onClick={() => swiperRef.current.slideNext()}>
                            {renderCustomArrow(nextArrow)}
                        </div>
                    </>
                )}
            </Swiper>

        </>
    );
};

export default ModernSliders;



