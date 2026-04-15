function ProductSpecsTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-black text-left text-white">
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Feature</th>
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Value</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, index) => (
              <tr key={spec.feature} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="border-t border-slate-200 px-5 py-4 text-sm font-medium text-slate-800">
                  {spec.feature}
                </td>
                <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
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
