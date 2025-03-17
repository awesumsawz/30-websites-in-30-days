<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Pages;
use App\Models\Resume\ProfessionalExperience;

Route::get('/', function () {
    $slideContent = Pages::where([
        'page_id' => '003',
        'key' => 'slider_content'
    ])->first();

    $textContent = Pages::where([
        'page_id' => '003',
        'key' => 'text_content'
    ])->first();

    $slides = json_decode($slideContent->value ?? '[]', true);

    return Inertia::render('HomePage', [
        'slides' => $slides,
        'textContent' => $textContent->value ?? '',
    ]);
})->name('home');

Route::get('/web', function () {
    $intro = Pages::where([
        'page_id' => '002',
        'key' => 'intro_content'
    ])->first();

    $developmentExamples = Pages::where([
        'page_id' => '002',
        'key' => 'examples_development'
    ])->first();

    $productionSites = Pages::where([
        'page_id' => '002',
        'key' => 'examples_sites'
    ])->first();

    $galleryCards = Pages::where([
        'page_id' => '002',
        'key' => 'gallery_content'
    ])->first();

    return Inertia::render('WebPage', [
        'intro' => $intro->value ?? '',
        'developmentExamples' => json_decode($developmentExamples->value ?? '[]', true),
        'productionSites' => json_decode($productionSites->value ?? '[]', true),
        'galleryCards' => json_decode($galleryCards->value ?? '[]', true),
    ]);
})->name('web');

Route::get('/resume', function () {
    $professionalExperience = ProfessionalExperience::all();

    $intro = Pages::where([
        'page_id' => '001',
        'key' => 'intro_content'
    ])->first();

    $education = Pages::where([
        'page_id' => '001',
        'key' => 'education_degree'
    ])->first();
    
    $skillsLanguages = Pages::where([
        'page_id' => '001',
        'key' => 'skills_languages'
    ])->first();
    
    $skillsSystems = Pages::where([
        'page_id' => '001',
        'key' => 'skills_systems'
    ])->first();
    
    $skillsSoftware = Pages::where([
        'page_id' => '001',
        'key' => 'skills_software'
    ])->first();

    $personalHobbies = Pages::where([
        'page_id' => '001',
        'key' => 'personal_hobbies'
    ])->first();
    
    $personalProjects = Pages::where([
        'page_id' => '001',
        'key' => 'personal_projects'
    ])->first();
    
    $personalSpeaking = Pages::where([
        'page_id' => '001',
        'key' => 'personal_speaking'
    ])->first();

    $experienceWithDescriptions = $professionalExperience->map(function($item) {
        $item->description = json_decode($item->description, true);
        return $item;
    });

    return Inertia::render('ResumePage', [
        'intro' => $intro->value ?? '',
        'education' => json_decode($education->value ?? '[]', true),
        'skillsLanguages' => json_decode($skillsLanguages->value ?? '[]', true),
        'skillsSystems' => json_decode($skillsSystems->value ?? '[]', true),
        'skillsSoftware' => json_decode($skillsSoftware->value ?? '[]', true),
        'personalHobbies' => json_decode($personalHobbies->value ?? '[]', true),
        'personalProjects' => json_decode($personalProjects->value ?? '{}', true),
        'personalSpeaking' => json_decode($personalSpeaking->value ?? '{"2014":[],"2015":[],"2016":[]}', true),
        'professionalExperience' => $experienceWithDescriptions,
    ]);
})->name('resume');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
