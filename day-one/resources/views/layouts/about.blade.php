@include('components.head')
@include('components.header')

<main class="flex flex-col items-center pt-0 pb-8 px-4">
  <section id="intro" class="flex flex-col w-full items-center justify-center">
    <div class="container relative mx-2 my-8 bg-cover bg-center" style="background-image: url({{ asset('images/background-2.jpg') }})">
      <div class="overlay absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="content relative text-white">
        <h1 class="py-20 px-10 text-center text-4xl">Nisi sint est do fugiat officia.</h1>
      </div>
    </div>
  </section>
  <section id="content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>Tempor velit commodo consectetur officia fugiat. Nulla deserunt aliqua non anim occaecat excepteur officia anim. Id excepteur elit nulla Lorem sunt qui laborum amet minim. Est id quis proident culpa cupidatat. Pariatur eu cillum sint est voluptate cupidatat exercitation ullamco commodo enim nostrud.</p>
          <p>Culpa voluptate cupidatat nostrud consectetur adipisicing eiusmod sit eiusmod quis fugiat ex aliquip ex quis. Cupidatat ad magna officia dolore ea ut officia dolore nisi commodo elit ipsum deserunt consequat. Commodo elit magna elit id excepteur officia. Reprehenderit ad voluptate non ipsum.
          <p>Dolore incididunt incididunt non. Consectetur cupidatat velit elit ut dolore Lorem incididunt nisi consectetur enim adipisicing laboris ea consectetur fugiat. Non reprehenderit do sunt elit culpa nostrud consequat non minim qui nisi non. Dolore dolor in esse anim esse reprehenderit esse occaecat non in. Cupidatat magna veniam aliquip est nostrud eiusmod irure et magna esse eu. Laborum officia culpa ad eu nisi voluptate.</p>
          <p>Commodo qui cillum labore laborum eu quis voluptate consequat. Eiusmod est deserunt pariatur dolor esse eu tempor commodo anim excepteur ut ea. Anim quis voluptate qui ullamco aute voluptate ad mollit. Adipisicing aliqua enim consequat voluptate aliqua dolor reprehenderit eiusmod consectetur elit ex consequat eiusmod ea velit. Cillum ut mollit qui nostrud ex. Ipsum esse proident consectetur Lorem aliquip laborum minim nisi fugiat ad tempor reprehenderit excepteur tempor. Cillum dolor reprehenderit culpa irure veniam consequat consequat commodo mollit ad ad ex nisi.</p>
        </div>
      </div>
    </div>
  </section>
</main>

@include('components.footer')
@include('components.foot')

