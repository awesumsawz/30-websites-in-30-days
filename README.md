# 30 Days of Websites

## What is this?

I've realized that I've let myself fall behind, reliant on my ability to build
longterm projects. So, I've resolved to build. I need volume. I need exposure 
and experience. I need to be able to build quickly and efficiently. And this is
my solution. I'm going to build a website every day for 30 days. If I can, I'll
keep going after that.

## Rules

1. A website must be built every day.
2. To be considered complete, the website must have at least three pages that a  
    user can navigate between.
3. The quality doesn't matter (although it would be nice to have something that)
    looks reasonable at the end)
4. The website can use components built from previous days or projects
5. Although the entire site can't be copied from previous projects or templates,
    I'm allowed whatever shortcuts I can find (I'm going for volume and speed)
6. Daily logs must be kept in the README.md file in the project folder
    a. Log the start time and end time 
    b. Log any technology choices made at the start of the day
    c. Log experiences and challenges throughout the day
7. The project must be pushed to github every day
8. While AI can be used, it is prohibited from being the primary focus of the
    project. The goal is to build websites with my brain, not a machine's.
9. A website can be returned to during the project if it is built from scratch
    again. This puts emphasis on the building process, learning, and a touch of
    dopemining

AMMENDMENTS:
1. A website must be built every day. It must be a unique entitie from all
      previous projects. This means that sites can be reused but must be built
      as though it is a new installation of the existing project. I cannot just
      copy a folder to a new name. 
2. A site that is considered complete is one that serves a page to a port that
      can be accessed by a browser.
3. If a site is copied as a project, a unique task must be completed to
      consider the day's build complete.

--------------------------------

## Log
Sorted newest to oldest

--------------------------------

### Day Twenty Nine - 03-18-2025

Today, I tried out django. I built out a simple project with a theme built by
cursor. Then I had chat gipitee walk me through creating my own django app from
scratch. 

Simple day but I got a site built. I really liked learning with gipitee like 
this. I gave it the prompt to help me walk througha  simple build using django
with the condition that it not move on to the next step of the build until I 
told it to do so. This allowed me to ask follow up questions about the step
before moving on to the next. It was really effective at helping me get my feet
underneath me with django.

--------------------------------

### Day Twenty Eight - 03-17-2025
Added 28a was an experiment trying to add a blog to my jason-biggs-dev laravel
website. I got it up and running and implemented a markdown based blog that 
imports markdown files from the content/ directory and displays them on the
frontend as standard blog posts. 

Project 28 was an experiment to see if I could get cursor to rebuild my laravel
blade frontend out as a laravel react project. I had cursor run the build but
I never got back to it as I was compelled more to work on 28a.

--------------------------------


### Day Twenty Seven - 03-16-2025
Today I built out a couple of attempts to get payload to communicate with nextjs
frontends. I started trying to use their prebuilt website theme. I then moved to
trying to get the site into a hono project. When that didn't work, I tried to 
get it just working with the nextjs version of the site but that didn't work
either. I wasn't successful in getting the site up and working as I expeted with
payload but I did get three sites to launch.

--------------------------------

### Day Twenty Six - 03-15-2025
Setup a nextjs project with payload as the cms. Used a postgresql database. 
Once I got the project setup with postgresql, I tried 26a with the thinkbigg.dev
nextjs site. I got the site setup with my pages and filled them with content.

I also had to do some aws ecs troubleshooting as one of my attempts to get the
site setup with the aws deploy scripts caused an errored container that
continuously failed after deployment. I resolved this by identifying the error,
reparing docker image and then running it through the production deploy scritps.

--------------------------------

### Day twenty five - 03-14-2025
Started the day working on polishing the thinkbigg.dev aws deployment scripts.
Then I went and created a hono project under day 25. I ported over the content
from the thinkbigg.dev site. I rounded out the day with getting a wordpress site
built out headless. then I built a rough frontend for the site using react. I 
connected all of it using a docker compose that built containers for the mysql,
wordpress, and react containers. I only got so far as creating a home page with
placeholder content.

--------------------------------

### Day twenty four - 03-13-2025
Played with a hono project today. didn't get too much done. Also worked on
getting the thinkbigg.dev site permanently up on ecs. I also started getting
together scripts for deploying updated containers to ecs. I also got a dev-
environment setup for testing divergent branches. 

--------------------------------

### Day twenty three - 03-12-2025
I finished getting the site deployed. I realized that although I'd set the port
to serve at port 80, it was actually still pointing to 3000. After some
wrestling, I found that the issue had to do with permissions and configuration,
so I configured a load balancer and the route 53 to point to the load balancer.
I then configured my DNS host to point to the route 53.
After about ten minutes of waiting, everything had deployed successfully.


--------------------------------

### Day twenty two - 03-11-2025
Finished polishing the thinkbigg-dev website. Started a deploy to an ECS
instance. I did not complete this successfully though. Being that it was my
first time, I encountered a load of hiccups and eventually although I got the
container to deploy to ecs and I had a task running, I wasn't able to connect to
it successfully. 

--------------------------------

### Day twenty one - 03-10-2025
build out my think bigg brand website.
Did it.

--------------------------------

### Day twenty - 03-09-2025
Today's goal is to get terraform to spin up a proxmox vm without intervention 
from me outside of starting the script. I relied heavily on cursor to get this 
one done. I also encountered errors caused by the proxmox provider. I had to 
settle for a bug announcement as the summary of the action to get the vm 
created. 

--------------------------------

### Day nineteen - 03-08-2025
Today's plan was to continue working on ansible and more specifically, get the
database to populate itself without user intervention. Again, I started by
writing out the scripts and adding the sqldumps to the data/ directory. Once I 
had those setup, I spun up my ubntu server snapshot with my sshkey saved and 
ran the playbook. I then decided to slim the process down even further by 
wrapping the multiple playbooks into a single playbook. I then reset the local
server instance and ran the new playbook. After a couple of hiccups, I got it 
working as expected. Once that was complete, I spun up a fresh ec2 instance and 
ran the playbook on the new ec2. It ran without issue on the first try. 

Ansible is awesome. 

Tomorrow, I'd like to get things setup so that terraform can 
create the test environments for me. I will start with proxmox and then do a 
build for aws ec2.

--------------------------------

### Day Eighteen - 03-07-2025
Today I'm adapting the plan I followed yesterday to get laravel and my site
working into an ansible playbook. Let's get 'er duun!
I wrote up an andible playbook to spin up a docker ready server. Then I wrote a  
second playbook to pull in my jason-biggs-laravel git repo and get it running 
with sail. All that was left for me to do was import my database into the psgl
server and everything was up and running exactly as I expected! I ran in on a 
local vm, then on a vm on my proxmox server, and then finally on a fresh ec2 
instace. 
I'm really happy with how today turned out. I think the next step is to get the
database to populate itself with data without my intervention. I'd also like to 
try to start working with terraform to get the server(s) supn up. 

--------------------------------

### Day seventeen - 03-06-2025
Got it running! I then synced my server and got everything relatively production
ready!
Good day!

--------------------------------

### Day sixteen - 03-05-2025
brutal day. I got the instance created quickly but then when trying to get the
sail application going (based on my jason-biggs-laravel project). Ran into issue
after issue and got the site to post an error when accessing the server from a
browser. So technically a success. however, I'm really annoyed I didn't get the
actual site to post. bummer. going to try the same thing again tomorrow.


--------------------------------

### Day fifteen - 03-04-2025
Time to start doing some website deployments. Not quite sure on how to document 
the process but going to give it a shot. Today will be an EC2 instance. I know
I've done these before but I figure starting out with something I know will be
helpful for this phase of the project.

Took advantage of the time to create a set of -minimal nix and dotfiles. Ran
into some roadbumpbs but did good. 
I also created the process I followed to get the server setup.

Fail. Bummer. I got the server setup but I didn't get the site deployed. I got
distracted trying to build out a configuration for fresh servers that would
add some creature comforts. Trying again tomorrow.

--------------------------------

### Day fourteen - 03-03-2025
I built out a wordpress site again today. made significan progress on the 
client template. 
I think today is the last day of site building. I'd like to spend the next few
days doing some site launching on AWS. I am determined to learn more about AWS
deployments and I think launching some of these prjojects will be a good way to
do just that.

--------------------------------

### Day Thirteen - 03-02-2025
Plan: I have some work I need to get done for a client today, so I'm going to 
build up a wordpress website in a slimmed down container. I mostly build my
docker containers with the entire html directory in the container. but today I
want to try to build a container with just the theme and the plugins. I might
also include a volume for the uploads directory and one for the wp-* files that
occasionally need manipulation. 
Once I have that setup, I'll start building out the new template that's been
in my head for a while. I might even play with getting a gutenberg block built
rather than using ACF. we'll see.

Result: played with the docker compose build for a while and ended up getting
it narrowed down to just the theme and the plugins. I also got the volumes
setup for the uploads and the wp-* files. I started building out the theme but
didn't get very far. I'm going to have to spend some time on this one to get it
done.

--------------------------------

### Day Twelve - 03-01-2025
Plan: basically a continuation of yesterday but again, from scratch.

Ignored v0 as a builder today and just focused on using it as design 
inspiration. Built out a pretty cool header. Started framing out the html for
the body and footer of the homepage.
Notable achievements: built a pretty cool hover logo that cycles through a 
gradient on hover. I also built the 'profile' button out to have a gradient
cycle on hover as a box shadow. 
I'm starting to feel more and more comfortable with tailwind. I'm understanding
the syntax more and more. I'm also starting to see the value in the utility as
a way to build from the frontend without having to worry about organizing my
sass just so. 
NextJS and react are making more sense as far as the structure is concerned. I 
think I should have adjusted and considered my goals for this project a bit more
before jumping in. It would serve me to spend a full month on a single project
or platform. It's clear that going with a speed approach embraces the start of
a project which I need but more than that, I need to be able to understand these
platforms and languages. There's value in getting comfortable with starting the
projects, but I think I missed the mark on the value of the project itself.

--------------------------------

### Day Eleven - 02-28-2025
Plan: NextJS, Tailwind, Typescript, Prisma, Postgresql. Building a website to sell
materials for kindergarten through second grade literacy. Using v0 for the ui 
and the basic start.

Started building from scratch because v0 wasted a tremendous amount of time. 
Ended up surrendering to the 'learn something' loophole. Built a cool hover 
button that cycles the spectrum when hovered.

--------------------------------

### Day Ten - 02-27-2025
Built a laravel install. Used the new laravel starter kits to look at a react
installation with inertia. Fumbled around a bit with the header in inertia but
ended up building an api that fires back parks and rec quotes in response to a
true or false post request to /api/quote.

Still honing in on final rules because the three page rule isn't feasible with
my responsibilities and time constraints.

--------------------------------

### Day Nine - 02-26-2025
Rough day today so had to run a short project. I started by pulling down my blog
and installing it as the day 09 project. For today's goal I want to get it to
build successfully after resetting my lock file and then setup a docker
container so that I can eventually run this as an ECS container. 
The build process wasn't too hard. Build out a Dockerfile (first time in
a while) and then built the docker-compose. Had to consult some docs to remember
how to get both built especially with the env variables. 

I'm going to be spending the rest of the night on vanilla work stuff but if I
have the time, I'd like to get some typescript practice in and add more
functionality to the blog.

--------------------------------

### Day Eight - 02-25-2025
Started out building a thinkbiggdev site base on a v0 design. Realized that I 
am going to need more time to build out the site, so I decided to pivot to a 
clone of my personal site as a docker container (sail) with a postgresql 
database. I used bun the first time I tried to get it running but hit the wall
a few times. Started over by pulling down the git repo and going from there.
I removed the lock files just to start fresh and for extra spice. Then I pnpm'd
the project and then ran composer install. I then initialized sail with pgsql
then. I spun up the sail and ran the migrations. Then I opened up the db in 
TablePlus and imported the data from the sqlite db of the original project.
Oh, I also had to install sass.

Now I think I'm going to give the project management tool a shot again.


--------------------------------

### Day Seven - 02-24-2025

Laravel dropped some new starter kits today. I'm going to give those a shot with
a react front end. I'll be ommitting v0 today. I'll also be using laravel sail
to do my building and connect with a postgresql database. I'm going to use pnpm
today because theo made an excellent point that it simplifies pasting.

start: 7:30pm
end: 10:30pm

bleh. didn't get through much today. Tired, sick, and just not feeling it. I got
three pages created in a bare laravel project. I was hoping to be able to get to
building a todo list but didn't make it. I think if I want to get through this
and actually practice some building, I'm going to have to build the base project
and then pull in work from a previous day. Then I can focus on building out
something more complex. I think I'll give that a shot tomorrow. 


--------------------------------

### Day Six - 02-23-2025

Today succcccked. keyboard being weird. wiped out a bunch of work after several
hours. not a great day. Had to start over after several hours of work. I was
working on my thinkbig.dev site but I'm not going to be able to finish it today.
Still going to get a site built but it's not what I wanted.



--------------------------------

### Day Five - 02-22-2025

Continuing the focus on NextJS. Going to work on more database interactions with
Prisma and Typescript. More tailwindcss for styling.

Start: 7:30pm
break: 8:00pm
resume: 9:00pm
end: 10:00pm

Working on tailwind today. Started with V0 but it didn't do a great job of
building out the theme. However, I was able to get it fixed up with some
adjustments. I'm starting to feel more comfortable with the tailwind syntax. I 
learned a lot about flex and grid today and how it's applied in tailwind.
I also did some work on taking notes in the root dir for how to get a project
up and running more proficiently.

--------------------------------

### Day Four - 02-21-2025

Today I'm back with NextJS. I liked working on the project from yesterday, so 
I'm continuing on with that. I'll emphasize the build process today and try to
get further into typescript to build out dynamic components.

start: 4:00pm
break: 5pm
resume: 8:30pm
end: 10pm

Relied pretty heavily on ai today to get things rolling. Thought was that I'd
prefer to have something written for me to reference tomorrow. So I built the 
UI using v0. Then I had cursor build out the prisma factory and incorportate it
into the backlog page. No super proud or happy with how things turned out but I
think I'm starting to understand and feel a bit more comfortable with how NextJS
is structured. 

--------------------------------

### Day Three - 02-20-2025

Today I'm going to focus back on nextjs. 

I'd like to build a self-hosted ticket
system like jira but for small projects. I don't work with a team but I really
like using ticketing systems to track progress. I'm going to try to build a 
simple version of that today. 

Css with tailwind today.

Typescript for the js.

pnpm (based on a theo video from yesterday) for the package manager.

Let's do this.

Start: 4pm

Using V0 for the first time to build my UI. I'd like to focus on getting into
the typescript of the project rather than focusing on just getting the page
built. 

break: 5:00pm -- dinner
resume: 8pm
End: 9:30pm

Getting stuff going today was rough. Integrating with v0 proved more confusing
than I'd anticipated. I hope to bring down the time to start variable as time
continues. I really enjoyed using v0 though! I really liked just moving past the
design phase and jumping into code that I was able to interact with right away.
I'm still figuring out typescript. It feels a lot like js with extra hurdles
right now. I hope to start to see the appeal as time goes on but for now it 
seems like more of a hassle than a help.

I also really liked the project idea for today. I feel like having a ticketing
system for personal and solo projects would be really helpful. It'd also be nice
to be able to put something open source out into the world to have real world
impacts.

We'll see what tomorrow brings but I think I'd like to return to this concept
again tomorrow with a fresh start. I want to get more into the thought side of
the project sooner than later. I like flexing my brain muscles every now and 
then just to prove that I can!

--------------------------------

### Day Two - 02-19-2025

Today it's time for nextjs again. I've built a project with it once before but
I could certainly use more experience. I'm also including tailwind again, it was
interesting to build in and I certainly see the value in adding styles from the
front end interfaces. I'm also going to be implementing typescript as my js 
direction of choice. It's another thing that I could use more experience with
since generally my wp projects are in php and vanilla js. I'm also including
app router and bun in the project. Bun is new and very unfamiliar. App router 
is less foreign.

let's get started.

Start: 4:41pm
break: 5:00pm -- sick kid and dinner
resume: 7:42pm
End: 9:00pm

Rough time to start a challenge. Daughter is sick and I'm just recovering from
being sick myself. I got the site to meet my most basic requirements. I have 
three seperate views. I have a header. I have margin around the content. I 
believe that qualifies as a website. I'm hoping I get better at getting projects
started. Most of my time was just getting the project setup. I felt like the 
nextjs basics made sense and seemed vaguely familiar. The project basics seem to
have changed since I last put my hands on it but overall it was easy enough to
get the ball rolling. I'm also building some fondness for tailwind. Once things
start to click, it becomes easier. I just need to figure out how to get to the 
clicking part with the rest of the element specs.

Looking forward to trying another nextjs project tomorrow. I liked the business
idea I went with for this one. I'm interested in carrying that one forward for
some time.

--------------------------------

### Day One - 02-18-2025

I walked downstairs at about 7:30pm to start this thing. It's now 7:55pm and 
I've only just begun. I think the goal for today is a three page website (home, 
about, contact) with the most simplistic design possible. I've not done much 
work with tailwind to this point so I'm going to set my sights on that for 
styles. I also setup the project with react and typescript so more opportunity 
to practice there as well. This is my second laravel site so I'm hoping that 
will help get me to the finish line.

Deadline: midnight. Hopefully sooner. I'd like to watch a show or something 
before I have to go to sleep.

Additional challenges: today is my first day using homerow mods. It's going to
be a journey.

Let's get started.

note: this is round 2. I installed too much before. no inertia or breeze this
time. just a vanilla laravel install.

End time: 10:30pm

Had several bumps but got it done. it's rough. I need to get better at tailwind. I 
also need to become more familiar with controllers as well. I had to lean heavily 
on cursor to build out the contact page. I didn't even style it either. Hit a wall 
and calling it before styling the contact page. 
