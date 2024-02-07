import React, {useState} from 'react';

const Contact = () => {
  const [subject_thai_name ,setSubject_thai_name] = useState('');
  const [subject_eng_name ,setSubject_eng_name] = useState('');
  const [credit ,setCredit] = useState(0);
  const [school_year ,setSchool_year] = useState('');
  const [subject_id ,setSubject_id] = useState('');

  async function handleImportCourse() {
    try {
      await fetch('http://localhost:4000/course/importCourse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject_real_id: subject_id,
          subject_eng_name: subject_eng_name,
          subject_thai_name: subject_thai_name,
          credit: credit,
          school_year: school_year
        })
      })
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='ml-28 mx-5 my-5'>
      <div className="flex text-3xl font-bold">
        <p>นำเข้าหลักสูตร</p>
      </div>
      <div className="flex flex-row justify-between pt-5 h-90">

        <form className="bg-from-color p-2 m-2 w-3/5 rounded-lg h-90 text-base">
          <div className="flex flex-col justify-center ">
            <div className="flex flex-row items-center justify-between">

              <div className="flex items-center justify-between w-3/5 bg-white rounded-full  p-1 m-1">
                <input className="rounded-full pl-1 text-sm py-1.5 w-3/4" placeholder='ไฟล์หลักสูตรปีการศึกษา'></input>
                <button className="bg-rose-color font-semibold text-white m-1 p-1 rounded-full w-1/4 hover:bg-red-900 active:bg-neutral-800">เลือก</button>
              </div>

              <div className='flex flex-row justify-end items-center  w-2/5'>
                <p className="p-2">ปีหลักสูตร</p>
                <div className="flex items-center justify-between w-3/5 bg-white rounded-full  p-2 m-1">
                  <select className="rounded-full pl-1 text-sm py-1.5 w-full " name="year" id="year">
                    <option value="">ปีการศึกษา</option>
                    <option value="2560">2560</option>
                    <option value="2565">2565</option>
                    <option value="2570">2570</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-2 pr-3">
            <button className="bg-rose-color font-semibold text-white m-1 p-1 rounded-full w-1/4 hover:bg-red-900 active:bg-neutral-800">
              อัพโหลด
            </button>
          </div>

        </form>
        <form className="bg-from-color p-2 m-2 w-2/5 rounded-lg h-90 justify-center" onSubmit={handleImportCourse}>
          <div className="flex justify-center text-lg font-semibold pt-2"><p>นำเข้ารายวิชา</p></div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center text-lg text-base pt-2 w-9/12">
              <div className="flex flex-row justify-between  w-full items-center py-2">
                <label for="name"><p className="pr-1">รหัสวิชา</p></label>
                <input type='text' className="rounded-full p-3 text-sm py-1.5 w-3/5 " placeholder='รหัสวิชา' onChange={(event) => setSubject_id(event.target.value)} />
              </div>

              <div className="flex flex-row justify-between  w-full items-center py-2">
                <label for="name"><p className="pr-1">หลักสูตร</p></label>
                <select className="rounded-full pl-1 text-sm py-1.5 w-3/5 " name="year" id="year" onChange={(event) => setSchool_year(event.target.value)}>
                  <option value="">ปีการศึกษา</option>
                  <option value="2560">2560</option>
                  <option value="2565">2565</option>
                  <option value="2570">2570</option>
                </select>
              </div>

              <div className="flex flex-row justify-between  w-full items-center py-2">
                <label for="name"><p className="pr-1">ชื่อวิชา-ภาษาไทย</p></label>
                <input type='text' className="rounded-full p-3 text-sm py-1.5 w-3/5  " placeholder='ชื่อวิชาภาษาไทย' onChange={(event) => setSubject_thai_name(event.target.value)}/>
              </div>

              <div className="flex flex-row justify-between  w-full items-center py-2">
                <label for="name"><p className="pr-1">ชื่อวิชา-อังกฤษ</p></label>
                <input type='text' className="rounded-full p-3 text-sm py-1.5 w-3/5  " placeholder='ชื่อวิชาภาษาอังกฤษ' onChange={(event) => setSubject_eng_name(event.target.value)}/>
              </div>

              <div className="flex flex-row justify-between  w-full items-center py-2">
                <label for="name"><p className="pr-1">หน่วยกิต</p></label>
                <input type='text' className="rounded-full p-3 text-sm py-1.5 w-3/5  " placeholder='หน่วยกิต' onChange={(event) => setCredit(parseInt(event.target.value))}/>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-2 pr-3">
            <button className="bg-rose-color font-semibold text-white m-1 p-1 rounded-full w-1/4 hover:bg-red-900 active:bg-neutral-800" type='submit'>
              เพิ่ม
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;