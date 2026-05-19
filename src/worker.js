import { createMimeMessage } from "mimetext";

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/api/contact" && request.method === "POST") {
            return handleContact(request, env);
        }

        return env.ASSETS.fetch(request);
    },
};

async function handleContact(request, env) {
    let data;
    try {
        data = await request.formData();
    } catch {
        return redirectTo("/contact/?error=1");
    }

    // Honeypot — silently succeed if filled
    if (data.get("bot-field")) {
        return redirectTo("/contact/?sent=1");
    }

    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!name || !email || !message) {
        return redirectTo("/contact/?error=1");
    }

    // In local dev the send_email binding is unavailable — log and continue
    if (!env.SEND_EMAIL) {
        console.log("[contact] dev stub — would send:", { name, email, message });
        return redirectTo("/contact/?sent=1");
    }

    try {
        const msg = createMimeMessage();
        msg.setSender({ name: "WJC Contact Form", addr: env.CONTACT_FROM });
        msg.setRecipient(env.CONTACT_TO);
        msg.setSubject(`New contact from ${name}`);
        msg.addMessage({
            contentType: "text/plain",
            data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        const message_ = new EmailMessage(
            env.CONTACT_FROM,
            env.CONTACT_TO,
            msg.asRaw()
        );
        await env.SEND_EMAIL.send(message_);
    } catch (err) {
        console.error("[contact] send failed:", err);
        return redirectTo("/contact/?error=1");
    }

    return redirectTo("/contact/?sent=1");
}

function redirectTo(path) {
    return Response.redirect(path, 303);
}
