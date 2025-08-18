# Supabase Webhook Setup for Volunteer Notifications

Follow these steps to set up a Supabase webhook that triggers the `send-volunteer-notification` function whenever a new volunteer is added to the database.

## 1. Deploy Your Vercel Project

Before creating the webhook, ensure your project is deployed on Vercel. Once deployed, you will have a production URL for your serverless function. The URL will look like this:

`https://your-project-name.vercel.app/api/send-volunteer-notification`

Replace `your-project-name` with the actual name of your Vercel project.

## 2. Create a New Webhook in Supabase

1.  Go to your Supabase project and navigate to the **Database** > **Webhooks** section.
2.  Click **Create a new webhook**.
3.  In the **Name** field, enter a descriptive name for your webhook, such as `Volunteer Notification`.
4.  In the **URL** field, paste the URL of your serverless function from step 1.
5.  In the **Events** section, select `public` > `volunteers` > `Insert`. This will trigger the webhook only when a new record is inserted into the `volunteers` table.
6.  Click **Create webhook** to save your changes.

## 3. Set Environment Variables

Ensure the following environment variables are set in your Vercel project:

- `VITE_RESEND_API_KEY`: Your Resend API key.
- `VITE_SUPABASE_URL`: Your Supabase project URL.
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key.

## 4. Update the Notification Email

In the `api/send-volunteer-notification.ts` file, replace `your-email@example.com` with the email address where you want to receive notifications.

```typescript
const NOTIFICATION_EMAIL = "your-email@example.com"; // Replace with your email
```

Once you have completed these steps, you will receive an email notification every time a new volunteer submits the form on your website.
