<?php
/**
 * Plugin Name: Plugin Guard 
 * Description: Hides the "Delete" link from the Plugins page to prevent accidental deletion.
 * Version: 1.0.0
 * Author: Md. Shamim Islam
 * Author URI: https://shamim-v0.netlify.app
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

class Plugin_Guard {
    private static $instance = null;

    private function __construct() {
        add_action( 'admin_head', [ $this, 'hide_delete' ] );
    }

    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function hide_delete() {
        $screen = get_current_screen();

        if ( $screen && $screen->id === 'plugins' ) {
            echo '<style>
                    .plugins {
                        .inactive {
                            .row-actions {
                                color: #fff;
                                .delete {
                                    display: none !important;
                                }
                            }
                        }
                    } 
                </style>';
        }
    }
}

Plugin_Guard::get_instance();

