import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  ChevronRight,
  ArrowLeft,
  Activity,
  Target,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const goals = [
  { id: 'diet', label: '체중 감량 & 식단 관리', icon: <Sparkles size={18} /> },
  { id: 'muscle', label: '근비대 & 스트렝스 증진', icon: <Target size={18} /> },
  { id: 'health', label: '건강 유지 & 체력 관리', icon: <Activity size={18} /> },
];

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ goal: '' });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="signup-page">
      <main className="signup-shell">
        {step < 5 && (
          <div className="signup-progress" aria-label={`가입 진행률 ${step}/4`}>
            <div className="signup-progress-bar" style={{ width: `${(step / 4) * 100}%` }} />
          </div>
        )}

        {step === 1 && (
          <section className="signup-step">
            <header className="signup-header">
              <h2 className="signup-title">
                Vision AI와 함께<br />변화를 시작하세요
              </h2>
              <p className="signup-copy">서비스 이용을 위한 기본 정보를 입력해주세요.</p>
            </header>

            <div className="field-stack">
              <label className="input-shell">
                <Mail size={20} />
                <input type="email" placeholder="이메일 주소" className="text-input" />
              </label>
              <label className="input-shell">
                <Lock size={20} />
                <input type="password" placeholder="비밀번호" className="text-input" />
              </label>
            </div>

            <button onClick={nextStep} className="primary-button">
              <span>계정 생성하기</span>
              <ChevronRight size={18} />
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="signup-step">
            <button onClick={prevStep} className="back-button">
              <ArrowLeft size={16} /> 뒤로가기
            </button>

            <header className="signup-header">
              <h2 className="signup-title">
                정확한 분석을 위해<br />신체 지표를 알려주세요
              </h2>
            </header>

            <div className="biometric-grid">
              <label className="number-card">
                <span className="mini-label">Age</span>
                <input type="number" placeholder="25" className="number-input" />
              </label>
              <label className="number-card">
                <span className="mini-label">Height (cm)</span>
                <input type="number" placeholder="178" className="number-input" />
              </label>
            </div>

            <button onClick={nextStep} className="primary-button">다음 단계로</button>
          </section>
        )}

        {step === 3 && (
          <section className="signup-step">
            <button onClick={prevStep} className="back-button">
              <ArrowLeft size={16} /> 뒤로가기
            </button>

            <header className="signup-header">
              <h2 className="signup-title">
                InBody API<br />클라우드 동기화
              </h2>
              <p className="signup-copy">
                수동 입력 없이 인바디 데이터를 불러올 수 있습니다.<br />
                정밀한 Vision AI 리포트를 위해 추천합니다.
              </p>
            </header>

            <div className="sync-panel">
              <div className="card-glow" />
              <div className="sync-icon">
                <Activity size={32} />
              </div>
              <h4>인바디 클라우드 연결</h4>
              <p>전국 인바디 측정 장비에서 측정된 데이터를 자동으로 가져옵니다.</p>
              <button className="secondary-button" onClick={nextStep}>연결하기</button>
            </div>

            <button onClick={nextStep} className="link-button">나중에 연동할게요</button>
          </section>
        )}

        {step === 4 && (
          <section className="signup-step">
            <header className="signup-header">
              <h2 className="signup-title">
                어떤 목표를<br />가지고 계신가요?
              </h2>
            </header>

            <div className="goal-list">
              {goals.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFormData({ goal: item.id })}
                  className={`goal-card ${formData.goal === item.id ? 'selected' : ''}`}
                >
                  <span className="goal-copy">
                    <span className="goal-icon">{item.icon}</span>
                    <span className="goal-label">{item.label}</span>
                  </span>
                  {formData.goal === item.id && <CheckCircle2 size={20} className="brand-text" />}
                </button>
              ))}
            </div>

            <button onClick={nextStep} disabled={!formData.goal} className="primary-button">가입 완료</button>
          </section>
        )}

        {step === 5 && (
          <section className="success-step">
            <div className="success-icon">
              <CheckCircle2 size={48} />
            </div>
            <div>
              <h2>환영합니다!</h2>
              <p>
                Junseo님의 인바디 데이터 분석을 기반으로<br />최적의 건강 가이드를 생성했습니다.
              </p>
            </div>
            <button className="primary-button" onClick={() => navigate('/')}>대시보드 시작하기</button>
          </section>
        )}
      </main>
    </div>
  );
};

export default SignUp;
