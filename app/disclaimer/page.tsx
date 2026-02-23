import Layout from "@/components/layout/Layout";

export default function DisclaimerPage() {
  return (
    <Layout className="py-12 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-slate-100">Disclaimer</h1>
        <div className="space-y-4 text-slate-300">
          <p>
            GamestatsDB is a community-driven project and is{" "}
            <strong className="font-semibold text-slate-200">
              not affiliated with, associated with, authorized by, endorsed by,
              or in any way officially connected with Valve Corporation, Steam
            </strong>
            , or any of its subsidiaries or its affiliates.
          </p>
          <p>
            The official Steam website can be found at{" "}
            <a
              href="https://store.steampowered.com"
              className="text-blue-400 hover:underline"
            >
              store.steampowered.com
            </a>
            .
          </p>
          <p>
            The names Steam, Valve, as well as related names, marks, emblems and
            images are registered trademarks of their respective owners.
          </p>
          <p>
            The data presented on this website is gathered through public APIs
            and is provided &quot;as is&quot; for informational purposes only.
            We make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability
            or availability of the data. Every effort is made to keep the
            website up and running smoothly. However, GamestatsDB takes no
            responsibility for, and will not be liable for, the website being
            temporarily unavailable due to technical issues beyond our control.
          </p>
        </div>
      </div>
    </Layout>
  );
}
