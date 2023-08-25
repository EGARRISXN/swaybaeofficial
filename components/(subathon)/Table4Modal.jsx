"use client";
import { useState } from "react";

export default function Table4Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto my-1 border-[6px] border-base-content bg-white text-black font-bold shadow-lg rounded-br-2xl hover:bg-warning shadow-purple-800/50">
      <button
        onClick={toggleModal}
        className="btn-lg hover:text-primary hover:font-semibold"
      >
        Games To Chose From
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center z-50">
          <div
            className="modal-overlay absolute inset-0 bg-gray-800 bg-opacity-25"
            onClick={closeModal}
          ></div>

          <div className="modal-container-slide md:model-container-full lg:modal-container-full rounded-lg shadow-lg z-50">
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
                      <tr className=" table-sm bg-base-content">
                        <th className="text-lg rounded-l-xl text-base-200">
                          Solo Games
                        </th>
                        <th className="text-lg text-base-200">
                          Community Games
                        </th>
                        <th className="text-lg rounded-r-xl text-base-200">
                          Co-Op Games
                        </th>
                      </tr>
                    </thead>
                    <tbody className="body">
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Hearthstone</td>
                        <td className="text-primary text-xs">Chef Squad</td>
                        <td className="text-secondary text-xs">Bread & Fred</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Stray</td>
                        <td className="text-primary text-xs">Fall Guys</td>
                        <td className="text-secondary text-xs">
                          7 Days to Die
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Animal Shelter
                        </td>
                        <td className="text-primary text-xs">Gang Beasts</td>
                        <td className="text-secondary text-xs">Apex Legends</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Cook, Serve, Delicious! 3?!
                        </td>
                        <td className="text-primary text-xs">
                          Jackbox Party Packs
                        </td>
                        <td className="text-secondary text-xs">
                          Dead By Daylight
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Hooked on you: A Dead By Daylight Dating Sim
                        </td>
                        <td className="text-primary text-xs">
                          Hearthstone Private Lobbies
                        </td>
                        <td className="text-secondary text-xs">It Takes Two</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">I Am Fish</td>
                        <td className="text-primary text-xs">Skribbl.io</td>
                        <td className="text-secondary text-xs">
                          Keep Talking and Nobody Explodes
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          The Last Campfire
                        </td>
                        <td className="text-primary text-xs">Super Smash</td>
                        <td className="text-secondary text-xs">
                          Sons of the Forest
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Kindergarten</td>
                        <td></td>
                        <td className="text-secondary text-xs">A Way Out</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Kindergarten 2
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Only Up</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          The Oregon Trail
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Planet Zoo</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">PlateUp!</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">The Quarry</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">The Sims 4</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Subnautica</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Diablo 4</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          The Henry Stickmin Collection
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Venba</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Animal Crossing
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">Zelda BOTW</td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Zelda Links Awakening
                        </td>
                      </tr>
                      <tr className="hover table-xs">
                        <td className="text-secondary text-xs">
                          Luigis Mansion
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
