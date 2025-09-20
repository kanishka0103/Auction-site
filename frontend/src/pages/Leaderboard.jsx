import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../custom-components/Spinner";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user) || {};
  const safeLeaderboard = leaderboard || [];

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
      {loading ? (
        <Spinner />
      ) : safeLeaderboard.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-xl">
          No bidders to show.
        </p>
      ) : (
        <>
          <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mb-5">
            <h1 className="text-[#D6482B] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Bidders Leaderboard
            </h1>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border my-5 border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">#</th>
                  <th className="py-2 px-4 text-left">Profile Pic</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Bid Expenditure</th>
                  <th className="py-2 px-4 text-left">Auctions Won</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {safeLeaderboard.slice(0, 100).map((element, index) => (
                  <tr key={element._id} className="border-b border-gray-300">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="flex gap-2 items-center py-2 px-4">
                      <img
                        src={element.profileImage?.url || "/default-avatar.png"}
                        alt={element.userName}
                        className="h-12 w-12 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-2 px-4">{element.userName}</td>
                    <td className="py-2 px-4">{element.moneySpent}</td>
                    <td className="py-2 px-4">{element.auctionsWon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
};

export default Leaderboard;
