<?php
/**
 * Plugin Name: modern-slider
 * Description: Short description of the modern-slider plugin
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
			add_action( 'init', [ $this, 'onInit' ] );
			// add_action('enqueue_block_assets', [ $this, 'bootstrap_enqueue_styles' ]);
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}

      //   function bootstrap_enqueue_styles() {
      //       wp_enqueue_style(
      //          'bootstrap-styles', 
      //          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', 
      //          [], 
      //          null
      //       );

      //       wp_enqueue_script(
      //          'bootstrap-scripts', 
      //          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', 
      //          ['jquery'], 
      //          null, 
      //          true
      //       );
      //   }


	}
	new PREFIXPlugin();
}



