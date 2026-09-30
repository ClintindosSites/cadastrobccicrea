import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

import { z } from "zod";

/*
|--------------------------------------------------------------------------
| Validação
|--------------------------------------------------------------------------
*/

const italianMobileRegex = /^\+39\s?3\d{2}\s?\d{3}\s?\d{4}$/;

const schema = z.object({
  name: z.string().trim().min(2).max(100),

  phone: z
    .string()
    .trim()
    .regex(
      italianMobileRegex,
      "Insira um número de telemóvel italiano válido."
    ),

  email: z.string().trim().email().max(150),

  consent: z.literal(true),

  source: z
    .string()
    .trim()
    .max(100)
    .optional()
    .default("landing-consultoria-credito"),

  utm_source: z.string().trim().max(100).optional(),

  utm_medium: z.string().trim().max(100).optional(),

  utm_campaign: z.string().trim().max(150).optional(),

  utm_term: z.string().trim().max(150).optional(),

  gclid: z.string().trim().max(300).optional(),
});

/*
|--------------------------------------------------------------------------
| Normalizar telefone
|--------------------------------------------------------------------------
*/

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

/*
|--------------------------------------------------------------------------
| POST
|--------------------------------------------------------------------------
*/

export async function POST(request: NextRequest) {
  try {
    /*
    |--------------------------------------------------------------------------
    | 1. Ler JSON
    |--------------------------------------------------------------------------
    */

    const body = await request.json();

    /*
    |--------------------------------------------------------------------------
    | 2. Validar
    |--------------------------------------------------------------------------
    */

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,

          error: parsed.error.issues[0]?.message || "Dados inválidos.",
        },
        {
          status: 400,
        }
      );
    }

    const data = parsed.data;

    /*
    |--------------------------------------------------------------------------
    | 3. Normalizar telefone
    |--------------------------------------------------------------------------
    */

    const normalizedPhone = normalizePhone(data.phone);

    /*
    |--------------------------------------------------------------------------
    | 4. Garantir celular italiano
    |--------------------------------------------------------------------------
    */

    if (!/^393\d{9}$/.test(normalizedPhone)) {
      return NextResponse.json(
        {
          ok: false,

          error: "Insira um número de telemóvel italiano válido.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | 5. Variáveis de ambiente
    |--------------------------------------------------------------------------
    */

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const whatsappNumber = process.env.WHATSAPP_NUMBER;

    if (!supabaseUrl || !serviceRoleKey || !whatsappNumber) {
      console.error("Variáveis de ambiente ausentes.");

      return NextResponse.json(
        {
          ok: false,

          error: "Serviço temporariamente indisponível.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | 6. Supabase
    |--------------------------------------------------------------------------
    */

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      db: {
        schema: "public",
      },

      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    /*
    |--------------------------------------------------------------------------
    | 7. Salvar lead
    |--------------------------------------------------------------------------
    */

    const { error: insertError } = await supabase.from("leads").insert({
      name: data.name,

      phone: normalizedPhone,

      email: data.email,

      consent: data.consent,

      source: data.source,

      utm_source: data.utm_source ?? null,

      utm_medium: data.utm_medium ?? null,

      utm_campaign: data.utm_campaign ?? null,

      utm_term: data.utm_term ?? null,

      gclid: data.gclid ?? null,
    });

    /*
    |--------------------------------------------------------------------------
    | 8. Erro Supabase
    |--------------------------------------------------------------------------
    */

    if (insertError) {
      console.error("Supabase insert error:", insertError);

      return NextResponse.json(
        {
          ok: false,

          error: "Não foi possível registrar o pedido.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | 9. Mensagem WhatsApp
    |--------------------------------------------------------------------------
    */

    const message = [
      `Olá, sou ${data.name}.`,
      "",
      "Acabei de preencher o formulário de contacto para obter informações sobre soluções de crédito.",
      "",
      `Telefone: ${data.phone}`,
      `Email: ${data.email}`,
      "",
      "Gostaria de falar com um consultor.",
    ].join("\n");

    /*
    |--------------------------------------------------------------------------
    | 10. Número WhatsApp
    |--------------------------------------------------------------------------
    */

    const normalizedWhatsappNumber = normalizePhone(whatsappNumber);

    if (normalizedWhatsappNumber.length < 7) {
      console.error("Número de WhatsApp inválido.");

      return NextResponse.json(
        {
          ok: false,

          error: "WhatsApp configurado incorretamente.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | 11. URL WhatsApp
    |--------------------------------------------------------------------------
    */

    const whatsappUrl =
      `https://wa.me/${normalizedWhatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    /*
    |--------------------------------------------------------------------------
    | 12. Sucesso
    |--------------------------------------------------------------------------
    */

    return NextResponse.json({
      ok: true,

      whatsappUrl,
    });
  } catch (error) {
    console.error("API /api/leads error:", error);

    return NextResponse.json(
      {
        ok: false,

        error: "Pedido inválido.",
      },
      {
        status: 400,
      }
    );
  }
}
