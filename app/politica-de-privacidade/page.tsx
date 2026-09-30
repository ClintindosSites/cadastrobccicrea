import type { Metadata } from "next";

import LegalFooter from "../../components/LegalFooter";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informações sobre o tratamento dos seus dados pessoais.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <div className="legal-header">
          <span className="legal-eyebrow">INFORMAÇÕES LEGAIS</span>

          <h1>Política de Privacidade</h1>

          <p className="legal-intro">
            Esta política explica como os seus dados pessoais são recolhidos,
            utilizados e protegidos quando utiliza este site.
          </p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Responsável pelo tratamento</h2>

            <p>
              O responsável pelo tratamento dos dados pessoais recolhidos
              através deste site é:
            </p>

            <div className="legal-contact">
              <strong>[NOME DA EMPRESA / CONSULTOR]</strong>

              <span>NIF / Identificação fiscal: [NIF]</span>

              <span>Endereço: [ENDEREÇO]</span>

              <span>E-mail: [E-MAIL]</span>

              <span>
                Contacto para questões de privacidade: [E-MAIL PRIVACIDADE]
              </span>
            </div>
          </section>

          <section>
            <h2>2. Dados pessoais recolhidos</h2>

            <p>
              Quando preenche o formulário de contacto, podemos recolher os
              seguintes dados:
            </p>

            <ul>
              <li>Nome completo;</li>
              <li>Número de telemóvel;</li>
              <li>Endereço de e-mail;</li>
              <li>
                Informação relacionada com a origem da campanha, quando
                disponível.
              </li>
            </ul>

            <p>
              Os dados de origem da campanha podem incluir parâmetros como{" "}
              <strong>utm_source</strong>,<strong>utm_medium</strong>,
              <strong>utm_campaign</strong>,<strong>utm_term</strong> e{" "}
              <strong>gclid</strong>.
            </p>
          </section>

          <section>
            <h2>3. Finalidades do tratamento</h2>

            <p>
              Os dados fornecidos através do formulário são utilizados para
              responder ao pedido de contacto efetuado pelo utilizador e para
              prestar as informações solicitadas relativamente a soluções de
              crédito e serviços de consultoria.
            </p>

            <p>
              Quando autorizado pelo utilizador, o contacto poderá ser realizado
              através de telefone, e-mail ou WhatsApp.
            </p>

            <p>
              Os dados poderão também ser utilizados para assegurar a segurança,
              funcionamento e melhoria do site, bem como para cumprir obrigações
              legais aplicáveis.
            </p>
          </section>

          <section>
            <h2>4. Base legal</h2>

            <p>
              O tratamento dos dados pessoais será realizado com base nas
              hipóteses legais previstas no Regulamento Geral sobre a Proteção
              de Dados (GDPR) e na legislação aplicável.
            </p>

            <p>
              Quando o tratamento depender de consentimento, este será
              solicitado de forma livre, específica, informada e inequívoca
              através dos mecanismos disponibilizados neste site.
            </p>
          </section>

          <section>
            <h2>5. Conservação dos dados</h2>

            <p>
              Os dados pessoais serão conservados apenas durante o período
              necessário para cumprir as finalidades para as quais foram
              recolhidos, salvo quando exista uma obrigação legal que determine
              um período de conservação diferente.
            </p>

            <p>
              Prazo ou critérios específicos de conservação:
              <strong> [PRAZO A DEFINIR]</strong>.
            </p>
          </section>

          <section>
            <h2>6. Partilha e prestadores de serviços</h2>

            <p>
              Os dados poderão ser tratados por prestadores de serviços
              tecnológicos necessários ao funcionamento deste site e ao
              armazenamento seguro das informações.
            </p>

            <p>
              Atualmente, os dados submetidos através do formulário são
              armazenados através da infraestrutura da <strong>Supabase</strong>
              , utilizada para armazenamento e gestão da base de dados.
            </p>

            <p>
              Os dados não são vendidos a terceiros. Qualquer partilha ou acesso
              por terceiros ocorrerá apenas quando necessário para as
              finalidades descritas nesta política, quando exista fundamento
              legal ou quando seja exigido por lei.
            </p>
          </section>

          <section>
            <h2>7. WhatsApp</h2>

            <p>
              Quando o utilizador escolhe continuar o contacto através do
              WhatsApp, será aberto um link para a plataforma correspondente com
              uma mensagem previamente preenchida.
            </p>

            <p>
              O envio da mensagem depende de uma ação expressa do próprio
              utilizador.
            </p>

            <p>
              Após a abertura do WhatsApp, o tratamento dos dados realizado pela
              respetiva plataforma estará sujeito às políticas e condições da
              Meta/WhatsApp.
            </p>
          </section>

          <section>
            <h2>8. Direitos do titular dos dados</h2>

            <p>
              Nos termos da legislação aplicável, nomeadamente do GDPR quando
              aplicável, o titular dos dados poderá ter direito a:
            </p>

            <ul>
              <li>Aceder aos seus dados pessoais;</li>
              <li>Solicitar a sua retificação;</li>
              <li>Solicitar a eliminação dos seus dados, quando aplicável;</li>
              <li>Solicitar a limitação do tratamento;</li>
              <li>Solicitar a portabilidade dos dados, quando aplicável;</li>
              <li>Opor-se a determinados tratamentos;</li>
              <li>
                Retirar o consentimento quando o tratamento tiver como base o
                consentimento.
              </li>
            </ul>

            <p>
              Para exercer os seus direitos ou esclarecer questões relacionadas
              com a proteção de dados, contacte:
            </p>

            <div className="legal-contact">
              <strong>[E-MAIL PRIVACIDADE]</strong>
            </div>
          </section>

          <section>
            <h2>9. Reclamações</h2>

            <p>
              O titular dos dados poderá apresentar uma reclamação junto da
              autoridade de controlo competente, caso considere que o tratamento
              dos seus dados pessoais viola a legislação aplicável.
            </p>

            <p>
              Para tratamentos sujeitos à autoridade italiana de proteção de
              dados, poderá ser contactado o
              <strong> Garante per la Protezione dei Dati Personali</strong>.
            </p>
          </section>

          <section>
            <h2>10. Segurança</h2>

            <p>
              São adotadas medidas técnicas e organizativas destinadas a
              proteger os dados pessoais contra acesso não autorizado, perda,
              alteração, divulgação ou destruição indevida.
            </p>

            <p>
              A transmissão dos dados através do formulário é realizada através
              de ligação segura HTTPS.
            </p>
          </section>

          <section>
            <h2>11. Cookies e tecnologias semelhantes</h2>

            <p>
              Este site poderá utilizar cookies ou tecnologias semelhantes para
              garantir o seu funcionamento, analisar a utilização do site ou
              medir o desempenho de campanhas, conforme aplicável.
            </p>

            <p>
              Quando forem utilizados cookies que exijam consentimento, o
              utilizador será informado e poderá gerir as suas preferências
              através dos mecanismos disponibilizados no site.
            </p>
          </section>

          <section>
            <h2>12. Alterações desta política</h2>

            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir alterações legais, técnicas ou operacionais.
            </p>

            <p>A versão mais recente estará sempre disponível nesta página.</p>

            <p className="legal-updated">Última atualização: [DATA]</p>
          </section>
        </div>

        <LegalFooter />
      </div>
    </main>
  );
}
