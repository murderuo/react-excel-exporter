import './App.css';
import ExportExcel from './components/ExportExcel';

function App() {
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

export default App;
