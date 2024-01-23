import { useState, React } from 'react';
import styled from 'styled-components';
import '../../../styles/globals.css';
import { IoMdGrid, IoIosArrowForward } from 'react-icons/io';
import { MdViewHeadline } from 'react-icons/md';
import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';

const TripView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;
const recordedTrip = [
  {
    img_url:
      'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: '강릉',
    date: '2023.12.01 ~ 2023.12.05',
  },
  {
    img_url:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJpcHxlbnwwfHwwfHx8MA%3D%3D',
    location: '선릉',
    date: '2023.12.04 ~ 2023.12.10',
  },
  {
    img_url:
      'https://media.istockphoto.com/id/1468433582/ko/%EC%82%AC%EC%A7%84/%EC%9A%B8%EC%B0%BD%ED%95%9C-%EC%A0%95%EA%B8%80%EC%97%90%EC%84%9C-%EB%B0%A7%EC%A4%84-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EA%B1%B7%EB%8A%94-%EC%97%AC%EC%9E%90.webp?b=1&s=170667a&w=0&k=20&c=R4zV3EWLcU1ZmzpaodlgDGWeND-86MexYh5sOnTwoOM=',
    location: '강동',
    date: '2023.12.15 ~ 2023.12.19',
  },
];

function TravelMainView() {
  const [isDetail, setIsDetail] = useState(false);
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="d-flex flex-between">
        <p>
          기록된 여행들 <span>{recordedTrip.length}</span>
        </p>
        {!isDetail ? (
          <MdViewHeadline
            style={{ fontSize: '25px' }}
            onClick={() => {
              setIsDetail(!isDetail);
            }}
          />
        ) : (
          <IoMdGrid
            style={{ fontSize: '25px' }}
            onClick={() => {
              setIsDetail(!isDetail);
            }}
          />
        )}
      </div>
      <div className="d-flex flex-between">
        {!isDetail ? (
          <div className="d-flex">
            {recordedTrip.map((t, i) => (
              <TripView key={{ i }}>
                <CircleBox img={t.img_url} />
                <p className="font-small mt-3 mb-0">{t.location}</p>
              </TripView>
            ))}
          </div>
        ) : (
          <div>
            {recordedTrip.map((t, i) => (
              <div className="d-flex mb-10" key={{ i }}>
                <CircleBox img={t.img_url} />
                <div className="d-flex-column flex-center align-start ml-5 ">
                  <p className="font-small mg-0">{t.location}</p>
                  <p className="font-small mg-0">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isDetail && <IoIosArrowForward style={{ fontSize: '20px' }} />}
      </div>
    </div>
  );
}
export default TravelMainView;
