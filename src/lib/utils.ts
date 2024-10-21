const formatToDateString = (date: string): string => {
  const parsedDate = new Date(date); // 날짜 문자열을 Date 객체로 변환
  const year = parsedDate.getFullYear(); // 연도
  const month = parsedDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)
  const day = parsedDate.getDate(); // 일

  return `${year}년 ${month}월 ${day}일`; // 포맷팅된 문자열 반환
};

export default formatToDateString;
