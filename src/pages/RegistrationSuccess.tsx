import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const RegistrationSuccessPage = () => {
  const [qrCode, setQrCode] = useState("");
  const location = useLocation();

  useEffect(() => {
    const generateQrCode = async () => {
      const searchParams = new URLSearchParams(location.search);
      const userId = searchParams.get("id");

      if (userId) {
        const { data: attendee, error } = await supabase
          .from("attendees")
          .select("*")
          .eq("id", userId)
          .single();

        if (attendee) {
          const qrCodeUrl = await QRCode.toDataURL(
            `${window.location.origin}/retrieve-qr/${attendee.id}`
          );
          setQrCode(qrCodeUrl);
        } else {
          const { data: exhibitor } = await supabase
            .from("exhibitors")
            .select("*")
            .eq("id", userId)
            .single();

          if (exhibitor) {
            const qrCodeUrl = await QRCode.toDataURL(
              `${window.location.origin}/retrieve-qr/${exhibitor.id}`
            );
            setQrCode(qrCodeUrl);
          }
        }
      }
    };
    generateQrCode();
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {qrCode ? (
          <div>
            <h2 className="text-2xl font-bold">Registration Confirmed!</h2>
            <p className="mt-2">
              Please save this QR code for check-in at the event.
            </p>
            <img src={qrCode} alt="QR Code" className="mx-auto mt-4" />
          </div>
        ) : (
          <p>Generating your QR code...</p>
        )}
        <Button onClick={() => (window.location.href = "/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default RegistrationSuccessPage;
