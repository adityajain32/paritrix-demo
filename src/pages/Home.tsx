import { ProductCard } from "../components/ProductCard";
import { PriceSummary } from "../components/PriceSummary";

const products = [
  { name: "Linen apron", price: "$38", image: "/apron.jpg", onSale: true },
  { name: "Stoneware mug", price: "$22", image: "/mug.jpg" },
  { name: "Oak cutting board", price: "$64", image: "/board.jpg" },
];

export function Home() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 24px", color: "var(--color-ink)" }}>New this week</h1>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </section>
      <aside style={{ marginTop: 32, maxWidth: 360 }}>
        <PriceSummary subtotal="$124" shipping="$8" total="$132" />
      </aside>
    </main>
  );
}
