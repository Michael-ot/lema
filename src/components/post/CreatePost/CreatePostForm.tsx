import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { CreatePostFormValues } from '../../../features/post/types';

interface CreatePostFormProps {
    onSubmit: (values: CreatePostFormValues) => void;
    isSubmitting: boolean;
    onCancel: () => void;
}

const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Content is required"),
});

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSubmit, isSubmitting, onCancel, }) => {
    const initialValues: CreatePostFormValues = {
        title: "",
        body: "",
    };

      
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        <Form>
          <div className="mb-6">
            <label className="block font-medium text-gray-600 mb-2">
              Post title
            </label>
            <Field
              name="title"
              placeholder="Give your post a title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-6">
              <label className="block font-medium text-gray-600 mb-2">
                Post content
              </label>
            <Field
              as="textarea"
              name="body"
              placeholder="Write something mind-blowing"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <ErrorMessage
              name="body"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Publish"}
            </button>
          </div>
        </Form>
      </Formik>
    );
}

export default CreatePostForm;
