<?php
/*
 * Plugin Name: static-shortcode function
 * Version: 1.0.1
 * Description: Page বা Post Editor-এ গিয়ে নিচের মতো shortcode লিখো:[profile] 
 */

//# 'profile' => 'jey profile aer moddhe static shortcode use kora hobe'sekane ['profile'] diye enter dile ,"nicher html coder output chole asbe";
add_shortcode( 'profile', 'foobar_func' );   // Page বা Post Editor-এ গিয়ে নিচের মতো shortcode লিখো:[profile] 

 function foobar_func( $atts ){
  //ob_start() PHP function টার কাজ হলো output buffering শুরু করা। সহজ ভাষায়, এটা ব্রাউজারে কিছু output পাঠানোর আগে সেই output-টা মেমোরিতে ধরে রাখে, যাতে তুমি পরে সেটা modify বা control করতে পারো।
        ob_start(); 
        ?>
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027">
        </div>
        <div class="team-content">
          <h3 class="name">Michele Miller</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=839">
        </div>
        <div class="team-content">
          <h3 class="name">Patricia Knott</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=856">
        </div>
        <div class="team-content">
          <h3 class="name">Justin Ramos</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=836">
        </div>
        <div class="team-content">
          <h3 class="name">Mary Huntley</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<style>
body {
  font-family: tahoma;
  height: 100vh;
  background-image: url(https://picsum.photos/g/3000/2000);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.our-team {
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #1369ce;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1369ce;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: #1369ce;
  background-color: #f7f5ec;
}

</style>
    <?php
      return ob_get_clean();  // Buffer থেকে output নিয়ে সেটাকে $content-এ রাখে এবং buffer বন্ধ করে
  }

    
