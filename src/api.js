// client/src/api.js

//const API_URL = process.env.REACT_APP_BACKEND_URL;

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`https://portfolio-site-backend-sigma.vercel.app/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};
