// function createProject(){
// return(
//     <>
//     <section className="h-screen" >
//         <div className="h-64 w-48 bg-amber-600"></div>
//         </section></>
// )
// }
// export default createProject

export default function CreateProject() {
  return (
    <div className="w-96">
      <h2 className="text-xl font-bold mb-4">Create New Project</h2>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Project Name" 
          className="w-full border p-2 rounded"
        />
        <textarea 
          placeholder="Description" 
          className="w-full border p-2 rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}