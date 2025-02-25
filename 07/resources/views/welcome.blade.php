<x-layouts.app>
  <div class="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
    <main class="flex max-w-[335px] w-full flex-col-reverse lg:max-w-4xl lg:flex-row">
      <div class="container">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">Welcome to <span class="text-red-500">Laravel</span> Breeze</h1>
        <div class="wrapper">
          @if (session('success'))
              <div class="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                  {{ session('success') }}
              </div>
          @endif
          <form method="POST" action="{{ route('submit') }}" class="space-y-4">
            @csrf
            <div>
              <label for="text_input" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Label</label>
              <input 
                type="text" 
                name="text_input" 
                id="text_input"
                value="{{ old('text_input') }}"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
              @error('text_input')
                  <p class="mt-1 text-sm text-red-600 dark:text-red-500">{{ $message }}</p>
              @enderror
            </div>
            <div>
              <button 
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</x-layouts.app>