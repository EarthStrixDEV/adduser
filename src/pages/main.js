import '../style.css';
import { FaCircleUser } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";


const Main = () => {
  return (
    <div className='ml-56'>
      <div className='mx-5 my-5 flex flex-col justify-start text-black font-bold '>
        <p className='text-3xl '>ยินดีต้อนรับเข้าสู่ระบบ</p>
        <div className='flex flex-row p-6 items-center'>
          <FaCircleUser size={60} />
          <p className='pl-6 text-rose-color text-2xl '>คุณสมศรี สนุกซุกซน</p>
        </div>
        <div className='flex flex-row p-1 text-lg justify-center'>
          <p className=''>ประกาศเพิ่มเติม</p>
        </div>


        <div className='flex flex-row justify-center my-5'>
          <div className='flex flex-col bg-from-color rounded-lg  p-5 mx-10 w-9/12 justify-start '>
          <div className='flex flex-row justify-end'>
              <button className=' rounded hover:bg-neutral-50 active:bg-neutral-800 justify-self-end '>
              <TiDelete size={30} color='#7A1E1E'/>
              </button>
            </div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            
          </div>
        </div>

      <div className='underline-text'>

      </div>


        <div className='flex flex-row justify-center my-5'>
          <div className='flex flex-col bg-from-color rounded-lg  p-5 mx-10 w-9/12 justify-start '>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div className='flex flex-row justify-end'>
              <button className='bg-name-color rounded hover:bg-rose-800 active:bg-neutral-800 justify-self-end p-2 text-white'>
                ยืนยัน
              </button>
            </div>
          </div>
        </div>

      </div>
      <p></p>
    </div>


  );
};

export default Main;