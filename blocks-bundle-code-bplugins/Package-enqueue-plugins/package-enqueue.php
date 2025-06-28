<?php
/**
 * Plugin Name: Package-enqueue
 * Description: Short description of the Package-enqueue plugin
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
			// add_action('wp_enqueue_scripts', [$this, 'mytheme_enqueue_assets']);
			add_action('enqueue_block_assets', [$this, 'enqueue_assets']); // Frontend+Backend //enqueue_assets ata nijer moto kore namedeo jabe
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}


		function enqueue_assets() {
			// Swiper CSS
			wp_enqueue_style(
				'swiper-css',
				'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
				[],
				'11.0.0'
			);
		
			// Swiper JS
			wp_enqueue_script(
				'swiper-js',
				'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
				[],
				'11.0.0',
				true // Load in footer
			);
		}

	}
	new PREFIXPlugin();
}

// wp_enqueue_scripts == (frontend)
// admin_enqueue_scripts == (backend)
// enqueue_block_assets == (backend and frontend)
//enqueue_block_editor_assets == (gutenberg editor)


