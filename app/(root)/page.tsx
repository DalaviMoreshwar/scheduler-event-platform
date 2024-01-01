import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justfiy-center gap-8">
            <h1 className="h1-bold">
              Unite, delight, memories: with{" "}
              <span className="text-primary-500">Scheduler</span>, events done
              right!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Learn from the best, network with the brightest, and take your
              career to the next level – all within our vibrant global
              community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore here</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[80vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br />
          Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Categories
        </div>
      </section>
    </>
  );
}
