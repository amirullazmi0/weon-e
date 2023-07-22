import { useEffect, useState } from "react"
import ChartItem from "./ChartItem"
import { format, parse } from "date-fns"
import moment from "moment/moment"

const Graph = ({ weekly, monthly, daily, sensor }) => {
    const [iniMonthly, setMonthly] = useState(monthly)
    const [valueBulanan, setValueBulanan] = useState(
        [
            { id: 1, name: "januari", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 2, name: "februari", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 3, name: "maret", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 4, name: "april", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 5, name: "mei", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 6, name: "juni", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 7, name: "juli", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 8, name: "agustur", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 9, name: "september", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 10, name: "oktober", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 11, name: "november", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 12, name: "desember", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
        ]
    )

    const [valueMingguan, setValueMingguan] = useState(
        [
            { id: 1, name: "minggu ke-1", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 2, name: "minggu ke-2", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 3, name: "minggu ke-3", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 4, name: "minggu ke-4", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
        ]
    )

    const [valueHarian, setValueHarian] = useState(
        [
            { id: 1, name: "Senin", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 2, name: "Selasa", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 3, name: "Rabu", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 4, name: "Kamis", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 5, name: "Jumat", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 6, name: "Sabtu", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 7, name: "Minggu", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
        ]
    )
    const [valueJam, setValueJam] = useState(
        [
            { id: 0, name: "00:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 1, name: "01:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 2, name: "02:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 3, name: "03:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 4, name: "04:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 5, name: "05:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 6, name: "06:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 7, name: "07:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 8, name: "08:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 9, name: "09:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 10, name: "10:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 11, name: "11:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 12, name: "12:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 13, name: "13:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 14, name: "14:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 15, name: "15:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 16, name: "16:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 17, name: "17:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 18, name: "18:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 19, name: "19:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 20, name: "20:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 21, name: "21:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 22, name: "22:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
            { id: 23, name: "23:00", tahun: 0, jumlah: 0, value1: 0, value2: 0, value3: 0, value4: 0, value5: 0, },
        ]
    )


    const iniBulanan = () => {

        const date = new Date()
        let jmlh = 1
        let v1 = 0
        let v2 = 0
        let v3 = 0
        let v4 = 0
        let v5 = 0
        for (let i = 0; i < sensor.length; i++) {
            const dateTime = new Date(sensor[i].created_at)
            const tanggal = dateTime.getDate()
            const bulan = dateTime.getMonth() + 1
            const tahun = dateTime.getFullYear()

            for (let j = 0; j < valueBulanan.length; j++) {
                if ((bulan == valueBulanan[j].id)) {
                    const newValueBulanan = [...valueBulanan];
                    v1 += parseFloat(sensor[i].value1)
                    v2 += parseFloat(sensor[i].value2)
                    v3 += parseFloat(sensor[i].value3)
                    v4 += parseFloat(sensor[i].value4)
                    v5 += parseFloat(sensor[i].value5)
                    newValueBulanan[j].tahun = tahun;
                    newValueBulanan[j].jumlah = jmlh++;
                    newValueBulanan[j].value1 = (v1 / valueBulanan[j].jumlah).toFixed(2);
                    newValueBulanan[j].value2 = (v2 / valueBulanan[j].jumlah).toFixed(2);
                    newValueBulanan[j].value3 = (v3 / valueBulanan[j].jumlah).toFixed(2);
                    newValueBulanan[j].value4 = (v4 / valueBulanan[j].jumlah).toFixed(2);
                    newValueBulanan[j].value5 = (v5 / valueBulanan[j].jumlah).toFixed(2);
                }
            }

        }
    }
    const iniMingguan = () => {
        const date = new Date()
        const tanggalIni = date.getDate()
        const hariIni = date.getDay()
        const bulanIni = date.getMonth() + 1
        const tahunIni = date.getFullYear()

        let jmlh1 = 1
        let jmlh2 = 1
        let jmlh3 = 1
        let jmlh4 = 1
        let v11 = 0
        let v21 = 0
        let v31 = 0
        let v41 = 0
        let v51 = 0

        let v12 = 0
        let v22 = 0
        let v32 = 0
        let v42 = 0
        let v52 = 0

        let v13 = 0
        let v23 = 0
        let v33 = 0
        let v43 = 0
        let v53 = 0

        let v14 = 0
        let v24 = 0
        let v34 = 0
        let v44 = 0
        let v54 = 0

        for (let i = 0; i < sensor.length; i++) {
            const dateTime = new Date(sensor[i].created_at)
            const tanggal = dateTime.getDate()
            const bulan = dateTime.getMonth() + 1
            const tahun = dateTime.getFullYear()


            if ((bulan == bulanIni) && (tanggal <= 7) && (tahun == tahunIni)) {
                // console.log('minggu 1 : ', tanggal, bulan);
                const newValueMingguan = [...valueMingguan];
                v11 += parseFloat(sensor[i].value1)
                v21 += parseFloat(sensor[i].value2)
                v31 += parseFloat(sensor[i].value3)
                v41 += parseFloat(sensor[i].value4)
                v51 += parseFloat(sensor[i].value5)
                newValueMingguan[0].tahun = tahun;
                newValueMingguan[0].jumlah = jmlh1++;
                newValueMingguan[0].value1 = (v11 / valueMingguan[0].jumlah).toFixed(2);
                newValueMingguan[0].value2 = (v21 / valueMingguan[0].jumlah).toFixed(2);
                newValueMingguan[0].value3 = (v31 / valueMingguan[0].jumlah).toFixed(2);
                newValueMingguan[0].value4 = (v41 / valueMingguan[0].jumlah).toFixed(2);
                newValueMingguan[0].value5 = (v51 / valueMingguan[0].jumlah).toFixed(2);

            } else if ((bulan == bulanIni) && (tanggal > 7 && tanggal <= 14) && (tahun == tahunIni)) {
                // console.log('minggu 2 : ', sensor[i].created_at, bulan);
                const newValueMingguan = [...valueMingguan];
                v12 += parseFloat(sensor[i].value1)
                v22 += parseFloat(sensor[i].value2)
                v32 += parseFloat(sensor[i].value3)
                v42 += parseFloat(sensor[i].value4)
                v52 += parseFloat(sensor[i].value5)
                newValueMingguan[1].tahun = tahun;
                newValueMingguan[1].jumlah = jmlh2++;
                newValueMingguan[1].value1 = (v12 / valueMingguan[1].jumlah).toFixed(2);
                newValueMingguan[1].value2 = (v22 / valueMingguan[1].jumlah).toFixed(2);
                newValueMingguan[1].value3 = (v32 / valueMingguan[1].jumlah).toFixed(2);
                newValueMingguan[1].value4 = (v42 / valueMingguan[1].jumlah).toFixed(2);
                newValueMingguan[1].value5 = (v52 / valueMingguan[1].jumlah).toFixed(2);

            } else if ((bulan == bulanIni) && (tanggal > 14 && tanggal <= 21) && (tahun == tahunIni)) {
                const newValueMingguan = [...valueMingguan];
                v13 += parseFloat(sensor[i].value1)
                v23 += parseFloat(sensor[i].value2)
                v33 += parseFloat(sensor[i].value3)
                v43 += parseFloat(sensor[i].value4)
                v53 += parseFloat(sensor[i].value5)
                newValueMingguan[2].tahun = tahun;
                newValueMingguan[2].jumlah = jmlh3++;
                newValueMingguan[2].value1 = (v13 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value2 = (v23 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value3 = (v33 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value4 = (v43 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value5 = (v53 / valueMingguan[2].jumlah).toFixed(2);

            } else if ((bulan == bulanIni) && (tanggal > 21) && (tahun == tahunIni)) {
                const newValueMingguan = [...valueMingguan];
                v14 += parseFloat(sensor[i].value1)
                v24 += parseFloat(sensor[i].value2)
                v34 += parseFloat(sensor[i].value3)
                v44 += parseFloat(sensor[i].value4)
                v54 += parseFloat(sensor[i].value5)
                newValueMingguan[2].tahun = tahun;
                newValueMingguan[2].jumlah = jmlh4++;
                newValueMingguan[2].value1 = (v14 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value2 = (v24 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value3 = (v34 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value4 = (v44 / valueMingguan[2].jumlah).toFixed(2);
                newValueMingguan[2].value5 = (v54 / valueMingguan[2].jumlah).toFixed(2);

            }

        }
    }
    const iniHarian = () => {
        const date = new Date()
        const tanggalIni = date.getDate()
        const hariIni = date.getDay()
        const bulanIni = date.getMonth() + 1
        const tahunIni = date.getFullYear()

        let jmlh = [
            1, 1, 1, 1, 1, 1, 1
        ]
        let v1 = [
            0, 0, 0, 0, 0, 0, 0
        ]
        let v2 = [
            0, 0, 0, 0, 0, 0, 0
        ]
        let v3 = [
            0, 0, 0, 0, 0, 0, 0
        ]
        let v4 = [
            0, 0, 0, 0, 0, 0, 0
        ]
        let v5 = [
            0, 0, 0, 0, 0, 0, 0
        ]

        for (let i = 0; i < sensor.length; i++) {
            const dateTime = new Date(sensor[i].created_at)
            const tanggal = dateTime.getDate()
            const hari = dateTime.getDay()
            const bulan = dateTime.getMonth() + 1
            const tahun = dateTime.getFullYear()

            for (let j = 0; j < valueHarian.length; j++) {
                if ((hari == valueHarian[j].id) && (bulan == bulanIni)) {

                    const newValueHarian = [...valueHarian];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueHarian[j].tahun = tahun;
                    newValueHarian[j].jumlah = jmlh[j]++;
                    newValueHarian[j].value1 = (v1[j] / valueHarian[j].jumlah).toFixed(2);
                    newValueHarian[j].value2 = (v2[j] / valueHarian[j].jumlah).toFixed(2);
                    newValueHarian[j].value3 = (v3[j] / valueHarian[j].jumlah).toFixed(2);
                    newValueHarian[j].value4 = (v4[j] / valueHarian[j].jumlah).toFixed(2);
                    newValueHarian[j].value5 = (v5[j] / valueHarian[j].jumlah).toFixed(2);
                }
            }

        }
    }

    const iniJam = () => {
        const date = new Date()
        const waktuIni = format(date, 'HH:mm')

        let jmlh = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]
        let v1 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
        let v2 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
        let v3 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
        let v4 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
        let v5 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]

        for (let i = 0; i < sensor.length; i++) {
            const dateTime = new Date(sensor[i].created_at)
            const waktu = format(dateTime, 'HH:mm')
            const tahun = dateTime.getFullYear()
            for (let j = 0; j < valueJam.length; j++) {
                if (j == 0 && (moment(waktu, "HH:mm").isBefore(moment("01:00", "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if (j == valueJam.length - 1 && (moment(waktu, "HH:mm").isAfter(moment(valueJam[valueJam.length - 1].name, "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 1) && (moment(waktu, "HH:mm").isAfter(moment('01:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('02:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 2) && (moment(waktu, "HH:mm").isAfter(moment('02:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('03:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 3) && (moment(waktu, "HH:mm").isAfter(moment('03:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('04:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 4) && (moment(waktu, "HH:mm").isAfter(moment('04:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('05:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 5) && (moment(waktu, "HH:mm").isAfter(moment('05:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('06:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 6) && (moment(waktu, "HH:mm").isAfter(moment('06:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('07:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 7) && (moment(waktu, "HH:mm").isAfter(moment('07:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('08:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 8) && (moment(waktu, "HH:mm").isAfter(moment('08:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('09:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 9) && (moment(waktu, "HH:mm").isAfter(moment('09:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('10:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 10) && (moment(waktu, "HH:mm").isAfter(moment('10:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('11:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 11) && (moment(waktu, "HH:mm").isAfter(moment('11:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('12:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 12) && (moment(waktu, "HH:mm").isAfter(moment('12:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('13:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 13) && (moment(waktu, "HH:mm").isAfter(moment('13:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('14:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 14) && (moment(waktu, "HH:mm").isAfter(moment('14:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('15:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 15) && (moment(waktu, "HH:mm").isAfter(moment('15:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('16:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 16) && (moment(waktu, "HH:mm").isAfter(moment('16:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('17:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 17) && (moment(waktu, "HH:mm").isAfter(moment('17:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('18:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 18) && (moment(waktu, "HH:mm").isAfter(moment('18:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('19:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 19) && (moment(waktu, "HH:mm").isAfter(moment('19:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('20:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 20) && (moment(waktu, "HH:mm").isAfter(moment('20:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('21:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 21) && (moment(waktu, "HH:mm").isAfter(moment('21:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('22:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                } else if ((j == 22) && (moment(waktu, "HH:mm").isAfter(moment('22:00', "HH:mm"))) && (moment(waktu, "HH:mm").isBefore(moment('23:00', "HH:mm")))) {
                    const newValueJam = [...valueJam];
                    v1[j] += parseFloat(sensor[i].value1)
                    v2[j] += parseFloat(sensor[i].value2)
                    v3[j] += parseFloat(sensor[i].value3)
                    v4[j] += parseFloat(sensor[i].value4)
                    v5[j] += parseFloat(sensor[i].value5)
                    newValueJam[j].tahun = tahun;
                    newValueJam[j].jumlah = jmlh[j]++;
                    newValueJam[j].value1 = (v1[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value2 = (v2[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value3 = (v3[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value4 = (v4[j] / valueJam[j].jumlah).toFixed(2);
                    newValueJam[j].value5 = (v5[j] / valueJam[j].jumlah).toFixed(2);
                }
            }

        }
    }
    return (
        <>
            {iniJam()}
            {iniHarian()}
            {iniBulanan()}
            {iniMingguan()}
            <div className="card-graph lg:p-4 p-2">
                <div className="card-graph-body p-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center all-sensor overflow-x-auto">
                        <ChartItem
                            title={"Grafik Per Jam"}
                            values={valueJam}
                        />
                        <ChartItem
                            title={"Grafik Per Hari"}
                            values={valueHarian}
                        />
                        <ChartItem
                            title={"Grafik Per Minggu"}
                            values={valueMingguan}
                        />
                        <ChartItem
                            title={"Grafik Per Bulan"}
                            values={valueBulanan}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph    