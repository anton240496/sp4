<?php
add_action('wp_enqueue_scripts', function(){
wp_enqueue_style('style', get_template_directory_url(). 'assets/css/style.css');
wp_deregister_script('jquery');
wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js')ж

wp_enqueue_script( 'jquery' );
wp_enqueue_script('main', get_template_directory_url() . '/assets/js/main.js', array('jquery'), 'null', true);
});

function add_google_fonts() {
	wp_enqueue_style( 'google_web_fonts', 'https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Palanquin&family=Poppins:wght@400;600;700&display=swap' );
  }
   

     
  add_action( 'wp_enqueue_scripts', 'add_google_fonts' );

 add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');
add_theme_support('woocommerce');



# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow($mimes)
{
	$mimes['svg'] = 'image/svg+xml';

	return $mimes;
}

add_filter('wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5);

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type($data, $file, $filename, $mimes, $real_mime = '')
{

	// WP 5.1 +
	if (version_compare($GLOBALS['wp_version'], '5.1.0', '>='))
		$dosvg = in_array($real_mime, ['image/svg', 'image/svg+xml']);
	else
		$dosvg = ('.svg' === strtolower(substr($filename, -4)));

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if ($dosvg) {

		// разрешим
		if (current_user_can('manage_options')) {

			$data['ext'] = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext'] = $type_and_ext['type'] = false;
		}

	}

	return $data;
}

// logo


function my_customize_register_fish( $wp_customize ) {
    $wp_customize->add_setting('fish_logo', array(
        'default' => '',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'fish_logo', array(
        'section' => 'title_tagline',
        'label' => 'Логотип_fish'
    )));

    $wp_customize->selective_refresh->add_partial('fish_logo', array(
        'selector' => '.fish_logo',
        'render_callback' => function() {
            $logo = get_theme_mod('fish_logo');
            $img = wp_get_attachment_image_src($logo, 'full');
            if ($img) {
                return '<img src="' . $img[0] . '" alt="">';
            } else {
                return '';
            }
        }
    ));
}
add_action( 'customize_register', 'my_customize_register_fish' );


// $woocommerce
// удалим title
add_filter('woocommerce_show_page_title', 'not_a_shop_page');
function not_a_shop_page()
{
	?>
	<div class="mag_str_title"></div>
	<?php
}