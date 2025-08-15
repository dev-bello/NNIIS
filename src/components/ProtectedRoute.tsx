import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

export default ProtectedRoute;
