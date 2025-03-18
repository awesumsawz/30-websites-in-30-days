from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission

def home(request):
    """Home page view"""
    return render(request, 'core/home.html')

def about(request):
    """About page view"""
    return render(request, 'core/about.html')

def contact(request):
    """Contact page view with form handling"""
    if request.method == 'POST':
        # Simple form processing
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        subject = request.POST.get('subject', '')
        message = request.POST.get('message', '')
        
        # Form validation
        if not all([name, email, subject, message]):
            messages.error(request, 'Please fill all the fields')
            return render(request, 'core/contact.html')
        
        # Save the submission to the database
        submission = ContactSubmission(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        submission.save()
        
        # Build message content
        email_message = f"""
        Name: {name}
        Email: {email}
        
        {message}
        """
        
        # In a real project, you would send an email
        # This is commented out since we haven't configured email settings
        """
        try:
            send_mail(
                subject=f"Contact Form: {subject}",
                message=email_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent successfully!')
        except Exception as e:
            messages.error(request, f'An error occurred: {str(e)}')
        """
        
        # Show a success message
        messages.success(request, 'Your message has been received! We will get back to you soon.')
        return redirect('home')
        
    return render(request, 'core/contact.html')
