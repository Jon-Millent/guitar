var XLSX = require('xlsx')

class ExcelTool{
  constructor(exportElement){
    this.outFile = exportElement
  }

  downloadExl (json, downName, type) {  // 导出到excel
    let keyMap = [] // 获取键
    for (let k in json[0]) {
      keyMap.push(k)
    }
    let tmpdata = [] // 用来保存转换好的json
    json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
      v: v[k],
      position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
      tmpdata[v.position] = {
        v: v.v
      }
    })
    let outputPos = Object.keys(tmpdata)  // 设置区域,比如表格从A1到D10
    let tmpWB = {
      SheetNames: ['mySheet'], // 保存的表标题
      Sheets: {
        'mySheet': Object.assign({},
          tmpdata, // 内容
          {
            '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
          })
      }
    }
    let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
      {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
    ))], {
      type: ''
    })  // 创建二进制对象写入转换好的字节流
    var href = URL.createObjectURL(tmpDown)  // 创建对象超链接
    this.outFile.download = downName + '.xlsx'  // 下载名称
    this.outFile.href = href  // 绑定a标签
    this.outFile.click()  // 模拟点击实现下载
    setTimeout(function () {  // 延时释放
      URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
    }, 100)
  }
  analyzeData (data) {  // 此处可以解析导入数据
    return data
  }
  dealFile (data) {   // 处理导入的数据
    this.imFile.value = ''
    this.fullscreenLoading = false
    if (data.length <= 0) {
      this.errorDialog = true
      this.errorMsg = '请导入正确信息'
    } else {
      this.excelData = data
    }
  }
  s2ab (s) { // 字符串转字符流
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF
    }
    return buf
  }
  getCharCol (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    let s = ''
    let m = 0
    while (n > 0) {
      m = n % 26 + 1
      s = String.fromCharCode(m + 64) + s
      n = (n - m) / 26
    }
    return s
  }
  fixdata (data) {  // 文件流转BinaryString
    var o = ''
    var l = 0
    var w = 10240
    for (; l < data.byteLength / w; ++l) {
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
    }
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
    return o
  }


  exportExcel (name, rs) {
    let data = [{}]
    for (let k in rs[0]) {
      data[0][k] = k
    }
    data = data.concat(rs)
    this.downloadExl(data, name)
  }
}



export default ExcelTool
