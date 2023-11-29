export default function Center() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between py-24'>
      <div className='container'>
        <h1 className='text-3xl my-4'>청소년 지원 사이트 목록</h1>
        <div className='container'>
          <h2 className='text-2xl my-2'>한국청소년상담복지개발원</h2>
          Korean Youth Counceling & Welfare Institute
          <p className='text-xl'>여성가족부 산하 기관</p>
          <p className='text-xl'>Affilated Organization of Ministry of Gender Equality and Family</p>
          <p className='text-xl'>주요 사용자는 정부 부처 및 어른 등</p>
          https://www.kyci.or.kr/
        </div>
        <div className='container'>
          <h2 className='text-3xl my-4'>학교밖청소년지원센터, 꿈드림</h2>
          <p className='text-xl'>
            한국청소년상담복지개발원이 운영
          </p>
          <p className='text-xl'>
            주요 정보는 해당 사이트에 있다
          </p>
          <p className='text-xl'>
            https://www.kdream.or.kr
          </p>
        </div>
      </div>
    </main>
  )
}
