/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Snowflake, Flame, Wind, Eye, Sparkles } from 'lucide-react';

export default function CoolingSimulator() {
  const [tempCelsius, setTempCelsius] = useState<number>(36.5);
  const [mentholLevel, setMentholLevel] = useState<number>(50); // 0 - 100
  const [lavenderLevel, setLavenderLevel] = useState<number>(60); // 0 - 100
  const [isActive, setIsActive] = useState<boolean>(false);
  const [simulationState, setSimulationState] = useState<'idle' | 'evaporating' | 'refreshing' | 'soothing'>('idle');

  // Interactive temperature drops when active
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      setSimulationState('evaporating');
      interval = setInterval(() => {
        setTempCelsius((prev) => {
          const target = 36.5 - (mentholLevel / 12); // Maximum drop of ~8 degrees based on menthol concentration
          if (prev > target + 0.1) {
            return parseFloat((prev - 0.2).toFixed(1));
          } else {
            setSimulationState('soothing');
            return parseFloat(target.toFixed(1));
          }
        });
      }, 50);
    } else {
      setSimulationState('idle');
      interval = setInterval(() => {
        setTempCelsius((prev) => {
          if (prev < 36.5) {
            return parseFloat((prev + 0.1).toFixed(1));
          } else {
            clearInterval(interval);
            return 36.5;
          }
        });
      }, 80);
    }

    return () => clearInterval(interval);
  }, [isActive, mentholLevel]);

  // Determine current ambient color based on simulated state and temperature
  const getSimulatedColor = () => {
    if (!isActive) return 'from-amber-50 to-orange-50/50 border-orange-200/50';
    if (simulationState === 'evaporating') return 'from-mint-cooling/10 to-blue-50/50 border-mint-cooling/30';
    return 'from-purple-50/40 to-mint-cooling/10 border-purple-200/40';
  };

  const getTemperatureDescription = () => {
    if (tempCelsius >= 36) return '일반 체온 (Normal Body Temp)';
    if (tempCelsius >= 32) return '약한 쿨링 (Gentle Relieving)';
    if (tempCelsius >= 28) return '쾌적하고 상쾌한 냉각 (Optimal Cooling)';
    return '집중 자극 완화 상태 (Deep Cooling Ice Effect)';
  };

  return (
    <div className="bg-clinical-white border border-surface-dim rounded-2xl p-6 md:p-8" id="cooling-simulator-widget">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-mint-cooling/10 rounded-lg flex items-center justify-center text-mint-cooling animate-pulse">
          <Snowflake className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-sans text-lg font-semibold text-deep-navy">자가 냉각 및 아로마 테라피 시뮬레이터</h3>
          <p className="text-xs text-on-surface-variant font-mono font-medium">Experience the non-pharmacological soothing relief mechanism.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Gauge Monitor Panel */}
        <div className={`lg:col-span-6 bg-gradient-to-br ${getSimulatedColor()} rounded-3xl p-6 border-2 transition-all duration-700 flex flex-col justify-between align-middle min-h-[300px] relative overflow-hidden`}>
          
          {/* Active Sim Particle overlay */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-mint-cooling animate-ping"></div>
              <div className="absolute top-1/2 left-2/3 w-3.5 h-3.5 rounded-full bg-purple-300 animate-pulse delay-500"></div>
              <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-mint-cooling animate-bounce delay-200"></div>
              <div className="absolute top-[80%] left-[80%] w-2.5 h-2.5 rounded-full bg-blue-300 animate-ping delay-700"></div>
            </div>
          )}

          <div className="flex justify-between items-center z-10">
            <span className="text-xs font-mono font-semibold tracking-wide uppercase text-deep-navy/80 bg-clinical-white px-2.5 py-1 rounded-full border border-surface-dim shadow-xs">
              METER STATE: <span className="text-mint-cooling font-bold">{simulationState.toUpperCase()}</span>
            </span>
            <div className="flex gap-1">
              <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-mint-cooling animate-ping' : 'bg-amber-400'}`}></span>
            </div>
          </div>

          {/* Large Temperature Display */}
          <div className="text-center my-6 z-10 transition-all duration-300">
            <div className={`text-6xl md:text-7xl font-mono font-extrabold tracking-tight select-none ${isActive ? 'text-mint-cooling' : 'text-deep-navy'}`}>
              {tempCelsius}°C
            </div>
            <div className="text-xs font-semibold text-deep-navy/70 mt-2 font-mono">
              {getTemperatureDescription()}
            </div>
          </div>

          {/* Active Bar gauges */}
          <div className="space-y-2.5 z-10">
            {/* Menthol representation */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] font-sans font-semibold text-deep-navy">
                <span>멘톨 상쾌함 방출량 (Menthol Active)</span>
                <span className="font-mono">{isActive ? `${mentholLevel}%` : '0%'}</span>
              </div>
              <div className="w-full bg-surface-dim/40 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-mint-cooling h-full transition-all duration-500"
                  style={{ width: isActive ? `${mentholLevel}%` : '0%' }}
                ></div>
              </div>
            </div>

            {/* Lavender representation */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] font-sans font-semibold text-deep-navy">
                <span>라벤더 은은한 향 방출량 (Lavender Aroma)</span>
                <span className="font-mono">{isActive ? `${lavenderLevel}%` : '0%'}</span>
              </div>
              <div className="w-full bg-surface-dim/40 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-purple-400 h-full transition-all duration-500"
                  style={{ width: isActive ? `${lavenderLevel}%` : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Interface Panel */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="bg-clinical-white border border-surface-dim/70 p-5 rounded-2xl">
            <h4 className="text-sm font-bold text-deep-navy mb-4 flex items-center gap-1.5 font-sans">
              <Wind className="w-4.5 h-4.5 text-mint-cooling" /> 성분 방출 강도 자가 제어 (Components Strength)
            </h4>

            {/* Menthol Slider */}
            <div className="mb-4">
              <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium mb-1.5">
                <span className="font-sans">천연 멘톨 향 (Menthol cooling element)</span>
                <span className="font-mono font-semibold text-mint-cooling">{mentholLevel} mg/L</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={mentholLevel} 
                onChange={(e) => setMentholLevel(parseInt(e.target.value))}
                className="w-full h-1 bg-surface-gray rounded-lg appearance-none cursor-pointer accent-mint-cooling outline-hidden"
              />
            </div>

            {/* Lavender Slider */}
            <div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium mb-1.5">
                <span className="font-sans">천연 라벤더 아로마오일 (Lavender aromatic essence)</span>
                <span className="font-mono font-semibold text-purple-400">{lavenderLevel} ppm</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="100" 
                value={lavenderLevel} 
                onChange={(e) => setLavenderLevel(parseInt(e.target.value))}
                className="w-full h-1 bg-surface-gray rounded-lg appearance-none cursor-pointer accent-purple-400 outline-hidden"
              />
            </div>
          </div>

          <button 
            onClick={() => setIsActive(!isActive)}
            className={`cursor-pointer py-4 px-6 rounded-2xl font-bold font-sans text-sm tracking-wide text-center flex items-center justify-center gap-2.5 transition-all outline-hidden ${
              isActive 
                ? 'bg-deep-navy text-clinical-white border-deep-navy active:scale-98 shadow-md' 
                : 'bg-mint-cooling text-clinical-white hover:opacity-95 shadow-md shadow-mint-cooling/20 animate-pulse'
            }`}
          >
            {isActive ? (
              <>
                <Flame className="w-4.5 h-4.5 text-amber-300 shrink-0" />
                <span>시뮬레이션 초기화 (Body Temp Reset)</span>
              </>
            ) : (
              <>
                <Snowflake className="w-4.5 h-4.5 text-clinical-white shrink-0" />
                <span>폴라랩 스마트 쿨링 활성화 (Apply Cold Simulation)</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-on-surface-variant leading-relaxed text-center px-4">
            <span className="font-semibold text-deep-navy font-sans">비약리성 원리 설명:</span> 도포된 멘톨과 라벤더 활성 액체 포뮬러가 공기와 접촉하여 천천히 증발하면서 피부 접촉면에 즉각적이고 영양성 높은 기화 열손실을 촉진하여 통증 완화를 도와줍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
