// client/src/api.js

//const API_URL = process.env.REACT_APP_BACKEND_URL;

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`https://fullstack-portfolio-navy.vercel.app/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send,try again later');
    }

    return { success: true, message: 'Sent Successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send,try again later' };
  }
};
