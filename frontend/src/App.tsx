
import Footer from "./components/Footer"  
// import Workspace from "./components/Workspace"

import Header from "./components/Header/Header";
import DataInput from "./components/DataInput/DataInput";
import GraphSettings from "./components/GraphSettings/GraphSettings";
import GraphPreview from "./components/GraphPreview/GraphPreview";
import ExportPanel from "./components/ExportPanel/ExportPanel";


function App(){

return(

<div className="min-h-screen bg-gray-100 p-8">


<Header/>


<main className="max-w-5xl mx-auto space-y-8">


<DataInput/>


<GraphSettings/>


<GraphPreview/>


<ExportPanel/>


</main>


   <Footer/>


</div>

)

}


export default App;