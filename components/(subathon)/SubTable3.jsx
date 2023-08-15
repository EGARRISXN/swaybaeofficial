export default function SubTable3() {
  return (
    <div className="overflow-x-auto  bg-base-200  border-base-content rounded-2xl shadow-2xl border-4 shadow-purple-800/50 p-2">
      <table className="table">
        <thead className="mx-auto">
          <tr className="table-sm bg-base-content">
            <td className="text-lg rounded-l-xl text-base-200">
              Individual Goals
            </td>
            <td className="text-lg rounded-r-xl text-base-200">Reward</td>
          </tr>
        </thead>
        <tbody className="body">
          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">Top Overall Contributor</td>
            <td className="text-primary text-xs">
              Join me in game for a future stream and/or gaming off stream
            </td>
          </tr>
          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">200 Gifted</td>
            <td className="text-primary text-xs">
              Special personalized gift shipped to you
            </td>
          </tr>
          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">150 Gifted</td>
            <td className="text-primary text-xs">
              Personalized chat command (cannot break TOS/channel rules)
            </td>
          </tr>
          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">100 Gifted</td>
            <td className="text-primary text-xs">
              Get to pick what I play for part of the day (from my collection)
            </td>
          </tr>

          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">75 Gifted</td>
            <td className="text-primary text-xs">
              Have a character created for you in the next game I play
            </td>
          </tr>
          <tr className="hover table-xs text-xs">
            <td className="text-secondary text-xs">50 Gifted</td>
            <td className="text-primary text-xs">
              Get your username on a balloon in the background until Subathon
              ends
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
