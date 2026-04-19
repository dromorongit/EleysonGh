'use server';

import connectToDatabase from '@/lib/mongodb';
import ContactInquiry from '@/models/ContactInquiry';
import { sendContactNotification } from '@/lib/email';
import { ContactFormData } from '@/lib/validations';

export async function submitContactForm(data: ContactFormData) {
  try {
    await connectToDatabase();

    // Save to database
    const contactInquiry = new ContactInquiry(data);
    await contactInquiry.save();

    // Send email notification
    try {
      await sendContactNotification(data);
    } catch (emailError) {
      console.error('Failed to send contact notification email:', emailError);
      // Don't fail the form submission if email fails
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}