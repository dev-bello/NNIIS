import Header from "@/components/Header";
import { useParams, Link } from "react-router-dom";
import { STATES_DATA, StateData } from "@/data/states";

const StateDetailPage = () => {
  const params = useParams();
  const slug = (params.slug || "").toLowerCase();

  const data: StateData | undefined = STATES_DATA[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              State Not Found
            </h1>
            <p className="mt-4 text-gray-600">
              The requested state could not be found.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header strip */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-start gap-6 p-6 sm:p-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {data.name}
              </h1>
              <p className="mt-2 uppercase text-sm text-gray-500">
                {data.tagline}
              </p>
              <p className="mt-4 rounded-lg bg-emerald-100 p-2 text-left border border-emerald-200 text-gray-700 leading-relaxed max-w-3xl">
                {data.description}
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="w-40 h-28 rounded-lg bg-emerald-100 border border-emerald-200" />
            </div>
          </div>

          {/* Two column body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* By the numbers */}
            <section>
              <h2 className="text-sm font-semibold text-emerald-700 tracking-wider">
                BY THE NUMBERS
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.numbers.map((n, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <div className="mt-1 h-8 w-8 rounded-md bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">
                        {n.value}
                      </div>
                      <div className="text-xs text-gray-500">{n.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top opportunities and facts */}
            <section>
              <h2 className="text-sm font-semibold text-emerald-700 tracking-wider">
                TOP FIVE OPPORTUNITIES
              </h2>
              <div className="mt-4 space-y-3">
                {data.opportunities.map((op, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-md bg-emerald-600/10 text-emerald-800 px-3 py-2">
                      {op}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-lg border border-gray-100">
                <table className="min-w-full divide-y divide-gray-100 text-sm">
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="p-3 text-gray-600">Climate</td>
                      <td className="p-3 font-medium text-gray-900">
                        {data.climate}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">Airport</td>
                      <td className="p-3 font-medium text-gray-900">
                        {data.airport}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">Port</td>
                      <td className="p-3 font-medium text-gray-900">
                        {data.port}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">
                        Special Economic Zones
                      </td>
                      <td className="p-3 font-medium text-gray-900">
                        {data.sez}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom two-column lists */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-emerald-700 tracking-wider">
              KEY POLICY INITIATIVES
            </h3>
            <ul className="mt-4 space-y-3">
              {data.initiatives.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-emerald-700 tracking-wider">
              COMPETITIVE ADVANTAGES
            </h3>
            <ul className="mt-4 space-y-3">
              {data.advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default StateDetailPage;
