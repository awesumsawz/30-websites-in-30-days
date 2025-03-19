# Django for the first time 
## Setup
1. setup virtual environment
```bash
python3 -m venv 29a
source 29a/bin/activate
```
2. install django
```bash
pip install django
```
3. create a new project
```bash
django-admin startproject thinkbigg
```
4. run the server
```bash
cd thinkbigg
python manage.py runserver
```
5. create a new app
```bash
python manage.py startapp blogposts
```

## What we've created so far
### A Django project
A django project is the entire application that ties together all of the apps,
settings, and configurations that make up your website. It's the highest level
of organization in a Django project.
### An app within the project called blogposts
An app is a self-contained module that contains models, views, templates, and
URLs that make up a specific feature of your website. An app is a way to 
organize your code and separate different parts of your website into different 
files.

## What kinds of apps are included in Django projects?
### For a Blog Website
	1.	Posts App – Handles blog posts (CRUD operations).
	2.	Comments App – Manages user comments on posts.
	3.	Users App – Handles user authentication, registration, and profiles.
	4.	Search App – Implements a search function for blog posts.
### For an E-commerce Website
	1.	Products App – Manages product listings and categories.
	2.	Cart App – Handles shopping cart functionality.
	3.	Orders App – Manages checkout, orders, and payments.
	4.	Users App – Handles user accounts and authentication.
	5.	Reviews App – Allows users to leave product reviews.
### For a Social Media Website
	1.	Posts App – Allows users to create and share posts.
	2.	Friends App – Manages friend requests and connections.
	3.	Messages App – Handles private messaging between users.
	4.	Notifications App – Sends notifications for likes, comments, and messages.
	5.	Profiles App – Stores user profile details.
### For a Learning Management System (LMS)
	1.	Courses App – Manages course content and categories.
	2.	Users App – Handles student and instructor authentication.
	3.	Assignments App – Allows students to submit work.
	4.	Grades App – Tracks student grades and feedback.
	5.	Forum App – Provides discussion forums for students.
### For a Company Website
	1.	Pages App – Handles static pages like “About Us” and “Contact.”
	2.	Blog App – Manages company news and articles.
	3.	Careers App – Lists job openings and application forms.
	4.	Testimonials App – Displays client reviews.
	5.	Support App – Manages customer support tickets.

## Adding a plaintext homepage
1. Create a new file in the blogposts app called views.py
```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")
```
2. Create a new file in the blogposts app called urls.py
```
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
```
3. Add the new URL configuration to the main project's urls.py file
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blogposts.urls')),  # Include the app's URLs
]
```
4. Run the server and visit the homepage
```bash
python manage.py runserver
```

## Adding a template to the homepage
1. Create a new directory in the blogposts app called templates
2. Create a new directory inside templates called blogposts
3. Create a new file inside blogposts called home.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Django Page</title>
</head>
<body>
    <h1>Welcome to My Django Page!</h1>
    <p>This page is powered by Django templates.</p>
</body>
</html>
```
4. Update the views.py file to render the template
```python
from django.shortcuts import render

def home(request):
    return render(request, 'blogposts/home.html')
```
5. Run the server and visit the homepage
```bash
python manage.py runserver
```

## Use Django template variables and context
1. update blogposts/views.py to pass a context dictionary to the template
```python
from django.shortcuts import render

def home(request):
    context = {
        'title': 'My Django Page',
        'message': 'This is a dynamic message passed from the view!',
    }
    return render(request, 'myapp/home.html', context)
```
2. update the template to use variables
blogposts/templates/blogposts/home.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
</body>
</html>
```
3. Run the server and visit the homepage
```bash
python manage.py runserver
```

## Add Static Files to Django
1. create a static directory at blogposts/static
2. and a subsequent folder at blogposts/static/blogposts
3. create a css file at blogposts/static/blogposts/styles.css
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    padding: 50px;
}

h1 {
    color: #007bff;
}
```
4. update the template to include the static file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'myapp/styles.css' %}">
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
</body>
</html>
```
	•	{% load static %} tells Django to use the static file system.
	•	{% static 'myapp/styles.css' %} generates the correct path to the CSS file.
5. Run the server and visit the homepage
```bash
python manage.py runserver
```

## Add a Model to Django
1. Create a new file in the blogposts app called blogposts/models.py
```python
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```
2. Apply the migrations
```bash
python manage.py makemigrations blogposts
python manage.py migrate
```
3. Register the model with the Django admin (blogposts/admin.py)
```python
from django.contrib import admin
from .models import Post

admin.site.register(Post)
```
4. Create a superuser account
```bash
python manage.py createsuperuser
```
5. run the server:
```bash
python manage.py runserver
```

## Update the view to fetch posts
- edit blogposts/views.py
```python
from django.shortcuts import render
from .models import Post

def home(request):
    posts = Post.objects.all()  # Fetch all posts from the database
    context = {
        'title': 'My Django Blog',
        'posts': posts
    }
    return render(request, 'myapp/home.html', context)
```
2. update the template display posts
- modivy blogposts/templates/blogposts/home.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'myapp/styles.css' %}">
</head>
<body>
    <h1>{{ title }}</h1>

    {% if posts %}
        <ul>
            {% for post in posts %}
                <li>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.content }}</p>
                    <small>Published on {{ post.created_at }}</small>
                </li>
            {% endfor %}
        </ul>
    {% else %}
        <p>No posts yet.</p>
    {% endif %}
</body>
</html>
```
3. Add test data to the database
- login to the admin panel and add some post content
4. Run the server and visit the homepage
```bash
python manage.py runserver
```

## Create a Form
1. Create a new file in the blogposts app called blogposts/forms.py
```python
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']
```
- forms.ModelForm is a helper class that creates a form based on a model.
- The Meta class specifies which model and fields to use.
2. Create a view for handling form submissions
- Modify blogposts/views.py
```python
from django.shortcust import render, redirect
from .models import Post
from .forms import PostForm

def home(request):
  if request.method == 'Post':
    posts = Post.objects.all()
    context = {'title': 'My Django Blog', 'posts': posts}
    return render(request, 'blogposts/home.html', context)

def add_post(request):
  if request.method ==  'POST':
    form = PostForm(request.POST)
    if form.is_valid():
      form.save()
      return redirect('home')
  else:
    form = PostForm()

  return render(request, 'blogposts/add_post.html', {'form': form})
```
3. Create a URL for the new view
blogposts/urls.py
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_post, name='add_post'),  # New URL for adding posts
]
```
4. create a new template for the form
- create a new file in the blogposts app called templates/blogposts/add_post.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Post</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'blogposts/styles.css' %}">
</head>
<body>
    <h1>Add a New Post</h1>
    
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}  <!-- Render form fields -->
        <button type="submit">Submit</button>
    </form>

    <br>
    <a href="{% url 'home' %}">Back to Home</a>
</body>
</html>
```

5. Modify the homepage template to include a link to the form
- update blogposts/templates/blogposts/home.html
```html
<a href="{% url 'add_post' %}">Add New Post</a>
```
6. Restart the server and test the form
```bash
python manage.py runserver
```
