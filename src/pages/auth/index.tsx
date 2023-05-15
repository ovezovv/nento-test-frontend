import React from 'react'

const index = () => {
  return (
    <>
      <h2 className='text-5xl font-bold'>Authentication</h2>
      <div className="max-w-2xl mx-auto">
        <div
          className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-8" action="#">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Authorize with Instagram</h3>
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Username</label>
              <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="john" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default index