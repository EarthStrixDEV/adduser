import '../style.css';

const Adduser_ = () => {
  return (
    <div className='ml-24 mx-5 my-5'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-3xl font-bold p-5 ' >บัญชีผู้ใช้งาน</p>

        <form className="bg-from-color p-8  w-9/12 rounded-lg h-90 text-xl">
        <div className='items-center justify-center'>
            <div className='flex pt-2 pb-1'>
              <p>ชื่อ</p>
            </div>
            <div className='flex items-center justify-center'>
              <input placeholder='กรุณากรอกชื่อ-สกุล' className='w-9/12 p-2 rounded' id='name' type='text' />
            </div>
            <div className='flex pt-2 pb-1'>
              <p>อีเมล</p>
            </div>
            <div className='flex items-center justify-center'>
              <input placeholder='กรุณากรอกอีเมล ตัวอย่าง sophie@example.com' className='w-9/12 p-2 rounded' id='name' type="email" />
            </div>
            <diV className='flex pt-2 pb-1'>
              <p>สถานะ</p>
            </diV>
            <div className='flex items-center justify-center border-2 border-button-color border-dashed rounded-lg p-2'>
              <div class="radio-inputs">
                
                <label class="radio">
                  <input type="radio" name="radio"/>
                    <span class="name">อาจารย์</span>
                </label>

                <label class="radio">
                  <input type="radio" name="radio"/>
                    <span class="name">แอดมิน</span>
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className='flex py-3 w-9/12 rounded-lg text-xl justify-end items-center'>
          <button
            className='bg-yes-color p-2 rounded-lg text-white w-1/5 ml-2 drop-shadow-md hover:bg-green-900 active:bg-neutral-800'>
            ตกลง
          </button>
          <button
            className='bg-no-color p-2 rounded-lg text-white w-1/5 ml-2 drop-shadow-md hover:bg-red-900 active:bg-neutral-800'>
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adduser_;

