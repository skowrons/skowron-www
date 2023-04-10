import { useEffect, useState } from "react";

export const TableOfContent = () => {
  const [headings, setHeadings] = useState<
    Array<{ text: string; level: number; id: string }>
  >([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    ).map((elem) => ({
      id: elem.id,
      text: (elem as HTMLElement).innerText,
      level: Number(elem.nodeName.charAt(1)),
    }));
    setHeadings(elements);
  }, []);

  const getClassName = (level: number) => {
    switch (level) {
      case 1:
        return "";
      case 2:
        return "ml-4";
      case 3:
        return "ml-8";
      case 4:
        return "ml-12";
      default:
        return "";
    }
  };

  return (
    <nav className="md:sticky md:pl-16 pb-8 md:overflow-y-auto overflow-visible prose md:h-screen md:top-0">
      <p>Inhalt</p>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={getClassName(heading.level)}>
            <a href={"#" + heading.text.toLowerCase().replaceAll(" ", "-")}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
