<?php
/**
 * Plugin Name: modern-slider
 * Description: Short description of the modern-slider plugins
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
			// add_action('enqueue_block_assets', [ $this, 'bootstrap_enqueue_styles' ]);
                  add_action('init',[ $this,'post_type_cpt_slider']);
                  add_shortcode('data', [$this, 'slider_shortcode']);
                  add_shortcode('value', [$this, 'slider_shortcode_value']);
                  add_shortcode('card', [$this, 'slider_shortcode_card']);
                  add_shortcode('button', [$this, 'slider_shortcode_button']);
                  add_shortcode('profile', [$this, 'slider_shortcode_profile']);


                  // Add ShortCode
                  add_shortcode('slider', [$this, 'slider_shortcode_slider']);
                  // Add Custom Columns
                  add_filter('manage_posts_columns',[$this, 'slider_shortcode_columns']);
                  // Add Custom manage Column
                  add_action('manage_posts_custom_column', [$this, 'manage_posts_custom_column'],10, 2);
                // enqueue style and script
                add_action('admin_enqueue_scripts', [ $this, 'my_plugin_enqueue_styles' ]);

		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}

            // #shortcode blockCode function
            function slider_shortcode_slider($atts){
                 $postId = $atts['id'];
                 $post = get_post($postId);
                 $blockContent = parse_blocks($post->post_content);
                   //  print_r($blockContent); print_r just array and object ke dekanor jonno use korte hoy
                 ob_start();
                 echo render_block($blockContent[0]);
                 return ob_get_clean();
            }

            // #shortcode columns function
            function slider_shortcode_columns($columns){
                unset($columns['date']); //CPT page a date column remove korar jonno.shotcode ta pisone cilo tai set samne anar jonno remove dilam 
                $columns['shortcode'] = "Shortcode"; //CPT page a shortcode column add korar jonno name nijer moto dibo
                $columns['author'] = "Post by";
                $columns['date'] = "Date"; //CPT page a date column add korar jonno
                return $columns;
            }

            // #shortcode columns UI Show function 
            function manage_posts_custom_column($column_name, $post_ID){
                if($column_name == 'shortcode'){
                //    echo'[swiper id='.$post_ID.']';
                echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_ID ) . '">
                <input value="[slider id=' . esc_attr( $post_ID ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr( $post_ID ) . '\')">
                <span class="tooltip">' . esc_html__( 'Copy To Clipboard' ) . '</span>
                </div>';
                }   
            }
          //# Enqueue admin styles and scripts function
           function my_plugin_enqueue_styles() {
                global $typenow;

                if ($typenow === 'slider') {
                    //css file
                    wp_enqueue_style(
                        'my-plugin-admin-style',
                        plugin_dir_url(__FILE__) . 'src/Admin/post.css',
                        array(),
                        '1.0.0'
                    );
                    //js file
                    wp_enqueue_script(
                        'my-plugin-admin-js',
                        plugin_dir_url(__FILE__) . 'src/Admin/post.js',
                        array(),
                        '1.0.0'
                    );
                }
            
               // method 2
                // if ($typenow !== 'slider') return;   
  
                // wp_enqueue_style(
                //     'my-plugin-admin-style',
                //     plugin_dir_url(__FILE__) . 'src/Admin/post.css',
                //     array(),
                //     '1.0.0'
                // );
                // wp_enqueue_script(
                //     'my-plugin-admin-js',
                //     plugin_dir_url(__FILE__) . 'src/Admin/post.js',
                //     array(),
                //     '1.0.0'
                // );

            }


            //#Added CPT function in deshboad
            function post_type_cpt_slider(){
             register_post_type('slider', [
                    'label' => 'Slider',
                    'labels' => [
                        'add_new' => 'Add New',
                        'add_new_item' => 'Add New Slider',
                        'edit_item' => 'Edit Slider',
                        'not_found' => 'There was no player please add one'
                    ],
                    'show_in_rest' => true,
                    'has_archive' => true,
                    'public' => true,
                  //   'menu_icon' => 'dashicons-format-audio',
                  'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" fill="current" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zm13.3 256l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416 96 416c-17.7 0-32 14.3-32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-53 43-96 96-96l146.7 0-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM384 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM64 192A64 64 0 1 1 64 64a64 64 0 1 1 0 128z"/></svg>'),

                  //cpt block code block.json name ta dibo
                    'template' => [['b-blocks/modern-slider']],
                    'template_lock' => 'all',
                ]);
            }

           // #static-shortcode function and shortcode a dynamic value pass kore kivabe dekay
           function slider_shortcode( $atts ){
            ob_start();
            // print_r ($atts['title']);
             ?>
<div>
    <p class='styless'>My name is <?php echo esc_html($atts['name']) ?></p>
</div>
<style>
.styless {
    background-color: #0073aa;
    color: red;
    padding: 10px;
    cursor: pointer;
}
</style>
<?php
             return ob_get_clean();
           }

        // value shortcode
        function slider_shortcode_value($atts){   

            return  '<p>My name is '.$atts['name'].'</p>';
        }

      // shortcode card UI
      function slider_shortcode_card( $atts ){
            ob_start();
            ?>
<div class="container">
    <div class="card card0">
        <div class="border">
            <h2>Al Pacino</h2>
            <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="card card1">
        <div class="border">
            <h2>Ben Stiller</h2>
            <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="card card2">
        <div class="border">
            <h2>Patrick Stewart</h2>
            <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</div>
<style>
.container {
    height: 90vh;
    width: 100vw;
    max-height: 500px;
    max-width: 1280px;
    min-height: 300px;
    min-width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}

.border {
    height: 369px;
    width: 290px;
    background: transparent;
    border-radius: 10px;
    transition: border 1s;
    position: relative;
}

.border:hover {
    border: 1px solid white;
}

.card {
    height: 379px;
    width: 300px;
    background: grey;
    border-radius: 10px;
    transition: background 0.8s;
    overflow: hidden;
    background: black;
    box-shadow: 0 70px 63px -60px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.card0 {
    background: url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') center center no-repeat;
    background-size: 300px;
}

.card0:hover {
    background: url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') left center no-repeat;
    background-size: 600px;
}

.card1 {
    background: url('https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg') center center no-repeat;
    background-size: 300px;
}

.card1:hover {
    background: url('https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg') left center no-repeat;
    background-size: 600px;
}

.card2 {
    background: url('https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg') center center no-repeat;
    background-size: 300px;
}

.card2:hover {
    background: url('https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg') left center no-repeat;
    background-size: 600px;
}

.card:hover h2,
.card:hover .fa {
    opacity: 1;
}

h2 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
    margin: 20px;
    opacity: 0;
    transition: opacity 1s;
}

.fa {
    opacity: 0;
    transition: opacity 1s;
}

.icons {
    position: absolute;
    fill: #fff;
    color: #fff;
    height: 130px;
    top: 226px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
<?php
return ob_get_clean();
}

//# button shortcode ui
            function slider_shortcode_button( $atts ){
                  ob_start();
                  ?>
<div class="container2">
    <div class="toggle">
        <input type="checkbox">
        <span class="button"></span>
        <span class="label">+</span>
    </div>
    <div class="toggle">
        <input type="checkbox" checked>
        <span class="button"></span>
        <span class="label">–</span>
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato:700');


.container2 {
    text-align: center;
    width: 100%;
    top: 50%;
}

.toggle {
    margin: 4px;
    display: inline-block;
    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background: #ccd0d4;
    position: relative;
    height: 140px;
    width: 140px;
}

.toggle::before {
    box-shadow: 0 0 17.5px 8.75px #fff;
    border-radius: 118.3px;
    background: #fff;
    position: absolute;
    margin-left: -17.5px;
    margin-top: -17.5px;
    opacity: 0.2;
    content: '';
    height: 122.5px;
    width: 122.5px;
    left: 50%;
    top: 50%;
}

.toggle .button {
    filter: blur(1px);
    transition: all 300ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
    border-radius: 96.3px;
    position: absolute;
    background: #ccd0d4;
    margin-left: -48.15px;
    margin-top: -48.15px;
    display: block;
    height: 96.3px;
    width: 96.3px;
    left: 50%;
    top: 50%;
}

.toggle .label {
    transition: color 300ms ease-out;
    text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px #fff;
    line-height: 139px;
    text-align: center;
    position: absolute;
    font-weight: 700;
    font-size: 42px;
    display: block;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    color: rgba(0, 0, 0, 0.4);
}

.toggle input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.toggle input:active~.button {
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 30px 1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 25px 0 rgba(0, 0, 0, 0.4), inset 0 0 10px 1px rgba(255, 255, 255, 0.6);
}

.toggle input:active~.label {
    font-size: 40px;
    color: rgba(0, 0, 0, 0.45);
}

.toggle input:checked~.button {
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
}

.toggle input:checked~.label {
    font-size: 40px;
    color: rgba(0, 0, 0, 0.4);
}
</style>
<?php
return ob_get_clean();
}


 // #profile-shortcode UI
            function slider_shortcode_profile( $atts ){
            ob_start();
             ?>
<div class="card-container">
    <span class="pro">PRO</span>
    <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>User interface designer and <br /> front-end developer</p>
    <div class="buttons">
        <button class="primary">Message</button>
        <button class="primary ghost">Following</button>
    </div>
    <div class="skills">
        <h6>Skills</h6>
        <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
        </ul>
    </div>
</div>

<footer>
    <p>Created with <i class="fa fa-heart"></i> by <a target="_blank" href="https://florin-pop.com">Florin Pop</a>- Read
        how I created this
        <a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>- Design made by<a
            target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
    </p>
</footer>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

h3 {
    margin: 10px 0;
}

h6 {
    margin: 5px 0;
    text-transform: uppercase;
}

p {
    line-height: 21px;
}

.card-container {
    background-color: #231E39;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #B3B8CD;
    padding-top: 30px;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
}

.card-container .pro {
    color: #231E39;
    background-color: #FEBB0B;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
}

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
}

button.primary {
    background-color: #03BFCB;
    border: 1px solid #03BFCB;
    border-radius: 3px;
    color: #231E39;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
}

button.primary.ghost {
    background-color: transparent;
    color: #02899C;
}

.skills {
    background-color: #1F1A36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
}

.skills ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.skills ul li {
    border: 1px solid #2D2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
}

footer {
    font-size: 14px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
</style>

<?php
                  return ob_get_clean();
                  }
	}
	new PREFIXPlugin();
}