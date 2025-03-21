@php
use App\Models\Lists;

$degrees = json_decode($education->value, true);
$languages = json_decode($skillsLanguages->value, true);
$software = json_decode($skillsSoftware->value, true);
$systems = json_decode($skillsSystems->value, true);
$hobbies = json_decode($personalHobbies->value, true);
$projects = json_decode($personalProjects->value, true);
$speaking = json_decode($personalSpeaking->value, true);

@endphp

@include('components.head')
@include('components.header')

<main class="mx-auto px-4 sm:px-6 lg:px-8">
    <section class="mb-16">
        <div class="text-center">
            <h1 class="text-[4rem] font-bold mb-0 text-gray-900 dark:text-white">Resume</h1>
            <p class="text-[#666] dark:text-gray-300 font-['DDC_Hardware_Condensed'] text-lg md:text-[1.6rem] mb-0">Last Updated {{ date('F Y') }}</p>
        </div>
        <div class="flex flex-col">
            <div class="body-content mt-0">
                <div class="post page type-page status-publish hentry">
                    <div class="post-content">
                        <div class="entry">
                            <div class="text-center my-6">
                                <a href="{{ asset('files/12-05-24_JasonBiggs_Resume__WebDeveloper.pdf') }}" class="wp-block-file__button bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 inline-block" download="">
                                    Download a copy
                                </a>
                            </div>
                            <div class="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
                                {!! $intro->value !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr class="border-gray-200 dark:border-gray-700 my-8">
    <section class="mb-16">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Education</h2>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-8">
            @if (is_array($degrees))
                @foreach($degrees as $degree)
                    {!! Lists::educationBuilder($degree) !!}
                @endforeach
            @else
                <p class="text-gray-800 dark:text-gray-200">No education degrees found.</p>
            @endif
        </div>
    </section>
    <hr class="border-gray-200 dark:border-gray-700 my-8">
    <section class="mb-16">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Skills</h2>
            <p class="text-gray-600 dark:text-gray-300">Sections are Ordered Most Experienced to Least</p>
        </div>
        <div class="flex flex-col gap-8">
            <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-4">Languages & Frameworks</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none pl-0">
                    {!! Lists::listBuilder($languages) !!}
                </ul>
            </div>
            <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-4">Software</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none pl-0">
                    {!! Lists::listBuilder($software) !!}
                </ul>
            </div>
            <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-4">Systems</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none pl-0">
                    {!! Lists::listBuilder($systems) !!}
                </ul>
            </div>
        </div>
    </section>
    <hr class="border-gray-200 dark:border-gray-700 my-8">
    <section class="mb-16">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Professional Experience</h2>
        </div>
        <div class="flex flex-col gap-8">
            @foreach ($professionalExperience as $experience)
                @php
                $array['position'] = $experience->position;
                $array['company'] = $experience->company;
                $array['start_date'] = $experience->start_date;
                $array['end_date'] = $experience->end_date;
                $array['location'] = $experience->location;
                $array['description'] = json_decode($experience->description, true);
                @endphp
                {!! Lists::experienceBuilder($array) !!}
            @endforeach
        </div>
    </section>
    <hr class="border-gray-200 dark:border-gray-700 my-8">
    <section class="mb-16">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Personal Experience</h2>
        </div>
        <div class="flex flex-col gap-8">
            <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 mb-4">Hobbies & Interests</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none pl-0">
                    {!! Lists::listBuilder($hobbies) !!}
                </ul>
            </div>
            <div class="mb-12">
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 text-center mb-8">Personal Projects</h3>
                <div class="flex flex-col gap-8">
                    <div class="grid md:grid-cols-[30rem_auto] gap-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <h4 class="text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 text-right md:text-right">TechRegular</h4>
                        <p class="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                            {!! $projects['techregular'] !!}
                        </p>
                    </div>
                    <div class="grid md:grid-cols-[30rem_auto] gap-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <h4 class="text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 text-right md:text-right">Think Bigg Consulting</h4>
                        <p class="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                            {!! $projects['think_bigg_consulting'] !!}
                        </p>
                    </div> 
                </div>
            </div>
            <div>
                <h3 class="text-2xl md:text-3xl font-display text-blue-600 dark:text-blue-400 text-center mb-8">Speaking Engagements</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 class="text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 mb-4">2014</h4>
                        <div class="flex flex-col gap-4">
                            {!! Lists::h5ListBuilder($speaking['2014']) !!}
                        </div>
                    </div>
                    <div>
                        <h4 class="text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 mb-4">2015</h4>
                        <div class="flex flex-col gap-4">
                            {!! Lists::h5ListBuilder($speaking['2015']) !!}
                        </div>
                    </div>
                    <div>
                        <h4 class="text-xl md:text-2xl font-display text-blue-600 dark:text-blue-400 mb-4">2016</h4>
                        <div class="flex flex-col gap-4">
                            {!! Lists::h5ListBuilder($speaking['2016']) !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

@include('components.footer')
@include('components.foot')