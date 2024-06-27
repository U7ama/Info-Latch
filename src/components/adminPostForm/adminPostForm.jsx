"use client"

import React from 'react';
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from '@/lib/action';
import { IoCloudUploadOutline } from "react-icons/io5";

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost,undefined);

  return (
    <div className=' min-h-screen px-28 flex flex-col pt-[140px] pb-20'>
    <form action={formAction} className={styles.container}>
        <h1 className=' flex items-center justify-center py-10 text-2xl font-poppins'>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
       <div className=' flex flex-col gap-5'>
       <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0" placeholder="Title" />
       <input type="text" name="slug" id="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0" placeholder="Slug" />
      
       </div>
       
       
       <textarea id="message" rows="4" className="outline-0 mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Description' ></textarea>
       <div className="my-10">
      <p className="mb-2">Upload Image</p>
    <div className=" border w-full h-[100px] bg-secondary  flex items-center justify-center ">
     
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
       
         <IoCloudUploadOutline className="text-4xl text-primary w-full cursor-pointer"/>
      </label>
      <input
       
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
       
      />
    </div>
    </div>
       <div >
       <button className=' py-2 px-10 bg-tirtry mt-5 text-white font-semibold'>Add</button>
       </div>
        {state?.error}
    </form>
    </div>
  )
}

export default AdminPostForm
