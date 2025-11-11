import React from "react";
import { CookingPotIcon, ScrollText, TicketCheck } from "lucide-react";
const CountCard = ({ theData, cooking, cooked }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto py-10">
      {/* Card1 */}
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{theData.length}</h2>
          </div>
        </div>
      </div>

      {/* Card2 */}
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPotIcon
            className="animate-pulse"
            color="#fcb700"
            size={100}
          />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cooking.length}</h2>
          </div>
        </div>
      </div>

      {/* Card3 */}
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready To Serve
            <h2 className="text-6xl font-bold">{cooked.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
