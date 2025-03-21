<?php
namespace App\Models;

class Lists
{
	public static function listBuilder(array $array): string
	{
		$build = '';
		foreach ($array as $item) {
			$build .= '<li class="py-2 text-gray-800 dark:text-gray-200">' . $item . '</li>';
		}
		return $build;
	}

	public static function h5ListBuilder(array $array): string 
	{
		$build = '';
		foreach ($array as $item) {
			$build .= '<h5 class="text-base md:text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">' . $item . '</h5>';
		}
		return $build;
	}

	public static function linkListBuilder(array $array): string 
	{
		$build = '';
		foreach ($array as $item) {
			$build .= '<div class="link mb-2"><a href="' . $item['url'] . '" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">' . $item['label'] . '</a></div>';
		}
		return $build;
	}

	public static function educationBuilder(array $degree): string 
	{
		$build = '';

		$build .= '<div class="degree mb-8 text-center">';
		$build .= '<h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-2">' . $degree['degree'] . '</h3>';
		$build .= '<p class="focus text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 mb-1">' . $degree['field'] . '</p>';
		$build .= '<p class="text-gray-600 dark:text-gray-300 mb-1">' . $degree['date'] . '</p>';
		$build .= '<p class="text-lg md:text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">' . $degree['university'] . '</p>';
		$build .= '<p class="text-gray-600 dark:text-gray-300">' . $degree['location'] . '</p>';
		$build .= '</div>';

		return $build;
	}

	public static function experienceBuilder(array $array): string 
	{
		$build = '';
		
		$build .= 	'<div class="experience pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0 mb-8">';
		$build .= 		'<h3 class="position text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-4">' . $array['position'] . '</h3>';
		$build .= 		'<div class="info flex flex-col md:grid md:grid-cols-[30%_70%] gap-4">';
		$build .= 			'<div class="flex flex-col gap-1">';
		$build .= 				'<p class="range text-lg md:text-xl font-display text-blue-600 dark:text-blue-400 mb-0">' . $array['start_date'] . ' - ' . ($array['end_date'] ? $array['end_date'] : 'Present') . '</p>';
		$build .= 				'<p class="company text-gray-600 dark:text-gray-300 font-semibold">' . $array['company'] . '</p>';
		$build .= 				'<p class="location text-gray-600 dark:text-gray-300">' . $array['location'] . '</p>';
		$build .= 			'</div>';
		$build .= 			'<ul class="list pl-5 space-y-2">';
		foreach ($array['description'] as $description) {
			$build .= '<li class="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">' . $description . '</li>';
		}
		$build .= 			'</ul>';
		$build .= 		'</div>';
		$build .= 	'</div>';

		return $build;
	}
}