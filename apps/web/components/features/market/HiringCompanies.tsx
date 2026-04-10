'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Building2, ExternalLink } from 'lucide-react';

interface HiringCompany {
  name: string;
  openingsCount: number;
  roleLabel: string;
  logo?: string;
}

interface HiringCompaniesProps {
  companies: HiringCompany[];
}

export function HiringCompanies({ companies }: HiringCompaniesProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="w-5 h-5 text-teal-600" />
        <h4 className="text-sm font-bold text-slate-900 font-syne uppercase tracking-wider">Top hiring companies</h4>
      </div>

      <div className="space-y-3">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-white transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center font-bold text-slate-400 group-hover:text-teal-600 transition-colors">
                {company.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{company.name}</div>
                <div className="text-[10px] font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                  <Briefcase className="w-2.5 h-2.5" /> {company.openingsCount} {company.roleLabel} openings
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 px-4 rounded-full font-syne text-[10px] border-slate-200 hover:border-teal-600 hover:text-teal-600 group-hover:bg-teal-50">
              View jobs <ExternalLink className="w-3 h-3 ml-1.5" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
