export default function SubTable1() {
  return (
    <div className="overflow-x-auto bg-base-200  border-base-content rounded-2xl shadow-2xl border-4 shadow-purple-800/50 p-2">
      <table className="table">
        <thead className="mx-auto">
          <tr className="bg-base-content table-sm">
            <td
              className="text-center rounded-xl text-lg text-base-200"
              colSpan="3"
            >
              2023 UNCAPPED SUBATHON!
            </td>
          </tr>
          <tr className="hover table-sm">
            <td className="text-center text-primary" colSpan="3">
              Start Date: August 13th, 2023
            </td>
          </tr>
          <tr className="hover table-sm">
            <td className="text-center text-primary" colSpan="3">
              Daily: 11AM - 11PM EST
            </td>
          </tr>
          <tr className="hover table-sm">
            <td className="text-center text-primary" colSpan="3">
              Stretch Cap 372 hours (31 days)
            </td>
          </tr>
          <tr className="hover table-sm">
            <td colSpan="3" className="text-center text-primary">
              - when 372 hours achieved, switch to 24 hours/day -
            </td>
          </tr>
          <tr className="hover table-sm">
            <td colSpan="3" className="text-center text-primary">
              Starting time on timer: 12 HOURS
            </td>
          </tr>
        </thead>
        <tbody className="body">
          <tr className="hover table-xs">
            <td></td>
            <td className="text-center text-base-content text-sm">
              Minutes added
            </td>
            <td className="text-center text-base-content text-sm">
              Counts as how many subs?*
            </td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary  text-sm">T1 Subs</td>
            <td className="text-primary  text-sm">5</td>
            <td className="text-primary  text-sm">1</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary  text-sm">T2 Subs</td>
            <td className="text-primary  text-sm">12</td>
            <td className="text-primary  text-sm">2</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary  text-sm">T3 Subs</td>
            <td className="text-primary  text-sm">35</td>
            <td className="text-primary  text-sm">5</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary  text-sm">$1.00 Dontaion</td>
            <td className="text-primary  text-sm">2</td>
            <td className="text-primary  text-sm">0.2 ($5 = 1 sub)</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary  text-sm">100 Bits</td>
            <td className="text-primary  text-sm">2</td>
            <td className="text-primary  text-sm">0.2 (500 bits = 1 sub)</td>
          </tr>
          <tr className="hover table-xs text-base-content">
            <td colSpan="3" className="text-xs ">
              *to progress sub goals
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
