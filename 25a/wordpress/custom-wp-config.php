<?php
/**
 * Custom WordPress Config for Headless Mode
 * 
 * This file is included from the main wp-config.php and should only contain
 * additions, not redefinitions of existing constants.
 */

// Don't try to include WordPress's wp-config.php, as we're already inside it
// require_once(ABSPATH . 'wp-config.php');

// These constants may already be defined in wp-config.php
if (!defined('JWT_AUTH_SECRET_KEY')) {
    define('JWT_AUTH_SECRET_KEY', getenv('JWT_AUTH_SECRET_KEY') ?: 'your-secret-key');
}

if (!defined('JWT_AUTH_CORS_ENABLE')) {
    define('JWT_AUTH_CORS_ENABLE', true);
}

// Add actions to disable unnecessary WordPress features for headless mode
function custom_wp_headless_setup() {
    // Disable XML-RPC
    add_filter('xmlrpc_enabled', '__return_false');

    // Remove unnecessary headers
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);

    // Add CORS headers
    add_action('init', 'add_cors_headers');
}
add_action('after_setup_theme', 'custom_wp_headless_setup');

// Add CORS headers function
function add_cors_headers() {
    if (!defined('DOING_AJAX') || !DOING_AJAX) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        if ('OPTIONS' == $_SERVER['REQUEST_METHOD']) {
            status_header(200);
            exit();
        }
    }
} 