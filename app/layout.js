import "./globals.css";

export const metadata = {
  title: "Resultados — Campaña Baja de Tasas | Pago Nube",
  description:
    "Resultados de la campaña de baja de tasas de Pago Nube: audiencia, cobertura, conversiones, Growth vs Retention, mejor plan, test A/B y engagement en comunicaciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
