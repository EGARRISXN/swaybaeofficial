"use client";
import { useState } from "react";

export default function Table3Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto  shadow-lg rounded-br-2xl hover:bg-warning shadow-purple-800/50 p-2">
      <button onClick={toggleModal} className=" btn-sm">
        Individual Goals & Rewards
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center z-50">
          <div
            className="modal-overlay absolute inset-0 bg-gray-800 bg-opacity-25"
            onClick={closeModal}
          ></div>

          <div className="model-container-slide modal-container max-w-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-lg shadow-lg z-50">
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
                        <th className="text-lg rounded-l-xl text-base-200">
                          Individual Goals
                        </th>
                        <th className="text-lg rounded-r-xl text-base-200">
                          Reward
                        </th>
                      </tr>
                    </thead>
                    <tbody className="body">
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary">Top Contributor</td>
                        <td className="text-primary">
                          Join me in game for a future stream and/or gaming off
                          stream
                        </td>
                      </tr>
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary text-xs">
                          200 Gifted Subs
                        </td>
                        <td className="text-primary text-xs">
                          Special personalized gift shipped to you
                        </td>
                      </tr>
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary text-xs">
                          150 Gifted Subs
                        </td>
                        <td className="text-primary text-xs">
                          Personalized chat command (cannot break TOS/channel
                          rules)
                        </td>
                      </tr>
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary text-xs">
                          100 Gifted Subs
                        </td>
                        <td className="text-primary text-xs">
                          Get to pick what I play for part of the day (from my
                          collection)
                        </td>
                      </tr>
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary text-xs">
                          75 Gifted Subs
                        </td>
                        <td className="text-primary text-xs">
                          Have a character created for you in upcoming game I
                          play
                        </td>
                      </tr>
                      <tr className="hover table-xs text-xs">
                        <td className="text-secondary text-xs">
                          50 Gifted Subs
                        </td>
                        <td className="text-primary text-xs">
                          Get username on a balloon in background until Subathon
                          ends
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
