import sgMail from "@sendgrid/mail";

// Marquer cette page comme rendue par le serveur, pas pré-rendue
export const prerender = false;

// Mode développement pour contourner SendGrid temporairement
const DEV_MODE = false; // Mettre à false en production

// Gestionnaire pour les requêtes POST
export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nom, prenom, telephone, email, message } = data;

    // En mode développement, simuler l'envoi d'email
    if (DEV_MODE) {
      console.log("MODE DÉVELOPPEMENT: Email simulé avec les données:", {
        nom,
        prenom,
        telephone,
        email,
        message,
      });

      // Simuler un délai d'envoi pour plus de réalisme
      await new Promise((resolve) => setTimeout(resolve, 500));

      return new Response(
        JSON.stringify({
          success: true,
          message: "Votre message a été envoyé avec succès (simulation)",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Mode production - utilisation réelle de SendGrid
    // INSTRUCTIONS DE CONFIGURATION:
    // 1. Créez un compte sur sendgrid.com si vous n'en avez pas
    // 2. Vérifiez votre domaine ou au moins une adresse email dans "Sender Authentication"
    // 3. Créez une clé API avec permission "Mail Send" dans "API Keys"
    // 4. Ajoutez la clé dans .env : SENDGRID_API_KEY=votre_clé_api
    // 5. Remplacez l'email d'expédition ci-dessous par votre email vérifié

    const apiKey = import.meta.env.SENDGRID_API_KEY;

    if (!apiKey) {
      console.error("Erreur: Clé API SendGrid manquante");
      throw new Error("Configuration d'envoi d'email manquante");
    }

    sgMail.setApiKey(apiKey);

    const msg = {
      to: "a.janiak@genieclimfrance.fr",
      from: "a.janiak@genieclimfrance.fr",
      subject: "Nouveau message de contact",
      text: `Nom: ${nom}\nPrénom: ${prenom}\nTéléphone: ${telephone}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Téléphone:</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    try {
      await sgMail.send(msg);
    } catch (sendError) {
      console.error("Erreur SendGrid:", sendError);
      if (
        sendError.response &&
        sendError.response.body &&
        sendError.response.body.errors
      ) {
        console.error("Détails:", sendError.response.body.errors);
      }
      throw sendError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre message a été envoyé avec succès",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Une erreur est survenue lors de l'envoi du message",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
