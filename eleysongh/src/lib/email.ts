const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

interface EmailData {
  to: string;
  subject: string;
  htmlContent: string;
  from?: string;
}

export async function sendEmail({ to, subject, htmlContent, from }: EmailData) {
  const fromEmail = from || process.env.BREVO_FROM_EMAIL!;
  const fromName = process.env.BREVO_FROM_NAME!;

  const payload = {
    sender: { name: fromName, email: fromEmail },
    to: [{ email: to }],
    subject,
    htmlContent,
  };

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error('Failed to send email:', await response.text());
    throw new Error('Failed to send email');
  }

  return response.json();
}

export async function sendContactNotification(contactData: any) {
  const subject = `New Contact Inquiry: ${contactData.subject}`;
  const htmlContent = `
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> ${contactData.fullName}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Phone:</strong> ${contactData.phone}</p>
    <p><strong>Company:</strong> ${contactData.company || 'N/A'}</p>
    <p><strong>Subject:</strong> ${contactData.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${contactData.message}</p>
  `;

  // Send to business email, assume it's the from email or another env var
  const businessEmail = process.env.BREVO_FROM_EMAIL!; // Or add NEXT_PUBLIC_BUSINESS_EMAIL

  await sendEmail({ to: businessEmail, subject, htmlContent });

  // Send acknowledgment to user
  const ackSubject = 'Thank you for contacting Eleyson Ghana Limited';
  const ackHtml = `
    <h2>Thank you for reaching out!</h2>
    <p>Dear ${contactData.fullName},</p>
    <p>We have received your message and will get back to you shortly.</p>
    <p>Best regards,<br>Eleyson Ghana Limited</p>
  `;

  await sendEmail({ to: contactData.email, subject: ackSubject, htmlContent: ackHtml });
}

export async function sendQuoteNotification(quoteData: any) {
  const subject = `New Quote Request: ${quoteData.serviceCategory}`;
  const htmlContent = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${quoteData.fullName}</p>
    <p><strong>Email:</strong> ${quoteData.email}</p>
    <p><strong>Phone:</strong> ${quoteData.phone}</p>
    <p><strong>Company:</strong> ${quoteData.company || 'N/A'}</p>
    <p><strong>Service Category:</strong> ${quoteData.serviceCategory}</p>
    <p><strong>Specific Service:</strong> ${quoteData.specificService || 'N/A'}</p>
    <p><strong>Location:</strong> ${quoteData.location}</p>
    <p><strong>Project Type:</strong> ${quoteData.projectType}</p>
    <p><strong>Budget Range:</strong> ${quoteData.budgetRange || 'N/A'}</p>
    <p><strong>Timeline:</strong> ${quoteData.timeline || 'N/A'}</p>
    <p><strong>Description:</strong></p>
    <p>${quoteData.projectDescription}</p>
  `;

  const businessEmail = process.env.BREVO_FROM_EMAIL!;
  await sendEmail({ to: businessEmail, subject, htmlContent });

  // Acknowledgment
  const ackSubject = 'Quote Request Received - Eleyson Ghana Limited';
  const ackHtml = `
    <h2>Your quote request has been received!</h2>
    <p>Dear ${quoteData.fullName},</p>
    <p>We are reviewing your project requirements and will provide a detailed quote soon.</p>
    <p>Best regards,<br>Eleyson Ghana Limited</p>
  `;

  await sendEmail({ to: quoteData.email, subject: ackSubject, htmlContent: ackHtml });
}