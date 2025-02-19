@include('components.head')
@include('components.header')

<main class="flex flex-col items-center pt-0 pb-8 px-4">
    <section id="intro" class="flex flex-col w-full items-center justify-center">
    <div class="container relative mx-2 my-8 bg-cover bg-center" style="background-image: url({{ asset('images/background-1.jpg') }})">
      <div class="overlay absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="content relative text-white">
        <h1 class="py-20 px-10 text-center text-4xl">Contact Me</h1>
      </div>
    </div>
  </section>
  <section id="content" class="w-full max-w-2xl">
    <div class="container bg-white shadow-lg rounded-lg p-8">
      @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span class="block sm:inline">{{ session('success') }}</span>
        </div>
      @endif

      @if(session('error'))
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span class="block sm:inline">{{ session('error') }}</span>
        </div>
      @endif

      <form action="{{ route('contact.submit') }}" method="POST" class="space-y-6">
        @csrf
        
        {{-- Honeypot field --}}
        <div class="hidden">
          <input type="text" name="website" tabindex="-1" autocomplete="off">
        </div>

        <div class="form-group">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" 
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customGreen focus:ring-customGreen @error('name') border-red-500 @enderror" 
                 id="name" 
                 name="name" 
                 value="{{ old('name') }}"
                 required>
          @error('name')
            <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
          @enderror
        </div>

        <div class="form-group">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" 
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customGreen focus:ring-customGreen @error('email') border-red-500 @enderror" 
                 id="email" 
                 name="email" 
                 value="{{ old('email') }}"
                 required>
          @error('email')
            <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
          @enderror
        </div>

        <div class="form-group">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customGreen focus:ring-customGreen @error('message') border-red-500 @enderror" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required>{{ old('message') }}</textarea>
          @error('message')
            <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
          @enderror
        </div>

        <div class="g-recaptcha" data-sitekey="{{ config('services.recaptcha.site_key') }}"></div>
        @error('g-recaptcha-response')
          <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
        @enderror

        <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customGreen hover:bg-customGreenDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customGreen">
          Send Message
        </button>
      </form>
    </div>
  </section>
</main>

@include('components.footer')
@include('components.foot')

@push('scripts')
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
@endpush

