const colors = [
    '#ef5777',
    '#575fcf',
    '#4bcffa',
    '#34e7e4',
    '#0be881',
    '#f53b57',
    '#3c40c6',
    '#0fbcf9',
    '#00d8d6',
    '#05c46b',
    '#ffc048',
    '#ffdd59',
    '#ff5e57',
    '#d2dae2',
    '#485460',
    '#ffa801',
    '#ffd32a',
    '#ff3f34',
  ];
  
  
  const colorButton = document.querySelector('button')
  
  
  function changeColor() {
    // 랜덤 색을 2가지 고르기
    const choseFirstColor = colors[Math.floor(Math.random() * colors.length)]
    const choseSecondColor = colors[Math.floor(Math.random() * colors.length)]
    
    // 고른 랜덤 색을 body style에 양 옆에 배치하고 그라데이션하기
    // document.body.style.backgroundColor = choseSecondColor;
    document.body.style.backgroundImage = `linear-gradient(0.25turn, ${choseFirstColor}, ${choseSecondColor})`;
    // 왜 backgroundColor가 아니라 backgroundImage를 써야 하는거징?? -- color는 단일 컬러만 됨.
  
  }
  
  
  
  // 버튼 이벤트 핸들러
  colorButton.addEventListener('click', changeColor)