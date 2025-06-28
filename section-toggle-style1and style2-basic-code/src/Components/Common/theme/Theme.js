// import { MinimalPricingTable } from "./MinimalPricingTable";

import Style1 from "./Style1";
import Style2 from "./Style2";

// <MinimalPricingTable {...props} />
const Theme = (props) => {
    const { attributes } = props;
    const { themeStyle } = attributes;

    return (
        <div>
            {
                themeStyle.theme === "style-1" ?  <Style1 {...props}/>
                : <Style2 {...props}/>
            }
        </div>

    );
};

export default Theme;