<?php
/**
 * Plugin Name: Price-card
 * Description: Short description of the  Price-card plugin
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
			add_action('enqueue_block_assets', [ $this, 'myplugin_enqueue_fontawesome' ]);
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
		function myplugin_enqueue_fontawesome() {
			wp_enqueue_style(
				'font-awesome', 
				'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css', 
				[], 
				'6.4.2'
			);
		}

	}
	new PREFIXPlugin();
}

// wp_enqueue_scripts == (frontend)
// admin_enqueue_scripts == (backend)
// enqueue_block_assets == (backend and frontend)
//enqueue_block_editor_assets == (gutenberg editor)


