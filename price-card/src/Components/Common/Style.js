// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,}) => {
	const { headerStyle, headerDecStyle, planStyle,shadow, } = attributes;
	const { titleColor, fontSize, titleMargin, titleAlign } = headerStyle;
	const { decColor, decSize, decAlign, decMargin } = headerDecStyle;

	const { planBackgroundColor, planBackgroundColorOpacity, planPadding, planMargin, planRadius, planAlign, planTitleStyle, planPriceStyle, FeaturesStyle, buttonStyle, popularStyle, } = planStyle;

	const { planTitleColor, planTitleSize, planTitleMargin,planTitleAlign } = planTitleStyle;

	const { priceColor, priceSize, priceAlign, priceMargin } = planPriceStyle;

	const { featureAlign, featureliMagin } = FeaturesStyle;

	const { buttonBackgroundColor, buttonBackgroundColorOpacity, buttonPadding, buttonFontSize, buttonBorderRadius, buttonColor, buttonMargin } = buttonStyle;

	const { borderColor, badgeBackgroundColor, badgeColor, badgeFontSize, badgePadding, badgeRadius } = popularStyle;


	const mainSl = `#${id}`;
	const mainCardContener = `${mainSl} .main-card-contener`;
	const pricing = `${mainCardContener} .pricing`;
	const plan = `${pricing} .plan`;
	const price = `${plan} .price`;
	const features = `${plan} .features`;

	const planPopular = `${pricing} .plan.popular `;
	const planHover = `${pricing} .plan:hover `;

    //priceing width: 282px;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${mainCardContener}{ 
           padding: 35px;
		}
		@media only screen and (min-width:641px) and (max-width: 1024px){
            ${mainCardContener} {
                padding: 0px;
            }
       }
		${mainCardContener} .h1{
			color: ${titleColor};
			font-size: ${fontSize}px;
			margin: ${titleMargin?.top} ${titleMargin?.right} ${titleMargin?.bottom} ${titleMargin?.left};
			text-align:${titleAlign};
			}
		${mainCardContener} .p{
			color: ${decColor};
            font-size: ${decSize}px;
			margin: ${decMargin?.top} ${decMargin?.right} ${decMargin?.bottom} ${decMargin?.left};
			text-align:${decAlign};
			}

		${pricing}{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			width: 100%; 
            max-width: 100%;
			padding: 0px 20px;
			justify-items: ${planAlign};
			font-family: "Source Sans Pro", sans-serif;
		}
		@media only screen and (min-width:641px) and (max-width: 1024px){
            ${pricing} {
                grid-template-columns: repeat(2, 1fr);
            }
       }
		@media (max-width: 425px) {
                ${pricing} {
				grid-template-columns: repeat(1, 1fr);

            }
         }

		${plan}{
			background: ${planBackgroundColor?.includes('gradient') ? planBackgroundColor : `${planBackgroundColor}`};
			opacity: ${planBackgroundColorOpacity};
			padding: ${planPadding?.top} ${planPadding?.right} ${planPadding?.bottom} ${planPadding?.left};
			margin: ${planMargin?.top} ${planMargin?.right} ${planMargin?.bottom} ${planMargin?.left};
            border-radius: ${planRadius?.top} ${planRadius?.right} ${planRadius?.bottom} ${planRadius?.left};
			max-height: max-content;
		}
		@media (max-width: 480px) {
                ${plan} {
                width:282px;
				
            }
         }

		${plan} .h2{
			color: ${planTitleColor};
            font-size: ${planTitleSize}px;
			margin: ${planTitleMargin?.top} ${planTitleMargin?.right} ${planTitleMargin?.bottom} ${planTitleMargin?.left};
			text-align: ${planTitleAlign};
		}
		${price} {
			color: ${priceColor};
            font-size: ${priceSize}px;
			margin: ${priceMargin?.top} ${priceMargin?.right} ${priceMargin?.bottom} ${priceMargin?.left};
			text-align: ${priceAlign};
		}
		${features} {
			text-align: ${featureAlign};
		}
		${features} li{
			margin: ${featureliMagin?.top} ${featureliMagin?.right} ${featureliMagin?.bottom} ${featureliMagin?.left};
		}

		${plan} button{
		    color: ${buttonColor};
			background: ${buttonBackgroundColor?.includes('gradient') ? buttonBackgroundColor : `${buttonBackgroundColor}`};
			opacity: ${buttonBackgroundColorOpacity};
			font-size: ${buttonFontSize}px;
		    padding: ${buttonPadding?.top} ${buttonPadding?.right} ${buttonPadding?.bottom} ${buttonPadding?.left};
			margin: ${buttonMargin?.top} ${buttonMargin?.right} ${buttonMargin?.bottom} ${buttonMargin?.left};
			border-radius: ${buttonBorderRadius?.top} ${buttonBorderRadius?.right} ${buttonBorderRadius?.bottom} ${buttonBorderRadius?.left};
            
		}

		${planPopular}{
		    position: relative;
			border: 2px solid ${borderColor};
            transform: scale(1.08);
		}

		${planPopular} span {
		    position: absolute;
		    top: -20px;
		    left: 50%;
		    transform: translateX(-50%);
		    background: ${badgeBackgroundColor?.includes('gradient') ? badgeBackgroundColor : `${badgeBackgroundColor}`};
		    color: ${badgeColor};
		    padding: ${badgePadding?.top} ${badgePadding?.right} ${badgePadding?.bottom} ${badgePadding?.left};
		    font-size: ${badgeFontSize}px;
		    border-radius: ${badgeRadius?.top} ${badgeRadius?.right} ${badgeRadius?.bottom} ${badgeRadius?.left};
		}
		${planHover}{
		      box-shadow: ${shadow.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ')};
             transition: all 0.3s ease;
			}

	`}} />;
}
export default Style;