import React, { useState } from "react";

const DragDrop = () => {
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);

  //  handle add
  const handleAdd = (e) => {
    if (list?.length < 1) {
      setUpdate(!update);
      const selectedFile = e.target.files;
      console.log("selectedFile", selectedFile);
      const selectedFilesArray = Array.from(selectedFile);
      console.log("selectedFilesArray", selectedFilesArray);

      const imageArray = selectedFilesArray?.map((a) => {
        let fileName = a?.name;
        let fileSize = a?.size;

        const arrObjImg = { fileName: fileName, fileSize: fileSize };
        return arrObjImg;
      });

      setList(list.concat(imageArray));
    }
  };

  // handle delte
  const handleDelete = (item) => {
    setList(list?.filter((res) => res !== item));
  };

  function getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes /= 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }

  console.log("list", list);

  return (
    <div className="wrapper">
      <div className="dragDrop">
        <div className="dragDrop_uploader">
          <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e) => handleAdd(e)}
          />
        </div>
        <i class="fa-solid dragDrop_cloudIcon fa-cloud-arrow-up"></i>
        <div className="dragDrop_text">
          <p>
            Drag and Drop or <span className="browser">browse</span>{" "}
          </p>
        </div>
      </div>

      <div className="dragDrop_dragDropList">
        {list?.map((item) => {
          return (
            <div className="dragDrop_list shadow">
              <div style={{ display: "flex" }}>
                <i class="fa-solid csvIcon fa-file-csv"></i>
                <div className="dragDrop_fileName">
                  <p className="file">{item?.fileName}</p>
                  <p className="fileSize">
                    {getReadableFileSizeString(item?.fileSize)}
                  </p>
                </div>
              </div>
              <i
                onClick={() => handleDelete(item)}
                class="fa-solid trashIcon fa-trash"
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragDrop;