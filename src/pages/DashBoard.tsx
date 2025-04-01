import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Plus } from "../icons/plusIcon";
import { Share } from "../icons/shareIcon";
import { CreateContentModal } from "../components/createContentModal";
import { useState, useEffect } from "react";
import { SideBar } from "../components/ui/sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <SideBar />
      <div className="p-4 ml-72 bg-gray-200 min-h-screen border-l border-gray-400">
        <div className="flex justify-end gap-4 pt-3 ml-72">
          <Button
            variant="secondary"
            size="md"
            text="Add Content"
            startIcon={<Plus size="md" />}
            onClick={() => {
              setModalOpen(true);
            }}
          />
          {/* <Button
            variant="primary"
            size="md"
            text="Share Brain"
            startIcon={<Share size={"md"} />}
            onClick={() => alert("Button Clicked!")}
          /> */}

          <Button
            onClick={async () => {
              // Making a POST request to share the brain content
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"), // Passing the authorization token in the request header
                  },
                }
              );
              // Constructing the share URL and alerting the user with the link
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            variant="primary"
            text="Share brain"
            size="md"
            startIcon={<Share size={"md"} />}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card type={type} link={link} title={title} />
          ))}
        </div>

        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default DashBoard;
