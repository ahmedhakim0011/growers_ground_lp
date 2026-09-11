type LegalSection = {
  title: string;
  body?: string;
  list?: readonly string[];
};

type LegalDocumentProps = {
  sections: readonly LegalSection[];
};

export function LegalDocument({ sections }: LegalDocumentProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body ? <p>{section.body}</p> : null}
          {section.list ? (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
