import { useState } from "react";
import { Link, redirect } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/notes", {
        title: title,
        content: content,
      });
      if(res.status === 201) {
        redirect("/")
        toast.success("Success")
      } 
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={() => {setLoading(true)}}>
                <div className="form-control mb-4">
                  <label className="label block mb-4">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    placeholder="Note title"
                    className="input input-bordered block w-full"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                <div className="form-control mb-4">
                  <label htmlFor="" className="label block mb-4">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    value={content}
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32 block w-full"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
