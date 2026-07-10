
export default function ExportPanel(){

return(

<section className="bg-white rounded-lg shadow p-6">


<h2 className="text-2xl font-semibold mb-4">
Export Options
</h2>


<div className="flex gap-4">


<button className="bg-blue-500 text-white px-5 py-2 rounded">

PNG

</button>


<button className="bg-blue-500 text-white px-5 py-2 rounded">

SVG

</button>


<button className="bg-blue-500 text-white px-5 py-2 rounded">

PDF

</button>


</div>


</section>


)

}