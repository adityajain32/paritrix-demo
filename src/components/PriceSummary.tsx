export function PriceSummary({ subtotal, shipping, total }: { subtotal: string; shipping: string; total: string }) {
  return (
    <dl className="grid grid-cols-2 gap-2 rounded-[10px] border border-[#e7e6e1] p-[13px] text-sm">
      <dt className="text-[#6b6a64]">Subtotal</dt>
      <dd className="text-right">{subtotal}</dd>
      <dt className="text-[#6b6a64]">Shipping</dt>
      <dd className="text-right">{shipping}</dd>
      <dt className="font-semibold text-[#0e0e0c]">Total</dt>
      <dd className="text-right text-[20px] font-semibold">{total}</dd>
    </dl>
  );
}
