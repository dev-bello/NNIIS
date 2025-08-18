# Supabase Edge Function Setup for Volunteer Notifications

Follow these steps to deploy the Supabase Edge Function and configure your webhook to send email notifications using Supabase's built-in SMTP service.

## 1. Install the Supabase CLI

If you haven't already, install the Supabase CLI on your local machine.

```bash
npm install supabase --save-dev
```

## 2. Log in to the Supabase CLI

Log in to your Supabase account using the CLI.

```bash
npx supabase login
```

## 3. Link Your Project

Link your local project to your Supabase project.

```bash
npx supabase link --project-ref fncdhglsfmbbohuwuwtq
```

You can find your `YOUR_PROJECT_ID` in the URL of your Supabase project dashboard.

## 4. Set Supabase Secrets

Set the following secrets in your Supabase project. These are the credentials for the SMTP service that the Edge Function will use to send emails.

```bash
npx supabase secrets set NOTIFICATION_EMAIL="support@mapinng.com"
npx supabase secrets set SMTP_HOST="mail.mapinng.com"
npx supabase secrets set SMTP_USER="support@mapinng.com"
npx supabase secrets set SMTP_PASS="N0rth3rn3ldersF0rum"
```

**Important:**

- Replace `your-email@example.com` with the email address where you want to receive notifications.
- Replace `YOUR_RESEND_API_KEY` with your actual Resend API key. Supabase uses Resend for its SMTP service, so you will still need a Resend account and API key.
  Jormzy4606?

## 5. Deploy the Edge Function

Deploy the `send-volunteer-notification` function to your Supabase project.

```bash
npx supabase functions deploy send-volunteer-notification
```

## 6. Update Your Webhook

1.  Go to your Supabase project and navigate to the **Database** > **Webhooks** section.
2.  Select your existing `Volunteer Notification` webhook.
3.  Change the **Type of webhook** from **HTTP Request** to **Supabase Edge Functions**.
4.  In the **Edge Function** dropdown, select the `send-volunteer-notification` function you just deployed.
5.  Click **Update webhook** to save your changes.

Once you have completed these steps, you will receive an email notification every time a new volunteer submits the form on your website.
