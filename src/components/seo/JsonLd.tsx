type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Structured data for search engines. `<` is escaped so no string in the content can close the
 * script tag early.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      type="application/ld+json"
    />
  );
}
