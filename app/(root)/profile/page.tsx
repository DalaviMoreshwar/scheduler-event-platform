import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      {/* My tickets */}
      <section className="bg-primary-50 bg-dotter-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={[]}
          emptyTitle="No events purchased yet."
          emptyStateSubtext="No worries - plenty of excitung events to explore."
          collectionType="My_Tickets"
          limit={10}
          page={1}
          urlParamName="orderPage"
          totalPages={2}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotter-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={[]}
          emptyTitle="No events organized yet."
          emptyStateSubtext="No worries - you can create new events."
          collectionType="Event_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
