import React, { useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.section`
  width: 100%;
  margin: 1.3rem auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
`

const MouseImagesContainer = styled.div`
  background-color: #D8D8D8;
  border-radius: 10px;
  width: 30rem;
  height: 25rem;
  margin: 1rem;
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`

const MouseContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Mouseimg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover{
    transform: scale(1.1);
  }
`

const CurrentContainer = styled.div`
  background-color: #D8D8D8;
  border-radius: 10px;
  width: 30rem;
  height: 25rem;
  margin: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const CurrentImg = styled.img`
  background-color: white;
  border-radius: 10px;
  flex: 1;
  margin: 0.5rem auto;
  height: 80%;
  width: 80%;

`
const CurrentImgDescription = styled.div`
  background-color: white;
  border-radius: 10px;
  flex: 1;
  margin: 0.5rem auto;
  height: 80%;
  width: 80%;
`

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

/**
 * 
 * @param {Arrya} 이미지 배열 
 * @returns 
 */
export default function Info({ images }) {

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [description, setDescription] = useState(info[0])

  const handleClick = (item, i) => {
    setSelectedImage(item)
    setDescription(info[i]);
  }
  return (
    <Container>
      <MouseImagesContainer>
        {images.map((image, i) =>
        (
          <MouseContainer key={i}>
            <Mouseimg
              src={image}
              onClick={() => handleClick(image, i)} />
          </MouseContainer>
        ))}
      </MouseImagesContainer>
      <CurrentContainer>
        <CurrentImg src={selectedImage} />
        <CurrentImgDescription>
          <h3>{description.name}</h3>
          <h3>{description.feature}</h3>
        </CurrentImgDescription>
      </CurrentContainer>
    </Container>
  )
} 
