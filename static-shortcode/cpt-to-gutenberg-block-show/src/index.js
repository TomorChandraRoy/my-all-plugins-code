import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';

registerBlockType('b-blocks/test-card', {
    edit({ attributes, setAttributes }) {
        const blockProps = useBlockProps();

        return (
            <div {...blockProps} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <RichText
                    tagName="h3"
                    value={attributes.title}
                    onChange={(val) => setAttributes({ title: val })}
                    placeholder="Enter testimonial title"
                />
                <RichText
                    tagName="p"
                    value={attributes.content}
                    onChange={(val) => setAttributes({ content: val })}
                    placeholder="Write testimonial content..."
                />
            </div>
        );
    },
    save({ attributes }) {
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <h3>{attributes.title}</h3>
                <p>{attributes.content}</p>
            </div>
        );
    },
    attributes: {
        title: { type: 'string', default: '' },
        content: { type: 'string', default: '' }
    }
});
