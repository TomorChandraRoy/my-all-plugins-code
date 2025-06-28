<?php
/**
 * Plugin Name: Pano-pannellum
 * Description: Short description of the Pano-pannellum CDN Enqueue 
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
			add_action( 'enqueue_block_assets', [ $this, 'pano_Pannellum_CDN' ] ); //function aer name ta bosbe
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}

		function pano_Pannellum_CDN (){  //aey name ta nijer moto kore dite parbo (pano_Pannellum_CDN)

			// wp_enqueue_style(                                       
			// 	"Panolens Css",										//#"jekono name dite paro",
			// 	"URL Ta",											//!"CDN Css URL Ta",
			// 	[dependencies ta bosbe],                            //#[dependencies ta bosbe jodi lage],
			// 	"PREFIX_VERSION",							//!"akne tumi PREFIX_VERSION use korte paro BA Tomar CDN  Version ta dite paro",
			// );

           // Three.js লোড করা
           wp_enqueue_script(
			'three-js', 
			'https://cdn.jsdelivr.net/npm/three@0.105.0/build/three.min.js',
			 [],
			 null,
			 true
			);

			// Panolens.js লোড করা
			wp_enqueue_script(										
				"panolens-js",										//!"jekono name dite paro",
				'https://unpkg.com/panolens@0.10.2/build/panolens.min.js',											//#"CDN Js ar URL Ta",
				['three-js'],							                       //![dependencies ta bosbe jodi lage],
				null,							//#"akne tumi PREFIX_VERSION use korte paro BA Tomar CDN  Version ta dite paro",
				 true 												//!js ta true hole footer a load hobe
			);



			// wp_enqueue_style(
			// 	"Panolens Css",										//#"jekono name dite paro",
			// 	"URL Ta",											//!"CDN Css URL Ta",
			// 	[dependencies ta bosbe],                            //#[dependencies ta bosbe jodi lage],
			// 	"PREFIX_VERSION",							//!" akne tumi PREFIX_VERSION use korte paro BA Tomar CDN  Version ta dite paro",
			// );

			// wp_enqueue_script(
			// 	"Panolens Js",										//!"jekono name dite paro",
			// 	"URL Ta",											//#"CDN Js ar URL Ta",
			// 	[dependencies ta bosbe],							//![dependencies ta bosbe jodi lage],
			// 	"PREFIX_VERSION",							//#"akne tumi PREFIX_VERSION use korte paro BA Tomar CDN  Version ta dite paro",
			// 	true 												//!js ta true hole footer a load hobe
			// );
		}


	}
	new PREFIXPlugin();
}

//# wp_enqueue_scripts == (frontend)
//# admin_enqueue_scripts == (backend)
//# enqueue_block_assets == (backend and frontend)
//#enqueue_block_editor_assets == (gutenberg editor)


