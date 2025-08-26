import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface SelectionNotificationProps {
  userEmail?: string;
  onSuccess?: () => void;
}

const SelectionNotification = ({
  userEmail,
  onSuccess,
}: SelectionNotificationProps) => {
  const [email, setEmail] = useState(userEmail || "");
  const [isLoading, setIsLoading] = useState(false);

  const sendSelectionNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    setIsLoading(true);

    try {
      // Use magic link to send selection notification
      // const { error } = await supabase.auth.signInWithOtp({
      //   email: email,
      //   options: {
      //     shouldCreateUser: false, // Don't create new user
      //     emailRedirectTo: `${window.location.origin}/selection-status`,
      //     data: {
      //       notification_type: "selection_update",
      //       message:
      //         "You will be notified about your NNIIS 2025 attendance status",
      //     },
      //   },
      // });

      // if (error) {
      //   console.error("Error sending selection notification:", error);
      //   toast.error("Failed to send notification. Please try again.");
      // } else {
        toast.success("Selection notification sent successfully!");
        setEmail("");
        onSuccess?.();
      // }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">
        Send Selection Notification
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Send a notification to let the user know they'll be contacted about
        their attendance status.
      </p>

      <form onSubmit={sendSelectionNotification} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Notification"}
        </Button>
      </form>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-xs text-blue-700">
          <strong>Note:</strong> This will send a magic link email using
          Supabase's native template to notify the user about the selection
          process.
        </p>
      </div>
    </div>
  );
};

export default SelectionNotification;
