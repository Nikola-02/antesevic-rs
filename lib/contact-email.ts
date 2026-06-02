type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmailSubject(name: string) {
  return `Nova poruka sa sajta — ${name}`;
}

export function buildContactEmailText({ name, email, message }: ContactEmailInput) {
  return [
    "Nova poruka sa kontakt forme (Antesevic Weddings)",
    "",
    `Ime: ${name}`,
    `Email: ${email}`,
    "",
    "Poruka:",
    message,
  ].join("\n");
}

export function buildContactEmailHtml({ name, email, message }: ContactEmailInput) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html lang="sr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nova kontakt poruka</title>
  </head>
  <body style="margin:0;padding:0;background:#efefed;font-family:Georgia,'Times New Roman',serif;color:#111;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#efefed;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #ddd;">
            <tr>
              <td style="padding:28px 32px 20px;border-bottom:1px solid #ececea;">
                <p style="margin:0 0 10px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.22em;text-transform:uppercase;color:#666;">
                  Antesevic Weddings
                </p>
                <h1 style="margin:0;font:400 28px/1.05 Georgia,'Times New Roman',serif;color:#111;">
                  Nova poruka sa kontakt forme
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <p style="margin:0 0 18px;font:400 14px/1.7 Arial,sans-serif;color:#444;">
                  Stigla je nova poruka sa sajta. Detalji ispod:
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0ee;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#777;width:88px;">
                      Ime
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0ee;font:400 15px/1.5 Arial,sans-serif;color:#111;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0ee;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#777;">
                      Email
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0ee;font:400 15px/1.5 Arial,sans-serif;color:#111;">
                      <a href="mailto:${safeEmail}" style="color:#111;text-decoration:underline;">${safeEmail}</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 10px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#777;">
                  Poruka
                </p>
                <div style="padding:16px 18px;background:#f7f7f5;border:1px solid #ececea;font:400 15px/1.7 Arial,sans-serif;color:#222;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;">
                <p style="margin:0;font:400 12px/1.6 Arial,sans-serif;color:#888;">
                  Odgovori direktno na email pošiljaoca iz svog inbox-a.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
