'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/cn';
import { FileText, Upload, CheckCircle } from 'lucide-react';

interface UploadZoneProps {
  onUpload: (file: File) => void;
  isUploading: boolean;
  isSuccess: boolean;
  fileName?: string;
  issueCount?: number;
}

export function UploadZone({ onUpload, isUploading, isSuccess, fileName, issueCount }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  };

  if (isSuccess) {
    return (
      <div className="p-8 border-2 border-teal-500 bg-teal-50/50 rounded-2xl flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
        <CheckCircle className="w-12 h-12 text-teal-600 mb-4" />
        <h4 className="text-lg font-bold text-teal-900 font-syne">{fileName || 'Resume uploaded'}</h4>
        <p className="text-sm text-teal-700/70 mt-1">
          AI analysis complete — {issueCount || 0} issues found
        </p>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "relative p-10 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group hover:border-primary hover:bg-slate-50",
        isUploading && "pointer-events-none opacity-60"
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={inputRef} 
        className="hidden" 
        accept=".pdf,.docx" 
        onChange={handleFileChange} 
      />
      
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <FileText className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
      </div>
      
      <h4 className="text-lg font-bold text-slate-900 font-syne">Drop PDF or DOCX here</h4>
      <p className="text-sm text-slate-500 mt-1">or click to browse files</p>
      
      <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1.5 rounded-full border border-slate-100 italic">
        <Upload className="w-3 h-3" /> Max size 5MB
      </div>

      {isUploading && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold text-primary font-syne uppercase">Analysing...</span>
          </div>
        </div>
      )}
    </div>
  );
}
