function ProductSpecsTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#111]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#272423] text-left text-white">
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Feature</th>
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Value</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, index) => (
              <tr key={spec.feature} className={index % 2 === 0 ? "bg-[#111]" : "bg-[#1d1d1d]"}>
                <td className="border-t border-white/10 px-5 py-4 text-sm font-medium uppercase text-[#aea8a2]">
                  {spec.feature}
                </td>
                <td className="border-t border-white/10 px-5 py-4 text-sm text-white">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductSpecsTable;
