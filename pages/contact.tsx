import SimplePage from "skowron/components/SimplePage";

const Contact = () => {
  return (
    <main>
      <SimplePage className="prose">
        <h1>Kontakt</h1>
        <h2>Daten</h2>
        <p>
          <span className="font-bold">Lat/lon: </span>
          <a
            className="text-orange-500"
            href="https://goo.gl/maps/2ehBUv6RsEZmEtTB6"
          >
            51.3397° N, 12.3731° E
          </a>
        </p>
        <p>
          <span className="font-bold">E-Mail: </span>
          <a className="text-orange-500" href="mailto:maximilian@skowron.one">
            maximilian@skowron.one
          </a>
        </p>

        <h2>Informationen für Rekruiter</h2>
        <p>
          Generell bin ich offen für konstruktiven Austausch und
          Projektvorschläge. Auch für weiterführende leitende Positionen bin ich
          immer offen. Sollte sich keine Position ergeben stehe ich gerne mit
          meiner Expertise Ihrem Unternehmen zur Verfügung.
        </p>
      </SimplePage>
    </main>
  );
};

export default Contact;
