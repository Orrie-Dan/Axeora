import { products } from "../data";
import CardCascade from "./CardCascade";

export default function ProductCascade() {
  return (
    <CardCascade
      id="manufacturing"
      heading={
        <>
          National-scale
          <br />
          intelligence
        </>
      }
      lead="End-to-end AI, cloud, and cyber infrastructure purpose-built for those who demand sovereignty, scale, and performance."
      keyboard
      items={products.slice(0, 4).map((p) => ({
        id: p.slug,
        kind: p.kind,
        title: p.cardTitle,
        card: p.card,
        image: p.image,
        href: `/solutions/${p.slug}`,
      }))}
    />
  );
}
