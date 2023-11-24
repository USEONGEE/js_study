const API_KEY = 'Hp0M8Dn0A9zmdd3lbKDSveLOXBY0VCncUkWy3VEh5OPvZPZ0B9LE1gaSUDtEj4T3GZjTecYEGHxL%2FKBVXAvTIA%3D%3D';
const YEAR = '2015';
const SIDO = '11';
const GOGUN = '680';
const TYPE = 'json';
const NUMOFROWS = '10';
const PAGENO = '1';

async function getData() {
    // const url = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=${YEAR}}&siDo=${SIDO}&guGun=${GOGUN}&type=${TYPE}&numOfRows=${NUMOFROWS}&pageNo=${PAGENO}`;
    const url = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=2021&siDo=11&guGun=110&numOfRows=10&pageNo=1`
    const response = await fetch(url);
    const data = await response.json(); // 여기서 막힌다 시발...
    console.log(data);
}

getData();
