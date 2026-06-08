import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/banner2026.jpg"
          alt="Rose Salão de Beleza"
          fill
          priority
          sizes="100vw"
        />

        <div className="overlay">
          <h1>Rose Salão de Beleza</h1>

          <p>Beleza, cuidado e autoestima.</p>

          <p>Atendimento somente com horário agendado</p>

          <a
            className="botao"
            href="https://wa.me/5511998266670"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Horário
          </a>
        </div>
      </section>

      <section className="sobre">
        <h2>Seu Momento de Beleza</h2>

        <p>
          Atendimento personalizado em um ambiente acolhedor,
          com dedicação, carinho e atenção aos detalhes.
          Cada cliente recebe um cuidado especial para realçar
          sua beleza e autoestima.
        </p>
      </section>

      <section className="servicos">
        <h2>Serviços</h2>

        <div className="categoria">
          <h3>Cabelos</h3>
          <p>Corte • Escova • Progressiva • Selagem • Botox</p>
        </div>

        <div className="categoria">
          <h3>Coloração</h3>
          <p>Mechas • Luzes • Reflexos • Blindagem</p>
        </div>

        <div className="categoria">
          <h3>Tratamentos</h3>
          <p>Hidratação • Cronograma Capilar</p>
        </div>

        <div className="categoria">
          <h3>Beleza</h3>
          <p>Maquiagem • Penteado • Sobrancelha • Buço</p>
        </div>

        <div className="categoria">
          <h3>Bem-estar</h3>
          <p>Day Spa</p>
        </div>
      </section>

      <section className="galeria">
        <h2>Trabalhos Realizados</h2>

        <div className="galeria-grid">
          <div style={{ position: "relative", height: "500px" }}>
            <Image
              src="/banner2026.jpg"
              alt="Trabalho Rose"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>

          <div style={{ position: "relative", height: "500px" }}>
            <Image
              src="/mechas2026.jpg"
              alt="Mechas"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>

          <div style={{ position: "relative", height: "500px" }}>
            <Image
              src="/cliente2026.jpg"
              alt="Cliente"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="contato">
        <h2>Contato</h2>

        <p>Rua Batávia, 155 A</p>
        <p>Parque Novo Oratório - Santo André</p>

        <a
          className="botao"
          href="https://wa.me/5511998266670"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </section>
    </main>
  );
}