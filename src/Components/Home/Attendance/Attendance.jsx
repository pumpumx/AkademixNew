import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Subject, Profile, ChartAnalysis } from '../../index'
import axios from 'axios'
function Attendance(id="101") {

  const [attendanceData , setAttendanceData]  = useState([])

 
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(`http://localhost:82/Php/attendance.php?userid=${101}`);
        console.log("Full Response:", res);
        
        if (res.data && res.data.status === 'success') {
          // Log the actual data
          console.log("Attendance Data:", res.data.data);
          setAttendanceData(res.data.data); // Set the data
        } else {
          setError('No attendance data found.');
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchAttendance();
  }, [id]);

  return (
    <>
      <div className='w-full h-[100vh] bg-gray-300 '>
        <nav className='w-full h-[15%] flex justify-center items-center'>
          <div className="profile w-[70%] h-[80%] bg-orange-400 rounded-lg justify-center flex items-center">
            <Profile id={id} />
          </div>
        </nav>
        <div className=" flex flex-grow gap-4 h-[60%] w-full justify-center items-center ">
          <div className='w-[35%]  h-full flex flex-col gap-2 justify-between text-center'>
            {attendanceData.map((e) => ( //Change temp with the SubjectCodes array.
              <div key={nanoid()}>
                <Subject SubjectDescription={e.description} subjectCode={e.code} attendance={e.Attendance} bgColor={true}/>
              </div>
            ))}
          </div>
          <div className="chartAnalysis w-[35%] rounded-xl  h-full bg-white">
            <ChartAnalysis />
          </div>
        </div>

        <div className="footer w-[70%]  text-wrap inline-block justify-left sm:text-xs h pl-[15%] mt-[2%]">
          <p className='text-red-500 text-sm'>
            
            1. The attendance report is a provisional report only. <br />
            2. The attendance report may not include duty leave benefit that has not been punched in the database. <br />
            3. The attendance report does not include any bonus attendance benefits for the previous terms as applicable in the rules. <br />
            4. The attendance for courses with G Grade will not be counted in the aggregate attendance calcuated at time of End Term Exam. <br />
            5.  Attendance of Non-credited Placement classes will be added towards the final attendance.</p>
        </div>
      </div>

    </>
  )
}

export default Attendance