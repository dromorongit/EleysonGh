import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log('SMTP not configured - email notifications disabled');
    return null;
  }

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const transport = getTransporter();
  if (!transport) {
    console.log('Email not sent - SMTP not configured');
    return false;
  }

  try {
    const from = process.env.SMTP_FROM || 'noreply@eleysonghana.com';
    await transport.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
    });
    console.log(`Email sent to ${options.to}: ${options.subject}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export function sendQuoteRequestNotification(data: {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  serviceType?: string;
  projectType?: string;
  location?: string;
  budgetRange?: string;
  message?: string;
}): Promise<boolean> {
  const businessEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || 'info@eleysonghana.com';

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Company:</strong> ${data.companyName || 'N/A'}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    <p><strong>Service Type:</strong> ${data.serviceType || 'N/A'}</p>
    <p><strong>Project Type:</strong> ${data.projectType || 'N/A'}</p>
    <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
    <p><strong>Budget Range:</strong> ${data.budgetRange || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || 'No message provided'}</p>
    <hr />
    <p><small>Submitted on ${new Date().toLocaleString()}</small></p>
  `;

  return sendEmail({
    to: businessEmail,
    subject: `New Quote Request from ${data.fullName}`,
    html,
  });
}

export function sendContactInquiryNotification(data: {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
}): Promise<boolean> {
  const businessEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || 'info@eleysonghana.com';

  const html = `
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || 'No message provided'}</p>
    <hr />
    <p><small>Submitted on ${new Date().toLocaleString()}</small></p>
  `;

  return sendEmail({
    to: businessEmail,
    subject: `New Contact Inquiry from ${data.fullName}`,
    html,
  });
}