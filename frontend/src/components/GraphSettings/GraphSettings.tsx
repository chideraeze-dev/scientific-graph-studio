export default function GraphSettings(){

return(

<section className="bg-white rounded-lg shadow p-6">


<h2 className="text-2xl font-semibold mb-4">
Graph Settings
</h2>


<div className="space-y-4">


<input
className="border p-2 w-full"
placeholder="Graph Title"
/>


<input
className="border p-2 w-full"
placeholder="X Axis Label"
/>


<input
className="border p-2 w-full"
placeholder="Y Axis Label"
/>


</div>


</section>

)

}