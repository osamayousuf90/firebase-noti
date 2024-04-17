import React, { useEffect, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import pdfFile from "../Assets/dummy.pdf"
import megaFile from "../Assets/mega.pdf"


// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import axios from 'axios';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [file, setFile] = useState(null)
    // const gettingPdfUrl = async () => {
    //     const pdfUrl = 'https://megastaccount.blob.core.windows.net/userprofile/file.pdf';

    //     // Fetch the base64 encoded string from the API
    //     const res = await axios.post("http://192.168.100.9:8081/franchise/ali", { url: pdfUrl });
    //     const base64String = res?.data?.data;
    //     // setFile(base64String)
    // }

    useEffect(() => {
        const fetchFile = async () => {
            const url = 'https://megastaccount.blob.core.windows.net/userprofile/file.pdf'; // Replace 'your_url_here' with your actual URL
            try {
                const response = await axios.post("http://192.168.100.9:8081/franchise/ali", { url });
                const fileData = response.data?.data; // Assuming the data is already in blob format

                // Convert base64 data to a Blob
                const byteCharacters = atob(fileData);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });

                // Create a URL for the Blob
                const url1 = window.URL.createObjectURL(blob);

                setFile(url1)


            }
            catch (err) {
                console.log(err)
                console.error('Error fetching file:', err);
            }

        };
        fetchFile();
    }, []);


    return (
        <div className='hell'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '750px',
                    }}
                >
                    {file && defaultLayoutPluginInstance && <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />}
                </div>
            </Worker>
        </div>
    );
};

export default PdfViewer;
