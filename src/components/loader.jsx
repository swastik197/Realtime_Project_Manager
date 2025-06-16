import {HashLoader,FadeLoader  } from 'react-spinners';

function Loader() {
  return (
    <div className="flex justify-center items-center h-fit m-2 ">
      <FadeLoader />
    </div>
  );
}
export default Loader