<?php

namespace RAP;
class Admin_Menu {
    public function __construct() {
        add_action('admin_menu', [$this, 'admin_menu']);
    }

    public function admin_menu() {
        add_menu_page(
            'React Admin Panel',
            'React Admin Panel',
            'manage_options',
            'react-admin-panel',
            [$this, 'render_admin_page'],
            'dashicons-admin-generic',
            6
        );
    }

    public function render_admin_page() {
        echo '<div class="wrap"><h1>React Admin Panel</h1></div>';
    }
}