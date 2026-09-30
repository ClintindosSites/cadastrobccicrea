"use client";

import { FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

function getTracking() {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? undefined,

    utm_medium: params.get("utm_medium") ?? undefined,

    utm_campaign: params.get("utm_campaign") ?? undefined,

    utm_term: params.get("utm_term") ?? undefined,

    gclid: params.get("gclid") ?? undefined,
  };
}

/*
|--------------------------------------------------------------------------
| Máscara de telefone italiano
|--------------------------------------------------------------------------
*/

function formatItalianPhone(value: string) {
  let numbers = value.replace(/\D/g, "");

  // Remove o código 39 se o usuário colar +39
  if (numbers.startsWith("39")) {
    numbers = numbers.slice(2);
  }

  // Máximo de 10 dígitos
  numbers = numbers.slice(0, 10);

  // Celulares italianos começam com 3
  if (numbers.length > 0 && numbers[0] !== "3") {
    return "";
  }

  // +39 320 123 4567
  if (numbers.length > 6) {
    return (
      "+39 " +
      numbers.slice(0, 3) +
      " " +
      numbers.slice(3, 6) +
      " " +
      numbers.slice(6)
    );
  }

  // +39 320 123
  if (numbers.length > 3) {
    return "+39 " + numbers.slice(0, 3) + " " + numbers.slice(3);
  }

  // +39 320
  if (numbers.length > 0) {
    return "+39 " + numbers;
  }

  return "";
}

/*
|--------------------------------------------------------------------------
| Normaliza telefone
|--------------------------------------------------------------------------
*/

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

/*
|--------------------------------------------------------------------------
| LeadForm
|--------------------------------------------------------------------------
*/

export default function LeadForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Tracking
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const tracking = getTracking();

    sessionStorage.setItem("lead_tracking", JSON.stringify(tracking));
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Telefone
  |--------------------------------------------------------------------------
  */

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatItalianPhone(event.target.value);

    setPhone(formatted);
  }

  /*
  |--------------------------------------------------------------------------
  | Envio
  |--------------------------------------------------------------------------
  */

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    /*
    |--------------------------------------------------------------------------
    | Validar nome
    |--------------------------------------------------------------------------
    */

    if (name.trim().length < 2) {
      setError("Insira o seu nome completo.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Validar telefone italiano
    |--------------------------------------------------------------------------
    */

    const normalizedPhone = normalizePhone(phone);

    if (!/^393\d{9}$/.test(normalizedPhone)) {
      setError("Insira um número de telemóvel italiano válido.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Validar email
    |--------------------------------------------------------------------------
    */

    if (!email.trim()) {
      setError("Insira o seu endereço de e-mail.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Validar consentimento
    |--------------------------------------------------------------------------
    */

    if (!consent) {
      setError(
        "É necessário aceitar a política de privacidade para continuar."
      );

      return;
    }

    setLoading(true);

    try {
      const tracking = JSON.parse(
        sessionStorage.getItem("lead_tracking") || "{}"
      );

      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name.trim(),

          phone,

          email: email.trim(),

          consent,

          source: "landing-consultoria-credito",

          ...tracking,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Não foi possível enviar o formulário."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Guardar WhatsApp
      |--------------------------------------------------------------------------
      */

      sessionStorage.setItem("lead_whatsapp_url", result.whatsappUrl);

      /*
      |--------------------------------------------------------------------------
      | Guardar ID se existir
      |--------------------------------------------------------------------------
      */

      if (result.leadId) {
        sessionStorage.setItem("lead_id", String(result.leadId));
      }

      /*
      |--------------------------------------------------------------------------
      | Ir para obrigado
      |--------------------------------------------------------------------------
      */

      router.push("/obrigado");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocorreu um erro. Tente novamente."
      );

      setLoading(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      {/* NOME */}

      <label>
        Nome completo
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          required
          maxLength={100}
          autoComplete="name"
          placeholder="O seu nome completo"
        />
      </label>

      {/* TELEFONE */}

      <label>
        Telemóvel
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+39 3XX XXX XXXX"
          maxLength={17}
          required
        />
      </label>

      {/* EMAIL */}

      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
          maxLength={150}
          autoComplete="email"
          placeholder="O seu e-mail"
        />
      </label>

      {/* CONSENTIMENTO */}

      <label className="consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={event => setConsent(event.target.checked)}
        />

        <span>
          Li e aceito a política de privacidade e autorizo o contacto
          relativamente ao pedido efetuado, incluindo através do WhatsApp.
        </span>
      </label>

      {/* ERRO */}

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      {/* BOTÃO */}

      <button type="submit" disabled={loading}>
        {loading ? "A enviar..." : "Solicitar contacto"}
      </button>

      {/* DISCLAIMER */}

      <p className="disclaimer">
        O envio deste formulário não representa aprovação ou concessão de
        crédito. Qualquer operação está sujeita a análise, elegibilidade e às
        condições aplicáveis.
      </p>
    </form>
  );
}
