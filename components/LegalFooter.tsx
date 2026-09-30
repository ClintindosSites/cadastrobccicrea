export default function LegalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="legal-footer">
      <div className="legal-footer-divider" />

      <div className="legal-footer-operator">
        <span className="legal-footer-label">RESPONSÁVEL PELO ATENDIMENTO</span>

        <p>
          <strong>[NOME DA EMPRESA / CONSULTOR]</strong>
        </p>

        <p>
          [IDENTIFICAÇÃO FISCAL] · [ENDEREÇO]
          <br />
          [E-MAIL] · [TELEFONE]
        </p>
      </div>

      <div className="legal-footer-disclaimer">
        <p>
          Os serviços disponibilizados através deste site destinam-se à
          prestação de informações e à recolha de pedidos de contacto
          relacionados com soluções de crédito.
        </p>

        <p>
          O preenchimento do formulário não representa aprovação, concessão ou
          garantia de obtenção de crédito. Qualquer operação está sujeita a
          análise, elegibilidade e às condições aplicáveis.
        </p>
      </div>

      <nav className="legal-links" aria-label="Links legais">
        <a href="/politica-de-privacidade">Política de Privacidade</a>

        <span aria-hidden="true">·</span>

        <a href="/termos-de-uso">Termos de Uso</a>
      </nav>

      <p className="copyright">
        © {currentYear} [NOME DA EMPRESA / CONSULTOR]. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
