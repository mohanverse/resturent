import React from 'react'

function Gallry() {
  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
			<span className="dark:text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://images.pexels.com/photos/4253317/pexels-photo-4253317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/12281239/pexels-photo-12281239.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/14121822/pexels-photo-14121822.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/5864303/pexels-photo-5864303.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/5865286/pexels-photo-5865286.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/4551415/pexels-photo-4551415.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2020/03/16/01/58/food-4935455_640.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" />
		<img src="https://images.pexels.com/photos/1297340/pexels-photo-1297340.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
      
    </>
  )
}

export default Gallry
