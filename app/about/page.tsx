import Layout from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout className="py-12 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-slate-100">
          About GamestatsDB
        </h1>
        <div className="space-y-4 text-slate-300">
          <p>
            Welcome to GamestatsDB, your premier destination for comprehensive
            Steam game statistics and player trends.
          </p>
          <p>
            Our mission is to provide gamers, developers, and industry analysts
            with accurate, up-to-date insights into the gaming landscape.
            Whether you are tracking the rise of a new indie darling or
            monitoring the enduring popularity of classic titles, our platform
            offers the tools you need.
          </p>
          <p>
            We believe that data driven insights can help everyone understand
            the evolving gaming ecosystem better.
          </p>
        </div>
      </div>
    </Layout>
  );
}
