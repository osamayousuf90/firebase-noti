import React from 'react'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import img from '../Assets/JES-Admin-Portal-Assets-14.png'

const MyDocument = () => {

    // Create styles for the PDF document
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 20,
            width: 100
        },
        section: {
            width : 100,
            margin: 10,
            padding: 10,
            backgroundColor : "#ccc"
        },
        text: {
            fontSize: 12,
            marginBottom: 10,
        },
        image: {
            width: 200,  // Set image width
            height: 200, // Set image height
            marginBottom: 20, // Add some margin below the image
        }
    });
    const base64Image = 'data:image/png;base64,...'; // Your base64 image data
    return (
        <>
            <Document>
                <Page style={styles.page}>
                    <View style={styles.section}>
                        {/* <Text style={styles.text}>This is a PDF document with an image.</Text> */}
                        {/* <Image
                            style={styles.image}
                            src={img} // Replace with your image URL or local path
                        />
                        <Text style={styles.text}>The image above is displayed in the PDF document.</Text> */} 
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default MyDocument