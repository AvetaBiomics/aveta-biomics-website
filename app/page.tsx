import { Arrow, Shell } from "./components/SiteChrome";

export default function Home() {
  return <Shell><main>
    <section className="approved-home-hero">
      <div className="home-copy">
        <p className="eyebrow">NEXT GENERATION OF IMMUNO-ONCOLOGY</p>
        <h1><span className="hero-line">Immunotherapy</span><span className="hero-line hero-line-two">starts <span className="accent">before the checkpoint.</span></span></h1>
        <p className="lead">Aveta applies principles of evolutionary biology to develop oral therapies that reprogram the tumor–immune ecosystem upstream of checkpoints and thus changing the conditions that allow cancer to suppress immunity, adapt and persist.</p>
        <div className="actions"><a className="button" href="/science">Explore Our Science <Arrow /></a><a className="button-outline" href="mailto:betterhealth@avetabiomics.com?subject=Partnership inquiry">Partner with us <Arrow /></a></div>
      </div>
      <figure className="home-ecosystem-figure">
        <img src="/assets/home-hero-reprogramming.png" alt="Aveta drugs reprogram an immune-suppressed tumor ecosystem so immune cells can enter" />
      </figure>
    </section>

    <section className="section approved-home-outcome"><div className="container">
      <div className="dual-head"><h2>Cold or hot, tumors can still evade immunity.<br /><span className="accent">Aveta Biomics drugs are designed for both.</span></h2><p className="lead">Aveta’s therapies are designed to activate immune-cold tumors and restore productive immunity in tumors that are already inflamed but functionally suppressed.</p></div>
      <figure className="home-outcome-figure">
        <img src="/assets/home-cold-hot-reprogramming.png" alt="Aveta drugs reprogram immune-cold and immune-hot tumor ecosystems toward a functional antitumor immune response" />
      </figure>
    </div></section>

    <section className="section-sm navy-bg"><div className="container"><div className="dual-head logic-head"><h2>Reprogram the tumor. Transform the outcome.</h2></div><div className="logic-grid">
      <div className="logic-item"><p className="number">01</p><h3>Designed to Prevent Drug Resistance</h3><p>Acts across multiple immune pathways, making cancer escape through any single route more difficult.</p></div>
      <div className="logic-item"><p className="number">02</p><h3>The body’s own immune logic</h3><p>Designed around functions of endogenous metabolites that regulate human immune activity.</p></div>
    </div></div></section>
  </main></Shell>;
}
