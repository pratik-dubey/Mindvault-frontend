//  inset-0 is equivalent to top-0 left-0 right-0 bottom-0 and it is used to make the div take full screen and also to center the child

import { Cross } from "../icons/crossIcon";
import { Button } from "./ui/button";
import InputHolder from "./inputHolder";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

// @ts-ignore
export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    alert("Content Added");
    onClose();
  }
  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Separate backdrop with opacity */}
          <div className="absolute inset-0 bg-slate-600 opacity-70"></div>

          {/* Modal content without opacity issues */}
          <div className="bg-white rounded-md shadow-lg p-3 z-10">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
              <Cross size="md" />
            </div>
            <div>
              <InputHolder ref={titleRef} placeholder={"Title"} />
              <InputHolder ref={linkRef} placeholder={"Link"} />
              <div className="border shadow-lg border-gray-300">
                <h1 className="text-xl flex justify-center">Select Type</h1>
                <div className="flex gap-2 p-3 pl-6">
                  <Button
                    size="md"
                    variant={
                      type === contentType.Youtube ? "secondary" : "primary"
                    }
                    text="Youtube"
                    onClick={() => {
                      setType(contentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    size="md"
                    variant={
                      type === contentType.Twitter ? "secondary" : "primary"
                    }
                    text="Twitter"
                    onClick={() => {
                      setType(contentType.Twitter);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center mt-4 mb-2">
                {/* addContent is a function reference and is not executed
                immediately. It is only executed when the user clicks the
                button. */}
                <Button
                  onClick={addContent}
                  variant="secondary"
                  text="Submit"
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
