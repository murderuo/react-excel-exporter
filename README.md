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

## License

MIT © [murderuo](https://github.com/murderuo)
