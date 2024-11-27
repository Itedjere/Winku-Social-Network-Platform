import React, { useRef } from "react";
import "./PhotoEditorModal.css";
import { FaArrowLeft } from "react-icons/fa";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function PhotoEditorModal({
  showModal,
  closeModal,
  photo,
  handleFileUpload,
  isUploadingPhoto,
}) {
  const cropperRef = useRef(null);

  const handleCrop = async () => {
    const cropper = cropperRef.current.cropper;
    const croppedBlob = await new Promise(
      (resolve) =>
        cropper
          .getCroppedCanvas({
            width: 200, // Desired width
            height: 200, // Desired height
          })
          .toBlob(resolve) // Get cropped image as a Blob
    );
    handleFileUpload(croppedBlob);
  };

  return (
    <div className={`photoWrapper ${showModal ? "show" : ""}`}>
      <div className="photoContainer">
        <div className="photoModal">
          <div className="row mb-3">
            <div className="col-2 left-btn">
              <button type="button" onClick={() => closeModal(false)}>
                <FaArrowLeft />
              </button>
            </div>
            <div className="col-5">
              <h5 className="m-0">Edit Media</h5>
            </div>
            <div className="col-5 right-btn">
              <button type="button" onClick={handleCrop}>
                {isUploadingPhoto ? "Uploading photo..." : "Apply Changes"}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {photo && (
                <Cropper
                  src={photo}
                  style={{ height: 400, width: "100%" }}
                  aspectRatio={1} // Makes the crop area square
                  ref={cropperRef}
                  movable={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
