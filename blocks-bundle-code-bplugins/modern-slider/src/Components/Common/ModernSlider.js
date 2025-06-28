import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";


const ModernSlider = ({ attributes, setAttributes }) => {


    const isEditor = useSelect((select) => select('core/editor'));

    const { items, tagName, selectedAnimation, animationDelay, animationDuration, decAnimationDuration, decAnimationDelay, decAnimation, buttonAnimation, buttonAnimationDelay, buttonAnimationDuration, paginationType } = attributes;


    const updateItem = (index, key, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [key]: value };
        setAttributes({ items: newItems });
    };



    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            simulateTouch={false}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={`mySwiper pagination-${paginationType}`}
        >
            {items.map((item, index) => (

                <>
                    <SwiperSlide key={index} className='slide-image'
                        style={{
                            backgroundImage: item.image ? `url(${item.image})` : "none",
                            backgroundColor: item.image ? "transparent" : "#595e5a",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",

                        }}>

                        <div className="overlay"></div>

                        <div className='slider-content'>

                            {isEditor ?
                                <RichText tagName={tagName} className={`h3 animate-slide ${selectedAnimation}`} style={{
                                    animationDelay: `${animationDelay}s`,
                                    animationDuration: `${animationDuration}s`
                                }} value={item.title || "Heading..."} onChange={(value) => updateItem(index, "title", value)} placeholder=' Slider Title' /> : <div className={`h3 animate-slide ${selectedAnimation}`} style={{
                                    animationDelay: `${animationDelay}s`,
                                    animationDuration: `${animationDuration}s`
                                }}   >{item.title}</div>
                            }

                            {isEditor ?
                                <RichText className={`dec animate-slide ${decAnimation}`} style={{
                                    animationDelay: `${decAnimationDelay}s`,
                                    animationDuration: `${decAnimationDuration}s`
                                }} value={item.description || "Description.."} onChange={(value) => updateItem(index, "description", value)} placeholder='Slider description' /> : <p className={`dec animate-slide ${decAnimation}`} style={{
                                    animationDelay: `${decAnimationDelay}s`,
                                    animationDuration: `${decAnimationDuration}s`
                                }}>{item.description}</p>
                            }
                            
                            <div className='buttonSection'>
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
                                                <RichText value={item.buttonName} onChange={(value) => updateItem(index, "buttonName", value)} placeholder='button name' /></button>
                                        </a>
                                    )
                                ) : (
                                    item.buttonName && (
                                        <a
                                            href={item.buttonUrl || "#"}
                                            target={item.buttonNewTab ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                        >
                                            <button className={`button animate-slide ${buttonAnimation}`} style={{
                                                animationDelay: `${buttonAnimationDelay}s`,
                                                animationDuration: `${buttonAnimationDuration}s`
                                            }}>{item.buttonName}</button>
                                        </a>
                                    )
                                )
                                }
                            </div>

                        </div>

                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    );
};

export default ModernSlider;
