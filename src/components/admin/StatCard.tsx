import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color?: 'navy' | 'gold' | 'green' | 'red' | 'blue';
}

const colorClasses = {
  navy: 'bg-[#0a192f] text-white',
  gold: 'bg-[#c9a227] text-[#0a192f]',
  green: 'bg-green-600 text-white',
  red: 'bg-red-600 text-white',
  blue: 'bg-blue-600 text-white',
};

export function StatCard({ title, value, icon, color = 'navy' }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
