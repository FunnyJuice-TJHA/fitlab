/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
import { Building2, Factory, ClipboardCheck, Mail, Send, History, Clock, FileCheck } from 'lucide-react';
import { Inquiry } from '../types';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [latestId, setLatestId] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  // Load inquiries from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('polar_wrap_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) {
      alert('성함, 연락처, 이메일, 문의 내용은 필수 입력 항목입니다.');
      return;
    }

    const uniqueId = `POLAR-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
    const newInquiry: Inquiry = {
      id: uniqueId,
      name,
      institution: institution || '개인 자격 문의',
      phone,
      email,
      message,
      createdAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'pending'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('polar_wrap_inquiries', JSON.stringify(updated));
    setLatestId(uniqueId);
    setIsSubmitted(true);

    // Reset inputs
    setName('');
    setInstitution('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Company credentials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-deep-navy tracking-tight mb-4">폴라랩 제품 도입 및 구매 문의</h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-12">
              병원, 클리닉, 피트니스 센터, 스포츠 구단 등 대량 구매 및 B2B 제품 도입에 관한 의뢰를 남겨주시면, 담당 지사 전문 어드바이저가 영업일 24시간 이내에 개별 맞춤 상담 제안서 및 샘플 발송 일정을 신속하게 안내해 드립니다.
            </p>

            <div className="space-y-6">
              {/* Importer */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/50 transition-colors rounded-2xl p-6 flex gap-4 items-start shadow-xs">
                <div className="w-10 h-10 bg-mint-cooling/10 rounded-xl flex items-center justify-center shrink-0 text-mint-cooling">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-on-surface-variant/75 uppercase block mb-1">제조·수입업자</span>
                  <h4 className="text-lg font-bold text-deep-navy mb-1">(주)피트핏</h4>
                  <p className="text-xs text-on-surface-variant font-sans">
                    서울특별시 구로구 디지털로 300, 12층 1201호 (지밸리비즈플라자)
                  </p>
                </div>
              </div>

              {/* Manufacturer */}
              <div className="bg-clinical-white border border-surface-dim hover:border-mint-cooling/50 transition-colors rounded-2xl p-6 flex gap-4 items-start shadow-xs">
                <div className="w-10 h-10 bg-mint-cooling/10 rounded-xl flex items-center justify-center shrink-0 text-mint-cooling">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-on-surface-variant/75 uppercase block mb-1">제조원</span>
                  <h4 className="text-lg font-bold text-deep-navy mb-1">(주)비알코스</h4>
                  <p className="text-xs text-on-surface-variant font-sans">
                    경기도 화성시 향남읍 발안공단로 2길 34
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-surface-dim/70 flex gap-4 items-center">
            <span className="text-[11px] text-on-surface-variant leading-relaxed">
              * 당사는 품질경영 규정에 근거하여 정식 수입 통관 및 GMP 인증 제조 시설 검수를 정기적으로 관리하고 있어, 완벽하고 일관된 장기 제품 안전성을 약속합니다.
            </span>
          </div>
        </div>

        {/* Right: Premium Interactive Form */}
        <div className="relative">
          {/* Overlay for successful submission */}
          {isSubmitted ? (
            <div className="bg-clinical-white border-2 border-mint-cooling rounded-3xl p-8 md:p-10 shadow-lg text-center flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-16 h-16 bg-mint-cooling/15 rounded-full flex items-center justify-center text-mint-cooling mb-6 animate-bounce">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-2">구매 소견 접수 완료</h3>
              <p className="text-xs text-on-surface-variant font-mono mb-6 uppercase tracking-wider">Inquiry ID: <span className="font-bold text-mint-cooling">{latestId}</span></p>
              
              <div className="bg-surface-gray w-full max-w-sm rounded-xl p-4 mb-8 text-left border border-surface-dim/40">
                <h4 className="text-xs font-bold text-deep-navy uppercase font-mono tracking-wide mb-2">상담 예약 실시간 안내</h4>
                <p className="text-[12px] text-on-surface-variant leading-relaxed">
                  작성해주신 메일(<span className="font-semibold text-deep-navy">{email || '입력 이메일'}</span>)로 샘플 가이드와 단가 테이블이 자동 전송되었습니다. 
                  담당 전문의료영업팀에서 1시간 이내에 개별 연락 드리겠습니다.
                </p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="cursor-pointer bg-deep-navy text-clinical-white font-sans text-xs font-semibold py-2.5 px-6 rounded-lg hover:opacity-95 transition-opacity"
                >
                  새 문의 작성하기
                </button>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowHistory(true);
                  }}
                  className="cursor-pointer bg-surface-gray text-deep-navy border border-surface-dim font-sans text-xs font-semibold py-2.5 px-6 rounded-lg hover:bg-surface-dim transition-colors"
                >
                  문의 내역 상세 조회 ({inquiries.length}건)
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-clinical-white border border-surface-dim/80 rounded-3xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-deep-navy/90 uppercase tracking-wider font-mono" htmlFor="name">
                      성함 / 직급 <span className="text-mint-cooling font-bold">*</span>
                    </label>
                    <input 
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="예시) 홍길동 과장"
                      className="w-full border border-surface-dim rounded-xl px-4 py-3 font-sans text-sm focus:border-mint-cooling focus:ring-1 focus:ring-mint-cooling transition-colors outline-hidden bg-surface-gray/30"
                    />
                  </div>

                  {/* Institution/Hospital field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-deep-navy/90 uppercase tracking-wider font-mono" htmlFor="institution">
                      기관명 / 병원명
                    </label>
                    <input 
                      type="text"
                      id="institution"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="예시) ㅇㅇ연합정형외과"
                      className="w-full border border-surface-dim rounded-xl px-4 py-3 font-sans text-sm focus:border-mint-cooling focus:ring-1 focus:ring-mint-cooling transition-colors outline-hidden bg-surface-gray/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-deep-navy/90 uppercase tracking-wider font-mono" htmlFor="phone">
                      연락처 <span className="text-mint-cooling font-bold">*</span>
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="예시) 010-0000-0000"
                      className="w-full border border-surface-dim rounded-xl px-4 py-3 font-sans text-sm focus:border-mint-cooling focus:ring-1 focus:ring-mint-cooling transition-colors outline-hidden bg-surface-gray/30"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-deep-navy/90 uppercase tracking-wider font-mono" htmlFor="email">
                      이메일 <span className="text-mint-cooling font-bold">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full border border-surface-dim rounded-xl px-4 py-3 font-sans text-sm focus:border-mint-cooling focus:ring-1 focus:ring-mint-cooling transition-colors outline-hidden bg-surface-gray/30"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-deep-navy/90 uppercase tracking-wider font-mono" htmlFor="message">
                    문의 내용 <span className="text-mint-cooling font-bold">*</span>
                  </label>
                  <textarea 
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="대량 단가 협정 문의, 시제품 테스트용 샘플 공급 희망 수량, 납품 필요 일정 등 상세한 세부 요망 사안을 기입해 주십시오."
                    className="w-full border border-surface-dim rounded-xl px-4 py-3 font-sans text-sm focus:border-mint-cooling focus:ring-1 focus:ring-mint-cooling transition-colors outline-hidden resize-none bg-surface-gray/30"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full cursor-pointer bg-mint-cooling text-clinical-white font-sans text-sm font-semibold py-4 rounded-xl hover:bg-mint-cooling/95 hover:shadow-md transition-all active:scale-99 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>제품 도입 및 단가 문의하기</span>
                </button>

                <p className="text-[11px] text-on-surface-variant leading-relaxed text-center">
                  * 수집된 바이어의 고귀한 개인정보는 정식 견적 가이드 피드백 및 샘플 배송 관련 긴급 연락용 이외에는 절대 상업적으로 영구 유출되지 않습니다.
                </p>
              </form>
            </div>
          )}

          {/* Persistent Inquiry History Button (Hidden dashboard feature) */}
          {inquiries.length > 0 && (
            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowHistory(!showHistory)}
                className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-deep-navy/80 hover:text-mint-cooling transition-colors underline underline-offset-4"
              >
                <History className="w-3.5 h-3.5" />
                <span>나의 실시간 문의 접수 현황 확인 ({inquiries.length}건)</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* History Log Panel Toggle */}
      {showHistory && inquiries.length > 0 && (
        <div className="mt-12 bg-clinical-white border border-surface-dim rounded-3xl p-6 md:p-8 shadow-xs animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-sans text-lg font-bold text-deep-navy flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-mint-cooling" /> 
              <span>실시간 바이어 청약 및 문의 추적 보드</span>
            </h3>
            <button 
              onClick={() => setShowHistory(false)}
              className="cursor-pointer text-xs font-semibold text-on-surface-variant hover:text-deep-navy border border-surface-dim px-3 py-1 rounded"
            >
              닫기
            </button>
          </div>

          <div className="space-y-4 max-h-[350px] overflow-y-auto">
            {inquiries.map((inq) => (
              <div key={inq.id} className="bg-surface-gray border border-surface-dim/50 rounded-2xl p-5 hover:border-mint-cooling/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold bg-deep-navy text-clinical-white px-2.5 py-0.5 rounded tracking-wider">{inq.id}</span>
                    <h4 className="text-sm font-bold text-deep-navy">{inq.name} ({inq.institution})</h4>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {inq.createdAt}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mint-cooling/15 text-mint-cooling font-sans font-bold text-[10px]">
                      ● 배정 검토중
                    </span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed whitespace-pre-wrap pl-1 font-sans">
                  {inq.message}
                </p>
                <div className="mt-3 pt-3 border-t border-surface-dim/40 flex justify-between text-[10px] text-on-surface-variant/80">
                  <span>전화 제휴 채널: {inq.phone}</span>
                  <span>인증 메일: {inq.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
