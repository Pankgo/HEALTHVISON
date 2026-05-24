import React from 'react';
import { Flame, Target } from 'lucide-react';

const MainDashboard: React.FC = () => {
  return (
    <div className="app-page">
      <main className="page-shell page-stack">
        <section className="page-title">
          <p className="page-eyebrow">Welcome back, Junseo</p>
          <h2 className="page-heading brand-gradient-text">
            Vision AI <br />
            Health Summary
          </h2>
        </section>

        <section className="card-container summary-card">
          <div className="card-glow" />
          <div className="card-content summary-card">
            <div className="card-row">
              <div className="icon-badge">
                <Flame size={20} />
              </div>
              <span className="card-eyebrow">Calories Today</span>
            </div>

            <div className="metric-main">
              <strong>1,450</strong>
              <span>/ 2,200 kcal</span>
            </div>

            <div className="progress-group">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '66%' }} />
              </div>
              <p className="progress-note">
                You have <span className="brand-text">750 kcal</span> remaining for the day.
              </p>
            </div>
          </div>
        </section>

        <section className="card-container insight-card">
          <div className="card-row">
            <div className="icon-badge">
              <Target size={18} />
            </div>
            <h3 className="insight-title">AI Health Insight</h3>
          </div>

          <p className="inline-card">
            <span className="brand-text">Tip:</span> Based on your inbody data, increasing your protein intake by <strong>15g</strong> today will optimize muscle recovery after your next workout.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MainDashboard;
