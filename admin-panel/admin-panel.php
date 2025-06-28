<?php
/*
Plugin Name: Admin Panel
Description: A basic plugin using Codestar Framework.
Version: 1.0.0
Author: ripon
*/

if ( ! defined( 'ABSPATH' ) ) {
    return; // Exit if accessed directly
}

class React_Admin_Panel {

    public function __construct() {
        $this->load_classes();
    }

    private function load_classes() {
        require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';
        new RAP
    }}
    new React_Admin_Panel();