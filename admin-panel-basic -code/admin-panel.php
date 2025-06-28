<?php
/*
* Plugin Name: Admin Panel
* Description: Self hosted Admin Panel Plugin 
* Version: 1.0.0   
* Author: bPlugins
* Author URI: https://bplugins.com
* text domain: admin-panel
*/
if( !defined('ABSPATH') ){ exit;}

class BPAP_Admin_Panel{

    public function __construct(){
        //shortcode
        add_shortcode('admin', array($this, 'admin_panel_shortcode_callback'));

        // Register the custom menu page
        add_action( 'admin_menu', array($this, 'register_my_custom_menu_page') );
        //register custom js and css
        add_action('admin_enqueue_scripts',array($this, 'admin_enqueue_scripts_callback'));
     
        //post action
        add_action( 'wp_ajax_form_submit_data', array($this, 'form_submit_data_callback') );
        //get action
        add_action( 'wp_ajax_get_form_data', array($this, 'get_form_data_callback') );
    }
    // Shortcode callback function
    public function admin_panel_shortcode_callback($atts){
        $formData = get_option('bpap_admin_panel');
        echo $formData['name'];

        ob_start();
    
         echo '<p>My Name is '. esc_html($formData['name']) . ' and my email '. esc_html($formData['email']) .' my gender '. esc_html($formData['gender']) .'.My country '. esc_html($formData['country']).' my Bio : '. esc_html($formData['bio']) .' </p>';
        
        return ob_get_clean();
    }
    

    // Register the custom menu page start
    public function register_my_custom_menu_page() {
        add_menu_page(
            'Admin Panel Page',
            'Admin Panel', 
            'manage_options', 
            'admin-panels',
            array($this, 'admin_panel_callback'), 
            'dashicons-welcome-widgets-menus',
            90 
        );
    }
    public function admin_panel_callback(){
         echo "<div id='bp-admin-Panel'>My Custom Admin Page</div>";
    }
    // Register the custom menu page end

    // Enqueue scripts and styles start
    public function admin_enqueue_scripts_callback($screen){
        
        if($screen =='toplevel_page_admin-panels'){
            $adminAssets = require plugin_dir_path( __FILE__ ) . 'assets/build/admin.asset.php';

            // Enqueue the script
            wp_enqueue_script('bpap_admin_panel', plugin_dir_url( __FILE__ ) . 'assets/build/admin.js', $adminAssets['dependencies'],  $adminAssets['version'], array('in_footer' => true));
            // Enqueue the CSS
            wp_enqueue_style('bpap_admin_panel', plugin_dir_url( __FILE__ ) . 'assets/build/admin.css', [], '1.0.0');
        }
        wp_localize_script( 'bpap_admin_panel', 'bpasAdminPanel',
		    array( 
			    'ajax_url' => admin_url( 'admin-ajax.php' ),
			    'nonce' => wp_create_nonce('bpap_admin_Panel_nonce')
		    )
        );
    }
    // Enqueue scripts and styles end

    // Form submit data start
    public function form_submit_data_callback(){

        check_ajax_referer('bpap_admin_Panel_nonce', 'submitnonce');

        $name = $_GET['name'];
        $email = $_GET['email'];
        $age = $_GET['age'];
        $gender = $_GET['gender'];
        $country = $_GET['country'];
        $bio = $_GET['bio'];
        $bio = $_GET['bio'];

        $formData = array(
            'name' => $name,
            'email' => $email,
            'age' => $age,
            'gender' => $gender,
            'country' => $country,
            'bio' => $bio
        );

        update_option('bpap_admin_panel', $formData);
        wp_send_json_success(["data" => $formData]);
    }
    // Form submit data end

    // Get form data start
    public function get_form_data_callback (){

        $formData = get_option('bpap_admin_panel');
        wp_send_json_success($formData);
    }
    // Get form data end
}

new BPAP_Admin_Panel();

// consloe.log kore dekar jonno just for testing
// add_action('wp_footer', function(){
//  print_r(get_option('bpap_admin_panel'));
// });

// add_action('wp_footer', function(){
//     echo '<pre>';
//     print_r(get_option('bpap_admin_panel'));
//     echo '</pre>';
// });
