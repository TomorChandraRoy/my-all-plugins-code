<?php
/*
 * Plugin Name: CPT Menu
 * Description: Short description of the CPT Menu
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */
add_action('init', 'wporg_custom_post_type');
 function wporg_custom_post_type() {
    register_post_type('remote',
        [
            'labels'      => array(
                'name'                  => _x( 'Remotes', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Remote', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Remotes', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Remote', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Remote', 'textdomain' ),
                'new_item'              => __( 'New Remote', 'textdomain' ),
                'edit_item'             => __( 'Edit Remote', 'textdomain' ),
                'view_item'             => __( 'View Remote', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'dashicons-screenoptions'
        ]
    );
}

add_action('init', 'wporg_custom_post_types');
 function wporg_custom_post_types() {
    register_post_type('tv',
        [
            'labels'      => array(
                'name'                  => _x( 'tvs', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'tv', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'tvs', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'tv', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New tv', 'textdomain' ),
                'new_item'              => __( 'New tv', 'textdomain' ),
                'edit_item'             => __( 'Edit tv', 'textdomain' ),
                'view_item'             => __( 'View tv', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>')
        ]
    );
}