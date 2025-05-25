import { Child, component, m } from "@mufw/maya";

type HTMLPageProps = {
  cssClasses?: string;
  body: Child;
  onMount?: () => void;
};

export const HTMLPage = component<HTMLPageProps>(
  ({ cssClasses, body, onMount }) => {
    return m.Html({
      lang: "en",
      children: [
        m.Head({
          children: [
            m.Title("Habits (by Cyfer)"),
            m.Link({
              rel: "icon",
              type: "image/x-icon",
              href: "/assets/images/favicon.ico",
            }),
            m.Meta({ charset: "UTF-8" }),
            m.Meta({
              "http-equiv": "X-UA-Compatible",
              content: "IE=edge",
            }),
            m.Meta({
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            m.Link({
              rel: "stylesheet",
              href: "/assets/styles.css",
            }),
            m.Link({
              rel: "manifest",
              href: "/manifest.json",
            }),
          ],
        }),
        m.Body({
          tabindex: "-1",
          class: cssClasses,
          onmount: onMount,
          children: [m.Script({ src: "main.js", defer: "true" }), body],
        }),
      ],
    });
  }
);
