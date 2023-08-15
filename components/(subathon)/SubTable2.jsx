export default function SubTable2() {
  return (
    <div className="overflow-x-auto bg-base-200 border-base-content rounded-2xl shadow-2xl border-4 shadow-purple-800/50 p-2">
      <table className="table">
        <thead className="mx-auto">
          <tr className="table-sm bg-base-content">
            <td
              className="rounded-xl text-center text-lg text-base-200"
              colSpan="3"
            >
              Reoccuring Sub Goals
            </td>
          </tr>
        </thead>
        <tbody className="body">
          <tr className="hover table-xs">
            <td className=" text-base-content text-sm " colSpan="1">
              How Many Subs?
            </td>
            <td className="text-base-content text-sm" colSpan="1">
              Reward
            </td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary text-sm">10</td>
            <td className="text-primary text-sm">Spin Fitness Wheel*</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary text-sm">50</td>
            <td className="text-primary text-sm">Dog Treat</td>
          </tr>
          <tr className="hover table-xs">
            <td className="text-secondary text-sm">100</td>
            <td className="text-primary text-sm">Community Lobby/Game</td>
          </tr>
          <tr className="hover table-xs  text-base-content">
            <td colSpan="3" className="text-xs">
              *IRL wheel w/ different activities such as 5 of pushups, ab
              crunches, burpees, squats, etc.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
