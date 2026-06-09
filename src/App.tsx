/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  HeartPulse, 
  Snowflake, 
  Menu, 
  X, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  Accessibility, 
  Fingerprint, 
  Info, 
  Ruler, 
  AlertTriangle, 
  CheckCircle2, 
  Check, 
  ChevronRight,
  Phone,
  HelpCircle,
  Stethoscope
} from 'lucide-react';

import SizingSelector from './components/SizingSelector';
import CoolingSimulator from './components/CoolingSimulator';
import InquiryForm from './components/InquiryForm';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [interactiveTab, setInteractiveTab] = useState<'size' | 'cool'>('size');

  // FAQ Expandable database
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      q: '쿨링 효과는 얼마나 오랜 시간 지속되나요?',
      a: '폴라랩은 피부 부착 후 밀폐용 특화 래핑 구성을 통해 수시간 동안 은은하고 시원한 기화 쿨링감을 지속적으로 전해줍니다. 실온 분실이 잦거나 격렬한 관절 움직임이 발생해도 약 2~4시간 동안 향기와 냉각이 고르게 유지됩니다.'
    },
    {
      q: '민감성 피부나 유아에게도 해롭지 않은가요?',
      a: '피부 안전성 적합 테스트를 완료하였으나, 천연고무라텍스 성분과 멘톨 오일 성분이 도포되어 있으므로 천연라텍스 알레르기가 있거나 극도로 고초 민감한 영유아 피부 표면에는 무리한 장기 부착을 피고 신중하게 확인 후 사용을 권장합니다.'
    },
    {
      q: '한 번 사용하고 떼어낸 뒤 다시 재점착할 수 있나요?',
      a: '폴라랩은 1회용 멸균 포장을 표준으로 도입한 완벽한 위생성 지향 제품입니다. 오염 위험 및 기화된 오일 수분 손실을 방지하기 위해 한 번 풀었다면 재사용하지 않고 즉시 폐기하시는 것을 적극 권고드립니다.'
    }
  ];

  return (
    <div className="bg-clinical-white text-deep-navy font-sans min-h-screen flex flex-col antialiased">
      
      {/* Top Navigation Bar */}
      <header className="bg-clinical-white border-b border-surface-gray sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo & Category */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <span className="w-9 h-9 bg-mint-cooling rounded-xl flex items-center justify-center text-clinical-white shadow-xs">
                <Snowflake className="w-5 h-5 animate-pulse" />
              </span>
              <span className="text-xl font-bold tracking-tight text-deep-navy font-sans">Polar Wrap</span>
            </a>
            
            <span className="hidden lg:inline-flex items-center px-3 py-1 bg-surface-gray text-deep-navy text-[11px] font-semibold rounded-full border border-surface-dim uppercase tracking-wider font-mono">
              제신 26-65호 | 1등급 의료기기
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
            <a href="#intro" className="hover:text-mint-cooling transition-colors">How-to</a>
            <a href="#specs" className="hover:text-mint-cooling transition-colors">Specs</a>
            <a href="#simulator" className="hover:text-mint-cooling transition-colors">Simulator</a>
            <a href="#instructions" className="hover:text-mint-cooling transition-colors">Instructions</a>
            <a href="#caution" className="hover:text-mint-cooling transition-colors">Caution</a>
            <a href="#contact" className="hover:text-mint-cooling transition-colors">Contact</a>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              className="bg-mint-cooling text-clinical-white text-xs font-semibold px-6 py-2.5 rounded-full hover:shadow-md hover:opacity-95 transition-all text-center flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquiry / 도입 문의</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-deep-navy p-2 hover:bg-surface-gray rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Board */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-clinical-white border-t border-surface-dim p-6 flex flex-col gap-4 shadow-sm animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 bg-surface-gray text-deep-navy text-[10px] font-bold rounded-md border border-surface-dim self-start mb-2">
              제신 26-65호 | 1등급 의료기기
            </div>
            <a 
              href="#intro" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-deep-navy hover:text-mint-cooling transition-colors border-b border-surface-gray pb-2"
            >
              How-to 설명
            </a>
            <a 
              href="#specs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-deep-navy hover:text-mint-cooling transition-colors border-b border-surface-gray pb-2"
            >
              규격 및 스펙
            </a>
            <a 
              href="#simulator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-deep-navy hover:text-mint-cooling transition-colors border-b border-surface-gray pb-2"
            >
              쿨링 시뮬레이터
            </a>
            <a 
              href="#instructions" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-deep-navy hover:text-mint-cooling transition-colors border-b border-surface-gray pb-2"
            >
              부착 4단계 가이드
            </a>
            <a 
              href="#caution" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-deep-navy hover:text-mint-cooling transition-colors border-b border-surface-gray pb-2"
            >
              주의사항
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-mint-cooling text-clinical-white text-sm font-semibold py-3 px-4 rounded-xl text-center hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 mt-2"
            >
              <Phone className="w-4 h-4" />
              <span>Inquiry / 도입 문의하기</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-clinical-white py-16 lg:py-28 select-none">
          {/* Subtle background decoration elements */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-mint-cooling/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-12 left-12 w-[300px] h-[300px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text panel */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-mint-cooling/10 text-mint-cooling text-xs font-bold rounded-full self-start border border-mint-cooling/15 shadow-2xs font-sans">
                <HeartPulse className="w-4 h-4" />
                <span>정식 등록 의료기기 (Class I)</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-deep-navy tracking-tight leading-tight">
                POLAR WRAP 폴라랩 :<br />
                <span className="text-mint-cooling block mt-1.5">시원함에 은은한 향기를 더하다,</span>
                편안한 회복을 위한 스마트한 선택
              </h1>

              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl font-sans mt-2">
                신체 국소 부위를 단단하게 압박하고 안정적으로 지지해주며, 함유된 천연 멘톨과 부드러운 라벤더 아로마 에센스가 상쾌하고 조화로운 지속성 쿨링감을 제공하는 똑똑한 자가 점착식 의료용 압박 밴드입니다.
              </p>

              {/* Action Rows */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="#contact" 
                  className="bg-mint-cooling text-clinical-white text-sm font-semibold px-8 py-4 rounded-xl text-center hover:shadow-md hover:bg-mint-cooling/95 transition-all text-nowrap cursor-pointer"
                >
                  제품 전용 대량 문의
                </a>
                <a 
                  href="#simulator-section" 
                  className="bg-transparent text-deep-navy border-2 border-deep-navy/80 hover:bg-surface-gray text-sm font-semibold px-8 py-4 rounded-xl text-center transition-colors text-nowrap cursor-pointer"
                >
                  기화 쿨링 스마트 체험
                </a>
                <a 
                  href="#specs" 
                  className="text-deep-navy hover:text-mint-cooling text-sm font-bold px-4 py-4 text-center transition-colors underline underline-offset-4 decoration-mint-cooling"
                >
                  제품 규격 상세 조회
                </a>
              </div>
            </div>

            {/* Hero Graphic render panel (using absolute hotlink) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-mint-cooling/12 to-purple-100/50 p-6 shadow-sm border border-surface-dim/40 relative overflow-hidden flex items-center justify-center">
                
                {/* Micro clean decorative badge */}
                <div className="absolute top-4 left-4 z-10 bg-clinical-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-surface-dim/60 text-[10px] font-mono tracking-wide">
                  COMPRESSION BANDAGE
                </div>

                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdMKo9-eglc5m5SFnpSKJbWRNY7mcIymUvRV7gv_RnBcsdlQD8WpQvuMSLhV4IR-KAlG3eEMJ2Ipa2jqylTJpm9H6Vn-cGZfSH19zBGvEtriTz6FIy8kY7BzsdmG68Tqqzx4TyUp0mAVxtHTo-IgtJkQTjLPkYD7Gy02eQzYVTAh4JdObVFRiRaWYZ5x8GDVUktPKrTWeJmE25qKcDu1goSwqg3A453c2S6BK_LJLOgoc6vu2e9whW2b-_-OOXXmRfxK09i1nDG0" 
                  alt="Polar Wrap 3D Bandage render showing therapeutic layers" 
                  className="object-contain w-full h-full max-h-[380px] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Product Intro Section */}
        <section className="bg-surface-gray py-20" id="intro">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text introduction on the left */}
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-2">product spotlight</span>
                <h2 className="text-3xl font-bold tracking-tight text-deep-navy mb-6">폴라랩은 어떤 제품인가요?</h2>
                
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 font-sans">
                  폴라랩은 압박과 긴밀한 기계적 지지가 요구되는 수많은 사지 관절 및 근육 부위에 바이어가 아주 손쉽게 감아서 고정할 수 있는 위생적인 1회용 멸균 의료기기입니다. 일반적인 접착 밴드와 다르게 미세 피부 표면이나 조밀한 체모에 끈적하게 눌러붙지 않고 오직 <strong className="font-semibold text-deep-navy">밴드 자체의 미시 표면들끼리만 정밀 맞점착되는 구조</strong>로 개발되어 탈부착 시 털이 뽑히거나 스킨 가려움증을 유발하는 고통이 전혀 수반되지 않아 아주 상쾌합니다.
                </p>

                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-8 font-sans">
                  유연한 탄성을 자랑하는 고급 부직포, 정밀 나일론사, 부드러운 고무 탄력성을 유도하는 폴리우레탄사 및 소량의 마일드한 천연 고무 라텍스로 긴밀히 제직하였으며, <strong className="font-semibold text-deep-navy">국소 열 감응 기생을 방출하여 차가운 감각 통로를 자극</strong>하는 천연 멘톨과 진정 효과가 탁월한 천연 라벤더 오일 냉각 에멀젼이 전면 도포되어 있습니다.
                </p>

                {/* Important Disclaimer box */}
                <div className="bg-clinical-white border border-surface-dim rounded-2xl p-5 flex gap-4 items-start shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-mint-cooling/15 flex items-center justify-center shrink-0 text-mint-cooling">
                    <Info className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-deep-navy uppercase tracking-wide">공식 정보 고지</h4>
                    <p className="text-[12px] text-on-surface-variant leading-relaxed mt-1">
                      도포 및 래핑 가이드되어 포함된 냉각 포뮬러는 피부 기점에서 기화 열전도로 일시적이고 신선한 시원함을 선사하는 물리적 작용을 수행할 뿐, 질병의 직접적 치료 및 이식 약리적 생화학 효과를 일체 수행하지 않습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphical imagery grid on the right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Woven Fabric Close-up */}
                <div className="bg-clinical-white border border-surface-dim/40 p-4 rounded-3xl flex flex-col gap-4 shadow-2xs">
                  <div className="aspect-square w-full rounded-2xl overflow-hidden bg-surface-gray border border-surface-dim/50">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdVWNpIUwC_as-HifE-y4uoKNB2hfauoCDWtfN11LuZDu7TaPMkCrwqX2AJIaAQlZA8MgoClj203nRcxpIlCVaBw7k-gogpLQjNffPN6S_m9YdiCtZ82AErhIGoO01M2qgQeWbq3dDz3rfnGKtsrz4SPxSzSovMZ8HBDJO89zOhgcrrRyE-ZRc1yxzEHhkDO3f9oRFShOY6mt5Qn-uy_YjE2W-MevCEW5rS9a0rtIFm8emcsUbrA2WvHdPN6uPM2A5RY5pNZQcmG0" 
                      alt="Close-up structure of Polar Wrap premium elastic thread fibers" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-deep-navy font-sans mb-1">정교한 기공 구조</h4>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      공기의 원활한 이동을 허용하는 투습 미세 기공 배치를 채용하여 습기가 차지 않고 산뜻합니다.
                    </p>
                  </div>
                </div>

                {/* Natural Herbs representation */}
                <div className="bg-clinical-white border border-surface-dim/40 p-4 rounded-3xl flex flex-col gap-4 shadow-2xs sm:translate-y-6">
                  <div className="aspect-square w-full rounded-2xl overflow-hidden bg-surface-gray border border-surface-dim/50">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJZr86CiMKITI0-taLk6oHbaVyVdyIsVBUWnxSb5JnhCVEwDc-6CWDc0o98mQn1DORbbHt0HjyxV6zgrZDwu2QbY-XUosTjbnTkXE7QJhxm5pRReGZt7Kn3-AUDoysW1tHRzdDPEtqym7xvGsWNNEIbr5P-95Be1Ntm4FDkbEI2Iuahz5rGoi3Q46zRdY_jYjD7aAJYbU59fnCOwllrjEj1kdjfgbJR0QJIj071ru4SH9p1FeWOIPGQd1uahZetQcj4nl_QmuaEt4" 
                      alt="Menthol leaves and lavender extract flowers on sterile clinical surface" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-deep-navy font-sans mb-1">천연 허브 아로마</h4>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      화학 배합 냄새 대신 정화된 천연 고농축 라벤더 플로럴 오일 추출물을 함유했습니다.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-1">core superiority</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy mb-4">폴라랩 주요 특징</h2>
            <p className="text-sm text-on-surface-variant max-w-xl mx-auto">폴라랩만의 차별화된 직조 기술과 편안한 성분 조합을 실감해보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature card 1 */}
            <div className="bg-clinical-white border border-surface-dim p-7 rounded-2xl hover:border-mint-cooling/40 transition-all duration-300 shadow-2xs group hover:-translate-y-1">
              <div className="w-12 h-12 bg-mint-cooling/8 text-mint-cooling rounded-xl flex items-center justify-center mb-6">
                <Snowflake className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-3">상쾌한 쿨링과 릴렉싱</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                멘톨 고유의 강력한 상쾌함과 천연 라벤더 오일의 보드라움이 만나 피부 자극을 주지 않는 최적화된 기화 온도 저하 밸런스를 구축했습니다.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="bg-clinical-white border border-surface-dim p-7 rounded-2xl hover:border-mint-cooling/40 transition-all duration-300 shadow-2xs group hover:-translate-y-1">
              <div className="w-12 h-12 bg-mint-cooling/8 text-mint-cooling rounded-xl flex items-center justify-center mb-6">
                <Fingerprint className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-3">조밀한 자가 점착 성질</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                클래식 테이프와 같은 끈적이 잔여물이 피부 모공 구석에 고이지 않도록 특별 제직하여, 오직 밴드 자체 끼리만 고강도 마찰 점착됩니다.
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="bg-clinical-white border border-surface-dim p-7 rounded-2xl hover:border-mint-cooling/40 transition-all duration-300 shadow-2xs group hover:-translate-y-1">
              <div className="w-12 h-12 bg-mint-cooling/8 text-mint-cooling rounded-xl flex items-center justify-center mb-6">
                <Accessibility className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-3">인체공학적 다용도 안착</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                굴곡이 급격하고 움직임 회오리가 잦은 팔꿈치, 손목, 미끄러운 무릎관절 등에도 탄력 있는 들뜸 방지 밀착감으로 편안히 감싸줍니다.
              </p>
            </div>

            {/* Feature card 4 */}
            <div className="bg-clinical-white border border-surface-dim p-7 rounded-2xl hover:border-mint-cooling/40 transition-all duration-300 shadow-2xs group hover:-translate-y-1">
              <div className="w-12 h-12 bg-mint-cooling/8 text-mint-cooling rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-3">청결한 일회용 밀봉</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                각각의 고단위 롤마다 신선하고 습기가 오염되지 않는 개별 멸균 챔버 패킹 방식을 성형 적용하여 보관 휴대성이 극도로 뛰어납니다.
              </p>
            </div>

          </div>
        </section>

        {/* Interactive Assistant Section (Bento Grid Style) */}
        <section className="bg-surface-gray py-20" id="simulator">
          <div className="max-w-7xl mx-auto px-6" id="simulator-section">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-1">interactive tools</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy mb-4">폴라랩 스마트 자가 보조기</h2>
              <p className="text-sm text-on-surface-variant max-w-xl mx-auto">도입 전 나에게 적합한 모델과 피부 반응 쿨링 단계를 가상으로 디자인해 보세요.</p>
              
              {/* Tabs Toggle buttons */}
              <div className="inline-flex bg-clinical-white p-1 rounded-xl border border-surface-dim/80 mt-8 shadow-xs">
                <button
                  onClick={() => setInteractiveTab('size')}
                  className={`cursor-pointer px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    interactiveTab === 'size'
                      ? 'bg-deep-navy text-clinical-white shadow-xs'
                      : 'text-on-surface-variant hover:text-deep-navy'
                  }`}
                >
                  부위별 규격 추천 가이드
                </button>
                <button
                  onClick={() => setInteractiveTab('cool')}
                  className={`cursor-pointer px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    interactiveTab === 'cool'
                      ? 'bg-deep-navy text-clinical-white shadow-xs'
                      : 'text-on-surface-variant hover:text-deep-navy'
                  }`}
                >
                  쿨링 기화 시뮬레이터
                </button>
              </div>
            </div>

            {/* Render selected widget with fade-in effect */}
            <div className="transition-all duration-300">
              {interactiveTab === 'size' ? <SizingSelector /> : <CoolingSimulator />}
            </div>

          </div>
        </section>

        {/* Product Specifications Section */}
        <section className="py-24 max-w-7xl mx-auto px-6" id="specs">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-1">product models specifications</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy mb-4">폴라랩 규격 및 상세 사양</h2>
            <p className="text-sm text-on-surface-variant max-w-xl mx-auto">적합한 롤 크기를 확인하여 필요한 환부 처치 면적에 완벽히 상응시키세요.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Model Card 1 */}
            <div className="bg-clinical-white border border-surface-dim rounded-2xl p-8 hover:border-mint-cooling/30 hover:shadow-xs transition-all flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-mint-cooling/8 text-mint-cooling rounded-full flex items-center justify-center shrink-0">
                <Ruler className="w-6 h-6" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-surface-gray">
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy font-sans">폴라랩 대형 (Large Scale)</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wide text-mint-cooling font-mono">Hospital & Clinic Grade</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-deep-navy bg-surface-gray px-3 py-1 rounded">Model 1</span>
                </div>
                <div className="space-y-3.5 text-xs text-on-surface-variant">
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">제품 규격 면적</span>
                    <span className="font-mono">10cm x 3m (최장 연장 시)</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">추천 대응 부위</span>
                    <span className="font-sans">무릎 관절, 허벅지 대대근군, 넓은 허리 고정 등</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">단가 분류 등급</span>
                    <span className="font-mono text-mint-cooling font-semibold">B2B 대량 조달 1등급 우대 품목</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Card 2 */}
            <div className="bg-clinical-white border border-surface-dim rounded-2xl p-8 hover:border-mint-cooling/30 hover:shadow-xs transition-all flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-mint-cooling/8 text-mint-cooling rounded-full flex items-center justify-center shrink-0">
                <Ruler className="w-6 h-6 animate-pulse" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-b-surface-gray">
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy font-sans">폴라랩 소형 (Medium Scale)</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wide text-mint-cooling font-mono">Personal & Sports Care</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-deep-navy bg-surface-gray px-3 py-1 rounded">Model 2</span>
                </div>
                <div className="space-y-3.5 text-xs text-on-surface-variant">
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">제품 규격 면적</span>
                    <span className="font-mono">7.5cm x 3m (최장 연장 시)</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">추천 대응 부위</span>
                    <span className="font-sans">손목, 팔꿈치, 아킬레스건, 발목 관절 등</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-surface-gray/40">
                    <span className="font-semibold text-deep-navy">단가 분류 등급</span>
                    <span className="font-mono text-mint-cooling font-semibold">클리닉/개인 피트니스 도입 우대 품목</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Shared specs matrix */}
          <div className="bg-surface-gray rounded-2xl p-7 border border-surface-dim/60">
            <h4 className="text-xs font-bold text-deep-navy uppercase tracking-wider font-mono mb-4">공통 규격 매트릭스</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed text-on-surface-variant">
              <div>
                <span className="block font-bold text-deep-navy text-xs mb-1">인체 공학 원자재 구성표</span>
                <span>통기성 미세 탄력 부직포 배합체, 탄성 복원용 정밀 우레탄사, 알레르기 제균 처리 마일드 천연 고무 라텍스 성분 함량 최적화</span>
              </div>
              <div>
                <span className="block font-bold text-deep-navy text-xs mb-1">쿨링 아로마 포뮬레이션</span>
                <span>천연 기화용 퓨어 저온 멘톨 수액 베우, 살균 및 진정 테라피용 프리미엄 라벤더 플로럴 오일 에멀젼 복합 성분</span>
              </div>
              <div>
                <span className="block font-bold text-deep-navy text-xs mb-1">보관 기한 및 챔버 포장</span>
                <span>제조 등록 및 멸균 일자 기준 36개월 (밀봉 멸균 개별 파우치 보관 상태 한정), 1롤 개별 단독 카트리지화 패킹 완료</span>
              </div>
              <div>
                <span className="block font-bold text-deep-navy text-xs mb-1">권장 상온 보관 가이드</span>
                <span>섭씨 1도~30도 이하 직사광선이 내리쬐지 않는 고온 다습 기생이 일체 배제된 청결한 일반 정온 환기 상온 공간</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-on-surface-variant/90 text-center mt-6">
            * 본 의료 위생 제품은 「의료기기법」 표준 조례 규장에 준거하여 제신 제 26-65호 표준 일등급 압박용 의료기기 밴드로 엄정 등록 수입되었습니다.
          </p>
        </section>

        {/* Dynamic Instructional Steps */}
        <section className="bg-surface-gray py-24" id="instructions">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-1">step-by-step guidance</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy mb-4">올바른 사용 방법 4단계</h2>
              <p className="text-sm text-on-surface-variant max-w-xl mx-auto">단계별 수칙을 엄수하여 폴라랩 최적의 기계적 밀착 강도와 향기를 완벽히 발현시켜 보세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/30 transition-all rounded-2xl p-6 flex flex-col gap-5 shadow-xs group hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-mint-cooling/12 text-mint-cooling font-mono text-sm font-extrabold rounded-xl flex items-center justify-center group-hover:bg-mint-cooling group-hover:text-clinical-white transition-all duration-300">
                    01
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-on-surface-variant/40 uppercase">Prep</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-deep-navy mb-2 font-sans">준비 단계 (Skin Prep)</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                    개 개별 멸균 파우치를 세련되게 개봉하여 폴라랩을 꺼냅니다. 밴드가 안착될 타겟 피부 부위에 수분이나 오일, 땀이 흥건하지 않도록 수건으로 맑고 건조하게 닦아 정돈합니다.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/30 transition-all rounded-2xl p-6 flex flex-col gap-5 shadow-xs group hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-mint-cooling/12 text-mint-cooling font-mono text-sm font-extrabold rounded-xl flex items-center justify-center group-hover:bg-mint-cooling group-hover:text-clinical-white transition-all duration-300">
                    02
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-on-surface-variant/40 uppercase">Anchor</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-deep-navy mb-2 font-sans">초입 안착 (Initial Anchor)</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                    시작부 고정 지점에 폴라랩 밴드 끝자락을 손가락 끝으로 가볍게 밀착시킵니다. 초입 1바퀴를 완전히 겹쳐 돌려줌으로써, 자가 점착력의 기준 고정점을 성실히 형성한 뒤 천천히 탄력을 줍니다.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/30 transition-all rounded-2xl p-6 flex flex-col gap-5 shadow-xs group hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-mint-cooling/12 text-mint-cooling font-mono text-sm font-extrabold rounded-xl flex items-center justify-center group-hover:bg-mint-cooling group-hover:text-clinical-white transition-all duration-300">
                    03
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-on-surface-variant/40 uppercase">Wrap</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-deep-navy mb-2 font-sans">밀착 교차 (Support Wrap)</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                    혈액이 순환하지 못해 심부 혈류가 체하는 일이 발생치 않도록 고의적으로 너무 강하게 당겨 감지 않습니다. 순차적인 층위가 약 1/2에서 2/3 수준으로 마찰 겹치게끔 다듬어가며 균일하게 돌려 올립니다.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/30 transition-all rounded-2xl p-6 flex flex-col gap-5 shadow-xs group hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-mint-cooling/12 text-mint-cooling font-mono text-sm font-extrabold rounded-xl flex items-center justify-center group-hover:bg-mint-cooling group-hover:text-clinical-white transition-all duration-300">
                    04
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-on-surface-variant/40 uppercase">Lock</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-deep-navy mb-2 font-sans">마무리 (Firm Lock)</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                    처방 면적 및 목적 타겟을 완벽히 소화 시켰다면, 가위를 이용해서 대각으로 가지런하게 잘라주거나 부드럽게 끊어 냅니다. 고정 밴드 끝부분을 손바닥 평면 온도로 부드럽게 쥐어 누르면 결착이 종료됩니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Caution Section */}
        <section className="py-24 max-w-7xl mx-auto px-6" id="caution">
          <div className="bg-caution-pink/50 border border-red-200 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Ambient Alert Triangle Background layout */}
            <div className="absolute top-0 right-0 p-8 text-deep-navy opacity-5 pointer-events-none hidden md:block">
              <AlertTriangle className="w-[180px] h-[180px]" />
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-red-200">
                <span className="w-10 h-10 bg-deep-navy text-clinical-white rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-300" />
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-deep-navy font-sans mb-0.5">꼭 알아두셔야 하는 사용상 주의사항</h2>
                  <p className="text-[11px] font-mono text-on-surface-variant font-bold tracking-wide uppercase">Safety Guidelines & Absolute Exclusions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-deep-navy/90 leading-relaxed font-medium">
                <ul className="space-y-4">
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>본 폴라랩 제품은 오염 위험성을 엄밀히 미연 방지하고자 설계된 일탈 없는 완전히 1회용 규격이므로 점착 유지력이 저항하더라도 절대 한 번 분리한 뒤에 세척 후 비위생적으로 재사용치 마십시오.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>상처가 깊게 패여 출혈이나 짓물이 진행 중인 미피막 외상 부피, 심각한 알레르기 수포 반응이 보이는 만성 아토피 및 심한 급성 습진 피부 중심 위에는 직접 환부 접촉 가이드되어 마찰 감싸지 않도록 하십시오.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>천연 탄성감 지탱을 보전하기 위해 에멜젼 처리 극소량의 고무 원재료 고유 라텍스가 원천 매립되어 있으므로, 예민한 천연고무 및 합성라텍스 알레블 반응이 유전적으로 존재하시는 바이어들은 세심한 관찰 하에 접촉 여부를 타진하십시오.</span>
                  </li>
                </ul>

                <ul className="space-y-4">
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>부직포의 자가마찰 점착성이 좋다고 하여 대동맥 혈관 부위를 과도한 텐션 압박으로 동맥혈류를 강하게 정맥 차단 감지 마십시오. 환부에 저림이나 맥박 무반응, 손끝 발끝 피부 청화색 변색 유도 시 즉시 전면 감기를 해지하십시오.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>감싸 부착 사용하고 있는 도중 알러지성 가려움증 폭발, 열성 발진, 표피 자극 발적 등이 육안 식별 및 체성 자극될 겨우에는 즉각 밴드를 즉시 벗겨내 버리고 즉시 피부과 임상 전문의의 정확한 사후 처방 조치를 따르십시오.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-deep-navy shrink-0 mt-0.5" />
                    <span>어린이의 무분별한 삼킴 및 질식 교결 사고 유도를 일체 통제 방지하기 위하여 유아 및 소아의 인지 및 가동 시야 반경 밖에 해당하는 정온하고 청결한 안전 보관 기밀 장소에 보관하십시오.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-clinical-white py-20 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-wider text-mint-cooling uppercase block mb-1">frequently asked questions</span>
            <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">자주 물으시는 질문</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-surface-dim rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 bg-surface-gray/40 hover:bg-surface-gray transition-colors flex justify-between items-center cursor-pointer"
                >
                  <span className="font-sans font-bold text-sm text-deep-navy flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-mint-cooling shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 text-deep-navy transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-clinical-white border-t border-surface-dim/40 text-xs text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Interactive B2B Inquiry Registration Form */}
        <section className="bg-surface-gray py-24 border-t border-surface-dim/60">
          <InquiryForm />
        </section>

      </main>

      {/* Corporate Clinical Footer */}
      <footer className="bg-deep-navy text-clinical-white pt-20 pb-12 select-none border-t border-deep-navy" id="legal">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Logo badge */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-10 h-10 bg-mint-cooling rounded-xl flex items-center justify-center text-clinical-white shadow-xs">
              <Snowflake className="w-5.5 h-5.5" />
            </span>
            <span className="text-2xl font-black tracking-tight text-clinical-white font-sans">Polar Wrap</span>
          </div>

          {/* Quick Legal menu links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-xs font-semibold uppercase tracking-wider text-clinical-white/60 font-mono">
            <a href="#" className="hover:text-mint-cooling transition-colors underline decoration-mint-cooling/30">이용약관 (Terms)</a>
            <a href="#" className="hover:text-mint-cooling transition-colors underline decoration-mint-cooling/30">개인정보처리방침 (Privacy)</a>
            <a href="#" className="hover:text-mint-cooling transition-colors underline decoration-mint-cooling/30">제작·수입원 고지 (Disclaimer)</a>
            <a href="#" className="hover:text-mint-cooling transition-colors underline decoration-mint-cooling/30">의료 심의 정보 인증</a>
          </div>

          <div className="text-center max-w-3xl flex flex-col gap-3 border-t border-clinical-white/10 pt-8 text-[11px] text-clinical-white/50 leading-relaxed font-medium">
            <p>
              (주)피트핏 | 대표이사: 폴라 매니그먼트 | 사업자등록번호: 104-86-21014 | 서울특별시 구로구 디지털로 300, 12층 1201호 (지밸리비즈플라자)
              <br />
              전담 텔레마케팅 센터: 1566-2665 | 팩스: 02-300-1201 | 제휴 및 납품 문의 메일: partner@fitfit-clinical.co.kr
            </p>
            <p>
              의료기기 광고 심의 번호 필: 2026-I10-44-1215호 | 품목 허가 번호: 제신 26-65호 (압박용 밴드 / 일회용 기화 상향 냉각형 1등급 의료기기)
            </p>
            <p className="mt-4 font-mono font-bold tracking-wider text-clinical-white/30 uppercase text-[10px]">
              &copy; 2026 FitFit Clinical Holdings Co., Ltd. All rights reserved. Registered Trademark.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
