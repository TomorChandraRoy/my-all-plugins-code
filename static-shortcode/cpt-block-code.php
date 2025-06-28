<?php
/**
 * Plugin Name: Accordion Plugin
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }
// Constant
define( 'PREFIX_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PREFIX_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PREFIX_DIR_PATH', plugin_dir_path( __FILE__ ) );
if( !class_exists( 'PREFIXPlugin' ) ){
    class PREFIXPlugin{
        function __construct(){
            add_action( 'init', [ $this, 'onInit' ] );  //onInit ফাংশনে Gutenberg block রেজিস্টার করা হবে

            //CPT HOOK and "function name"post_type" post_type ফাংশনে CPT (Custom Post Type) তৈরি হবে
            add_action('init', [$this, 'post_type']);

            // 'static-shortcode Hook ' => 'jeta pager aer moddhe static shortcode use kora hobe sekane shortcode aer moddhe [acc] diye save korbo',"function aer name ta hobe";
            add_shortcode( 'acc',  [$this,'foobar_func'] ); //// Page বা Post Editor-এ গিয়ে নিচের মতো shortcode লিখো:[acc] [acc] নামে একটা শর্টকোড তৈরি হচ্ছে, যেটা foobar_func() ফাংশন দিয়ে কাজ করবে 
        }
        function onInit(){
            register_block_type( __DIR__ . '/build' );
        }

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
                    // 'template_lock' => 'all',
                ]);
        }

       // #static-shortcode function
        function foobar_func( $atts ){
            ob_start();
            ?>
            <div>
                <p class="styles">I am Accordion</p>
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
    }
    new PREFIXPlugin();
}