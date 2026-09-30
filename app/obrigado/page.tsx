"use client";

import { useEffect, useState } from "react";

const REDIRECT_URL = "https://www.gruppobcciccrea.it/en/Pages/default.aspx";

export default function Obrigado() {
  const [seconds, setSeconds] = useState(10);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const url = sessionStorage.getItem("lead_whatsapp_url") || "";

    setWhatsappUrl(url);

    // Tenta abrir o WhatsApp em nova aba.
    // Se o navegador bloquear o pop-up,
    // o botão continuará disponível.
    if (url) {
      const popup = window.open(url, "_blank", "noopener,noreferrer");

      if (popup) {
        popup.opener = null;
      }
    }

    const timer = window.setInterval(() => {
      setSeconds(current => {
        if (current <= 1) {
          window.clearInterval(timer);
          window.location.replace(REDIRECT_URL);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="thank-you-page">
      <section className="thank-you-card">
        <div className="success-icon">✓</div>

        <div className="eyebrow">PEDIDO RECEBIDO</div>

        <h1>Obrigado pelo seu contacto!</h1>

        <p>Os seus dados foram registados com sucesso.</p>

        <p>
          Se o WhatsApp não abriu automaticamente, utilize o botão abaixo para
          falar com o consultor.
        </p>

        {whatsappUrl && (
          <a
            className="whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continuar pelo WhatsApp
          </a>
        )}

        <div className="countdown">
          Será redirecionado em <strong>{seconds}s</strong>
        </div>
      </section>
    </main>
  );
}
