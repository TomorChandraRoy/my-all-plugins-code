<?php
/**
* Plugin Name: Cpt to Gutenberg Block
 * Description: Cpt te add new click korle sorasori Gutenberg Block a niye jabe
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

function register_testimonial_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'register_testimonial_block' );

// CPT সহ
function register_testimonial_cpt() {
    register_post_type('testimonial', [
        'label' => 'Testimonials',
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => ['title', 'editor'],
        'template' => [
            [ 'b-blocks/test-card', [] ],
        ],
        'template_lock' => 'all',
    ]);
}
add_action('init', 'register_testimonial_cpt');
