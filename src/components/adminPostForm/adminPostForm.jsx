"use client";

import React from "react";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";
import { IoCloudUploadOutline } from "react-icons/io5";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  console.log("state", state);
  return (
    <div className="min-h-screen px-28 flex flex-col pt-[140px] pb-20">
      <form action={formAction} className={styles.container}>
        <h1 className="flex items-center justify-center py-10 text-2xl font-poppins">
          Add New Post
        </h1>
        <input type="hidden" name="userId" value={userId} />
        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
            placeholder="Title"
          />
          <input
            type="text"
            name="slug"
            id="slug"
            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
            placeholder="Slug"
          />
        </div>

        <textarea
          name="desc"
          rows="4"
          id="desc"
          className="outline-0 mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          name="head"
          id="head"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="Head"
        />

        <input
          type="number"
          name="view_count"
          id="view_count"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="View Count"
        />

        <input
          type="text"
          name="tags"
          id="tags"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="Tags (comma separated)"
        />

        <label className="flex items-center mt-5">
          <input
            type="checkbox"
            name="is_published"
            id="is_published"
            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          />
          <span className="ml-2 text-gray-900">Is Published</span>
        </label>

        <input
          type="date"
          name="publish_date"
          id="publish_date"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
        />

        <input
          type="text"
          name="author"
          id="author"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="Author"
        />

        <textarea
          name="excerpt"
          rows="2"
          className="outline-0 mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Excerpt"
        ></textarea>

        <textarea
          name="content"
          rows="10"
          className="outline-0 mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Content"
        ></textarea>

        <input
          type="number"
          name="read_time"
          id="read_time"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="Read Time (minutes)"
        />

        <div className="my-10">
          <p className="mb-2">Upload Image</p>
          <div className="border w-full h-[100px] bg-secondary flex items-center justify-center">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="featured_image"
            >
              <IoCloudUploadOutline className="text-4xl text-primary w-full cursor-pointer" />
            </label>
            <input
              className="hidden"
              id="featured_image"
              type="file"
              name="featured_image"
            />
          </div>
        </div>
        <div>
          <button className=" py-2 px-10 bg-tirtry mt-5 text-white font-semibold">
            Add
          </button>
        </div>
        {state?.error && <div className="text-red-500 mt-2">{state.error}</div>}
        {state?.success && (
          <div className="text-green-500 mt-2">Post added successfully!</div>
        )}
      </form>
    </div>
  );
};

export default AdminPostForm;
