
import PersonIcon from '@mui/icons-material/Person';

import 'react-vertical-timeline-component/style.min.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const files = [
  { title: "design-system.pdf", by: "Mike Chen", size: "2.5 MB" },
  { title: "project-roadmap.xlsx", by: "Sarah Lee", size: "1.2 MB" },
  { title: "user-feedback.csv", by: "James Walker", size: "900 KB" },
  { title: "team-photo.jpg", by: "Emily Davis", size: "3.4 MB" },
  { title: "app-logo.svg", by: "Priya Patel", size: "250 KB" },
  { title: "contract-agreement.docx", by: "Nina Rodriguez", size: "1.8 MB" },
  { title: "release-notes.txt", by: "Oliver King", size: "150 KB" },
  { title: "database-schema.png", by: "Sophia Kim", size: "2.1 MB" },
  { title: "meeting-recording.mp4", by: "David Johnson", size: "45.7 MB" },
  { title: "invoice-2024-04.pdf", by: "Alex Thompson", size: "560 KB" }
];


function Files(){
    return(<>
    
    <div>
            <div className='flex flex-wrap justify-between items-center gap-y-3 my-4'>
              <div className='flex h-fit  gap-2'>

                <label htmlFor="file-upload" className="p-2 w-fit bg-blue-600 rounded-lg flex items-center cursor-pointer gap-2">
                  <FileUploadIcon style={{ color: "white" }} />
                  <p className='text-white'>Upload File</p>
                  <input id="file-upload" type="file" className="hidden" />
                </label>


                <button className='border-2 flex  rounded-lg border-gray-600 items-center p-1 '>
                  <InsertLinkIcon style={{ color: "gray" }} />
                  <p>Add Link</p>
                </button>

              </div>

              <div className='border-2 flex  rounded-lg border-gray-600 items-center p-1 '>
                <InsertDriveFileIcon style={{ color: "gray" }} />
                <input type="text" placeholder="Search files..." name="" id="" className="border-none focus:outline-none focus:ring-0 p-1 w-fit " />
              </div>

            </div>


            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

              {files.map((file) => (
                <div className='p-3 bg-white rounded-lg flex justify-between '>
                  <div className='flex gap-2 items-center'>
                    <FileDownloadIcon fontSize="large" style={{ padding: 4, borderRadius: 10, backgroundColor: "skyblue" }} />
                    <div className=''>
                      <h1 className='text-lg'>{file.title}</h1>
                      <div className='flex gap-2 items-center'>
                        <p className='text-gray-500'>{file.size}</p>
                        <div className='flex my-1 gap-2'><PersonIcon style={{ color: "gray" }} /><p className='text-gray-500'>{file.by}</p></div>

                      </div>
                    </div>
                  </div>
                  <MoreVertIcon style={{ color: 'black' }} />




                </div>
              ))}

            </div>

          </div>
    </>)
}
export default Files