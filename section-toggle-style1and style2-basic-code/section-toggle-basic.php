<?php
/**
 * Plugin Name: Section Toggle Basic
 * Description: The Section Toggle Basic block helps users select the right package for your website.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: section-collection
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant  //BPPTST  aey name nijer moto kore dite parbo
define( 'BPPTST_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' ); 
define( 'BPPTST_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPPTST_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BPPTSTPlugin' ) ){
	class BPPTSTPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new BPPTSTPlugin();
}