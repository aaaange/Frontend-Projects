const clockTitle = document.querySelector('.js-clock');



function updateCountdown() {
  const christmasDate = new Date(new Date().getFullYear(), 11, 25) // 11월 = 12월
  const now = new Date(); // 현재 시간

  // 현재 시간이 크리스마스 이후라면 다음 해 크리스마스로 설정
  if (now > christmasDate) {
    christmasDate.setFullYear(christmasDate.getFullYear()+1);
  }
  
  // 남은 시간 계산 (밀리초 단위)
  const diff = christmasDate - now;
  
  // 1000 = 1초
  // 60 * 1000 = 1분
  // 60 * 60 * 1000 = 1시간
  // 24 * 60 * 60 * 1000 = 1일
  // Math.floor : 소수점 아래를 버림
  
  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor(diff / (1000 * 60) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  clockTitle.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

updateCountdown();
setInterval(updateCountdown, 1000);