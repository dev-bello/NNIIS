import React, { useEffect } from "react";

const NorthernNigeriaSection = () => {
  useEffect(() => {
    const handleResize = () => {
      if (
        window.simplemaps_countrymap_mapdata &&
        typeof window.simplemaps_countrymap === "function"
      ) {
        const mapDiv = document.getElementById("map");
        if (mapDiv) {
          mapDiv.innerHTML = "";
        }
        window.simplemaps_countrymap_mapdata.main_settings.popups = "on_click";
        window.simplemaps_countrymap();
      }
    };

    const loadMap = () => {
      if (
        window.simplemaps_countrymap_mapdata &&
        typeof window.simplemaps_countrymap === "function"
      ) {
        window.simplemaps_countrymap_mapdata.main_settings.popups = "on_click";
        window.simplemaps_countrymap();
      }
    };

    const mapDataScript = document.createElement("script");
    mapDataScript.src = "/map/mapdata.js";
    mapDataScript.async = true;
    document.head.appendChild(mapDataScript);

    const countryMapScript = document.createElement("script");
    countryMapScript.src = "/map/countrymap.js";
    countryMapScript.async = true;
    countryMapScript.onload = loadMap;
    document.head.appendChild(countryMapScript);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Simplemaps library doesn't have a destroy method, so we clear the div
      const mapDiv = document.getElementById("map");
      if (mapDiv) {
        mapDiv.innerHTML = "";
      }
      // Remove scripts to avoid duplicates on re-mount (e.g., with React's StrictMode)
      const scripts = document.querySelectorAll(
        'script[src*="/map/mapdata.js"], script[src*="/map/countrymap.js"]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Investment Opportunities in Northern Nigeria
          </h2>
          <p className="mt-5 text-lg font-normal text-gray-600 sm:text-xl font-pj">
            Explore the vast potential for investment across various sectors in
            Northern Nigeria.{" "}
            <span className="font-semibold text-sm/6 text-[#d4d4d4] sm:hidden">
              Double tap to view
            </span>
          </p>
        </div>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <div id="map"></div>
          <div className="text-center mt-4">
            <a
              href="https://ngfrepository.org.ng:8443/jspui/handle/123456789/6516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Credit: Nigeria Governors Forum Investopedia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NorthernNigeriaSection;
