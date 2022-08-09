/**
 *  contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async sendRealEmail(ctx) {
      try {
        const body = ctx.request.body;
        const sendTo = body.emailAdrres;
        strapi.log.debug(sendTo);
        const username = body.username;
        const message = body.message;
        const subject = body.subject;
        let response = await strapi.plugins["email"].services.email.send({
          to: sendTo,
          from: "axel@axelmwenze.dev", //e.g. single sender verification in SendGrid
          cc: "",
          bcc: "",
          replyTo: "axel@axelmwenze.dev",
          subject: subject,
          text: `Message from the username ${username} \n ${message}`,
        });
        strapi.log.debug(response);
        ctx.body = "ok";
      } catch (err) {
        strapi.log.error(`Error sending email`, err);
        ctx.send({ error: "Error sending email" });
      }
    },
  })
);
