<?php
/*
 * Plugin Name: static-shortcode and  dynamic value pass 
 * Version: 1.0.1
 * Description: static-shortcode function and shortcode a dynamic value pass kore kivabe dekay
 */

 // #static-shortcode function and shortcode a dynamic value pass kore kivabe dekay
add_shortcode( 'profile', 'foobar_func' );   // Page বা Post Editor-এ গিয়ে নিচের মতো shortcode লিখো:[profile title="Tania"] 


 function foobar_func( $atts ){
        ob_start(); 
        // print_r ($atts['title']); ata diye fonted value ta dekhano jabe 
        ?>
            <div>
                <p class='styless'>My name is <?php echo esc_html($atts['title']) ?></p>
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

  //# method 2
//   add_shortcode( 'profile', 'foobar_funcs' );
  
//   function foobar_funcs($atts, $content){
//     print_r ($atts['id']);
//     return '<p>My name is ' .$atts['name'] .' and id is '.$atts['id'].' </p>';
//   }

    
