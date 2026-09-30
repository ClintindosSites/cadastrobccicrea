import LeadForm from "../components/LeadForm";

export default function Home() {
  return (
    <main className="landing">
      <div className="background-image" />
      <div className="background-overlay" />

      <section className="card" aria-labelledby="title">
        <div className="eyebrow">ATENDIMENTO PERSONALIZADO</div>
        <h1 id="title">Consultoria de Crédito</h1>
        <p className="intro">
          Fale com um especialista em soluções de crédito.
        </p>
        <p className="description">
          Preencha os seus dados e um consultor entrará em contacto consigo para
          compreender o seu perfil e as suas necessidades.
        </p>

        <LeadForm />

        {/* <p className="operator">
          Responsável pelo atendimento:{" "}
          <strong>[NOME DO CONSULTOR / EMPRESA]</strong>
          <br />
          [E-MAIL] · [TELEFONE]
        </p>*/}
      </section>
    </main>
  );
}
