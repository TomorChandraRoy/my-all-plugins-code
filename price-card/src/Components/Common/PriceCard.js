import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../utils/functions';
import { produce } from 'immer';

const PriceCard = ({ attributes, setAttributes }) => {

    const isEditor = useSelect((select) => select('core/editor')); // Editor Mode Detect

    const { plans, title, description, showUpdateDelete } = attributes;

    // Update title
    const updateTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };
    // Update description
    const updateDescription = (newDescription) => {
        setAttributes({ description: newDescription });
    };

    // Upodate Feature
    const updateFeature = (planIndex, featureIndex, value, type) => {
        setAttributes({
            plans: produce(plans, draft => {
                draft[planIndex].features[featureIndex][type] = value;
            })
        })
    };


    return (
        <div className="main-card-contener" >
            {
                showUpdateDelete ?
                    <>
                        {isEditor ?
                            <RichText className='h1' value={title} onChange={updateTitle} placeholder='Header Title' /> : <div className='h1'>{title}</div>
                        }
                        {isEditor ?
                            <RichText className='p' value={description} onChange={updateDescription} placeholder='Header description'/> : <p>{description}</p>
                        }
                    </>
                    : ""
            }

            <div className="pricing">
                {plans.map((plan, index) => (
                    <>
                        {plan.isVisible && (

                            <div key={index} className={`plan ${plan.isPopular ? "popular" : ""}`}>


                                {plan.isPopular && (
                                    <span>
                                        {isEditor ? (
                                            <RichText
                                                value={plan.PopularText}
                                                onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'PopularText') })}
                                            />
                                        ) : (
                                            plan.PopularText
                                        )}
                                    </span>
                                )}


                                {isEditor ?
                                    <RichText className='h2' value={plan.title} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'title') })} placeholder='Plan Title' /> : <div className='h2'>{plan.title}</div>
                                }

                                {isEditor ?
                                    <RichText className="price" value={plan.price} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'price') })} placeholder='Plan Price' /> : <div className="price">{plan.price}</div>
                                }

                                <ul className="features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <>
                                            {isEditor ?
                                                <li className='li' >
                                                    <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)", marginRight: "10px" }}></i>
                                                    <RichText value={feature.text}  
                                                        onChange={(value) => updateFeature(index, featureIndex, value, "text")} placeholder='Feature Added' />
                                                </li>

                                                : <li key={featureIndex}>
                                                    <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)", marginRight: "10px" }}></i>
                                                    {feature.text}
                                                </li>
                                            }
                                        </>
                                    ))}
                                </ul>

                                {isEditor ?
                                    <a
                                        href={plan.buttonUrl} target={isEditor ? "_self" : "_blank"} // Editor Mode হলে লিংক Disable থাকবে
                                        rel="noopener noreferrer" onClick={(e) => isEditor && e.preventDefault()} // Backend এ লিংক কাজ করবে না
                                    >
                                        <button> <RichText value={plan.buttonLabel} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'buttonLabel') })} placeholder='Plan Button Name ' /></button>
                                    </a>
                                    :
                                    <a
                                        href={plan.buttonUrl}
                                        target={isEditor ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        onClick={(e) => isEditor && e.preventDefault()}
                                    >
                                        <button >{plan.buttonLabel}</button>
                                    </a>
                                }
                            </div >
                        )}
                    </>
                ))}
            </div>


        </div >

    );
};

export default PriceCard;