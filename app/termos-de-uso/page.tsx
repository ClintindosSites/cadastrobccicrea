import type { Metadata } from "next";

import LegalFooter from "../../components/LegalFooter";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de utilização do site e dos serviços de contacto.",
};

export default function TermosUso() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <div className="legal-header">
          <span className="legal-eyebrow">INFORMAÇÕES LEGAIS</span>

          <h1>Termos de Uso</h1>

          <p className="legal-intro">
            Leia atentamente as condições aplicáveis à utilização deste site.
          </p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Objeto</h2>

            <p>
              Este site destina-se exclusivamente à recolha de pedidos de
              contacto para apresentação de serviços de consultoria de crédito.
            </p>

            <p>
              O preenchimento e envio do formulário não constitui um pedido
              formal de crédito, nem representa contratação, aprovação ou
              concessão de crédito.
            </p>
          </section>

          <section>
            <h2>2. Natureza do serviço</h2>

            <p>
              <strong>[NOME DA EMPRESA]</strong> atua como consultoria
              independente, nos termos da sua atividade e enquadramento legal
              aplicável.
            </p>

            <p>
              O envio de um pedido através deste site não garante a obtenção de
              financiamento ou de qualquer outro produto financeiro.
            </p>

            <p>
              Qualquer operação estará sujeita à análise, elegibilidade,
              aprovação e condições aplicáveis pela entidade competente.
            </p>
          </section>

          <section>
            <h2>3. Utilização do site</h2>

            <p>
              O utilizador compromete-se a fornecer informações verdadeiras,
              completas e atualizadas no preenchimento dos formulários
              disponibilizados neste site.
            </p>

            <p>
              É proibida a utilização do site para finalidades ilícitas ou para
              o envio de dados pessoais de terceiros sem a devida autorização ou
              fundamento legal.
            </p>
          </section>

          <section>
            <h2>4. Pedidos de contacto</h2>

            <p>
              Ao enviar um formulário, o utilizador manifesta interesse em
              receber contacto relativamente à solicitação efetuada.
            </p>

            <p>
              O contacto poderá ser realizado através dos meios disponibilizados
              no formulário, incluindo telefone, e-mail ou WhatsApp, quando
              aplicável.
            </p>

            <p>
              O envio do formulário não obriga o utilizador à contratação de
              qualquer produto ou serviço.
            </p>
          </section>

          <section>
            <h2>5. Responsabilidade</h2>

            <p>
              O site é disponibilizado para fins informativos e de contacto.
              Embora sejam adotadas medidas razoáveis para assegurar o seu
              funcionamento, não é garantida a disponibilidade ininterrupta do
              serviço.
            </p>

            <p>
              As informações apresentadas neste site não constituem promessa de
              aprovação, concessão de crédito ou garantia de obtenção de
              financiamento.
            </p>
          </section>

          <section>
            <h2>6. Propriedade intelectual</h2>

            <p>
              Os conteúdos, textos, elementos gráficos, identidade visual e
              materiais disponibilizados neste site pertencem a{" "}
              <strong>[NOME DA EMPRESA]</strong>, salvo indicação em contrário.
            </p>

            <p>
              Marcas e nomes de terceiros eventualmente mencionados pertencem
              aos respetivos titulares e não implicam, por si só, patrocínio,
              representação ou associação comercial.
            </p>
          </section>

          <section>
            <h2>7. Proteção de dados pessoais</h2>

            <p>
              O tratamento dos dados pessoais fornecidos através deste site é
              realizado de acordo com a legislação de proteção de dados
              aplicável.
            </p>

            <p>
              Para obter informações sobre a forma como os seus dados são
              recolhidos, utilizados, armazenados e protegidos, consulte a nossa{" "}
              <a href="/politica-de-privacidade">Política de Privacidade</a>.
            </p>
          </section>

          <section>
            <h2>8. Legislação aplicável</h2>

            <p>
              Estes Termos de Uso são regidos pela legislação aplicável ao
              estabelecimento e à atividade de{" "}
              <strong>[NOME DA EMPRESA]</strong>, sem prejuízo dos direitos que
              possam ser conferidos aos consumidores pela legislação aplicável.
            </p>
          </section>

          <section>
            <h2>9. Contacto</h2>

            <p>
              Para questões relacionadas com estes Termos de Uso, poderá
              contactar:
            </p>

            <div className="legal-contact">
              <strong>[NOME DA EMPRESA]</strong>
              <span>[E-MAIL DE CONTACTO]</span>
              <span>[TELEFONE]</span>
              <span>[ENDEREÇO]</span>
            </div>
          </section>
        </div>

        <LegalFooter />
      </div>
    </main>
  );
}
