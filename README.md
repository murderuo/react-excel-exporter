# react-excel-exports

> You can export your data with react-excel-exports

[![NPM](https://img.shields.io/npm/v/react-excel-exporter.svg)](https://www.npmjs.com/package/react-excel-exporter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-excel-exports
```

## Usage

```jsx
import ExportExcel from 'react-excel-exports'

const App = () => {
  const data = [
    {
      id: '9OS3ml5pnJ_WUs5Ry8_c9',
      checked: false,
      plaka: '34ABC42',
      aciklama: '',
      ucret: 123,
      bakiye: 2333,
    },
    {
      id: 'RgCPwyflE1ytUrTcuiqAM',
      checked: false,
      plaka: '34caa987',
      aciklama: '',
      ucret: 22,
      bakiye: 5000,
    },
    {
      id: 'fUN5bPu4DrOZRR-6AFdHp',
      checked: false,
      plaka: '34ABC42',
      aciklama: '',
      ucret: 22,
      bakiye: 4000,
    },
  ];

  return (
    <div>
      <ExportExcel
        data={data}
        buttonName={'button name'}
        className={'btn btn-primary'}
        disable={data.length === 0}
        fileName={'print_excel_file_name'}
      />
    </div>
  );
}
```

![1 1](https://user-images.githubusercontent.com/10669515/229051737-fbeff563-8ff2-4d7d-8b59-04e9a9d7d3c4.PNG)

![1 2](https://user-images.githubusercontent.com/10669515/229051792-85107e93-7500-4fe9-a44b-e3c882b75b79.PNG)


![2](https://user-images.githubusercontent.com/10669515/229051809-166c3e2e-aa7b-473d-944a-33b5628ec556.PNG)


![2 1](https://user-images.githubusercontent.com/10669515/229051829-e4b41b1d-b373-498f-b0c2-cba500825680.PNG)


![excel_file](https://user-images.githubusercontent.com/10669515/229051857-dab106ae-4d8d-4240-8244-08ddc89fa693.PNG)



## License

MIT © [murderuo](https://github.com/murderuo)
