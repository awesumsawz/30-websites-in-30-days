<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Jason Biggs Developer</title>
		@vite([
			'resources/assets/js/app.js', 
			'resources/assets/css/app.css'
		])		
	</head>
	<body>