export function exportCSV(headers, totalData, fileName) {
    if (!totalData || !totalData.length) {
        return null
    }
    const jsonObj = JSON.stringify(totalData)
    const result = convertToCSV(jsonObj, headers)
    if (!result) {
        return null
    }
    const blob = new Blob([result])
    const expoetFile = fileName ? fileName + '.csv' : 'ram.csv'
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, expoetFile)
    }
    else if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
        const link = window.document.createElement('a')
        link.href = "data:text/csv;charset=UTF-8," + encodeURI(result);
        link.target = "_blank"
        link.download = expoetFile
        link.click()
    }
    else {
        const link = window.document.createElement('a')
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', expoetFile)
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

        }
    }
}

function convertToCSV(arrayObject, headers) {
    const columnLimit = ","
    const lineLimit = "\r\n"
    const actualData = Object.keys(headers)
    const showData = Object.values(headers)
    let str = ''
    str += showData.join(columnLimit)
    str += lineLimit
    const data = typeof arrayObject !== "object" ? JSON.parse(arrayObject) : arrayObject
    data.forEach(obj => {
        let line = ''
        actualData.forEach(key => {
            if (line != '') {
                line += columnLimit
            }
            let item = obj[key] + ''
            line += item ? line += item.replace(/,/g, '') : item
        });
        line += item + lineLimit
    });
    return str
}