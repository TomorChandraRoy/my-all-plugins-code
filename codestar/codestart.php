<?php
/*
Plugin Name: Codestart
Description: A basic plugin using Codestar Framework.
Version: 1.0.0
Author: ripon
*/

// Load Codestar Framework
require_once plugin_dir_path( __FILE__ ) . 'codestar-framework/codestar-framework.php';

// Make sure the class exists
if ( class_exists( 'CSF' ) ) {

  // Create options panel
  CSF::createOptions( 'my_plugin_options', array(
    'menu_title' => 'My Plugin Settings',
    'menu_slug'  => 'my-plugin-settings',
  ) );


  // 1st Tab: Settings
  CSF::createSection( 'my_plugin_options', array(
    'title'  => 'Settings',
    'fields' => array(
      array(
        'id'    => 'site_name',
        'type'  => 'text',
        'title' => 'Site Name',
      ),
    ),
  ) );


  // Add a section
  CSF::createSection( 'my_plugin_options', array(
    'title'  => 'General Settings',
    'fields' => array(
        array(
            'id'            => 'opt-accordion-1',
            'type'          => 'accordion',
            'title'         => 'Accordion',
            'accordions'    => array(
                array(
                'title'     => 'Accordion 1',
                'icon'      => 'fa fa-heart',
                'fields'    => array(
                    array(
                    'id'    => 'opt-text-1',
                    'type'  => 'text',
                    'title' => 'Text',
                    ),
                )
                ),
                array(
                'title'     => 'Accordion 2',
                'icon'      => 'fa fa-gear',
                'fields'    => array(
                    array(
                    'id'    => 'opt-color-1',
                    'type'  => 'color',
                    'title' => 'Color',
                    ),
                )
                ),
            )
        ),
        array(
            'id'    => 'opt-background-1',
            'type'  => 'background',
            'title' => 'Background',
        ),
        array(
         'type' => 'backup',
        ),
        array(
        'id'     => 'opt-border-1',
        'type'   => 'border',
        'title'  => 'Border',
        ),
        array(
            'id'         => 'opt-button-set-1',
            'type'       => 'button_set',
            'title'      => 'Button Set',
            'options'    => array(
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ),
            'default'    => 'enabled'
        ),
        array(
            'id'      => 'opt-checkbox-1',
            'type'    => 'checkbox',
            'title'   => 'Checkbox',
            'label'   => 'Yes, Please do it.',
            'default' => true // or false
        ),
        array(
            'id'       => 'opt-code-editor-4',
            'type'     => 'code_editor',
            'title'    => 'Javascript Editor',
            'settings' => array(
                'theme'  => 'monokai',
                'mode'   => 'javascript',
            ),
            'default'  => 'console.log("Hello world");',
        ),
        array(
            'id'       => 'opt-code-editor-2',
            'type'     => 'code_editor',
            'title'    => 'HTML Editor',
            'settings' => array(
                'theme'  => 'mdn-like',
                'mode'   => 'htmlmixed',
            ),
            'default'  => '<h1>Hello world</h1>',
        ),
        array(
            'id'    => 'opt-color-1',
            'type'  => 'color',
            'title' => 'Color',
        ),

        array(
            'id'        => 'opt-color-group-1',
            'type'      => 'color_group',
            'title'     => 'Color Group',
            'options'   => array(
                'color-1' => 'Color 1',
                'color-2' => 'Color 2',
                'color-3' => 'Color 3',
            )
        ),
        array(
            'id'       => 'opt-datetime-4',
            'type'     => 'datetime',
            'title'    => 'Date and Time',
            'subtitle' => 'Date and Time Both',
            'settings' => array(
                'enableTime' => true,
            ),
        ),
        array(
            'id'     => 'opt-dimensions-1',
            'type'   => 'dimensions',
            'title'  => 'Dimensions width and height',
        ),
        array(
            'id'     => 'opt-fieldset-1',
            'type'   => 'fieldset',
            'title'  => 'Fieldset',
            'fields' => array(
                array(
                'id'    => 'opt-text',
                'type'  => 'text',
                'title' => 'Text',
                ),
                array(
                'id'    => 'opt-color',
                'type'  => 'color',
                'title' => 'Color',
                ),
                array(
                'id'    => 'opt-switcher',
                'type'  => 'switcher',
                'title' => 'Switcher',
                ),
            ),
        ),
        array(
            'id'    => 'opt-gallery-1',
            'type'  => 'gallery',
            'title' => 'Gallery',
        ),
        array(
            'id'        => 'opt-group-1',
            'type'      => 'group',
            'title'     => 'Group',
            'fields'    => array(
                array(
                'id'    => 'opt-text',
                'type'  => 'text',
                'title' => 'Text',
                ),
                array(
                'id'    => 'opt-color',
                'type'  => 'color',
                'title' => 'Color',
                ),
                array(
                'id'    => 'opt-switcher',
                'type'  => 'switcher',
                'title' => 'Switcher',
                ),
            ),
        ),
        array(
            'id'    => 'opt-icon-1',
            'type'  => 'icon',
            'title' => 'Icon',
        ),
        array(
            'id'        => 'opt-image-select-1',
            'type'      => 'image_select',
            'title'     => 'Image Select',
            'options'   => array(
                'value-1' => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
                'value-2' => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
                'value-3' => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            ),
            'default'   => 'value-2'
        ),
        array(
            'id'    => 'opt-link-1',
            'type'  => 'link',
            'title' => 'Link',
        ),
        array(
            'id'    => 'opt-link-color-1',
            'type'  => 'link_color',
            'title' => 'Link Color',
        ),
        array(
            'id'    => 'opt-map-1',
            'type'  => 'map',
            'title' => 'Map',
        ),
        array(
            'id'    => 'opt-media-1',
            'type'  => 'media',
            'title' => 'Media',
        ),
        array(
            'id'    => 'opt-number-1',
            'type'  => 'number',
            'title' => 'Number',
        ),
        array(
            'id'      => 'opt-palette-1',
            'type'    => 'palette',
            'title'   => 'Palette',
            'options' => array(
                'set1'  => array( '#f04e36', '#f36e27', '#f3d430', '#ed1683' ),
                'set2'  => array( '#f9ca06', '#b5b546', '#2f4d48', '#212b2f' ),
                'set3'  => array( '#4153ab', '#6e86c7', '#211f27', '#d69762' ),
                'set4'  => array( '#162526', '#508486', '#C8C6CE', '#B45F1A' ),
                'set5'  => array( '#bbd5ff', '#ccab5e', '#fff55f', '#197c5d' ),
            ),
            'default' => 'set3',
        ),
        array(
            'id'         => 'opt-radio',
            'type'       => 'radio',
            'title'      => 'Radio',
            'options'    => array(
                'option-1' => 'Option 1',
                'option-2' => 'Option 2',
                'option-3' => 'Option 3',
            ),
            'default'    => 'option-2'
        ),
        array(
            'id'     => 'opt-repeater-1',
            'type'   => 'repeater',
            'title'  => 'Repeater',
            'fields' => array(

                array(
                'id'    => 'opt-text',
                'type'  => 'text',
                'title' => 'Text'
                ),

            ),
        ),
        array(
            'id'          => 'opt-select-1',
            'type'        => 'select',
            'title'       => 'Select',
            'placeholder' => 'Select an option',
            'options'     => array(
                'option-1'  => 'Option 1',
                'option-2'  => 'Option 2',
                'option-3'  => 'Option 3',
            ),
            'default'     => 'option-2'
        ),
        array(
            'id'    => 'opt-slider-1',
            'type'  => 'slider',
            'title' => 'Slider',
        ),
        array(
            'id'        => 'opt-sportable-1',
            'type'      => 'sortable',
            'title'     => 'Sortable',
            'fields'    => array(

                array(
                'id'    => 'text-1',
                'type'  => 'text',
                'title' => 'Text 1'
                ),

                array(
                'id'    => 'text-2',
                'type'  => 'text',
                'title' => 'Text 2'
                ),

            ),
        ),
        array(
            'id'           => 'opt-sorter-1',
            'type'         => 'sorter',
            'title'        => 'Sorter',
            'default'      => array(
                'enabled'    => array(
                'option-1' => 'Option 1',
                'option-2' => 'Option 2',
                'option-3' => 'Option 3',
                ),
                'disabled'   => array(
                'option-4' => 'Option 4',
                'option-5' => 'Option 5',
                ),
            ),
        ),
        array(
            'id'    => 'opt-spacing-1',
            'type'  => 'spacing',
            'title' => 'Spacing',
        ),
        array(
            'id'    => 'opt-spinner-1',
            'type'  => 'spinner',
            'title' => 'Spinner',
        ),
        array(
            'id'    => 'opt-switcher-1',
            'type'  => 'switcher',
            'title' => 'Switcher',
        ),
        array(
            'id'            => 'opt-tabbed-1',
            'type'          => 'tabbed',
            'title'         => 'Tabbed',
            'tabs'          => array(
                array(
                'title'     => 'Tab 1',
                'icon'      => 'fa fa-heart',
                'fields'    => array(
                    array(
                    'id'    => 'opt-text-1',
                    'type'  => 'text',
                    'title' => 'Text',
                    ),
                )
                ),
                array(
                'title'     => 'Tab 2',
                'icon'      => 'fa fa-gear',
                'fields'    => array(
                    array(
                    'id'    => 'opt-color-1',
                    'type'  => 'color',
                    'title' => 'Color',
                    ),
                )
                ),
            )
        ),
        array(
            'id'      => 'opt-text',
            'type'    => 'text',
            'title'   => 'Text',
            'default' => 'Hello world.'
        ),
        array(
            'id'      => 'opt-textarea',
            'type'    => 'textarea',
            'title'   => 'Textarea',
            'default' => 'Lorem ipsum dollar.'
        ),
        array(
            'id'    => 'opt-typography-1',
            'type'  => 'typography',
            'title' => 'Typography',
        ),
        array(
            'id'    => 'opt-upload-1',
            'type'  => 'upload',
            'title' => 'Upload',
        ),
        array(
            'id'    => 'opt-wp-editor-1',
            'type'  => 'wp_editor',
            'title' => 'WP Editor',
        ),
        // A Notice
        array(
        'type'    => 'notice',
        'style'   => 'success',
        'content' => 'This is a notice field. And using style "success"',
        ),


    ),
  ) );

}
?>
