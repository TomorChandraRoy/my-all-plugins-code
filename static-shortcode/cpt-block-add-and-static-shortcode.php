
//#CPT HOOK and "function name"post_type"
add_action('init', [$this, 'post_type']);
        //#CPT function
        function post_type(){
            register_post_type('test_purpose', [
                    'label' => 'Test purpose',
                    'labels' => [
                        'add_new' => 'Add New',
                        'add_new_item' => 'Add New Player',
                        'edit_item' => 'Edit Player',
                        'not_found' => 'There was no player please add one'
                    ],
                    'show_in_rest' => true,
                    'public' => true,
                    'menu_icon' => 'dashicons-format-audio',
                    'template' => [['b-blocks/test-purpose']],
                    'template_lock' => 'all',
                ]);
        }


// #'static-shortcode Hook ' => 'jey pager aer moddhe static shortcode use kora hobe sekane shortcode aer moddhe [acc] diye save korbo',"tahole I am Accordion ta show korbe";
add_shortcode( 'acc',  [$this,'foobar_func'] );
       // #static-shortcode function
       function foobar_func( $atts ){
        ob_start();
        ?>
        <div>
            <p className="styles">I am Accordion</p>
        </div>
        <style>
            .styles {
                background-color: #0073aa;
                color: white;
                padding: 10px;
                cursor: pointer;
            }
        </style>
        <?php
        return ob_get_clean();
    }