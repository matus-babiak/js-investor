import type { VercelRequest, VercelResponse } from "@vercel/node";

const ECOMail_BASE = "https://api2.ecomailapp.cz";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;

  if (!apiKey || !listId) {
    res.status(500).json({ error: "Ecomail not configured" });
    return;
  }

  const { firstName, lastName, email, phone } = req.body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };

  if (!email?.trim()) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  try {
    const response = await fetch(`${ECOMail_BASE}/lists/${listId}/subscribe`, {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscriber_data: {
          name: (firstName ?? "").trim(),
          surname: (lastName ?? "").trim(),
          email: email.trim(),
          phone: (phone ?? "").trim(),
        },
        trigger_autoresponders: false,
        update_existing: true,
        resubscribe: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Ecomail API error:", response.status, errText);
      res.status(response.status).json({ error: "Ecomail request failed" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Ecomail error:", e);
    res.status(500).json({ error: "Server error" });
  }
}
