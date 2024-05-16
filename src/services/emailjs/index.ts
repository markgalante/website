import * as emailjs from "@emailjs/browser";

export function initialiseEmailService() {
  return emailjs.init({
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });
}

export function sendEmail(templateParams: Record<string, unknown>) {
    return emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        limitRate: {
          id: "app",
          throttle: 10000,
        },
      }
    );
}
