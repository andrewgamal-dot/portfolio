<<<<<<< HEAD
# Email Setup Guide

This guide will help you set up EmailJS to handle contact form submissions in your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Go to the contact section of your portfolio
3. Fill out and submit the contact form
4. Check your email to confirm the message was received

## Alternative Options

If you prefer not to use EmailJS, here are other options:

### Option 2: Netlify Forms (if deploying to Netlify)
- Add `netlify` attribute to your form
- No additional setup required
- Messages appear in your Netlify dashboard

### Option 3: Formspree
- Sign up at [Formspree](https://formspree.io/)
- Replace the form action with your Formspree endpoint
- Free tier available

### Option 4: Backend API
- Create a simple backend (Node.js/Express)
- Use a service like SendGrid or Nodemailer
- More control but requires server setup

## Security Notes

- Never commit your `.env` file to version control
- EmailJS public keys are safe to expose in frontend code
- Consider rate limiting for production use
- Add CAPTCHA for additional spam protection

## Troubleshooting

- Check browser console for error messages
- Verify all environment variables are set correctly
- Ensure your EmailJS service is active
=======
# Email Setup Guide

This guide will help you set up EmailJS to handle contact form submissions in your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Go to the contact section of your portfolio
3. Fill out and submit the contact form
4. Check your email to confirm the message was received

## Alternative Options

If you prefer not to use EmailJS, here are other options:

### Option 2: Netlify Forms (if deploying to Netlify)
- Add `netlify` attribute to your form
- No additional setup required
- Messages appear in your Netlify dashboard

### Option 3: Formspree
- Sign up at [Formspree](https://formspree.io/)
- Replace the form action with your Formspree endpoint
- Free tier available

### Option 4: Backend API
- Create a simple backend (Node.js/Express)
- Use a service like SendGrid or Nodemailer
- More control but requires server setup

## Security Notes

- Never commit your `.env` file to version control
- EmailJS public keys are safe to expose in frontend code
- Consider rate limiting for production use
- Add CAPTCHA for additional spam protection

## Troubleshooting

- Check browser console for error messages
- Verify all environment variables are set correctly
- Ensure your EmailJS service is active
>>>>>>> 8947852 (Add Netlify Forms support for contact form)
- Test with a simple message first 