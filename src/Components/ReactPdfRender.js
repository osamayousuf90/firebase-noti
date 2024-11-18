import React from 'react'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const ReactPdfRender = () => {

    // Create styles
    const styles = StyleSheet.create({
        page: {
            padding: 20,
        },
        section: {
            margin: 10,
            padding: 10,
        },
        text: {
            fontSize: 12,
            marginBottom: 10,
        },
    });

    return (
        <div>
            <h1>Download PDF</h1>
            <PDFDownloadLink document={<MyDocument />} fileName="multi-page-document.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>

        </div>
    )
}

export default ReactPdfRender