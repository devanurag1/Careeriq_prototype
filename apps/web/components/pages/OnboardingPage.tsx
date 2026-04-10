'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboarding.store';
import { ONBOARDING_STEPS } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';

export function OnboardingPage() {
  const router = useRouter();
  const { currentStep, totalSteps, answers, nextStep, prevStep, setAnswer, reset } = useOnboardingStore();

  const step = ONBOARDING_STEPS[currentStep - 1];

  const handleFinish = () => {
    reset();
    router.push(ROUTES.DASHBOARD);
  };

  const toggleMulti = (field: 'fears' | 'skills', value: string) => {
    const current = answers[field] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setAnswer(field, updated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: 'var(--bg)' }}>
      <div className="w-full max-w-xl rounded-2xl p-10" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>

        {/* Progress bar */}
        <div className="flex gap-1.5 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`progress-seg ${i < currentStep ? 'done' : ''}`}
            />
          ))}
        </div>

        {/* Step label */}
        <div className="text-xs font-display font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--text3)' }}>
          Step {currentStep} of {totalSteps}
        </div>

        {/* Question */}
        <h2 className="font-display font-bold mb-2" style={{ fontSize: 24, letterSpacing: '-0.5px' }}>{step.q}</h2>
        <p className="text-sm mb-6" style={{ color: 'var(--text2)' }}>{step.hint}</p>

        {/* Single-select */}
        {step.type === 'single' && (
          <div className="flex flex-col gap-2.5 mb-7">
            {(step.options as { icon: string; label: string }[]).map((opt) => {
              const isSelected = answers[step.field] === opt.label;
              return (
                <div
                  key={opt.label}
                  className={`option-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => setAnswer(step.field as 'currentRole' | 'targetRole' | 'experienceYears', opt.label)}
                >
                  <span style={{ fontSize: 18 }}>{opt.icon}</span>
                  {opt.label}
                </div>
              );
            })}
          </div>
        )}

        {/* Multi-select */}
        {step.type === 'multi' && (
          <div className="flex flex-wrap gap-2 mb-7">
            {(step.options as string[]).map((opt) => {
              const selected = (answers[step.field] as string[]).includes(opt);
              return (
                <div
                  key={opt}
                  className={`multi-chip ${selected ? 'selected' : ''}`}
                  onClick={() => toggleMulti(step.field as 'fears' | 'skills', opt)}
                >
                  {opt}
                </div>
              );
            })}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              if (currentStep > 1) prevStep();
              else router.push(ROUTES.AUTH);
            }}
          >
            {currentStep > 1 ? '← Back' : 'Cancel'}
          </button>

          {currentStep < totalSteps ? (
            <button className="btn btn-primary" onClick={nextStep}>
              Next →
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleFinish}>
              🎯 See my results →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
