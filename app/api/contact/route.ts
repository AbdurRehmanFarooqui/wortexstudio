import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(resendApiKey);

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'project.develop0@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received contact form data:', data);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'project.develop0@gmail.com',
      subject: data.category ? `New Contact Form Submission: ${data.category}` : 'New Contact Form Submission',
      html: `<p>You have a new contact form submission:</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Budget:</strong> ${data.budget} $</p>
      <p><strong>Message:</strong> ${data.message}</p>`
    });
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
}