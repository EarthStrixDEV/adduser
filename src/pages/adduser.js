import React,{useState ,useEffect} from "react";

function Adduser() {
  const [data ,setData] = useState([])
  const [filter ,setFilter] = useState(true)
  useEffect(() => {
    (async function() {
      const res = await fetch('http://localhost:4000/user/getAllUser')
      const data = await res.json()
      setData(data)
    })()
  }, [data])
  async function deleteUser(id) {
    try{
      await fetch(`http://localhost:4000/admin/deleteUser/${id}`)
    }catch(error){
      console.error(error);
    }
  }
  return (
    <div className='flex-row justify-start ml-24'>

      <div style={{ flex: 20 }} className='mx-5 my-5'>
        <div style={{ flex: 5 }} className=" flex flex-row justify-start text-black text-3xl font-bold">
          <div className='pr-1'>ข้อมูลผู้ใช้งาน</div>
          <div className='text-rose-color'>อาจารย์</div>
        </div>
        <div style={{ flex: 5 }} className='flex flex-row justify-center text-gray-50 text-xl font-bold p-5'>
          <button onClick={() => setFilter(false)} className='flex flex-col rounded-md bg-button-color p-3.5 w-1/5 p-5 m-5 drop-shadow-lg hover:bg-rose-800 active:bg-neutral-800 justify-center items-center'>
            <p>อาจารย์</p>
            <p>{data.filter(item => item.isadmin === 0).length}</p>
          </button>
          <button onClick={() => setFilter(true)} className='flex flex-col rounded-md bg-button-color p-3.5 w-1/5 m-5 p-5 drop-shadow-lg hover:bg-rose-800 active:bg-neutral-800 justify-center items-center' >
            <p>ผู้ดูแลระบบ</p>
            <p>{data.filter(item => item.isadmin === 1).length}</p>

          </button>
        </div>
        <div style={{ flex: 10 }} className='flex flex-row justify-center'>
          <div className='bg-from-color rounded-lg  p-5 mx-10 w-9/12'>
            <form class=" h-60 touch-none justify-brtween m-5 text-name-color">
              {
                data.map((item) => { 
                  if (filter === true) {
                    if (item.isadmin === 1) {
                      return (
                        <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
                          <div className='flex items-center'>
                            <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                            <div className='flex flex-col font-bold'>
                              <p>{item.name} {item.lastname}</p>
                              <p>สถานะ: {item.isadmin == 0 ? "อาจารย์" : "แอดมิน"}</p>
                            </div>
                          </div>
                          <div className='flex items-center mr-2'>
                            <img className='m-2 cursor-pointer' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" onClick={() => deleteUser(item.id)} />
                          </div>
                        </div>
                      )     
                    } else {
                      return (
                        <div></div>
                      )
                    }
                  } else {
                    if (item.isadmin === 0) {
                      return (
                        <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
                          <div className='flex items-center'>
                            <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                            <div className='flex flex-col font-bold'>
                              <p>{item.name} {item.lastname}</p>
                              <p>สถานะ: {item.isadmin == 0 ? "อาจารย์" : "แอดมิน"}</p>
                            </div>
                          </div>
                          <div className='flex items-center mr-2'>
                            <img className='m-2 cursor-pointer' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" onClick={() => deleteUser(item.id)}  />
                          </div>
                        </div>
                      )     
                    } else {
                      return (
                        <div></div>
                      )
                    }
                  }
                })
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adduser;



