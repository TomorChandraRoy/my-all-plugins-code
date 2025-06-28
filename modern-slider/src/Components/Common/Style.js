// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';
import { getTypoCSS } from '../../../../bpl-tools/utils/getCSS';
const Style = ({ attributes, id }) => {

	const { color, marginValues, radiusValues, typography, headeingColor, headeingMarginValues, decMarginValues, decColor, decTypography, colors, arrayBg, buttonHoverColor, buttonTypography, buttonPaddingValues, buttonBorder, buttonRadiusValues, arrayStyle, arrayHeight, arrayWidth, paginationColor, paginationActiveColor, paginationWidth, paginationHeight, paginationActiveBorder, paginationType,squareWidth,squareHeight, paginationRadiusValues, descriptionRespon ,device = "desktop" } = attributes;
	
	const gap = descriptionRespon ;

	const { fontFamily, fontCategory, fontSize, fontWeight, textDecoration, textTransform, fontStyle, letterSpace, lineHeight } = typography;

	// DecTypography attributes
	const {
		fontFamily: decFontFamily,
		fontCategory: decfontCategory,
		fontWeight: decFontWeight,
		fontSize: decFontSize,
		fontStyle: decFontStyle,
		textTransform: decTextTransform,
		textDecoration: decTextDecoration,
		lineHeight: decLineHeight,
		letterSpace: decLetterSpace
	} = decTypography;

	//buttonTypography

	const {
		fontFamily: buttonFontFamily,
		fontCategory: buttonfontCategory,
		fontWeight: buttonFontWeight,
		fontSize: buttonFontSize,
		fontStyle: buttonFontStyle,
		textTransform: buttonTextTransform,
		textDecoration: buttonTextDecoration,
		lineHeight: buttonLineHeight,
		letterSpace: buttonLetterSpace
	} = buttonTypography;

	const mainSl = `#${id}`;
	// const pagination = `#${mainSl} .pagination-${paginationType}`;
	const mySwiper = `${mainSl} .mySwiper`;
	const swiperButton = `${mySwiper}`;
	const slideImage = `${mySwiper} .slide-image`;
	const sliderContent = `${mySwiper} .slide-image .slider-content`;
	const buttonSection = `${mySwiper} .slide-image `;
	const swiperPagination = `${mainSl} .swiper-pagination`;


	const paginationWidths = paginationType === "bullets" ? paginationWidth : squareWidth;
	const paginationHeights = paginationType === "bullets" ? paginationHeight : squareHeight;
	
  
	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS("", typography)?.googleFontLink}
	    ${getTypoCSS("typogra", typography)?.styles}   
		${getTypoCSS("", decTypography)?.googleFontLink}
	    ${getTypoCSS("typogra", decTypography)?.styles}   

		${mySwiper}{
		    border-radius: ${radiusValues.top} ${radiusValues.right} ${radiusValues.bottom} ${radiusValues.left};
			margin: ${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left};
		}
       ${slideImage} .overlay{
           background-color:${color};
	   }
       ${sliderContent} {
            width: calc(100% - ${gap[device]});
			text-align:
          }
          
        @media only screen and (min-width: 641px) and (max-width: 1024px) {
            ${sliderContent} {
              width: calc(100% - ${gap.tablet});
            }
        }

        @media only screen and (max-width: 641px) {
            ${sliderContent} {
              width: calc(100% - ${gap.mobile});
            }
        }
	
       ${sliderContent} .h3{
            font-family:${fontFamily},${fontCategory};
               font-size:${fontSize[device]}px;
               font-style:${fontStyle};
               font-weight: ${fontWeight};
               text-transform: ${textTransform};
               text-decoration: ${textDecoration};
               letter-spacing: ${letterSpace};
               line-height: ${lineHeight};
			   color:${headeingColor};
			   margin: ${headeingMarginValues?.top} ${headeingMarginValues?.right} ${headeingMarginValues?.bottom} ${headeingMarginValues?.left};
	   }

      ${sliderContent} .dec{
	           font-family:${decFontFamily},${decfontCategory};        
               font-size:${decFontSize[device]}px;
               font-style:${decFontStyle};
               font-weight: ${decFontWeight};
               text-transform: ${decTextTransform};
               text-decoration: ${decTextDecoration};
               letter-spacing: ${decLetterSpace};
               line-height: ${decLineHeight};
			   color:${decColor};
			   margin: ${decMarginValues?.top} ${decMarginValues?.right} ${decMarginValues?.bottom} ${decMarginValues?.left};
	  }
	   @media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${sliderContent} .h3{
                font-size: ${fontSize.tablet}px;
            }
             ${sliderContent} .dec{
                font-size: ${decFontSize.tablet}px;
            }
        }
        @media only screen and (max-width: 641px) {
             ${sliderContent} .h3{
               font-size: ${fontSize.mobile}px;
            }
             ${sliderContent} .dec{
               font-size: ${decFontSize.mobile}px;
            }
        }
		${buttonSection} .button{
			font-family:${buttonFontFamily},${buttonfontCategory};        
            font-size:${buttonFontSize[device]}px;
            font-style:${buttonFontStyle};
            font-weight: ${buttonFontWeight};
            text-transform: ${buttonTextTransform};
            text-decoration: ${buttonTextDecoration};
            letter-spacing: ${buttonLetterSpace};
            line-height: ${buttonLineHeight};
            color: ${colors?.color}; 
            background: ${colors?.bgType === "gradient" ? colors?.gradient : colors?.bg};
			padding: ${buttonPaddingValues?.top} ${buttonPaddingValues?.right} ${buttonPaddingValues?.bottom} ${buttonPaddingValues?.left};
			border:${buttonBorder?.width} ${buttonBorder?.style} ${buttonBorder?.color};
			border-radius:${buttonRadiusValues?.top} ${buttonRadiusValues?.right} ${buttonRadiusValues?.bottom} ${buttonRadiusValues?.left};
		}
		@media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${buttonSection} .button{
                font-size: ${buttonFontSize.tablet}px;
            }
        }
		@media only screen and (max-width: 641px) {
             ${buttonSection} .button{
                font-size: ${buttonFontSize.mobile}px;
            }
        }
		${buttonSection} .button:hover {
			color: ${buttonHoverColor?.color};
			background: ${buttonHoverColor?.bgType === "gradient" ? buttonHoverColor?.gradient : buttonHoverColor?.bg}; 	 
		}
		${swiperButton} .swiper-button-next{
           width: ${arrayWidth}; 
           height: ${arrayHeight};
           background: ${arrayBg?.bgType === "gradient" ? arrayBg?.gradient : arrayBg?.bg}; 
           border-radius:${arrayStyle?.arrayRadius?.top} ${arrayStyle?.arrayRadius?.right} ${arrayStyle?.arrayRadius?.bottom} ${arrayStyle?.arrayRadius?.left};
		   border: 2px solid ${arrayBg?.color};
		   
		}
		${swiperButton} .swiper-button-prev{
           width: ${arrayWidth}; 
           height: ${arrayHeight};
           background: ${arrayBg?.bgType === "gradient" ? arrayBg?.gradient : arrayBg?.bg}; 
           border-radius:${arrayStyle?.arrayRadius?.top} ${arrayStyle?.arrayRadius?.right} ${arrayStyle?.arrayRadius?.bottom} ${arrayStyle?.arrayRadius?.left};
		   border: 2px solid ${arrayBg?.color};
		 
		}
		${swiperButton} .swiper-button-next::after{
		   font-size: ${arrayStyle?.arraySize}px;
		   color: ${arrayStyle?.arrayColor};
		}
		${swiperButton} .swiper-button-prev::after{
          font-size: ${arrayStyle?.arraySize}px;
		  color: ${arrayStyle?.arrayColor};
		}

		${mySwiper} .swiper-pagination{
			display: flex;
            justify-content: center;
            align-items: center;
		}

		${mainSl}  .pagination-bullets  .swiper-pagination-bullet {
		   cursor: pointer;
           border-radius: 50%;
		   width: ${paginationWidths};
		   height: ${paginationHeights};
		   background-color:${paginationColor};
       }

      ${mainSl}  .pagination-square .swiper-pagination-bullet {
		cursor: pointer;
         border-radius: 0;
         transform: rotate(1deg);
		 width: ${paginationWidths};
		 height: ${paginationHeights};
		 background-color:${paginationColor};
		 border-radius:${paginationRadiusValues?.top} ${paginationRadiusValues?.right} ${paginationRadiusValues?.bottom} ${paginationRadiusValues?.left};
        }

		${swiperPagination} .swiper-pagination-bullet-active{
		    cursor: pointer;
			background:${paginationActiveColor};
            border:${paginationActiveBorder?.width} ${paginationActiveBorder?.style} ${paginationActiveBorder?.color};
		}
	`}} />;
}
export default Style;
