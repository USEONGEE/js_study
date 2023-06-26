const $container = document.querySelector('.mouse_type-div');
const $selectedImg = document.querySelector('img.mouse_info ');
const $selectedInfo = document.querySelector('div.mouse_info');

const getInfo = () => {
  return [
    {
      "name": "아기쥐",
      "feature" : "귀엽다"
    },
    {
      "name": "토끼쥐",
      "feature" : "토끼를 닮았다"
    },
    {
      "name": "샌드위쥐",
      "feature" : "맛있다"
    },
    {
      "name": "요리사쥐",
      "feature" : "라따뚜이로 오해를 받는다"
    },
    {
      "name": "꿀쥐",
      "feature" : "꿀봉을 주무기로 한다"
    },
    {
      "name": "히드라쥐",
      "feature" : "무섭다"
    },
    {
      "name": "갱쥐",
      "feature" : "강아지는 아니다"
    },
    {
      "name": "돌쥐",
      "feature" : "단단하다"
    },
    {
      "name": "표쥐",
      "feature" : "버섯이라는 오해를 받는다"
    }
  ];
}

const info = getInfo();
$selectedImg.src = `./src/img/1.jpg`;
$selectedInfo.innerHTML = info[0].name + '<br> <br>' + info[0].feature;

for (let i = 1; i <= 9; i++) {
  const div = document.createElement('div');
  div.classList.add('mouse_img-container');

  const img = document.createElement('img');
  img.src = `./src/img/${i}.jpg`;
  img.alt = `${i}번째 이미지`;
  img.classList.add('mouse-img');

  img.addEventListener('click', (e) => {
    $selectedImg.src = `./src/img/${i}.jpg`;
    $selectedInfo.innerHTML = info[i-1].name + '<br> <br>' + info[i-1].feature;
  });

  div.appendChild(img);

  $container.appendChild(div);
}
