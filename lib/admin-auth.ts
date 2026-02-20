export function isAllowedAdminEmail(email?: string | null) {
  if (!email) return false;
  const allowedEmail = process.env.ADMIN_ALLOWED_EMAIL?.toLowerCase().trim();
  if (!allowedEmail) return false;
  return email.toLowerCase() === allowedEmail;
}
