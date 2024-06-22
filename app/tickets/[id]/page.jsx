import { notFound } from "next/navigation";

// tells Next.js to return 404 if not exists, true is default
export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

// responsible for fetching
async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60, // exceed 60 sec then will fetch again
    },
  });

  if (!res.ok) {
    notFound;
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
