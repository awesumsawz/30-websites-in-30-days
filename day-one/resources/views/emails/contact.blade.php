<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #05A578;">New Contact Form Submission</h2>
        
        <p><strong>From:</strong> {{ $name }} ({{ $email }})</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">{{ $message }}</p>
        </div>
        
        <p style="color: #666; font-size: 12px;">This message was sent from the contact form on your website.</p>
    </div>
</body>
</html> 