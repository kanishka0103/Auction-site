import Card from "../../custom-components/Card";
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../custom-components/Spinner"; // agar loading show karna hai

const FeaturedAuctions = () => {
  const { loading, allAuctions } = useSelector((state) => state.auction);

  return (
    <section className="my-8">
      <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
        Featured Auctions
      </h3>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-6">
          {allAuctions?.slice(0, 8).map((element) => (
            <Card
              title={element.title}
              imgSrc={element.image?.url}
              startTime={element.startTime}
              endTime={element.endTime}
              startingBid={element.startingBid}
              id={element._id}
              key={element._id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedAuctions;
