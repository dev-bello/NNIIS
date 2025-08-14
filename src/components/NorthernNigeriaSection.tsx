import React, { useEffect } from "react";

const NorthernNigeriaSection = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.simplemaps_countrymap_mapdata) {
        window.simplemaps_countrymap_mapdata.main_settings.popups =
          window.innerWidth < 768 ? "onClick" : "onHover";
        if (typeof window.simplemaps_countrymap === "function") {
          window.simplemaps_countrymap();
        }
      }
    };

    const loadMap = () => {
      if (
        window.simplemaps_countrymap_mapdata &&
        typeof window.simplemaps_countrymap === "function"
      ) {
        handleResize();
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
      document.head.removeChild(mapDataScript);
      document.head.removeChild(countryMapScript);
      window.removeEventListener("resize", handleResize);
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
            Northern Nigeria.
          </p>
        </div>

        <div className="relative mt-12">
          <div id="map"></div>
        </div>
      </div>
    </section>
  );
};

export default NorthernNigeriaSection;
