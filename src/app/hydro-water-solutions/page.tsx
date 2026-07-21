"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HydroWaterSolutionsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/borehole-drilling');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-secondary-600">Redirecting to Borehole Drilling services...</p>
    </div>
  );
}