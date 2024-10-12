import HeaderLinkBtn from "./header-link-btn"

const HeaderLink = () => {
  return (
    <div className="border-b border-t px-[20px] py-[6px] border-[#ccc] flex gap-1 overflow-x-auto">
      <HeaderLinkBtn link="/" text="요고 다이렉트" on={true}/>
      <HeaderLinkBtn link="/" text="요고 가입 혜택"/>
      <HeaderLinkBtn link="/" text="요고 브랜드 스토리"/>
      <HeaderLinkBtn link="/" text="핸드폰 등록 및 요금제 변경"/>
      
    </div>
  )
}
export default HeaderLink