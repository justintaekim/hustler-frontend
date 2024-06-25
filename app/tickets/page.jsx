import React from "react";
import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      {/* creates a suspense for the bottom elements so the top renders immediately but this doesnt */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
