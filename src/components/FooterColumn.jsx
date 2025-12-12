export default function FooterColumn({ title, links }) {
  return (
    <section className="flex flex-col">
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <a className="text-sm font-semibold" href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
