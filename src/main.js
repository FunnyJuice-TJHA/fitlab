// src/main.js
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Click outside or on links to dismiss
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Interactive Cooling Simulator Logic
    const simToggleBtn = document.getElementById('sim-toggle');
    const simMenthol = document.getElementById('sim-menthol');
    const simLavender = document.getElementById('sim-lavender');
    const mentholVal = document.getElementById('menthol-val');
    const lavenderVal = document.getElementById('lavender-val');
    
    const simPanel = document.getElementById('sim-panel');
    const simTemp = document.getElementById('sim-temp');
    const simStatus = document.getElementById('sim-status');
    const activeOverlay = document.getElementById('active-overlay');

    let isSimActive = false;
    let currentTemp = 36.5;
    let simInterval = null;

    if (simToggleBtn) {
        function updateGaugeText() {
            mentholVal.textContent = simMenthol.value + '%';
            lavenderVal.textContent = simLavender.value + '%';
        }

        simMenthol.addEventListener('input', updateGaugeText);
        simLavender.addEventListener('input', updateGaugeText);

        simToggleBtn.addEventListener('click', () => {
            isSimActive = !isSimActive;

            if (isSimActive) {
                // Active System State
                simToggleBtn.innerHTML = '<i class="ri-fire-fill text-amber-300"></i> 초기화 (Reset)';
                simToggleBtn.classList.replace('bg-mint-cooling', 'bg-deep-navy');
                
                simStatus.textContent = 'ACTIVE';
                simStatus.classList.add('text-mint-cooling');
                simPanel.classList.replace('from-gray-50', 'from-blue-50');
                simPanel.classList.replace('to-gray-100', 'to-blue-100');
                activeOverlay.classList.remove('hidden');

                // Simulation: Drop temperature incrementally to target based on menthol intensity
                clearInterval(simInterval);
                simInterval = setInterval(() => {
                    const mentholValue = parseInt(simMenthol.value);
                    const targetTemp = 36.5 - (mentholValue / 12); // Calculation to find target temp
                    
                    if (currentTemp > targetTemp + 0.1) {
                        currentTemp -= 0.15;
                        simTemp.textContent = currentTemp.toFixed(1) + '°C';
                        simTemp.classList.add('text-mint-cooling');
                    } else {
                        clearInterval(simInterval);
                    }
                }, 50);

            } else {
                // Idle / Reset System State
                simToggleBtn.innerHTML = '<i class="ri-snowflake-line"></i> 폴라랩 스마트 쿨링 활성화 (Apply Cold)';
                simToggleBtn.classList.replace('bg-deep-navy', 'bg-mint-cooling');
                
                simStatus.textContent = 'IDLE';
                simStatus.classList.remove('text-mint-cooling');
                simPanel.classList.replace('from-blue-50', 'from-gray-50');
                simPanel.classList.replace('to-blue-100', 'to-gray-100');
                activeOverlay.classList.add('hidden');

                // Simulation: Soft recovery back to normal human body temp
                clearInterval(simInterval);
                simInterval = setInterval(() => {
                    if (currentTemp < 36.5) {
                        currentTemp += 0.15;
                        simTemp.textContent = currentTemp.toFixed(1) + '°C';
                        
                        if (currentTemp >= 36.5) {
                            currentTemp = 36.5;
                            simTemp.textContent = '36.5°C';
                            simTemp.classList.remove('text-mint-cooling');
                            clearInterval(simInterval);
                        }
                    }
                }, 80);
            }
        });
    }

    // 3. Simple Form Submission Handling
    const inquiryForm = document.getElementById('inquiry-form');
    const formSuccess = document.getElementById('form-success');
    const resetFormBtn = document.getElementById('reset-form');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page real navigation
            inquiryForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
    }

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            inquiryForm.reset(); // Pure Vanilla Form wipe
            formSuccess.classList.add('hidden');
            inquiryForm.classList.remove('hidden');
        });
    }

});
