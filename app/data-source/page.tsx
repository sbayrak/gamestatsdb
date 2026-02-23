import Layout from "@/components/layout/Layout";

export default function DataSourcePage() {
  return (
    <Layout className="py-12 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-slate-100">Data Source</h1>
        <div className="space-y-4 text-slate-300">
          <p>
            All the statistics, player counts, and game information displayed on
            GamestatsDB are sourced directly from the{" "}
            <strong className="font-semibold text-slate-200">
              Steam Web API
            </strong>{" "}
            and public data available on the Steam platform.
          </p>
          <p>
            We query these endpoints periodically to provide you with the most
            up-to-date and accurate representation of gaming trends, player
            engagement, and top sellers.
          </p>
          <p>
            Because we rely on third-party APIs, occasional discrepancies or
            delays in data updates may occur if the upstream services experience
            downtime or rate limiting. We do our best to ensure the integrity
            and freshness of the data presented here.
          </p>
        </div>
      </div>
    </Layout>
  );
}
