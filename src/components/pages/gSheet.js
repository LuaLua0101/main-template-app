import React, { useEffect, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";

const CLIENT_EMAIL = "gg-sheet@reliable-proton-326209.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCXG6+/0DqxMWXr\n/f0vgdwMQZSWJb/tHtu/iy6SRHgzllK+YEAv67Xij0LQVkqiBoaNSUK3jyLTNXD6\nRUKNPzT0uSl3oKKk26hkWSxd8ZANOcl1pT6oMIdfXTDTCWyelkSJvMX7JgpaCoJa\nl1qPn5JLkSbOG37a+u+WAeThHw97RxA2OXg0GbEntkwmMd78xIGkZRWc7sJS69pP\nfBIujEzjgOwMmF8EhylgEErtLT33UK2V0OXup6gMCuMdoRRnZ0a/kEq+I1E3KY2N\n6xd38I2UvnQgy1kfaMb4HaS0R5b5pqVKp+qnitS4IBFcLRZnzmAtTCaNeyZDJPmj\n3xVkwv7nAgMBAAECggEAHQssxhTrWwhwGyJn6hwvI8ntGcjqsVRXj2Lcki+H3P59\nK+tLGwrWnFPF105mrOrNLNXSdX6VBnyEmQ374zMtZgY64qvk5wPzQ0pifTIDao9b\nWfnnZ6NgOaOrUTzD/F1Mkh7O/N1Maw8PDAOAXA+jKlQdXcsqIEPQDgiSKfTy4FI1\n/fgUYnnp2nwXeu0Fpd0wtrJn/SvQjjlWHhCYxmuGdJtyJyrve/RQEZPWgxyyJiCV\nh6ge6rEBcqD1/+Ftb+hcPDvZ7hQez1jv0MtbbUZaPZe7I87xwPOux2fMGPuNPPJo\nzMKPKE8744t1pduA+aJKzWhFtIORNJCGOoDxitw9/QKBgQDVjE+cvFG6Z8A8m6hH\nnbK4nr+vT+j6vO2xh5Ab4n7maCn81GUwlk8JfzZq2lpZMp4AfWIC+AX/wIP8fcRY\n/dcQ7Mt0THzc6nTKOSjL7Z/d26atBxW0/PupN110kKr2dtzwdgUdCb/SpRLJ0e4q\ny52gg2Qa+QQa/iVJakV6TwMN/QKBgQC1Jb2ghQP7QORewqESuYqDWLl5ncz+BUOW\nFKMYy5Lf9eE3vX9UNqPBVmRDfsQIOcEaNI6pBqsA0dq4jiG+Lf2BR/XX8GognrHV\nSsGpGu3A03ZyvQjShinFWxU1rn80bsGp333JTOYqeJlvD+CVel4KPtUnEj/U9A6u\nTcw1mwNDswKBgDAaslhhR5vRAUnl2ot/Z6IVCKMKQjYxVu311q2hYOqwLj0o7z55\nrYY7JNv/IfkT4OnFVM3MZzWMfW7kOdW+ILNMVCx3im0NV4+yPpFpjuigMTSq8uXZ\nUyt0MFYwvIJWlkCIpXA8IPzneIsEAj2brn9Y+bTlwVn/RBD8ongB0nNVAoGACZMd\nGsbtFvKvH3MaIGs+LwMZipwUobiVgfFFTaI0+TF93fxeJo1cynNOiWLB6c1jr4bn\no3d+wmRVMzwP/IVhyNuM2wUSFvdMXwG8iruppW+H6ziipr4ApzXRQS0f/B1+jwQJ\nGgK+h7AoK/6i2EPHhLMdgRst1Iux2vSxvoObAJECgYBfi2SIdrCkWnGNMvVUX0Rk\n8SFUmTvQbpokq64VuVPsj4yDE0+j+iPbL0dbgV+y+sE7fzsiEajPcq7Ezn+4YUH/\nik2Lhz7cQRztWfBJvNazT3SPxSGE0ifMR/NtsPr1LEeyqaT0l5pvK39aG0EW+cdT\ngmmzrtAdO8kN1b0VBtrc/Q==\n-----END PRIVATE KEY-----\n";
const FIRST_SKU_IX = 6;
const SKU_COL = "C";
const TEST_DATA = [
  {
    date_formatted: "9/1/2021",
    group_brand: null,
    opollo_group_brand_id: null,
    opollo_product_id: 7296,
    platform: "lazada",
    qty: 123.0,
    sku: "8999999527563",
  },
  {
    date_formatted: "19/22/2021",
    group_brand: null,
    opollo_group_brand_id: null,
    opollo_product_id: 7296,
    platform: "lazada",
    qty: 7654.0,
    sku: "8999999527679",
  },
  {
    date_formatted: "9/3/2021",
    group_brand: null,
    opollo_group_brand_id: null,
    opollo_product_id: 7296,
    platform: "lazada",
    qty: 11992.0,
    sku: "404",
  },
];

const GSheet = ({ props }) => {
  const [reload, setReload] = useState(1);
  const [loading, setLoading] = useState(false);
  const [startCol, setStartCol] = useState("OE");
  const [url, setUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1jjBEEyKxdqV1TLIMUfOB_r5h7B2Klhw2_E5eRl6WYzg/edit#gid=299026062"
  );
  const [data, setData] = useState(TEST_DATA);

  const appendSpreadsheet = async (doc) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[1];
      const lastCol = sheet.lastColumnLetter;

      // Mapping date with A1-style column
      const headerMap = new Map();
      await sheet.loadCells(
        `${startCol}${FIRST_SKU_IX}:${lastCol}${FIRST_SKU_IX}`
      );
      const headers = sheet._cells[sheet._cells.length - 1].filter((n) => n);
      headers.map((day) => {
        const sku = sheet.getCellByA1(day.a1Address);
        headerMap.set(
          sku._rawData.formattedValue,
          sku.a1Address.replace(/\d+/g, "")
        );
      });

      // console.log(headerMap);

      let skuMap = [];
      await sheet.loadCells(`${SKU_COL}:${SKU_COL}`);
      const n = sheet._cells.length + 1;
      for (let i = FIRST_SKU_IX + 1; i < n; i++) {
        const sku = sheet.getCellByA1(`C${i}`);
        skuMap.push({ sku: sku.value, row: sku.a1Address.match(/\d+/)[0] });
      }

      // console.log(skuMap);

      await sheet.loadCells([
        `${SKU_COL}:${SKU_COL}`,
        `${startCol}:${lastCol}`,
      ]);
      data.map((item) => {
        const { sku, qty, date_formatted } = item;
        const row = skuMap.find((i) => i.sku === sku);
        const col = headerMap.get(date_formatted);
        if (row && col) {
          const cell = sheet.getCellByA1(`${col}${row.row}`);
          cell.value = qty;
        }
      });
      await sheet.saveUpdatedCells();
    } catch (e) {
      console.error("Error: ", e);
      console.log("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    var matches = /\/([\w-_]{15,})\/(.*?gid=(\d+))?/.exec(url);
    if (matches) {
      setLoading(true);
      appendSpreadsheet(new GoogleSpreadsheet(matches[1]));
    } else {
      console.log("An error occurred. Please try again.");
    }
  }, []);

  return loading ? 'true' : 'false';
};

export default GSheet;
