import React from 'react'
import ReactPDF, { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  column: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: 100
  },
  row: {
    display:'flex',
    flexDirection: 'row',
    alignItems:"flex-start"
  },
  header:{
    backgroundColor:'white'
  }
});

function Pdf() {

    const data = [
      {
        idSta: 11,
        nomSta: 'agbla',
        prenomSta: 'jacques',
        telSta: 74512132,
        adrSta: 'atilamonou'
      },
      {
        idSta: 12,
        nomSta: 'konou',
        prenomSta: 'winner',
        telSta: 74512365,
        adrSta: 'adidogome'
      }
    ,
      {
        idSta: 11,
        nomSta: 'agbla',
        prenomSta: 'jacques',
        telSta: 74512132,
        adrSta: 'atilamonou'
      },
      {
        idSta: 12,
        nomSta: 'konou',
        prenomSta: 'winner',
        telSta: 74512365,
        adrSta: 'adidogome'
      }
    ,
      {
        codMS: 'adpa78',
        nomMS: 'ADOBOE',
        prenomMS: 'PATRIC',
        telMS: 78549465,
        adrMS: 'YOKOE'
      },
      {
        codMS: 'DAV74',
        nomMS: 'DAVON',
        prenomMS: 'NICOLAS',
        telMS: 74512365,
        adrMS: 'AGOE'
      }
    ]

    return (
      
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={{...styles.row, ...styles.header}}>
            {
              Object.keys(data[0]).map((column, index)=>(
                index!=0?
                <View style={styles.column}>
                  {column}
                </View>:
                undefined
              ))
            }
            </View>
            {data.map((row)=>(
              <View style={styles.row}>
                {Object.keys(row).map((column,index)=>(
                  index!=0?
                  <View style={styles.column}>
                    {row[column]}
                  </View>:
                  undefined
                ))}
              </View>
            ))}
            </Page>

        </Document>
    )
}

export default Pdf
