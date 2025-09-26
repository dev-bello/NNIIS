import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { saveSvgAsPng } from "save-svg-as-png";

import { useState } from "react";
import { Link } from "react-router-dom";

const DelegateDashboard = ({ user }: { user: any }) => {
  const [activeTab, setActiveTab] = useState("matchmaking");

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-delegate");
    if (svg) {
      saveSvgAsPng(svg, "NNIIS25-qr-code.png");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside
        className="w-full md:w-1/4 p-8 text-white"
        style={{ backgroundColor: "#0966C2" }}
      >
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img
              src="/images/NNIIS_Primary.png"
              alt="NNIIS 25"
              className="bg-white p-2 rounded-md"
            />
          </div>
          <h1 className="text-2xl font-bold">
            Hello,{" "}
            {user?.full_name?.split(" ") || user?.organization?.split(" ")}!
          </h1>
          <p className="text-center">
            Thank you for registering for{" "}
            <span className="font-semibold italic">#NNIIS25</span>
          </p>
          <span className="mt-2 bg-white text-[#0966C2] font-bold py-1 px-3 rounded-full text-sm">
            DELEGATE
          </span>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold">Your registration details</h2>
          <div className="mt-4 space-y-2">
            {user?.full_name && (
              <p>
                <span className="font-semibold">Full Name:</span>{" "}
                {user.full_name}
              </p>
            )}
            <p>
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user?.phone}
            </p>
            {user?.organization && (
              <p>
                <span className="font-semibold">Company:</span>{" "}
                {user.organization}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          {user?.email && (
            <QRCodeSVG
              id="qr-code-delegate"
              value={` NAME : ${user.name ? user.name : ""}  ORGANIZATION : ${
                user.organization ? user.organization : ""
              } 
STATUS : Registered as a Delegate for #NNIIS25 ✅`}
              size={130}
              bgColor="#FFFFFF"
              fgColor="#0966C2"
            />
          )}
          <Button
            variant="outline"
            className="mt-4 bg-white text-[#0966C2] hover:bg-gray-200"
            onClick={handleDownload}
          >
            Download QR Code
          </Button>
          <p className="mt-2 text-center text-sm">
            Present your code for verification on event day
          </p>
        </div>
      </aside>
      <main className="flex-1 p-4 md:p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0966C2]">Welcome Back!</h2>
          <p className="text-gray-600 mt-2">
            Here you can find exclusive content and networking opportunities.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex justify-around bg-white text-gray-800 rounded-lg p-2">
            <button
              onClick={() => setActiveTab("matchmaking")}
              className={`py-2 px-4 font-semibold rounded-lg ${
                activeTab === "matchmaking"
                  ? "bg-[#0966C2] text-white"
                  : "text-gray-500"
              }`}
            >
              Matchmaking
            </button>
            <button
              onClick={() => setActiveTab("masterclasses")}
              className={`py-2 px-4 font-semibold rounded-lg ${
                activeTab === "masterclasses"
                  ? "bg-[#0966C2] text-white"
                  : "text-gray-500"
              }`}
            >
              Masterclasses
            </button>
            <button
              onClick={() => setActiveTab("poe")}
              className={`py-2 px-4 font-semibold rounded-lg ${
                activeTab === "poe"
                  ? "bg-[#0966C2] text-white"
                  : "text-gray-500"
              }`}
            >
              POE
            </button>
          </div>
          <div className="mt-4 p-4 bg-white text-gray-800 rounded-lg">
            {activeTab === "matchmaking" && (
              <div>
                <h3 className="font-bold text-lg">Matchmaking</h3>
                <p>Connect with other delegates and businesses.</p>
                <Link to="/b2b" className="text-[#0966C2] hover:underline">
                  Go to B2B Page
                </Link>
              </div>
            )}
            {activeTab === "masterclasses" && (
              <div>
                <h3 className="font-bold text-lg">Masterclasses</h3>
                <p>View and register for masterclasses.</p>
              </div>
            )}
            {activeTab === "poe" && (
              <div>
                <h3 className="font-bold text-lg">POE</h3>
                <p>POE details will be available here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DelegateDashboard;
