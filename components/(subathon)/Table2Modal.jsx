"use client";
import { useState } from "react";

export default function Table2Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto  my-1 border-b-2 border-base-content  shadow-lg rounded-br-2xl hover:bg-warning shadow-purple-800/50 p-2">
      <button onClick={toggleModal} className="btn-sm hover:font-semibold">
        Reoccuring Sub Goals
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center z-50">
          <div
            className="modal-overlay absolute inset-0 bg-gray-800 bg-opacity-25"
            onClick={closeModal}
          ></div>

          <div className="model-container-slide modal-container max-w-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12  rounded-lg shadow-lg z-50">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <button
                  className="modal-close justify-center btn btn-sm btn-primary cursor-pointer z-50 flex items-center mx-auto"
                  onClick={closeModal}
                  style={{ top: "-1rem" }}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M18 1.793L16.207 0 9 7.207 1.793 0 0 1.793 7.207 9 0 16.207 1.793 18 9 10.793 16.207 18 18 16.207 10.793 9 18 1.793z" />
                  </svg>
                </button>
              </div>
              <div className="w-full overflow-x-auto bg-base-200 border-base-content rounded-2xl shadow-2xl border-4 shadow-purple-800/50 p-2">
                <div className="table-responsive">
                  <table className="table table-xs">
                    <thead className="mx-auto">
                      <tr className="table-sm bg-base-content">
                        <th
                          className="rounded-xl text-center text-lg text-base-200"
                          colSpan="3"
                        >
                          Reoccuring Sub Goals
                        </th>
                      </tr>
                    </thead>
                    <tbody className="body">
                      <tr className="hover table-xs">
                        <td
                          className="text-base-content text-sm underline"
                          colSpan="1"
                        >
                          How Many Subs?
                        </td>
                        <td
                          className="text-base-content text-sm underline"
                          colSpan="1"
                        >
                          Reward
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-sm">10</td>
                        <td className="text-primary text-sm">
                          Spin Fitness Wheel*
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-sm">50</td>
                        <td className="text-primary text-sm">Dog Treat</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-sm">100</td>
                        <td className="text-primary text-sm">
                          Community Lobby/Game
                        </td>
                      </tr>
                      <tr className="hover table-xs text-base-content">
                        <td colSpan="3" className="text-xs underline">
                          *IRL wheel w/ different activities like 5 pushups, ab
                          crunches, burpees, squats, etc.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
