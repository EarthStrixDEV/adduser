import '../style.css';
import { Input } from "@material-tailwind/react";
const Adduser_ = () => {
  return (<>
    <div className='flex-row justify-start ml-56'>

      <div className='mx-5 my-5'>
        <div className=" flex flex-row justify-center text-black text-3xl font-bold p-8">
          <div>บัญชีผู้ใช้งาน</div>
        </div>

        <div className='flex flex-row justify-center text-xl'>
          <div className='bg-from-color rounded-lg  p-5 mx-10 w-9/12 '>
            <form class=" h-70 justify-center m-5 text-name-color">
              <div className='flex flex-col justify-center px-52'>
                <p className='pb-1'>ชื่อ</p>
                <input className='rounded p-1 justify-center ' ></input>
              </div>

              <div className='flex flex-col justify-center px-52 pt-6'>
                <p className='pb-1'>อีเมล</p>
                <input className='rounded p-1 justify-center ' ></input>
              </div>

              <div className='flex flex-col justify-center px-52 pt-6'>
                <p className='pb-1'>สถานะ</p>
                <div className='items-center'>
                  <label className='pr-6'>
                    <input type="radio"  value="อาจารย์" />
                    อาจารย์
                  </label>
                  <label>
                    <input type="radio" value="แอดมิน" />
                    แอดมิน
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Adduser_;

