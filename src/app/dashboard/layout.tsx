"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken, logoutUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push("/login");
  }
 
 function handleRefresh() {
  router.refresh(); 
}

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-blue-500 p-10">
      
      {/* HEADER ACTION BUTTONS */}
      <div className="flex justify-end space-x-3 mb-6">
        {/* Remove or replace if you do not have fetchPositions */}
        <Button variant="outline" onClick={handleRefresh}>
          Refresh
        </Button>

        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {children}
    </div>
  );
}