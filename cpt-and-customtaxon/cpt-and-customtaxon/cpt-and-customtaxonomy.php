<?php
/*
Plugin Name: My Books Plugin
Description: Adds a custom post type "Book" with custom taxonomy "Genre".
Version: 1.0
Author: Your Name
*/

class My_Cpt_And_Customtaxonomy_Plugin {

    public function __construct() {
        add_action('init', array($this, 'register_cpt'));
        add_action('init', array($this, 'register_taxonomy'));
    }

    public function register_cpt() {
        $labels = array(
            'name'               => __('Books'),
            'singular_name'      => __('Book'),
            'menu_name'          => __('Books'),
            'name_admin_bar'     => __('Book'),
            'add_new'            => __('Add New'),
            'add_new_item'       => __('Add New Book'),
            'new_item'           => __('New Book'),
            'edit_item'          => __('Edit Book'),
            'view_item'          => __('View Book'),
            'all_items'          => __('All Books'),
            'search_items'       => __('Search Books'),
            'not_found'          => __('No books found.'),
            'not_found_in_trash' => __('No books found in Trash.'),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'has_archive'        => true,
            'menu_position'      => 5,
            'menu_icon'          => 'dashicons-book',
            'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
            'show_in_rest'       => true, // For Gutenberg editor & REST API
            'rewrite'            => array('slug' => 'books'),
        );

        register_post_type('book', $args);
    }

    public function register_taxonomy() {
        $labels = array(
            'name'              => __('Genres'),
            'singular_name'     => __('Genre'),
            'search_items'      => __('Search Genres'),
            'all_items'         => __('All Genres'),
            'edit_item'         => __('Edit Genre'),
            'update_item'       => __('Update Genre'),
            'add_new_item'      => __('Add New Genre'),
            'new_item_name'     => __('New Genre Name'),
            'menu_name'         => __('Genres'),
        );

        $args = array(
            'hierarchical'      => true,  // category-like taxonomy
            'labels'            => $labels,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array('slug' => 'genre'),
            'show_in_rest'      => true,  // Gutenberg & REST API
        );

        register_taxonomy('genre', 'book', $args);
    }

}

new My_Cpt_And_Customtaxonomy_Plugin();



