import { TextareaControl, TextControl,__experimentalSpacer as Spacer,__experimentalInputControl as InputControl,ToggleControl} from "@wordpress/components"
// import { produce } from "immer";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { InlineMediaUpload, } from "../../../../../../bpl-tools/Components";

const Items = ({ attributes, setAttributes, arrKey, index,}) => {
    
    //akne setActiveIndex=flase
    const items = attributes[arrKey];
  
    // const updateTour = (property, val, childProperty = null) => {
    // const newItems = produce(attributes[arrKey], draft => {
    //     if (null !== childProperty) {
    //         draft[index][property][childProperty] = val;
    //     } else {
    //         draft[index][property] = val;
    //     }
    // });

    // setAttributes({ [arrKey]: newItems });
    // setActiveIndex && setActiveIndex(index);
    // }

    return (
        <div>
            <InlineMediaUpload
                label="Image"
                value={items[index]?.image || ''}
                onChange={newImage => setAttributes({ items: updateData(items, newImage, index, 'image') })}
                placeholder="Enter image URL"
            /> 
             <Spacer />
   
            <TextControl value={items[index]?.title}
                label="Title"
                //onChange={value=>updateTour("title",value)}
                onChange={val => setAttributes({ items: updateData(items, val, index, 'title') })}
            />

            <Spacer />

            <TextareaControl
                label="Description"
                value={items[index]?.description || ''}
                onChange={dec => setAttributes({ items: updateData(items, dec, index, 'description') })}
                placeholder="Enter description"
            />
            <Spacer />
            <TextControl
                label="Button Label"
                // value={items[index]?.buttonName || ''}
                onChange={vl => setAttributes({ items: updateData(items, vl, index, 'buttonName') })}
                placeholder="Enter Button Name"
            />
            <Spacer />
            <InputControl
                label="Button URL"
                value={items[index]?.buttonUrl || ''}
                onChange={url => setAttributes({ items: updateData(items, url, index, 'buttonUrl') })}
                placeholder="Enter URL"
            />
            <Spacer />

            <ToggleControl
                label="Open In New Tab"
                checked={items[index]?.buttonNewTab || false}
                onChange={(value) => setAttributes({ items: updateData(items, value, index, 'buttonNewTab') })}
                
            />
        </div>
    )
}

export default Items;