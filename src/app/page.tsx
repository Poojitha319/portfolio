import About from "@/components/v4/about";
import Contact from "@/components/v4/contact";
import Footer from "@/components/v4/footer";
import Hackathons from "@/components/v4/hackathons";
import Hero from "@/components/v4/hero";
import Jobs from "@/components/v4/jobs";
import Nav from "@/components/v4/nav";
import SideRails from "@/components/v4/side-rails";
import Work from "@/components/v4/work";
import Writing from "@/components/v4/writing";

export default function Page() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <SideRails />
      <main id="content" className="mx-auto w-full max-w-[1600px] px-6 sm:px-12 md:px-24 lg:px-[150px]">
        <Hero />
        <About />
        <Jobs />
        <Work />
        <Hackathons />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
