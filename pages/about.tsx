import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SimplePage from "skowron/components/SimplePage";

export default function About() {
  return (
    <>
      <main>
        <SimplePage className="prose">
          <h1>Abriss</h1>
          <p className="pb-4">
            Als leidenschaftlicher Entwicklungsleiter mit einer starken
            Expertise im Backend-Entwicklungsbereich setze ich mich stets dafür
            ein, praktische und lösungsorientierte Ansätze in meiner Arbeit zu
            verfolgen. Mit meiner Erfahrung im erfolgreichen Management eines
            Data-Warehouse-Projekts für eine 300-Personen-Firma konnte ich mein
            Verständnis für effektive Projektleitung vertiefen und erhebliche
            Zeitersparnisse erzielen.
            <br />
            <br />
            In den letzten 1,5 Jahren hatte ich das Privileg, ein engagiertes
            Entwicklerteam in einem aufstrebenden Startup zu führen. Dabei stand
            für mich die Etablierung einer organisierten und effizienten
            Entwicklungsprozesses im Vordergrund. Die Zufriedenheit und
            Motivation meines Teams sind mir besonders wichtig, und ich lege
            großen Wert darauf, eine offene Kommunikation und eine positive
            Arbeitsatmosphäre zu fördern. Ich freue mich darauf, mein Wissen und
            meine Fähigkeiten einzusetzen, um Ihr Softwareentwickler-Team
            erfolgreich zu leiten.
          </p>
          <h1>Genauer</h1>
          <p>
            Durch meine umfassenden Kenntnisse in verschiedenen
            Programmiersprachen wie Java, Python und GoLang sowie im Umgang mit
            agilen Methoden wie Scrum und Kanban konnte ich stets flexibel auf
            die Anforderungen des Marktes reagieren und innovative Lösungen für
            komplexe IT-Herausforderungen entwickeln.
          </p>
          <p>
            Ein besonderer Meilenstein meiner Karriere war die Implementierung
            einer skalierbaren Cloud-Lösung für ein internationales
            Softwaredienstleistungsunternehmen, wodurch die Effizienz und
            Leistungsfähigkeit der Projektplanung, Teamleiter und der
            Geschäftsführung erheblich gesteigert werden konnte. Dieses Projekt
            unterstreicht meine Kompetenzen in der Koordination von
            Entwicklungsprojekten und im Erstellen von maßgeschneiderten
            Lösungen für verschiedene Branchen.
          </p>
          <p>
            Bildempfehlung: An dieser Stelle könnte ein Bild des Entwicklerteams
            beim Brainstorming oder einer gemeinsamen Besprechung eingefügt
            werden, um die Teamarbeit und positive Atmosphäre zu betonen.
          </p>
          <p>
            In meiner Rolle als IT-Manager habe ich immer auch ein Auge für die
            strategische Weiterentwicklung von Geschäftsprozessen. Ich verstehe
            mich als Brückenbauer zwischen den technischen Abteilungen und den
            Entscheidungsträgern, um gemeinsam zukunftsweisende Technologien und
            effiziente Arbeitsabläufe zu etablieren. Die Fähigkeit, technisches
            Know-how in verständliche und überzeugende Konzepte zu übersetzen,
            ist dabei eine meiner größten Stärken.
          </p>
          <p>
            Neben meiner Erfahrung in der Softwareentwicklung und im
            Projektmanagement verfüge ich auch über fundierte Kenntnisse im
            Bereich IT-Sicherheit (jetzte Informationssicherheit). Ich bin stets
            darauf bedacht, sowohl interne als auch externe
            Sicherheitsanforderungen zu erfüllen und dabei
            Datenschutzbestimmungen und Compliance-Richtlinien einzuhalten.
          </p>
          <p>
            Bildempfehlung: Ein passendes Bild hier könnte ein Diagramm oder
            eine Infografik sein, die die verschiedenen Aspekte der
            IT-Management-Kompetenzen verdeutlicht.
          </p>
          <p>
            Ich bin davon überzeugt, dass meine Fähigkeiten und Erfahrungen im
            IT-Management Ihrem Unternehmen dabei helfen können, technologische
            Herausforderungen zu meistern und nachhaltige Lösungen für eine
            erfolgreiche Zukunft zu schaffen. Ich freue mich darauf, gemeinsam
            mit Ihnen und Ihrem Team an innovativen Projekten zu arbeiten und
            einen bedeutenden Beitrag zum Erfolg Ihres Unternehmens zu leisten.
          </p>
          <p>
            Mehr über Meine Erfahrungen können Sie hier lesen:{" "}
            <Link href={"/projects"} className="text-orange-500 underline">
              Projekte & Erfahrungen
            </Link>
          </p>
          <h1>Kontakt</h1>
          <p>
            Sollten Sie Intresse an einen kurzen oder auch längeren Austausch
            haben melden Sie sich hier bei mir:{" "}
            <Link href={"/contact"} className="text-orange-500 underline">
              Kontakt
            </Link>
          </p>
        </SimplePage>
      </main>
    </>
  );
}
