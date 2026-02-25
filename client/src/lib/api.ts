// Reserved for future external API integrations.
// Contact form is handled via embedded Google Forms iframe.
// Booking is handled via Square booking link.

export const subscribeToNewsletter = async (email: string, name?: string) => {
  // TODO: Replace with Mailchimp API integration
  return { success: true, email, name };
};

export const submitContactForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  // TODO: Replace with contact service integration when needed
  return { success: true, ...data };
};
