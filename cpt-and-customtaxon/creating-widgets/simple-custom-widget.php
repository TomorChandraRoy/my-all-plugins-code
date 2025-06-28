<?php
/*
Plugin Name: Simple Custom Widget
Description: একটি সহজ কাস্টম উইজেট উদাহরণ
Version: 1.0
Author: Ripon Roy
Text Domain: simple-custom-widget
*/

// ১. উইজেট ক্লাস তৈরি
class Simple_Custom_Widget extends WP_Widget {

    // কনস্ট্রাক্টর: উইজেটের নাম, বর্ণনা ইত্যাদি সেট করা
    public function __construct() {
        parent::__construct(
            'simple_custom_widget', // উইজেট আইডি
            __('Simple Custom Widget', 'simple-custom-widget'), // উইজেট নাম
            array( 'description' => __('A simple custom widget example', 'simple-custom-widget') ) // বর্ণনা
        );
    }

    // ২. ফ্রন্টএন্ডে কী দেখাবে (সাইটে)
    public function widget( $args, $instance ) {
        echo $args['before_widget'];

        // যদি টাইটেল থাকে, দেখাও
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }

        // কন্টেন্ট
        echo '<p>এই হচ্ছে আমার প্রথম কাস্টম উইজেট!</p>';

        echo $args['after_widget'];
    }

    // ৩. অ্যাডমিন প্যানেলে ফর্ম (টাইটেল সেট করার জন্য)
    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : __('Default Title', 'simple-custom-widget');
        ?>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id('title') ); ?>"><?php _e( 'Title:', 'simple-custom-widget' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id('title') ); ?>"
                name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" type="text"
                value="<?php echo esc_attr( $title ); ?>">
        </p>
        <?php
    }

    // ৪. ডাটা সেভ করার ফাংশন
    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        return $instance;
    }
}

// ৫. উইজেট রেজিস্টার করা
function register_simple_custom_widget() {
    register_widget( 'Simple_Custom_Widget' );
}
add_action( 'widgets_init', 'register_simple_custom_widget' );
