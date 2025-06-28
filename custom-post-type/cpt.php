<?php
/*
 * Plugin Name: Custom Post Type
 * Version: 1.0.1
 * Description: Custom Post Type.
 */
add_action('init', 'wporg_custom_post_type');
 function wporg_custom_post_type() {
    register_post_type('phone',
        [
            'labels' => array(
                'name'                  => _x( 'Phones', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Phone', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Phones', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Phone', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Phone', 'textdomain' ),
                'new_item'              => __( 'New Phone', 'textdomain' ),
                'edit_item'             => __( 'Edit Phone', 'textdomain' ),
                'view_item'             => __( 'View Phone', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'dashicons-smartphone'
        ]
    );
}

add_action('init', 'wporg_custom_post_types');
function wporg_custom_post_types() {
    register_post_type('mouch',
        [
            'labels'      => array(
                'name'                  => _x( 'Mouchs', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'mouch', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Mouchs', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'mouch', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Mouch', 'textdomain' ),
                'new_item'              => __( 'New mouch', 'textdomain' ),
                'edit_item'             => __( 'Edit mouch', 'textdomain' ),
                'view_item'             => __( 'View mouch', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/></svg>')
                 ]
    );
}

add_action('init', 'wporg_custom_post_type_keyboard');
function wporg_custom_post_type_keyboard() {
    register_post_type('keyboard',
        [
            'labels'      => array(
                'name'                  => _x( 'Keyboards', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'keyboard', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Keyboards', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'keyboard', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New keyboard', 'textdomain' ),
                'new_item'              => __( 'New keyboard', 'textdomain' ),
                'edit_item'             => __( 'Edit keyboard', 'textdomain' ),
                'view_item'             => __( 'View keyboard', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>')
                 ]
    );
}
add_action('init', 'wporg_custom_post_types_monitor');
function wporg_custom_post_types_monitor() {
    register_post_type('monitor',
        [
            'labels'      => array(
                'name'                  => _x( 'Monitors', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Monitor', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Monitors', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Monitor', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Monitor', 'textdomain' ),
                'new_item'              => __( 'New Monitor', 'textdomain' ),
                'edit_item'             => __( 'Edit Monitor', 'textdomain' ),
                'view_item'             => __( 'View Monitor', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>')
                 ]
    );
}

add_action('init', 'wporg_custom_post_types_cpu');
function wporg_custom_post_types_cpu() {
    register_post_type('cpu',
        [
            'labels'      => array(
                'name'                  => _x( 'Cpuss', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'cpu', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Cpus', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'cpu', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Cpu', 'textdomain' ),
                'new_item'              => __( 'New cpu', 'textdomain' ),
                'edit_item'             => __( 'Edit cpu', 'textdomain' ),
                'view_item'             => __( 'View cpu', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/></svg>')
                ]
    );
}

add_action('init', 'wporg_custom_post_types_Camera');
function wporg_custom_post_types_Camera() {
    register_post_type('camera',
        [
            'labels'      => array(
                'name'                  => _x( 'Cameras', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Camera', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Cameras', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Camera', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Camera', 'textdomain' ),
                'new_item'              => __( 'New Camera', 'textdomain' ),
                'edit_item'             => __( 'Edit Camera', 'textdomain' ),
                'view_item'             => __( 'View Camera', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>')
                ]
    );
}

add_action('init', 'wporg_custom_post_types_Satellite');
function wporg_custom_post_types_Satellite() {
    register_post_type('satellite',
        [
            'labels'      => array(
                'name'                  => _x( 'Satellites', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Satellite', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Satellites', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Satellite', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Satellite', 'textdomain' ),
                'new_item'              => __( 'New Satellite', 'textdomain' ),
                'edit_item'             => __( 'Edit Satellite', 'textdomain' ),
                'view_item'             => __( 'View Satellite', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" width="20" height="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M233 7c-9.4-9.4-24.6-9.4-33.9 0l-96 96c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4-15.5 15.5C152.3 230.4 124.9 224 96 224c-31.7 0-61.5 7.7-87.8 21.2c-9 4.7-10.3 16.7-3.1 23.8L112.7 376.7 96.3 393.1c-2.6-.7-5.4-1.1-8.3-1.1c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32c0-2.9-.4-5.6-1.1-8.3l16.4-16.4L242.9 506.9c7.2 7.2 19.2 5.9 23.8-3.1C280.3 477.5 288 447.7 288 416c0-28.9-6.4-56.3-17.8-80.9l15.5-15.5L375 409c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4 55-55c12.5-12.5 12.5-32.8 0-45.3l-48-48c-12.5-12.5-32.8-12.5-45.3 0l-55 55L233 7zm159 351l-72.4-72.4 62.1-62.1L454.1 296 392 358.1zM226.3 192.4L153.9 120 216 57.9l72.4 72.4-62.1 62.1z"/></svg>')
                ]
    );
}

add_action('init', 'wporg_custom_post_types_Hard_drive');
function wporg_custom_post_types_Hard_drive() {
    register_post_type('hard Drive',
        [
            'labels'      => array(
                'name'                  => _x( 'Hard Drives', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Hard Drive', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Hard Drives', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Hard Drive', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Hard Drive', 'textdomain' ),
                'new_item'              => __( 'New Hard Drive', 'textdomain' ),
                'edit_item'             => __( 'Edit Hard Drive', 'textdomain' ),
                'view_item'             => __( 'View Hard Drive', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" width="20" height="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 184.4c-17-15.2-39.4-24.4-64-24.4L64 256c-24.6 0-47 9.2-64 24.4L0 96zM64 288l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>')
                ]
    );
}

add_action('init', 'wporg_custom_post_types_Sim_Card');
function wporg_custom_post_types_Sim_Card() {
    register_post_type('sim Card',
        [
            'labels'      => array(
                'name'                  => _x( 'Sim Cards', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Sim Card', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Sim Cards', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Sim Card', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Sim Card', 'textdomain' ),
                'new_item'              => __( 'New Sim Card', 'textdomain' ),
                'edit_item'             => __( 'Edit Sim Card', 'textdomain' ),
                'view_item'             => __( 'View Sim Card', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 0L242.7 0c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM96 192c-17.7 0-32 14.3-32 32l0 32 64 0 0-64-32 0zM64 352l80 0 96 0 80 0 0-64-80 0-96 0-80 0 0 64zM320 224c0-17.7-14.3-32-32-32l-32 0 0 64 64 0 0-32zM160 192l0 64 64 0 0-64-64 0zM288 448c17.7 0 32-14.3 32-32l0-32-64 0 0 64 32 0zM160 384l0 64 64 0 0-64-64 0zM64 416c0 17.7 14.3 32 32 32l32 0 0-64-64 0 0 32z"/></svg>')
                ]
    );
}

add_action('init', 'wporg_custom_post_types_headphones');
function wporg_custom_post_types_headphones() {
    register_post_type('headphones',
        [
            'labels'      => array(
                'name'                  => _x( 'Headphoness', 'Post type general name', 'textdomain' ),
                'singular_name'         => _x( 'Headphones', 'Post type singular name', 'textdomain' ),
                'menu_name'             => _x( 'Headphoness', 'Admin Menu text', 'textdomain' ),
                'name_admin_bar'        => _x( 'Headphones', 'Add New on Toolbar', 'textdomain' ),
                'add_new'               => __( 'Add New', 'textdomain' ),
                'add_new_item'          => __( 'Add New Headphones', 'textdomain' ),
                'new_item'              => __( 'New Headphones', 'textdomain' ),
                'edit_item'             => __( 'Edit Headphones', 'textdomain' ),
                'view_item'             => __( 'View Headphones', 'textdomain' ),
            ),
                'public'      => true,
                'has_archive' => true,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>')
                ]
    );
}
