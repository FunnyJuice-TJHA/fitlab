/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Ruler, Sparkles, CheckCircle, Info, ChevronRight } from 'lucide-react';
import { BodyPart, BodyPartMetadata } from '../types';

const BODY_PARTS_DATA: BodyPartMetadata[] = [
  {
    id: 'knee',
    name: '무릎',
    englishName: 'Knee Support',
    recommendedModel: 'Model 1 (대형)',
    sizeSpec: '10cm x 3m',
    wrappingTip: '무릎을 가볍게 약 15도 정도 구부린 상태에서, 슬개골(무릎뼈) 중앙부터 시작하여 위아래 방향으로 약 1/2에서 2/3씩 겹치며 나선형으로 탄탄하게 감아줍니다.'
  },
  {
    id: 'wrist',
    name: '손목',
    englishName: 'Wrist Support',
    recommendedModel: 'Model 2 (소형)',
    sizeSpec: '7.5cm x 3m',
    wrappingTip: '손목 관절의 가동 범위를 편안히 확보한 상태에서, 관절 뒤쪽부터 시작하여 3~4회 번갈아가며 회전시킵니다. 끝부분은 너무 움켜쥐지 않도록 적절한 압박만 유지하여 마무리합니다.'
  },
  {
    id: 'ankle',
    name: '발목',
    englishName: 'Ankle Support',
    recommendedModel: 'Model 2 (소형)',
    sizeSpec: '7.5cm x 3m',
    wrappingTip: '아킬레스건과 복사뼈를 안정적으로 정렬하기 위해, 뒤꿈치 뒤쪽을 편안히 고정하면서 발목과 발등을 8자 형태로 번갈아 감아 지지력을 끌어올립니다.'
  },
  {
    id: 'thigh',
    name: '허벅지',
    englishName: 'Thigh Support',
    recommendedModel: 'Model 1 (대형)',
    sizeSpec: '10cm x 3m',
    wrappingTip: '허벅지 근육군을 아래서 위 방향으로 천천히 끌어올리듯 겹치면서 감아 올립니다. 면적이 넓으므로 균일한 텐션을 전체적으로 분산하여 주는 것이 핵심입니다.'
  },
  {
    id: 'elbow',
    name: '팔꿈치',
    englishName: 'Elbow Support',
    recommendedModel: 'Model 2 (소형)',
    sizeSpec: '7.5cm x 3m',
    wrappingTip: '팔꿈치 관절을 약 30도 굽힌 채, 안쪽 인대 지점과 바깥쪽 근막 지점을 대각선 차례로 감싸 안으며 교차하듯이 감아 완벽한 밀착을 이끌어냅니다.'
  }
];

export default function SizingSelector() {
  const [selectedPart, setSelectedPart] = useState<BodyPart>('knee');
  const [wrapCount, setWrapCount] = useState<number>(2); // Estimated rolls

  const activePart = BODY_PARTS_DATA.find(p => p.id === selectedPart) || BODY_PARTS_DATA[0];

  return (
    <div className="bg-clinical-white border border-surface-dim rounded-2xl p-6 md:p-8" id="sizing-guide-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-mint-cooling/10 rounded-lg flex items-center justify-center text-mint-cooling">
          <Ruler className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-sans text-lg font-semibold text-deep-navy">맞춤형 부위별 밴드 셀렉터</h3>
          <p className="text-xs text-on-surface-variant font-mono">Select your recovery area to identify the ideal specifications.</p>
        </div>
      </div>

      {/* Body Part Selector Tabs */}
      <div className="grid grid-cols-5 gap-1.5 md:gap-2 mb-8">
        {BODY_PARTS_DATA.map((part) => (
          <button
            key={part.id}
            onClick={() => {
              setSelectedPart(part.id);
              // Set typical rolls estimation
              setWrapCount(['knee', 'thigh'].includes(part.id) ? 3 : 2);
            }}
            className={`py-3 px-1 rounded-xl text-xs md:text-sm font-semibold transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer border ${
              selectedPart === part.id
                ? 'bg-deep-navy text-clinical-white border-deep-navy shadow-sm'
                : 'bg-surface-gray text-on-surface-variant border-transparent hover:bg-surface-dim'
            }`}
          >
            <span className="font-sans">{part.name}</span>
            <span className="text-[10px] opacity-70 hidden md:inline font-mono uppercase">{part.id}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Recommended Spec Poster */}
        <div className="lg:col-span-5 bg-surface-gray rounded-2xl p-6 flex flex-col justify-between h-full border border-surface-dim/40 relative overflow-hidden">
          {/* Subtle Graphic background representation */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-mint-cooling/10 rounded-full blur-2xl"></div>
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-mint-cooling/10 text-mint-cooling text-[11px] font-semibold rounded-full mb-3 uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Recommended Spec
            </div>
            <h4 className="font-sans text-2xl font-bold text-deep-navy tracking-tight mb-1">{activePart.recommendedModel}</h4>
            <p className="text-sm font-mono text-on-surface-variant mb-6">{activePart.englishName}</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-surface-dim pb-2.5">
                <span className="text-xs text-on-surface-variant font-sans">추천 규격 (Size)</span>
                <span className="text-sm font-mono font-semibold text-deep-navy bg-clinical-white px-2 py-0.5 rounded border border-surface-dim">{activePart.sizeSpec}</span>
              </div>
              <div className="flex items-center justify-between border-b border-surface-dim pb-2.5">
                <span className="text-xs text-on-surface-variant font-sans">예상 소요량 (Estimate)</span>
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setWrapCount(Math.max(1, wrapCount - 1))}
                    className="w-5 h-5 bg-clinical-white border border-surface-dim rounded hover:bg-surface-dim flex items-center justify-center text-xs font-bold text-deep-navy cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-deep-navy font-mono">{wrapCount} 롤 (Rolls)</span>
                  <button 
                    onClick={() => setWrapCount(wrapCount + 1)}
                    className="w-5 h-5 bg-clinical-white border border-surface-dim rounded hover:bg-surface-dim flex items-center justify-center text-xs font-bold text-deep-navy cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-surface-dim/60">
            <div className="text-[11px] text-on-surface-variant">
              권장 용도에 최적화된 패키지로, 낱개씩 개별 멸균 래핑되어 있어 위생적이고 장기간 안심하고 밀봉 보관할 수 있습니다.
            </div>
          </div>
        </div>

        {/* Tip & Direct Guide */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="bg-clinical-white border border-surface-dim p-5 rounded-2xl">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-deep-navy/80 font-mono mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-mint-cooling" /> 올바른 부착 팁 (Application Tip)
            </h5>
            <p className="font-sans text-sm text-on-surface leading-relaxed mb-4">
              {activePart.wrappingTip}
            </p>
            <div className="bg-surface-gray py-3 px-4 rounded-xl flex items-start gap-2.5 border border-surface-dim/40">
              <CheckCircle className="w-4.5 h-4.5 text-mint-cooling shrink-0 mt-0.5" />
              <div className="text-xs text-on-surface-variant leading-relaxed">
                <span className="font-semibold text-deep-navy">점착력 향상 가이드:</span> 감은 후 전체적으로 골고루 손바닥 온감을 이용하여 2~3초 가량 부드럽게 감싸 쥐어주면 밀착도가 한층 높아집니다.
              </div>
            </div>
          </div>

          <a 
            href="#contact"
            onClick={() => {
              // Prepopulate form if elements exist
              const txtArea = document.getElementById('message') as HTMLTextAreaElement | null;
              if (txtArea) {
                txtArea.value = `안녕하세요. [폴라랩 ${activePart.name} 부위용 - ${activePart.recommendedModel} / 규격: ${activePart.sizeSpec}] 제품의 대량 도입(약 ${wrapCount * 50}롤 규모) 및 시제품 샘플 공급 절차에 대해 문의드립니다.`;
                txtArea.dispatchEvent(new Event('input', { bubbles: true }));
              }
            }}
            className="flex items-center justify-between bg-mint-cooling text-clinical-white p-4 rounded-2xl hover:bg-mint-cooling/90 transition-all font-semibold shadow-md shadow-mint-cooling/15 text-sm cursor-pointer group"
          >
            <span className="font-sans">이 구성으로 대량 도입 견적 요청서 작성하기</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
