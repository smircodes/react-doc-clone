import FooterColumn from "./FooterColumn";
import FooterBrand from "./FooterBrand";
const footerData = [
  {
    title: "Learn React",
    links: [
      { text: "Quick Start", href: "#" },
      { text: "Installation", href: "#" },
      { text: "Describing UI", href: "#" },
      { text: "Adding Interactivity", href: "#" },
      { text: "Managing State", href: "#" },
      { text: "Escape Hatches", href: "#" },
    ],
  },
  {
    title: "API Refrences",
    links: [
      { text: "React APIs", href: "#" },
      { text: "React DOM APIs", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { text: "Code of Conduct", href: "#" },
      { text: "Meet the Team", href: "#" },
      { text: "Docs Contributors", href: "#" },
      { text: "Acknowledgements", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { text: "Blog", href: "#" },
      { text: "React Native", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-6 p-10">
      <FooterBrand />
      {footerData.map((col) => (
        <FooterColumn key={col.title} title={col.title} links={col.links} />
      ))}
    </footer>
  );
}
