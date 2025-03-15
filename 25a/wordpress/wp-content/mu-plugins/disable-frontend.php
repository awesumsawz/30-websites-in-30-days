<?php
/**
 * Plugin Name: Disable WordPress Frontend
 * Description: Redirects all frontend requests to the headless frontend
 * Version: 1.0
 * Author: Headless WordPress
 */

// Only redirect frontend requests, not API or admin requests
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Redirects all frontend requests to the Next.js frontend
 */
function disable_frontend_redirect() {
    // Don't redirect these requests
    if (
        // Don't redirect REST API requests
        defined('REST_REQUEST') && REST_REQUEST ||
        // Don't redirect admin requests
        is_admin() ||
        // Don't redirect AJAX requests
        (defined('DOING_AJAX') && DOING_AJAX) ||
        // Don't redirect WP CLI requests
        (defined('WP_CLI') && WP_CLI) ||
        // Don't redirect login/register pages
        in_array($GLOBALS['pagenow'], ['wp-login.php', 'wp-register.php']) ||
        // Allow XML-RPC (if needed)
        (defined('XMLRPC_REQUEST') && XMLRPC_REQUEST)
    ) {
        return;
    }

    // Replace with your Next.js URL
    $frontend_url = 'http://localhost:3000';
    
    // Get the current path to maintain URL structure
    $path = trim($_SERVER['REQUEST_URI'], '/');
    if (!empty($path)) {
        $frontend_url .= '/' . $path;
    }
    
    // Perform the redirect
    wp_redirect($frontend_url);
    exit;
}

// Hook into template_redirect which happens before WordPress displays a template
add_action('template_redirect', 'disable_frontend_redirect');

// Additional security: disable unnecessary frontend features for headless mode
function disable_frontend_features() {
    // Remove unnecessary headers
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
}
add_action('init', 'disable_frontend_features'); 